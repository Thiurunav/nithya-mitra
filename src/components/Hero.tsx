import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 240vh scroll track for smooth, spacious transition pacing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring physics for fluid 60fps responsiveness
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  // 1. Initial Hero typography & CTA buttons fade out quickly as scroll begins (0 -> 0.2)
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.18], [0, -35]);
  const heroPointerEvents = useTransform(smoothProgress, (p) => (p > 0.18 ? 'none' : 'auto'));

  // 2. Center image starts FULL-SCREEN (scale 1.0, 0px border-radius) and shrinks down into a card
  const centerScale = useTransform(smoothProgress, [0, 0.45], [1, 0.52]);
  const centerBorderRadius = useTransform(smoothProgress, [0.05, 0.35], [0, 32]);

  // Overall card cluster position shift upwards to make room for the editorial statement
  const clusterY = useTransform(smoothProgress, [0.45, 0.85], [0, -45]);

  // 3. Left card slides out from behind center card and tilts counter-clockwise (0.28 -> 0.68)
  const leftX = useTransform(smoothProgress, [0.28, 0.68], [0, -320]);
  const leftRotate = useTransform(smoothProgress, [0.28, 0.68], [0, -5]);
  const leftOpacity = useTransform(smoothProgress, [0.28, 0.48], [0, 1]);
  const leftScale = useTransform(smoothProgress, [0.28, 0.68], [0.44, 0.47]);

  // 4. Right card slides out from behind center card and tilts clockwise (0.28 -> 0.68)
  const rightX = useTransform(smoothProgress, [0.28, 0.68], [0, 320]);
  const rightRotate = useTransform(smoothProgress, [0.28, 0.68], [0, 5]);
  const rightOpacity = useTransform(smoothProgress, [0.28, 0.48], [0, 1]);
  const rightScale = useTransform(smoothProgress, [0.28, 0.68], [0.44, 0.47]);

  // 5. Editorial statement text fades in smoothly below the cards (0.55 -> 0.85)
  const editorialOpacity = useTransform(smoothProgress, [0.58, 0.85], [0, 1]);
  const editorialY = useTransform(smoothProgress, [0.58, 0.85], [40, 0]);

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
      className="relative h-[250vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Pinned Viewport Container (100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none">
        
        {/* Main Triptych Presentation Canvas */}
        <motion.div
          style={{ y: clusterY }}
          className="relative w-full h-full flex items-center justify-center"
        >
          
          {/* Left Card: Vitals & Medical Escort (Slides out to the left) */}
          <motion.div
            style={{
              x: leftX,
              rotate: leftRotate,
              opacity: leftOpacity,
              scale: leftScale,
            }}
            className="absolute z-10 w-full max-w-[920px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(23,53,47,0.18)] border border-[#17352F]/10 bg-white pointer-events-auto cursor-pointer"
            whileHover={{ scale: 0.49, rotate: -3 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToServices}
          >
            <img
              src="/triptych-care-vitals.jpg"
              alt="Nithya Mitra Care Coordinator checking vitals with gentle warmth for elderly mother at home in Chennai"
              className="w-full h-full object-cover object-center filter saturate-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white text-base font-medium tracking-wide">
                Healthcare & Doctor Accompaniment
              </span>
            </div>
          </motion.div>

          {/* Right Card: Outdoor Companion Walk (Slides out to the right) */}
          <motion.div
            style={{
              x: rightX,
              rotate: rightRotate,
              opacity: rightOpacity,
              scale: rightScale,
            }}
            className="absolute z-10 w-full max-w-[920px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(23,53,47,0.18)] border border-[#17352F]/10 bg-white pointer-events-auto cursor-pointer"
            whileHover={{ scale: 0.49, rotate: 3 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToServices}
          >
            <img
              src="/triptych-park-walk.jpg"
              alt="Senior father walking actively with smiling care coordinator in lush green Chennai park"
              className="w-full h-full object-cover object-center filter saturate-[1.02]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white text-base font-medium tracking-wide">
                Companionship & Vitality Support
              </span>
            </div>
          </motion.div>

          {/* Center Main Card: Starts 100% Full-Screen Edge-to-Edge and Shrinks Down on Scroll */}
          <motion.div
            style={{
              scale: centerScale,
              borderRadius: centerBorderRadius,
            }}
            className="relative z-20 w-full h-full max-w-none max-h-none overflow-hidden bg-[#1A1816] pointer-events-auto shadow-[0_25px_60px_rgba(23,53,47,0.22)] border-0 sm:border border-white/20"
          >
            {/* Center Family Photo */}
            <img
              src="/triptych-family-sofa.jpg"
              alt="Multi-generational South Indian family gathered in Chennai living room laughing joyfully together"
              className="w-full h-full object-cover object-center filter saturate-[1.04]"
              loading="eager"
            />

            {/* Subtle Hero Scrim for text readability in Full-Screen mode */}
            <motion.div
              style={{ opacity: heroTextOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 pointer-events-none"
            />

            {/* Initial Hero Typography Overlay (Full-Screen Hero State) */}
            <motion.div
              style={{
                opacity: heroTextOpacity,
                y: heroTextY,
                pointerEvents: heroPointerEvents as any,
              }}
              className="absolute inset-0 flex flex-col justify-end items-center text-center p-8 sm:p-12 md:p-16 lg:p-20 text-white"
            >
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-[#F7F4ED] text-xs font-medium mb-4 tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
                <span>NRI Family Care · Chennai</span>
                <span className="text-[#D8C8B3]">✦</span>
              </div>

              {/* Large Hero Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.12] text-[#FBFAF6] max-w-3xl drop-shadow-md mb-6 sm:mb-8">
                Family coordination made for{' '}
                <span className="italic text-[#D8C8B3]">real life</span>
              </h1>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {/* Book Consultation Button */}
                <button
                  onClick={() => scrollToEnquiry()}
                  type="button"
                  className="group relative cursor-pointer inline-flex items-center shadow-2xl transition-all duration-200 focus:outline-none"
                >
                  <span className="absolute right-0 inset-y-0 w-[calc(100%-1.5rem)] rounded-xl bg-[#B86F55] transition-colors duration-200 group-hover:bg-[#9E5B44]" />
                  <span className="relative z-10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#0E2420] text-[#F7F4ED] font-medium text-xs sm:text-sm tracking-wide border border-white/20">
                    Free Consultation
                  </span>
                  <span className="relative -left-px z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-200 group-hover:bg-[#9E5B44]">
                    <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-45" />
                  </span>
                </button>

                {/* Explore Services Button */}
                <button
                  onClick={() => scrollToServices()}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/95 hover:bg-white text-[#17211F] text-xs sm:text-sm font-semibold shadow-lg transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#17352F]" />
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Scroll down hint */}
              <div className="mt-8 text-[11px] uppercase tracking-widest text-[#D8C8B3]/70 font-mono flex items-center gap-2">
                <span>Scroll to explore</span>
                <span className="animate-bounce">↓</span>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Editorial Narrative Statement (Fades in directly beneath the triptych) */}
        <motion.div
          style={{
            opacity: editorialOpacity,
            y: editorialY,
          }}
          className="absolute bottom-6 sm:bottom-10 inset-x-0 max-w-3xl mx-auto text-center px-4 z-30"
        >
          <p className="text-base sm:text-xl md:text-2xl font-serif text-[#17211F] leading-[1.5] font-normal">
            Most eldercare services stop at a monthly phone call and call it a day.{' '}
            <span className="font-sans font-medium text-[#17352F]">Nithya Mitra</span> goes all in with dedicated ground coordinators in Chennai, accompanied hospital visits, emergency response, and proactive family updates built for real NRI peace of mind.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#17211F]/70">
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
