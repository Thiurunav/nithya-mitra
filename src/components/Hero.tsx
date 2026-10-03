import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ShieldCheck, Clock, Video } from 'lucide-react';
import { brandImages } from '../data/assets';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate values normalized between -0.5 and +0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for butter-smooth organic deceleration and return
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // OPPOSITE DIRECTION minute parallax:
  // When cursor moves right (+0.5), image shifts left (-24px).
  // When cursor moves down (+0.5), image shifts up (-18px).
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [26, -26]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  // Floating foreground badges slight complementary depth
  const badgeTranslateX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const badgeTranslateY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-[92vh] md:min-h-screen flex flex-col justify-between items-center pt-24 sm:pt-28 min-[850px]:pt-32 pb-8 sm:pb-12 overflow-hidden border-b border-[#17352F]/15 cursor-default select-none"
    >
      {/* FULL-SCREEN HERO BACKGROUND IMAGE (Authentic Elderly Parents + Coordinator) */}
      <div className="absolute inset-0 min-[850px]:inset-2.5 z-0 overflow-hidden rounded-br-4xl rounded-bl-4xl bg-[#EAE5DB]">
        
        {/* Parallax Image that glides in the OPPOSITE direction on mouse hover */}
        <motion.img
          src={brandImages.hero.src}
          alt="Nithya Mitra coordinator caring for elderly parents in Chennai with NRI family on live video"
          style={{
            x: imageTranslateX,
            y: imageTranslateY,
            scale: 1.12, // Prevents edges showing when gliding
          }}
          className="w-full h-full object-cover object-center filter saturate-[1.04] contrast-[1.02] will-change-transform"
          loading="eager"
          fetchPriority="high"
        />

        {/* Minimal Subtle Scrim: Light wash so the photo is 100% visible and vivid */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4ED]/40 via-transparent to-[#F7F4ED]/60 pointer-events-none" />
      </div>

      {/* Top Floating Status Pills */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between relative z-10 pointer-events-none">
        {/* Top Left Floating Pill: Live Ground Hub */}
        <motion.div
          style={{
            x: badgeTranslateX,
            y: badgeTranslateY,
          }}
          className="inline-flex items-center gap-2 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] px-3.5 py-1.5 rounded-xl border border-white/20 shadow-lg will-change-transform"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-wider font-medium">
            Live Ground Hub · Chennai, India
          </span>
        </motion.div>

        {/* Top Right Floating Pill: Timezone Connection */}
        <motion.div
          style={{
            x: badgeTranslateX,
            y: badgeTranslateY,
          }}
          className="hidden sm:inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#17211F] px-3.5 py-1.5 rounded-xl border border-black/10 shadow-lg will-change-transform"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#17211F] font-medium">
            USA · UK · Worldwide ↔ India
          </span>
        </motion.div>
      </div>

      {/* Center Translucent Glass Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 my-auto text-center flex flex-col items-center">
        
        {/* Editorial Glass Container: Lets the photo show through while making text 100% readable */}
        <div className="bg-[#F7F4ED]/88 backdrop-blur-md px-6 sm:px-12 py-8 sm:py-10 rounded-3xl border border-white/80 shadow-[0_20px_60px_rgba(23,53,47,0.14)] flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-1 rounded-xl border border-[#17352F]/15 bg-white text-[#17211F] text-xs sm:text-sm font-medium mb-4 shadow-xs"
          >
            <span>Now Supporting NRI Families</span>
            <span className="text-[#B86F55] font-serif text-sm">✦</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08] mb-4 text-[#17211F]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block font-sans font-medium"
            >
              You Built Abroad
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-sans font-medium text-[#17211F] mt-1"
            >
              Protect Home with{' '}
              <span className="italic font-serif text-[#17352F] font-normal underline decoration-[#B86F55]/40 underline-offset-6">
                Certainty
              </span>
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-[#17211F]/80 max-w-xl mx-auto mb-6 font-normal leading-relaxed"
          >
            The dedicated on-ground family coordination service for NRIs — caring for your elderly parents, ancestral property, and urgent needs in India without compromise.
          </motion.p>

          {/* Dual-Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <button
              onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
              type="button"
              className="group relative cursor-pointer inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.75rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
              <span className="relative z-10 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#17352F] text-[#F7F4ED] font-medium text-xs sm:text-sm tracking-wide border border-white/10">
                Free Consultation
              </span>
              <span className="relative -left-px z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </button>

            {/* Micro Reassurances */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#68716D] font-normal pt-1">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#B86F55]" />
                <span>20-min consultation</span>
              </div>
              <span className="text-[#D8C8B3]">·</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#17352F]" />
                <span>No obligation</span>
              </div>
              <span className="text-[#D8C8B3]">·</span>
              <div className="flex items-center gap-1">
                <Video className="w-3 h-3 text-[#17352F]" />
                <span>WhatsApp / Zoom</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Photo Caption Tag */}
      <motion.div
        style={{
          x: badgeTranslateX,
          y: badgeTranslateY,
        }}
        className="relative z-10 hidden md:flex items-center gap-3 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] py-1.5 px-4 rounded-full border border-white/20 shadow-md text-xs pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-[#D8C8B3] font-light text-[11px]">
          Elderly parents at home in Chennai with assigned Nithya Mitra care coordinator
        </span>
        <span className="text-[9px] font-mono uppercase tracking-wider text-[#F7F4ED] bg-white/20 px-1.5 py-0.5 rounded-xs">
          Live Verification
        </span>
      </motion.div>

    </section>
  );
};
