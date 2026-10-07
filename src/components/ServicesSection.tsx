import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceDetailDrawer } from './ServiceDetailDrawer';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services = [
    {
      num: '01',
      tag: 'Parent Care',
      id: 'dedicated-parent-support',
      title: 'Dedicated Parent Support',
      tagline: 'Regular wellbeing visits & companion support',
      desc: 'Coordinate everyday needs, scheduled wellbeing visits, essential errands, and warm companion presence.',
      specs: [
        { label: 'Visits', val: 'Scheduled' },
        { label: 'Presence', val: 'On-Ground' },
        { label: 'Support', val: '1-on-1' },
      ],
      image: '/vayosh-hero-story.jpg',
      fullService: servicesData.find((s) => s.id === 'dedicated-parent-support') || servicesData[0],
    },
    {
      num: '02',
      tag: 'Healthcare',
      id: 'healthcare-coordination',
      title: 'Healthcare Coordination',
      tagline: 'Apollo, Kauvery & specialist hospital liaison',
      desc: 'Coordinate appointments, hospital visits, diagnostics, prescription refills, and clear communication with trusted healthcare partners.',
      specs: [
        { label: 'Escort', val: 'Clinics' },
        { label: 'Vitals', val: 'Logged' },
        { label: 'Reports', val: 'Digital' },
      ],
      image: '/apollo-hospital-chennai.jpg',
      fullService: servicesData.find((s) => s.id === 'healthcare-coordination') || servicesData[1],
    },
    {
      num: '03',
      tag: 'Property',
      id: 'home-property-assistance',
      title: 'Home & Property Assistance',
      tagline: 'Maintenance, emergency repairs & vendor oversight',
      desc: 'Coordinate periodic inspections, domestic repairs, key holding, and vetted service providers so minor issues do not escalate.',
      specs: [
        { label: 'Upkeep', val: 'Periodic' },
        { label: 'Vendors', val: 'Vetted' },
        { label: 'Access', val: 'Keyholding' },
      ],
      image: '/vayosh-service-property.jpg',
      fullService: servicesData.find((s) => s.id === 'home-property-assistance') || servicesData[2],
    },
    {
      num: '04',
      tag: 'Logistics',
      id: 'courier-parcel-management',
      title: 'International Courier & Parcel Management',
      tagline: 'Customs, packing & international dispatch',
      desc: 'Doorstep receipt in India, safe holding, custom clearances, and dependable dispatch of sweets, heirlooms, and legal files.',
      specs: [
        { label: 'Customs', val: 'Cleared' },
        { label: 'Doorstep', val: 'Handled' },
        { label: 'Tracking', val: 'Live' },
      ],
      image: '/vayosh-team-uniform.jpg',
      fullService: servicesData.find((s) => s.id === 'courier-parcel-management') || servicesData[3],
    },
    {
      num: '05',
      tag: 'Bureaucracy',
      id: 'documents-local-errands',
      title: 'Documents & Local Errands',
      tagline: 'Physical queues, banking & bureaucracy',
      desc: 'Assistance with life certificates (Jeevan Pramaan), pension paperwork, banking updates, notary, and municipal registrations.',
      specs: [
        { label: 'Queues', val: 'Physical' },
        { label: 'Pensions', val: 'Verified' },
        { label: 'Legal', val: 'Notary' },
      ],
      image: '/vayosh-service-documents.jpg',
      fullService: servicesData.find((s) => s.id === 'documents-local-errands') || servicesData[4],
    },
    {
      num: '06',
      tag: '24/7 Desk',
      id: 'emergency-coordination',
      title: 'Emergency Coordination',
      tagline: '24/7 calm liaison & hospital triage',
      desc: 'Immediate on-ground point of contact to coordinate private ambulance dispatch, hospital admission formalities, and live family updates.',
      specs: [
        { label: 'Response', val: 'Immediate' },
        { label: 'Triage', val: '24/7 Calm' },
        { label: 'Hospital', val: 'Escort' },
      ],
      image: '/apollo-hospital-chennai.jpg',
      fullService: servicesData.find((s) => s.id === 'emergency-coordination') || servicesData[5],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B86F55] block mb-3 font-sans">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17211F] leading-[1.18] font-normal">
            One trusted point of contact for the things that matter back home.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#17211F]/75 font-sans leading-relaxed">
            Nithya Mitra is not trying to be your hospital, property manager, courier company, or repair service. We coordinate the right support and remain accountable for the entire journey.
          </p>
        </div>

        {/* 3x2 Grid Display Styled in Exact Inspiration Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedService(item.fullService)}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-[#17352F]/10 shadow-[0_8px_28px_rgba(23,53,47,0.06)] hover:shadow-[0_18px_40px_rgba(23,53,47,0.12)] hover:border-[#17352F]/25 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Top Image Container */}
                <div className="relative w-full h-48 sm:h-52 2xl:h-56 rounded-2xl overflow-hidden mb-4 bg-[#EFE8DC] border border-[#17352F]/8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105 block"
                  />
                  
                  {/* Top-Left In-Image Badge */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-sans font-semibold text-[#17352F] shadow-sm border border-white/80 z-10">
                    {item.tag}
                  </span>

                  {/* Top-Right In-Image Floating Action Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#17352F] group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] shadow-sm transition-all duration-300 border border-white/80 z-10">
                    <ArrowUpRight className="w-4 h-4 text-[#B86F55] group-hover:text-[#F7F4ED] transition-colors" />
                  </div>
                </div>

                {/* Title & Tagline below Image */}
                <div className="px-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#17211F] leading-snug mb-1 group-hover:text-[#B86F55] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B86F55] font-sans font-medium mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-[#68716D] font-sans leading-relaxed font-light line-clamp-2 mb-4">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom 3-Part Divider Metadata Bar */}
              <div className="mt-2 pt-3 border-t border-[#17352F]/10 grid grid-cols-3 divide-x divide-[#17352F]/10 text-center font-sans text-[11px]">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="px-1.5 flex flex-col justify-center">
                    <span className="text-[9px] uppercase tracking-wider text-[#68716D] font-bold block leading-tight">
                      {spec.label}
                    </span>
                    <span className="font-medium text-[#17352F] text-[11px] mt-0.5 truncate leading-tight">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Slide-in Detail Drawer for complete breakdown */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForEnquiry={onSelectServiceForEnquiry}
      />
    </section>
  );
};
