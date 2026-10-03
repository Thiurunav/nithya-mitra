import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E2420] text-[#F7F4ED] pt-16 pb-24 md:pb-12 border-t border-[#17352F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#21463F]/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-[#F7F4ED] flex items-center justify-center text-[#17352F] font-serif font-bold text-sm tracking-wider">
                NM
              </div>
              <span className="font-serif tracking-[0.2em] text-xl font-semibold text-[#FBFAF6] uppercase">
                NITHYA MITRA
              </span>
            </Link>

            <p className="font-serif italic text-base text-[#D8C8B3] max-w-sm">
              “Your Family in India, Our Responsibility.”
            </p>

            <p className="text-xs text-[#F7F4ED]/70 font-light leading-relaxed max-w-sm">
              Trusted on-ground family-support coordination for NRIs across the United States, UK, Canada, Australia, Singapore and worldwide whose parents live in India.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D8C8B3]">
              <Shield className="w-4 h-4 text-[#B86F55]" />
              <span>Ground Coordination Hub: Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Navigation (Matching Sitemap) */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8C8B3] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F4ED]/75">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  About Nithya Mitra
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('trust')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Stories & Trust
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('enquiry')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer font-medium text-[#D8C8B3]">
                  Contact / Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8C8B3] mb-4">
              Coordination Pillars
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F4ED]/75">
              <li>01 · Family & Parent Wellbeing</li>
              <li>02 · Healthcare Accompaniment</li>
              <li>03 · Home & Property Upkeep</li>
              <li>04 · Documents & Local Errands</li>
              <li>05 · Emergency Coordination</li>
              <li>06 · Specialist Partner Network</li>
            </ul>
          </div>

          {/* Direct Ground Contacts */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8C8B3] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-[#F7F4ED]/80">
              <a
                href="tel:+919789066588"
                className="flex items-center gap-2 hover:text-[#D8C8B3] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B86F55] shrink-0" />
                <span>+91 97890 66588</span>
              </a>

              <a
                href="https://wa.me/919789066588?text=Hi%20Nithya%20Mitra%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: +91 97890 66588</span>
              </a>

              <a
                href="mailto:support@nithyamitra.com"
                className="flex items-start gap-2 hover:text-[#D8C8B3] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#B86F55] shrink-0 mt-0.5" />
                <span>support@nithyamitra.com</span>
              </a>

              <div className="flex items-start gap-2 text-[#D8C8B3]">
                <MapPin className="w-3.5 h-3.5 text-[#B86F55] shrink-0 mt-0.5" />
                <span>Chennai Ground Hub, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright (Legal Sitemap Links) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F4ED]/60 font-light">
          <div>
            © 2026 Nithya Mitra Coordination Services. “Your Family in India, Our Responsibility.”
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link
              to="/privacy-policy"
              className="hover:text-[#FBFAF6] transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              to="/terms"
              className="hover:text-[#FBFAF6] transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <Link
              to="/disclaimer"
              className="hover:text-[#FBFAF6] transition-colors cursor-pointer text-[#D8C8B3]"
            >
              Service & Medical Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
