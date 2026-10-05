import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Phone, MessageCircle } from 'lucide-react';
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
    { label: 'About', href: '#about' },
    { label: 'Plans', href: '#plans' },
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
    <header className="fixed z-[9990] top-0 min-[850px]:top-3 left-1/2 -translate-x-1/2 w-full min-[850px]:w-[94%] min-[850px]:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl bg-white/95 backdrop-blur-md text-[#17211F] shadow-[0_8px_30px_rgba(0,0,0,0.06)] min-[850px]:rounded-2xl border-b min-[850px]:border border-black/[0.08] transition-all duration-300">
      <div className="h-13 sm:h-14 2xl:h-16 flex items-center justify-between px-4 sm:px-6 2xl:px-8">
        
        {/* Brandmark / Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group focus:outline-none shrink-0"
          aria-label="Vayosh Home"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#17352F] flex items-center justify-center text-[#F7F4ED] font-serif font-bold text-[10px] sm:text-[11px] tracking-wider shadow-xs transition-transform duration-200 group-hover:scale-105">
            NM
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.16em] text-xs sm:text-sm 2xl:text-base font-semibold text-[#17211F] uppercase leading-none">
              VAYOSH
            </span>
            <span className="hidden sm:block text-[9px] font-sans text-[#68716D] tracking-wider uppercase mt-0.5">
              NRI Family Support · India
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden min-[850px]:flex items-center gap-1 xl:gap-2 text-xs 2xl:text-sm font-medium text-[#17211F]/75"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 rounded-full hover:bg-black/5 hover:text-[#17352F] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-2">
          {/* Dual-Tone Consultation CTA */}
          <button
            onClick={handleEnquiryClick}
            type="button"
            className="group relative cursor-pointer inline-flex items-center focus:outline-none"
          >
            <span className="absolute right-0 inset-y-0 w-[calc(100%-1rem)] rounded-xl bg-[#B86F55] transition-all duration-300 group-hover:bg-[#9E5B44]" />
            <span className="relative z-10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#17352F] text-[#F7F4ED] text-[11px] sm:text-xs 2xl:text-sm font-medium tracking-wide border border-black/10">
              <span className="hidden xs:inline">Free </span>Consultation
            </span>
            <span className="relative -left-px z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-[#F7F4ED] bg-[#B86F55] transition-colors duration-300 group-hover:bg-[#9E5B44]">
              <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[850px]:hidden flex items-center justify-center w-8 h-8 rounded-lg text-[#17211F] hover:bg-black/5 focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.25' : ''}`} />
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.25' : ''}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="min-[850px]:hidden bg-white border-t border-black/10 px-5 pt-4 pb-6 space-y-4 shadow-2xl overflow-hidden text-[#17211F]"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#17211F]/85 hover:text-[#17352F] py-2 border-b border-black/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowDownRight className="w-3.5 h-3.5 text-[#B86F55] -rotate-45" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://wa.me/919789066588"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/10 text-[#128C7E] font-medium text-xs flex items-center justify-center gap-2 border border-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp: +91 97890 66588</span>
              </a>

              <a
                href="tel:+919789066588"
                className="w-full py-2.5 px-4 rounded-xl bg-[#17352F]/5 text-[#17352F] font-medium text-xs flex items-center justify-center gap-2 border border-[#17352F]/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#B86F55]" />
                <span>Direct Hotline: +91 97890 66588</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
