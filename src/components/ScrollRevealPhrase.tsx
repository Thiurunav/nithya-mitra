import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isAccent?: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isAccent }) => {
  // Reveal this specific word from 0 to 1 over its exact scroll range
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block mx-[0.2em] my-[0.06em]">
      {/* Ghost Base Word (Faint background text) */}
      <span className="opacity-15 select-none text-[#17211F]">
        {children}
      </span>

      {/* Solid Active Word (Revealed crisply on scroll) */}
      <motion.span
        style={{
          opacity,
          y,
          color: isAccent ? '#B86F55' : '#17211F',
          fontStyle: isAccent ? 'italic' : 'normal',
        }}
        className="absolute inset-0 select-none will-change-[opacity,transform]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const ScrollRevealPhrase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 220vh container gives generous scroll runway for every word to reveal cleanly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const phrase =
    "We care for your parents in Chennai with the same devotion, respect, and presence — as if you were right there.";

  const words = phrase.split(' ');
  const accentWords = ['parents', 'devotion,', 'presence', '—', 'right', 'there.'];

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-[#F7F4ED] text-[#17211F] select-none"
    >
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 overflow-hidden">
        
        {/* Subtle Pill Tag */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0, 0.12], [0, 1]),
            y: useTransform(smoothProgress, [0, 0.12], [10, 0]),
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#17352F]/12 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-8 sm:mb-12 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
          <span>Our Promise to Every NRI Family</span>
        </motion.div>

        {/* Grand Full-Width Typography */}
        <div className="max-w-6xl w-full mx-auto text-center">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-normal leading-[1.24] tracking-tight text-[#17211F] flex flex-wrap justify-center items-center">
            {words.map((word, i) => {
              // Word start and end spread evenly across 10% to 90% of the section scroll
              const step = 0.80 / words.length;
              const start = 0.08 + i * step;
              const end = start + step * 0.9;
              const isAccent = accentWords.includes(word);

              return (
                <Word
                  key={i}
                  progress={smoothProgress}
                  range={[start, end]}
                  isAccent={isAccent}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
};

