import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

        {/* 2-Column Zenin Signature Interactive S-Curve Tabbed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* ========================================================================= */}
          {/* Card 1: Our Vision (Zenin S-Curve Tab Architecture in Nithya Mitra Theme) */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-2 sm:p-2.5 bg-white rounded-3xl border border-[#17352F]/10 shadow-[0_12px_35px_rgba(23,53,47,0.06)]"
          >
            <div className="group relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-2xl isolate cursor-pointer bg-[#FAF7F0]">
              
              {/* Fixed Background Image with Smooth Zoom */}
              <div
                className="absolute inset-0 w-full h-full -z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 85%)" }}
              >
                <img
                  src="/vision-minimal-light.jpg"
                  alt="Our Vision"
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                />
              </div>

              {/* Sliding S-Curve Text Layer (Glides up smoothly on hover) */}
              <div className="absolute inset-x-0 bottom-0 h-[72%] flex flex-col transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[28%] group-hover:translate-y-0">
                
                {/* Top Tab with Number + S-Curve SVG */}
                <div className="flex w-full h-[48px] sm:h-[56px] shrink-0 z-20">
                  {/* Left Tab */}
                  <div className="relative z-20 w-[28%] sm:w-[24%] h-full bg-white rounded-tl-2xl flex items-end pb-1 pl-6 sm:pl-7">
                    <span className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-[#B86F55] translate-y-2">
                      01
                    </span>
                  </div>

                  {/* SVG S-Curve Bridging Tab to Main Body */}
                  <svg
                    className="w-[60px] sm:w-[80px] h-full fill-white shrink-0"
                    viewBox="0 0 80 56"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 C40,0 40,56 80,56 L0,56 Z" />
                  </svg>

                  <div className="flex-1 relative" />
                </div>

                {/* Main Body of Card */}
                <div className="flex-1 w-full bg-white rounded-tr-2xl px-6 sm:px-8 pb-7 pt-3 flex flex-col relative z-10 -mt-[2px] shadow-2xl">
                  {/* Concave curve at bottom-left */}
                  <svg
                    className="absolute -top-[12px] left-0 w-[12px] h-[12px] fill-white"
                    viewBox="0 0 12 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M12,12 Q0,12 0,0 L12,0 Z" />
                  </svg>

                  {/* Animated Arrow Icon */}
                  <div className="absolute top-2 right-4 sm:right-6 w-9 h-9 rounded-full bg-[#F7F4ED] flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4 text-[#B86F55]" />
                  </div>

                  <div className="mt-1 sm:mt-2 mb-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B86F55] block mb-0.5">
                      Long-Term Vision
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F] pr-8 group-hover:text-[#B86F55] transition-colors">
                      Our Vision
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
                    To be the world’s most trusted eldercare bridge for NRI families — transforming physical distance from a source of constant anxiety into unconditional peace of mind, verified dignity, and dependable on-ground family care across India.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* Card 2: Our Mission (Zenin S-Curve Tab Architecture in Nithya Mitra Theme) */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-2 sm:p-2.5 bg-white rounded-3xl border border-[#17352F]/10 shadow-[0_12px_35px_rgba(23,53,47,0.06)]"
          >
            <div className="group relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden rounded-2xl isolate cursor-pointer bg-[#FAF7F0]">
              
              {/* Fixed Background Image with Smooth Zoom */}
              <div
                className="absolute inset-0 w-full h-full -z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 85%)" }}
              >
                <img
                  src="/mission-minimal-light.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                />
              </div>

              {/* Sliding S-Curve Text Layer (Glides up smoothly on hover) */}
              <div className="absolute inset-x-0 bottom-0 h-[72%] flex flex-col transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[28%] group-hover:translate-y-0">
                
                {/* Top Tab with Number + S-Curve SVG */}
                <div className="flex w-full h-[48px] sm:h-[56px] shrink-0 z-20">
                  {/* Left Tab */}
                  <div className="relative z-20 w-[28%] sm:w-[24%] h-full bg-white rounded-tl-2xl flex items-end pb-1 pl-6 sm:pl-7">
                    <span className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-[#17352F] translate-y-2">
                      02
                    </span>
                  </div>

                  {/* SVG S-Curve Bridging Tab to Main Body */}
                  <svg
                    className="w-[60px] sm:w-[80px] h-full fill-white shrink-0"
                    viewBox="0 0 80 56"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 C40,0 40,56 80,56 L0,56 Z" />
                  </svg>

                  <div className="flex-1 relative" />
                </div>

                {/* Main Body of Card */}
                <div className="flex-1 w-full bg-white rounded-tr-2xl px-6 sm:px-8 pb-7 pt-3 flex flex-col relative z-10 -mt-[2px] shadow-2xl">
                  {/* Concave curve at bottom-left */}
                  <svg
                    className="absolute -top-[12px] left-0 w-[12px] h-[12px] fill-white"
                    viewBox="0 0 12 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M12,12 Q0,12 0,0 L12,0 Z" />
                  </svg>

                  {/* Animated Arrow Icon */}
                  <div className="absolute top-2 right-4 sm:right-6 w-9 h-9 rounded-full bg-[#F7F4ED] flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4 text-[#17352F]" />
                  </div>

                  <div className="mt-1 sm:mt-2 mb-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#17352F] block mb-0.5">
                      Ground Execution
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F] pr-8 group-hover:text-[#B86F55] transition-colors">
                      Our Mission
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
                    To provide compassionate, accountable family coordination in India through dedicated care leads, transparent medical reporting, accompanied hospital visits, and heartfelt companionship — caring for your parents with the exact devotion you would give yourself.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default VisionMissionSection;
