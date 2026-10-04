import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { careTracksData, careTracksDisclaimer } from '../data/careTracks';

export const CareTracks: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FBFAF6] border-b border-[#17352F]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-serif text-[#17352F] leading-tight"
            >
              Additional support when a specific health need arises.
            </motion.h2>

            <p className="mt-3 text-sm text-[#68716D] font-light">
              Tailored coordination pathways for chronic conditions, specialist consultations, and mobility needs.
            </p>
          </div>

          {/* Scroll Navigation Buttons with Micro-interactions */}
          <div className="flex items-center gap-3 self-end">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[#17352F]/20 text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED] transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-[#17352F]/20 text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED] transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Horizontal Scrolling Tracks with Card Hover Lift */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {careTracksData.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              whileHover={{ y: -6 }}
              className="w-72 sm:w-80 shrink-0 snap-start bg-[#F7F4ED] border border-[#17352F]/12 rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#17352F]/40 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#B86F55] uppercase block mb-2 transition-transform duration-200 group-hover:translate-x-0.5">
                  Track 0{idx + 1}
                </span>
                <h3 className="text-xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors mb-3">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#17352F]/10">
                <span className="text-[11px] font-semibold text-[#17352F] block">
                  Focus:
                </span>
                <span className="text-xs text-[#68716D] group-hover:text-[#17211F] transition-colors">
                  {track.keySupport}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="mt-4 p-4 bg-[#EAE5DB]/50 border border-[#D8C8B3] rounded-sm flex items-start gap-3 text-xs text-[#17211F]/80">
          <Info className="w-4 h-4 text-[#B86F55] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-[#17352F]">Service Clarity:</strong> {careTracksDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
