import React, { useMemo } from 'react';
// @ts-ignore
import DottedMapLib from 'dotted-map';

export interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
  country?: string;
  timezone?: string;
  isHub?: boolean;
}

export interface ConnectionRoute {
  from: { lat: number; lng: number; label: string };
  to: { lat: number; lng: number; label: string };
  color?: string;
}

export interface DottedMapProps {
  dotRadius?: number;
  dotColor?: string;
  grid?: 'diagonal' | 'vertical';
  points?: MapPoint[];
  routes?: ConnectionRoute[];
  className?: string;
  highlightedCity?: string | null;
  onSelectCity?: (cityName: string) => void;
}

export const DottedMap: React.FC<DottedMapProps> = ({
  dotRadius = 0.18,
  dotColor = '#17352F',
  grid = 'diagonal',
  points = [],
  routes = [],
  className = '',
  highlightedCity = null,
  onSelectCity,
}) => {
  const mapInstance = useMemo(() => {
    // Instantiate dotted map with 60 vertical units
    const MapClass = (DottedMapLib as any).default || DottedMapLib;
    return new MapClass({ height: 60, grid });
  }, [grid]);

  // Generate background dot points
  const svgPoints = useMemo(() => {
    try {
      const rawPoints = mapInstance.getPoints();
      return rawPoints;
    } catch {
      return [];
    }
  }, [mapInstance]);

  // Calculate coordinates for all registered city points
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

  // Calculate curved Bezier arc paths for connection lines
  const mappedRoutes = useMemo(() => {
    return routes.map((r, i) => {
      const fromPin = mapInstance.getPin({ lat: r.from.lat, lng: r.from.lng });
      const toPin = mapInstance.getPin({ lat: r.to.lat, lng: r.to.lng });

      // Midpoint with upward arc curvature
      const midX = (fromPin.x + toPin.x) / 2;
      const distance = Math.hypot(toPin.x - fromPin.x, toPin.y - fromPin.y);
      const curveHeight = Math.min(distance * 0.35, 14);
      const midY = (fromPin.y + toPin.y) / 2 - curveHeight;

      const pathData = `M ${fromPin.x} ${fromPin.y} Q ${midX} ${midY} ${toPin.x} ${toPin.y}`;
      return {
        ...r,
        id: `route-${i}`,
        pathData,
        fromX: fromPin.x,
        fromY: fromPin.y,
        toX: toPin.x,
        toY: toPin.y,
      };
    });
  }, [routes, mapInstance]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 119 60"
        className="w-full h-full max-h-full object-contain pointer-events-auto"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Glowing gradient for connection trajectories */}
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B86F55" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D8C8B3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#17352F" stopOpacity="1" />
          </linearGradient>

          {/* Glowing pulse filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Base Map Dots */}
        <g opacity="0.32">
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

        {/* Animated Connection Arc Routes */}
        <g className="routes-layer">
          {mappedRoutes.map((route) => {
            const isHighlighted =
              !highlightedCity ||
              route.from.label === highlightedCity ||
              route.to.label === highlightedCity;

            return (
              <g key={route.id} opacity={isHighlighted ? 1 : 0.2} className="transition-opacity duration-300">
                {/* Background soft shadow arc */}
                <path
                  d={route.pathData}
                  fill="none"
                  stroke="#17352F"
                  strokeWidth="0.3"
                  strokeOpacity="0.25"
                  strokeDasharray="0.8 0.6"
                />

                {/* Animated flowing glowing pulse arc */}
                <path
                  d={route.pathData}
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth={isHighlighted && highlightedCity ? '0.6' : '0.4'}
                  strokeDasharray="2 3"
                  className="animate-dash"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="20"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}
        </g>

        {/* City Location Pins & Beacon Rings */}
        <g className="pins-layer">
          {mappedPoints.map((point) => {
            const isHub = point.isHub;
            const isSelected = highlightedCity === point.label;

            return (
              <g
                key={point.label || `${point.x}-${point.y}`}
                className="cursor-pointer group"
                onClick={() => point.label && onSelectCity && onSelectCity(point.label)}
              >
                {/* Pulsing Ripple Rings */}
                {isHub ? (
                  <>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="1.8"
                      fill="none"
                      stroke="#B86F55"
                      strokeWidth="0.2"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="r"
                        values="0.8; 3.2; 0.8"
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
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="0.9"
                      fill="#B86F55"
                      stroke="#FFFFFF"
                      strokeWidth="0.25"
                      filter="url(#glow)"
                    />
                  </>
                ) : (
                  <>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="1.2"
                      fill="none"
                      stroke="#17352F"
                      strokeWidth="0.15"
                      opacity={isSelected ? '0.8' : '0.4'}
                    >
                      <animate
                        attributeName="r"
                        values="0.5; 2.2; 0.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6; 0; 0.6"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isSelected ? '0.75' : '0.6'}
                      fill={isSelected ? '#B86F55' : '#17352F'}
                      stroke="#FFFFFF"
                      strokeWidth="0.2"
                    />
                  </>
                )}

                {/* Subtle City Tag Label */}
                {point.label && (
                  <text
                    x={point.x}
                    y={point.y + (isHub ? 2.4 : -1.2)}
                    textAnchor="middle"
                    fontSize={isHub ? '1.4' : '1.1'}
                    fontFamily="sans-serif"
                    fontWeight={isHub ? '700' : '600'}
                    fill={isHub ? '#B86F55' : '#17211F'}
                    className="select-none pointer-events-none drop-shadow-xs"
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
