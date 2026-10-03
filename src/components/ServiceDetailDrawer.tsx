import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceDetailDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForEnquiry: (serviceTitle: string) => void;
}

export const ServiceDetailDrawer: React.FC<ServiceDetailDrawerProps> = ({
  service,
  onClose,
  onSelectForEnquiry
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#17352F]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-in Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="relative w-full max-w-2xl bg-[#FBFAF6] text-[#17211F] shadow-2xl h-full overflow-y-auto z-10 flex flex-col justify-between border-l border-[#17352F]/15"
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#FBFAF6]/95 backdrop-blur-md z-20 px-6 sm:px-8 py-5 border-b border-[#17352F]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B86F55] font-semibold">
                Service {service.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#17352F]/20" />
              <span className="text-[11px] uppercase tracking-wider text-[#68716D] font-medium">
                Coordination Scope
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-sm text-[#17352F] hover:bg-[#17352F]/10 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="px-6 sm:px-8 py-8 space-y-8 flex-1">
            
            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F] mb-3">
                {service.title}
              </h3>
              <p className="text-base font-serif italic text-[#B86F55]">
                {service.tagline}
              </p>
            </div>

            {/* Service Image */}
            <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 h-56 sm:h-64 bg-[#EAE5DB]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover filter saturate-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-[#F7F4ED] tracking-wide font-light">
                  On-ground accountability in India
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17352F] mb-3">
                About this service
              </h4>
              <p className="text-sm text-[#17211F]/80 leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            {/* What Nithya Mitra Coordinates */}
            <div className="bg-[#F7F4ED] p-6 rounded-sm border border-[#17352F]/10 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17352F] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55]" />
                What Nithya Mitra Coordinates
              </h4>
              <ul className="space-y-2.5">
                {service.whatWeCoordinate.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211F]/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17352F] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Example Use Cases */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#17352F] mb-3">
                Real Situation Scenarios
              </h4>
              <div className="space-y-3">
                {service.exampleUseCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white border border-[#17352F]/10 rounded-sm text-xs sm:text-sm text-[#68716D] italic"
                  >
                    "{useCase}"
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Disclaimer Box */}
            <div className="p-4 bg-[#EFE8DC]/60 border border-[#D8C8B3] rounded-sm flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#B86F55] shrink-0 mt-0.5" />
              <p className="text-xs text-[#17211F]/80 leading-relaxed">
                <strong className="font-semibold text-[#17352F]">Accountability Commitment:</strong> Nithya Mitra acts as your local coordinator, vetting appropriate partners and staying accountable for follow-through. Nithya Mitra does not claim to directly deliver clinical, medical or specialized licensed trades itself.
              </p>
            </div>

          </div>

          {/* Sticky Bottom Actions */}
          <div className="sticky bottom-0 bg-[#FBFAF6] px-6 sm:px-8 py-4 border-t border-[#17352F]/15 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs text-[#68716D] hover:text-[#17352F] uppercase tracking-wider font-medium px-2 py-2"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForEnquiry(service.title);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold transition-all shadow-sm group cursor-pointer"
            >
              <span>Discuss This with Nithya Mitra</span>
              <ArrowUpRight className="w-4 h-4 text-[#D8C8B3] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
