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
  // When cursor moves right (+0.5), image shifts left (-20px).
  // When cursor moves down (+0.5), image shifts up (-16px).
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  // Subtle 3D perspective tilt
  const cardRotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const cardRotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

  // Foreground floating badges slight forward depth offset
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
    <section className="relative flex flex-col items-center pt-28 sm:pt-36 min-[850px]:pt-40 pb-16 md:pb-24 overflow-hidden border-b border-[#17352F]/10">
      
      {/* Background with warm ambient glow in our project colors (Forest Green & Terracotta) */}
      <div
        className="absolute inset-0 min-[850px]:inset-2.5 bg-cover bg-center bg-no-repeat -z-10 rounded-br-4xl rounded-bl-4xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(23, 53, 47, 0.08) 0%, rgba(184, 111, 85, 0.05) 45%, rgba(247, 244, 237, 0) 100%), #F7F4ED'
        }}
        aria-hidden="true"
      />

      {/* Main Centered Content (Ditto Inspiration Layout) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow Badge ("Now Available ✦" style) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 pl-4 pr-3.5 py-1.5 rounded-xl border border-[#17352F]/15 bg-white/90 backdrop-blur-sm text-[#17211F] text-xs sm:text-sm font-medium mb-6 shadow-xs"
        >
          <span>Now Supporting NRI Families</span>
          <span className="text-[#B86F55] font-serif text-sm">✦</span>
        </motion.div>

        {/* Massive 2-Line Headline ("Build Faster / Ship with Confidence" style) */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.08] mb-6 text-[#17211F]">
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
            <span className="italic font-serif text-[#17352F] font-normal">
              Certainty
            </span>
          </motion.span>
        </h1>

        {/* Centered Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#17211F]/75 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
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
            className="group relative cursor-pointer inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
          >
            <span className="absolute right-0 inset-y-0 w-[calc(100%-2rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
            <span className="relative z-10 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#17352F] text-[#F7F4ED] font-medium text-sm sm:text-base tracking-wide border border-white/10">
              Free Consultation
            </span>
            <span className="relative -left-px z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
              <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </button>

          {/* Micro Reassurances */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#68716D] font-normal pt-1">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B86F55]" />
              <span>20-min consultation</span>
            </div>
            <span className="text-[#D8C8B3]">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#17352F]" />
              <span>No obligation</span>
            </div>
            <span className="text-[#D8C8B3]">·</span>
            <div className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#17352F]" />
              <span>WhatsApp / Zoom</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Elderly Showcase with Minute Opposite-Direction Parallax Hover */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          perspective: 1200,
        }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 cursor-pointer"
      >
        <motion.div
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative rounded-2xl overflow-hidden border border-[#17352F]/15 shadow-2xl bg-[#FBFAF6] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(23,53,47,0.18)]"
        >
          
          {/* Authentic Elderly Parents + Ground Coordinator Story Image (Moving in Opposite Direction) */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EAE5DB]">
            <motion.img
              style={{
                x: imageTranslateX,
                y: imageTranslateY,
                scale: 1.08, // Generous scale to prevent any edge clipping during opposite motion
              }}
              src={brandImages.hero.src}
              alt="Elderly Indian parents in Chennai supported at home by Nithya Mitra coordinator with NRI son on video call"
              className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] will-change-transform"
              loading="eager"
              fetchPriority="high"
            />
            
            {/* Top Left Floating Pill: Live Ground Status (with subtle depth shift) */}
            <motion.div
              style={{
                x: badgeTranslateX,
                y: badgeTranslateY,
              }}
              className="absolute top-4 left-4 bg-[#17352F]/90 backdrop-blur-md text-[#F7F4ED] px-3.5 py-1.5 rounded-xl border border-white/15 shadow-md flex items-center gap-2 will-change-transform pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider font-medium">
                Live Ground Hub · Chennai, India
              </span>
            </motion.div>

            {/* Top Right Floating Pill: Timezone Connection (with subtle depth shift) */}
            <motion.div
              style={{
                x: badgeTranslateX,
                y: badgeTranslateY,
              }}
              className="absolute top-4 right-4 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#17211F] px-3.5 py-1.5 rounded-xl border border-black/10 shadow-md will-change-transform pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#17211F] font-medium">
                USA · UK · Worldwide ↔ India
              </span>
            </motion.div>

            {/* Bottom Caption Overlay */}
            <motion.div
              style={{
                x: badgeTranslateX,
                y: badgeTranslateY,
              }}
              className="absolute bottom-6 left-6 right-6 hidden md:flex items-center justify-between bg-[#17352F]/85 backdrop-blur-md text-[#F7F4ED] p-3.5 px-5 rounded-xl border border-white/10 shadow-lg will-change-transform pointer-events-none"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-serif text-sm font-semibold text-[#D8C8B3]">
                  NM
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-[#F7F4ED]">
                    The Whole Picture in One Frame
                  </p>
                  <p className="text-[11px] text-[#D8C8B3] font-light">
                    Elderly parents in their living room · Assigned care lead in official uniform · NRI son connected live
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D8C8B3] bg-white/10 px-3 py-1 rounded-lg">
                100% Verified Presence
              </span>
            </motion.div>

          </div>

        </motion.div>
      </motion.div>

    </section>
  );
};
