import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceDetailDrawer } from './ServiceDetailDrawer';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services = [
    {
      num: '01',
      title: 'Family & Parent Wellbeing',
      shortDesc: 'Regular, unhurried in-person visits over tea, companionship, welfare checks, and pantry or prescription replenishments.',
      tags: ['Scheduled Visits', 'Companion Walk', 'Welfare Check'],
      fullService: servicesData[0]
    },
    {
      num: '02',
      title: 'Healthcare Accompaniment',
      shortDesc: 'Doctor appointments, hospital navigation, diagnostics liaison, and structured post-consultation reports sent to you abroad.',
      tags: ['Clinic Escort', 'Report Archiving', 'Prescription Refills'],
      fullService: servicesData[1]
    },
    {
      num: '03',
      title: 'Home & Property Upkeep',
      shortDesc: 'Supervised physical presence for electrical, AC, waterproofing or masonry repairs, plus ancestral property inspections.',
      tags: ['Supervised Repairs', 'Photo Proof', 'Property Walkthroughs'],
      fullService: servicesData[2]
    },
    {
      num: '04',
      title: 'Documents & Local Errands',
      shortDesc: 'Managing Indian paperwork that cannot wait: digital life certificates (Jeevan Pramaan), bank visits, and notary coordination.',
      tags: ['Life Certificate', 'Bank Formalities', 'Courier Dispatch'],
      fullService: servicesData[4]
    },
    {
      num: '05',
      title: 'Emergency Coordination',
      shortDesc: 'A calm, reliable coordinator on the ground for midnight ambulance dispatch, hospital triage liaison, and continuous family updates.',
      tags: ['24/7 Response', 'Hospital Admission', 'Real-Time Updates'],
      fullService: servicesData[5]
    },
    {
      num: '06',
      title: 'Specialist Partner Network',
      shortDesc: 'Liaison with vetted geriatric homecare attendants, licensed neuro/ortho physiotherapists, and medical equipment rentals.',
      tags: ['Home Attendants', 'Physiotherapy', 'Mobility Equipment'],
      fullService: servicesData[8]
    }
  ];

  const currentService = services[activeIdx];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              COORDINATION DIRECTORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight">
            One trusted point of contact for home.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68716D] font-light max-w-xl">
            Select a service to review how Vayosh coordinates on the ground and remains accountable.
          </p>
        </div>

        {/* Master-Detail Editorial Layout (No Generic Cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Dynamic Visual Showcase (5 Cols - Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService.num}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-[380px] sm:h-[440px] w-full"
                >
                  <img
                    src={currentService.fullService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover filter saturate-[0.95] contrast-[1.02]"
                  />
                  
                  {/* Subtle Gradient & Context Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/95 via-[#17352F]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-[#F7F4ED]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F55] font-semibold">
                        Service {currentService.num} of 06
                      </span>
                      <span className="text-[11px] font-mono text-[#D8C8B3]">
                        Chennai Ground Hub
                      </span>
                    </div>

                    <h4 className="text-2xl font-serif text-[#FBFAF6] mb-2">
                      {currentService.title}
                    </h4>

                    <p className="text-xs text-[#F7F4ED]/80 font-light leading-relaxed mb-4 line-clamp-2">
                      {currentService.shortDesc}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedService(currentService.fullService)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F7F4ED] hover:bg-white text-[#17352F] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors cursor-pointer"
                      >
                        <span>Full Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#B86F55]" />
                      </button>

                      <button
                        onClick={() => onSelectServiceForEnquiry(currentService.title)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#D8C8B3]/40 text-[#F7F4ED] hover:bg-[#21463F] text-xs uppercase tracking-wider font-medium rounded-sm transition-colors cursor-pointer"
                      >
                        <span>Consult on this</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Helper Note */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#68716D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B86F55]" />
              <span>Hover or tap any service on the right to preview on-ground coordination.</span>
            </div>
          </div>

          {/* Right Column: Editorial Service Index List (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-[#17352F]/15 border-y border-[#17352F]/15">
            {services.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => {
                    setActiveIdx(idx);
                    setSelectedService(item.fullService);
                  }}
                  role="button"
                  tabIndex={0}
                  className={`py-6 sm:py-7 px-4 sm:px-6 transition-all duration-300 cursor-pointer select-none group relative ${
                    isActive
                      ? 'bg-[#FBFAF6] shadow-[0_4px_20px_rgba(23,53,47,0.05)] pl-6 sm:pl-8'
                      : 'hover:bg-[#FBFAF6]/60'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#B86F55] transition-transform duration-300 origin-top ${
                      isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-5 sm:gap-6">
                      <span className={`font-mono text-sm font-semibold tracking-wider pt-1 transition-colors ${
                        isActive ? 'text-[#B86F55]' : 'text-[#68716D] group-hover:text-[#17352F]'
                      }`}>
                        {item.num}
                      </span>

                      <div>
                        <h3 className={`text-xl sm:text-2xl font-serif transition-colors ${
                          isActive ? 'text-[#17352F] font-medium' : 'text-[#17211F] group-hover:text-[#B86F55]'
                        }`}>
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed max-w-xl">
                          {item.shortDesc}
                        </p>

                        {/* Scope Chips */}
                        <div className="mt-3.5 flex flex-wrap gap-2">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[11px] px-2.5 py-0.5 rounded-sm font-mono transition-colors ${
                                isActive
                                  ? 'bg-[#17352F] text-[#F7F4ED]'
                                  : 'bg-[#EAE5DB]/70 text-[#17211F]/70 group-hover:bg-[#EAE5DB]'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 shrink-0">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        isActive
                          ? 'border-[#17352F] bg-[#17352F] text-[#F7F4ED] translate-x-1'
                          : 'border-[#17352F]/20 text-[#17352F] group-hover:border-[#17352F]'
                      }`}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Accountability Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#68716D] font-light max-w-2xl mx-auto">
          Vayosh acts as your local coordinator and remains accountable for the journey. We do not claim to provide medical treatments or licensed trade works directly.
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
