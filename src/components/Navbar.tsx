import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Plans", href: "#plans" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquiryClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-[9990] top-0 min-[850px]:top-3.5 left-1/2 -translate-x-1/2 w-full min-[850px]:w-[92%] min-[850px]:max-w-5xl 2xl:max-w-6xl bg-white/95 backdrop-blur-md text-[#17211F] shadow-[0_6px_24px_rgba(0,0,0,0.06)] min-[850px]:rounded-full border-b min-[850px]:border border-black/[0.08] transition-all duration-300">
      <div className="h-14 sm:h-15 flex items-center justify-between px-5 sm:px-7">
        
        {/* Brandmark / Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          aria-label="Nithya Mitra Home"
        >
          <div className="w-7 h-7 rounded-full bg-[#17352F] flex items-center justify-center text-[#F7F4ED] font-serif font-bold text-[10px] tracking-wider shadow-xs transition-transform duration-200 group-hover:scale-105">NM</div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.16em] text-sm font-semibold text-[#17352F] uppercase leading-none">
              NITHYA MITRA
            </span>
            <span className="hidden sm:block text-[9px] font-sans text-[#68716D] tracking-wider uppercase mt-0.5 font-medium">
              NRI Family Support · India
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden min-[850px]:flex items-center gap-1 xl:gap-2 text-xs font-sans font-medium text-[#17211F]/80"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full hover:bg-[#17352F]/8 hover:text-[#17352F] transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Action */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleEnquiryClick}
            type="button"
            className="px-5 py-2 rounded-full bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs font-sans font-semibold tracking-wide flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <span>Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C8B3]" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[850px]:hidden flex items-center justify-center w-8 h-8 rounded-lg text-[#17211F] hover:bg-black/5 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? "rotate-45 translate-y-1.25" : ""}`} />
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-opacity duration-200 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-[#17211F] rounded-full transition-transform duration-200 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.25" : ""}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="min-[850px]:hidden bg-white border-t border-black/10 px-6 pt-4 pb-6 space-y-3 shadow-2xl overflow-hidden text-[#17211F] rounded-b-2xl"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium font-sans text-[#17211F]/85 hover:text-[#17352F] py-2.5 border-b border-black/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B86F55]" />
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={handleEnquiryClick}
                className="w-full py-3 rounded-full bg-[#17352F] text-xs uppercase tracking-wider font-bold text-[#F7F4ED] font-sans flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C8B3]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
