import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Clock, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnquiryFormProps {
  initialPlan?: string;
  initialService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialPlan }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [residence, setResidence] = useState('');
  const [familyLocation, setFamilyLocation] = useState('');
  const [whoToSupport, setWhoToSupport] = useState('');
  const [selectedSupports, setSelectedSupports] = useState<string[]>([]);
  const [moreDetails, setMoreDetails] = useState('');
  const [contactPreference, setContactPreference] = useState('WhatsApp');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportOptions = [
    'Regular parent wellbeing visits',
    'Healthcare / hospital coordination',
    'Emergency support',
    'Home / property assistance',
    'Errands & appointments',
    'Documents / local assistance',
    'Courier / parcel support',
    'Something else'
  ];

  const toggleSupport = (option: string) => {
    setSelectedSupports((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp || !email || !residence || !familyLocation || !whoToSupport) return;

    setIsSubmitting(true);

    const payload = {
      name,
      whatsapp,
      email,
      residence,
      familyLocation,
      whoToSupport,
      selectedSupports,
      moreDetails,
      contactPreference,
      plan: initialPlan ? "Vayosh " + initialPlan : ""
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#17352F', '#B86F55', '#D8C8B3']
      });
    }, 1000);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.warn('Background email dispatch notice:', err);
    });
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10">
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-20 items-start">
          
          {/* Left: Reassuring Context */}
          <div className="lg:col-span-5 sticky top-28">
            <span className="text-[11px] 2xl:text-xs font-mono font-semibold uppercase tracking-widest text-[#B86F55] block mb-3">
              LET'S TALK
            </span>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-serif text-[#17352F] leading-tight mb-4">
              Tell Us About Your Family
            </h2>
            <p className="text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed mb-6">
              Every family is different. Tell us what your family needs — from practical help to wellbeing and companionship — and we'll understand how Vayosh can support you in India.
            </p>

            <div className="space-y-4 mb-8 pt-4 border-t border-[#17352F]/10">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#17211F]/85 font-light">
                <Clock className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>20 minutes · Confidential consultation</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#17211F]/85 font-light">
                <ShieldCheck className="w-4 h-4 text-[#17352F] shrink-0" />
                <span>No obligation · Discuss your situation first</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#17211F]/85 font-light">
                <Heart className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>A family supported. A worry lifted.</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-[#17352F] text-[#F7F4ED] shadow-sm">
              <p className="text-xs text-[#D8C8B3] uppercase tracking-wider font-mono mb-2">
                Need an immediate conversation?
              </p>
              <p className="text-xs text-[#F7F4ED]/80 mb-4">
                Chat directly with our team right away on WhatsApp:
              </p>
              <a
                href="https://wa.me/919789066588?text=Hi%20Thiru%2C%20I%20found%20Vayosh%20online%20and%20would%20like%20to%20understand%20how%20you%20can%20support%20my%20family%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right: The Complete Client Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#17352F]/12 shadow-sm">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#17352F] mb-2">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#17211F]/75 max-w-md mx-auto mb-6 leading-relaxed font-light">
                  Thank you, {name}. Our team will review your family's requirements and reach out via {contactPreference} shortly.
                </p>
                <p className="text-xs font-serif italic text-[#B86F55]">
                  A family supported. A worry lifted.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* 1. Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Sundaram"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all"
                  />
                </div>

                {/* 2 & 3. WhatsApp and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anand@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 4 & 5. Where you live & where family is */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                      Where do you currently live? *
                    </label>
                    <select
                      required
                      value={residence}
                      onChange={(e) => setResidence(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="UK">UK</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                      Where are your parents/family located? *
                    </label>
                    <input
                      type="text"
                      required
                      value={familyLocation}
                      onChange={(e) => setFamilyLocation(e.target.value)}
                      placeholder="e.g. Chennai, Tamil Nadu"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 6. Who would you like Vayosh to support? */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                    Who would you like Vayosh to support? *
                  </label>
                  <select
                    required
                    value={whoToSupport}
                    onChange={(e) => setWhoToSupport(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="Parents">Parents</option>
                    <option value="One parent">One parent</option>
                    <option value="Parents + other family members">Parents + other family members</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* 7. What kind of support are you looking for? (Checkboxes) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-2">
                    What kind of support are you looking for?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {supportOptions.map((opt) => {
                      const isChecked = selectedSupports.includes(opt);
                      return (
                        <label
                          key={opt}
                          onClick={() => toggleSupport(opt)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-all ${isChecked ? "bg-[#17352F]/10 border-[#17352F] text-[#17352F] font-medium" : "bg-[#F7F4ED]/50 border-[#17352F]/10 text-[#17211F]/80 hover:bg-[#F7F4ED]"}`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="rounded text-[#17352F] focus:ring-0 cursor-pointer"
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 8. Tell us a little more */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                    Tell us a little more
                  </label>
                  <textarea
                    rows={3}
                    value={moreDetails}
                    onChange={(e) => setMoreDetails(e.target.value)}
                    placeholder="Share any specific health routines, upcoming travel, or errands you need help coordinating..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F4ED]/60 border border-[#17352F]/15 text-sm text-[#17211F] focus:outline-none focus:border-[#17352F] focus:bg-white transition-all"
                  />
                </div>

                {/* 9. Contact Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#17211F] mb-1.5">
                    How would you prefer us to contact you?
                  </label>
                  <div className="flex flex-wrap gap-4 text-xs text-[#17211F]">
                    {['WhatsApp', 'Phone call', 'Email'].map((method) => (
                      <label key={method} className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactPreference"
                          value={method}
                          checked={contactPreference === method}
                          onChange={(e) => setContactPreference(e.target.value)}
                          className="text-[#17352F] focus:ring-0 cursor-pointer"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#17352F] hover:bg-[#21463F] text-[#F7F4ED] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send My Enquiry →'}</span>
                    <Send className="w-3.5 h-3.5 text-[#D8C8B3]" />
                  </button>
                </div>

                {/* Privacy note */}
                <p className="text-[11px] text-[#68716D] text-center leading-normal pt-2 font-light">
                  Your information is used only to understand your requirements and contact you regarding Vayosh services.
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
