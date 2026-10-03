import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenEnquiry?: (plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Plans', href: '#plans' },
    { label: 'About', href: '#about' },
    { label: 'Stories & Trust', href: '#trust' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquiryClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#enquiry');
      return;
    }
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed z-[9990] top-0 min-[850px]:top-2.5 left-1/2 -translate-x-1/2 w-full min-[850px]:max-w-5xl max-[1200px]:max-w-3xl bg-[#17352F] text-[#F7F4ED] shadow-2xl/25 min-[850px]:rounded-b-[2rem] border-b min-[850px]:border-x border-[#F7F4ED]/10 transition-all duration-300">
      <div className="h-18 min-[850px]:h-20 flex items-center justify-between px-4 sm:px-6">
        
        {/* Brandmark / Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Nithya Mitra Home"
        >
          <div className="w-7 h-7 rounded-full bg-[#F7F4ED] flex items-center justify-center text-[#17352F] font-serif font-bold text-xs tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
            NM
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.16em] text-base sm:text-lg font-semibold text-[#F7F4ED] uppercase leading-none">
              NITHYA MITRA
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#D8C8B3]/80 font-medium mt-1 hidden sm:block">
              Family Coordination · India
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden min-[850px]:flex items-center gap-1 min-[1200px]:gap-2 text-[13px] font-medium text-[#F7F4ED]/80"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-[#F7F4ED] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action (Inspiration Dual Button) */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919789066588?text=Hi%20Nithya%20Mitra%2C%20I%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20parents%20in%20India."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#D8C8B3] hover:text-[#F7F4ED] font-medium transition-colors px-2 py-1"
          >
            <Phone className="w-3 h-3 text-[#B86F55]" />
            <span>+91 97890 66588</span>
          </a>

          {/* Iconic Inspiration Dual-Tone Button with Arrow Box */}
          <button
            onClick={handleEnquiryClick}
            type="button"
            className="group relative cursor-pointer inline-flex items-center focus:outline-none"
          >
            <span className="absolute right-0 inset-y-0 w-[calc(100%-1.5rem)] rounded-xl bg-[#B86F55] transition-all duration-300 group-hover:bg-[#9E5B44]" />
            <span className="relative z-10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0E2420] text-[#F7F4ED] text-xs font-semibold tracking-wide border border-white/10">
              Free Consultation
            </span>
            <span className="relative -left-px z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
              <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[850px]:hidden flex items-center justify-center w-9 h-9 p-1.5 text-[#F7F4ED] focus:outline-none ml-1"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-3.5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-[#F7F4ED] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-[#F7F4ED] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Inverted Corner SVG Ear (Left) Connecting smoothly into the top frame */}
      <svg
        className="absolute top-0 -left-[49px] rotate-180 text-[#17352F] pointer-events-none hidden min-[850px]:block"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>

      {/* Inverted Corner SVG Ear (Right) Connecting smoothly into the top frame */}
      <svg
        className="absolute top-0 -right-[49px] rotate-90 text-[#17352F] pointer-events-none hidden min-[850px]:block"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="min-[850px]:hidden bg-[#0E2420] border-t border-[#F7F4ED]/10 px-6 pt-4 pb-8 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#F7F4ED]/90 hover:text-[#F7F4ED] py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <a
                href="https://wa.me/919789066588?text=Hi%20Nithya%20Mitra%2C%20I%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20parents%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/15 text-[#F7F4ED] text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#B86F55]" />
                <span>WhatsApp: +91 97890 66588</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
