import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Vayosh help with loneliness and companionship?',
      a: 'Yes. We coordinate agreed, unhurried wellbeing visits where our team sits down, listens, enjoys tea, and shares genuine conversation. However, Vayosh is strictly a human support service, not a medical psychiatric or clinical counselling practice.'
    },
    {
      q: 'Are you an elder-care agency or a family coordination service?',
      a: 'Parent support is our primary starting point, but our broader model is comprehensive family coordination for NRIs. In addition to visits, we handle ancestral property maintenance, hospital navigation, local errands, documents, and emergency liaison.'
    },
    {
      q: 'How will I receive updates after a visit or errand?',
      a: 'You receive structured notes, timestamped photos, and doctor briefings directly on your WhatsApp or email immediately following completion, formatted clearly for overseas family members.'
    },
    {
      q: 'Will you provide medical care yourselves?',
      a: 'No, and we are deliberate about this. Where clinical treatment, surgery, or nursing is required, we coordinate vetted, licensed hospital and attendant partners, and supervise the logistics on your behalf.'
    },
    {
      q: 'What if I am not ready to choose a plan immediately?',
      a: 'Start with our free 20-minute consultation. There is zero pressure to purchase. We will discuss your family’s circumstances, answer questions honestly, and suggest what makes sense.'
    }
  ];

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              COMMON QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#17352F]">
            Straightforward answers.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FBFAF6] border border-[#17352F]/12 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif text-[#17352F]">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border border-[#17352F]/20 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#17352F] text-[#F7F4ED]' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed border-t border-[#17352F]/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
