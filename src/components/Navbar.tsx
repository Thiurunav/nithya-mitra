import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
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
    <header className="fixed z-[9990] top-0 min-[850px]:top-3.5 left-1/2 -translate-x-1/2 w-full min-[850px]:max-w-3xl max-[1200px]:max-w-2xl bg-white/95 backdrop-blur-md text-[#17211F] shadow-[0_4px_25px_rgba(0,0,0,0.12)] min-[850px]:rounded-full border min-[850px]:border-black/10 border-b border-black/8 transition-all duration-300">
      <div className="h-11 min-[850px]:h-13 flex items-center justify-between px-3.5 sm:px-4">
        
        {/* Brandmark / Logo */}
        <Link
          to="/"
          className="flex items-center gap-1.5 group focus:outline-none"
          aria-label="Nithya Mitra Home"
        >
          <div className="w-5 h-5 rounded-full bg-[#17352F] flex items-center justify-center text-[#F7F4ED] font-serif font-bold text-[9.5px] tracking-wider shadow-xs transition-transform duration-200 group-hover:scale-105">
            NM
          </div>
          <span className="font-serif tracking-[0.15em] text-xs sm:text-[13px] font-semibold text-[#17211F] uppercase leading-none">
            NITHYA MITRA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden min-[850px]:flex items-center gap-0.5 text-[11.5px] font-medium text-[#17211F]/75"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-2 py-0.5 rounded-full hover:bg-black/5 hover:text-[#17352F] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action (Clean Sleek Dual Button) */}
        <div className="flex items-center gap-1.5">
          {/* Iconic Dual-Tone Button with Arrow Box */}
          <button
            onClick={handleEnquiryClick}
            type="button"
            className="group relative cursor-pointer inline-flex items-center focus:outline-none"
          >
            <span className="absolute right-0 inset-y-0 w-[calc(100%-1rem)] rounded-lg bg-[#B86F55] transition-all duration-300 group-hover:bg-[#9E5B44]" />
            <span className="relative z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#17352F] text-[#F7F4ED] text-[11px] sm:text-xs font-medium tracking-wide border border-black/10">
              Free Consultation
            </span>
            <span className="relative -left-px z-10 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-lg flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
              <ArrowDownRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[850px]:hidden flex items-center justify-center w-7 h-7 p-1 text-[#17211F] focus:outline-none ml-1"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-4 h-2.5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Inverted Corner SVG Ear (Left) in White */}
      <svg
        className="absolute top-0 -left-[35px] rotate-180 text-white pointer-events-none hidden min-[850px]:block"
        width="36"
        height="36"
        viewBox="0 0 50 50"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>

      {/* Inverted Corner SVG Ear (Right) in White */}
      <svg
        className="absolute top-0 -right-[35px] rotate-90 text-white pointer-events-none hidden min-[850px]:block"
        width="36"
        height="36"
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
            className="min-[850px]:hidden bg-white border-t border-black/10 px-5 pt-3 pb-6 space-y-3 shadow-xl overflow-hidden text-[#17211F]"
          >
            <nav className="flex flex-col space-y-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-medium text-[#17211F]/80 hover:text-[#17352F] py-1.5 border-b border-black/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
