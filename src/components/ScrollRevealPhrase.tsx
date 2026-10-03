import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const ScrollRevealPhrase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 200vh container for smooth horizontal scroll progression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Text glides smoothly from right to left across the screen and completes by 65% scroll
  const x = useTransform(smoothProgress, [0, 0.65], ['25vw', '-80vw']);
  
  // Once the text has completed, it glides upwards to transition seamlessly to the next section
  const y = useTransform(smoothProgress, [0.65, 1.0], ['0vh', '-35vh']);
  const opacity = useTransform(smoothProgress, [0.68, 0.95], [1, 0.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh] bg-[#F7F4ED] text-[#17211F] select-none"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Giant Right-to-Left Gliding Typography */}
        <motion.div
          style={{ x, y, opacity }}
          className="whitespace-nowrap flex items-center will-change-transform"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-serif font-normal text-[#17211F] tracking-tight leading-none px-6">
            We care for your parents in Chennai with the same{' '}
            <span className="italic text-[#B86F55]">devotion, respect & presence</span>
            {' '}— as if you were right there.
          </h2>
        </motion.div>

      </div>
    </section>
  );
};



