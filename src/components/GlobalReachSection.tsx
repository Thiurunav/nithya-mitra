import React from 'react';
import { DottedMap } from '@/registry/magicui/dotted-map';
import type { MapPoint, ConnectionRoute } from '@/registry/magicui/dotted-map';

export const GlobalReachSection: React.FC = () => {
  // Hub: Chennai, India
  const chennaiHub = { lat: 13.0827, lng: 80.2707, label: 'Chennai (Hub)' };

  // Key NRI diaspora cities
  const mapPoints: MapPoint[] = [
    { lat: 13.0827, lng: 80.2707, label: 'Chennai', country: 'India', isHub: true },
    { lat: 37.7749, lng: -122.4194, label: 'USA', country: 'USA' },
    { lat: 40.7128, lng: -74.0060, label: 'NYC', country: 'USA' },
    { lat: 51.5074, lng: -0.1278, label: 'UK', country: 'UK' },
    { lat: 25.2048, lng: 55.2708, label: 'UAE', country: 'UAE' },
    { lat: 1.3521, lng: 103.8198, label: 'SG', country: 'Singapore' },
    { lat: -33.8688, lng: 151.2093, label: 'AUS', country: 'Australia' },
  ];

  // Active Connection Routes converging onto Chennai
  const mapRoutes: ConnectionRoute[] = [
    { from: { lat: 37.7749, lng: -122.4194, label: 'USA' }, to: chennaiHub },
    { from: { lat: 40.7128, lng: -74.0060, label: 'NYC' }, to: chennaiHub },
    { from: { lat: 51.5074, lng: -0.1278, label: 'UK' }, to: chennaiHub },
    { from: { lat: 25.2048, lng: 55.2708, label: 'UAE' }, to: chennaiHub },
    { from: { lat: 1.3521, lng: 103.8198, label: 'SG' }, to: chennaiHub },
    { from: { lat: -33.8688, lng: 151.2093, label: 'AUS' }, to: chennaiHub },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F4ED] text-[#17211F] border-b border-[#17352F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Minimal Dotted Map Container */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden rounded-2xl bg-white border border-[#17352F]/12 shadow-[0_8px_30px_rgba(23,53,47,0.06)] flex items-center justify-center p-4 sm:p-6">
          
          {/* Top subtle live badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 bg-[#F7F4ED] px-3 py-1 rounded-full border border-[#17352F]/10 text-xs font-mono text-[#17352F]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>Supporting NRIs in USA · UK · UAE · SG · AUS</span>
          </div>

          {/* Dotted Map */}
          <DottedMap
            dotRadius={0.18}
            dotColor="#17352F"
            points={mapPoints}
            routes={mapRoutes}
          />
        </div>

      </div>
    </section>
  );
};
