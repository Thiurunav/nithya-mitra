import React from "react";
import { ArrowUpRight, Video, Clock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onOpenEnquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultationClick = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      scrollTo("contact");
    }
  };

  return (
    <footer className="relative w-full bg-[#F7F4ED] text-[#F7F4ED] select-none">
      
      {/* ========================================================================= */}
      {/* TOP CTA WAVE CONTAINER WITH BEAUTIFUL CURVED TOP & EMERALD SHADE          */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-gradient-to-b from-[#173E36] via-[#13352E] to-[#0E2420] rounded-t-[40px] sm:rounded-t-[56px] lg:rounded-t-[64px] px-4 sm:px-8 lg:px-12 py-14 sm:py-18 text-center overflow-hidden shadow-[0_-16px_40px_rgba(0,0,0,0.12)]">
        
        {/* Ambient Top Glow Shade */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#2A6D5F]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#FBFAF6] tracking-tight leading-[1.2]">
            Your Family in India.
            <span className="italic text-[#D8C8B3] ml-2">
              Our Responsibility.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-xs sm:text-sm text-[#F7F4ED]/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
            You may live thousands of kilometres away. Your family does not have to feel that far away.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleConsultationClick}
              className="px-7 sm:px-9 py-3.5 rounded-full bg-[#FBFAF6] hover:bg-white text-[#17352F] text-xs uppercase tracking-widest font-bold shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all font-sans active:scale-98"
            >
              <span>Book Free Family Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B86F55]" />
            </button>
          </div>

          {/* Reassurance Bar */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-5 text-[11px] sm:text-xs text-[#D8C8B3]/90 font-sans">
            <div className="flex items-center gap-1.5">
              <Video className="w-3 h-3 text-[#B86F55]" />
              <span>WhatsApp / Zoom</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#B86F55]" />
              <span>20 minutes</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#B86F55]" />
              <span>No obligation</span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM FOOTER COLUMNS                                                     */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-[#0E2420] overflow-hidden">
        
        {/* Ambient Bottom Glow Shade */}
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[200px] bg-[#173E36]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/10">
            
            {/* Brand Column (Span 4) */}
            <div className="md:col-span-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#17352F] flex items-center justify-center text-[#F7F4ED] font-serif font-bold text-xs tracking-wider border border-white/15">
                  NM
                </div>
                <span className="font-serif tracking-[0.16em] text-lg font-semibold text-[#FBFAF6] uppercase">
                  NITHYA MITRA
                </span>
              </div>

              <p className="font-serif italic text-xs text-[#D8C8B3] mt-2">
                Your Family in India. Our Responsibility.
              </p>

              <p className="text-[#F7F4ED]/70 mt-3 max-w-sm text-xs leading-relaxed font-sans font-light">
                Trusted NRI family-support coordination in India. One accountable point of contact on the ground.
              </p>
            </div>

            {/* 3 Columns (Span 8) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-left">
              
              {/* Col 1: Address & Contact */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#D8C8B3] mb-3">
                  Ground Hub
                </h4>
                <div className="space-y-2 text-xs text-[#F7F4ED]/80 font-sans leading-relaxed">
                  <p className="font-medium text-white">
                    Chennai Ground Hub
                  </p>
                  <p className="text-[#F7F4ED]/70">
                    Tamil Nadu, India
                  </p>
                  <p className="pt-0.5">
                    <a href="tel:+919025166588" className="hover:text-[#D8C8B3] transition-colors block">
                      +91 90251 66588
                    </a>
                    <a href="mailto:info@nithyamitra.com" className="hover:text-[#D8C8B3] transition-colors block mt-0.5">
                      info@nithyamitra.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Col 2: Services */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#D8C8B3] mb-3">
                  Our Services
                </h4>
                <ul className="space-y-2 text-xs text-[#F7F4ED]/75 font-sans">
                  {[
                    "Dedicated Parent Support",
                    "Healthcare Coordination",
                    "Home & Property Upkeep",
                    "Courier & Parcel Logistics",
                    "Emergency Liaison Desk"
                  ].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollTo("services")}
                        className="hover:text-white transition-colors cursor-pointer text-left block"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Quick Links */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#D8C8B3] mb-3">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-xs text-[#F7F4ED]/75 font-sans">
                  <li>
                    <button onClick={() => scrollTo("how-it-works")} className="hover:text-white transition-colors cursor-pointer">
                      How It Works
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollTo("plans")} className="hover:text-white transition-colors cursor-pointer">
                      Support Plans
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollTo("faq")} className="hover:text-white transition-colors cursor-pointer">
                      Frequently Asked Questions
                    </button>
                  </li>
                  <li>
                    <button onClick={handleConsultationClick} className="text-[#D8C8B3] hover:text-white transition-colors cursor-pointer font-medium flex items-center gap-1">
                      <span>Book Consultation</span>
                      <ArrowUpRight className="w-3 h-3 text-[#B86F55]" />
                    </button>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F7F4ED]/60 font-sans text-center sm:text-left">
            <p>
              &copy; 2026 Nithya Mitra. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span>·</span>
              <Link to="/disclaimer" className="hover:text-white transition-colors text-[#D8C8B3]">
                Service & Medical Disclaimer
              </Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
