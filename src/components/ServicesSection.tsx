import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceDetailDrawer } from './ServiceDetailDrawer';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Desktop 300vh vertical scroll container for horizontal translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const serviceCards = [
    {
      id: '01',
      title: 'Family & parent support',
      desc: 'Help coordinate everyday needs, visits, errands and local assistance.',
      image: '/vayosh-companionship.jpg',
      stat: 'Dedicated',
      statLabel: 'Regular wellbeing visits & companion support',
      fullService: servicesData[0],
    },
    {
      id: '02',
      title: 'Healthcare coordination',
      desc: 'Coordinate appointments, hospital visits and communication with trusted healthcare partners when needed.',
      image: '/vayosh-service-healthcare.jpg',
      stat: '100%',
      statLabel: 'Accompanied doctor appointments & physician updates',
      fullService: servicesData[1],
    },
    {
      id: '03',
      title: 'Home & property assistance',
      desc: 'Coordinate inspections, maintenance and local service providers so issues do not sit unattended.',
      image: '/vayosh-service-property.jpg',
      stat: 'Supervised',
      statLabel: 'On-ground presence for repairs & inspections',
      fullService: servicesData[2],
    },
    {
      id: '04',
      title: 'Courier & parcel management',
      desc: 'Receive items in India, coordinate packing / dispatch and help send them to your preferred destination.',
      image: '/vayosh-team-uniform.jpg',
      stat: 'Global',
      statLabel: 'Safe receipt, packing & international dispatch',
      fullService: servicesData[3],
    },
    {
      id: '05',
      title: 'Documents & local errands',
      desc: 'Coordinate practical tasks that are difficult to manage remotely.',
      image: '/vayosh-service-documents.jpg',
      stat: 'On-Ground',
      statLabel: 'Life certificates, municipal & banking paperwork',
      fullService: servicesData[4],
    },
    {
      id: '06',
      title: 'Emergency coordination',
      desc: 'When something unexpected happens, you have a local point of contact to help coordinate the next steps.',
      image: '/vayosh-service-emergency.jpg',
      stat: '24/7',
      statLabel: 'Calm, rapid local contact for emergency next steps',
      fullService: servicesData[5],
    },
  ];

  const totalCards = serviceCards.length;

  // Translate cards smoothly from right to left on desktop/2K/4K
  const horizontalX = useTransform(
    smoothProgress,
    [0, 1],
    ['0%', `-${(totalCards - 1.25) * 440}px`]
  );

  // Update active index based on scroll
  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      const idx = Math.min(
        totalCards - 1,
        Math.floor(latest * totalCards)
      );
      setActiveCardIndex(idx);
    });
  }, [smoothProgress, totalCards]);

  const nextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE & TABLET LAYOUT (< 1024px): Seamless Swipeable Carousel */}
      {/* ========================================================================= */}
      <section id="services-mobile" className="lg:hidden py-14 px-4 sm:px-6 bg-[#F7F4ED] text-[#17211F] border-b border-[#17352F]/10">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          {/* Section Heading & Stat */}
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#B86F55] block mb-2">
              THE VAYOSH APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#17211F] leading-tight">
              One trusted point of contact for the things that matter back home.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
              Vayosh is not trying to be your hospital, property manager, courier company or repair service. We coordinate the right support and remain accountable for the journey.
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2 text-[10px] font-mono text-[#B86F55]">
              <span>Practical support on the ground</span>
              <span>·</span>
              <span>Healthcare support when it matters</span>
            </div>
            <div className="mt-4 flex items-baseline gap-3 p-4 bg-white/80 rounded-2xl border border-[#17352F]/10 shadow-xs">
              <span className="font-serif text-4xl text-[#17352F] font-bold">
                {serviceCards[activeCardIndex].stat}
              </span>
              <p className="text-xs text-[#68716D] font-light leading-snug">
                {serviceCards[activeCardIndex].statLabel}
              </p>
            </div>
          </div>

          {/* Active Card for Mobile */}
          <div
            onClick={() => setSelectedService(serviceCards[activeCardIndex].fullService)}
            className="w-full rounded-2xl bg-white border border-[#17352F]/10 p-5 shadow-sm flex flex-col justify-between cursor-pointer hover:border-[#17352F]/30 transition-all"
          >
            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#EFE8DC] mb-4 flex items-center justify-center p-2">
              <img
                src={serviceCards[activeCardIndex].image}
                alt={serviceCards[activeCardIndex].title}
                className="w-full h-full object-cover rounded-lg filter saturate-[1.02]"
                loading="lazy"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono text-[#B86F55] font-semibold">
                  Pillar {serviceCards[activeCardIndex].id} of 06
                </span>
                <span className="text-xs font-semibold text-[#17352F] inline-flex items-center gap-1">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#17211F] leading-snug mb-2">
                {serviceCards[activeCardIndex].title}
              </h3>
              <p className="text-xs text-[#68716D] font-light leading-relaxed">
                {serviceCards[activeCardIndex].desc}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              {serviceCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCardIndex(idx)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: activeCardIndex === idx ? '24px' : '8px',
                    backgroundColor: activeCardIndex === idx ? '#17352F' : 'rgba(23, 53, 47, 0.2)',
                  }}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                className="w-9 h-9 rounded-full bg-white border border-[#17352F]/15 flex items-center justify-center text-[#17211F] shadow-xs active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCard}
                className="w-9 h-9 rounded-full bg-white border border-[#17352F]/15 flex items-center justify-center text-[#17211F] shadow-xs active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DESKTOP, 2K & 4K LAYOUT (>= 1024px): Cinematic Sticky Horizontal Track */}
      {/* ========================================================================= */}
      <section
        id="services"
        ref={containerRef}
        className="hidden lg:block relative h-[300vh] bg-[#F7F4ED] text-[#17211F]"
      >
        {/* Sticky Viewport Frame */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-8 lg:px-14 2xl:px-20 3xl:px-28 select-none">
          
          <div className="max-w-7xl 2xl:max-w-[1520px] 3xl:max-w-[1760px] mx-auto w-full flex flex-row items-center justify-between gap-12 2xl:gap-16">
            
            {/* Left Column: Pinned Editorial Header & Metric */}
            <div className="w-[32%] xl:w-[28%] shrink-0 flex flex-col justify-between h-[480px] 2xl:h-[540px] py-4">
              
              {/* Top Heading */}
              <div>
                <span className="text-[11px] 2xl:text-xs font-mono font-semibold uppercase tracking-wider text-[#B86F55] block mb-3">
                  THE VAYOSH APPROACH
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-[2.65rem] font-serif font-normal text-[#17211F] leading-[1.16] tracking-tight">
                  One trusted point of contact for the things that matter back home.
                </h2>
                <p className="mt-3 text-xs 2xl:text-sm text-[#17211F]/75 font-light leading-relaxed">
                  Vayosh is not trying to be your hospital, property manager, courier company or repair service. We coordinate the right support and remain accountable for the journey.
                </p>
                <p className="mt-2.5 text-[11px] 2xl:text-xs font-mono text-[#B86F55]">
                  Practical support on the ground · Healthcare support when it matters.
                </p>
              </div>

              {/* Dynamic Metric Display */}
              <div className="my-auto py-6">
                <span className="font-serif text-5xl lg:text-6xl 2xl:text-7xl text-[#17211F] font-normal leading-none block">
                  {serviceCards[activeCardIndex].stat}
                </span>
                <p className="mt-3 text-xs sm:text-sm 2xl:text-base text-[#17211F]/70 font-light max-w-[260px] leading-relaxed">
                  {serviceCards[activeCardIndex].statLabel}
                </p>
              </div>

              {/* Bottom Progress Indicator Dots */}
              <div className="flex items-center gap-2">
                {serviceCards.map((_, idx) => (
                  <div
                    key={idx}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: activeCardIndex === idx ? '28px' : '8px',
                      backgroundColor: activeCardIndex === idx ? '#17211F' : 'rgba(23, 53, 47, 0.2)',
                    }}
                  />
                ))}
              </div>

            </div>

            {/* Right Column: Clean Minimal Cards Horizontal Track */}
            <div className="w-[68%] xl:w-[72%] overflow-hidden">
              <motion.div
                style={{ x: horizontalX }}
                className="flex items-center gap-6 sm:gap-8 2xl:gap-10 will-change-transform py-4"
              >
                {serviceCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedService(card.fullService)}
                    className="w-[360px] 2xl:w-[420px] 3xl:w-[460px] h-[480px] 2xl:h-[540px] shrink-0 rounded-3xl bg-[#EFE8DC] border border-[#17352F]/10 shadow-[0_12px_32px_rgba(23,53,47,0.05)] p-7 2xl:p-9 flex flex-col justify-between group cursor-pointer hover:shadow-lg hover:bg-[#EAE2D4] hover:border-[#17352F]/20 transition-all duration-300"
                  >
                    {/* Floating Center Visual Image */}
                    <div className="flex-1 flex items-center justify-center p-2 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="max-h-[220px] 2xl:max-h-[260px] w-auto max-w-[92%] object-contain rounded-2xl filter saturate-[1.02] transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Clean Typography at Bottom */}
                    <div className="pt-4 border-t border-[#17352F]/10">
                      <span className="text-[11px] font-mono text-[#B86F55] font-semibold mb-1 block">
                        Pillar {card.id} · Verified Protocol
                      </span>
                      <h3 className="font-serif text-xl 2xl:text-2xl font-bold text-[#17211F] leading-snug mb-2 group-hover:text-[#17352F] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs 2xl:text-sm text-[#17211F]/70 font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* Slide-in Detail Drawer */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForEnquiry={onSelectServiceForEnquiry}
      />
    </>
  );
};
