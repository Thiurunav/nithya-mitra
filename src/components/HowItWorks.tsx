import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Circle, Send, Plus, Mic } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 lg:py-40 bg-[#F7F4ED] text-[#17211F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 sm:space-y-40 lg:space-y-48">
        
        {/* ========================================================================= */}
        {/* STORY 01: Nithya Mitra handles your paperwork & groundwork (Left text, Right canvas) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pr-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-4">
              Nithya Mitra does
              <span className="block italic text-[#17352F]">the groundwork</span>
            </h2>
            <p className="text-sm sm:text-base text-[#17211F]/70 font-light leading-relaxed">
              Handling clinic appointments, doctor notes, prescription delivery, and bank formalities smoothly, without delay.
            </p>
          </motion.div>

          {/* Right Canvas Column with Floating Task Progress Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[680px] aspect-[16/10] sm:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(23,53,47,0.12)] border border-[#17352F]/10 flex items-center justify-center p-4 sm:p-8">
              
              {/* Soft Impressionist Ambient Motion-Blurred Background */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[1px] saturate-[1.1] scale-105"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 30% 20%, #E8D399 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #9FB2A8 0%, transparent 60%), linear-gradient(135deg, #DFCEBA 0%, #C9BAA3 50%, #B2A28D 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/5 backdrop-blur-[0.5px]" />

              {/* Center Floating White Status Card (Inspired by Lassie Screenshot 1) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-black/5"
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-black/5">
                  <div className="w-5 h-5 rounded-full bg-[#17352F] flex items-center justify-center text-[10px] text-[#F7F4ED] font-serif font-bold">
                    NM
                  </div>
                  <span className="text-xs font-semibold text-[#17211F] tracking-wide">
                    Nithya Mitra coordinator active...
                  </span>
                </div>

                {/* Task List */}
                <div className="space-y-2.5 text-xs">
                  {/* Task 1: Completed */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F4ED]/80 border border-black/5">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-[#17211F]">
                        Accompanied eye clinic visit
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-700 font-medium">
                      Completed
                    </span>
                  </div>

                  {/* Task 2: In progress */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/8 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Loader2 className="w-4 h-4 text-[#B86F55] animate-spin shrink-0" />
                      <span className="font-medium text-[#17211F]">
                        Collecting prescription & doctor notes
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#B86F55] font-medium">
                      In progress...
                    </span>
                  </div>

                  {/* Task 3: Up next */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-black/5">
                    <div className="flex items-center gap-2.5">
                      <Circle className="w-4 h-4 text-black/30 shrink-0" />
                      <span className="text-black/60">
                        Evening welfare & tea check-in
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-black/40">
                      Up next
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* STORY 02: Keeps you in the loop (Right text, Left canvas) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Canvas Column with Live Verification Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 order-2 lg:order-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[680px] aspect-[16/10] sm:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(23,53,47,0.12)] border border-[#17352F]/10 flex items-center justify-center p-4 sm:p-8">
              
              {/* Soft Green Impressionist Blurred Background */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[1px] saturate-[1.1] scale-105"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 70% 30%, #A8C4A0 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #7E9C7E 0%, transparent 60%), linear-gradient(135deg, #99B299 0%, #6E886E 50%, #4B634B 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />

              {/* Center Floating Notification Card (Inspired by Lassie Screenshot 2) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-black/5"
              >
                {/* Header */}
                <div className="flex items-start gap-2.5 mb-4 pb-3 border-b border-black/5">
                  <div className="w-5 h-5 rounded-full bg-[#17352F] flex items-center justify-center text-[10px] text-[#F7F4ED] font-serif font-bold shrink-0 mt-0.5">
                    NM
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#17211F] block leading-tight">
                      Apollo Hospitals consultation completed
                    </span>
                    <span className="text-[11px] text-black/50 font-mono">
                      Cardiology checkup & 30-day medicine refill
                    </span>
                  </div>
                </div>

                {/* Verified Steps */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-[#17211F]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Vitals & ECG readings recorded (124/82 mmHg)</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F7F4ED]/90 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#B86F55]">📥</span>
                      <span className="font-medium text-[#17211F]">Prescription verified & delivered to home</span>
                    </div>
                    <span className="text-[10px] font-mono text-black/40">30 doses</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#17211F]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Summary notes & voice check-in sent to WhatsApp</span>
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
            className="lg:col-span-4 order-1 lg:order-2 lg:pl-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-4">
              Keeps you
              <span className="block italic text-[#17352F]">in the loop</span>
            </h2>
            <p className="text-sm sm:text-base text-[#17211F]/70 font-light leading-relaxed">
              Watch your coordinator complete tasks on the ground in Chennai, sending you timestamped photos, doctor notes, and audio summaries.
            </p>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* STORY 03: And answers your questions (Left text, Right canvas) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pr-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-normal text-[#17211F] leading-[1.18] tracking-tight mb-4">
              And answers
              <span className="block italic text-[#17352F]">your questions</span>
            </h2>
            <p className="text-sm sm:text-base text-[#17211F]/70 font-light leading-relaxed">
              Need an update about your parents? Want to schedule an urgent clinic visit? Your dedicated coordinator in Chennai is always ready to help.
            </p>
          </motion.div>

          {/* Right Canvas Column with Floating Search/Message Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[680px] aspect-[16/10] sm:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(23,53,47,0.12)] border border-[#17352F]/10 flex items-center justify-center p-4 sm:p-8">
              
              {/* Soft Floral / Rose Ambient Motion-Blurred Background */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[1px] saturate-[1.1] scale-105"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 40% 40%, #E6C2BF 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, #B8C7B4 0%, transparent 60%), linear-gradient(135deg, #D4B2AC 0%, #B0A09B 50%, #8E7F7A 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/5 backdrop-blur-[0.5px]" />

              {/* Center Floating Interactive Input Pill (Inspired by Lassie Screenshot 3) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[460px] sm:max-w-[500px] bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-3.5 sm:py-4 shadow-2xl border border-black/5 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-6 h-6 rounded-full border border-black/15 flex items-center justify-center text-black/50 shrink-0">
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#17211F] font-normal truncate">
                    Can we arrange a home visit for Appa tomorrow at 10 AM?
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-black/5 flex items-center justify-center text-black/60">
                    <Mic className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#17352F] flex items-center justify-center text-white">
                    <Send className="w-3 h-3 ml-0.5" />
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
