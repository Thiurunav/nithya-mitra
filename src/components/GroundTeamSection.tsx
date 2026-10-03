import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, HeartHandshake, BellRing } from 'lucide-react';
import { brandImages } from '../data/assets';

export const GroundTeamSection: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Identifiable Official Uniform & ID',
      desc: 'Our coordinators wear the official Nithya Mitra dark-green polo and present verified credentials before entering any family home.'
    },
    {
      icon: UserCheck,
      title: 'Consistent Familiar Faces',
      desc: 'We assign dedicated coordinators so your parents see the same trusted, caring faces on every visit — not random gig workers.'
    },
    {
      icon: HeartHandshake,
      title: 'Trained with Senior Sensitivity',
      desc: 'Fluent in regional languages (Tamil, English, Hindi), patient, and respectful of elder dignity, household traditions, and privacy.'
    },
    {
      icon: BellRing,
      title: 'Direct WhatsApp Line to You',
      desc: 'After every visit or errand, your coordinator shares timestamped photos, doctor notes, and a voice check-in straight to your phone.'
    }
  ];

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#FBFAF6] border-b border-[#17352F]/10 overflow-hidden">
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
              ON-GROUND PRESENCE IN INDIA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] text-[#17211F] tracking-tight mb-4"
          >
            <span className="block font-sans font-normal text-[#17211F]">
              The people looking after home
            </span>
            <span className="block font-serif italic font-medium text-[#17352F] mt-1 sm:mt-2">
              when you are not here.
            </span>
          </motion.h2>

          <p className="mt-4 text-base sm:text-lg text-[#68716D] font-light max-w-2xl leading-relaxed">
            Not an anonymous app directory. A real, verified local coordination team in Chennai and South India who step into your family home with accountability, warmth, and respect.
          </p>
        </div>

        {/* Large Team Uniform Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-lg mb-14 group"
        >
          <img
            src={brandImages.teamUniform.src}
            alt={brandImages.teamUniform.alt}
            className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center filter saturate-[0.98] transition-transform duration-700 ease-out group-hover:scale-102"
            loading="lazy"
          />

          {/* Editorial Overlay Caption */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17352F]/95 via-[#17352F]/70 to-transparent p-6 sm:p-8 text-[#F7F4ED]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B86F55] font-semibold block mb-1">
                  OFFICIAL NITHYA MITRA FIELD TEAM · CHENNAI HUB
                </span>
                <p className="font-serif italic text-lg sm:text-2xl text-[#FBFAF6]">
                  "When distance keeps you abroad, your family sees familiar, caring faces at the door."
                </p>
              </div>

              <div className="bg-[#17352F]/80 border border-[#D8C8B3]/25 px-4 py-2 rounded-sm text-xs text-[#D8C8B3] shrink-0 font-mono">
                Verified Photo ID & Uniform
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Trust Highlights Below Team Photo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                whileHover={{ y: -3 }}
                className="bg-[#F7F4ED] p-6 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-sm bg-[#17352F] text-[#D8C8B3] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-serif text-[#17352F] mb-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
