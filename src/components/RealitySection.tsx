import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Stethoscope, Home, ShieldAlert } from 'lucide-react';
import { brandImages } from '../data/assets';

export const RealitySection: React.FC = () => {
  const realities = [
    {
      icon: HeartHandshake,
      title: 'Solitude & Daily Wellbeing',
      desc: 'Parents are often medically fine but quietly lonely. We provide scheduled, unhurried companion visits over tea.'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Accompaniment',
      desc: 'Navigating clinic queues and tests alone is intimidating. We escort parents and send you objective doctor briefings.'
    },
    {
      icon: Home,
      title: 'Home & Domestic Upkeep',
      desc: 'Fixing electrical issues, monsoon leaks, or appliances without parents having to negotiate with strangers.'
    },
    {
      icon: ShieldAlert,
      title: 'Emergency Peace of Mind',
      desc: 'A calm, reliable coordinator on the ground when the unexpected happens, while you arrange your travel.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-18">

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] text-[#17211F] tracking-tight"
          >
            <span className="block font-sans font-normal text-[#17211F]">
              The problem is not that you don’t care.
            </span>
            <span className="block font-serif italic font-medium text-[#17352F] mt-1 sm:mt-2">
              The problem is that you cannot always be there.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-[#68716D] font-light leading-relaxed max-w-2xl"
          >
            When you live thousands of miles away, coordinating everyday needs across timezones causes endless remote worry. Nithya Mitra gives you one trusted local point of contact on the ground.
          </motion.p>
        </div>

        {/* 2-Column Clean Layout: Authentic Photograph + 4 Punchy Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo with clean caption */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-md group">
              <img
                src={brandImages.companionship.src}
                alt="Genuine parent companionship in India"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center filter saturate-[0.92] group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/85 via-transparent to-transparent flex items-end p-6">
                <p className="font-serif italic text-base text-[#F7F4ED] leading-snug">
                  "Having someone you trust who actually visits, listens, and follows through."
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4 Pillars Grid (Straightforward, scannable) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {realities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * idx }}
                  whileHover={{ y: -3 }}
                  className="bg-[#F7F4ED] p-6 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/25 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#17352F] text-[#D8C8B3] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-serif text-[#17352F] mb-1.5 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
