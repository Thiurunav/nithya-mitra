import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DottedMap } from '@/registry/magicui/dotted-map';

export const GlobalReachSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll container for fluid vertical scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // 1. Text Vertical Position & Scale:
  const titleY = useTransform(
    smoothProgress,
    [0, 0.28, 0.65],
    ['20vh', '8vh', '0vh']
  );
  const titleScale = useTransform(
    smoothProgress,
    [0, 0.28, 0.65],
    [1.1, 1.1, 0.95]
  );

  // 2. Map Vertical Position, Scale & Opacity:
  const mapY = useTransform(
    smoothProgress,
    [0.22, 0.68],
    ['30vh', '0vh']
  );
  const mapScale = useTransform(
    smoothProgress,
    [0.22, 0.68],
    [0.9, 1.05]
  );
  const mapOpacity = useTransform(
    smoothProgress,
    [0.22, 0.48],
    [0.2, 1]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] lg:h-[240vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-20 sm:pt-24 lg:pt-28 2xl:pt-36 pb-6 sm:pb-10 overflow-hidden px-4 sm:px-6 lg:px-8 2xl:px-12 select-none">
        
        {/* Animated Header */}
        <motion.div
          style={{
            y: titleY,
            scale: titleScale,
          }}
          className="z-20 text-center pointer-events-none will-change-transform mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight">
            Trusted by NRI families
            <span className="block italic text-[#B86F55]">worldwide</span>
          </h2>
        </motion.div>

        {/* Dotted Map */}
        <motion.div
          style={{
            y: mapY,
            scale: mapScale,
            opacity: mapOpacity,
          }}
          className="relative z-10 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl flex items-center justify-center will-change-transform"
        >
          <DottedMap dotRadius={0.22} dotColor="#17352F" />
        </motion.div>

      </div>
    </div>
  );
};
