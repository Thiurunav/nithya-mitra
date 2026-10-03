import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#17211F] selection:bg-[#17352F] selection:text-[#F7F4ED]">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#68716D] hover:text-[#17352F] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#B86F55]" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[#17352F]/15 pb-8 mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F55]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B86F55]">
                LEGAL & DATA PROTECTION
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm font-mono text-[#68716D]">
              Last updated: October 2026 · Compliant with the Digital Personal Data Protection (DPDP) Act, India & Global Standards
            </p>
          </div>

          {/* Summary Trust Box */}
          <div className="bg-[#FBFAF6] border border-[#17352F]/15 rounded-sm p-6 sm:p-8 mb-12 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-sm bg-[#17352F]/10 text-[#17352F] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-[#17352F] mb-1">
                  Our Core Data Commitment to NRI Families
                </h3>
                <p className="text-sm text-[#17211F]/80 font-light leading-relaxed">
                  We understand that you entrust Nithya Mitra with sensitive details regarding your parents’ residence, health appointments, emergency contacts, and domestic routines. We never sell, monetize, or share your family data with advertisers. Data is exclusively utilized to coordinate transparent on-ground support.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-10 text-sm sm:text-base text-[#17211F]/85 font-light leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                1. Information We Collect
              </h2>
              <p>
                To provide dependable on-ground coordination across timezones, Nithya Mitra collects:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#17211F]/80">
                <li><strong className="font-medium text-[#17211F]">Client & Overseas Contact Information:</strong> Name, country of residence (USA, UK, Canada, Australia, Singapore, etc.), email, and WhatsApp contact numbers.</li>
                <li><strong className="font-medium text-[#17211F]">Family Details in India:</strong> Parents’ names, residential address in Chennai or South India, emergency contacts, and communication preferences.</li>
                <li><strong className="font-medium text-[#17211F]">Coordination Records:</strong> Hospital appointment dates, prescription refill schedules, property repair logs, and briefing photographs shared during visits.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                2. How We Use Family Data
              </h2>
              <p>
                Collected data is processed strictly for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#17211F]/80">
                <li>Facilitating scheduled in-person visits and welfare checks at your parents' residence.</li>
                <li>Escorting parents to pre-scheduled diagnostic centers, clinics, and hospital consultations.</li>
                <li>Dispatching real-time photographic and written status briefings back to you via encrypted channels.</li>
                <li>Assisting in emergency hospital reception and triage liaison when requested by overseas family members.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                3. Confidentiality of Medical & Identity Records
              </h2>
              <p>
                Nithya Mitra coordinates with accredited third-party healthcare institutions (hospitals, diagnostic clinics, licensed physiotherapists). Medical records, doctor consultation summaries, and life certificate paperwork (Jeevan Pramaan) handled during on-ground representation are transmitted solely to the designated overseas family point of contact.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                4. On-Ground Coordinator Verification & Access
              </h2>
              <p>
                All Nithya Mitra field personnel undergo strict identity background checks, police verification, and sign binding confidentiality agreements. Coordinators access only the information necessary to carry out their specific scheduled task.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                5. Data Retention & Your Rights
              </h2>
              <p>
                You retain complete control over your family's records. You may request a complete export or permanent deletion of your account, address, and visit history at any time by writing to us at <a href="mailto:privacy@nithyamitra.com" className="text-[#B86F55] underline">privacy@nithyamitra.com</a>.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#17352F]/15">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                6. Contact Our Privacy Officer
              </h2>
              <p>
                Nithya Mitra Coordination Services<br />
                Chennai Ground Hub, Tamil Nadu, India<br />
                Direct Email: <a href="mailto:privacy@nithyamitra.com" className="text-[#17352F] font-mono font-medium">privacy@nithyamitra.com</a><br />
                Phone / WhatsApp: <span className="font-mono text-[#17352F]">+91 97890 66588</span>
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
