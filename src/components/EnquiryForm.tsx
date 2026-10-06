import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ShieldCheck, HeartHandshake, MessageCircle, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

interface EnquiryFormProps {
  initialService?: string;
  initialPlan?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialService, initialPlan }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [residence, setResidence] = useState("");
  const [familyLocation, setFamilyLocation] = useState("");
  const [whoToSupport, setWhoToSupport] = useState("");
  const [selectedSupports, setSelectedSupports] = useState<string[]>(
    initialService ? [initialService] : []
  );
  const [moreDetails, setMoreDetails] = useState(
    initialPlan ? "Interested in " + initialPlan + " plan consultation." : ""
  );
  const [contactPreference, setContactPreference] = useState("WhatsApp");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportOptions = [
    "Regular parent wellbeing visits",
    "Healthcare / hospital coordination",
    "Emergency support link",
    "Home & property upkeep",
    "Errands & appointment escort",
    "Documents & local assistance",
    "Courier & parcel support",
    "Something else",
  ];

  const toggleSupport = (option: string) => {
    setSelectedSupports((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !familyLocation) return;

    setIsSubmitting(true);

    const payload = {
      fullName: name,
      whatsapp: phone,
      email: email,
      residence: residence || "Not specified",
      cityInIndia: familyLocation,
      whoToSupport: whoToSupport || "Parents",
      interest: selectedSupports.length > 0 ? selectedSupports.join(", ") : "Family Care Support",
      notes: moreDetails,
      contactPreference: contactPreference,
    };

    // Asynchronously dispatch to SMTP backend without blocking the UI
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.warn("Background email dispatch notice:", err);
    });

    // Fast, responsive 1-second transition to success screen with synchronized confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#17352F", "#B86F55", "#D8C8B3", "#265349"],
        });
      } catch (err) {
        console.warn("Confetti notice:", err);
      }
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setResidence("");
    setFamilyLocation("");
    setWhoToSupport("");
    setSelectedSupports([]);
    setMoreDetails("");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#F7F4ED] select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-widest text-[#B86F55] block mb-2.5">
            LET&apos;S TALK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#17211F] tracking-tight leading-[1.18]">
            Tell Us About Your Family
          </h2>
          <p className="text-sm sm:text-base text-[#68716D] font-light leading-relaxed mt-3">
            Tell us what your family needs — from home coordination to healthcare and companionship.
          </p>
        </div>

        {/* Compact Balanced Green Container */}
        <div className="bg-[#17352F] text-[#F7F4ED] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xl border border-[#21463F] relative overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#265349]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
            
            {/* Left Column: Visual Card with Reassurance */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] lg:h-full border border-white/15 shadow-inner flex flex-col justify-between p-5 group">
                <img
                  src="/vayosh-hero-story.jpg"
                  alt="NRI family connected with parents and on-ground team"
                  className="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2420]/90 via-[#17352F]/30 to-[#0E2420]/50 pointer-events-none" />

                {/* Top Brand Tag */}
                <div className="relative z-10 flex items-center gap-1.5 bg-[#0E2420]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 w-fit">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#B86F55]" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F7F4ED]">
                    Nithya Mitra Care
                  </span>
                </div>

                {/* Bottom Reassurance Card */}
                <div className="relative z-10 bg-[#FBFAF6]/95 text-[#17211F] backdrop-blur-md rounded-xl p-4 border border-white/80 shadow-lg">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#B86F55] block mb-0.5 font-sans">
                    CONFIDENTIAL & COMPASSIONATE
                  </span>
                  <h4 className="text-sm font-serif font-bold text-[#17352F] leading-snug">
                    Free Family Consultation
                  </h4>
                  <p className="text-[11px] text-[#68716D] font-sans mt-0.5 leading-relaxed">
                    20 mins · Discuss your family&apos;s situation first without any obligation.
                  </p>
                  <div className="mt-2 pt-2 border-t border-[#17352F]/10 flex items-center gap-1.5 text-[10px] text-[#17352F] font-medium font-sans">
                    <ShieldCheck className="w-3 h-3 text-[#B86F55]" />
                    <span>Your Family in India. Our Responsibility.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Compact Form OR Structured Success State */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-between h-full"
                  >
                    {/* Inner Form Header */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-serif text-[#FBFAF6] font-normal leading-snug">
                        Schedule Free Family Consultation
                      </h3>
                      <p className="mt-0.5 text-xs text-[#F7F4ED]/75 font-sans leading-relaxed">
                        Fill out the form below. We&apos;ll connect on WhatsApp or Zoom to discuss your family&apos;s needs.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      
                      {/* Row 1: Name + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Karthik Venkat"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.09] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] placeholder:text-white/40 focus:outline-none focus:border-[#D8C8B3] focus:bg-white/[0.14] transition-all font-sans"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                            WhatsApp / Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+44 / +1 / +91 ..."
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.09] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] placeholder:text-white/40 focus:outline-none focus:border-[#D8C8B3] focus:bg-white/[0.14] transition-all font-sans"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email + Country of Residence */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@domain.com"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.09] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] placeholder:text-white/40 focus:outline-none focus:border-[#D8C8B3] focus:bg-white/[0.14] transition-all font-sans"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                            Where do you live? *
                          </label>
                          <select
                            required
                            value={residence}
                            onChange={(e) => setResidence(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-[#0E2420] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] focus:outline-none focus:border-[#D8C8B3] transition-all cursor-pointer font-sans"
                          >
                            <option value="">Select country</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="UAE / Middle East">UAE / Middle East</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Parents location + Who to support */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                            Parents&apos; Location in India *
                          </label>
                          <input
                            type="text"
                            required
                            value={familyLocation}
                            onChange={(e) => setFamilyLocation(e.target.value)}
                            placeholder="e.g. Chennai, Tamil Nadu"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.09] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] placeholder:text-white/40 focus:outline-none focus:border-[#D8C8B3] focus:bg-white/[0.14] transition-all font-sans"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                            Who to Support? *
                          </label>
                          <select
                            required
                            value={whoToSupport}
                            onChange={(e) => setWhoToSupport(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-[#0E2420] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] focus:outline-none focus:border-[#D8C8B3] transition-all cursor-pointer font-sans"
                          >
                            <option value="">Select</option>
                            <option value="Parents">Both Parents</option>
                            <option value="Single Mother">Single Mother</option>
                            <option value="Single Father">Single Father</option>
                            <option value="In-Laws">In-Laws</option>
                            <option value="Ancestral Property / Other">Ancestral Property / Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Support Options (Compact Grid Pills) */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1.5 font-sans">
                          Support Areas Needed
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {supportOptions.map((opt) => {
                            const isChecked = selectedSupports.includes(opt);
                            return (
                              <div
                                key={opt}
                                onClick={() => toggleSupport(opt)}
                                className={
                                  "flex items-center gap-2 p-2 rounded-xl border text-[11px] cursor-pointer select-none transition-all font-sans " +
                                  (isChecked
                                    ? "bg-[#B86F55] border-[#B86F55] text-white font-medium shadow-xs"
                                    : "bg-white/[0.07] border-white/10 text-white/85 hover:bg-white/[0.12]")
                                }
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {}}
                                  className="rounded text-[#B86F55] focus:ring-0 cursor-pointer w-3.5 h-3.5"
                                />
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Row 5: Tell us more */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#D8C8B3] mb-1 font-sans">
                          Specific Notes (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={moreDetails}
                          onChange={(e) => setMoreDetails(e.target.value)}
                          placeholder="Share any specific routines, travel schedules, or urgent tasks..."
                          className="w-full px-3.5 py-2 rounded-xl bg-white/[0.09] border border-white/20 text-xs sm:text-sm text-[#F7F4ED] placeholder:text-white/40 focus:outline-none focus:border-[#D8C8B3] focus:bg-white/[0.14] transition-all font-sans"
                        />
                      </div>

                      {/* Row 6: Preferred Contact & Submit Button */}
                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-4 text-xs text-white/90 font-sans">
                          <span className="text-[10px] uppercase text-[#D8C8B3] font-bold">Contact via:</span>
                          {["WhatsApp", "Phone", "Email"].map((method) => (
                            <label key={method} className="inline-flex items-center gap-1.5 cursor-pointer text-xs">
                              <input
                                type="radio"
                                name="contactPreference"
                                value={method}
                                checked={contactPreference === method}
                                onChange={(e) => setContactPreference(e.target.value)}
                                className="text-[#B86F55] focus:ring-0 cursor-pointer"
                              />
                              <span>{method}</span>
                            </label>
                          ))}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 rounded-full bg-[#FBFAF6] hover:bg-white text-[#17352F] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50 font-sans shrink-0"
                        >
                          <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                          <Send className="w-3.5 h-3.5 text-[#B86F55]" />
                        </button>
                      </div>

                      {/* Reassurance */}
                      <p className="text-[10px] text-white/50 text-center pt-1 font-sans">
                        100% confidential · Used solely to understand your family support requirements.
                      </p>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[440px] border border-white/15 my-auto"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#B86F55]/20 border border-[#B86F55]/40 flex items-center justify-center mb-4 text-[#D8C8B3] shadow-inner">
                      <CheckCircle2 className="w-7 h-7 text-[#D8C8B3]" />
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8C8B3] block mb-1 font-sans">
                      CONSULTATION REQUEST RECEIVED
                    </span>

                    <h4 className="text-2xl sm:text-3xl font-serif text-[#FBFAF6] mb-2 font-normal">
                      Thank you, {name || "there"}!
                    </h4>

                    <p className="text-xs sm:text-sm text-white/85 font-sans max-w-md mx-auto leading-relaxed mb-6">
                      We have safely received your details for <strong>{familyLocation}</strong>. A senior Nithya Mitra care coordinator will connect with you via <strong>{contactPreference} ({phone})</strong> within 30 to 45 minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm">
                      <a
                        href={"https://wa.me/919789066588?text=" + encodeURIComponent("Hello Nithya Mitra, I just submitted a consultation request for " + name + " regarding parents in " + familyLocation + ".")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FBFAF6] hover:bg-white text-[#17352F] text-xs uppercase tracking-wider font-bold font-sans flex items-center justify-center gap-2 shadow-lg transition-all"
                      >
                        <MessageCircle className="w-4 h-4 text-[#B86F55]" />
                        <span>Chat on WhatsApp</span>
                        <ArrowUpRight className="w-3 h-3 text-[#B86F55]" />
                      </a>

                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold font-sans transition-all cursor-pointer border border-white/15"
                      >
                        Submit Another
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};