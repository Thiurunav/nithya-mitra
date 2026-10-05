import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface WhatsAppFloatingProps {
  onOpenEnquiry?: () => void;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl =
    'https://wa.me/919789066588?text=Hi%20Nithya Mitra%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India.';

  const handleEnquiry = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Pill (Bottom Right) with Micro-hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <motion.a
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#17352F] text-[#F7F4ED] border border-[#D8C8B3]/30 shadow-[0_8px_24px_rgba(23,53,47,0.25)] hover:bg-[#21463F] hover:shadow-[0_12px_28px_rgba(23,53,47,0.35)] transition-all duration-300 group cursor-pointer"
          aria-label="Direct WhatsApp line with Nithya Mitra"
        >
          <div className="relative">
            <span className="animate-ping absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 rounded-full bg-[#25D366] opacity-75" />
            <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#FBFAF6] group-hover:text-[#D8C8B3] transition-colors">
              WhatsApp Us
            </span>
            <span className="text-[10px] text-[#D8C8B3]/80 -mt-0.5">
              Online · +91 97890 66588
            </span>
          </div>
        </motion.a>
      </motion.div>

      {/* Mobile Sticky Bottom Action Bar with Tap Effects & iOS Home Bar Safe Area */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBFAF6]/95 backdrop-blur-md border-t border-[#17352F]/15 px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(23,53,47,0.1)] flex items-center gap-3">
        <motion.a
          whileTap={{ scale: 0.97 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-sm bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp Us</span>
        </motion.a>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleEnquiry}
          className="flex-1 py-2.5 px-3 rounded-sm bg-[#17352F] text-[#F7F4ED] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
        >
          <span>Free Consultation</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C8B3]" />
        </motion.button>
      </div>
    </>
  );
};
