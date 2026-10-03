import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowDownRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  tag: string;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2Prefix: string;
  headlineEmphasis: string;
  focusPosition: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll-driven dynamic curve & parallax
  const { scrollY } = useScroll();
  const bgScrollY = useTransform(scrollY, [0, 800], [0, 80]);
  const contentScrollY = useTransform(scrollY, [0, 600], [0, 40]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);

  // Dynamic bottom border curve: 0px at rest (scrollY = 0), curves smoothly to 48px as user scrolls
  const bottomRadius = useTransform(scrollY, [0, 300], [0, 48]);
  // Dynamic scale: 1.0 (full-screen flush) at rest, subtly contracts to 0.985 on scroll
  const heroScale = useTransform(scrollY, [0, 350], [1, 0.985]);

  const slides: CarouselSlide[] = [
    {
      id: 'slide-1',
      image: '/nithya-mitra-hero-tablet.jpg',
      alt: 'Elderly South Indian couple sitting on sofa with tablet video calling family with Nithya Mitra coordinator in branded green polo',
      tag: '01 · Dedicated Family Coordination & Video Connection',
      eyebrow: 'Now Supporting NRI Families',
      headlineLine1: 'You Built Abroad',
      headlineLine2Prefix: 'Protect Home with ',
      headlineEmphasis: 'Certainty',
      focusPosition: 'object-[75%_center] md:object-[68%_center]'
    },
    {
      id: 'slide-2',
      image: '/nithya-mitra-hero-walk.jpg',
      alt: 'Elderly grandmother gently assisted on morning garden walk in Chennai by Nithya Mitra care coordinator in official branded polo',
      tag: '02 · Assisted Garden Walking & Mobility Support',
      eyebrow: 'Assisted Daily Living & Mobility',
      headlineLine1: 'Every Morning Walk',
      headlineLine2Prefix: 'Cherished with ',
      headlineEmphasis: 'Gentle Dignity',
      focusPosition: 'object-[70%_center] md:object-[62%_center]'
    },
    {
      id: 'slide-3',
      image: '/nithya-mitra-hero-clinic.jpg',
      alt: 'Elderly father accompanied to healthcare clinic by Nithya Mitra care coordinator in official branded polo',
      tag: '03 · Healthcare & Doctor Appointment Accompaniment',
      eyebrow: 'Healthcare & Hospital Support',
      headlineLine1: 'Doctor Appointments',
      headlineLine2Prefix: 'Accompanied with ',
      headlineEmphasis: 'Devotion',
      focusPosition: 'object-[72%_center] md:object-[65%_center]'
    },
    {
      id: 'slide-4',
      image: '/nithya-mitra-hero-elderly.jpg',
      alt: 'Elderly South Indian couple sharing morning filter coffee and reading newspaper in peace at home in Chennai',
      tag: '04 · Dignified Living & Wellbeing at Home',
      eyebrow: 'Dignified Living in Chennai',
      headlineLine1: 'Complete Peace of Mind',
      headlineLine2Prefix: 'For Your Parents with ',
      headlineEmphasis: 'Unconditional Care',
      focusPosition: 'object-[75%_center] md:object-[68%_center]'
    }
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

  // Mouse coordinate values normalized between -0.5 and +0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth organic deceleration
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // OPPOSITE DIRECTION minute parallax:
  // When cursor moves right (+0.5), image shifts left (-20px).
  // When cursor moves down (+0.5), image shifts up (-16px).
  const imageTranslateX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const imageTranslateY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsPaused(true)}
      className="relative isolate min-h-[92vh] md:min-h-screen flex items-center pt-28 sm:pt-36 min-[850px]:pt-40 pb-16 sm:pb-20 overflow-hidden border-b border-[#17352F]/15 cursor-default select-none bg-[#F7F4ED]"
    >
      {/* FULL-SCREEN HERO BACKGROUND CAROUSEL WITH DYNAMIC SCROLL CURVE */}
      <motion.div
        style={{
          y: bgScrollY,
          scale: heroScale,
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        }}
        className="absolute inset-0 z-0 overflow-hidden bg-[#1A1816] will-change-transform shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
      >
        
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Parallax Image that glides in the OPPOSITE direction on hover */}
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              style={{
                x: imageTranslateX,
                y: imageTranslateY,
              }}
              className={`w-full h-full object-cover ${slides[currentSlide].focusPosition} filter saturate-[1.03] contrast-[1.03] will-change-transform`}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Directional Scrim for crisp text contrast on left while keeping parents 100% natural on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 via-45% to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Content Container: Clean Minimal Typography with gentle Scroll Parallax */}
      <motion.div
        style={{ y: contentScrollY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-xl flex flex-col items-start text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start text-left"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-[#F7F4ED] text-xs font-medium mb-5 tracking-wide shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
                <span>{slides[currentSlide].eyebrow}</span>
                <span className="text-[#D8C8B3]">✦</span>
              </div>

              {/* Dynamic Compact 2-Line Headline for Each Scene */}
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-semibold tracking-tight leading-[1.14] mb-7 text-[#F7F4ED] drop-shadow-sm">
                <span className="block font-sans">
                  {slides[currentSlide].headlineLine1}
                </span>
                <span className="block font-sans text-[#F7F4ED] mt-1">
                  {slides[currentSlide].headlineLine2Prefix}
                  <span className="italic font-serif text-[#D8C8B3] font-normal underline decoration-[#B86F55]/60 underline-offset-8">
                    {slides[currentSlide].headlineEmphasis}
                  </span>
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Minimal Action Buttons Row (Free Consultation + How It Works) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Signature Dual-Pill CTA Button */}
            <button
              onClick={onOpenEnquiry || (() => scrollTo('enquiry'))}
              type="button"
              className="group relative cursor-pointer inline-flex items-center shadow-2xl transition-all duration-300 focus:outline-none"
            >
              <span className="absolute right-0 inset-y-0 w-[calc(100%-1.75rem)] rounded-xl bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]" />
              <span className="relative z-10 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#0E2420] text-[#F7F4ED] font-medium text-xs sm:text-sm tracking-wide border border-white/20">
                Free Consultation
              </span>
              <span className="relative -left-px z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </button>

            {/* Video / How It Works Pill Button */}
            <button
              onClick={() => scrollTo('how-it-works')}
              type="button"
              className="inline-flex items-center gap-2.5 px-5 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-[#F7F4ED] border border-white/20 text-xs sm:text-sm font-medium transition-colors cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#B86F55] flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>How It Works</span>
            </button>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Carousel Controls & Active Slide Tag */}
      <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-8 right-4 sm:right-8 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-none">
        
        {/* Active Scene Caption Pill */}
        <motion.div
          key={slides[currentSlide].tag}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-black/45 backdrop-blur-md text-[#F7F4ED] py-1.5 px-4 rounded-full border border-white/20 text-xs pointer-events-auto shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-light tracking-wide text-[11px] sm:text-xs">
            {slides[currentSlide].tag}
          </span>
        </motion.div>

        {/* Carousel Pagination Dots & Nav Arrows */}
        <div className="flex items-center gap-3 self-end sm:self-auto bg-black/45 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/20 pointer-events-auto shadow-md">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#F7F4ED]/80 hover:text-white hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Slide Progress Indicators */}
          <div className="flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer"
                style={{
                  width: currentSlide === idx ? '28px' : '8px',
                  backgroundColor: currentSlide === idx ? '#B86F55' : 'rgba(255, 255, 255, 0.35)'
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#F7F4ED]/80 hover:text-white hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
