import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Network, MapPin } from 'lucide-react';
import { brandImages } from '../data/assets';

export const TrustAndLeadership: React.FC = () => {
  const commitments = [
    {
      icon: ShieldCheck,
      title: 'One Accountable Coordinator',
      desc: 'You deal with one dedicated family care lead in India, not a fragmented list of unknown handymen or clinic clerks.'
    },
    {
      icon: Eye,
      title: 'Proof in Writing & Photos',
      desc: 'Every visit, repair, and doctor interaction is documented with photos, receipts, and a summary sent straight to your WhatsApp.'
    },
    {
      icon: Network,
      title: 'Vetted Specialist Network',
      desc: 'When specialized medicine, physiotherapy, or nursing is required, we coordinate vetted, licensed partners and supervise execution.'
    }
  ];

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Founder Note & Local Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 pb-16 border-b border-[#17352F]/10">
          
          {/* Left: Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#17352F]/15 bg-[#EAE5DB] shadow-md max-w-sm mx-auto lg:max-w-none">
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

          {/* Right: Straightforward Founder Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                WHY VAYOSH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#17352F] leading-tight mb-5">
              Built on personal accountability.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed">
              <p>
                Every NRI knows the silent anxiety of distance. You build an inspiring life in Dallas, London, Toronto, or Sydney — but home is still where your parents live.
              </p>
              <p className="font-serif italic text-lg text-[#17352F] border-l-2 border-[#B86F55] pl-4 py-0.5">
                "We did not build Vayosh to be an impersonal software app. We built it to be a dependable, caring extension of yourself in India."
              </p>
              <p>
                Whether it is sharing unhurried tea and conversation, escorting a parent to an orthopaedic review, or being the first calm voice on the ground in an emergency — Vayosh exists so you never feel helpless from afar.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom: 3 Core Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className="bg-[#F7F4ED] p-7 rounded-sm border border-[#17352F]/10 hover:border-[#17352F]/25 transition-all"
              >
                <div className="w-9 h-9 rounded-sm bg-[#17352F] text-[#D8C8B3] flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif text-[#17352F] mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68716D] font-light leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
