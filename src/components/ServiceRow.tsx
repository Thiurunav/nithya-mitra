import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceRowProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ service, onOpenDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenDetails(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetails(service);
        }
      }}
      className={`group relative border-b border-[#17352F]/15 transition-all duration-300 py-6 sm:py-8 px-4 sm:px-6 cursor-pointer select-none overflow-hidden ${
        isHovered
          ? 'bg-[#FBFAF6] shadow-[0_4px_24px_rgba(23,53,47,0.06)] pl-5 sm:pl-8'
          : 'bg-transparent'
      }`}
    >
      {/* Subtle left accent bar on hover */}
      <span
        className={`absolute left-0 top-0 bottom-0 w-1 bg-[#B86F55] transition-transform duration-300 origin-top ${
          isHovered ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Left: Number + Title */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-8 flex-1">
          <span className="font-mono text-xs sm:text-sm text-[#B86F55] font-semibold tracking-widest shrink-0 mt-1 sm:mt-0 transition-transform duration-300 group-hover:scale-110">
            {service.number}
          </span>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors duration-250">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#68716D] font-light mt-1 max-w-xl group-hover:text-[#17211F]/80 transition-colors duration-200">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Right: Hover Image Preview (Desktop) + Action Prompt */}
        <div className="flex items-center gap-6 self-end lg:self-center">
          
          {/* Animated Hover Image Reveal for Desktop */}
          <div className="hidden xl:block w-36 h-20 relative overflow-hidden rounded-sm border border-[#17352F]/10">
            <AnimatePresence>
              {isHovered ? (
                <motion.img
                  key="hover-img"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter saturate-[0.92]"
                />
              ) : (
                <div className="w-full h-full bg-[#EAE5DB]/60 flex items-center justify-center transition-colors">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#68716D]">
                    Preview
                  </span>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Action indicator with smooth arrow translation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#17352F]">
            <span className="hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#B86F55] -translate-x-1 group-hover:translate-x-0 transition-transform">
              Explore Scope
            </span>
            <div className="w-9 h-9 rounded-full border border-[#17352F]/20 group-hover:border-[#17352F] group-hover:bg-[#17352F] group-hover:text-[#F7F4ED] flex items-center justify-center transition-all duration-200">
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>

        </div>

      </div>

      {/* Expanded Subtext on Hover on larger screens */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.22 }}
          className="mt-3 pt-3 border-t border-[#17352F]/5 text-xs text-[#17211F]/70 flex items-center gap-2"
        >
          <ChevronRight className="w-3.5 h-3.5 text-[#B86F55]" />
          <span>Click to view coordination protocols, partner liaisons, and real NRI scenarios</span>
        </motion.div>
      )}
    </div>
  );
};
