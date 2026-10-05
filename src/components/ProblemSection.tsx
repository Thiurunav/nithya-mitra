import React from 'react';
import { motion } from 'framer-motion';
import { brandImages } from '../data/assets';

export const ProblemSection: React.FC = () => {
    const pains = [
    "Parents need help with something while you're abroad.",
    "A home or property issue suddenly needs attention.",
    "A courier, document or local task cannot wait.",
    "You don't know whom to trust locally."
  ];

    const frustrations = [
    "Calling several people just to solve one problem.",
    "Not knowing whether something was actually completed.",
    "Worrying about your parents when you cannot be there.",
    "Knowing they may be managing long stretches of the day without much company.",
    "Being pulled into every small issue from another country."
  ];

    const questions = [
    "Can I really trust someone with my family and home?",
    "Who will take responsibility if something goes wrong?",
    "Will I get clear updates or have to keep chasing?",
    "Is this another service provider I need to manage?"
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-14 md:mb-18">

                    <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-[1.18] font-normal"
          >
            The problem is not that you do not care.
            <span className="block font-sans italic font-normal text-[#17211F] mt-2">
              The problem is that you cannot always be there.
            </span>
          </motion.h2>
        </div>

        {/* Large Editorial Image Feature with subtle hover depth */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative rounded-sm overflow-hidden mb-16 border border-[#17352F]/15 shadow-sm group"
        >
          <img
            src={brandImages.problem.src}
            alt={brandImages.problem.alt}
            className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center filter saturate-[0.92] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/85 via-transparent to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-2xl text-left">
              <p className="font-serif italic text-lg sm:text-2xl text-[#F7F4ED] leading-snug">Parents sharing a moment with the family they love.</p>
              <p className="text-sm text-[#D8C8B3] mt-1 font-light">The worry you carry when you cannot be there.</p>
            </div>
          </div>
        </motion.div>

        {/* Three Editorial Columns: Pains, Frustrations, Questions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Pains */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-[#FBFAF6] p-7 sm:p-8 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#17352F]/10">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#17352F] group-hover:text-[#B86F55] transition-colors">
                  PAINS
                </span>
                <span className="text-xs text-[#B86F55] font-mono">01 / 03</span>
              </div>
              <ul className="space-y-4">
                {pains.map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#17211F]/80 leading-relaxed group-hover:text-[#17211F] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55] mt-2 shrink-0 transition-transform group-hover:scale-125" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#17352F]/5 text-xs text-[#68716D] italic">
              Distance magnifies even minor logistical needs.
            </div>
          </motion.div>

          {/* Column 2: Frustrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-[#FBFAF6] p-7 sm:p-8 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#17352F]/10">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#17352F] group-hover:text-[#B86F55] transition-colors">
                  FRUSTRATIONS & FEARS
                </span>
                <span className="text-xs text-[#B86F55] font-mono">02 / 03</span>
              </div>
              <ul className="space-y-4">
                {frustrations.map((frustration, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#17211F]/80 leading-relaxed group-hover:text-[#17211F] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17352F] mt-2 shrink-0 transition-transform group-hover:scale-125" />
                    <span>{frustration}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#17352F]/5 text-xs text-[#68716D] italic">
              Managing informal local networks across 12-hour timezone gaps.
            </div>
          </motion.div>

          {/* Column 3: Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-[#FBFAF6] p-7 sm:p-8 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#17352F]/10">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#17352F] group-hover:text-[#B86F55] transition-colors">
                  BARRIERS & UNCERTAINTIES
                </span>
                <span className="text-xs text-[#B86F55] font-mono">03 / 03</span>
              </div>
              <ul className="space-y-4">
                {questions.map((question, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#17211F]/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8C8B3] mt-2 shrink-0" />
                    <span className="font-serif italic text-base text-[#17352F] leading-snug group-hover:text-[#B86F55] transition-colors">"{question}"</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#17352F]/5 text-xs text-[#68716D] italic">
              Vayosh gives you one trusted point of contact on the ground.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
