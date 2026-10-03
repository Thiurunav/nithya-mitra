import React from 'react';
import { motion } from 'framer-motion';
import { DottedMap } from '@/registry/magicui/dotted-map';

export const GlobalReachSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F4ED] text-[#17211F] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Clean Centered Serif Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-normal text-[#17211F] leading-[1.2] mb-12 sm:mb-16 tracking-tight"
        >
          Trusted by NRI families
          <span className="block">worldwide</span>
        </motion.h2>

        {/* Dotted Map with Smooth Scroll Entrance From Right to Left */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center will-change-transform"
        >
          <DottedMap dotRadius={0.22} dotColor="#17352F" />
        </motion.div>

      </div>
    </section>
  );
};
