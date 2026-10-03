import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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

  // 300vh vertical scroll container for horizontal translation
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
      desc: 'Track doctor visits, medical consultations, and care outcomes across your parents’ health journey.',
      image: '/vayosh-service-healthcare.jpg',
      stat: '100%',
      statLabel: 'Accompanied doctor checkups with digital physician notes',
      fullService: servicesData[1],
    },
    {
      id: '02',
      title: 'Active companionship & dignity',
      desc: 'Regular in-person visits over tea, companion walking, grocery replenishment, and gentle welfare checks.',
      image: '/vayosh-companionship.jpg',
      stat: '2-4x',
      statLabel: 'Scheduled weekly visits by verified local coordinators',
      fullService: servicesData[0],
    },
    {
      id: '03',
      title: 'Immediate emergency coordination',
      desc: 'Calm, verified ground presence for midnight hospital triage liaison, ambulance dispatch, and live updates.',
      image: '/vayosh-service-emergency.jpg',
      stat: '<15m',
      statLabel: 'Average coordinator mobilization time in emergency',
      fullService: servicesData[5],
    },
    {
      id: '04',
      title: 'Supervised property upkeep',
      desc: 'Supervised physical presence for AC, electrical, masonry, or plumbing repairs with timestamped photos.',
      image: '/vayosh-service-property.jpg',
      stat: '0',
      statLabel: 'Unsupervised contractor visits to your parents’ home',
      fullService: servicesData[2],
    },
    {
      id: '05',
      title: 'Indian paperwork without travel',
      desc: 'Digital life certificates (Jeevan Pramaan), banking coordination, notarization, and courier formalities.',
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

  const totalCards = serviceCards.length;
  // Translate cards smoothly from right to left
  const horizontalX = useTransform(
    smoothProgress,
    [0, 1],
    ['0px', `-${(totalCards - 1.35) * 440}px`]
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

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative h-[300vh] bg-[#F7F4ED] text-[#17211F]"
    >
      {/* Sticky Viewport Frame (100vh) */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 sm:px-12 lg:px-16 select-none">
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Minimal Pinned Editorial Header & Metric */}
          <div className="w-full lg:w-[32%] xl:w-[28%] shrink-0 flex flex-col justify-between h-[460px] py-2">
            
            {/* Top Heading */}
            <div>
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

          {/* Right Column: Clean Minimal Cards Horizontal Track */}
          <div className="w-full lg:w-[68%] xl:w-[72%] overflow-hidden">
            <motion.div
              style={{ x: horizontalX }}
              className="flex items-center gap-6 sm:gap-8 will-change-transform py-4"
            >
              {serviceCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedService(card.fullService)}
                  className="w-[340px] sm:w-[390px] h-[460px] shrink-0 rounded-3xl bg-[#EFE8DC] border border-[#17352F]/10 shadow-[0_8px_24px_rgba(23,53,47,0.04)] p-8 sm:p-9 flex flex-col justify-between group cursor-pointer hover:shadow-md hover:bg-[#EAE2D4] transition-all"
                >
                  {/* Floating Center Visual Image (Clean, No dark boxes or badges) */}
                  <div className="flex-1 flex items-center justify-center p-2">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="max-h-[200px] w-auto max-w-[90%] object-contain rounded-2xl filter saturate-[1.02] transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  {/* Clean Minimal Typography at Bottom (Matching Reference Screenshot) */}
                  <div className="pt-4">
                    <h3 className="font-sans text-xl sm:text-[21px] font-medium text-[#17211F] leading-snug mb-2 group-hover:text-[#17352F] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17211F]/70 font-normal leading-relaxed">
                      {card.desc}
                    </p>
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
