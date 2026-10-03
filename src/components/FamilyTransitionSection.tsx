import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface FamilyTransitionSectionProps {
  onOpenEnquiry?: () => void;
}

export const FamilyTransitionSection: React.FC<FamilyTransitionSectionProps> = ({ onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll driven animation progression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Fan rotation angles that gently expand on scroll
  const leftRotate = useTransform(smoothProgress, [0.1, 0.45], [-8, -4]);
  const leftTranslateX = useTransform(smoothProgress, [0.1, 0.45], [30, 0]);
  const leftTranslateY = useTransform(smoothProgress, [0.1, 0.45], [20, 0]);

  const rightRotate = useTransform(smoothProgress, [0.1, 0.45], [8, 4]);
  const rightTranslateX = useTransform(smoothProgress, [0.1, 0.45], [-30, 0]);
  const rightTranslateY = useTransform(smoothProgress, [0.1, 0.45], [20, 0]);

  const centerScale = useTransform(smoothProgress, [0.1, 0.45], [0.96, 1.03]);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F7F4ED] text-[#17211F] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Image Curved Triptych Fan Container */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center pt-2 pb-6 sm:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center justify-center w-full">
            
            {/* Left Card: Health & Care Assistance (Tilted Left) */}
            <motion.div
              style={{
                rotate: leftRotate,
                x: leftTranslateX,
                y: leftTranslateY,
              }}
              whileHover={{ scale: 1.02, rotate: -2, zIndex: 20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(23,53,47,0.12)] border border-[#17352F]/10 aspect-[4/3] bg-white group cursor-pointer"
            >
              <img
                src="/triptych-care-vitals.jpg"
                alt="Nithya Mitra Care Coordinator checking vitals with gentle warmth for elderly mother at home in Chennai"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-medium tracking-wide">
                  Healthcare & Routine Vitals Check
                </span>
              </div>
            </motion.div>

            {/* Center Card: Joint Family Joy (Prominent, Elevated) */}
            <motion.div
              style={{
                scale: centerScale,
              }}
              whileHover={{ scale: 1.05, zIndex: 30 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(23,53,47,0.2)] border-2 border-white/60 aspect-[4/3] bg-white group cursor-pointer -my-2 sm:-my-4 md:-my-6"
            >
              <img
                src="/triptych-family-sofa.jpg"
                alt="Multi-generational Indian family gathered in Chennai living room laughing joyfully together"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-medium tracking-wide">
                  Dignified Living & Family Joy
                </span>
              </div>
            </motion.div>

            {/* Right Card: Active Companion Walk (Tilted Right) */}
            <motion.div
              style={{
                rotate: rightRotate,
                x: rightTranslateX,
                y: rightTranslateY,
              }}
              whileHover={{ scale: 1.02, rotate: 2, zIndex: 20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(23,53,47,0.12)] border border-[#17352F]/10 aspect-[4/3] bg-white group cursor-pointer"
            >
              <img
                src="/triptych-park-walk.jpg"
                alt="Senior father walking actively with smiling care coordinator in lush green Chennai park"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-medium tracking-wide">
                  Active Outdoor Accompaniment & Companionship
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Editorial Text Statement (Oscar Style Architecture) */}
        <div className="max-w-3xl mx-auto text-center mt-6 sm:mt-10 lg:mt-14 px-4">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl lg:text-[1.65rem] font-serif text-[#17211F] leading-[1.55] font-normal"
          >
            Most eldercare services stop at a monthly phone call and call it a day.{' '}
            <span className="font-sans font-medium text-[#17352F]">Nithya Mitra</span> goes all in with dedicated ground coordinators in Chennai, accompanied hospital visits, emergency coordination, and proactive family updates built for real NRI peace of mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#17211F]/70"
          >
            <span>Have specific questions about your parents in Chennai?</span>
            <button
              onClick={scrollToServices}
              className="text-[#17352F] font-semibold underline underline-offset-4 decoration-[#B86F55] hover:text-[#B86F55] transition-colors cursor-pointer"
            >
              Explore our services
            </button>
            <span>or</span>
            <button
              onClick={scrollToEnquiry}
              className="text-[#B86F55] font-semibold underline underline-offset-4 decoration-[#B86F55] hover:text-[#9E5B44] transition-colors cursor-pointer"
            >
              schedule a free consultation
            </button>
            <span>.</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
