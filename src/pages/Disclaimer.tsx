import React, { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, ShieldCheck, HeartPulse, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Disclaimer: React.FC = () => {
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
                TRANSPARENCY & CLARITY
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#17352F] leading-tight">
              Service & Medical Disclaimer
            </h1>

            <p className="mt-4 text-sm font-mono text-[#68716D]">
              Clear, unambiguous boundaries of on-ground coordination vs medical and legal authority
            </p>
          </div>

          {/* Key Disclaimer Callout */}
          <div className="bg-[#FBFAF6] border border-[#17352F]/15 rounded-sm p-6 sm:p-8 mb-12 shadow-xs space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-sm bg-[#B86F55]/10 text-[#B86F55] shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-[#17352F] mb-1">
                  Non-Medical & Non-Clinical Practice Declaration
                </h3>
                <p className="text-sm text-[#17211F]/85 font-light leading-relaxed">
                  <strong>Nithya Mitra is a professional family-support coordination, companion accompaniment, and local domestic stewardship service.</strong> Nithya Mitra is NOT a hospital, medical diagnostic center, nursing home, home-health clinical provider, or psychiatric counseling clinic.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Details */}
          <div className="space-y-10 text-sm sm:text-base text-[#17211F]/85 font-light leading-relaxed">
            
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-[#17352F]">
                <HeartPulse className="w-5 h-5 text-[#B86F55]" />
                <h2 className="text-xl sm:text-2xl font-serif font-medium">
                  1. Healthcare & Clinical Advice
                </h2>
              </div>
              <p>
                No communication, report, or suggestion from Nithya Mitra personnel constitutes medical advice, clinical diagnosis, prescription recommendation, or treatment planning. All medical treatment, consultations, diagnostic assessments, and surgical procedures are performed exclusively by registered medical practitioners and licensed hospitals.
              </p>
              <p>
                Nithya Mitra’s role is strictly logistical and supervisory: booking consultations, providing respectful physical escort to appointments, collecting laboratory reports, and transcribing doctor briefings for the family's review.
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-[#17352F]">
                <Building2 className="w-5 h-5 text-[#B86F55]" />
                <h2 className="text-xl sm:text-2xl font-serif font-medium">
                  2. Third-Party Specialist Providers
                </h2>
              </div>
              <p>
                When a family requires specialized home-nursing attendants, certified physiotherapists, emergency ambulance transfers, legal notaries, or civil contractors, Nithya Mitra coordinates with verified third-party licensed agencies. While we vet partners with extreme care and supervise on-site attendance, third-party professionals remain solely responsible for the technical execution of their respective services.
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2 text-[#17352F]">
                <ShieldCheck className="w-5 h-5 text-[#B86F55]" />
                <h2 className="text-xl sm:text-2xl font-serif font-medium">
                  3. Emergency Limitations
                </h2>
              </div>
              <p>
                Nithya Mitra is designed to be a calm, capable on-ground coordinator during urgent family events in Chennai and South India. However, Nithya Mitra is not a substitute for government emergency response services or hospital trauma ICU facilities. In life-threatening emergencies, hospital medical teams and ambulance paramedics determine all clinical courses of action.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-[#17352F]/15">
              <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#17352F]">
                Questions Regarding Service Scope
              </h2>
              <p>
                If you have any questions regarding whether a specific task falls within Nithya Mitra’s on-ground coordination scope, please contact our family care desk:
              </p>
              <p className="font-mono text-sm text-[#17352F]">
                Email: <a href="mailto:support@nithyamitra.com" className="underline">support@nithyamitra.com</a><br />
                Direct WhatsApp Line: +91 97890 66588
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
