import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DottedMap } from '@/registry/magicui/dotted-map';
import type { MapPoint, ConnectionRoute } from '@/registry/magicui/dotted-map';
import { Globe, PhoneCall, Sparkles } from 'lucide-react';

interface GlobalReachSectionProps {
  onOpenEnquiry?: () => void;
}

export const GlobalReachSection: React.FC<GlobalReachSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [timezones, setTimezones] = useState({
    usaPST: '',
    usaEST: '',
    uk: '',
    uae: '',
    india: '',
    singapore: '',
  });

  // Update live clocks every 10 seconds
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimezones({
        usaPST: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        usaEST: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
        uk: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        uae: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }),
        india: now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }),
        singapore: now.toLocaleTimeString('en-SG', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  // Hub: Chennai, India
  const chennaiHub = { lat: 13.0827, lng: 80.2707, label: 'Chennai (Hub)' };

  // Key NRI diaspora cities
  const mapPoints: MapPoint[] = [
    { lat: 13.0827, lng: 80.2707, label: 'Chennai', country: 'India', isHub: true },
    { lat: 37.7749, lng: -122.4194, label: 'San Francisco', country: 'USA' },
    { lat: 40.7128, lng: -74.0060, label: 'New York', country: 'USA' },
    { lat: 43.6532, lng: -79.3832, label: 'Toronto', country: 'Canada' },
    { lat: 51.5074, lng: -0.1278, label: 'London', country: 'UK' },
    { lat: 50.1109, lng: 8.6821, label: 'Frankfurt', country: 'Germany' },
    { lat: 25.2048, lng: 55.2708, label: 'Dubai', country: 'UAE' },
    { lat: 1.3521, lng: 103.8198, label: 'Singapore', country: 'Singapore' },
    { lat: -33.8688, lng: 151.2093, label: 'Sydney', country: 'Australia' },
  ];

  // Active Connection Routes converging onto Chennai
  const mapRoutes: ConnectionRoute[] = [
    { from: { lat: 37.7749, lng: -122.4194, label: 'San Francisco' }, to: chennaiHub },
    { from: { lat: 40.7128, lng: -74.0060, label: 'New York' }, to: chennaiHub },
    { from: { lat: 43.6532, lng: -79.3832, label: 'Toronto' }, to: chennaiHub },
    { from: { lat: 51.5074, lng: -0.1278, label: 'London' }, to: chennaiHub },
    { from: { lat: 50.1109, lng: 8.6821, label: 'Frankfurt' }, to: chennaiHub },
    { from: { lat: 25.2048, lng: 55.2708, label: 'Dubai' }, to: chennaiHub },
    { from: { lat: 1.3521, lng: 103.8198, label: 'Singapore' }, to: chennaiHub },
    { from: { lat: -33.8688, lng: 151.2093, label: 'Sydney' }, to: chennaiHub },
  ];

  // Regional diaspora highlight cards
  const diasporaHubs = [
    {
      id: 'usa',
      flag: '🇺🇸 / 🇨🇦',
      region: 'United States & Canada',
      cities: 'Bay Area · New York · Dallas · Seattle · Toronto',
      timeLag: '9.5h - 12.5h behind',
      timeVal: `${timezones.usaPST || '07:30 AM'} PST · ${timezones.usaEST || '10:30 AM'} EST`,
      activeFamilies: '180+ Families Supported',
      desc: 'Scheduled evening check-ins, end-to-end medical appointments, and transparent WhatsApp updates before your morning starts.',
    },
    {
      id: 'uk',
      flag: '🇬🇧 / 🇪🇺',
      region: 'UK & Europe',
      cities: 'London · Manchester · Frankfurt · Dublin',
      timeLag: '4.5h - 5.5h behind',
      timeVal: `${timezones.uk || '03:30 PM'} GMT`,
      activeFamilies: '95+ Families Supported',
      desc: 'Seamless midday coordination for doctor consultations, prescription delivery, and elder companionship while you are working.',
    },
    {
      id: 'uae',
      flag: '🇦🇪 / 🇸🇬',
      region: 'Middle East & Singapore',
      cities: 'Dubai · Abu Dhabi · Doha · Singapore',
      timeLag: '1.5h behind / 2.5h ahead',
      timeVal: `${timezones.uae || '07:30 PM'} GST · ${timezones.singapore || '11:30 PM'} SGT`,
      activeFamilies: '140+ Families Supported',
      desc: 'High-frequency coordination, emergency hospital backup, and routine property maintenance visits with immediate feedback.',
    },
    {
      id: 'aus',
      flag: '🇦🇺 / 🇳🇿',
      region: 'Australia & New Zealand',
      cities: 'Sydney · Melbourne · Brisbane · Auckland',
      timeLag: '4.5h - 7.5h ahead',
      timeVal: 'Sydney Timezone',
      activeFamilies: '60+ Families Supported',
      desc: 'Dedicated early-morning India visit coordination so you receive comprehensive health reports before turning in for the night.',
    },
  ];

  const scrollToEnquiry = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10 overflow-hidden text-[#17211F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              GLOBAL NRI REACH · LOCAL CARE IN INDIA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] text-[#17211F] tracking-tight mb-4 font-serif"
          >
            You build abroad in the USA, UK & UAE.{' '}
            <span className="italic text-[#17352F] block sm:inline">
              We look after home in India.
            </span>
          </motion.h2>

          <p className="text-base sm:text-lg text-[#68716D] font-light max-w-2xl leading-relaxed">
            Time zones, work demands, and thousands of miles shouldn’t stand between you and your parents’ wellbeing. Our dedicated on-ground field coordinators in Chennai act as your extended hands.
          </p>
        </div>

        {/* Global Dotted Map Interactive Visual Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#17352F]/12 shadow-[0_16px_50px_rgba(23,53,47,0.08)] p-4 sm:p-8 lg:p-10 mb-12 overflow-hidden"
        >
          {/* Top Map Control Bar with Live Clocks */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/6">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#17352F] text-[#F7F4ED] flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#17352F] block">
                  Live Global Care Grid
                </span>
                <span className="text-[11px] text-black/50">
                  Real-time synchronization with Chennai Ground Operations
                </span>
              </div>
            </div>

            {/* Chennai Hub Live Pulse Indicator */}
            <div className="flex items-center gap-3 bg-[#F7F4ED] px-3.5 py-1.5 rounded-full border border-[#17352F]/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <div className="text-xs">
                <span className="font-semibold text-[#17352F]">Chennai Hub: </span>
                <span className="font-mono text-[#B86F55] font-medium">{timezones.india || '09:00 PM'} IST</span>
              </div>
            </div>

          </div>

          {/* DOTTED MAP RENDER CANVAS */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] my-2">
            <DottedMap
              dotRadius={0.2}
              dotColor="#17352F"
              points={mapPoints}
              routes={mapRoutes}
              highlightedCity={selectedCity}
              onSelectCity={(city) => setSelectedCity(city)}
            />

            {/* Floating Info Overlay for Selected City */}
            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#17352F] text-[#F7F4ED] p-4 rounded-xl shadow-xl border border-white/15 max-w-xs z-30 text-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-semibold text-[#D8C8B3] uppercase tracking-wider text-[11px]">
                    {selectedCity} → Chennai Route
                  </span>
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="text-white/60 hover:text-white text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[#F7F4ED]/80 font-light leading-relaxed">
                  Dedicated timezone coordinator assigned. Timestamped WhatsApp photo updates and direct hospital escort logs.
                </p>
              </motion.div>
            )}
          </div>

          {/* Map Footer Legend */}
          <div className="pt-4 border-t border-black/6 flex flex-wrap items-center justify-between gap-3 text-xs text-black/60">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B86F55]" />
                <span className="font-medium text-[#17211F]">Chennai Operations Hub</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#17352F]" />
                <span>NRI Family Locations</span>
              </div>
            </div>
            <span className="text-[11px] text-[#B86F55] font-medium">
              ✦ Average Coordinator Response Time: &lt; 15 mins
            </span>
          </div>

        </motion.div>

        {/* 4 Regional Diaspora Hub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {diasporaHubs.map((hub, idx) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              whileHover={{ y: -4 }}
              onMouseEnter={() => setSelectedCity(hub.id === 'usa' ? 'San Francisco' : hub.id === 'uk' ? 'London' : hub.id === 'uae' ? 'Dubai' : 'Sydney')}
              onMouseLeave={() => setSelectedCity(null)}
              className="bg-white p-6 rounded-xl sm:rounded-2xl border border-[#17352F]/10 hover:border-[#B86F55]/40 hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{hub.flag}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F7F4ED] text-[#17352F] font-semibold border border-black/5">
                    {hub.timeLag}
                  </span>
                </div>

                <h3 className="text-base font-serif font-semibold text-[#17352F] mb-1 group-hover:text-[#B86F55] transition-colors">
                  {hub.region}
                </h3>
                
                <p className="text-[11px] font-medium text-black/50 mb-3">
                  {hub.cities}
                </p>

                <p className="text-xs text-[#17211F]/75 font-light leading-relaxed mb-4">
                  {hub.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-[#17352F] font-medium">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#B86F55]" />
                  {hub.activeFamilies}
                </span>
                <span className="font-mono text-[#B86F55] text-[10px]">{hub.timeVal}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Reassurance CTA Box */}
        <div className="bg-[#17352F] text-[#F7F4ED] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B86F55] font-semibold block mb-1">
              PROACTIVE SUPPORT ACROSS ALL TIMEZONES
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#FBFAF6] font-normal mb-2">
              Ready to give your family dependable on-ground care in India?
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F4ED]/75 font-light">
              Speak directly with our founder or a dedicated coordinator. We’ll map out a customized care plan for your parents in Chennai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={scrollToEnquiry}
              className="w-full sm:w-auto px-6 py-3 bg-[#F7F4ED] hover:bg-white text-[#17352F] text-xs font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B86F55]" />
              <span>Book Family Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
