import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
import { brandImages } from '../data/assets';

export const TrustAndLeadership: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl 2xl:max-w-[1520px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Founder Note & Local Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-20 items-center">
          
          {/* Left: Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-md max-w-sm 2xl:max-w-md mx-auto lg:max-w-none">
              <img
                src={brandImages.founder.src}
                alt="Kumaresan R., Founder & Managing Director"
                className="w-full h-[320px] sm:h-[400px] 2xl:h-[480px] object-cover object-top filter saturate-[0.98]"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17352F]/90 via-[#17352F]/60 to-transparent p-5 2xl:p-7 text-[#F7F4ED]">
                <p className="font-serif text-lg 2xl:text-xl font-medium">Kumaresan R.</p>
                <div className="flex items-center gap-1.5 text-xs 2xl:text-sm text-[#D8C8B3] mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B86F55]" />
                  <span>Founder & Managing Director, Chennai Hub</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Authentic & Impactful Founder Statement */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-serif text-[#17352F] leading-tight mb-6">
              The face behind <span className="italic text-[#B86F55]">everything.</span>
            </h2>

            <blockquote className="font-serif italic text-lg sm:text-xl 2xl:text-2xl text-[#17352F] border-l-2 border-[#B86F55] pl-4 py-1 mb-5 leading-relaxed">
              “Distance should never mean helplessness. When your parents need a doctor escort, a companion over tea, or urgent help at midnight, our family steps in as yours.”
            </blockquote>

            <p className="text-sm sm:text-base 2xl:text-lg text-[#17211F]/85 font-light leading-relaxed mb-6">
              Real care cannot be solved by an app alone. It takes trustworthy human presence on the ground in Chennai, complete transparency, and personal responsibility for every single family we support.
            </p>

            {/* Founder Signature Attribution */}
            <div className="mb-7">
              <p className="font-serif text-base 2xl:text-lg font-semibold text-[#17352F]">
                Kumaresan R.
              </p>
              <p className="text-xs 2xl:text-sm text-[#68716D] font-mono">
                Founder & Managing Director, Nithya Mitra
              </p>
            </div>

            {/* 3 Direct Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 2xl:gap-5 pt-5 2xl:pt-8 border-t border-[#17352F]/10 text-xs 2xl:text-sm text-[#17211F] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Direct on-ground team</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Same day visit notes</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>24/7 direct hotline</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
