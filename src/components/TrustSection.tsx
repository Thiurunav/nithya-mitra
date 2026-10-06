import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Network, Users } from 'lucide-react';
import { brandImages } from '../data/assets';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Clear Accountability',
      desc: 'One primary point of contact rather than making you chase multiple vendors.'
    },
    {
      icon: Eye,
      title: 'Transparent Communication',
      desc: 'Clear updates and documentation of the work requested and completed.'
    },
    {
      icon: Network,
      title: 'Partner network',
      desc: 'Relevant specialists can be coordinated where Nithya Mitra itself is not the service provider.'
    },
    {
      icon: Users,
      title: 'Human Support',
      desc: 'The objective is not to replace family. It is to make distance easier to manage — including the human need for regular connection.'
    }
  ];

  return (
    <section id="trust" className="py-24 md:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">

          <span className="text-[11px] 2xl:text-xs font-mono font-semibold uppercase tracking-widest text-[#B86F55] block mb-3">TRUST MUST BE EARNED</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
          >
            We won’t ask you to trust a slogan.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#68716D] font-light max-w-2xl leading-relaxed"
          >
            Because Nithya Mitra deals with families, homes, information and important local tasks, the trust system needs to be visible.
          </motion.p>
        </div>

        {/* 4 Pillars Grid + Editorial Image Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 4 Principles with Hover Elevation */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ y: -4 }}
                  className="bg-[#F7F4ED] p-7 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="w-10 h-10 rounded-sm bg-[#17352F] text-[#D8C8B3] flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#21463F] group-hover:text-[#F7F4ED] transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-lg font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Real Proof & Community Stories */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-md group mb-6">
              <img
                src={brandImages.trust.src}
                alt={brandImages.trust.alt}
                className="w-full h-[320px] object-cover filter saturate-[0.95] transition-transform duration-700 ease-out group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17352F]/85 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B86F55] font-semibold block mb-1">
                    On-Site Verification
                  </span>
                  <p className="font-serif italic text-base text-[#F7F4ED]">
                    "Real presence on the ground protects family heritage and guarantees integrity."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-[#F7F4ED] border border-[#17352F]/15 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B86F55] block mb-1.5">
                Real proof will live here.
              </span>
              <p className="text-xs sm:text-sm text-[#17211F]/80 font-light leading-relaxed">
                As Nithya Mitra serves its first families, this space will become a library of verified customer stories, service outcomes and real case examples.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
