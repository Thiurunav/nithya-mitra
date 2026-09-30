import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { ServiceRow } from './ServiceRow';
import { ServiceDetailDrawer } from './ServiceDetailDrawer';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'wellbeing' | 'practical' | 'specialist'>('all');

  const filteredServices = servicesData.filter(
    (s) => filter === 'all' || s.category === filter || (filter === 'wellbeing' && s.category === 'core')
  );

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F7F4ED] border-b border-[#17352F]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              COORDINATION SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-[1.16]"
          >
            One trusted point of contact for the things that matter back home.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-[#68716D] font-light max-w-2xl leading-relaxed"
          >
            Vayosh coordinates the right support and remains accountable for the journey.
          </motion.p>
        </div>

        {/* Filter Bar (Subtle & Editorial) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 pb-4 border-b border-[#17352F]/10 text-xs uppercase tracking-wider font-medium">
          <span className="text-[#68716D] mr-2 hidden sm:inline-block">Filter by scope:</span>
          {[
            { id: 'all', label: 'All 9 Services' },
            { id: 'wellbeing', label: 'Parent Wellbeing & Companionship' },
            { id: 'practical', label: 'Home, Property & Local Errands' },
            { id: 'specialist', label: 'Emergency & Specialist Liaisons' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#17352F] text-[#F7F4ED] font-semibold'
                  : 'text-[#17211F]/70 hover:text-[#17352F] hover:bg-[#17352F]/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Service Rows */}
        <div className="border-t border-[#17352F]/15">
          {filteredServices.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              onOpenDetails={setSelectedService}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-[#68716D] font-light">
          Need a customized coordination requirement? We discuss individual family requirements during our complimentary consultation.
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
