import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Eye,
  Target,
  Clock,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 select-none">
      <div className="max-w-7xl 2xl:max-w-[1520px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-serif font-normal tracking-tight text-[#17211F] leading-tight">
            Vision & <span className="italic text-[#B86F55]">Mission</span>
          </h2>
        </div>

        {/* 2-Column Grid with 3D Perspective Floating Widget Cards (In Nithya Mitra Forest & Terracotta Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10 items-stretch">
          
          {/* ========================================================================= */}
          {/* Card 1: Our Vision */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-[28px] p-6 sm:p-7 lg:p-8 2xl:p-10 bg-gradient-to-br from-[#0D211C] via-[#17352F] to-[#254F46] text-white overflow-hidden shadow-2xl hover:shadow-[0_24px_50px_rgba(23,53,47,0.25)] transition-all duration-500 flex flex-col justify-between cursor-pointer border border-[#B86F55]/25 hover:border-[#B86F55]/60 hover:-translate-y-1.5 min-h-[320px] sm:min-h-[340px] 2xl:min-h-[380px]"
          >
            {/* Diagonal Light Beam Pattern Overlay (Terracotta & Golden Rays) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-35 group-hover:opacity-55 transition-opacity duration-700"
              viewBox="0 0 600 300"
              preserveAspectRatio="none"
              fill="none"
            >
              <polygon points="180,0 600,0 600,300 360,300" fill="url(#greenRay1)" />
              <polygon points="320,0 600,0 600,220" fill="url(#greenRay2)" />
              <polygon points="450,0 600,0 600,120" fill="url(#greenRay3)" />
              <defs>
                <linearGradient id="greenRay1" x1="0%" y1="0%" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="greenRay2" x1="0%" y1="0%" x2="1" y2="1">
                  <stop offset="0%" stopColor="#B86F55" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#B86F55" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="greenRay3" x1="0%" y1="0%" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E5C79E" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#E5C79E" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Top Icon Row */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-full bg-white/12 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C79E] shadow-sm group-hover:scale-105 transition-transform">
                <Eye size={20} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:bg-[#B86F55] group-hover:text-white transition-all shadow-sm">
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center flex-1">
              <div className="sm:col-span-6 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-serif tracking-tight text-white mb-2 leading-snug group-hover:text-[#E5C79E] transition-colors">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  Transforming geographical distance into unconditional peace of mind, verified dignity, and dependable on-ground family care across India.
                </p>
              </div>

              {/* 3D Code-Driven White Theme Status Widget */}
              <div className="sm:col-span-6 relative w-full flex items-center justify-center sm:justify-end card-perspective-container">
                <div className="w-full max-w-[245px] bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl p-3.5 text-[#17211F] card-3d-left select-none">
                  <div className="flex items-center justify-between border-b border-[#17352F]/10 pb-2 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-wide uppercase text-[#17352F]">CHENNAI HUB • LIVE</span>
                    </div>
                    <Clock size={12} className="text-[#B86F55]" />
                  </div>
                  
                  <div className="space-y-1.5 text-[10px]">
                    <div className="bg-[#F7F4ED] border border-[#17352F]/10 rounded-lg p-1.5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#17211F]">Karthik R., Care Lead</p>
                        <p className="text-[9px] text-[#17211F]/60">South Chennai • Active</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-semibold border border-emerald-200">On Duty</span>
                    </div>
                    <div className="bg-[#F7F4ED] border border-[#17352F]/10 rounded-lg p-1.5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#17211F]">Apollo Medical Review</p>
                        <p className="text-[9px] text-[#17211F]/60">Accompanied & Verified</p>
                      </div>
                      <span className="bg-[#B86F55]/15 text-[#B86F55] text-[9px] px-1.5 py-0.5 rounded font-semibold border border-[#B86F55]/30">Verified</span>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#17352F]/10 flex items-center justify-between text-[9px] text-[#17211F]/70">
                    <span>Family Peace of Mind</span>
                    <span className="font-bold text-[#17352F]">100% Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* Card 2: Our Mission */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-[28px] p-6 sm:p-7 lg:p-8 bg-gradient-to-br from-[#0D211C] via-[#17352F] to-[#254F46] text-white overflow-hidden shadow-2xl hover:shadow-[0_24px_50px_rgba(23,53,47,0.25)] transition-all duration-500 flex flex-col justify-between cursor-pointer border border-[#B86F55]/25 hover:border-[#B86F55]/60 hover:-translate-y-1.5 min-h-[320px] sm:min-h-[340px]"
          >
            {/* Diagonal Light Beam Pattern Overlay (Terracotta & Golden Rays) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-35 group-hover:opacity-55 transition-opacity duration-700"
              viewBox="0 0 600 300"
              preserveAspectRatio="none"
              fill="none"
            >
              <polygon points="180,0 600,0 600,300 360,300" fill="url(#greenRay1)" />
              <polygon points="320,0 600,0 600,220" fill="url(#greenRay2)" />
              <polygon points="450,0 600,0 600,120" fill="url(#greenRay3)" />
            </svg>

            {/* Top Icon Row */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-full bg-white/12 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C79E] shadow-sm group-hover:scale-105 transition-transform">
                <Target size={20} />
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:bg-[#B86F55] group-hover:text-white transition-all shadow-sm">
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center flex-1">
              <div className="sm:col-span-6 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-serif tracking-tight text-white mb-2 leading-snug group-hover:text-[#E5C79E] transition-colors">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                  Dedicated on-ground coordinators in Chennai bridging time zones, accompanied doctor visits, and heartfelt companionship for your parents.
                </p>
              </div>

              {/* 3D Code-Driven White Theme Status Widget */}
              <div className="sm:col-span-6 relative w-full flex items-center justify-center sm:justify-end card-perspective-container">
                <div className="w-full max-w-[245px] bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl p-3.5 text-[#17211F] card-3d-left select-none">
                  <div className="flex items-center justify-between border-b border-[#17352F]/10 pb-2 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#B86F55]" />
                      <span className="text-[10px] font-bold tracking-wide uppercase text-[#17352F]">DAILY CARE TIMELINE</span>
                    </div>
                    <ShieldCheck size={13} className="text-emerald-600" />
                  </div>
                  
                  <div className="space-y-1.5 text-[10px]">
                    <div className="bg-[#F7F4ED] border border-[#17352F]/10 rounded-lg p-1.5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#17211F]">Morning Vitals & Refill</p>
                        <p className="text-[9px] text-[#17211F]/60">08:30 AM • Delivered</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-semibold border border-emerald-200">Done</span>
                    </div>
                    <div className="bg-[#F7F4ED] border border-[#17352F]/10 rounded-lg p-1.5 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#17211F]">Evening Walk & Tea</p>
                        <p className="text-[9px] text-[#17211F]/60">05:00 PM • Accompanied</p>
                      </div>
                      <span className="bg-[#B86F55]/15 text-[#B86F55] text-[9px] px-1.5 py-0.5 rounded font-semibold border border-[#B86F55]/30">Scheduled</span>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#17352F]/10 flex items-center justify-between text-[9px] text-[#17211F]/70">
                    <span>Monthly Care Tasks</span>
                    <span className="font-bold text-emerald-700">100% Completed</span>
                  </div>
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
