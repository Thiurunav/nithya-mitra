import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { brandImages } from '../data/assets';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate values normalized between -0.5 and +0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth organic deceleration
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // OPPOSITE DIRECTION minute parallax:
  // When cursor moves right (+0.5), image shifts left (-20px).
  // When cursor moves down (+0.5), image shifts up (-16px).
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

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
      className="relative isolate min-h-[90vh] md:min-h-screen flex items-center pt-28 sm:pt-36 min-[850px]:pt-40 pb-16 sm:pb-20 overflow-hidden border-b border-[#17352F]/15 cursor-default select-none"
    >
      {/* CINEMATIC HERO BACKGROUND (Full Natural Tones, NO White Shade) */}
      <div className="absolute inset-0 min-[850px]:inset-2.5 z-0 overflow-hidden rounded-br-4xl rounded-bl-4xl bg-[#1A1816]">
        
        {/* Parallax Image that glides in the OPPOSITE direction on hover */}
        <motion.img
          src={brandImages.hero.src}
          alt={brandImages.hero.alt}
          style={{
            x: imageTranslateX,
            y: imageTranslateY,
            scale: 1.08,
          }}
          className="w-full h-full object-cover object-[75%_center] md:object-[68%_center] filter saturate-[1.02] contrast-[1.04] will-change-transform"
          loading="eager"
          fetchPriority="high"
        />

        {/* Subtle Dark Vignette on Left for Crisp Ivory Text Readability (Parents on Right remain 100% untouched) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 via-45% to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container: Clean, Minimal, Proportionate Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl flex flex-col items-start text-left">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-[#F7F4ED] text-xs font-medium mb-5 tracking-wide shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span>Now Supporting NRI Families</span>
            <span className="text-[#D8C8B3]">✦</span>
          </motion.div>

          {/* Compact, High-Impact 2-Line Headline (Proportionate, Not Too Big) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-semibold tracking-tight leading-[1.14] mb-7 text-[#F7F4ED] drop-shadow-sm">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block font-sans"
            >
              You Built Abroad
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-sans text-[#F7F4ED] mt-1"
            >
              Protect Home with{' '}
              <span className="italic font-serif text-[#D8C8B3] font-normal underline decoration-[#B86F55]/60 underline-offset-8">
                Certainty
              </span>
            </motion.span>
          </h1>

          {/* Minimal Signature Dual-Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
              type="button"
              className="group relative cursor-pointer inline-flex items-center shadow-2xl transition-all duration-300 focus:outline-none"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.75rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
              <span className="relative z-10 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#0E2420] text-[#F7F4ED] font-medium text-xs sm:text-sm tracking-wide border border-white/20">
                Free Consultation
              </span>
              <span className="relative -left-px z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
