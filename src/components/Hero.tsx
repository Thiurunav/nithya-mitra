import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the pinned hero container (200vh height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Buttery smooth spring physics for high framerate scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  // 1. Hero text & overlay controls fade out during the initial scroll (0 -> 0.25)
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.22], [0, -35]);
  const heroPointerEvents = useTransform(smoothProgress, (p) => (p > 0.2 ? 'none' : 'auto'));

  // 2. Center card shrinks down from prominent hero focal into triptych center card (0 -> 0.6)
  const centerScale = useTransform(smoothProgress, [0, 0.35, 0.65], [1.02, 0.92, 0.96]);
  const centerBorderRadius = useTransform(smoothProgress, [0, 0.3], [16, 28]);
  const cardsClusterY = useTransform(smoothProgress, [0.4, 0.85], [0, -30]);

  // 3. Left card slides out from behind center card and tilts counter-clockwise (0.2 -> 0.65)
  const leftX = useTransform(smoothProgress, [0.2, 0.65], [0, -320]);
  const leftRotate = useTransform(smoothProgress, [0.2, 0.65], [0, -5]);
  const leftOpacity = useTransform(smoothProgress, [0.2, 0.45], [0, 1]);
  const leftScale = useTransform(smoothProgress, [0.2, 0.65], [0.85, 0.88]);

  // 4. Right card slides out from behind center card and tilts clockwise (0.2 -> 0.65)
  const rightX = useTransform(smoothProgress, [0.2, 0.65], [0, 320]);
  const rightRotate = useTransform(smoothProgress, [0.2, 0.65], [0, 5]);
  const rightOpacity = useTransform(smoothProgress, [0.2, 0.45], [0, 1]);
  const rightScale = useTransform(smoothProgress, [0.2, 0.65], [0.85, 0.88]);

  // 5. Editorial narrative text fades in below the triptych (0.5 -> 0.85)
  const editorialOpacity = useTransform(smoothProgress, [0.55, 0.82], [0, 1]);
  const editorialY = useTransform(smoothProgress, [0.55, 0.82], [30, 0]);

  const scrollToServices = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEnquiry = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[220vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 select-none">
        
        {/* Main Triptych Cluster */}
        <motion.div
          style={{ y: cardsClusterY }}
          className="relative w-full max-w-5xl flex items-center justify-center h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px]"
        >
          
          {/* Left Card: Health & Vitals Care (Slides out to the left) */}
          <motion.div
            style={{
              x: leftX,
              rotate: leftRotate,
              opacity: leftOpacity,
              scale: leftScale,
            }}
            className="absolute z-10 w-[240px] sm:w-[320px] md:w-[390px] lg:w-[440px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(23,53,47,0.14)] border border-[#17352F]/10 bg-white pointer-events-auto cursor-pointer"
            whileHover={{ scale: 0.92, rotate: -3 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToServices}
          >
            <img
              src="/triptych-care-vitals.jpg"
              alt="Nithya Mitra Care Coordinator checking vitals with gentle warmth for elderly mother at home in Chennai"
              className="w-full h-full object-cover object-center filter saturate-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                Healthcare & Doctor Accompaniment
              </span>
            </div>
          </motion.div>

          {/* Center Card: The Hero Family Photo (Scales down, holds hero typography initially) */}
          <motion.div
            style={{
              scale: centerScale,
              borderRadius: centerBorderRadius,
            }}
            className="relative z-20 w-[300px] sm:w-[420px] md:w-[500px] lg:w-[580px] aspect-[4/3] overflow-hidden shadow-[0_24px_60px_rgba(23,53,47,0.22)] border-2 border-white/80 bg-[#1A1816] pointer-events-auto"
          >
            {/* Center Photo */}
            <img
              src="/triptych-family-sofa.jpg"
              alt="Multi-generational South Indian family gathered in Chennai living room laughing joyfully together"
              className="w-full h-full object-cover object-center filter saturate-[1.04]"
              loading="eager"
            />

            {/* Subtle Hero Scrim for text readability */}
            <motion.div
              style={{ opacity: heroTextOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none"
            />

            {/* Initial Hero Typography Overlay */}
            <motion.div
              style={{
                opacity: heroTextOpacity,
                y: heroTextY,
                pointerEvents: heroPointerEvents as any,
              }}
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 text-center items-center text-white"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-[#F7F4ED] text-[11px] sm:text-xs font-medium mb-3 tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
                <span>NRI Family Care · Chennai</span>
                <span className="text-[#D8C8B3]">✦</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] text-[#FBFAF6] max-w-lg drop-shadow-md mb-5 sm:mb-6">
                Family coordination made for{' '}
                <span className="italic text-[#D8C8B3]">real life</span>
              </h1>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {/* Book Consultation Button */}
                <button
                  onClick={() => scrollToEnquiry()}
                  type="button"
                  className="group relative cursor-pointer inline-flex items-center shadow-lg transition-all duration-200 focus:outline-none"
                >
                  <span className="absolute right-0 inset-y-0 w-[calc(100%-1.25rem)] rounded-xl bg-[#B86F55] transition-colors duration-200 group-hover:bg-[#9E5B44]" />
                  <span className="relative z-10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#0E2420] text-[#F7F4ED] font-medium text-xs tracking-wide border border-white/20">
                    Free Consultation
                  </span>
                  <span className="relative -left-px z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-200 group-hover:bg-[#9E5B44]">
                    <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-rotate-45" />
                  </span>
                </button>

                {/* Explore Services Button */}
                <button
                  onClick={() => scrollToServices()}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/90 hover:bg-white text-[#17211F] text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current text-[#17352F]" />
                  <span>Explore Services</span>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Card: Outdoor Walk Companion (Slides out to the right) */}
          <motion.div
            style={{
              x: rightX,
              rotate: rightRotate,
              opacity: rightOpacity,
              scale: rightScale,
            }}
            className="absolute z-10 w-[240px] sm:w-[320px] md:w-[390px] lg:w-[440px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(23,53,47,0.14)] border border-[#17352F]/10 bg-white pointer-events-auto cursor-pointer"
            whileHover={{ scale: 0.92, rotate: 3 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToServices}
          >
            <img
              src="/triptych-park-walk.jpg"
              alt="Senior father walking actively with smiling care coordinator in lush green Chennai park"
              className="w-full h-full object-cover object-center filter saturate-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                Companionship & Vitality Support
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* Editorial Text Statement Beneath the Fanned Triptych */}
        <motion.div
          style={{
            opacity: editorialOpacity,
            y: editorialY,
          }}
          className="max-w-3xl mx-auto text-center mt-6 sm:mt-8 px-4"
        >
          <p className="text-base sm:text-xl md:text-2xl font-serif text-[#17211F] leading-[1.5] font-normal">
            Most eldercare services stop at a monthly phone call and call it a day.{' '}
            <span className="font-sans font-medium text-[#17352F]">Nithya Mitra</span> goes all in with dedicated ground coordinators in Chennai, accompanied hospital visits, emergency response, and proactive family updates built for real NRI peace of mind.
          </p>

          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#17211F]/70">
            <span>Have specific questions about your parents in Chennai?</span>
            <button
              onClick={() => scrollToServices()}
              className="text-[#17352F] font-semibold underline underline-offset-4 decoration-[#B86F55] hover:text-[#B86F55] transition-colors cursor-pointer"
            >
              Explore our services
            </button>
            <span>or</span>
            <button
              onClick={() => scrollToEnquiry()}
              className="text-[#B86F55] font-semibold underline underline-offset-4 decoration-[#B86F55] hover:text-[#9E5B44] transition-colors cursor-pointer"
            >
              schedule a free consultation
            </button>
            <span>.</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
