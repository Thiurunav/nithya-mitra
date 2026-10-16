import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const everydayRealities = [
    "Living 5,000 to 10,000 miles away across 8 to 13-hour timezone gaps.",
    "Aging parents managing domestic life, bills, and home maintenance on their own."
  ];

  const practicalPains = [
    "Sudden property repairs, plumbing, electrical issues, and local paperwork.",
    "Coordinating hospital visits, doctor follow-ups, and prescription needs from afar.",
    "Parents often saying \"everything is fine\" to avoid stressing family abroad."
  ];

  const frictionAndWorry = [
    "Calling several informal local contacts just to resolve a single everyday task.",
    "Worrying about who takes immediate accountability if an emergency strikes at 2 AM.",
    "No single trusted representative on the ground you can hold responsible."
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B86F55] block mb-3 font-sans">
            YOU ARE NOT STRUGGLING BECAUSE YOU DON'T CARE
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-[1.18] font-normal"
          >
            The problem is not that you do not care.
            <span className="block italic text-[#17211F] mt-2 font-serif sm:whitespace-nowrap">
              It is that you cannot always be there.
            </span>
          </motion.h2>
        </div>

        {/* 3-Module Card Layout (Inspiration Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Late Night Phone Call Abroad (USA) - Picture 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[440px] lg:min-h-[500px] border border-[#17352F]/15 shadow-sm flex flex-col justify-between p-6 sm:p-7 group"
          >
            <img
              src="/nri-worried-night-call.jpg"
              alt="Worried Indian NRI daughter on late night phone call abroad"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-102"
              loading="lazy"
            />
            {/* Atmospheric Night Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-45% to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

            {/* Top Timezone Pill: USA */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#D8C8B3] text-xs font-mono uppercase tracking-wider border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55] animate-pulse" />
                2:17 AM · USA
              </span>
            </div>

            {/* Emotional Narrative Overlay */}
            <div className="relative z-10 text-left space-y-2.5 pt-8">
              <p className="text-xs font-mono text-[#D8C8B3]/90 tracking-wide">
                Your phone rings.
              </p>
              <h3 className="font-serif italic text-xl sm:text-2xl text-[#FBFAF6] leading-tight">
                "It’s Mum. Dad’s not feeling well."
              </h3>
              <p className="text-xs text-[#F7F4ED]/80 font-sans font-light leading-relaxed">
                You want to be there. But you can’t be there tonight.
              </p>
              <div className="w-10 h-px bg-[#B86F55]/80 my-2" />
              <p className="text-xs text-[#D8C8B3] font-serif italic">
                When your parents need you, distance suddenly feels very, very far.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Categorized Insights with Distinct Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 bg-[#EDE8DE] rounded-3xl p-7 sm:p-8 border border-[#17352F]/10 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* Section 1: The Situation */}
              <div>
                <span className="inline-block bg-[#17352F] text-[#F7F4ED] text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-3 font-sans">
                  The Daily Reality
                </span>
                <ul className="space-y-2">
                  {everydayRealities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211F]/85 leading-relaxed font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#17352F] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: Pain Points */}
              <div>
                <span className="inline-block bg-[#FBFAF6] text-[#17352F] border border-[#17352F]/15 text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-3 font-sans">
                  Everyday Pain Points
                </span>
                <ul className="space-y-2">
                  {practicalPains.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211F]/85 leading-relaxed font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: The Friction */}
              <div>
                <span className="inline-block bg-[#FBFAF6] text-[#17352F] border border-[#17352F]/15 text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mb-3 font-sans">
                  The Friction & Worry
                </span>
                <ul className="space-y-2">
                  {frictionAndWorry.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211F]/85 leading-relaxed font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8C8B3] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Card 3: Large Editorial Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-3 bg-[#D8E6E0] rounded-3xl p-8 sm:p-10 border border-[#17352F]/10 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-full bg-[#17352F]/10 flex items-center justify-center mb-6 text-[#17352F]">
              <Quote className="w-7 h-7 fill-[#17352F]/20 text-[#17352F]" />
            </div>

            <blockquote className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#17352F] leading-snug">
              "Being thousands of miles away doesn't mean you care any less. It just makes the simplest practical task feel overwhelming."
            </blockquote>

            <div className="w-10 h-0.5 bg-[#B86F55] my-6 opacity-60" />

            <p className="text-xs text-[#17352F]/75 font-sans leading-relaxed">
              The worry you carry when you cannot always be there.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
