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

  // Spring physics for butter-smooth organic deceleration and return
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // OPPOSITE DIRECTION minute parallax:
  // When cursor moves right (+0.5), image shifts left (-24px).
  // When cursor moves down (+0.5), image shifts up (-18px).
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [26, -26]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

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
      className="relative isolate min-h-[92vh] md:min-h-screen flex items-center pt-28 sm:pt-36 min-[850px]:pt-40 pb-16 sm:pb-20 overflow-hidden border-b border-[#17352F]/15 cursor-default select-none"
    >
      {/* FULL-SCREEN BACKGROUND IMAGE (Right-Weighted Focal Point so Parents are 100% Uncovered) */}
      <div className="absolute inset-0 min-[850px]:inset-2.5 z-0 overflow-hidden rounded-br-4xl rounded-bl-4xl bg-[#EAE5DB]">
        
        {/* Parallax Image that glides in the OPPOSITE direction on hover */}
        <motion.img
          src={brandImages.hero.src}
          alt="Nithya Mitra care coordinator caring for elderly parents in Chennai with NRI family on live video"
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

      {/* Main Content Container: Minimal Editorial Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl flex flex-col items-start text-left">
          
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
          <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-medium tracking-tight leading-[1.06] mb-8 text-[#17211F]">
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

          {/* Minimal Signature Dual-Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
          </motion.div>

        </div>
      </div>

    </section>
  );
};
