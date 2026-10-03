import React, { useMemo } from 'react';
// @ts-ignore
import DottedMapLib from 'dotted-map';

export interface DottedMapProps {
  dotRadius?: number;
  dotColor?: string;
  grid?: 'diagonal' | 'vertical';
  className?: string;
}

interface SinglePin {
  name: string;
  lat: number;
  lng: number;
  isHub?: boolean;
  labelOffset?: { dx: number; dy: number };
}

export const DottedMap: React.FC<DottedMapProps> = ({
  dotRadius = 0.2,
  dotColor = '#17352F',
  grid = 'diagonal',
  className = '',
}) => {
  const mapInstance = useMemo(() => {
    const MapClass = (DottedMapLib as any).default || DottedMapLib;
    return new MapClass({ height: 50, grid });
  }, [grid]);

  // Base Map Background Dots
  const svgPoints = useMemo(() => {
    try {
      return mapInstance.getPoints();
    } catch {
      return [];
    }
  }, [mapInstance]);

  // Single precise pin per country / location
  const singlePins: SinglePin[] = useMemo(() => [
    { name: 'USA', lat: 37.0902, lng: -95.7129, labelOffset: { dx: 0, dy: -2.0 } },
    { name: 'Canada', lat: 56.1304, lng: -106.3468, labelOffset: { dx: 0, dy: -2.0 } },
    { name: 'UK', lat: 55.3781, lng: -3.4360, labelOffset: { dx: 0, dy: -2.0 } },
    { name: 'UAE', lat: 23.4241, lng: 53.8478, labelOffset: { dx: 0, dy: -2.0 } },
    { name: 'India (Hub)', lat: 13.0827, lng: 80.2707, isHub: true, labelOffset: { dx: 0, dy: 3.0 } },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, labelOffset: { dx: 0, dy: -2.0 } },
    { name: 'Australia', lat: -25.2744, lng: 133.7751, labelOffset: { dx: 0, dy: 3.0 } },
  ], []);

  // Compute exact { x, y } projection for each pin
  const mappedPins = useMemo(() => {
    return singlePins.map((pin) => {
      const pt = mapInstance.getPin({ lat: pin.lat, lng: pin.lng });
      return {
        ...pin,
        x: pt.x,
        y: pt.y,
      };
    });
  }, [singlePins, mapInstance]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 119 50"
        className="w-full h-auto max-h-[480px] object-contain select-none pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        {/* Base Map Dots (+5% darker, uniform 22% opacity) */}
        <g opacity="0.22">
          {svgPoints.map((pt: any, idx: number) => (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r={dotRadius}
              fill={dotColor}
            />
          ))}
        </g>

        {/* Single Pin Marks & Country Labels */}
        <g className="single-pins-layer">
          {mappedPins.map((pin) => {
            const isHub = pin.isHub;
            const dx = pin.labelOffset?.dx || 0;
            const dy = pin.labelOffset?.dy || (isHub ? 3.0 : -2.0);

            return (
              <g key={pin.name}>
                {/* Hub Pulsing Ring */}
                {isHub && (
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="1.8"
                    fill="none"
                    stroke="#B86F55"
                    strokeWidth="0.2"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="0.9; 2.8; 0.9"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8; 0; 0.8"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Single Location Pin Mark */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={isHub ? 1.0 : 0.75}
                  fill={isHub ? '#B86F55' : '#17352F'}
                  stroke="#FFFFFF"
                  strokeWidth="0.3"
                />

                {/* Country / Area Name */}
                <text
                  x={pin.x + dx}
                  y={pin.y + dy}
                  textAnchor="middle"
                  fontSize={isHub ? '1.4' : '1.15'}
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight={isHub ? '700' : '600'}
                  fill={isHub ? '#B86F55' : '#17211F'}
                  className="select-none tracking-wide drop-shadow-xs"
                >
                  {pin.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
