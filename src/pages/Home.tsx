import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { RealitySection } from '../components/RealitySection';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorks } from '../components/HowItWorks';
import { SupportPlans } from '../components/SupportPlans';
import { TrustAndLeadership } from '../components/TrustAndLeadership';
import { FAQ } from '../components/FAQ';
import { EnquiryForm } from '../components/EnquiryForm';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { WhatsAppFloating } from '../components/WhatsAppFloating';

export const Home: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToEnquiry = (plan?: string, service?: string) => {
    if (plan) setSelectedPlan(plan);
    if (service) setSelectedService(service);
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#17211F] selection:bg-[#17352F] selection:text-[#F7F4ED]">
      {/* Navigation */}
      <Navbar onOpenEnquiry={() => scrollToEnquiry()} />

      <main>
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => scrollToEnquiry()} />

        {/* The Reality of Distance (Consolidated & Punchy) */}
        <RealitySection />

        {/* 6 Core Coordination Pillars */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) =>
            scrollToEnquiry(undefined, serviceTitle)
          }
        />

        {/* 3-Step Simple System */}
        <HowItWorks />

        {/* 3 Support Plans */}
        <SupportPlans onSelectPlan={(planId) => scrollToEnquiry(planId)} />

        {/* Trust, Chennai Roots & Leadership */}
        <TrustAndLeadership />

        {/* 5 Essential FAQs */}
        <FAQ />

        {/* Frictionless Consultation Booking */}
        <EnquiryForm
          initialPlan={selectedPlan}
          initialService={selectedService}
        />

        {/* Final Reassuring CTA */}
        <FinalCTA onOpenEnquiry={() => scrollToEnquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp pill on desktop + mobile action bar */}
      <WhatsAppFloating onOpenEnquiry={() => scrollToEnquiry()} />
    </div>
  );
};
