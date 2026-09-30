import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Layers, BellRing, CheckSquare } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell us what matters',
      description:
        'We understand your family situation, wellbeing, connection needs and support requirements through an unhurried consultation.',
      detail: 'No guesswork. We map your family’s exact habits, doctor preferences, and neighborhood realities.',
      icon: MessageSquareText
    },
    {
      number: '02',
      title: 'We coordinate',
      description:
        'We arrange the relevant local service, partner or visit, handling every scheduling detail on the ground.',
      detail: 'From vetting electricians to arranging hospital accompaniment, our team takes physical responsibility.',
      icon: Layers
    },
    {
      number: '03',
      title: 'You stay informed',
      description:
        'You receive clear updates on what was requested, what happened and what needs attention across timezones.',
      detail: 'Structured WhatsApp summaries, timestamped photos, doctor notes, and audio updates after every visit.',
      icon: BellRing
    },
    {
      number: '04',
      title: 'We follow through',
      description:
        'Where follow-up is required, Vayosh stays involved rather than simply handing you another phone number.',
      detail: 'Long-term accountability. If a repair or medical follow-up is needed, we track it through to completion.',
      icon: CheckSquare
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            A simple system between you and home.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#68716D] font-light max-w-xl"
          >
            Designed so you never have to make 10 phone calls across oceans to get one clear answer.
          </motion.p>
        </div>

        {/* Timeline Desktop Grid & Mobile Stack */}
        <div className="relative">
          
          {/* Animated Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#17352F]/10 -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#B86F55] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.15 * idx }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col relative bg-[#FBFAF6] p-4 sm:p-5 rounded-sm border border-transparent hover:border-[#17352F]/15 hover:shadow-sm transition-all duration-300 group"
                >
                  {/* Step Header with icon and step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="w-14 h-14 rounded-sm bg-[#17352F] group-hover:bg-[#21463F] text-[#F7F4ED] flex items-center justify-center font-mono text-sm font-semibold shadow-sm shrink-0 transition-colors duration-200"
                    >
                      {step.number}
                    </motion.div>
                    <div className="h-[1px] flex-1 bg-[#17352F]/10 lg:hidden" />
                    <div className="p-2 rounded-sm bg-[#EAE5DB]/60 text-[#B86F55] group-hover:bg-[#B86F55]/15 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#17211F]/80 leading-relaxed font-light mb-4">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#17352F]/10 text-xs text-[#68716D] italic group-hover:text-[#17211F]/90 transition-colors">
                    {step.detail}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
