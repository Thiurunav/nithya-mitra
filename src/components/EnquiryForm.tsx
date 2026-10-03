import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnquiryFormProps {
  initialPlan?: string;
  initialService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialPlan }) => {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [cityInIndia, setCityInIndia] = useState('');
  const [interest, setInterest] = useState('Parent Wellbeing & Visits');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Parent Wellbeing & Visits',
    'Healthcare Accompaniment',
    'Home & Property Upkeep',
    'Emergency Coordination',
    'Comprehensive Family Support'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp || !email || !cityInIndia) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#17352F', '#B86F55', '#D8C8B3']
      });
    }, 900);
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Reassuring Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                DIRECT CONSULTATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#17352F] leading-tight mb-4">
              Tell us about your family in India.
            </h2>

            <p className="text-sm sm:text-base text-[#68716D] font-light leading-relaxed mb-6">
              A 20-minute discussion over WhatsApp or Zoom. Zero obligation, zero sales pressure — just honest local guidance.
            </p>

            <div className="space-y-3 mb-8 text-xs text-[#17211F]/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B86F55]" />
                <span>20 minutes · Scheduled for your timezone</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#17352F]" />
                <span>Confidential · No credit card required</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 bg-[#F7F4ED] border border-[#17352F]/10 rounded-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#68716D] block mb-1">
                Prefer to chat right now?
              </span>
              <a
                href="https://wa.me/919789066588?text=Hi%20Nithya Mitra%2C%20I%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20parents%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#17352F] hover:text-[#B86F55] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Message on WhatsApp: +91 97890 66588</span>
              </a>
            </div>
          </div>

          {/* Right: Low-Friction Form */}
          <div className="lg:col-span-7 bg-[#F7F4ED] border border-[#17352F]/15 rounded-sm p-7 sm:p-9 shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#D8C8B3]" />
                </div>
                <h3 className="text-2xl font-serif text-[#17352F]">
                  Consultation requested.
                </h3>
                <p className="text-xs sm:text-sm text-[#17211F]/80 max-w-sm mx-auto leading-relaxed font-light">
                  Thank you, {fullName}. Our care lead in Chennai will review your family’s location in {cityInIndia} and message you on WhatsApp within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#B86F55] underline hover:text-[#17352F] cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                
                {initialPlan && (
                  <div className="text-xs text-[#17352F] bg-[#FBFAF6] p-2.5 rounded-sm border border-[#17352F]/10 flex items-center justify-between">
                    <span>Interested in plan: <strong>Nithya Mitra {initialPlan}</strong></span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#17352F] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Natarajan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FBFAF6] border border-[#17352F]/20 text-xs text-[#17211F] rounded-sm focus:outline-none focus:border-[#17352F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#17352F] uppercase tracking-wider mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (415) ... or +44 ..."
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FBFAF6] border border-[#17352F]/20 text-xs text-[#17211F] rounded-sm focus:outline-none focus:border-[#17352F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#17352F] uppercase tracking-wider mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FBFAF6] border border-[#17352F]/20 text-xs text-[#17211F] rounded-sm focus:outline-none focus:border-[#17352F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#17352F] uppercase tracking-wider mb-1">
                      Parents' City in India *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mylapore, Chennai"
                      value={cityInIndia}
                      onChange={(e) => setCityInIndia(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FBFAF6] border border-[#17352F]/20 text-xs text-[#17211F] rounded-sm focus:outline-none focus:border-[#17352F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#17352F] uppercase tracking-wider mb-2">
                    Primary Area of Assistance
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setInterest(opt)}
                        className={`px-3 py-1.5 rounded-sm text-xs transition-colors cursor-pointer ${
                          interest === opt
                            ? 'bg-[#17352F] text-[#F7F4ED] font-medium'
                            : 'bg-[#FBFAF6] text-[#17211F] border border-[#17352F]/15 hover:border-[#17352F]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Book Free Consultation'}</span>
                    <Send className="w-3.5 h-3.5 text-[#D8C8B3]" />
                  </motion.button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
