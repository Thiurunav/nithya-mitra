import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
import { brandImages } from '../data/assets';

export const TrustAndLeadership: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Note & Local Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-md max-w-sm mx-auto lg:max-w-none">
              <img
                src={brandImages.founder.src}
                alt="Kumaresan, Founder & Managing Director"
                className="w-full h-[360px] sm:h-[400px] object-cover object-top filter saturate-[0.98]"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17352F]/90 via-[#17352F]/60 to-transparent p-5 text-[#F7F4ED]">
                <p className="font-serif text-lg font-medium">Kumaresan</p>
                <div className="flex items-center gap-1.5 text-xs text-[#D8C8B3] mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B86F55]" />
                  <span>Founder & Managing Director · Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Minimal & Straight to the Point Founder Statement */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#17352F] leading-tight mb-5">
              The face behind <span className="italic text-[#B86F55]">everything.</span>
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#17352F] border-l-2 border-[#B86F55] pl-4 py-1 mb-5 leading-relaxed">
              “We did not build Nithya Mitra to be an impersonal software app. We built it to be a dependable, caring extension of yourself for your parents in India.”
            </p>

            <p className="text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed mb-6">
              From unhurried tea visits and hospital doctor escorts to immediate crisis response — we provide direct, on-ground presence in Chennai so you never feel helpless from afar.
            </p>

            {/* 3 Direct Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#17352F]/10 text-xs text-[#17211F] font-medium">
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
                <span>Same-day visit reports</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Zero sales pressure</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
