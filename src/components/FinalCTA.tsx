import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck, Video } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  const scrollToEnquiry = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#17352F] text-[#F7F4ED] relative overflow-hidden border-b border-[#21463F]">
      {/* Background ambient lighting with subtle breathing */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#21463F]/50 blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-serif text-[#FBFAF6] leading-tight font-normal"
        >
          Your family in India.
          <span className="block font-serif italic text-[#D8C8B3] mt-2">
            Our responsibility.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl 2xl:text-2xl text-[#F7F4ED]/80 font-light max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed"
        >
          You may live thousands of kilometres away. Your family does not have to feel that far away.
        </motion.p>

        {/* Buttons with Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToEnquiry}
            className="w-full sm:w-auto px-8 py-4 bg-[#F7F4ED] hover:bg-white text-[#17352F] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book My Free Family Support Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#B86F55] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919789066588?text=Hi%20Nithya Mitra%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 border border-[#D8C8B3]/30 hover:border-[#D8C8B3] text-[#F7F4ED] hover:bg-[#21463F] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Nithya Mitra</span>
          </motion.a>
        </motion.div>

        {/* Reassurance strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#D8C8B3]/80"
        >
          <div className="flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-[#B86F55]" />
            <span>WhatsApp / Zoom</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B86F55]" />
            <span>20 minutes</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B86F55]" />
            <span>No obligation</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
