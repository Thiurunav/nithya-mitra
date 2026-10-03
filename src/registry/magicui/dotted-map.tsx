import React, { useMemo } from 'react';
// @ts-ignore
import DottedMapLib from 'dotted-map';

export interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
  country?: string;
  isHub?: boolean;
}

export interface DottedMapProps {
  dotRadius?: number;
  dotColor?: string;
  grid?: 'diagonal' | 'vertical';
  points?: MapPoint[];
  className?: string;
}

export const DottedMap: React.FC<DottedMapProps> = ({
  dotRadius = 0.18,
  dotColor = '#17352F',
  grid = 'diagonal',
  points = [],
  className = '',
}) => {
  const mapInstance = useMemo(() => {
    const MapClass = (DottedMapLib as any).default || DottedMapLib;
    return new MapClass({ height: 60, grid });
  }, [grid]);

  // Generate background dot points
  const svgPoints = useMemo(() => {
    try {
      return mapInstance.getPoints();
    } catch {
      return [];
    }
  }, [mapInstance]);

  // Calculate coordinates for registered city points
  const mappedPoints = useMemo(() => {
    return points.map((p) => {
      const pin = mapInstance.getPin({ lat: p.lat, lng: p.lng });
      return {
        ...p,
        x: pin.x,
        y: pin.y,
      };
    });
  }, [points, mapInstance]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 119 60"
        className="w-full h-full max-h-full object-contain"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        {/* Base Map Dots */}
        <g opacity="0.35">
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

        {/* Minimal City Location Pins */}
        <g className="pins-layer">
          {mappedPoints.map((point) => {
            const isHub = point.isHub;

            return (
              <g key={point.label || `${point.x}-${point.y}`}>
                {/* Pin Dot */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isHub ? 0.9 : 0.65}
                  fill={isHub ? '#B86F55' : '#17352F'}
                  stroke="#FFFFFF"
                  strokeWidth="0.25"
                />

                {/* City Label */}
                {point.label && (
                  <text
                    x={point.x}
                    y={point.y + (isHub ? 2.4 : -1.2)}
                    textAnchor="middle"
                    fontSize={isHub ? '1.3' : '1.05'}
                    fontFamily="sans-serif"
                    fontWeight={isHub ? '700' : '500'}
                    fill={isHub ? '#B86F55' : '#17211F'}
                    className="select-none"
                  >
                    {point.label}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
