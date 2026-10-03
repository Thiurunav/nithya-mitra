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
          
          {/* Card 1: Our Vision (Light Theme Minimal) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_12px_35px_rgba(23,53,47,0.06)] border border-[#17352F]/12 flex items-end cursor-pointer bg-[#F4EFE6] select-none"
          >
            {/* Minimal Light Theme Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('/vision-minimal-light.jpg')` }}
            />

            {/* Subtle Gradient Transition to Bottom Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />

            {/* Sliding Content Box (Zenin notch cutout architecture) */}
            <div className="relative z-10 w-full h-[260px] sm:h-[280px] p-6 sm:p-8 bg-white text-[#17211F] rounded-tl-3xl transform translate-y-[calc(100%-76px)] sm:translate-y-[calc(100%-84px)] group-hover:translate-y-0 transition-transform duration-700 ease-in-out border-t border-l border-[#17352F]/10 shadow-[0_-8px_25px_rgba(23,53,47,0.04)]">
              
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
                <span className="text-[10px] font-mono font-medium text-[#B86F55] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B86F55]/10 border border-[#B86F55]/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  Long-term
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed">
                To be the world’s most trusted eldercare bridge for NRI families — transforming physical distance from a source of constant anxiety into unconditional peace of mind, verified dignity, and dependable on-ground family care across India.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Our Mission (Light Theme Minimal) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_12px_35px_rgba(23,53,47,0.06)] border border-[#17352F]/12 flex items-end cursor-pointer bg-[#F4EFE6] select-none"
          >
            {/* Minimal Light Theme Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('/mission-minimal-light.jpg')` }}
            />

            {/* Subtle Gradient Transition to Bottom Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />

            {/* Sliding Content Box (Zenin notch cutout architecture) */}
            <div className="relative z-10 w-full h-[260px] sm:h-[280px] p-6 sm:p-8 bg-white text-[#17211F] rounded-tl-3xl transform translate-y-[calc(100%-76px)] sm:translate-y-[calc(100%-84px)] group-hover:translate-y-0 transition-transform duration-700 ease-in-out border-t border-l border-[#17352F]/10 shadow-[0_-8px_25px_rgba(23,53,47,0.04)]">
              
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
                <span className="text-[10px] font-mono font-medium text-[#B86F55] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B86F55]/10 border border-[#B86F55]/20 opacity-0 group-hover:opacity-100 transition-opacity">
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
