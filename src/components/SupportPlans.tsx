import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

interface SupportPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const SupportPlans: React.FC<SupportPlansProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'advanced',
      badge: 'ESSENTIAL',
      name: 'Nithya Mitra Advanced',
      forWhom: 'For independent parents who need regular checks and reliable local backup.',
      highlights: [
        'Bi-weekly scheduled parent wellbeing visits',
        'Hospital & doctor appointment booking',
        'Help with urgent local errands & banking',
        'Direct WhatsApp channel with coordinator'
      ],
      cta: 'Enquire about Advanced'
    },
    {
      id: 'premium',
      badge: 'ENHANCED · MOST CHOSEN',
      name: 'Nithya Mitra Premium',
      isPopular: true,
      forWhom: 'For parents who need hands-on assistance and frequent healthcare liaison.',
      highlights: [
        'Everything in Advanced plan',
        'Weekly in-person companion visits',
        'Physical hospital escort & doctor summaries',
        'Home safety review & technician supervision'
      ],
      cta: 'Enquire about Premium'
    },
    {
      id: 'elite',
      badge: 'HIGH-TOUCH',
      name: 'Nithya Mitra Elite',
      forWhom: 'For families managing complex health, mobility, or post-operative needs.',
      highlights: [
        'Everything in Premium plan',
        'Frequent custom wellbeing visits',
        'Specialist & physiotherapist coordination',
        'Priority 24/7 emergency response liaison'
      ],
      cta: 'Enquire about Elite'
    }
  ];

  return (
    <section id="plans" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              SUPPORT PLANS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            Choose the support level for your family.
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-[#68716D] font-light">
            No forced subscriptions. We begin with a free consultation to confirm what your parents actually need.
          </p>
        </div>

        {/* 3 Clean Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ y: -6 }}
              className={`rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-[#FBFAF6] border-2 border-[#17352F] shadow-md'
                  : 'bg-[#FBFAF6] border border-[#17352F]/15 shadow-xs'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#B86F55] font-semibold uppercase block mb-1">
                  {plan.badge}
                </span>

                <h3 className="text-2xl font-serif text-[#17352F] mb-3">
                  {plan.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#68716D] leading-relaxed mb-6 pb-6 border-b border-[#17352F]/10">
                  {plan.forWhom}
                </p>

                <div className="space-y-3 mb-8">
                  {plan.highlights.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211F]/85">
                      <Check className="w-4 h-4 text-[#17352F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                    plan.isPopular
                      ? 'bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED]'
                      : 'border border-[#17352F] text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED]'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
