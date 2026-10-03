import React from 'react';
import { motion } from 'framer-motion';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#17352F]/15 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span>Our Purpose & Direction</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#17211F] leading-tight">
            Vision & <span className="italic text-[#B86F55]">Mission</span>
          </h2>
        </div>

        {/* 2-Column Interactive Sliding Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Our Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#17352F]/15 flex items-end cursor-pointer bg-[#0F221E] select-none"
          >
            {/* Minimal Generative Background: Long-Range Horizon & Celestial Arc */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105">
              {/* Ambient radial glow */}
              <div className="absolute w-96 h-96 rounded-full bg-[#B86F55]/15 blur-3xl -top-10 -right-10" />
              <div className="absolute w-80 h-80 rounded-full bg-[#17352F]/40 blur-2xl bottom-10 left-10" />
              
              {/* Ultra-Minimal SVG Composition */}
              <svg className="w-full h-full p-8 opacity-75 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Subtle background grid */}
                <defs>
                  <pattern id="grid-vision" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.75" fill="#EAE5DB" fillOpacity="0.12" />
                  </pattern>
                  <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E5C79E" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#B86F55" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-vision)" />

                {/* Minimal Horizon & Harmonic Arcs */}
                <circle cx="200" cy="110" r="90" stroke="url(#gold-grad)" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                <circle cx="200" cy="110" r="60" stroke="#EAE5DB" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="200" cy="110" r="30" stroke="#B86F55" strokeWidth="1.2" strokeOpacity="0.6" />
                
                {/* Horizontal Baseline Horizon */}
                <line x1="50" y1="110" x2="350" y2="110" stroke="#EAE5DB" strokeWidth="0.8" strokeOpacity="0.2" />
                <line x1="200" y1="20" x2="200" y2="200" stroke="#EAE5DB" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="2 4" />

                {/* Radiant Core Star */}
                <circle cx="200" cy="110" r="4" fill="#E5C79E" className="animate-pulse" />
                <circle cx="200" cy="110" r="8" stroke="#E5C79E" strokeWidth="0.75" opacity="0.6" />

                {/* Minimalist Micro Label */}
                <text x="52" y="40" fill="#EAE5DB" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">01 / LONG-RANGE HORIZON</text>
                <text x="348" y="40" textAnchor="end" fill="#B86F55" fillOpacity="0.7" fontSize="9" fontFamily="monospace" letterSpacing="0.15em">GLOBAL NRI CARE</text>
              </svg>
            </div>

            {/* Dark Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Sliding Content Box (Zenin notch cutout architecture) */}
            <div className="relative z-10 w-full h-[260px] sm:h-[280px] p-6 sm:p-8 bg-white text-[#17211F] rounded-tl-3xl transform translate-y-[calc(100%-76px)] sm:translate-y-[calc(100%-84px)] group-hover:translate-y-0 transition-transform duration-700 ease-in-out border-t border-l border-white/20 shadow-xl">
              
              {/* Inverted Curved Notch Cutout (Top-Right of Content Box) */}
              <div 
                className="absolute -top-10 right-0 w-10 h-10 pointer-events-none"
                style={{
                  borderBottomRightRadius: "24px",
                  boxShadow: "12px 12px 0 12px white"
                }}
              />

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors">
                  Our Vision
                </h3>
                <span className="text-[10px] font-mono font-medium text-[#B86F55] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B86F55]/10 border border-[#B86F55]/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  Long-term
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed">
                To be the world’s most trusted eldercare bridge for NRI families — transforming physical distance from a source of constant anxiety into unconditional peace of mind, verified dignity, and dependable on-ground family care across India.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#17352F]/15 flex items-end cursor-pointer bg-[#0F221E] select-none"
          >
            {/* Minimal Generative Background: Precision Crosshair & Focus Target */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105">
              {/* Ambient radial glow */}
              <div className="absolute w-96 h-96 rounded-full bg-[#17352F]/60 blur-3xl -top-10 -left-10" />
              <div className="absolute w-80 h-80 rounded-full bg-[#B86F55]/20 blur-2xl bottom-10 right-10" />
              
              {/* Ultra-Minimal SVG Composition */}
              <svg className="w-full h-full p-8 opacity-75 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-mission" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.75" fill="#EAE5DB" fillOpacity="0.12" />
                  </pattern>
                  <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B86F55" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E5C79E" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-mission)" />

                {/* Minimalist Precision Concentric Target Rings */}
                <circle cx="200" cy="110" r="80" stroke="#EAE5DB" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 5" />
                <circle cx="200" cy="110" r="54" stroke="url(#copper-grad)" strokeWidth="1.2" strokeOpacity="0.6" />
                <circle cx="200" cy="110" r="28" stroke="#EAE5DB" strokeWidth="1" strokeOpacity="0.4" />
                
                {/* 4-Axis Precision Crosshairs */}
                <line x1="120" y1="110" x2="280" y2="110" stroke="#E5C79E" strokeWidth="0.8" strokeOpacity="0.4" />
                <line x1="200" y1="30" x2="200" y2="190" stroke="#E5C79E" strokeWidth="0.8" strokeOpacity="0.4" />
                
                {/* Compass Needle Accent (45° angle) */}
                <line x1="200" y1="110" x2="242" y2="68" stroke="#B86F55" strokeWidth="2" strokeLinecap="round" />
                <circle cx="242" cy="68" r="3.5" fill="#B86F55" />

                {/* Center Precision Dot */}
                <circle cx="200" cy="110" r="3" fill="#EAE5DB" />

                {/* Minimalist Micro Label */}
                <text x="52" y="40" fill="#EAE5DB" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">02 / ATTENTIVE EXECUTION</text>
                <text x="348" y="40" textAnchor="end" fill="#B86F55" fillOpacity="0.7" fontSize="9" fontFamily="monospace" letterSpacing="0.15em">GROUND CHENNAI HUB</text>
              </svg>
            </div>

            {/* Dark Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Sliding Content Box (Zenin notch cutout architecture) */}
            <div className="relative z-10 w-full h-[260px] sm:h-[280px] p-6 sm:p-8 bg-white text-[#17211F] rounded-tl-3xl transform translate-y-[calc(100%-76px)] sm:translate-y-[calc(100%-84px)] group-hover:translate-y-0 transition-transform duration-700 ease-in-out border-t border-l border-white/20 shadow-xl">
              
              {/* Inverted Curved Notch Cutout (Top-Right of Content Box) */}
              <div 
                className="absolute -top-10 right-0 w-10 h-10 pointer-events-none"
                style={{
                  borderBottomRightRadius: "24px",
                  boxShadow: "12px 12px 0 12px white"
                }}
              />

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors">
                  Our Mission
                </h3>
                <span className="text-[10px] font-mono font-medium text-[#B86F55] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B86F55]/10 border border-[#B86F55]/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  Execution
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed">
                To provide compassionate, accountable family coordination in India through dedicated care leads, transparent medical reporting, accompanied hospital visits, and heartfelt companionship — caring for your parents with the exact devotion you would give yourself.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default VisionMissionSection;
