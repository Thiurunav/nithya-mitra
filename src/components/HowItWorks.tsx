import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface StepDetail {
  stepNumber: string;
  title: string;
  description: string;
  imageSrc: string;
  tag: string;
  isLeft: boolean;
}

export const HowItWorks: React.FC = () => {
  const [isParaHovered, setIsParaHovered] = useState(false);

  const stepsData: StepDetail[] = [
    {
      stepNumber: '01',
      title: 'Tell us what matters',
      description:
        'We understand your family situation, wellbeing, connection needs and the type of support you need in India.',
      imageSrc: '/how-it-works-step1-consultation.jpg',
      tag: 'Step 01 · Assessment',
      isLeft: true,
    },
    {
      stepNumber: '02',
      title: 'We coordinate',
      description:
        'We arrange the relevant local service, partner or visit instead of leaving you to manage several people yourself.',
      imageSrc: '/how-it-works-step2-coordinator-visit.jpg',
      tag: 'Step 02 · Coordination',
      isLeft: false,
    },
    {
      stepNumber: '03',
      title: 'You stay informed',
      description:
        'You receive clear updates on what was requested, what happened and what needs your attention.',
      imageSrc: '/nithya-mitra-hero-clinic.jpg',
      tag: 'Step 03 · Reporting',
      isLeft: true,
    },
    {
      stepNumber: '04',
      title: 'We follow through',
      description:
        'Where follow-up is required, Nithya Mitra stays involved rather than simply handing you another phone number.',
      imageSrc: '/how-it-works-step4-whatsapp-update.jpg',
      tag: 'Step 04 · Follow Through',
      isLeft: false,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#F7F4ED] py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#17352F]/10 select-none overflow-hidden"
    >
      {/* Full Section Background Dot Matrix Pattern in Nithya Mitra Forest Theme */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <pattern
          id="step-section-dot-pattern"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="1.5" fill="#17352F" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#step-section-dot-pattern)" />
      </svg>

      {/* Top Smooth Gradient Fade Mask */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-b from-[#F7F4ED] via-[#F7F4ED]/80 to-transparent pointer-events-none z-10" />

      {/* Bottom Smooth Gradient Fade Mask */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-t from-[#F7F4ED] via-[#F7F4ED]/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-widest text-[#B86F55] block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#17211F] tracking-tight leading-[1.18]">
            A simple system between you and home.
          </h2>

          <p
            onMouseEnter={() => setIsParaHovered(true)}
            onMouseLeave={() => setIsParaHovered(false)}
            className="text-sm sm:text-base md:text-lg text-[#68716D] font-light leading-relaxed mt-4 max-w-2xl mx-auto cursor-default"
          >
            See how Nithya Mitra unifies on-ground coordinator matching, doctor visit accompaniment, continuous health tracking, and{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-medium text-[#17352F]">
                instant WhatsApp updates
              </span>
              {/* Hand-Drawn Oval Highlighter in Terracotta */}
              <svg
                className="absolute -inset-x-2 -inset-y-1.5 w-[calc(100%+16px)] h-[calc(100%+12px)] pointer-events-none z-0"
                viewBox="0 0 180 40"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 10 20 C 15 5, 165 4, 172 18 C 178 30, 25 36, 12 24 C 8 20, 20 12, 40 10"
                  fill="none"
                  stroke="#B86F55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.6 }}
                  animate={isParaHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0.95, opacity: 0.85 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </svg>
            </span>{' '}
            seamlessly.
          </p>
        </div>

        {/* Staggered 4-Step Cards Layout */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 w-full">
          {stepsData.map((step, idx) => {
            const hasNextArrow = idx < stepsData.length - 1;

            return (
              <div key={step.stepNumber} className="relative w-full flex flex-col">
                {/* Row Container with Card on one side and Display Number in adjacent space */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-14 2xl:gap-16">
                  {step.isLeft ? (
                    <>
                      {/* Left Side: Card on left side of container */}
                      <div className="flex justify-center lg:justify-start">
                        <motion.div
                          
                          className="relative w-full max-w-[460px] 2xl:max-w-[490px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 2xl:p-6 shadow-[0_12px_36px_rgba(23,53,47,0.06)] border border-[#17352F]/10 hover:shadow-[0_20px_45px_rgba(23,53,47,0.12)] hover:border-[#17352F]/20 transition-all duration-300 group z-20"
                        >
                          {/* Inner Image Container */}
                          <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#EFE8DC] mb-4 border border-[#17352F]/8">
                            <img
                              src={step.imageSrc}
                              alt={step.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-[1.03]"
                              loading="lazy"
                            />
                            {/* Subtle gradient vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Clean Content Below Image */}
                          <div className="px-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#17352F] bg-[#17352F]/8 border border-[#17352F]/15 font-sans mb-2.5 lg:hidden">
                              {step.tag}
                            </span>
                            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#17211F] mb-1.5 group-hover:text-[#B86F55] transition-colors leading-snug">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#68716D] font-light leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Adjacent Space: Outlined Display Number 01, 03 */}
                      <div className="hidden lg:flex items-center justify-center lg:justify-start lg:pl-10 2xl:pl-14 group">
                        <span
                          className="font-sans font-black tracking-tighter text-[130px] xl:text-[160px] 2xl:text-[190px] text-transparent opacity-30 hover:opacity-75 transition-opacity duration-300 select-none leading-none cursor-default"
                          style={{
                            WebkitTextStroke: '2px #17352F',
                          }}
                        >
                          {step.stepNumber}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Adjacent Space: Outlined Display Number 02, 04 */}
                      <div className="hidden lg:flex items-center justify-center lg:justify-end lg:pr-10 2xl:pr-14 order-2 lg:order-1 group">
                        <span
                          className="font-sans font-black tracking-tighter text-[130px] xl:text-[160px] 2xl:text-[190px] text-transparent opacity-30 hover:opacity-75 transition-opacity duration-300 select-none leading-none cursor-default"
                          style={{
                            WebkitTextStroke: '2px #17352F',
                          }}
                        >
                          {step.stepNumber}
                        </span>
                      </div>

                      {/* Right Side: Card on right side of container */}
                      <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <motion.div
                          
                          className="relative w-full max-w-[460px] 2xl:max-w-[490px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 2xl:p-6 shadow-[0_12px_36px_rgba(23,53,47,0.06)] border border-[#17352F]/10 hover:shadow-[0_20px_45px_rgba(23,53,47,0.12)] hover:border-[#17352F]/20 transition-all duration-300 group z-20"
                        >
                          {/* Inner Image Container */}
                          <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#EFE8DC] mb-4 border border-[#17352F]/8">
                            <img
                              src={step.imageSrc}
                              alt={step.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-[1.03]"
                              loading="lazy"
                            />
                            {/* Subtle gradient vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Clean Content Below Image */}
                          <div className="px-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#17352F] bg-[#17352F]/8 border border-[#17352F]/15 font-sans mb-2.5 lg:hidden">
                              {step.tag}
                            </span>
                            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#17211F] mb-1.5 group-hover:text-[#B86F55] transition-colors leading-snug">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#68716D] font-light leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>

                {/* SVG Curved Arrow in Terracotta (#B86F55) anchored behind cards (z-10) with synchronized tip animation */}
                {hasNextArrow && (
                  <>
                    {step.isLeft ? (
                      /* Arrow from Left Card Row to Right Card Row */
                      <div className="hidden lg:block absolute -bottom-14 left-[35%] w-[300px] h-[150px] pointer-events-none z-10">
                        <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                          <motion.path
                            d="M 10 10 C 140 10, 190 90, 280 135"
                            fill="none"
                            stroke="#B86F55"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                          />
                          {/* Arrowhead Tip */}
                          <motion.path
                            d="M 270 120 L 283 137 L 265 137 Z"
                            fill="#B86F55"
                            initial={{ opacity: 0, scale: 0.3 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.72, duration: 0.15, ease: 'easeOut' }}
                          />
                        </svg>
                      </div>
                    ) : (
                      /* Arrow from Right Card Row to Left Card Row */
                      <div className="hidden lg:block absolute -bottom-14 right-[35%] w-[300px] h-[150px] pointer-events-none z-10">
                        <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                          <motion.path
                            d="M 290 10 C 160 10, 110 90, 20 135"
                            fill="none"
                            stroke="#B86F55"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                          />
                          {/* Arrowhead Tip */}
                          <motion.path
                            d="M 32 120 L 15 137 L 33 137 Z"
                            fill="#B86F55"
                            initial={{ opacity: 0, scale: 0.3 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.72, duration: 0.15, ease: 'easeOut' }}
                          />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
