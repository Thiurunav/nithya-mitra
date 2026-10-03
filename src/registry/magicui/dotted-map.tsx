import React, { useMemo } from 'react';
// @ts-ignore
import DottedMapLib from 'dotted-map';

export interface DottedMapProps {
  dotRadius?: number;
  dotColor?: string;
  grid?: 'diagonal' | 'vertical';
  className?: string;
}

interface LocationHub {
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  radius: number;
  isHub?: boolean;
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

  // Exact NRI Hubs & Operation Center in India
  const locations: LocationHub[] = useMemo(() => [
    { name: 'USA', x: 24.5, y: 21.5, labelX: 24.5, labelY: 14.0, radius: 5.2 },
    { name: 'Canada', x: 31.5, y: 17.5, labelX: 31.5, labelY: 10.5, radius: 2.8 },
    { name: 'UK', x: 59.0, y: 14.5, labelX: 59.0, labelY: 8.5, radius: 2.6 },
    { name: 'UAE', x: 79.0, y: 26.5, labelX: 79.0, labelY: 21.0, radius: 2.5 },
    { name: 'India (Hub)', x: 87.5, y: 31.5, labelX: 87.5, labelY: 25.0, radius: 3.6, isHub: true },
    { name: 'Singapore', x: 96.0, y: 35.5, labelX: 96.0, labelY: 41.5, radius: 2.0 },
    { name: 'Australia', x: 113.5, y: 48.5, labelX: 113.5, labelY: 43.0, radius: 3.2 },
  ], []);

  // Compute all points and classify active location dots
  const processedPoints = useMemo(() => {
    try {
      const rawPoints = mapInstance.getPoints();
      return rawPoints.map((pt: any) => {
        let matchedLocation: LocationHub | null = null;
        let minRatio = Infinity;

        for (const loc of locations) {
          const dist = Math.hypot(pt.x - loc.x, pt.y - loc.y);
          if (dist <= loc.radius) {
            const ratio = dist / loc.radius;
            if (ratio < minRatio) {
              minRatio = ratio;
              matchedLocation = loc;
            }
          }
        }

        const isLocationDot = matchedLocation !== null;
        const intensity = isLocationDot ? Math.max(0, 1 - minRatio) : 0;

        return {
          x: pt.x,
          y: pt.y,
          isLocationDot,
          intensity,
          isHub: matchedLocation?.isHub,
        };
      });
    } catch {
      return [];
    }
  }, [mapInstance, locations]);

  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 119 50"
        className="w-full h-auto max-w-5xl object-contain select-none pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        {/* Base Map Dots (Clean 20% visible opacity — +5% darker as requested) */}
        <g opacity="0.22">
          {processedPoints.map((pt: any, idx: number) => {
            if (!pt.isLocationDot) {
              return (
                <circle
                  key={idx}
                  cx={pt.x}
                  cy={pt.y}
                  r={dotRadius}
                  fill={dotColor}
                />
              );
            }
            return null;
          })}
        </g>

        {/* Highlighted Country / Diaspora Hub Dots */}
        <g className="location-dots">
          {processedPoints.map((pt: any, idx: number) => {
            if (pt.isLocationDot && pt.intensity > 0.15) {
              const r = dotRadius * (1.5 + pt.intensity * 1.3);
              const color = pt.isHub ? '#B86F55' : '#17211F';

              return (
                <circle
                  key={idx}
                  cx={pt.x}
                  cy={pt.y}
                  r={r}
                  fill={color}
                  opacity={pt.isHub ? 0.98 : 0.92}
                />
              );
            }
            return null;
          })}
        </g>

        {/* Minimal Country Text Labels */}
        <g className="country-labels">
          {locations.map((loc) => (
            <text
              key={loc.name}
              x={loc.labelX}
              y={loc.labelY}
              textAnchor="middle"
              fontSize={loc.isHub ? '1.45' : '1.25'}
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight={loc.isHub ? '700' : '600'}
              fill={loc.isHub ? '#B86F55' : '#17211F'}
              className="select-none tracking-wide"
            >
              {loc.name}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};
