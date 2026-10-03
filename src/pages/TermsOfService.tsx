import React, { useEffect } from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TermsOfService: React.FC = () => {
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
                TERMS OF COORDINATION
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight">
              Terms of Service
            </h1>

            <p className="mt-4 text-sm font-mono text-[#68716D]">
              Last updated: October 2026 · Governing on-ground family support & domestic coordination
            </p>
          </div>

          {/* Core Distinction Notice */}
          <div className="bg-[#FBFAF6] border-l-4 border-[#B86F55] p-6 sm:p-8 mb-12 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-sm bg-[#B86F55]/10 text-[#B86F55] shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-[#17352F] mb-1">
                  Nature of Service: Coordination & Domestic Stewardship
                </h3>
                <p className="text-sm text-[#17211F]/80 font-light leading-relaxed">
                  Nithya Mitra operates strictly as a professional family-support coordination, companion accompaniment, and local stewardship service. Nithya Mitra is not a healthcare clinic, medical practice, ambulance operator, or legal law firm. Where specialized medical, clinical, or legal services are required, Nithya Mitra liaises with accredited third-party providers.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-10 text-sm sm:text-base text-[#17211F]/85 font-light leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                1. Scope of Engagement
              </h2>
              <p>
                By enrolling in a Nithya Mitra support plan or booking an on-ground service, you engage Nithya Mitra to perform designated non-clinical coordination tasks, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#17211F]/80">
                <li>Personal visits, companion accompaniment, social check-ins, and wellbeing updates.</li>
                <li>Hospital and clinic appointment scheduling, transport coordination, and in-person physical accompaniment.</li>
                <li>Supervision of domestic repair technicians (electrical, plumbing, AC, waterproofing) and property walkthrough inspections.</li>
                <li>Local administrative errands, bank appointment logistics, and digital life certificate (Jeevan Pramaan) verification assistance.</li>
                <li>Emergency coordination: First-responder triage liaison, hospital admission registration support, and continuous family communication.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                2. On-Ground Protocol & Accountability
              </h2>
              <p>
                All Nithya Mitra visits and tasks are documented with transparent photographic verification and written briefings shared directly with the overseas family member. Our coordinators carry official photo ID badges, wear branded company attire, and adhere to strict ethical codes of conduct.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                3. Emergency Response Scope
              </h2>
              <p>
                In acute emergency situations, Nithya Mitra coordinates with pre-agreed private ambulance operators and designated hospital emergency rooms. While Nithya Mitra team members act with promptness and calm diligence to be present at the hospital and communicate with doctors, Nithya Mitra cannot guarantee medical outcomes or hospital admission availability.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                4. Fees, Billing & Cancellation
              </h2>
              <p>
                Support plans are billed on a monthly or quarterly basis without lock-in contracts. You may pause, adjust, or cancel your family support plan at any time with a 14-day notice prior to the next billing cycle. Out-of-pocket expenses (such as third-party medical fees, hospital deposits, technician repair parts, or government notary stamps) are charged at actuals with original receipts provided.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                5. Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these services shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
