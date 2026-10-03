import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isAccent?: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isAccent }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <span className="relative inline-block mx-[0.22em] my-[0.08em]">
      <motion.span
        style={{
          opacity,
          y,
          color: isAccent ? '#B86F55' : '#17211F',
          fontStyle: isAccent ? 'italic' : 'normal',
        }}
        className="inline-block transition-colors duration-150"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const ScrollRevealPhrase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const phrase =
    "We care for your parents in Chennai with the same devotion, respect, and presence — as if you were right there.";

  const words = phrase.split(' ');
  const accentWords = ['parents', 'devotion,', 'presence', '—', 'right', 'there.'];

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh] bg-[#F7F4ED] text-[#17211F] select-none"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden">
        
        {/* Subtle Brand Tag */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.25], [0, 1]),
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#17352F]/12 bg-white/70 backdrop-blur-md text-[#17352F] text-xs font-medium mb-8 sm:mb-12 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
          <span>Our Promise to Every NRI Family</span>
        </motion.div>

        {/* Big Full-Screen Typography */}
        <div className="max-w-5xl w-full mx-auto text-center">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.28] tracking-tight text-[#17211F] flex flex-wrap justify-center items-center">
            {words.map((word, i) => {
              const start = (i / words.length) * 0.75;
              const end = start + (1 / words.length) * 0.75;
              const isAccent = accentWords.includes(word);

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
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
