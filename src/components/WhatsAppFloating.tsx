import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface WhatsAppFloatingProps {
  onOpenEnquiry?: () => void;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl =
    'https://wa.me/919789066588?text=Hi%20Nithya%20Mitra%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India.';

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
      {/* Desktop Floating WhatsApp Pill (Single element - no duplicate ghost layers) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#17352F] text-[#F7F4ED] border border-[#D8C8B3]/35 shadow-[0_10px_30px_rgba(23,53,47,0.35)] hover:bg-[#21463F] hover:shadow-[0_14px_36px_rgba(23,53,47,0.45)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer select-none"
        aria-label="Direct WhatsApp line with Nithya Mitra"
      >
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inset-0 rounded-full bg-[#25D366] opacity-75 pointer-events-none" />
          <div className="relative w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#FBFAF6] group-hover:text-[#D8C8B3] transition-colors leading-tight">
            WhatsApp Us
          </span>
          <span className="text-[10px] text-[#D8C8B3]/90 font-mono leading-tight mt-0.5">
            Online · +91 97890 66588
          </span>
        </div>
      </a>

      {/* Mobile Sticky Bottom Action Bar with Tap Effects & iOS Home Bar Safe Area */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FBFAF6]/98 backdrop-blur-md border-t border-[#17352F]/15 px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(23,53,47,0.12)] flex items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp Us</span>
        </a>

        <button
          type="button"
          onClick={handleEnquiry}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#17352F] text-[#F7F4ED] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
        >
          <span>Free Consultation</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C8B3]" />
        </button>
      </div>
    </>
  );
};
