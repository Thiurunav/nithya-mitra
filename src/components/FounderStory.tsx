import React from 'react';
import { motion } from 'framer-motion';
import { brandImages } from '../data/assets';

export const FounderStory: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-md">
              <img
                src={brandImages.founder.src}
                alt={brandImages.founder.alt}
                className="w-full h-[460px] sm:h-[520px] object-cover object-top filter saturate-[0.9] contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17352F]/90 via-[#17352F]/60 to-transparent p-6 text-[#F7F4ED]">
                <p className="font-serif text-lg font-medium text-[#F7F4ED]">
                  Kumaresan
                </p>
                <p className="text-xs uppercase tracking-widest text-[#D8C8B3] mt-0.5">
                  Founder & Managing Director · Chennai, Tamil Nadu
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Brand Philosophy & Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                FOUNDER & PURPOSE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight mb-8"
            >
              Why Vayosh exists
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed"
            >
              <p>
                Every Indian living overseas knows the distinct weight of distance. You build an inspiring career and a life across timezones in San Francisco, London, Toronto, or Sydney — but a piece of your heart stays rooted in a home back in India.
              </p>
              <p>
                When parents age, normal life continues until suddenly it doesn't. A water pump breaks, a prescription needs checking, an orthopaedic doctor needs to be visited, or a monsoon storm leaves them sitting alone in a quiet house. Calling neighbours or distant relatives feels intrusive. Managing local handymen from 12 hours away feels frustrating.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#17352F] border-l-2 border-[#B86F55] pl-4 py-1 my-4">
                "We did not build Vayosh to be an impersonal app or a faceless vendor directory. We built it to be a trusted, accountable extension of yourself on the ground in India."
              </p>
              <p>
                Whether it is sharing unhurried tea and conversation, escorting a parent to an eye appointment, checking on property upkeep, or being the first calm voice on the ground in an emergency — Vayosh exists so distance never leaves your parents feeling far away.
              </p>
            </motion.div>

            {/* Signature Area */}
            <div className="mt-8 pt-6 border-t border-[#17352F]/10 flex items-center justify-between">
              <div>
                <span className="font-serif italic text-2xl text-[#17352F] tracking-wide block">
                  Kumaresan
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#68716D] font-mono">
                  Founder · Vayosh Coordination
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-[#B86F55] block">
                  Chennai Hub
                </span>
                <span className="text-[11px] text-[#68716D]">
                  Tamil Nadu, India
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
