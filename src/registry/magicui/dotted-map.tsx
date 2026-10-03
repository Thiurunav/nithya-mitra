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
    { name: 'USA', lat: 37.0902, lng: -95.7129, labelOffset: { dx: 0, dy: -1.6 } },
    { name: 'Canada', lat: 56.1304, lng: -106.3468, labelOffset: { dx: 0, dy: -1.6 } },
    { name: 'UK', lat: 55.3781, lng: -3.4360, labelOffset: { dx: 0, dy: -1.6 } },
    { name: 'UAE', lat: 23.4241, lng: 53.8478, labelOffset: { dx: 0, dy: -1.6 } },
    { name: 'India (Hub)', lat: 13.0827, lng: 80.2707, isHub: true, labelOffset: { dx: 0, dy: 2.5 } },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, labelOffset: { dx: 0, dy: -1.6 } },
    { name: 'Australia', lat: -25.2744, lng: 133.7751, labelOffset: { dx: 0, dy: 2.5 } },
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
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 119 50"
        className="w-full h-auto max-w-5xl object-contain select-none pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        {/* Base Map Dots (+5% darker, uniform 20% opacity) */}
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
            const dy = pin.labelOffset?.dy || (isHub ? 2.5 : -1.6);

            return (
              <g key={pin.name}>
                {/* Single Location Mark Dot */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={isHub ? 0.9 : 0.7}
                  fill={isHub ? '#B86F55' : '#17352F'}
                  stroke="#FFFFFF"
                  strokeWidth="0.25"
                />

                {/* Country / Area Name */}
                <text
                  x={pin.x + dx}
                  y={pin.y + dy}
                  textAnchor="middle"
                  fontSize={isHub ? '1.3' : '1.1'}
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight={isHub ? '700' : '600'}
                  fill={isHub ? '#B86F55' : '#17211F'}
                  className="select-none tracking-wide"
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
