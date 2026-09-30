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
          <div className="lg:col-span-7 flex flex-col justify-center">
            
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
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.08] text-[#17211F] tracking-tight mb-7">
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
              className="text-base sm:text-lg text-[#17211F]/80 leading-relaxed max-w-2xl font-light mb-9"
            >
              When your parents and family are back in India, distance can turn everyday needs into quiet worry. Vayosh gives you one trusted point of contact on the ground — coordinating parent visits, wellbeing, social connection, healthcare, emergencies and the support your family needs.
            </motion.p>

            {/* CTAs with Micro-animations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
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
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#68716D] font-normal"
            >
              <div className="flex items-center gap-1.5 transition-colors hover:text-[#17352F]">
                <Clock className="w-3.5 h-3.5 text-[#B86F55]" />
                <span>20 minutes</span>
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
              className="mt-8 pt-6 border-t border-[#17352F]/10 flex items-center gap-3 text-xs text-[#68716D]"
            >
              <Globe2 className="w-4 h-4 text-[#B86F55] shrink-0" />
              <span>
                Supporting NRI families residing in the <strong className="text-[#17211F] font-medium">USA</strong>, <strong className="text-[#17211F] font-medium">UK</strong>, <strong className="text-[#17211F] font-medium">Canada</strong>, <strong className="text-[#17211F] font-medium">Australia</strong>, <strong className="text-[#17211F] font-medium">Singapore</strong>, and <strong className="text-[#17211F] font-medium">worldwide</strong>.
              </span>
            </motion.div>

          </div>

          {/* Right Column: Authentic Editorial Imagery with Gentle Entrance & Parallax */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Primary Main Photograph Frame */}
              <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-[0_20px_40px_rgba(23,53,47,0.08)] group">
                <img
                  src={brandImages.hero.src}
                  alt={brandImages.hero.alt}
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-102"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle Editorial Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17352F]/90 via-[#17352F]/60 to-transparent p-5 text-[#F7F4ED]">
                  <p className="font-serif italic text-base leading-snug text-[#F7F4ED]">
                    "Your family in India. Our responsibility."
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#D8C8B3] mt-1">
                    Chennai & South India Hub · Ground Coordination
                  </p>
                </div>
              </div>

              {/* Secondary Floating Editorial Detail Badge with Breathing Float */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FBFAF6] border border-[#17352F]/15 rounded-sm p-4 shadow-lg max-w-[240px] hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#17352F] animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#17352F]">
                    Local Presence
                  </span>
                </div>
                <p className="text-xs text-[#17211F]/80 leading-snug">
                  Personal visits, hospital navigation, and unhurried human connection.
                </p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
