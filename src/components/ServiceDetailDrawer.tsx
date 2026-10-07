import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import type { ServiceItem } from "../types";

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
  // Lock background scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        
        {/* Dark Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E2420]/75 backdrop-blur-md transition-opacity"
        />

        {/* Centered Minimal Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", damping: 26, stiffness: 300 }}
          className="relative w-full max-w-xl lg:max-w-2xl bg-[#FBFAF6] text-[#17211F] rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#17352F]/15 flex flex-col max-h-[86vh] my-auto"
        >
          {/* Top Modal Header */}
          <div className="px-6 sm:px-8 py-4 border-b border-[#17352F]/10 flex items-center justify-between bg-[#F7F4ED] shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-sans uppercase tracking-widest text-[#B86F55] font-bold bg-[#EDE8DE] px-3 py-1 rounded-full border border-[#17352F]/10">
                {service.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#17352F]/20" />
              <span className="text-xs uppercase tracking-wider text-[#68716D] font-sans font-medium">
                Coordination Scope
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#EDE8DE] hover:bg-[#17352F] hover:text-[#F7F4ED] text-[#17352F] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="px-6 sm:px-8 py-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F] mb-1.5 font-normal">
                {service.title}
              </h3>
              <p className="text-sm font-serif italic text-[#B86F55]">
                {service.tagline}
              </p>
            </div>

            {/* Service Photograph Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#17352F]/15 aspect-[16/9] w-full bg-[#EAE5DB] shadow-sm">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-top sm:object-center filter saturate-[0.98] contrast-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#0E2420]/85 to-transparent flex items-end p-3.5 sm:p-4 pointer-events-none">
                <span className="text-xs text-[#F7F4ED] font-sans font-light tracking-wide flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B86F55]" />
                  Verified on-ground accountability in India
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#17352F] mb-2 font-sans">
                About this service
              </h4>
              <p className="text-xs sm:text-sm text-[#17211F]/80 leading-relaxed font-sans font-normal">
                {service.description}
              </p>
            </div>

            {/* What Nithya Mitra Coordinates */}
            <div className="bg-[#F7F4ED] p-5 sm:p-6 rounded-2xl border border-[#17352F]/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#17352F] flex items-center gap-2 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55]" />
                What Nithya Mitra Coordinates
              </h4>
              <ul className="space-y-2">
                {service.whatWeCoordinate.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17211F]/85 font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Minimal Transparent Accountability Commitment */}
            <div className="p-4 bg-[#EDE8DE]/70 border border-[#D8C8B3] rounded-2xl flex items-start gap-2.5 text-xs text-[#17211F]/80 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#B86F55] shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px] sm:text-xs">
                <strong className="font-semibold text-[#17352F]">Accountability Commitment:</strong> Nithya Mitra acts as your local coordinator, vetting appropriate partners and staying accountable for follow-through.
              </p>
            </div>

          </div>

          {/* Modal Bottom Sticky Actions */}
          <div className="px-6 sm:px-8 py-4 border-t border-[#17352F]/10 bg-[#F7F4ED] flex items-center justify-between gap-4 shrink-0">
            <button
              onClick={onClose}
              className="text-xs text-[#68716D] hover:text-[#17352F] uppercase tracking-wider font-bold font-sans px-3 py-2 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForEnquiry(service.title);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-widest font-bold transition-all shadow-md group cursor-pointer font-sans"
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
