import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DottedMap } from '@/registry/magicui/dotted-map';
import { ArrowDownRight, MapPin, Clock } from 'lucide-react';

export const GlobalReachSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 250vh scroll container for smooth, responsive vertical scrolling sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth responsive spring physics for fluid scroll tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // 1. Text Vertical Position & Scale:
  // Starts lower (120px) -> Enters center (0px) -> Shrinks and glides up (-40px)
  const titleY = useTransform(
    smoothProgress,
    [0, 0.28, 0.65],
    [110, 0, -35]
  );
  const titleScale = useTransform(
    smoothProgress,
    [0, 0.28, 0.65],
    [1.18, 1.18, 0.88]
  );
  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.18],
    [0, 1]
  );

  // 2. Map Vertical Position, Scale & Opacity:
  // Rises smoothly from down below into the center as the text shrinks
  const mapY = useTransform(
    smoothProgress,
    [0.24, 0.68],
    ['42vh', '0vh']
  );
  const mapScale = useTransform(
    smoothProgress,
    [0.24, 0.68],
    [0.85, 1.05]
  );
  const mapOpacity = useTransform(
    smoothProgress,
    [0.24, 0.48],
    [0, 1]
  );

  // 3. Bottom live coordination action bar (reveals smoothly beneath the centered map)
  const bottomBarOpacity = useTransform(smoothProgress, [0.65, 0.86], [0, 1]);
  const bottomBarY = useTransform(smoothProgress, [0.65, 0.86], [35, 0]);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[250vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Sticky Viewport Frame (100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 select-none">
        
        {/* Animated Header: Enters from bottom to center, then shrinks and glides up */}
        <motion.div
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
          }}
          className="z-20 text-center pointer-events-none will-change-transform mb-2 sm:mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#17352F]/15 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span>Direct Global Coordination</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight">
            Trusted by NRI families
            <span className="block italic text-[#B86F55]">worldwide</span>
          </h2>
        </motion.div>

        {/* Dotted Map: Rises smoothly from down below to the center */}
        <motion.div
          style={{
            y: mapY,
            scale: mapScale,
            opacity: mapOpacity,
          }}
          className="relative z-10 w-full max-w-5xl flex items-center justify-center will-change-transform"
        >
          <DottedMap dotRadius={0.22} dotColor="#17352F" />
        </motion.div>

        {/* Bottom Coordination Status & Action Bar: Reveals under the centered map */}
        <motion.div
          style={{
            opacity: bottomBarOpacity,
            y: bottomBarY,
          }}
          className="z-20 w-full max-w-xl mt-3 sm:mt-5 will-change-transform"
        >
          <div className="w-full bg-white/95 backdrop-blur-xl rounded-2xl p-2.5 sm:p-3.5 border border-[#17352F]/10 shadow-[0_15px_35px_rgba(23,53,47,0.08)] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 px-3 text-xs text-[#17211F]/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B86F55]" />
                <span className="font-medium">Hub: Chennai, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#17352F]" />
                <span className="font-mono text-[11px]">24/7 Global NRI Care</span>
              </div>
            </div>

            <button
              onClick={scrollToEnquiry}
              type="button"
              className="group w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowDownRight className="w-3.5 h-3.5 text-[#B86F55] transition-transform duration-200 group-hover:-rotate-45" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

