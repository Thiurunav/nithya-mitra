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
  // When cursor moves right (+0.5), image shifts left (-22px).
  // When cursor moves down (+0.5), image shifts up (-18px).
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

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
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-36 min-[850px]:pt-40 pb-20 md:pb-28 overflow-hidden border-b border-[#17352F]/15 cursor-default select-none"
    >
      {/* FULL-SCREEN HERO BACKGROUND: Authentic Elderly Parents + Care Coordinator */}
      <div className="absolute inset-0 min-[850px]:inset-2.5 overflow-hidden rounded-br-4xl rounded-bl-4xl -z-10 bg-[#EAE5DB]">
        
        {/* Parallax Image that moves in the OPPOSITE direction on hover at a minute level */}
        <motion.img
          src={brandImages.hero.src}
          alt="Nithya Mitra care coordinator supporting elderly Indian parents in their home while NRI son joins live on tablet"
          style={{
            x: imageTranslateX,
            y: imageTranslateY,
            scale: 1.12, // Sufficient scale to prevent borders showing during opposite motion
          }}
          className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] will-change-transform"
          loading="eager"
          fetchPriority="high"
        />

        {/* Curated Editorial Scrim: Transparent center so the elderly parents & coordinator shine, with soft warm tint for crystal readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4ED]/88 via-[#F7F4ED]/55 to-[#F7F4ED]/92 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F7F4ED]/40 via-[#F7F4ED]/70 to-[#F7F4ED]/90 pointer-events-none" />
      </div>

      {/* Floating Status Badges Over Background */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between pointer-events-none">
        {/* Top Left Floating Pill: Live Ground Hub */}
        <motion.div
          style={{
            x: badgeTranslateX,
            y: badgeTranslateY,
          }}
          className="inline-flex items-center gap-2 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] px-3.5 py-1.5 rounded-xl border border-white/20 shadow-md will-change-transform"
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
          className="hidden sm:inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#17211F] px-3.5 py-1.5 rounded-xl border border-black/10 shadow-md will-change-transform"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#17211F] font-medium">
            USA · UK · Worldwide ↔ India
          </span>
        </motion.div>
      </div>

      {/* Main Centered Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        
        {/* Eyebrow Badge ("Now Available ✦" style) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-1.5 rounded-xl border border-[#17352F]/20 bg-white/95 backdrop-blur-md text-[#17211F] text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <span>Now Supporting NRI Families</span>
          <span className="text-[#B86F55] font-serif text-sm">✦</span>
        </motion.div>

        {/* Massive 2-Line Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.08] mb-6 text-[#17211F] drop-shadow-xs">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block font-sans font-medium"
          >
            You Built Abroad
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block font-sans font-medium text-[#17211F]"
          >
            Protect Home with{' '}
            <span className="italic font-serif text-[#17352F] font-normal underline decoration-[#B86F55]/40 underline-offset-8">
              Certainty
            </span>
          </motion.span>
        </h1>

        {/* Centered Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#17211F]/85 max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          The dedicated on-ground family coordination service for NRIs — caring for your elderly parents, ancestral property, and urgent needs in India without compromise.
        </motion.p>

        {/* The Signature Dual-Pill CTA Button ("Get Started ↘" style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 mb-4"
        >
          <button
            onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
            type="button"
            className="group relative cursor-pointer inline-flex items-center shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none"
          >
            <span className="absolute right-0 inset-y-0 w-[calc(100%-2rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
            <span className="relative z-10 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#17352F] text-[#F7F4ED] font-medium text-sm sm:text-base tracking-wide border border-white/10">
              Free Consultation
            </span>
            <span className="relative -left-px z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
              <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </button>

          {/* Micro Reassurances Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#17211F]/85 font-medium pt-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/5 shadow-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B86F55]" />
              <span>20-min consultation</span>
            </div>
            <span className="text-[#17352F]/30">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#17352F]" />
              <span>No obligation</span>
            </div>
            <span className="text-[#17352F]/30">·</span>
            <div className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#17352F]" />
              <span>WhatsApp / Zoom</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Subtle Photo Verification Pill */}
      <motion.div
        style={{
          x: badgeTranslateX,
          y: badgeTranslateY,
        }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] py-2 px-5 rounded-full border border-white/15 shadow-lg text-xs"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-[#D8C8B3] font-light">
          On Ground in Chennai: Elderly parents visited at home by assigned Nithya Mitra care coordinator
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#F7F4ED] bg-white/15 px-2 py-0.5 rounded-sm">
          Verified
        </span>
      </motion.div>

    </section>
  );
};
