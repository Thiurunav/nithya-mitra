import React from 'react';
import { motion } from 'framer-motion';

export const TrustStrip: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'One point of contact',
      description: 'A single, accountable coordinator in India instead of multiple unknown vendors.'
    },
    {
      num: '02',
      title: 'Local coordination',
      description: 'Physical on-ground presence for visits, hospitals, property, and urgent errands.'
    },
    {
      num: '03',
      title: 'Regular updates',
      description: 'Structured notes, photos, and direct briefings shared across timezones.'
    },
    {
      num: '04',
      title: 'Transparent process',
      description: 'Clear service scopes, documented tasks, and no commercial surprises.'
    }
  ];

  return (
    <div className="border-b border-[#17352F]/10 bg-[#FBFAF6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#17352F]/10">
          {principles.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              whileHover={{ y: -2 }}
              className={`flex flex-col pt-4 sm:pt-0 group transition-transform duration-200 cursor-default ${
                idx !== 0 ? 'lg:pl-8' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono tracking-widest text-[#B86F55] font-semibold transition-colors duration-200 group-hover:text-[#17352F]">
                  {item.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#17352F]/20 group-hover:bg-[#B86F55] transition-colors duration-200" />
                <h3 className="text-sm font-semibold text-[#17352F] tracking-tight group-hover:text-[#B86F55] transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#68716D] leading-relaxed group-hover:text-[#17211F]/90 transition-colors duration-200">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
