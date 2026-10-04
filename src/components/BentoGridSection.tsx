import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  MessageCircle,
  Activity,
  Heart,
  UserCheck,
  Building2,
  ChevronRight,
  Star,
} from 'lucide-react';

export const BentoGridSection: React.FC = () => {
  // Card 1: Onboarding Stages
  const [onboardingStage, setOnboardingStage] = useState<'day1' | 'day7' | 'day30'>('day1');

  // Card 2: Live WhatsApp Transparency Feed
  const [activeFeed, setActiveFeed] = useState<'doctor' | 'meds' | 'companionship'>('doctor');

  // Card 3: NRI Family Testimonials by Country
  const [activeRegion, setActiveRegion] = useState<'us' | 'uk' | 'sg' | 'au'>('us');

  // Card 4: Emergency Step Active index
  const [emergencyStep, setEmergencyStep] = useState<number>(0);

  // Data for Onboarding Stages
  const onboardingData = {
    day1: {
      title: 'Day 1: In-Home Introduction',
      subtitle: 'Coordinator Karthik R. conducts an unhurried tea visit to understand parent routines.',
      checklist: [
        'Introductory home tea visit completed',
        'Direct 24/7 WhatsApp care line established',
        'Emergency physician contacts linked',
      ],
      badge: 'Step 1 of 3 · Activated',
    },
    day7: {
      title: 'Day 7: Care Blueprint & Health Mapping',
      subtitle: 'Full alignment with family doctors, regular pharmacy delivery & dietary needs.',
      checklist: [
        'Apollo/Kauvery medical file indexed',
        'Monthly medication reminder schedule setup',
        'Emergency response route mapped (8 min to hospital)',
      ],
      badge: 'Step 2 of 3 · Active',
    },
    day30: {
      title: 'Day 30: Predictable Peace of Mind',
      subtitle: 'Smooth monthly rhythm with verified bi-weekly visits, bill payments, and wellness logs.',
      checklist: [
        'Bi-weekly doorstep companionship logs',
        'Property & utility bills verified & settled',
        'Comprehensive monthly health briefing sent',
      ],
      badge: 'Routine Care · 100% Active',
    },
  };

  // Data for Live Transparency Feeds (WhatsApp Style)
  const feedData = {
    doctor: {
      tag: 'Healthcare Escort',
      hospital: 'Apollo Heart Centre, Greams Road',
      time: 'Today, 11:30 AM IST',
      summary: 'Accompanied Appa to Dr. Ramanathan (Cardiology). BP 120/80 mmHg. ECG normal. Next review in 3 months.',
      actionNote: 'Prescription uploaded · 3 Photos shared on WhatsApp group',
    },
    meds: {
      tag: 'Doorstep Pharmacy & Vitals',
      hospital: 'Adyar Household Visit',
      time: 'Yesterday, 04:15 PM IST',
      summary: 'Nurse vitals checkup: Blood Sugar 118 mg/dL, SpO2 99%. 30-day cardiac & diabetes medication restocked.',
      actionNote: 'Receipts verified · Medication organizer sorted',
    },
    companionship: {
      tag: 'Wellbeing & Companionship',
      hospital: 'Besant Nagar Residence',
      time: 'Tuesday, 05:00 PM IST',
      summary: 'Spent 45 minutes over tea with Amma. Enjoyed discussing family photos and arranged fresh seasonal fruits.',
      actionNote: 'Mood: Joyful & relaxed · 2 Photos sent to Dallas family',
    },
  };

  // Data for NRI Family Reviews
  const familyReviews = {
    us: {
      country: 'Dallas, TX · USA',
      flag: '🇺🇸',
      name: 'Ravi & Priya Sundaram',
      parents: 'Parents in Adyar (Ages 78 & 74)',
      quote:
        '“Living in Dallas, we used to panic whenever Amma caught a cold. Having Karthik as our on-ground coordinator gives us complete clarity. He is like family in Chennai.”',
    },
    uk: {
      country: 'London · United Kingdom',
      flag: '🇬🇧',
      name: 'Anand Krishnamurthy',
      parents: 'Mother in Mylapore (Age 81)',
      quote:
        '“When Appa passed away, coordinating care for Amma from London felt impossible. Nithya Mitra stepped in with genuine warmth and absolute dependability.”',
    },
    sg: {
      country: 'Singapore',
      flag: '🇸🇬',
      name: 'Deepa Narayanan',
      parents: 'Parents in Anna Nagar (Ages 76 & 72)',
      quote:
        '“The WhatsApp updates with doctor notes and photographs arrive within minutes of every hospital visit. Transparency is 100% real.”',
    },
    au: {
      country: 'Sydney · Australia',
      flag: '🇦🇺',
      name: 'Suresh Venkat',
      parents: 'Father in Besant Nagar (Age 83)',
      quote:
        '“The time zone difference used to make coordinating errands so stressful. Now, everything from electrician visits to specialist appointments is handled seamlessly.”',
    },
  };

  // Emergency Timeline Steps
  const emergencySteps = [
    {
      time: '00:00',
      label: 'SOS Alert Received',
      desc: 'Immediate WhatsApp or direct phone hotline activation from parent or family.',
    },
    {
      time: '+05 min',
      label: 'On-Ground Coordinator Dispatched',
      desc: 'Nearest care coordinator in South/Central Chennai departs immediately to home.',
    },
    {
      time: '+12 min',
      label: 'Bedside & Hospital Escort',
      desc: 'Arrival at home, triage assessment, and priority liaison with Apollo/Kauvery ER.',
    },
    {
      time: '+15 min',
      label: 'Live Video Briefing',
      desc: 'Direct video call & physician briefing shared with overseas family members.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F4ED] text-[#17211F] border-b border-[#17352F]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#17211F] tracking-tight leading-tight">
            Overseas Family Command &{' '}
            <span className="italic text-[#B86F55]">Transparency Hub</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#17211F]/75 font-light leading-relaxed max-w-xl mx-auto">
            Experience how our dedicated on-ground coordination system in Chennai gives NRI families absolute visibility and instant response.
          </p>
        </div>

        {/* Asymmetric Bento Grid (4 Purposeful Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ================================================================= */}
          {/* CARD 1: TALL LEFT CARD - Interactive Coordinator Onboarding */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4 rounded-[2.5rem] bg-[#8DA88D] text-[#11241F] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-[0_12px_36px_rgba(23,53,47,0.08)] min-h-[580px]"
          >
            {/* Header & Interactive Stage Selector */}
            <div className="z-10">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#11241F]/80 font-semibold">
                  {onboardingData[onboardingStage].badge}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-900 bg-white/60 px-2 py-0.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse" />
                  Karthik R. Assigned
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#11241F] leading-tight mb-2">
                Guided Onboarding
              </h3>
              <p className="text-xs text-[#11241F]/80 font-light leading-relaxed mb-4">
                Click a stage below to see how our care system activates for your parents in Chennai:
              </p>

              {/* Stage Switcher Pills */}
              <div className="grid grid-cols-3 gap-1.5 bg-[#17211F]/10 p-1 rounded-xl mb-4 text-[11px] font-medium">
                {(['day1', 'day7', 'day30'] as const).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setOnboardingStage(stage)}
                    className={`py-1.5 rounded-lg transition-all cursor-pointer text-center font-mono ${
                      onboardingStage === stage
                        ? 'bg-white text-[#17211F] font-semibold shadow-xs'
                        : 'text-[#11241F]/70 hover:text-[#11241F]'
                    }`}
                  >
                    {stage === 'day1' ? 'Day 1' : stage === 'day7' ? 'Day 7' : 'Day 30'}
                  </button>
                ))}
              </div>

              {/* Dynamic Stage Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={onboardingStage}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl bg-white/80 backdrop-blur-sm p-4 border border-white/40 shadow-xs mb-4"
                >
                  <p className="text-xs font-semibold text-[#17211F] mb-1">
                    {onboardingData[onboardingStage].title}
                  </p>
                  <p className="text-[11px] text-[#17211F]/75 font-light leading-relaxed mb-2.5">
                    {onboardingData[onboardingStage].subtitle}
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-[#17211F]/90 font-medium">
                    {onboardingData[onboardingStage].checklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Transparent iPhone Mockup with Smooth Perspective Drop */}
            <div className="relative z-10 w-full flex justify-center items-end mt-auto -mb-10 sm:-mb-14">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] flex justify-center drop-shadow-[0_20px_35px_rgba(17,36,31,0.25)] transition-transform duration-500 hover:-translate-y-2">
                <img
                  src="/images/iphone_care_roadmap.png"
                  alt="Nithya Mitra On-ground Care Coordinator iPhone App"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN GRID WRAPPER (Top Wide + Bottom Two Tiles) */}
          {/* ================================================================= */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            
            {/* --------------------------------------------------------------- */}
            {/* CARD 2: TOP RIGHT WIDE CARD - Live WhatsApp Transparency Feed */}
            {/* --------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2.5rem] bg-[#E3EBE0] text-[#17211F] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-[0_8px_30px_rgba(23,53,47,0.06)] min-h-[320px]"
            >
              {/* Left Copy & Interactive Feed Switcher */}
              <div className="lg:max-w-[50%] z-10 w-full">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#17352F] mb-1 font-semibold">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Live WhatsApp Transparency</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#17211F] leading-tight mb-2">
                  Real-time Ground Reports
                </h3>
                <p className="text-xs text-[#17211F]/70 font-light leading-relaxed mb-4">
                  Select a live report type to see what overseas family members receive immediately after each visit:
                </p>

                {/* Feed Tab Selector */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  <button
                    onClick={() => setActiveFeed('doctor')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeFeed === 'doctor'
                        ? 'bg-[#17352F] text-white shadow-xs'
                        : 'bg-white/80 text-[#17211F]/80 hover:bg-white'
                    }`}
                  >
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Doctor Escort</span>
                  </button>

                  <button
                    onClick={() => setActiveFeed('meds')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeFeed === 'meds'
                        ? 'bg-[#17352F] text-white shadow-xs'
                        : 'bg-white/80 text-[#17211F]/80 hover:bg-white'
                    }`}
                  >
                    <Heart className="w-3 h-3 text-rose-400" />
                    <span>Meds & Vitals</span>
                  </button>

                  <button
                    onClick={() => setActiveFeed('companionship')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeFeed === 'companionship'
                        ? 'bg-[#17352F] text-white shadow-xs'
                        : 'bg-white/80 text-[#17211F]/80 hover:bg-white'
                    }`}
                  >
                    <UserCheck className="w-3 h-3 text-amber-400" />
                    <span>Home Tea Visit</span>
                  </button>
                </div>

                {/* WhatsApp Style Message Bubble Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeed}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-white p-3.5 border border-[#17352F]/10 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1 font-mono">
                      <span className="font-semibold text-[#17352F] flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-[#B86F55]" />
                        {feedData[activeFeed].hospital}
                      </span>
                      <span>{feedData[activeFeed].time}</span>
                    </div>

                    <p className="text-xs text-[#17211F] leading-snug mb-2 font-normal">
                      {feedData[activeFeed].summary}
                    </p>

                    <div className="flex items-center justify-between pt-1.5 border-t border-gray-100 text-[10px] text-emerald-800 font-medium">
                      <span>✓ {feedData[activeFeed].actionNote}</span>
                      <span className="text-gray-400 font-mono text-[9px]">Delivered to WhatsApp</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Phone Visual with Realistic iPhone Mockup */}
              <div className="relative w-full lg:w-[46%] flex items-center justify-center">
                {/* Concentric Ambient Waves */}
                <div className="absolute w-56 h-56 rounded-full border border-[#8DA88D]/40 pointer-events-none animate-pulse" />
                <div className="absolute w-44 h-44 rounded-full border border-[#8DA88D]/60 pointer-events-none" />

                {/* Real iPhone Mockup */}
                <div className="relative z-10 w-full max-w-[220px] sm:max-w-[240px] flex justify-center drop-shadow-[0_16px_35px_rgba(23,53,47,0.22)] transition-transform duration-500 hover:scale-[1.03]">
                  <img
                    src="/images/iphone_ground_data.png"
                    alt="Real-time Health and Doctor Visit Tracking iPhone UI"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* --------------------------------------------------------------- */}
            {/* BOTTOM ROW: TWO TILES (NRI Family Reviews + Emergency Response Timeline) */}
            {/* --------------------------------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Card 3: Interactive NRI Family Community by Country */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[2.5rem] bg-[#E3EBE0] text-[#17211F] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(23,53,47,0.06)] min-h-[260px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg sm:text-xl font-serif font-medium text-[#17211F]">
                      Trusted by 150+ NRI Families
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold bg-white/80 px-2 py-0.5 rounded-full">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Region Switcher Buttons */}
                  <div className="flex gap-1.5 mb-3 bg-white/60 p-1 rounded-xl text-[11px] font-medium">
                    {(['us', 'uk', 'sg', 'au'] as const).map((reg) => (
                      <button
                        key={reg}
                        onClick={() => setActiveRegion(reg)}
                        className={`flex-1 py-1 rounded-lg transition-all cursor-pointer text-center font-mono ${
                          activeRegion === reg
                            ? 'bg-[#17352F] text-white font-semibold'
                            : 'text-[#17211F]/70 hover:text-[#17211F]'
                        }`}
                      >
                        {familyReviews[reg].flag} {reg.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Quote */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRegion}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl bg-white/90 p-3.5 border border-white shadow-2xs"
                    >
                      <p className="text-xs text-[#17211F]/85 italic leading-relaxed mb-2 font-serif">
                        {familyReviews[activeRegion].quote}
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-gray-600 pt-1 border-t border-gray-100">
                        <span className="font-semibold text-[#17352F]">{familyReviews[activeRegion].name}</span>
                        <span className="text-[9px] font-mono">{familyReviews[activeRegion].parents}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#17211F]/70">
                  <span className="font-mono">US · UK · Singapore · Australia</span>
                  <span className="text-emerald-800 font-medium">Verified Reviews ✓</span>
                </div>
              </motion.div>

              {/* Card 4: Interactive <15m Emergency Response Protocol */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-[2.5rem] bg-[#8DA88D] text-[#11241F] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(23,53,47,0.06)] min-h-[260px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-lg sm:text-xl font-serif font-medium text-[#11241F]">
                      &lt;15m Emergency Protocol
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-white/90 text-emerald-800 px-2 py-0.5 rounded-full font-semibold shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                      Live Standby
                    </span>
                  </div>
                  <p className="text-xs text-[#11241F]/80 font-light leading-relaxed mb-3">
                    Click each step to review our immediate crisis mobilization in Chennai:
                  </p>

                  {/* Interactive Timeline Stepper */}
                  <div className="space-y-1.5">
                    {emergencySteps.map((step, idx) => (
                      <button
                        key={idx}
                        onClick={() => setEmergencyStep(idx)}
                        className={`w-full text-left p-2 rounded-xl transition-all cursor-pointer flex items-center justify-between text-xs ${
                          emergencyStep === idx
                            ? 'bg-white text-[#17211F] shadow-xs font-semibold'
                            : 'bg-white/40 text-[#11241F]/80 hover:bg-white/60'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/10">
                            {step.time}
                          </span>
                          <span className="truncate">{step.label}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform shrink-0 ${emergencyStep === idx ? 'rotate-90 text-[#B86F55]' : 'opacity-40'}`} />
                      </button>
                    ))}
                  </div>

                  {/* Active Step Details */}
                  <div className="mt-2.5 rounded-xl bg-white/80 p-2.5 text-[11px] text-[#17211F]/85 font-light leading-snug border border-white/60">
                    <span className="font-semibold text-[#17352F] block mb-0.5">
                      {emergencySteps[emergencyStep].label}:
                    </span>
                    {emergencySteps[emergencyStep].desc}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#11241F]/80 pt-2 border-t border-[#11241F]/15">
                  <span className="font-mono">Direct Apollo / Kauvery Liaison</span>
                  <span className="font-semibold text-emerald-950">24/7 Hotline</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
