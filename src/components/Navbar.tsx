import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onOpenEnquiry?: (plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Plans', href: '#plans' },
    { label: 'About Nithya Mitra', href: '#about' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4ED]/95 backdrop-blur-md py-3.5 border-b border-[#17352F]/10 shadow-[0_4px_24px_rgba(23,53,47,0.06)]'
          : 'bg-[#F7F4ED]/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brandmark with Micro-hover */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Nithya Mitra Home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-sm bg-[#17352F] flex items-center justify-center text-[#F7F4ED] font-serif font-bold text-sm tracking-widest shadow-sm transition-colors duration-200 group-hover:bg-[#21463F]"
            >
              NM
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.18em] text-lg sm:text-xl font-semibold text-[#17352F] uppercase transition-colors group-hover:text-[#21463F]">
                NITHYA MITRA
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#68716D] font-medium -mt-0.5">
                Family Coordination · India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with animated line indicator */}
          <nav
            className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide font-medium text-[#17211F]/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="transition-colors duration-200 hover:text-[#17352F] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B86F55] hover:after:w-full after:transition-all after:duration-250 ease-out"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919789066588?text=Hi%20Nithya%20Mitra%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#17352F] hover:text-[#B86F55] font-medium tracking-wide transition-colors py-2 px-2.5 rounded-sm"
              aria-label="Direct WhatsApp line with Nithya Mitra"
            >
              <Phone className="w-3.5 h-3.5 text-[#B86F55] transition-transform duration-200 group-hover:scale-110" />
              <span>+91 97890 66588</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEnquiryClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm hover:shadow group cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C8B3] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={handleEnquiryClick}
              className="px-3 py-1.5 rounded-sm bg-[#17352F] text-[#F7F4ED] text-[11px] uppercase tracking-wider font-semibold"
            >
              Talk to Us
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#17352F] focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Smooth AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#F7F4ED] border-b border-[#17352F]/15 px-6 pt-4 pb-8 space-y-4 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-serif text-[#17211F] hover:text-[#17352F] py-1 border-b border-[#17352F]/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 space-y-3">
              <a
                href="https://wa.me/919789066588?text=Hi%20Nithya Mitra%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-sm border border-[#17352F]/20 text-[#17352F] text-xs uppercase tracking-wider font-semibold active:bg-[#17352F]/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B86F55]" />
                <span>WhatsApp: +91 97890 66588</span>
              </a>
              <button
                onClick={handleEnquiryClick}
                className="w-full py-3 rounded-sm bg-[#17352F] text-[#F7F4ED] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
              >
                <span>Tell Us About Your Family</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8C8B3]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
