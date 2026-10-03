import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, PhoneCall, ShieldCheck, MapPin, MessageSquare, HeartHandshake } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 lg:py-40 bg-[#F7F4ED] text-[#17211F] overflow-hidden border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36 lg:space-y-44">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#17352F]/15 bg-white/80 backdrop-blur-md text-[#17352F] text-xs font-medium mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span>How Nithya Mitra Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#17211F] leading-tight mb-4">
            Three simple steps to <span className="italic text-[#B86F55]">peace of mind</span>
          </h2>
          <p className="text-sm sm:text-base text-[#17211F]/70 font-light leading-relaxed max-w-2xl mx-auto">
            A seamless, transparent bridge between your life abroad and your parents' daily care in India.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* STEP 01: Initial Consultation & Needs Assessment */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pr-4"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#B86F55] tracking-widest uppercase bg-[#B86F55]/10 px-2.5 py-0.5 rounded-full border border-[#B86F55]/20">
                Step 01
              </span>
              <span className="text-xs font-medium text-[#17352F]/60 uppercase tracking-wider">
                Discovery & Assessment
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-4">
              Share your family's
              <span className="block italic text-[#B86F55]">specific care needs</span>
            </h3>

            <p className="text-sm sm:text-base text-[#17211F]/75 font-light leading-relaxed mb-6">
              Book a 15-minute consultation via WhatsApp or phone. Tell us about your parents’ routines, medical history, location in Chennai, and where they need the most support.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#17211F]/85 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>Zero obligation, personalized care roadmap</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>Timezone-friendly scheduling (US, UK, Gulf, APAC)</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Canvas Column with Step 01 Intake Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[620px] aspect-[16/11] sm:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(23,53,47,0.08)] border border-[#17352F]/10 flex items-center justify-center p-4 sm:p-8 bg-[#EAE5DB]/60">
              
              {/* Soft Ambient Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[2px] saturate-[1.1] scale-105 opacity-60"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 30% 20%, #E8D399 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #9FB2A8 0%, transparent 60%), linear-gradient(135deg, #DFCEBA 0%, #C9BAA3 50%, #B2A28D 100%)',
                }}
              />

              {/* Center Floating Consultation Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#17352F]/10"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#17352F]/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#17352F] flex items-center justify-center text-xs text-[#F7F4ED] font-serif font-bold">
                      NM
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#17211F] block">
                        Care Discovery Consultation
                      </span>
                      <span className="text-[10px] text-[#17211F]/50 font-mono">
                        Session Scheduled · 15 Mins
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                    Confirmed
                  </span>
                </div>

                {/* Consultation Details */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#F7F4ED] border border-[#17352F]/8 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#B86F55]" />
                      <span className="font-medium text-[#17211F]">Parent Residence: Adyar, Chennai</span>
                    </div>
                    <span className="text-[10px] text-black/40 font-mono">IST</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#17352F]/8 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <PhoneCall className="w-4 h-4 text-emerald-600" />
                      <span className="font-medium text-[#17211F]">WhatsApp Video Call with Lead Coordinator</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B86F55] font-semibold">Today</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#17211F]/70 px-1 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Confidential health details protected under strict privacy policy</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* STEP 02: Dedicated Coordinator Matching & Intro Visit */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Canvas Column with Step 02 Profile & Intro Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[620px] aspect-[16/11] sm:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(23,53,47,0.08)] border border-[#17352F]/10 flex items-center justify-center p-4 sm:p-8 bg-[#EAE5DB]/60">
              
              {/* Soft Ambient Greenish Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[2px] saturate-[1.1] scale-105 opacity-60"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 70% 30%, #A8C4A0 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #7E9C7E 0%, transparent 60%), linear-gradient(135deg, #99B299 0%, #6E886E 50%, #4B634B 100%)',
                }}
              />

              {/* Center Floating Coordinator Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#17352F]/10"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#17352F]/10">
                  <div className="w-10 h-10 rounded-full bg-[#17352F] text-white flex items-center justify-center font-serif font-medium text-sm shrink-0">
                    KR
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-[#17211F]">Karthik R.</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#17352F]/10 text-[10px] font-mono font-medium text-[#17352F]">Lead Coordinator</span>
                    </div>
                    <span className="text-[11px] text-[#17211F]/60">Assigned Care Lead · Chennai South Hub</span>
                  </div>
                </div>

                {/* Milestone Checklist */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-[#17211F]">Care lead verified & background checked</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">100% Verified</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F4ED] border border-[#17352F]/10">
                    <div className="flex items-center gap-2.5">
                      <HeartHandshake className="w-4 h-4 text-[#B86F55] shrink-0" />
                      <span className="font-medium text-[#17211F]">Introductory tea & home review completed</span>
                    </div>
                    <span className="text-[10px] font-mono text-black/50">Done</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#17352F]/8 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-[#17352F] shrink-0" />
                      <span className="font-medium text-[#17211F]">Monthly care calendar activated</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B86F55] font-semibold">Active</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 lg:pl-4"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#B86F55] tracking-widest uppercase bg-[#B86F55]/10 px-2.5 py-0.5 rounded-full border border-[#B86F55]/20">
                Step 02
              </span>
              <span className="text-xs font-medium text-[#17352F]/60 uppercase tracking-wider">
                Matching & Onboarding
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-4">
              Dedicated coordinator
              <span className="block italic text-[#B86F55]">assigned to your parents</span>
            </h3>

            <p className="text-sm sm:text-base text-[#17211F]/75 font-light leading-relaxed mb-6">
              We match your parents with a dedicated on-ground care manager in Chennai who conducts an unhurried, warm introductory home visit to build trust and understand their household rhythm.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#17211F]/85 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>One single point of contact for your entire family</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>Respectful, language-matched local coordinators in Chennai</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* STEP 03: Seamless Care Delivery & Live WhatsApp Updates */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pr-4"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#B86F55] tracking-widest uppercase bg-[#B86F55]/10 px-2.5 py-0.5 rounded-full border border-[#B86F55]/20">
                Step 03
              </span>
              <span className="text-xs font-medium text-[#17352F]/60 uppercase tracking-wider">
                Continuous Support
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-4">
              Real-time updates &
              <span className="block italic text-[#B86F55]">unconditional peace of mind</span>
            </h3>

            <p className="text-sm sm:text-base text-[#17211F]/75 font-light leading-relaxed mb-6">
              From accompanied doctor visits and prescription delivery to companionship and home repairs — every single task is documented with timestamped photos, bills, and voice summaries sent straight to your WhatsApp.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#17211F]/85 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>Timestamped photos & doctor notes on WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86F55] shrink-0" />
                <span>24/7 on-ground emergency response in Chennai</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Canvas Column with Step 03 Real-Time Report Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[620px] aspect-[16/11] sm:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(23,53,47,0.08)] border border-[#17352F]/10 flex items-center justify-center p-4 sm:p-8 bg-[#EAE5DB]/60">
              
              {/* Soft Ambient Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[2px] saturate-[1.1] scale-105 opacity-60"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 40% 40%, #E6C2BF 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, #B8C7B4 0%, transparent 60%), linear-gradient(135deg, #D4B2AC 0%, #B0A09B 50%, #8E7F7A 100%)',
                }}
              />

              {/* Center Floating WhatsApp Verification Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#17352F]/10"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#17352F]/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#17211F] block">
                        WhatsApp Care Update
                      </span>
                      <span className="text-[10px] text-black/50 font-mono">
                        Sent to Family Group · 2 Mins Ago
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Live
                  </span>
                </div>

                {/* Report Rows */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#F7F4ED] border border-[#17352F]/8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#17211F]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Apollo Cardiology review attended with Amma</span>
                    </div>
                    <span className="text-[10px] font-mono text-black/40">10:45 AM</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-[#17352F]/8 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2 text-[#17211F]">
                      <span className="text-[#B86F55]">💊</span>
                      <span>30-Day medicine refill delivered to home</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 font-medium">Verified</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F7F4ED] border border-[#17352F]/8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#17211F]">
                      <span className="text-[#17352F]">📸</span>
                      <span>5 Photos & doctor prescription note attached</span>
                    </div>
                    <span className="text-[10px] font-mono text-black/40">Delivered</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

