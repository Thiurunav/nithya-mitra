import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, HelpCircle } from 'lucide-react';
import { supportPlansData } from '../data/plans';

interface SupportPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const SupportPlans: React.FC<SupportPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-24 md:py-32 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              SUPPORT LEVELS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            Choose the support level that may fit your family.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex items-center gap-2 text-sm text-[#68716D] font-light"
          >
            <HelpCircle className="w-4 h-4 text-[#B86F55] shrink-0" />
            <span>
              If you’re unsure which level fits, tell us about your family and we’ll discuss the right starting point without any pressure.
            </span>
          </motion.div>
        </div>

        {/* 3 Plans Grid with Elevation on Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {supportPlansData.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 * idx }}
              whileHover={{ y: -8 }}
              className={`relative rounded-sm p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group ${
                plan.isPopular
                  ? 'bg-[#FBFAF6] border-2 border-[#17352F] shadow-[0_16px_36px_rgba(23,53,47,0.08)] hover:shadow-[0_24px_48px_rgba(23,53,47,0.12)]'
                  : 'bg-[#FBFAF6] border border-[#17352F]/15 shadow-sm hover:shadow-lg hover:border-[#17352F]/40'
              }`}
            >
              {/* Most Comprehensive Badge */}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-8 bg-[#17352F] text-[#F7F4ED] text-[10px] uppercase font-bold tracking-[0.2em] px-3.5 py-1 rounded-sm shadow-sm group-hover:bg-[#21463F] transition-colors">
                  {plan.highlight}
                </div>
              )}

              <div>
                {/* Plan Badge & Name */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono tracking-widest text-[#B86F55] font-semibold uppercase block mb-1">
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-serif text-[#17352F] group-hover:text-[#21463F] transition-colors">
                    {plan.name}
                  </h3>
                </div>

                {/* Audience Description */}
                <p className="text-sm text-[#17211F]/75 font-light leading-relaxed mb-8 pb-6 border-b border-[#17352F]/10">
                  {plan.audience}
                </p>

                {/* Features List with gentle hover highlights */}
                <div className="space-y-3.5 mb-10">
                  <span className="text-[11px] uppercase tracking-wider text-[#68716D] font-semibold block mb-2">
                    Included Coordination Scope:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#17211F]/85 transition-colors hover:text-[#17352F]">
                      <div className="w-4 h-4 rounded-full bg-[#17352F]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#17352F] group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#17352F]/10">
                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-4 rounded-sm text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] shadow-sm'
                      : 'border border-[#17352F] text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED]'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
                <p className="text-center text-[11px] text-[#68716D] mt-2.5">
                  Tailored setup · No immediate commitment
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
