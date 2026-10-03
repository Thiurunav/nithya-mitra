import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, HeartHandshake, PhoneCall } from 'lucide-react';
import { brandImages } from '../data/assets';

export const CompanionshipSection: React.FC = () => {
  const pillars = [
    {
      icon: Coffee,
      title: 'Human Check-Ins',
      desc: 'Agreed wellbeing visits that include a real conversation, not just a checklist. Our team takes the time to sit down, enjoy a warm cup of coffee or chai, and listen.'
    },
    {
      icon: HeartHandshake,
      title: 'Companionship',
      desc: 'Coordinate companion time for an evening stroll in the neighbourhood park, an appointment, local temple visit, or simply reassuring company at home.'
    },
    {
      icon: PhoneCall,
      title: 'Staying Connected',
      desc: 'Help make family calls, local connection and everyday social contact easier to maintain, resolving video-calling tech barriers patiently.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#17352F] text-[#F7F4ED] relative overflow-hidden">
      {/* Subtle organic light accent with breathing animation */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#21463F]/60 blur-3xl pointer-events-none"
      />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0E2420] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8C8B3]">
              THE EMOTIONAL REALITY OF DISTANCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-[1.18] tracking-tight text-[#FBFAF6]"
          >
            Sometimes the hardest part of being alone isn’t needing help.
            <span className="block font-serif italic text-[#D8C8B3] mt-2">
              It’s having no one to talk to.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#F7F4ED]/80 font-light leading-relaxed max-w-2xl"
          >
            A parent can be physically safe, sheltered, and medically fine — and still feel quiet, lingering loneliness. Distance shouldn't mean silence.
          </motion.p>
        </div>

        {/* Central Layout: Large Photograph + 3 Editorial Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Photograph Column with subtle zoom on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#D8C8B3]/20 shadow-2xl bg-[#0E2420] group">
              <img
                src={brandImages.companionship.src}
                alt={brandImages.companionship.alt}
                className="w-full h-[400px] sm:h-[480px] object-cover object-center filter saturate-[0.9] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2420]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#B86F55] font-mono mb-1">
                    GENUINE TIME · UNHURRIED
                  </p>
                  <p className="font-serif italic text-sm text-[#F7F4ED]/90">
                    A steady, warm familiar presence your parents can look forward to.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 Editorial Pillars Column with Interactive Lift */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.12 * idx }}
                  whileHover={{ y: -3, borderColor: 'rgba(216, 200, 179, 0.45)' }}
                  className="bg-[#21463F]/35 border border-[#D8C8B3]/15 rounded-sm p-6 sm:p-7 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      className="w-10 h-10 rounded-sm bg-[#17352F] border border-[#D8C8B3]/25 flex items-center justify-center shrink-0 text-[#B86F55] group-hover:border-[#B86F55] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-serif text-[#FBFAF6] tracking-wide mb-2 group-hover:text-[#D8C8B3] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#F7F4ED]/80 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Editorial Closing Statement & Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-10 border-t border-[#D8C8B3]/20 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="font-serif text-lg sm:text-xl text-[#F7F4ED] leading-snug">
              Nithya Mitra is not here to replace family. It is here to make sure distance does not mean your parents are left feeling alone.
            </p>
          </div>

          <div className="bg-[#0E2420]/80 border border-[#D8C8B3]/15 px-4 py-3 rounded-sm text-xs text-[#D8C8B3]/80 md:max-w-xs shrink-0 leading-relaxed">
            <span className="font-semibold text-[#D8C8B3] block mb-0.5">Important Clarity:</span>
            Companionship and social-connection support is not counselling, psychiatric, or medical treatment.
          </div>
        </motion.div>

      </div>
    </section>
  );
};
