import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ShieldCheck, Clock, Video, Globe2 } from 'lucide-react';
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
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  // Floating foreground badges subtle depth offset
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
      className="relative isolate min-h-[92vh] md:min-h-screen flex items-center pt-24 sm:pt-28 min-[850px]:pt-32 pb-14 sm:pb-16 overflow-hidden border-b border-[#17352F]/15 cursor-default select-none"
    >
      {/* FULL-SCREEN BACKGROUND IMAGE (Right-Weighted Focal Point so Parents are 100% Uncovered) */}
      <div className="absolute inset-0 min-[850px]:inset-2.5 z-0 overflow-hidden rounded-br-4xl rounded-bl-4xl bg-[#EAE5DB]">
        
        {/* Parallax Image that glides in the OPPOSITE direction on hover */}
        <motion.img
          src={brandImages.hero.src}
          alt="Nithya Mitra coordinator caring for elderly parents in Chennai while NRI family connects on live video call"
          style={{
            x: imageTranslateX,
            y: imageTranslateY,
            scale: 1.10,
          }}
          className="w-full h-full object-cover object-[78%_center] lg:object-[68%_center] filter saturate-[1.04] contrast-[1.02] will-change-transform"
          loading="eager"
          fetchPriority="high"
        />

        {/* Seamless Directional Fade: Solid readability on the left, 100% pure unobstructed photo on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4ED] via-[#F7F4ED]/95 via-35% md:via-42% to-transparent pointer-events-none" />
        
        {/* Subtle vertical gradients for top/bottom edge integration */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F7F4ED]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F7F4ED]/90 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container: Left Column for Wording, Right Column leaves the Parents completely visible */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Clean, Unblocked Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-1.5 rounded-xl border border-[#17352F]/15 bg-white/95 backdrop-blur-sm text-[#17211F] text-xs sm:text-sm font-medium mb-6 shadow-xs"
            >
              <span>Now Supporting NRI Families</span>
              <span className="text-[#B86F55] font-serif text-sm">✦</span>
            </motion.div>

            {/* Massive 2-Line Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-medium tracking-tight leading-[1.08] mb-6 text-[#17211F]">
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
                <span className="italic font-serif text-[#17352F] font-normal underline decoration-[#B86F55]/40 underline-offset-8">
                  Certainty
                </span>
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-[#17211F]/85 font-light leading-relaxed mb-8 max-w-xl"
            >
              The dedicated on-ground family coordination service for NRIs — caring for your elderly parents, ancestral property, and urgent needs in India without compromise.
            </motion.p>

            {/* Signature Dual-Pill CTA Button + Micro Reassurances */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
            >
              <button
                onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
                type="button"
                className="group relative cursor-pointer inline-flex items-center shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none"
              >
                <span className="absolute right-0 inset-y-0 w-[calc(100%-1.75rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
                <span className="relative z-10 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#17352F] text-[#F7F4ED] font-medium text-sm sm:text-base tracking-wide border border-white/10">
                  Free Consultation
                </span>
                <span className="relative -left-px z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
                  <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#68716D] font-normal px-2">
                <Globe2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>Supporting families across USA, UK, Canada, Australia & worldwide</span>
              </div>
            </motion.div>

            {/* Reassurance Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#17211F]/80 font-normal">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B86F55]" />
                <span>20-min consultation</span>
              </div>
              <span className="text-[#17352F]/25">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#17352F]" />
                <span>No obligation</span>
              </div>
              <span className="text-[#17352F]/25">·</span>
              <div className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#17352F]" />
                <span>WhatsApp / Zoom</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Status Tags positioned directly over the visible parents */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-between h-[420px] pointer-events-none">
            
            {/* Top Right Live Ground Tag */}
            <motion.div
              style={{
                x: badgeTranslateX,
                y: badgeTranslateY,
              }}
              className="self-end inline-flex items-center gap-2 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] px-4 py-2 rounded-xl border border-white/20 shadow-xl will-change-transform"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider font-medium">
                Live Ground Hub · Chennai, India
              </span>
            </motion.div>

            {/* Bottom Right Verified Presence Pill */}
            <motion.div
              style={{
                x: badgeTranslateX,
                y: badgeTranslateY,
              }}
              className="self-end bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] p-3 px-4 rounded-xl border border-white/20 shadow-xl will-change-transform max-w-xs text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#D8C8B3]">
                  100% Verified Presence
                </span>
              </div>
              <p className="text-xs text-[#F7F4ED] font-light leading-snug">
                Your parents at home in India. Assigned care coordinator on ground. You connected live.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
};
