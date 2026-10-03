import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Calendar,
  PhoneCall,
  ShieldCheck,
  MessageSquare,
  HeartHandshake,
  Sparkles,
  UserCheck,
} from 'lucide-react';

interface StepData {
  stepNumber: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  points: string[];
}

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 300vh scroll container for spacious 3-step vertical card stacking sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth responsive spring physics for fluid vertical tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      if (latest < 0.35) {
        setActiveStep(0);
      } else if (latest < 0.68) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Card 1: Starts at rest (scale 1, y 0), then as Card 2 arrives, Card 1 scales down slightly and pushes up
  const card1Y = useTransform(smoothProgress, [0, 0.33, 0.66], [0, 0, -18]);
  const card1Scale = useTransform(smoothProgress, [0, 0.33, 0.66], [1, 1, 0.94]);

  // Card 2: Starts peeking underneath/below (+24px offset), then rises up to 0vh and covers Card 1
  const card2Y = useTransform(
    smoothProgress,
    [0.12, 0.36, 0.66, 0.95],
    ['55vh', '0vh', '0vh', '-14px']
  );
  const card2Scale = useTransform(
    smoothProgress,
    [0.12, 0.36, 0.66, 0.95],
    [0.92, 1, 1, 0.96]
  );
  const card2Opacity = useTransform(smoothProgress, [0.08, 0.22], [0.3, 1]);

  // Card 3: Starts peeking underneath/below (+48px offset), then rises up to 0vh and covers Card 2
  const card3Y = useTransform(
    smoothProgress,
    [0.45, 0.72],
    ['55vh', '0vh']
  );
  const card3Scale = useTransform(
    smoothProgress,
    [0.45, 0.72],
    [0.92, 1]
  );
  const card3Opacity = useTransform(smoothProgress, [0.40, 0.55], [0.3, 1]);

  const steps: StepData[] = [
    {
      stepNumber: 'Step 01',
      category: 'Discovery & Assessment',
      titleLine1: "Share your family's",
      titleLine2: 'specific care needs',
      description:
        'Book a 15-minute consultation via WhatsApp or phone. Tell us about your parents’ routines, medical history, location in Chennai, and where they need the most support.',
      points: [
        'Zero obligation, personalized care roadmap',
        'Timezone-friendly scheduling (US, UK, Gulf, APAC)',
      ],
    },
    {
      stepNumber: 'Step 02',
      category: 'Matching & Onboarding',
      titleLine1: 'Dedicated coordinator',
      titleLine2: 'assigned to your parents',
      description:
        'We match your parents with a dedicated on-ground care manager in Chennai who conducts an unhurried, warm introductory home visit to build trust and understand their household rhythm.',
      points: [
        'One single point of contact for your entire family',
        'Respectful, language-matched local coordinators in Chennai',
      ],
    },
    {
      stepNumber: 'Step 03',
      category: 'Continuous Support',
      titleLine1: 'Real-time updates &',
      titleLine2: 'unconditional peace of mind',
      description:
        'From accompanied doctor visits and prescription delivery to companionship and home repairs — every single task is documented with timestamped photos, bills, and voice summaries sent straight to your WhatsApp.',
      points: [
        'Timestamped photos & doctor notes on WhatsApp',
        '24/7 on-ground emergency response in Chennai',
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative h-[300vh] bg-[#F7F4ED] text-[#17211F] border-b border-[#17352F]/10"
    >
      {/* Sticky Viewport Frame (100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#17352F]/15 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-2.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span>How Nithya Mitra Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight text-[#17211F] leading-tight">
            Three simple steps to <span className="italic text-[#B86F55]">peace of mind</span>
          </h2>
          <p className="hidden sm:block text-xs md:text-sm text-[#17211F]/65 mt-1 max-w-xl mx-auto font-light">
            A seamless, transparent bridge between your life abroad and your parents' daily care in India.
          </p>
        </div>

        {/* Interactive Main Stage (Left: Dynamic Step Content, Right/Center: Stacked Card Deck) */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center flex-1 my-auto">
          
          {/* Left Column: Dynamic Step Copy transitioning with active scroll */}
          <div className="lg:col-span-5 lg:pr-4 flex flex-col justify-center min-h-[240px] sm:min-h-[280px]">
            {/* Step Progress Indicators */}
            <div className="flex items-center gap-2 mb-4">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: activeStep === idx ? '36px' : '14px',
                    backgroundColor: activeStep === idx ? '#B86F55' : 'rgba(23, 53, 47, 0.18)',
                  }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeStep].stepNumber}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start text-left"
              >
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#B86F55] tracking-widest uppercase bg-[#B86F55]/10 px-2.5 py-0.5 rounded-full border border-[#B86F55]/20">
                    {steps[activeStep].stepNumber}
                  </span>
                  <span className="text-xs font-medium text-[#17352F]/60 uppercase tracking-wider">
                    {steps[activeStep].category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-3">
                  {steps[activeStep].titleLine1}
                  <span className="block italic text-[#B86F55]">
                    {steps[activeStep].titleLine2}
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed mb-4 max-w-lg">
                  {steps[activeStep].description}
                </p>

                <ul className="space-y-2 text-xs text-[#17211F]/85 font-light">
                  {steps[activeStep].points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B86F55] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Lassie-style Stacked Card Deck */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center min-h-[350px] sm:min-h-[440px]">
            
            {/* Background Layer 3 Peeking Card Rim (when Card 1 or 2 is on top) */}
            <div
              className="absolute w-full max-w-[560px] aspect-[16/10.5] rounded-[2.6rem] bg-[#a88279] shadow-md border border-black/10 translate-y-7 scale-[0.88] opacity-70 transition-all duration-300 pointer-events-none"
              style={{ zIndex: 1 }}
            />

            {/* Background Layer 2 Peeking Card Rim (when Card 1 is on top) */}
            <div
              className="absolute w-full max-w-[580px] aspect-[16/10.5] rounded-[2.7rem] bg-[#587a6d] shadow-lg border border-black/10 translate-y-3.5 scale-[0.94] opacity-85 transition-all duration-300 pointer-events-none"
              style={{ zIndex: 2 }}
            />

            {/* ========================================================================= */}
            {/* STACK CARD 1 (Step 01 - Warm Silk / Amber Gold Abstract Texture) */}
            {/* ========================================================================= */}
            <motion.div
              style={{
                y: card1Y,
                scale: card1Scale,
                zIndex: 10,
              }}
              className="absolute w-full max-w-[600px] aspect-[16/10.5] rounded-[2.8rem] overflow-hidden shadow-[0_28px_65px_rgba(23,53,47,0.18)] border border-[#17352F]/15 flex items-center justify-center p-4 sm:p-7 will-change-transform"
            >
              {/* Abstract Silky Gradient Texture Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  background:
                    'radial-gradient(circle at 75% 25%, rgba(240, 218, 160, 0.95) 0%, rgba(205, 175, 125, 0.85) 35%, rgba(162, 135, 102, 0.9) 70%, rgba(100, 115, 108, 0.95) 100%)',
                  filter: 'contrast(1.08) saturate(1.15)',
                }}
              />
              {/* Subtle light streak overlay */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.7) 45%, transparent 60%)',
                }}
              />

              {/* Center Floating Rounded UI Card */}
              <div className="relative z-10 w-full max-w-[390px] sm:max-w-[420px] bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5C79E]" />
                    </div>
                    <span className="text-xs font-semibold text-[#17211F]">
                      Care Discovery Consultation
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                    Confirmed
                  </span>
                </div>

                {/* Status Rows */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium text-[11px] text-[#17211F]">Parent Residence: Adyar, Chennai</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">IST</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-gray-100 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium text-[11px] text-[#17211F]">WhatsApp Video Call with Lead</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B86F55] font-semibold">Today</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-gray-500 px-1 pt-0.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Confidential health details protected</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========================================================================= */}
            {/* STACK CARD 2 (Step 02 - Emerald Sage Silk Abstract Texture) */}
            {/* ========================================================================= */}
            <motion.div
              style={{
                y: card2Y,
                scale: card2Scale,
                opacity: card2Opacity,
                zIndex: 20,
              }}
              className="absolute w-full max-w-[600px] aspect-[16/10.5] rounded-[2.8rem] overflow-hidden shadow-[0_30px_70px_rgba(23,53,47,0.22)] border border-[#17352F]/15 flex items-center justify-center p-4 sm:p-7 will-change-transform"
            >
              {/* Abstract Silky Sage Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  background:
                    'radial-gradient(circle at 25% 30%, rgba(135, 175, 150, 0.95) 0%, rgba(85, 125, 105, 0.9) 40%, rgba(45, 80, 68, 0.95) 80%, rgba(25, 50, 42, 1) 100%)',
                  filter: 'contrast(1.1) saturate(1.2)',
                }}
              />
              <div
                className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none"
                style={{
                  background:
                    'linear-gradient(125deg, transparent 25%, rgba(255,255,255,0.65) 50%, transparent 70%)',
                }}
              />

              {/* Center Floating Rounded UI Card */}
              <div className="relative z-10 w-full max-w-[390px] sm:max-w-[420px] bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.14)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-200" />
                    </div>
                    <span className="text-xs font-semibold text-[#17211F]">
                      Dedicated Care Lead Assigned
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                    Active
                  </span>
                </div>

                {/* Status Rows */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium text-[11px] text-[#17211F]">Karthik R. (Chennai South Lead)</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">Verified</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <HeartHandshake className="w-3.5 h-3.5 text-[#B86F55] shrink-0" />
                      <span className="font-medium text-[11px] text-[#17211F]">Introductory tea & home visit</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">Done</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-100 shadow-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#17352F] shrink-0" />
                      <span className="font-medium text-[11px] text-[#17211F]">Monthly routine care calendar</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B86F55] font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========================================================================= */}
            {/* STACK CARD 3 (Step 03 - Warm Terracotta Silk Abstract Texture) */}
            {/* ========================================================================= */}
            <motion.div
              style={{
                y: card3Y,
                scale: card3Scale,
                opacity: card3Opacity,
                zIndex: 30,
              }}
              className="absolute w-full max-w-[600px] aspect-[16/10.5] rounded-[2.8rem] overflow-hidden shadow-[0_32px_75px_rgba(23,53,47,0.25)] border border-[#17352F]/15 flex items-center justify-center p-4 sm:p-7 will-change-transform"
            >
              {/* Abstract Silky Terracotta Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  background:
                    'radial-gradient(circle at 70% 30%, rgba(225, 155, 140, 0.95) 0%, rgba(184, 111, 85, 0.9) 40%, rgba(140, 75, 55, 0.95) 75%, rgba(70, 35, 25, 1) 100%)',
                  filter: 'contrast(1.1) saturate(1.2)',
                }}
              />
              <div
                className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.7) 48%, transparent 68%)',
                }}
              />

              {/* Center Floating Rounded UI Card */}
              <div className="relative z-10 w-full max-w-[390px] sm:max-w-[420px] bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.16)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#17211F]">
                      WhatsApp Live Care Update
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                    Live
                  </span>
                </div>

                {/* Status Rows */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#17211F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-[11px] font-medium">Apollo Cardiology review with Amma</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">10:45 AM</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-gray-100 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2 text-[#17211F]">
                      <span className="text-[12px]">💊</span>
                      <span className="text-[11px] font-medium">30-Day medicine refill delivered</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 font-semibold">Verified</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#17211F]">
                      <span className="text-[12px]">📸</span>
                      <span className="text-[11px] font-medium">5 Photos & doctor notes attached</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">Delivered</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom subtle progress hint */}
        <div className="text-center text-[10px] text-[#17211F]/40 font-mono tracking-wider uppercase">
          Step 0{activeStep + 1} of 03 · Scroll to explore full workflow
        </div>

      </div>
    </section>
  );
};



