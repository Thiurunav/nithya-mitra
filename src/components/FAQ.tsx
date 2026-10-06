import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

const faqs: FAQItem[] = [
  {
    id: 'loneliness',
    number: '01',
    title: 'Does Nithya Mitra help with loneliness?',
    content:
      'We can coordinate agreed companionship, wellbeing check-ins and social-connection support. Nithya Mitra is not a counselling or medical service, and professional support can be coordinated when appropriate.',
  },
  {
    id: 'elder-care',
    number: '02',
    title: 'Is Nithya Mitra an elder-care company?',
    content:
      'Parent support is our starting point, but the broader model is trusted family support and coordination for NRIs.',
  },
  {
    id: 'services-provided',
    number: '03',
    title: 'Will you provide every service yourselves?',
    content:
      'No. Where specialist expertise is required, the model is to coordinate with appropriate partners rather than pretending to be the specialist.',
  },
  {
    id: 'updates',
    number: '04',
    title: 'How will I know what happened?',
    content:
      'The service should include a clear update process for agreed activities. The exact reporting method and frequency should be defined in your service agreement.',
  },
  {
    id: 'parents-only',
    number: '05',
    title: 'Can I use Nithya Mitra mainly for my parents?',
    content:
      'Yes. Parent support is the starting point. As the relationship grows, other agreed family needs can be coordinated too.',
  },
  {
    id: 'not-ready',
    number: '06',
    title: 'What if I am not ready to subscribe?',
    content:
      'Start with the free consultation. The purpose is to understand the need first, not pressure you into a package.',
  },
];

export const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('companionship');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 select-none">
      <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-[11px] 2xl:text-xs font-sans font-semibold uppercase tracking-widest text-[#B86F55] block mb-3">
            QUESTIONS YOU MAY BE ASKING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-serif text-[#17211F] tracking-tight leading-tight">
            Before you trust us, <span className="italic text-[#B86F55]">you should question us.</span>
          </h2>
        </div>

        {/* Interactive Accordion */}
        <div className="w-full space-y-0">
          {faqs.map((item) => {
            const isActive = activeId === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <div key={item.id} className="relative">
                <motion.button
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="w-full group text-left cursor-pointer focus:outline-none relative py-5 sm:py-6 px-1"
                  initial={false}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Number with animated circular highlight */}
                    <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#17352F]"
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : isHovered ? 0.85 : 0,
                          opacity: isActive ? 1 : isHovered ? 0.12 : 0,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 25,
                        }}
                      />
                      <motion.span
                        className="relative z-10 text-xs sm:text-sm font-sans font-medium tracking-wider"
                        animate={{
                          color: isActive ? '#F7F4ED' : '#17352F',
                          opacity: isActive ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.number}
                      </motion.span>
                    </div>

                    {/* FAQ Title */}
                    <motion.h3
                      className="text-base sm:text-lg md:text-xl font-serif font-medium tracking-tight pr-2"
                      animate={{
                        x: isActive || isHovered ? 4 : 0,
                        color: isActive
                          ? '#17211F'
                          : isHovered
                          ? '#17352F'
                          : '#17211F',
                        opacity: isActive || isHovered ? 1 : 0.85,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Animated Plus / Cross Indicator */}
                    <div className="ml-auto flex items-center justify-center shrink-0">
                      <motion.div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-colors ${
                          isActive
                            ? 'border-[#17352F] bg-[#17352F] text-[#F7F4ED]'
                            : 'border-[#17352F]/20 text-[#17352F]'
                        }`}
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="shrink-0"
                        >
                          <path
                            d="M8 1V15M1 8H15"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Base Underline */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#17352F]/10" />

                  {/* Animated Progress Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-[#17352F] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive ? 1 : isHovered ? 0.35 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                </motion.button>

                {/* Content Expand */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.08 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="pl-13 sm:pl-16 pr-8 sm:pr-12 pb-6 pt-1 text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed"
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        exit={{ y: -6 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        {item.content}
                      </motion.div>
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
