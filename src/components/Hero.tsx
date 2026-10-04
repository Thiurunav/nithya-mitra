import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ChevronLeft, ChevronRight, Play, Check } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  sceneName: string;
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineEmphasis: string;
  description: string;
  focusPosition: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: CarouselSlide[] = [
    {
      id: 'slide-1',
      image: '/nithya-mitra-hero-elderly.jpg',
      alt: 'Elderly South Indian couple sharing morning filter coffee and reading newspaper in peace at home in Chennai',
      sceneName: 'Home Wellbeing · Chennai',
      headlineLine1: 'You built abroad.',
      headlineLine2Prefix: 'Protect home with ',
      headlineEmphasis: 'devotion.',
      description:
        'Dedicated on-ground coordinators in Chennai looking after your aging parents with the same warmth, dignity, and presence you would give them yourself.',
      focusPosition: 'object-[65%_center]'
    },
    {
      id: 'slide-2',
      image: '/nithya-mitra-hero-tablet.jpg',
      alt: 'Elderly South Indian couple video calling their children with on-ground coordinator support',
      sceneName: 'Family Video Connection',
      headlineLine1: 'Stay close,',
      headlineLine2Prefix: 'across every ',
      headlineEmphasis: 'timezone.',
      description:
        'Live WhatsApp updates, verified physician reports, and video catchups that make thousands of miles feel like a door down the street.',
      focusPosition: 'object-[68%_center]'
    },
    {
      id: 'slide-3',
      image: '/nithya-mitra-hero-walk.jpg',
      alt: 'Elderly mother assisted on morning garden walk in Chennai by Nithya Mitra care coordinator',
      sceneName: 'Assisted Mobility & Companionship',
      headlineLine1: 'Every morning walk,',
      headlineLine2Prefix: 'honored with ',
      headlineEmphasis: 'gentle care.',
      description:
        'Regular in-person tea visits, companion walks, grocery replenishment, and dependable domestic stewardship in your parents’ own neighborhood.',
      focusPosition: 'object-[60%_center]'
    },
    {
      id: 'slide-4',
      image: '/nithya-mitra-hero-clinic.jpg',
      alt: 'Elderly father accompanied to healthcare clinic by Nithya Mitra care coordinator',
      sceneName: 'Hospital Escort & Vitals',
      headlineLine1: 'Doctor appointments,',
      headlineLine2Prefix: 'accompanied with ',
      headlineEmphasis: 'certainty.',
      description:
        'Doorstep pickup, priority triage at Apollo and Kauvery, direct doctor briefings, and same-day medication delivery to your parents’ doorstep.',
      focusPosition: 'object-[65%_center]'
    }
  ];

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[90vh] lg:min-h-screen bg-[#F7F4ED] text-[#17211F] pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 overflow-hidden border-b border-[#17352F]/10 select-none flex items-center"
    >
      {/* 
        ========================================================================
        STATELESS, UNBOXED HERO IMAGE LAYER
        Bleeds organically from right to left with a soft, natural gradient dissolve.
        No box container. No border. No card frames. No drop-shadow box.
        ========================================================================
      */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[65%] z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className={`w-full h-full object-cover ${slides[currentSlide].focusPosition} filter saturate-[1.04] brightness-[0.98]`}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* 
          Soft editorial gradient dissolve into the #F7F4ED canvas:
          Blends the image directly into the background without any visible border or box boundary.
        */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-56 lg:w-72 bg-gradient-to-r from-[#F7F4ED] via-[#F7F4ED]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F7F4ED] via-[#F7F4ED]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F7F4ED] via-[#F7F4ED]/80 to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#F7F4ED]/90 via-[#F7F4ED]/30 to-transparent pointer-events-none" />
      </div>

      {/* 
        ========================================================================
        EDITORIAL CONTENT LAYER (LEFT-ALIGNED ON CLEAN CANVAS)
        ========================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col items-start text-left">
          
          {/* Dynamic Headline with Smooth Text Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="w-full"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-serif font-normal text-[#17352F] tracking-tight leading-[1.08] mb-5">
                <span className="block">{slides[currentSlide].headlineLine1}</span>
                <span className="block mt-1">
                  {slides[currentSlide].headlineLine2Prefix}
                  <span className="italic text-[#B86F55]">
                    {slides[currentSlide].headlineEmphasis}
                  </span>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#17211F]/80 font-light leading-relaxed max-w-xl mb-8">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Signature Consultation Button */}
            <button
              onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
              type="button"
              className="group relative cursor-pointer inline-flex items-center shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.75rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
              <span className="relative z-10 px-6 sm:px-7 py-3.5 rounded-xl bg-[#17352F] text-[#F7F4ED] font-medium text-xs sm:text-sm tracking-wide">
                Free Family Consultation
              </span>
              <span className="relative -left-px z-10 w-11 h-11 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </button>

            {/* How It Works Button */}
            <button
              onClick={() => scrollTo('how-it-works')}
              type="button"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-[#17352F] border border-[#17352F]/15 text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
            >
              <div className="w-5 h-5 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>How It Works</span>
            </button>
          </div>

          {/* Minimal 3-Point Ground Proofs */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#17211F]/75 font-medium pt-4 border-t border-[#17352F]/10">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Dedicated Chennai Team</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Same-Day WhatsApp Notes</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Apollo & Kauvery Liaison</span>
            </div>
          </div>

        </div>
      </div>

      {/* 
        ========================================================================
        STATELESS FLOATING SCENE NAVIGATOR (Discreetly at Bottom Right)
        ========================================================================
      */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20 flex items-center gap-3">
        {/* Active Scene Name */}
        <div className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#17352F]/10 text-xs text-[#17211F] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-[11px] font-medium tracking-tight">
            {slides[currentSlide].sceneName}
          </span>
        </div>

        {/* Carousel Prev/Next & Dots */}
        <div className="flex items-center gap-2 bg-white/85 backdrop-blur-md py-1.5 px-3 rounded-full border border-[#17352F]/12 shadow-xs">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-6 h-6 rounded-full flex items-center justify-center text-[#17352F] hover:bg-[#17352F]/10 transition-colors focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
                style={{
                  width: currentSlide === idx ? '22px' : '6px',
                  backgroundColor: currentSlide === idx ? '#B86F55' : 'rgba(23, 53, 47, 0.25)'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-6 h-6 rounded-full flex items-center justify-center text-[#17352F] hover:bg-[#17352F]/10 transition-colors focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
};
