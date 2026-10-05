import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const footerData = {
  company: {
    name: 'NITHYA MITRA',
    tagline: '“Your Family in India, Our Responsibility.”',
    description:
      'Dedicated on-ground family support and eldercare coordination for NRIs across the US, UK, Canada, Australia, Singapore, and worldwide whose parents live in India.',
  },
  socialLinks: [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919789066588',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.771.814 2.796.814 3.181 0 5.768-2.587 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.814-1.238l-7.186 1.886 1.916-6.997c-.878-1.499-1.383-3.238-1.383-5.089 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92m1.37 9.74v-8.37H5.09v8.37z" />
        </svg>
      ),
    },
    {
      label: 'Twitter / X',
      href: '#',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ],
  aboutLinks: [
    { text: 'About Nithya Mitra', id: 'about' },
    { text: 'Leadership & Roots', id: 'trust' },
    { text: 'How It Works', id: 'how-it-works' },
    { text: 'Ground Infrastructure', id: 'bento-grid' },
  ],
  serviceLinks: [
    { text: 'Parent Wellbeing Visits', id: 'services' },
    { text: 'Healthcare Accompaniment', id: 'services' },
    { text: 'Home & Property Upkeep', id: 'services' },
    { text: 'Emergency Liaison Desk', id: 'services' },
  ],
  helpfulLinks: [
    { text: 'Common FAQs', id: 'faq' },
    { text: 'Consultation Booking', id: 'enquiry' },
    { text: 'Live Care Desk', href: 'https://wa.me/919789066588', hasIndicator: true },
  ],
  contactInfo: [
    { icon: Mail, text: 'support@nithyamitra.com', href: 'mailto:support@nithyamitra.com' },
    { icon: Phone, text: '+91 97890 66588', href: 'tel:+919789066588' },
    { icon: MapPin, text: 'Chennai Ground Hub, Tamil Nadu, India', isAddress: true },
  ],
};

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id?: string) => {
    if (!id) return;
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E2420] text-[#F7F4ED] w-full border-t border-[#17352F] rounded-t-3xl pt-16 pb-28 sm:pb-12 shadow-2xl">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1520px] 3xl:max-w-[1760px] px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Main 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#21463F]/80">
          
          {/* Brand & Mission Column (Span 4) */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#F7F4ED] flex items-center justify-center text-[#17352F] font-serif font-bold text-sm tracking-wider">
                NM
              </div>
              <span className="font-serif tracking-[0.2em] text-xl font-semibold text-[#FBFAF6] uppercase">
                {footerData.company.name}
              </span>
            </div>

            <p className="font-serif italic text-sm text-[#D8C8B3] mt-3">
              {footerData.company.tagline}
            </p>

            <p className="text-[#F7F4ED]/70 mt-4 max-w-sm text-xs sm:text-sm font-light leading-relaxed">
              {footerData.company.description}
            </p>

            {/* Social Icons */}
            <ul className="mt-7 flex items-center gap-3.5">
              {footerData.socialLinks.map(({ icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[#F7F4ED]/20 flex items-center justify-center text-[#F7F4ED] hover:bg-[#F7F4ED] hover:text-[#17352F] hover:border-[#F7F4ED] transition-all duration-200"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 Links Columns (Span 8: 4 equal 2-col slots) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
            
            {/* Col 1: About Us */}
            <div className="text-left">
              <p className="text-xs sm:text-sm font-serif font-medium tracking-wider text-[#D8C8B3] uppercase">
                About Us
              </p>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                {footerData.aboutLinks.map(({ text, id }) => (
                  <li key={text}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-[#F7F4ED]/75 hover:text-[#FBFAF6] transition-colors cursor-pointer text-left block"
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Services */}
            <div className="text-left">
              <p className="text-xs sm:text-sm font-serif font-medium tracking-wider text-[#D8C8B3] uppercase">
                Our Services
              </p>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                {footerData.serviceLinks.map(({ text, id }) => (
                  <li key={text}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-[#F7F4ED]/75 hover:text-[#FBFAF6] transition-colors cursor-pointer text-left block"
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Helpful Links */}
            <div className="text-left">
              <p className="text-xs sm:text-sm font-serif font-medium tracking-wider text-[#D8C8B3] uppercase">
                Helpful Links
              </p>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                {footerData.helpfulLinks.map(({ text, id, href, hasIndicator }) => (
                  <li key={text}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          hasIndicator
                            ? 'inline-flex items-center gap-2 text-[#FBFAF6] font-medium'
                            : 'text-[#F7F4ED]/75 hover:text-[#FBFAF6] transition-colors block'
                        }`}
                      >
                        <span>{text}</span>
                        {hasIndicator && (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                        )}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(id)}
                        className="text-[#F7F4ED]/75 hover:text-[#FBFAF6] transition-colors cursor-pointer text-left block"
                      >
                        {text}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="text-left">
              <p className="text-xs sm:text-sm font-serif font-medium tracking-wider text-[#D8C8B3] uppercase">
                Contact Us
              </p>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm">
                {footerData.contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                  <li key={text}>
                    {href ? (
                      <a
                        className="flex items-center gap-2 text-[#F7F4ED]/80 hover:text-[#D8C8B3] transition-colors"
                        href={href}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#B86F55] shrink-0" />
                        <span>{text}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-2 text-[#D8C8B3]">
                        <Icon className="w-3.5 h-3.5 text-[#B86F55] shrink-0 mt-0.5" />
                        {isAddress ? (
                          <address className="not-italic leading-relaxed">
                            {text}
                          </address>
                        ) : (
                          <span>{text}</span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="mt-8 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#F7F4ED]/60 font-light">
            <p>
              &copy; 2026 {footerData.company.name} Coordination Services. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
              <Link to="/privacy-policy" className="hover:text-[#FBFAF6] transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link to="/terms" className="hover:text-[#FBFAF6] transition-colors">
                Terms of Service
              </Link>
              <span>·</span>
              <Link to="/disclaimer" className="hover:text-[#FBFAF6] transition-colors text-[#D8C8B3]">
                Service & Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
