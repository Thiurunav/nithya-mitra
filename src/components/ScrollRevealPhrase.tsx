import React, { useRef } from 'react';
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
  // Staggered scroll window per word across 0% to 58% of section scroll
  const step = 0.58 / totalWords;
  const start = index * step;
  const end = Math.min(start + step * 1.5, 0.62);

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

  // 190vh container for smooth scroll pacing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Overall phrase moves right-to-left across the screen and completes by 65% scroll
  const containerX = useTransform(smoothProgress, [0, 0.65], ['25vw', '-80vw']);
  
  // Once the text has completed, it glides upwards to transition seamlessly to the next section
  const containerY = useTransform(smoothProgress, [0.65, 1.0], ['0vh', '-38vh']);
  const containerOpacity = useTransform(smoothProgress, [0.68, 0.95], [1, 0.1]);

  const words = [
    'We',
    'care',
    'for',
    'your',
    'parents',
    'in',
    'Chennai',
    'with',
    'the',
    'same',
    'devotion,',
    'respect',
    '&',
    'presence',
    '—',
    'as',
    'if',
    'you',
    'were',
    'right',
    'there.',
  ];

  const accentWords = ['parents', 'devotion,', 'presence', '—', 'right', 'there.'];

  return (
    <section
      ref={containerRef}
      className="relative h-[190vh] bg-[#F7F4ED] text-[#17211F] select-none"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Giant Right-to-Left Gliding Typography with Mixed Direction Word Entrances */}
        <motion.div
          style={{ x: containerX, y: containerY, opacity: containerOpacity }}
          className="whitespace-nowrap flex items-center will-change-transform"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-serif font-normal text-[#17211F] tracking-tight leading-none px-6">
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

      </div>
    </section>
  );
};




