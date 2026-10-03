import React, { useMemo } from 'react';
// @ts-ignore
import DottedMapLib from 'dotted-map';

export interface DottedMapProps {
  dotRadius?: number;
  dotColor?: string;
  grid?: 'diagonal' | 'vertical';
  className?: string;
}

export const DottedMap: React.FC<DottedMapProps> = ({
  dotRadius = 0.18,
  dotColor = '#17352F',
  grid = 'diagonal',
  className = '',
}) => {
  const mapInstance = useMemo(() => {
    const MapClass = (DottedMapLib as any).default || DottedMapLib;
    return new MapClass({ height: 50, grid });
  }, [grid]);

  // Key cluster centers (x, y) where NRIs and operations are dense
  const clusterCenters = useMemo(() => [
    // US West Coast (Bay Area, Seattle, LA)
    { x: 14.5, y: 17.5, radius: 4.5 },
    { x: 16.0, y: 21.0, radius: 3.5 },
    // US Central & Texas (Chicago, Dallas, Austin)
    { x: 25.5, y: 19.5, radius: 4.0 },
    { x: 26.0, y: 26.0, radius: 3.5 },
    // US East Coast (NYC, NJ, Boston, Atlanta)
    { x: 33.0, y: 18.5, radius: 4.5 },
    { x: 31.5, y: 23.5, radius: 3.5 },
    // UK & Europe (London, Frankfurt)
    { x: 58.5, y: 14.0, radius: 3.5 },
    { x: 62.0, y: 15.5, radius: 3.0 },
    // Middle East (Dubai, Abu Dhabi, Doha)
    { x: 79.0, y: 26.5, radius: 3.0 },
    // India (Chennai Hub, Bangalore, Hyderabad)
    { x: 87.5, y: 31.5, radius: 4.0 },
    { x: 86.0, y: 28.0, radius: 3.0 },
    // Singapore & SE Asia
    { x: 96.0, y: 35.5, radius: 2.5 },
    // Australia (Sydney, Melbourne)
    { x: 113.0, y: 48.0, radius: 3.5 },
  ], []);

  // Compute all points and classify active density clusters
  const processedPoints = useMemo(() => {
    try {
      const rawPoints = mapInstance.getPoints();
      return rawPoints.map((pt: any) => {
        // Find distance to closest cluster center
        let minDist = Infinity;
        for (const center of clusterCenters) {
          const dist = Math.hypot(pt.x - center.x, pt.y - center.y);
          if (dist < center.radius && dist < minDist) {
            minDist = dist;
          }
        }

        // Determine if dot is part of active density cluster
        const isCluster = minDist < Infinity;
        const clusterIntensity = isCluster ? Math.max(0, 1 - minDist / 4.5) : 0;

        return {
          x: pt.x,
          y: pt.y,
          isCluster,
          clusterIntensity,
        };
      });
    } catch {
      return [];
    }
  }, [mapInstance, clusterCenters]);

  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 119 50"
        className="w-full h-auto max-w-5xl object-contain select-none pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        {processedPoints.map((pt: any, idx: number) => {
          if (pt.isCluster && pt.clusterIntensity > 0.3) {
            // Prominent dark cluster dot (matching reference image)
            const r = dotRadius * (1.6 + pt.clusterIntensity * 1.4);
            return (
              <circle
                key={idx}
                cx={pt.x}
                cy={pt.y}
                r={r}
                fill="#17211F"
                opacity={0.92}
              />
            );
          }

          // Subtle faint background map dot
          return (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r={dotRadius}
              fill={dotColor}
              opacity={0.12}
            />
          );
        })}
      </svg>
    </div>
  );
};
