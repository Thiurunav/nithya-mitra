import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, ShieldCheck, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/caseStudies';
import type { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<TestimonialItem | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              NRI FAMILY PERSPECTIVES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            When distance gets smaller, peace of mind gets bigger.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-[#68716D] font-light"
          >
            <ShieldCheck className="w-4 h-4 text-[#17352F] shrink-0" />
            <span>
              We do not fabricate testimonials. Real family video reflections will appear here as Vayosh supports families, strictly with their prior written consent.
            </span>
          </motion.div>
        </div>

        {/* Video Cards Grid with Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ y: -6 }}
              className="bg-[#F7F4ED] border border-[#17352F]/12 rounded-sm overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Cinematic Video Card Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-[#17352F]">
                {item.videoPoster && (
                  <img
                    src={item.videoPoster}
                    alt={item.relationship}
                    className="w-full h-full object-cover filter saturate-[0.85] opacity-75 group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                )}
                
                {/* Play Button Overlay with Micro-scale */}
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveVideo(item)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#FBFAF6]/90 hover:bg-[#FBFAF6] text-[#17352F] flex items-center justify-center shadow-lg transition-colors cursor-pointer group-hover:shadow-xl"
                  aria-label="Preview video placeholder"
                >
                  <Play className="w-5 h-5 ml-1 fill-[#17352F]" />
                </motion.button>

                {/* Duration & Country Flag */}
                <div className="absolute top-3 left-3 bg-[#17352F]/90 text-[#F7F4ED] px-2 py-0.5 rounded-sm text-[10px] font-mono flex items-center gap-1.5 shadow-sm">
                  <span>{item.flag}</span>
                  <span>{item.country}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/70 text-[#F7F4ED] px-2 py-0.5 rounded-sm text-[10px] font-mono flex items-center gap-1">
                  <Volume2 className="w-3 h-3 text-[#D8C8B3]" />
                  <span>{item.videoDuration}</span>
                </div>
              </div>

              {/* Quote & Relationship Information */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#68716D] mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#B86F55]" />
                    <span>Family in {item.parentLocation}</span>
                  </div>

                  <p className="font-serif italic text-sm sm:text-base text-[#17211F]/85 leading-snug mb-4 group-hover:text-[#17211F] transition-colors">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#17352F]/10">
                  <h4 className="text-xs font-semibold text-[#17352F] uppercase tracking-wider group-hover:text-[#B86F55] transition-colors">
                    {item.clientName}
                  </h4>
                  <p className="text-[11px] text-[#68716D] mt-0.5">
                    {item.relationship}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Preview Modal / Drawer with AnimatePresence */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17352F]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FBFAF6] max-w-lg w-full p-8 rounded-sm border border-[#17352F]/20 shadow-2xl relative"
            >
              <h3 className="text-xl font-serif text-[#17352F] mb-3">
                Family Story Recording Notice
              </h3>
              <p className="text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed mb-6">
                Vayosh is currently documenting video interviews with our founding NRI families across the US, UK, and Canada. To respect the privacy and dignity of our elders and their families, verified recordings will be released here once fully authenticated and licensed.
              </p>
              <div className="p-4 bg-[#EFE8DC] rounded-sm text-xs text-[#17352F] font-mono mb-6">
                Target Release: 2026 Customer Cohort Stories · High-Definition Documentary Series
              </div>
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setActiveVideo(null)}
                className="w-full py-3 bg-[#17352F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#21463F] cursor-pointer"
              >
                Understood
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
