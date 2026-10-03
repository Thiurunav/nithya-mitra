import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Check,
  Plus,
  Mic,
  ArrowUp,
} from 'lucide-react';

interface StepData {
  titleLine1: string;
  titleLine2: string;
  description: string;
  userPrompt: string;
  responseHeadline: string;
  pdfName: string;
  bgImage: string;
  bgGrad: string;
}

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 300vh scroll container for smooth vertical step progression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

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

  // Card 1 transforms
  const card1Y = useTransform(smoothProgress, [0, 0.35], [0, 0]);
  const card1Opacity = useTransform(smoothProgress, [0.30, 0.48], [1, 0]);

  // Card 2 transforms
  const card2Y = useTransform(
    smoothProgress,
    [0.15, 0.42, 0.65, 0.82],
    ['60vh', '0vh', '0vh', '0vh']
  );
  const card2Opacity = useTransform(
    smoothProgress,
    [0.15, 0.30, 0.65, 0.80],
    [0, 1, 1, 0]
  );

  // Card 3 transforms
  const card3Y = useTransform(
    smoothProgress,
    [0.50, 0.75],
    ['60vh', '0vh']
  );
  const card3Opacity = useTransform(smoothProgress, [0.48, 0.62], [0, 1]);

  const steps: StepData[] = [
    {
      titleLine1: "Share your family's",
      titleLine2: 'specific care needs',
      description:
        'Tell us about your parents’ routines, medical history, and location in Chennai. We design a bespoke care blueprint tailored to your family.',
      userPrompt: "Can we schedule doorstep vitals & cardiology checks in Adyar?",
      responseHeadline: "Nithya Mitra matched your parents with weekly nurse vitals monitoring and direct hospital escort in Chennai.",
      pdfName: "Personalized_Care_Blueprint.pdf",
      bgImage: "/nithya-mitra-hero-walk.jpg",
      bgGrad: "linear-gradient(135deg, rgba(215, 195, 160, 0.75), rgba(160, 180, 165, 0.85))",
    },
    {
      titleLine1: 'Dedicated coordinator',
      titleLine2: 'assigned to your parents',
      description:
        'A verified, compassionate care manager conducts an unhurried introductory home visit to build trust and understand daily household rhythm.',
      userPrompt: 'Who is our family’s direct on-ground point of contact in Chennai?',
      responseHeadline: 'Karthik R. is assigned as your lead coordinator. Background verified and introductory home tea visit completed.',
      pdfName: 'Coordinator_Profile_Karthik.pdf',
      bgImage: "/triptych-park-walk.jpg",
      bgGrad: "linear-gradient(135deg, rgba(140, 175, 155, 0.85), rgba(95, 135, 115, 0.9))",
    },
    {
      titleLine1: 'And answers',
      titleLine2: 'your questions',
      description:
        'Got a question about a doctor visit? Want to see how your week is tracking? Nithya Mitra is always ready to help on WhatsApp.',
      userPrompt: 'What’s the latest update from today’s Apollo hospital visit?',
      responseHeadline: 'Karthik accompanied Amma to Apollo Heart Centre. Dr. Ramanathan confirmed vitals are stable (120/80).',
      pdfName: 'Apollo_Visit_Summary.pdf',
      bgImage: "/triptych-family-sofa.jpg",
      bgGrad: "linear-gradient(135deg, rgba(195, 170, 160, 0.85), rgba(160, 140, 135, 0.9))",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative h-[300vh] bg-[#FBF9F5] text-[#17211F] select-none"
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden">
        
        {/* Clean Centered 2-Column Grid */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Clean Minimal Typography */}
          <div className="lg:col-span-4 flex flex-col justify-center max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeStep].titleLine1}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col text-left"
              >
                <h3 className="text-3xl sm:text-[2.2rem] font-serif font-normal text-[#17211F] leading-[1.2] tracking-tight mb-4">
                  {steps[activeStep].titleLine1}
                  <br />
                  <span className="font-normal text-[#17211F]">
                    {steps[activeStep].titleLine2}
                  </span>
                </h3>

                <p className="text-sm text-[#17211F]/65 font-light leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Lassie-Style Large Rounded Card with Motion Blur & Modal */}
          <div className="lg:col-span-8 relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[480px]">
            
            {/* ================================================================= */}
            {/* CARD 1 (Step 01) */}
            {/* ================================================================= */}
            <motion.div
              style={{
                y: card1Y,
                opacity: card1Opacity,
                zIndex: 10,
              }}
              className="absolute w-full max-w-[660px] aspect-[16/10.5] rounded-[3rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-black/5 flex items-center justify-center p-6 sm:p-8 will-change-transform bg-[#DCD4C7]"
            >
              {/* Lush Motion Blur Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${steps[0].bgImage})`,
                  filter: 'blur(28px) saturate(1.35) brightness(0.95)',
                  transform: 'scale(1.2)',
                }}
              />
              <div
                className="absolute inset-0 opacity-40 mix-blend-color"
                style={{ background: steps[0].bgGrad }}
              />

              {/* Floating Center Chat / Inquiry Modal */}
              <div className="relative z-10 w-full max-w-[420px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/60">
                {/* User Prompt (Right Aligned Bubble) */}
                <div className="flex justify-end mb-4">
                  <div className="bg-[#EAF4F9] text-[#1E5670] px-3.5 py-1.5 rounded-2xl text-xs font-normal max-w-[85%] text-right leading-relaxed">
                    {steps[0].userPrompt}
                  </div>
                </div>

                {/* Assistant Response (Left Aligned) */}
                <div className="flex items-start gap-2.5 mb-4">
                  <div className="w-5 h-5 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✿
                  </div>
                  <p className="text-xs text-[#17211F] font-normal leading-relaxed">
                    {steps[0].responseHeadline}
                  </p>
                </div>

                {/* Downloadable Summary Pill */}
                <div className="ml-7 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200/80 bg-gray-50/80 text-[11px] font-medium text-[#17211F]">
                    <FileText className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{steps[0].pdfName}</span>
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center ml-1">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Input Bar */}
                <div className="rounded-full border border-gray-200 bg-white px-3 py-1.5 flex items-center justify-between shadow-xs">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-gray-400" />
                    <div className="w-6 h-6 rounded-full bg-[#0D6E8A] text-white flex items-center justify-center">
                      <ArrowUp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================================================================= */}
            {/* CARD 2 (Step 02) */}
            {/* ================================================================= */}
            <motion.div
              style={{
                y: card2Y,
                opacity: card2Opacity,
                zIndex: 20,
              }}
              className="absolute w-full max-w-[660px] aspect-[16/10.5] rounded-[3rem] overflow-hidden shadow-[0_26px_65px_rgba(0,0,0,0.14)] border border-black/5 flex items-center justify-center p-6 sm:p-8 will-change-transform bg-[#CAD9CF]"
            >
              {/* Lush Motion Blur Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${steps[1].bgImage})`,
                  filter: 'blur(28px) saturate(1.4) brightness(0.92)',
                  transform: 'scale(1.2)',
                }}
              />
              <div
                className="absolute inset-0 opacity-40 mix-blend-color"
                style={{ background: steps[1].bgGrad }}
              />

              {/* Floating Center Chat / Inquiry Modal */}
              <div className="relative z-10 w-full max-w-[420px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/60">
                {/* User Prompt (Right Aligned Bubble) */}
                <div className="flex justify-end mb-4">
                  <div className="bg-[#EAF4F9] text-[#1E5670] px-3.5 py-1.5 rounded-2xl text-xs font-normal max-w-[85%] text-right leading-relaxed">
                    {steps[1].userPrompt}
                  </div>
                </div>

                {/* Assistant Response (Left Aligned) */}
                <div className="flex items-start gap-2.5 mb-4">
                  <div className="w-5 h-5 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✿
                  </div>
                  <p className="text-xs text-[#17211F] font-normal leading-relaxed">
                    {steps[1].responseHeadline}
                  </p>
                </div>

                {/* Downloadable Summary Pill */}
                <div className="ml-7 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200/80 bg-gray-50/80 text-[11px] font-medium text-[#17211F]">
                    <FileText className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{steps[1].pdfName}</span>
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center ml-1">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Input Bar */}
                <div className="rounded-full border border-gray-200 bg-white px-3 py-1.5 flex items-center justify-between shadow-xs">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-gray-400" />
                    <div className="w-6 h-6 rounded-full bg-[#0D6E8A] text-white flex items-center justify-center">
                      <ArrowUp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================================================================= */}
            {/* CARD 3 (Step 03) */}
            {/* ================================================================= */}
            <motion.div
              style={{
                y: card3Y,
                opacity: card3Opacity,
                zIndex: 30,
              }}
              className="absolute w-full max-w-[660px] aspect-[16/10.5] rounded-[3rem] overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.16)] border border-black/5 flex items-center justify-center p-6 sm:p-8 will-change-transform bg-[#D4C7C2]"
            >
              {/* Lush Motion Blur Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${steps[2].bgImage})`,
                  filter: 'blur(28px) saturate(1.4) brightness(0.92)',
                  transform: 'scale(1.2)',
                }}
              />
              <div
                className="absolute inset-0 opacity-40 mix-blend-color"
                style={{ background: steps[2].bgGrad }}
              />

              {/* Floating Center Chat / Inquiry Modal */}
              <div className="relative z-10 w-full max-w-[420px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/60">
                {/* User Prompt (Right Aligned Bubble) */}
                <div className="flex justify-end mb-4">
                  <div className="bg-[#EAF4F9] text-[#1E5670] px-3.5 py-1.5 rounded-2xl text-xs font-normal max-w-[85%] text-right leading-relaxed">
                    {steps[2].userPrompt}
                  </div>
                </div>

                {/* Assistant Response (Left Aligned) */}
                <div className="flex items-start gap-2.5 mb-4">
                  <div className="w-5 h-5 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✿
                  </div>
                  <p className="text-xs text-[#17211F] font-normal leading-relaxed">
                    {steps[2].responseHeadline}
                  </p>
                </div>

                {/* Downloadable Summary Pill */}
                <div className="ml-7 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200/80 bg-gray-50/80 text-[11px] font-medium text-[#17211F]">
                    <FileText className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{steps[2].pdfName}</span>
                    <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center ml-1">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Input Bar */}
                <div className="rounded-full border border-gray-200 bg-white px-3 py-1.5 flex items-center justify-between shadow-xs">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-gray-400" />
                    <div className="w-6 h-6 rounded-full bg-[#0D6E8A] text-white flex items-center justify-center">
                      <ArrowUp className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};




