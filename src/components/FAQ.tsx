import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../data/faqs';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            Clear answers before you begin.
          </motion.h2>

          <p className="mt-4 text-sm text-[#68716D] font-light">
            Everything you need to know about our coordination model, boundaries, and communication.
          </p>
        </div>

        {/* Accordion List with Smooth Transitions */}
        <div className="space-y-4">
          {faqsData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`bg-[#FBFAF6] border rounded-sm overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#17352F]/30 shadow-sm'
                    : 'border-[#17352F]/12 hover:border-[#17352F]/25'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-serif pr-2 transition-colors ${
                    isOpen ? 'text-[#17352F] font-medium' : 'text-[#17211F] group-hover:text-[#B86F55]'
                  }`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#17352F]/20 flex items-center justify-center shrink-0 transition-transform duration-300 text-[#17352F] ${
                      isOpen ? 'rotate-180 bg-[#17352F] text-[#F7F4ED]' : 'bg-transparent group-hover:border-[#17352F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed border-t border-[#17352F]/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional support note */}
        <div className="mt-12 text-center text-xs text-[#68716D]">
          Have a question not listed here?{' '}
          <a
            href="https://wa.me/919789066588?text=Hi%20Vayosh%2C%20I%20have%20a%20specific%20question%20regarding%20supporting%20my%20parents%20in%20India."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#17352F] underline hover:text-[#B86F55] font-medium transition-colors"
          >
            Ask us directly via WhatsApp (+91 97890 66588)
          </a>
        </div>

      </div>
    </section>
  );
};
