import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { teamMembersData } from '../data/team';

interface TeamSectionProps {
  onScheduleIntro?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onScheduleIntro }) => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                LOCAL COORDINATION TEAM
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight"
            >
              Meet the people who help keep home close.
            </motion.h2>

            <p className="mt-4 text-sm sm:text-base text-[#68716D] font-light">
              On-ground coordinators based in Tamil Nadu and South India who understand family sensibilities, cultural respect, and operational follow-through.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onScheduleIntro}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-[#17352F] text-[#17352F] hover:bg-[#17352F] hover:text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold transition-all shrink-0 cursor-pointer shadow-sm group"
          >
            <span>Meet the Nithya Mitra Team</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        {/* Profiles Grid with Card Hover Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ y: -6 }}
              className="bg-[#FBFAF6] border border-[#17352F]/12 rounded-sm overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-lg hover:border-[#17352F]/30 transition-all duration-300"
            >
              <div>
                {/* Photo frame with smooth zoom on hover */}
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-[#EAE5DB] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter saturate-[0.9] group-hover:scale-104 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#17352F]/90 text-[#F7F4ED] text-[10px] uppercase font-mono tracking-wider px-2 py-1 rounded-sm shadow-sm">
                    {member.specialty}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-serif text-[#17352F] group-hover:text-[#B86F55] transition-colors mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#B86F55] uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-xs text-[#68716D] mb-4">
                    <MapPin className="w-3 h-3 text-[#B86F55]" />
                    <span>{member.city}</span>
                  </div>

                  <p className="text-xs text-[#17211F]/75 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#68716D] block border-t border-[#17352F]/10 pt-3 group-hover:text-[#17352F] transition-colors">
                  Verified Local Coordinator
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
