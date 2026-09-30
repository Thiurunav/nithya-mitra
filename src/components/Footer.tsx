import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const openLegal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy',
        text: 'Vayosh takes client and family confidentiality with the utmost seriousness. Any information collected during consultation or service execution — including parent health records, contact details, residence information, and family instructions — is strictly used for coordination purposes. We never sell, rent, or monetize personal information. Data transmission is encrypted and access is strictly restricted to designated family coordination leads.'
      });
    } else if (type === 'terms') {
      setModalContent({
        title: 'Terms of Service',
        text: 'Vayosh acts as a family-support coordination service. We supervise, coordinate, and remain accountable for agreed activities with vetted local partners. Service plans, reporting frequencies, and operational scopes are outlined in an individualized family service charter upon completion of initial onboarding. All billing is transparent with zero hidden commercial surcharges.'
      });
    } else {
      setModalContent({
        title: 'Service & Medical Disclaimer',
        text: 'Vayosh is a family-support coordination company. Vayosh is not a hospital, clinical medical provider, pharmacy, legal notary, or courier carrier itself. Where medical treatment, nursing, physiotherapy, or specialized licensed trades are required, Vayosh coordinates appropriate licensed and qualified third-party partners. Companionship and wellbeing check-ins are designed for social connection and domestic assistance, and do not constitute medical, psychiatric, or clinical counselling.'
      });
    }
  };

  const scrollTo = (id: string) => {
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
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#F7F4ED] flex items-center justify-center text-[#17352F] font-serif font-bold text-lg">
                V
              </div>
              <span className="font-serif tracking-[0.2em] text-xl font-semibold text-[#FBFAF6] uppercase">
                VAYOSH
              </span>
            </div>

            <p className="font-serif italic text-base text-[#D8C8B3] max-w-sm">
              "Your Family in India. Our Responsibility."
            </p>

            <p className="text-xs text-[#F7F4ED]/70 font-light leading-relaxed max-w-sm">
              Trusted on-ground family-support coordination for NRIs across the United States, UK, Canada, Australia and worldwide whose parents and loved ones live in India.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D8C8B3]">
              <Shield className="w-4 h-4 text-[#B86F55]" />
              <span>Ground Coordination Hub: Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8C8B3] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F4ED]/75">
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('plans')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Support Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('trust')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Why Vayosh
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('story')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Founder Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faqs')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('enquiry')} className="hover:text-[#FBFAF6] transition-colors cursor-pointer">
                  Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8C8B3] mb-4">
              Key Coordination
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F4ED]/75">
              <li>Parent & Family Support</li>
              <li>Healthcare Coordination</li>
              <li>Home & Property Upkeep</li>
              <li>Courier & Parcel Dispatch</li>
              <li>Documents & Local Errands</li>
              <li>Emergency Response Link</li>
              <li>Wellbeing & Companionship</li>
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
                href="https://wa.me/919789066588?text=Hi%20Vayosh%2C%20I%20found%20you%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: +91 97890 66588</span>
              </a>

              <a
                href="mailto:thirunav.natarajan@gmail.com"
                className="flex items-start gap-2 hover:text-[#D8C8B3] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#B86F55] shrink-0 mt-0.5" />
                <span>thirunav.natarajan@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-[#D8C8B3]">
                <MapPin className="w-3.5 h-3.5 text-[#B86F55] shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F4ED]/60 font-light">
          <div>
            © 2026 Vayosh. All rights reserved. Your Family in India. Our Responsibility.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button
              onClick={() => openLegal('privacy')}
              className="hover:text-[#FBFAF6] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => openLegal('terms')}
              className="hover:text-[#FBFAF6] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={() => openLegal('disclaimer')}
              className="hover:text-[#FBFAF6] transition-colors cursor-pointer text-[#B86F55]"
            >
              Service Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FBFAF6] text-[#17211F] max-w-lg w-full p-8 rounded-sm border border-[#17352F]/20 shadow-2xl">
            <h3 className="text-xl font-serif text-[#17352F] mb-4">
              {modalContent.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#17211F]/80 leading-relaxed font-light mb-6">
              {modalContent.text}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full py-3 bg-[#17352F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#21463F] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
