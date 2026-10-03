import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4ED] border-b border-[#17352F]/10">
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
              VERIFIED ARCHITECTURE OF CARE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            Real families. Real situations. Real support.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-[#68716D] font-light max-w-2xl"
          >
            How Nithya Mitra structures on-ground execution for specific family scenarios. We do not publish simulated endorsements; each entry outlines our verified operational protocol.
          </motion.p>
        </div>

        {/* 2 Case Study Cards with Structured Workflow & Hover Lift */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {caseStudiesData.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * idx }}
              whileHover={{ y: -6 }}
              className="bg-[#FBFAF6] border border-[#17352F]/15 rounded-sm p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Header Tag and Locations */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-[#17352F]/10">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#B86F55] font-semibold">{cs.location}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#17352F]/40" />
                    <span className="text-[#17352F] font-semibold">{cs.familyLocation}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#17352F]/10 text-[10px] font-mono uppercase tracking-wider text-[#17352F] font-medium group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] transition-colors">
                    <ShieldCheck className="w-3 h-3 text-[#17352F] group-hover:text-[#F7F4ED]" />
                    Operational Scenario
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors mb-6">
                  {cs.title}
                </h3>

                {/* 4 Steps: Problem -> Coordination -> Family Update -> Outcome */}
                <div className="space-y-4">
                  {/* Problem */}
                  <div className="bg-[#F7F4ED] p-4 rounded-sm border-l-2 border-[#B86F55] transition-transform duration-200 hover:translate-x-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B86F55] block mb-1">
                      01. The Problem
                    </span>
                    <p className="text-xs sm:text-sm text-[#17211F]/80 leading-relaxed font-light">
                      {cs.problem}
                    </p>
                  </div>

                  {/* What Nithya Mitra Coordinated */}
                  <div className="bg-[#F7F4ED] p-4 rounded-sm border-l-2 border-[#17352F] transition-transform duration-200 hover:translate-x-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#17352F] block mb-1">
                      02. What Nithya Mitra Coordinated
                    </span>
                    <p className="text-xs sm:text-sm text-[#17211F]/80 leading-relaxed font-light">
                      {cs.whatNithyaMitraCoordinated}
                    </p>
                  </div>

                  {/* Family Update */}
                  <div className="bg-[#F7F4ED] p-4 rounded-sm border-l-2 border-[#D8C8B3] transition-transform duration-200 hover:translate-x-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#68716D] block mb-1">
                      03. Family Update Transmitted
                    </span>
                    <p className="text-xs sm:text-sm text-[#17211F]/80 leading-relaxed font-light">
                      {cs.familyUpdate}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="p-4 rounded-sm bg-[#21463F]/10 border border-[#21463F]/20 flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                    <CheckCircle2 className="w-4 h-4 text-[#17352F] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#17352F] block font-semibold">
                        04. Final Outcome
                      </span>
                      <p className="text-xs sm:text-sm text-[#17352F] font-medium leading-relaxed mt-0.5">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-4 border-t border-[#17352F]/10 text-right">
                <span className="text-[11px] text-[#68716D] italic">
                  Protocols adapted per family consultation
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
