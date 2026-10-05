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
      {/* Desktop Floating WhatsApp Button: Shows ONLY the icon until hover, smoothly expands to 'WhatsApp Us' without phone number */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center h-12 rounded-full bg-[#17352F] text-[#F7F4ED] border border-[#D8C8B3]/35 shadow-[0_10px_30px_rgba(23,53,47,0.35)] hover:bg-[#21463F] hover:shadow-[0_14px_36px_rgba(23,53,47,0.45)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 ease-out group cursor-pointer select-none overflow-hidden"
        aria-label="Direct WhatsApp line with Nithya Mitra"
      >
        {/* Icon Container (always 48x48 centered circle in rest state) */}
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inset-0 rounded-full bg-[#25D366] opacity-70 pointer-events-none" />
            <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Text Container: Hidden until hover, no phone number */}
        <div className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out group-hover:max-w-[130px] group-hover:opacity-100 group-hover:pr-4 group-hover:pl-0.5">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#FBFAF6] group-hover:text-[#D8C8B3] transition-colors leading-none">
            WhatsApp Us
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
