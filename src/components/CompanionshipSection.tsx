import React from "react";
import { motion } from "framer-motion";

export const CompanionshipSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 md:mb-16">
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
        </div>

        {/* Dual Emotion Cards: NRI Abroad & Parent at Home */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: NRI Abroad Worrying at Night (2:17 AM London) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[500px] border border-[#17352F]/15 shadow-sm flex flex-col justify-between p-6 sm:p-8 group"
          >
            <img
              src="/nri-worried-night-call.jpg"
              alt="Worried Indian NRI daughter on late night phone call abroad"
              className="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-102"
              loading="lazy"
            />
            {/* Atmospheric Night Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2420]/95 via-[#0E2420]/60 to-[#0E2420]/40 pointer-events-none" />

            {/* Top Timezone Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#D8C8B3] text-xs font-mono uppercase tracking-wider border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55] animate-pulse" />
                2:17 AM · London / USA
              </span>
            </div>

            {/* Emotional Narrative Overlay */}
            <div className="relative z-10 text-left space-y-3 pt-12">
              <p className="text-xs sm:text-sm font-mono text-[#D8C8B3]/90 tracking-wide">
                Your phone rings.
              </p>
              <h3 className="font-serif italic text-2xl sm:text-3xl text-[#FBFAF6] leading-tight">
                "It’s Mum. Dad’s not feeling well."
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F4ED]/80 font-sans font-light leading-relaxed">
                You want to be there. But you can’t be there tonight.
              </p>
              <div className="w-12 h-px bg-[#B86F55]/80 my-3" />
              <p className="text-xs sm:text-sm text-[#D8C8B3] font-serif italic">
                When your parents need you, distance suddenly feels very, very far.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Parent at Home in Chennai */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[500px] border border-[#17352F]/15 shadow-sm flex flex-col justify-between p-6 sm:p-8 group"
          >
            <img
              src="/vayosh-parent-alone-window.jpg"
              alt="Elderly parent sitting thoughtfully alone at home by the window in Chennai"
              className="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-102"
              loading="lazy"
            />
            {/* Soft Warm Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/95 via-[#17352F]/55 to-[#17352F]/30 pointer-events-none" />

            {/* Top Location Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#D8C8B3] text-xs font-mono uppercase tracking-wider border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Chennai, India
              </span>
            </div>

            {/* Emotional Narrative Overlay */}
            <div className="relative z-10 text-left space-y-3 pt-12">
              <p className="text-xs sm:text-sm font-mono text-[#D8C8B3]/90 tracking-wide">
                Back home in Chennai.
              </p>
              <h3 className="font-serif italic text-2xl sm:text-3xl text-[#FBFAF6] leading-tight">
                "We didn’t want to worry you."
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F4ED]/80 font-sans font-light leading-relaxed">
                While you carry the worry across timezones, they navigate everyday healthcare, home tasks, and quiet hours on their own.
              </p>
              <div className="w-12 h-px bg-[#B86F55]/80 my-3" />
              <p className="text-xs sm:text-sm text-[#D8C8B3] font-serif italic">
                Nithya Mitra provides trusted, accountable companionship so your family is never on their own.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
