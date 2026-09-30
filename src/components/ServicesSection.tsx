import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Stethoscope, Home, FileText, ShieldAlert, Users2 } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceDetailDrawer } from './ServiceDetailDrawer';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Group into 6 straightforward pillars
  const coreServices = [
    {
      id: 'family-parent-support',
      icon: Heart,
      num: '01',
      title: 'Family & Parent Wellbeing',
      tagline: 'Scheduled visits, unhurried companionship, and grocery or medication assistance.',
      scope: 'Regular in-person check-ins · Companionship over tea · Welfare observation',
      fullService: servicesData[0]
    },
    {
      id: 'healthcare-coordination',
      icon: Stethoscope,
      num: '02',
      title: 'Healthcare Accompaniment',
      tagline: 'Booking appointments, hospital escort, and objective doctor summaries shared with you.',
      scope: 'Clinic escort · Report collection & archiving · Prescription refills',
      fullService: servicesData[1]
    },
    {
      id: 'home-property-assistance',
      icon: Home,
      num: '03',
      title: 'Home & Property Upkeep',
      tagline: 'Supervising technicians for plumbing, electrical, AC, or monsoon home repairs.',
      scope: 'Supervised technician visits · Photo logs · Vacant home walkthroughs',
      fullService: servicesData[2]
    },
    {
      id: 'documents-local-errands',
      icon: FileText,
      num: '04',
      title: 'Documents & Local Errands',
      tagline: 'Managing local bureaucracy that is impossible to handle remotely from abroad.',
      scope: 'Pension life certificates · Bank visits · International courier dispatch',
      fullService: servicesData[4]
    },
    {
      id: 'emergency-coordination',
      icon: ShieldAlert,
      num: '05',
      title: 'Emergency Coordination',
      tagline: 'A reliable local coordinator by your parents’ side during sudden midnight crises.',
      scope: 'Ambulance liaison · Hospital admission escort · Real-time family updates',
      fullService: servicesData[5]
    },
    {
      id: 'specialist-partner-coordination',
      icon: Users2,
      num: '06',
      title: 'Specialist Partner Network',
      tagline: 'Coordinating vetted physiotherapists, home attendants, and medical equipment.',
      scope: 'Licensed home attendants · Neuro/ortho physiotherapy · Medical gear rental',
      fullService: servicesData[8]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              WHAT WE COORDINATE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            One trusted point of contact for home.
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg text-[#68716D] font-light max-w-xl">
            Vayosh coordinates the right on-ground assistance and stays accountable for the journey.
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                whileHover={{ y: -5 }}
                className="bg-[#FBFAF6] border border-[#17352F]/12 rounded-sm p-7 flex flex-col justify-between hover:border-[#17352F]/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(service.fullService)}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[#17352F] text-[#D8C8B3] flex items-center justify-center group-hover:bg-[#21463F] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#B86F55] font-semibold">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed mb-6">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#17352F]/10 flex items-center justify-between text-xs">
                  <span className="text-[#68716D] font-mono text-[11px]">
                    {service.scope.split('·')[0]}
                  </span>
                  <span className="text-[#17352F] font-semibold flex items-center gap-1 group-hover:text-[#B86F55] transition-colors">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Disclaimer Strip */}
        <div className="mt-8 text-center text-xs text-[#68716D] font-light">
          We coordinate vetted local partners and supervise execution. Vayosh does not claim to deliver clinical healthcare or licensed trades directly.
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
