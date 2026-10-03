import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Search,
  Star,
  Zap,
  ShieldCheck,
} from 'lucide-react';

export const BentoGridSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4ED] text-[#17211F] border-b border-[#17352F]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#17352F]/12 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span>On-Ground Care Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#17211F] tracking-tight leading-tight">
            Designed for total visibility &{' '}
            <span className="italic text-[#B86F55]">peace of mind</span>
          </h2>
        </div>

        {/* Asymmetric Bento Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ================================================================= */}
          {/* CARD 1: TALL LEFT CARD (Vibrant Sage Green) */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4 rounded-[2.5rem] bg-[#8DA88D] text-[#17211F] p-7 sm:p-9 flex flex-col justify-between overflow-hidden relative shadow-[0_12px_36px_rgba(23,53,47,0.08)] min-h-[520px]"
          >
            {/* Header Content */}
            <div className="z-10 mb-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#11241F] leading-tight mb-3">
                Guided Onboarding For Every Family
              </h3>
              <p className="text-xs sm:text-sm text-[#11241F]/80 font-light leading-relaxed">
                Get your parents set up in minutes with a single dedicated on-ground coordinator in Chennai.
              </p>
            </div>

            {/* Phone Mockup Graphic */}
            <div className="relative z-10 w-full max-w-[280px] mx-auto mt-auto -mb-6 sm:-mb-8 bg-white rounded-[2rem] border-[4px] border-[#17211F]/15 p-4 shadow-2xl">
              {/* Dynamic Island / Notch */}
              <div className="w-16 h-3.5 bg-[#17211F] rounded-full mx-auto mb-4" />
              
              <div className="space-y-3">
                <p className="text-sm font-serif font-semibold text-[#17211F] leading-tight">
                  Your parent care roadmap is ready!
                </p>
                <p className="text-[10px] text-[#17211F]/60 leading-snug">
                  Assigned Karthik R. as Lead Care Coordinator for Adyar & South Chennai.
                </p>

                {/* Inner Project / Family Card */}
                <div className="rounded-xl bg-[#8DA88D]/30 border border-[#8DA88D]/40 p-3 flex flex-col justify-between h-28 relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#11241F]">Care Blueprint</p>
                      <p className="text-[9px] text-[#11241F]/70">Adyar Household</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  
                  {/* Bottom Meta */}
                  <div className="text-[8px] font-mono tracking-widest text-[#11241F]/70 uppercase">
                    NM · 2026 · ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN GRID WRAPPER (Top Wide + Bottom Two Tiles) */}
          {/* ================================================================= */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            
            {/* --------------------------------------------------------------- */}
            {/* CARD 2: TOP RIGHT WIDE CARD (Soft Creamy Sage Tint) */}
            {/* --------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2.5rem] bg-[#E3EBE0] text-[#17211F] p-7 sm:p-9 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-[0_8px_30px_rgba(23,53,47,0.06)] min-h-[290px]"
            >
              {/* Left Copy */}
              <div className="lg:max-w-[45%] z-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#17211F] leading-tight mb-2.5">
                  Real-time Ground Data
                </h3>
                <p className="text-xs sm:text-sm text-[#17211F]/70 font-light leading-relaxed">
                  Monitor doctor visits, vitals, grocery replenishment, and coordinator updates instantly on WhatsApp.
                </p>
              </div>

              {/* Right Phone Visual with Pulse Waves */}
              <div className="relative w-full lg:w-[50%] flex items-center justify-center">
                {/* Concentric Ambient Waves */}
                <div className="absolute w-56 h-56 rounded-full border border-[#8DA88D]/40 pointer-events-none" />
                <div className="absolute w-44 h-44 rounded-full border border-[#8DA88D]/60 pointer-events-none" />

                {/* Mini Phone Card */}
                <div className="relative z-10 w-full max-w-[260px] bg-white rounded-2xl border-[3px] border-[#17211F]/15 p-3.5 shadow-xl">
                  {/* Notch */}
                  <div className="w-14 h-3 bg-[#17211F] rounded-full mx-auto mb-3" />
                  
                  {/* Search Bar */}
                  <div className="rounded-lg bg-gray-100 px-2.5 py-1 flex items-center gap-1.5 text-[10px] text-gray-400 mb-2.5">
                    <Search className="w-3 h-3 text-gray-400" />
                    <span>Search care records...</span>
                  </div>

                  <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wider mb-1">
                    Monthly Updates
                  </p>
                  <p className="text-base font-semibold text-[#17211F] mb-2">
                    18 Recorded
                  </p>

                  <div className="flex items-center gap-1.5 text-[9px] mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#8DA88D] text-white font-medium">Doctor Escort</span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Vitals</span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Bills</span>
                  </div>

                  {/* Overlay Dark Badge */}
                  <div className="rounded-xl bg-[#17211F] text-white p-2.5 flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-[8px] text-gray-400 block font-mono">Status</span>
                      <span className="text-xs font-medium">All Verified</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-semibold border border-emerald-500/30">
                      ✓ 100%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --------------------------------------------------------------- */}
            {/* BOTTOM ROW: TWO TILES (Social Proof + Built to Scale Metrics) */}
            {/* --------------------------------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Card 3: Social Proof / Community */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[2.5rem] bg-[#E3EBE0] text-[#17211F] p-7 sm:p-8 flex flex-col justify-center items-center text-center shadow-[0_8px_30px_rgba(23,53,47,0.06)] min-h-[220px]"
              >
                <h4 className="text-xl sm:text-2xl font-serif font-medium text-[#17211F] mb-4">
                  Trusted By 150+ NRI Families
                </h4>

                {/* Avatar cluster */}
                <div className="flex items-center justify-center -space-x-2.5 mb-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#17352F] text-white text-xs flex items-center justify-center font-semibold border-2 border-white">
                    AK
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#B86F55] text-white text-xs flex items-center justify-center font-semibold border-2 border-white">
                    SP
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#3D6B58] text-white text-xs flex items-center justify-center font-semibold border-2 border-white">
                    RN
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#2A473E] text-white text-xs flex items-center justify-center font-semibold border-2 border-white">
                    VK
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#8DA88D] text-[#17211F] text-xs flex items-center justify-center font-bold border-2 border-white">
                    +15
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#17211F]/75">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="font-medium">5.0 from US, UK, Gulf & APAC Families</span>
                </div>
              </motion.div>

              {/* Card 4: Built to Scale Metric Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-[2.5rem] bg-[#8DA88D] text-[#11241F] p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(23,53,47,0.06)] min-h-[220px]"
              >
                <div>
                  <h4 className="text-xl sm:text-2xl font-serif font-medium text-[#11241F] mb-1.5">
                    Built on Ground Truth
                  </h4>
                  <p className="text-xs text-[#11241F]/80 font-light leading-relaxed mb-4">
                    Direct on-ground accountability that never compromises on parent safety.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="rounded-xl bg-white/95 px-3.5 py-2 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span className="text-xs font-semibold text-[#17211F]">100% Verified Notes</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">+100%</span>
                  </div>

                  <div className="rounded-xl bg-white/95 px-3.5 py-2 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-semibold text-[#17211F]">&lt;15m Emergency Response</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">Live</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
