import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: PhoneCall,
      title: 'Tell us what matters',
      desc: 'A 20-minute consultation to understand your parents’ health routines, home situation, and specific worries.'
    },
    {
      num: '02',
      icon: MapPin,
      title: 'We coordinate on the ground',
      desc: 'Your designated care lead arranges vetted visits, hospital escorts, or home upkeep in person.'
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: 'You stay completely informed',
      desc: 'Direct WhatsApp updates, photos, and doctor visit summaries sent to you across timezones immediately.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            A simple system between you and home.
          </motion.h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -4 }}
                className="bg-[#F7F4ED] p-8 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#B86F55]">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-sm bg-[#17352F] text-[#F7F4ED] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-[#17352F] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#17352F]/5 text-[11px] text-[#68716D] font-mono">
                  Stage {step.num} · Verified Process
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
