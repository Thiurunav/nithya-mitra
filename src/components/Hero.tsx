import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ChevronLeft, ChevronRight, Play, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  shortLabel: string;
  tag: string;
  focusPosition: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: CarouselSlide[] = [
    {
      id: 'slide-1',
      image: '/nithya-mitra-hero-tablet.jpg',
      alt: 'Elderly South Indian couple sitting on sofa with tablet video calling family with Nithya Mitra coordinator in branded green polo',
      shortLabel: 'Family Video Call',
      tag: 'Doorstep Video Connection & Care Review',
      focusPosition: 'object-[center_35%]',
    },
    {
      id: 'slide-2',
      image: '/nithya-mitra-hero-walk.jpg',
      alt: 'Elderly grandmother gently assisted on morning garden walk in Chennai by Nithya Mitra care coordinator in official branded polo',
      shortLabel: 'Garden Walk',
      tag: 'Gentle Mobility & Morning Garden Walks',
      focusPosition: 'object-[center_30%]',
    },
    {
      id: 'slide-3',
      image: '/nithya-mitra-hero-clinic.jpg',
      alt: 'Elderly father accompanied to healthcare clinic by Nithya Mitra care coordinator in official branded polo',
      shortLabel: 'Doctor Escort',
      tag: 'Hospital Accompaniment & Physician Briefings',
      focusPosition: 'object-[center_30%]',
    },
    {
      id: 'slide-4',
      image: '/nithya-mitra-hero-elderly.jpg',
      alt: 'Elderly South Indian couple sharing morning filter coffee and reading newspaper in peace at home in Chennai',
      shortLabel: 'Morning Peace',
      tag: 'Independent Living & Dignified Home Rhythm',
      focusPosition: 'object-[center_30%]',
    },
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-b border-[#17352F]/10 bg-[#F7F4ED] text-[#17211F] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Asymmetric Showcase: Text Left, Unobstructed Photography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Editorial Typography & Primary Actions */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left z-10">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-serif font-normal tracking-tight text-[#17211F] leading-[1.12] mb-6">
              You built abroad.{' '}
              <span className="block mt-1">
                Protect home with{' '}
                <span className="italic text-[#B86F55]">certainty.</span>
              </span>
            </h1>

            {/* Clear, Human Supporting Description */}
            <p className="text-sm sm:text-base text-[#17211F]/75 font-light leading-relaxed mb-8 max-w-lg">
              Dedicated on-ground family and eldercare coordination in Chennai. From accompanied doctor visits to doorstep companionship, we look after your parents with unconditional devotion.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Primary Dual-Pill CTA Button */}
              <button
                onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
                type="button"
                className="group relative cursor-pointer inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none"
              >
                <span className="absolute right-0 inset-y-0 w-[calc(100%-1.75rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
                <span className="relative z-10 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#17352F] text-[#F7F4ED] font-medium text-xs sm:text-sm tracking-wide">
                  Free Consultation
                </span>
                <span className="relative -left-px z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </button>

              {/* Secondary Button: How It Works */}
              <button
                onClick={() => scrollTo('how-it-works')}
                type="button"
                className="inline-flex items-center gap-2.5 px-5 py-3 sm:py-3.5 rounded-xl bg-white/80 hover:bg-white border border-[#17352F]/15 text-[#17352F] text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>How It Works</span>
              </button>
            </div>

            {/* Quick Trust Verification Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 border-t border-[#17352F]/10 text-xs text-[#17211F]/70 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% On-Ground Chennai Team</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>150+ NRI Families Supported</span>
              </div>
            </div>

          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: The Pure, Unobstructed Photography Showcase */}
          {/* ================================================================= */}
          <div
            className="lg:col-span-7 xl:col-span-7 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_24px_64px_rgba(23,53,47,0.12)] border border-[#17352F]/12 bg-[#EAE5DB] h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center group">
              
              {/* Image Crossfade (No Dark Overlays) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentSlide].id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    className={`w-full h-full object-cover ${slides[currentSlide].focusPosition} filter saturate-[1.02] contrast-[1.02]`}
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating Top Badge: On-Ground Presence */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[#17211F] text-xs font-medium shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] tracking-wide">
                    {slides[currentSlide].tag}
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Scene Selector Dock */}
              <div className="absolute bottom-4 sm:bottom-5 inset-x-4 sm:inset-x-5 z-20 flex items-center justify-between gap-3 bg-black/40 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-white/20 shadow-xl">
                
                {/* Clickable Scene Pills */}
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
                  {slides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                        currentSlide === idx
                          ? 'bg-[#B86F55] text-white shadow-xs font-semibold'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {slide.shortLabel}
                    </button>
                  ))}
                </div>

                {/* Manual Navigation Controls */}
                <div className="flex items-center gap-1 shrink-0 pl-1 border-l border-white/15">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Photo"
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Photo"
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
