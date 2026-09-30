import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Clock, Video, Globe2 } from 'lucide-react';
import type { Variants } from 'framer-motion';
import { brandImages } from '../data/assets';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#17352F]/10">
      {/* Subtle warm architectural background aura */}
      <div className="absolute top-0 right-0 w-[55%] h-[80%] bg-gradient-to-b from-[#EFE8DC]/40 via-transparent to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Messaging */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow with pulsing dot */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B86F55] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B86F55]" />
              </span>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                FOR NRIs WITH FAMILY IN INDIA
              </span>
            </motion.div>

            {/* Headline with Masked Line-by-Line Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.08] text-[#17211F] tracking-tight mb-6">
              <div className="overflow-hidden pb-1">
                <motion.span
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block font-sans font-normal text-[#17211F]"
                >
                  You built a life abroad.
                </motion.span>
              </div>
              <div className="overflow-hidden pb-2">
                <motion.span
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block font-serif italic font-medium text-[#17352F] mt-1"
                >
                  Who looks after home?
                </motion.span>
              </div>
            </h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#17211F]/80 leading-relaxed font-light mb-8"
            >
              When your parents and family are back in India, distance can turn everyday needs into quiet worry. Vayosh gives you one trusted point of contact on the ground — coordinating parent visits, wellbeing, healthcare, domestic assistance, and continuous family connection.
            </motion.p>

            {/* CTAs with Micro-animations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-sm bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-sm hover:shadow-md group cursor-pointer"
              >
                <span>Tell Us About Your Family</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8C8B3] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => scrollTo('how-it-works')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm border border-[#17352F]/25 hover:border-[#17352F] text-[#17352F] hover:bg-[#17352F]/5 text-xs uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer"
              >
                <span>How Vayosh Works</span>
              </motion.button>
            </motion.div>

            {/* Reassurance Micro-Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#68716D] font-normal"
            >
              <div className="flex items-center gap-1.5 transition-colors hover:text-[#17352F]">
                <Clock className="w-3.5 h-3.5 text-[#B86F55]" />
                <span>20-min consultation</span>
              </div>
              <span className="text-[#D8C8B3]">·</span>
              <div className="flex items-center gap-1.5 transition-colors hover:text-[#17352F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#17352F]" />
                <span>No obligation</span>
              </div>
              <span className="text-[#D8C8B3]">·</span>
              <div className="flex items-center gap-1.5 transition-colors hover:text-[#17352F]">
                <Video className="w-3.5 h-3.5 text-[#17352F]" />
                <span>WhatsApp / Zoom</span>
              </div>
            </motion.div>

            {/* Geographic acknowledgment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-7 pt-5 border-t border-[#17352F]/10 flex items-center gap-3 text-xs text-[#68716D]"
            >
              <Globe2 className="w-4 h-4 text-[#B86F55] shrink-0" />
              <span>
                Supporting NRI families residing in the <strong className="text-[#17211F] font-medium">USA</strong>, <strong className="text-[#17211F] font-medium">UK</strong>, <strong className="text-[#17211F] font-medium">Canada</strong>, <strong className="text-[#17211F] font-medium">Australia</strong>, <strong className="text-[#17211F] font-medium">Singapore</strong>, and <strong className="text-[#17211F] font-medium">worldwide</strong>.
              </span>
            </motion.div>

          </div>

          {/* Right Column: The Whole Picture in One Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Primary Showcase Card Frame */}
              <div className="rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#FBFAF6] shadow-[0_20px_45px_rgba(23,53,47,0.09)] group">
                
                {/* Photo Area with 4:3 Ratio (100% Uncropped Full Story) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE5DB]">
                  <img
                    src={brandImages.hero.src}
                    alt={brandImages.hero.alt}
                    className="w-full h-full object-cover object-center filter saturate-[0.96] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-101"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Top Floating Badge: Live Presence Status */}
                  <div className="absolute top-3.5 left-3.5 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] px-3 py-1.5 rounded-sm border border-[#F7F4ED]/20 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-mono font-medium">
                      Ground Coordination · Chennai Hub
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Bar: Explaining The Whole Picture In One Glance */}
                <div className="p-4 sm:p-5 border-t border-[#17352F]/10 bg-[#FBFAF6]">
                  <div className="flex items-center justify-between text-xs border-b border-[#17352F]/10 pb-2.5 mb-3">
                    <span className="font-serif italic text-sm text-[#17352F] font-medium">
                      "One frame. The whole Vayosh promise."
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B86F55] font-semibold bg-[#B86F55]/10 px-2 py-0.5 rounded-xs">
                      Three-Way Connection
                    </span>
                  </div>

                  {/* 3 Pillars in the 1 Picture */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#F3EFE6] p-2.5 rounded-sm border border-[#17352F]/8">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#68716D]">01 · On Screen</span>
                      <p className="text-xs font-semibold text-[#17211F] mt-0.5">NRI Family</p>
                      <p className="text-[11px] text-[#68716D] leading-tight mt-0.5 hidden sm:block">Connected on video call</p>
                    </div>

                    <div className="bg-[#F3EFE6] p-2.5 rounded-sm border border-[#17352F]/8">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#68716D]">02 · In Chennai</span>
                      <p className="text-xs font-semibold text-[#17211F] mt-0.5">Elderly Parents</p>
                      <p className="text-[11px] text-[#68716D] leading-tight mt-0.5 hidden sm:block">Comfort of their home</p>
                    </div>

                    <div className="bg-[#17352F]/10 p-2.5 rounded-sm border border-[#17352F]/20">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#17352F] font-semibold">03 · On Ground</span>
                      <p className="text-xs font-semibold text-[#17352F] mt-0.5">Vayosh Lead</p>
                      <p className="text-[11px] text-[#17352F]/80 leading-tight mt-0.5 hidden sm:block">Official uniform & ID</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
