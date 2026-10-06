import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface WordItemProps {
  word: string;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
  isAccent?: boolean;
}

const AnimatedWord: React.FC<WordItemProps> = ({
  word,
  index,
  totalWords,
  progress,
  isAccent,
}) => {
  // Staggered scroll window per word across 0% to 75% of section scroll
  const step = 0.75 / totalWords;
  const start = index * step;
  const end = Math.min(start + step * 1.35, 0.82);

  // Direction mixture: 0: top, 1: right, 2: down, 3: top-right, 4: down-right
  const dirPattern = index % 5;
  const initialX = dirPattern === 1 ? 50 : dirPattern === 3 || dirPattern === 4 ? 35 : 0;
  const initialY =
    dirPattern === 0 ? -45 : dirPattern === 2 ? 45 : dirPattern === 3 ? -30 : dirPattern === 4 ? 30 : 0;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const wordX = useTransform(progress, [start, end], [initialX, 0]);
  const wordY = useTransform(progress, [start, end], [initialY, 0]);
  const scale = useTransform(progress, [start, end], [0.88, 1]);

  return (
    <motion.span
      style={{
        opacity,
        x: wordX,
        y: wordY,
        scale,
        color: isAccent ? '#B86F55' : '#17211F',
        fontStyle: isAccent ? 'italic' : 'normal',
      }}
      className="inline-block mx-[0.18em] will-change-[opacity,transform]"
    >
      {word}
    </motion.span>
  );
};

export const ScrollRevealPhrase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Measure exact start and end pixel offsets dynamically
  const [scrollRange, setScrollRange] = useState({ start: 400, end: -1600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (textRef.current) {
        const fullWidth = textRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Start: First word ("We") enters a bit right from the center
        const startX = windowWidth * 0.62;
        // End: Last word ("there.") lands right in the center of the viewport
        const endX = windowWidth * 0.5 - fullWidth + 140;
        setScrollRange({ start: startX, end: endX });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 420vh container provides a slower, unhurried, luxurious scroll pacing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 40,
    restDelta: 0.001,
  });

  // Moves across from start to end pixel coordinates cleanly across 0% to 84% scroll
  const containerX = useTransform(
    smoothProgress,
    [0, 0.84],
    [scrollRange.start, scrollRange.end]
  );

  // Only after the last word has arrived in center does it smoothly transition upwards
  const containerY = useTransform(smoothProgress, [0.87, 1.0], ['0vh', '-35vh']);
  const containerOpacity = useTransform(smoothProgress, [0.90, 1.0], [1, 0.1]);

  const words = [
    'Not',
    'another',
    'vendor.',
    'A',
    'dependable',
    'presence',
    'in',
    'India.',
  ];

  const accentWords = ['vendor.', 'dependable', 'presence'];

  return (
    <section
      ref={containerRef}
      className="relative h-[420vh] bg-[#F7F4ED] text-[#17211F] select-none"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          {/* Eyebrow */}
          <span className="text-[11px] 2xl:text-xs font-mono font-semibold uppercase tracking-widest text-[#B86F55] block mb-4">
            WHAT YOU ACTUALLY WANT
          </span>

          {/* Giant Right-to-Left Gliding Typography */}
          <motion.div
            style={{ x: containerX, y: containerY, opacity: containerOpacity }}
            className="whitespace-nowrap flex items-center will-change-transform my-4"
          >
            <h2
              ref={textRef}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-serif font-normal text-[#17211F] tracking-tight leading-none"
            >
              {words.map((word, i) => (
                <AnimatedWord
                  key={i}
                  word={word}
                  index={i}
                  totalWords={words.length}
                  progress={smoothProgress}
                  isAccent={accentWords.includes(word)}
                />
              ))}
            </h2>
          </motion.div>

          {/* Supporting Client Copy */}
          <div className="max-w-3xl mt-6 space-y-4">
            <p className="font-serif italic text-lg sm:text-xl text-[#17352F] leading-snug">
              “I want to know that if something happens, someone I trust will take care of it — without me having to organise everything from abroad.”
            </p>
            <p className="text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed">
              You want your parents to feel supported, connected and cared for — not managed. You want your home looked after. You want local issues handled without becoming a second full-time job. And most importantly, you want to be able to stay connected to your family without constantly worrying about what you cannot see.
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#B86F55] pt-2 border-t border-[#17352F]/10">
              That is the outcome Nithya Mitra is designed around: peace of mind for you, and dependable human support for them.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};







