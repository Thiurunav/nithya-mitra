import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DottedMap } from '@/registry/magicui/dotted-map';
import { ArrowDownRight, MapPin, Clock } from 'lucide-react';

export const GlobalReachSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 300vh scroll container for spacious 3-stage scroll sequence:
  // 1. Enter from absolute right
  // 2. Firm center rest plateau (large & centered)
  // 3. Move to left with right-side content reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth responsive spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  // Map X-Position:
  // 0.00 -> 0.22 : Slides from '80vw' (absolute right) into '0%' (Center)
  // 0.22 -> 0.54 : REMAINS FIRMLY LOCKED AT '0%' (Center Rest Plateau)
  // 0.54 -> 0.82 : Glides from '0%' to '-26%' (Left Split Position)
  const mapX = useTransform(
    smoothProgress,
    [0, 0.22, 0.54, 0.82],
    ['80vw', '0%', '0%', '-26%']
  );

  // Map Scale:
  // Starts at 1.0, enlarges to 1.15 in the center for a prominent view, then scales to 0.88 on the left
  const mapScale = useTransform(
    smoothProgress,
    [0, 0.22, 0.54, 0.82],
    [0.95, 1.15, 1.15, 0.88]
  );

  const mapOpacity = useTransform(smoothProgress, [0, 0.12], [0.3, 1]);

  // Phase 1 & 2: Centered Title visible during entrance and center plateau, fades as map moves left
  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.12, 0.52, 0.62],
    [0, 1, 1, 0]
  );
  const titleY = useTransform(smoothProgress, [0.52, 0.62], [0, -25]);

  // Phase 3: Right content card emerges only after the center rest plateau
  const contentOpacity = useTransform(smoothProgress, [0.56, 0.78], [0, 1]);
  const contentX = useTransform(smoothProgress, [0.56, 0.78], [60, 0]);
  const contentPointerEvents = useTransform(smoothProgress, (p) => (p > 0.54 ? 'auto' : 'none'));

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Sticky Viewport Frame (100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 select-none">
        
        {/* Centered Title with generous breathing room */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
          className="absolute top-10 sm:top-14 z-20 text-center pointer-events-none"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#17211F] leading-[1.2] tracking-tight">
            Trusted by NRI families
            <span className="block">worldwide</span>
          </h2>
        </motion.div>

        {/* Interactive Layout Stage (Positioned with generous top padding to prevent any overlap with title) */}
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 mt-4 sm:mt-6">
          
          {/* DOTTED MAP (Animates: Right -> Big Center Plateau -> Left) */}
          <motion.div
            style={{
              x: mapX,
              opacity: mapOpacity,
              scale: mapScale,
            }}
            className="w-full max-w-5xl flex items-center justify-center will-change-transform"
          >
            <DottedMap dotRadius={0.22} dotColor="#17352F" />
          </motion.div>

          {/* RIGHT SIDE CONTENT PANEL (Reveals as Map moves to the Left) */}
          <motion.div
            style={{
              opacity: contentOpacity,
              x: contentX,
              pointerEvents: contentPointerEvents as any,
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md lg:max-w-lg z-30 flex flex-col items-start text-left pl-4"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#17352F]/15 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span>Direct Global Coordination</span>
            </div>

            {/* Headline */}
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] text-[#17211F] mb-4">
              Your family in India,
              <span className="block italic text-[#B86F55]">always protected.</span>
            </h3>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-[#17211F]/75 font-light leading-relaxed mb-8 max-w-md">
              Dedicated on-ground coordinators in Chennai bridging time zones, accompanied doctor visits, and verified updates for NRI families worldwide.
            </p>

            {/* Interactive Action Pill Container */}
            <div className="w-full bg-white rounded-2xl p-2.5 sm:p-3 border border-[#17352F]/10 shadow-[0_12px_30px_rgba(23,53,47,0.08)] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
              <div className="flex items-center gap-4 px-3 text-xs text-[#17211F]/80">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B86F55]" />
                  <span className="font-medium">Chennai, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#17352F]" />
                  <span className="font-mono text-[11px]">Live IST</span>
                </div>
              </div>

              {/* Consultation Booking Button */}
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
    </div>
  );
};
