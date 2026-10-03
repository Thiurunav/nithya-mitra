import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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

  // 320vh vertical scroll container for horizontal translation
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
      title: 'Gain full healthcare visibility',
      desc: 'Doctor appointments, hospital navigation, and structured post-consultation reports sent directly to you abroad.',
      image: '/vayosh-service-healthcare.jpg',
      stat: '100%',
      statLabel: 'Accompanied doctor checkups with digital physician notes',
      fullService: servicesData[1],
    },
    {
      id: '02',
      title: 'Regular companionship & dignity',
      desc: 'Unhurried in-person visits over tea, companion walking, grocery replenishment, and gentle welfare checks.',
      image: '/vayosh-companionship.jpg',
      stat: '2-4x',
      statLabel: 'Scheduled weekly visits by verified local coordinators',
      fullService: servicesData[0],
    },
    {
      id: '03',
      title: 'Immediate emergency response',
      desc: 'Calm, verified ground presence for midnight hospital triage liaison, ambulance dispatch, and live family updates.',
      image: '/vayosh-service-emergency.jpg',
      stat: '<15m',
      statLabel: 'Average coordinator mobilization time in emergency',
      fullService: servicesData[5],
    },
    {
      id: '04',
      title: 'Supervised property upkeep',
      desc: 'Supervised physical presence for AC, electrical, masonry, or plumbing repairs with timestamped photo verification.',
      image: '/vayosh-service-property.jpg',
      stat: '0',
      statLabel: 'Unsupervised contractor visits to your parents’ home',
      fullService: servicesData[2],
    },
    {
      id: '05',
      title: 'Indian paperwork without travel',
      desc: 'Digital life certificates (Jeevan Pramaan), banking coordination, notarization, and courier formalities in India.',
      image: '/vayosh-service-documents.jpg',
      stat: '100%',
      statLabel: 'Legal & government documentation tracked digitally',
      fullService: servicesData[4],
    },
    {
      id: '06',
      title: 'Specialist geriatric care network',
      desc: 'Liaison with vetted geriatric home attendants, licensed physiotherapists, and medical equipment rentals.',
      image: '/vayosh-service-specialist.jpg',
      stat: '10+',
      statLabel: 'Years average healthcare partner vetting threshold',
      fullService: servicesData[8],
    },
  ];

  // Horizontal translation range: scrolls all cards smoothly across the viewport
  const totalCards = serviceCards.length;
  // Translate from 0% to approximately -( (totalCards - 1.2) * 440px )
  const horizontalX = useTransform(
    smoothProgress,
    [0, 1],
    ['0px', `-${(totalCards - 1.4) * 440}px`]
  );

  // Update active card index based on scroll position
  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      const idx = Math.min(
        totalCards - 1,
        Math.floor(latest * totalCards)
      );
      setActiveCardIndex(idx);
    });
  }, [smoothProgress, totalCards]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative h-[320vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Sticky Viewport Frame (100vh) */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 sm:px-12 lg:px-16 select-none">
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Fixed Minimal Editorial Header & Metric (Inspired by Reference) */}
          <div className="w-full lg:w-[32%] xl:w-[28%] shrink-0 flex flex-col justify-between h-[480px] py-4">
            
            {/* Top Heading */}
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                  CORE PILLARS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight">
                The rules of
                <span className="block italic text-[#17352F]">family care,</span>
                <span className="block">rewritten</span>
              </h2>
            </div>

            {/* Dynamic Metric Display */}
            <div className="my-auto py-6">
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17211F] font-normal leading-none block">
                {serviceCards[activeCardIndex].stat}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-[#17211F]/70 font-light max-w-[220px] leading-relaxed">
                {serviceCards[activeCardIndex].statLabel}
              </p>
            </div>

            {/* Bottom Minimal Progress Indicator Dots (· · ▬ · ·) */}
            <div className="flex items-center gap-2">
              {serviceCards.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: activeCardIndex === idx ? '24px' : '6px',
                    backgroundColor: activeCardIndex === idx ? '#17211F' : 'rgba(23, 53, 47, 0.2)',
                  }}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Horizontal Scrolling Cards Track */}
          <div className="w-full lg:w-[68%] xl:w-[72%] overflow-hidden">
            <motion.div
              style={{ x: horizontalX }}
              className="flex items-center gap-6 sm:gap-8 will-change-transform py-4"
            >
              {serviceCards.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedService(card.fullService)}
                  className="w-[340px] sm:w-[400px] h-[480px] shrink-0 rounded-3xl bg-white border border-[#17352F]/10 shadow-[0_12px_40px_rgba(23,53,47,0.06)] p-7 sm:p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:border-[#17352F]/25 transition-all"
                >
                  {/* Card Visual Graphic / Photo */}
                  <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-[#F7F4ED] relative border border-[#17352F]/8 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover filter saturate-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#17352F] shadow-xs group-hover:bg-[#17352F] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#B86F55] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="pt-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#17211F] font-medium leading-snug mb-2 group-hover:text-[#17352F] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17211F]/70 font-light leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-[#B86F55] font-semibold text-[11px]">
                      0{idx + 1} · Service Scope
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectServiceForEnquiry(card.title);
                      }}
                      className="text-[#17352F] font-semibold hover:underline underline-offset-4 cursor-pointer"
                    >
                      Enquire →
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>

      {/* Slide-in Detail Drawer */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForEnquiry={onSelectServiceForEnquiry}
      />
    </section>
  );
};
