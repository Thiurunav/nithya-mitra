import React from 'react';
import { Globe, ShieldCheck, CheckCheck, Video, PhoneCall } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#FBFAF6] border-b border-[#17352F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
              THE JOURNEY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight">
            A simple system between you and home.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#68716D] font-light max-w-xl">
            How remote worry transforms into documented on-ground care in three transparent stages.
          </p>
        </div>

        {/* Narrative Journey: 3 Tangible, Visual Stages (No Generic Cards!) */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* Stage 01: Timezone Consultation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F7F4ED] p-8 sm:p-10 rounded-sm border border-[#17352F]/12">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B86F55] font-semibold">
                  Stage 01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#17352F]/20" />
                <span className="text-xs text-[#68716D] font-mono">
                  Zero Obligation
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F]">
                Tell us what matters most.
              </h3>

              <p className="text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed">
                An unhurried 20-minute discussion over Zoom or WhatsApp scheduled around your local timezone. We listen to your parents' daily habits, preferred doctors, home maintenance needs, and the specific worries keeping you up at night.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs text-[#17352F]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#17352F]/10 rounded-sm">
                  <Video className="w-3.5 h-3.5 text-[#B86F55]" />
                  <span>Zoom / WhatsApp Video</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#17352F]/10 rounded-sm">
                  <Globe className="w-3.5 h-3.5 text-[#17352F]" />
                  <span>PST · EST · GMT · AEDT Timezones</span>
                </span>
              </div>
            </div>

            {/* Timezone Visual Widget */}
            <div className="lg:col-span-6 bg-white p-6 rounded-sm border border-[#17352F]/15 shadow-sm space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#68716D] block border-b border-[#17352F]/10 pb-2">
                Consultation Scheduling Preview
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#FBFAF6] rounded-sm border border-[#17352F]/10">
                  <span className="text-[10px] text-[#68716D] block">Your Location (Abroad)</span>
                  <strong className="text-sm text-[#17352F]">8:00 AM PST / 4:00 PM GMT</strong>
                </div>
                <div className="p-3 bg-[#17352F] text-[#F7F4ED] rounded-sm">
                  <span className="text-[10px] text-[#D8C8B3] block">Vayosh Lead (India)</span>
                  <strong className="text-sm text-[#FBFAF6]">9:30 PM IST (Chennai)</strong>
                </div>
              </div>
              <p className="text-xs text-[#68716D] italic">
                "We speak your language — cultural understanding, regional family respect, and absolute discretion."
              </p>
            </div>
          </div>

          {/* Stage 02: On-Ground Execution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F7F4ED] p-8 sm:p-10 rounded-sm border border-[#17352F]/12">
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              {/* Coordinator Credential Card */}
              <div className="bg-white p-6 rounded-sm border border-[#17352F]/15 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#17352F] shrink-0">
                    <img
                      src="/vayosh-team-uniform.jpg"
                      alt="Vayosh Lead"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-serif font-semibold text-[#17352F]">
                      Vayosh Designated Care Lead
                    </h5>
                    <span className="text-[11px] text-[#B86F55] font-mono">
                      Verified Photo ID · Official Polo Uniform
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-[#FBFAF6] rounded-sm text-xs text-[#17211F]/80 leading-relaxed border border-[#17352F]/10">
                  "Arrives at your parents' door with respect, punctuality, and verified authority. No strangers, no revolving gig workers."
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B86F55] font-semibold">
                  Stage 02
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#17352F]/20" />
                <span className="text-xs text-[#68716D] font-mono">
                  Physical Ground Presence
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F]">
                We coordinate on the ground.
              </h3>

              <p className="text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed">
                Whether it is a scheduled wellbeing visit over morning filter coffee, escorting your mother through an appointment at Apollo or Fortis, or supervising an electrician fixing the distribution box, our coordinator owns the responsibility in person.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#17352F]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#17352F]/10 rounded-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#17352F]" />
                  <span>Physical Attendance</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#17352F]/10 rounded-sm">
                  <PhoneCall className="w-3.5 h-3.5 text-[#B86F55]" />
                  <span>Direct Escalation Link</span>
                </span>
              </div>
            </div>
          </div>

          {/* Stage 03: Direct Transparent NRI Update (The WhatsApp Experience) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F7F4ED] p-8 sm:p-10 rounded-sm border border-[#17352F]/12">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B86F55] font-semibold">
                  Stage 03
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#17352F]/20" />
                <span className="text-xs text-[#68716D] font-mono">
                  Instant Documentation
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#17352F]">
                You stay completely informed.
              </h3>

              <p className="text-sm sm:text-base text-[#17211F]/80 font-light leading-relaxed">
                You never have to wonder what happened. Following every visit or errand, you receive a concise, structured briefing on WhatsApp with timestamps, photos, doctor notes, and receipts so you have complete peace of mind.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#17352F]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#17352F]/10 rounded-sm">
                  <CheckCheck className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Structured WhatsApp Summaries</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#17352F]/10 rounded-sm">
                  <span>Photo & Audio Verification</span>
                </span>
              </div>
            </div>

            {/* Realistic WhatsApp Briefing Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#EFEAE2] rounded-md border border-[#17352F]/20 shadow-md overflow-hidden max-w-md mx-auto">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] text-white px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-xs">
                      V
                    </div>
                    <div>
                      <span className="text-xs font-semibold block leading-tight">Vayosh Lead · Chennai</span>
                      <span className="text-[10px] text-white/80">Online · Dedicated Family Channel</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">LIVE</span>
                </div>

                {/* Chat Bubble Area */}
                <div className="p-4 space-y-3 text-xs">
                  <div className="bg-white p-3.5 rounded-lg rounded-tl-none shadow-xs border border-black/5 max-w-[92%] space-y-2">
                    <p className="text-[#17211F] leading-relaxed">
                      <strong>Vanakkam Anand!</strong> Just completed the weekly parent visit in Mylapore with Appa and Amma.
                    </p>
                    <ul className="text-[11px] text-[#17211F]/80 space-y-1 list-disc pl-3">
                      <li>Blood pressure recorded: <strong>124/82 mmHg</strong> (Normal).</li>
                      <li>30-day cardiologist medication refill verified & delivered.</li>
                      <li>Kitchen AC water drain checked — technician completed clearing.</li>
                      <li>Shared afternoon filter coffee; both in cheerful spirits!</li>
                    </ul>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-gray-500 pt-1">
                      <span>11:42 AM IST</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 bg-white/70 px-2.5 py-0.5 rounded-full font-mono">
                      Photos & Receipts Archived to Family Vault
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
