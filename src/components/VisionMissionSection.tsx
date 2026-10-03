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
            className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-[#17352F]/20 flex items-end cursor-pointer bg-slate-900 select-none"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('/projects/visson.jpg')` }}
            />
            {/* Dark Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

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

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 mb-3 group-hover:text-[#6D28D9] transition-colors">
                Our Vision
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                To emerge as a leading pioneer in software solutions and digital marketing by delivering high-quality, innovative, and reliable technology services. We are committed to integrating sustainable green practices while empowering businesses with advanced digital solutions that strengthen their market presence and drive long-term partner success.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-[#17352F]/20 flex items-end cursor-pointer bg-slate-900 select-none"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('/projects/mission.jpg')` }}
            />
            {/* Dark Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

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

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 mb-3 group-hover:text-[#6D28D9] transition-colors">
                Our Mission
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                At Zenin Technology, our mission is to deliver high-quality software solutions and performance-driven digital marketing strategies that accelerate efficiency, innovation, and business growth. Through continuous improvement, customer-centric execution, and measurable outcomes, we set new industry benchmarks.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default VisionMissionSection;
