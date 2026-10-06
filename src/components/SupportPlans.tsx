import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface SupportPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const SupportPlans: React.FC<SupportPlansProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: "advanced",
      badge: "ESSENTIAL SUPPORT",
      name: "Nithya Mitra Advanced",
      forWhom: "For independent parents who mainly need regular wellbeing checks, local coordination and a reliable point of contact.",
      highlights: [
        "Scheduled wellbeing check-ins",
        "Parent visits and basic home check-ins",
        "Emergency coordination",
        "Doctor / hospital appointment coordination",
        "Access to healthcare and physiotherapy partners",
        "Help with local errands and essential tasks",
        "Regular updates to the NRI family"
      ],
      cta: "Enquire About Advanced",
      isPopular: false
    },
    {
      id: "premium",
      badge: "ENHANCED SUPPORT",
      tag: "MOST POPULAR",
      name: "Nithya Mitra Premium",
      forWhom: "For parents who need more frequent coordination, proactive healthcare support and hands-on assistance.",
      highlights: [
        "Everything in Advanced",
        "More frequent wellbeing check-ins",
        "Priority healthcare coordination",
        "Doctor teleconsultation coordination",
        "Diagnostics and lab-test coordination",
        "Hospitalisation support and family coordination",
        "Digital health-record coordination",
        "Home safety and fall-risk checks",
        "Access to verified carers / attendants through partners",
        "Visit support for appointments and essential errands"
      ],
      cta: "Enquire About Premium",
      isPopular: true
    },
    {
      id: "elite",
      badge: "HIGH-TOUCH SUPPORT",
      name: "Nithya Mitra Elite",
      forWhom: "For families managing complex health, mobility or day-to-day support needs from abroad.",
      highlights: [
        "Everything in Premium",
        "High-frequency wellbeing coordination",
        "Priority emergency coordination",
        "Ongoing doctor and specialist coordination",
        "Physiotherapy, nursing and homecare partner coordination",
        "Regular home visits / companion check-ins",
        "Hospital and discharge coordination",
        "Medication and appointment coordination",
        "Family updates and escalation support",
        "Customised support for complex family needs"
      ],
      cta: "Enquire About Elite",
      isPopular: false
    }
  ];

  return (
    <section id="plans" className="py-20 md:py-28 bg-[#F7F4ED] border-b border-[#17352F]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55] font-sans">
              FLEXIBLE FAMILY SUPPORT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight font-normal"
          >
            Choose the support level that fits your family.
          </motion.h2>
        </div>

        {/* 3 Inspiration-Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                
                
                className={`hover:-translate-y-2 rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                  isPopular
                    ? "bg-gradient-to-br from-[#17352F] via-[#21463F] to-[#0E2420] text-[#F7F4ED] shadow-2xl lg:-translate-y-4 border border-white/20 z-10"
                    : "bg-[#FBFAF6] text-[#17211F] border border-[#17352F]/15 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Subtle Structural Grid Texture for the popular card */}
                {isPopular && (
                  <div
                    className="absolute inset-0 opacity-[0.09] pointer-events-none"
                    style={{
                      backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
                      backgroundSize: "36px 36px"
                    }}
                  />
                )}

                {/* Ambient Shiny Light Glow (Top-Right Aura) */}
                {isPopular && (
                  <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#2D6054]/60 blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-130" />
                )}

                {/* Popular Shiny Badge & Sparkle */}
                {isPopular && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
                    <div className="bg-white/12 backdrop-blur-md text-[#D8C8B3] border border-white/25 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-sans shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D8C8B3] animate-pulse" />
                      <span>{plan.tag}</span>
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Category Tag */}
                  <span
                    className={`text-[11px] font-sans font-bold uppercase tracking-widest block mb-2 ${
                      isPopular ? "text-[#D8C8B3]" : "text-[#B86F55]"
                    }`}
                  >
                    {plan.badge}
                  </span>

                  {/* Plan Name */}
                  <h3
                    className={`text-3xl sm:text-4xl font-serif font-normal mb-3 ${
                      isPopular ? "text-[#FBFAF6]" : "text-[#17352F]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* For Whom Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 pb-6 border-b font-sans ${
                      isPopular
                        ? "text-[#F7F4ED]/80 border-white/15"
                        : "text-[#68716D] border-[#17352F]/10"
                    }`}
                  >
                    {plan.forWhom}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {plan.highlights.map((item, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? "bg-white/20 text-[#F7F4ED] border border-white/20 shadow-xs"
                              : "bg-[#17352F]/10 text-[#17352F]"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span
                          className={`leading-relaxed font-sans ${
                            isPopular ? "text-[#F7F4ED]/90" : "text-[#17211F]/85"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2 relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-4 rounded-full text-xs uppercase tracking-widest font-bold text-center block cursor-pointer transition-all duration-200 font-sans shadow-sm ${
                      isPopular
                        ? "bg-[#FBFAF6] hover:bg-white text-[#17352F] shadow-xl hover:shadow-2xl"
                        : "bg-[#EDE8DE] hover:bg-[#17352F] hover:text-[#F7F4ED] text-[#17352F]"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
