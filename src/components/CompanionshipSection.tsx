import React from "react";
import { motion } from "framer-motion";

export const CompanionshipSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B86F55] block mb-3 font-sans">
            THE PART PEOPLE DON'T TALK ABOUT
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-[1.18] font-normal"
          >
            Sometimes the hardest part of being alone isn’t needing help.
            <span className="block font-serif italic text-[#17211F] mt-2">
              It’s having no one to talk to.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#17211F]/80 font-sans leading-relaxed max-w-2xl"
          >
            A parent can be physically safe and medically fine — and still feel alone. Distance can quietly take away the everyday conversations, visits and small moments that make life feel connected.
          </motion.p>
        </div>

        {/* Large Editorial Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden border border-[#17352F]/15 shadow-sm group"
        >
          <img
            src="/vayosh-parent-alone-window.jpg"
            alt="Elderly parent sitting thoughtfully alone at home by the window with quiet solitude"
            className="w-full h-[340px] sm:h-[440px] lg:h-[500px] object-cover object-center filter saturate-[0.92] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/90 via-[#17352F]/25 to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-2xl text-left">
              <p className="text-xs uppercase tracking-widest text-[#B86F55] font-sans font-semibold mb-2">
                THE UNSEEN REALITY
              </p>
              <p className="font-serif italic text-lg sm:text-2xl text-[#F7F4ED] leading-snug">
                "A parent can be physically safe and medically fine — and still go days without a meaningful conversation."
              </p>
              <p className="text-sm text-[#D8C8B3] mt-2 font-sans font-light">
                Distance quietly takes away the everyday human connection they miss most.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
