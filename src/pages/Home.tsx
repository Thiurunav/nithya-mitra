import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { GlobalReachSection } from '../components/GlobalReachSection';
import { ScrollRevealPhrase } from '../components/ScrollRevealPhrase';
import { HowItWorks } from '../components/HowItWorks';
import { TrustAndLeadership } from '../components/TrustAndLeadership';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { FAQ } from '../components/FAQ';
import { EnquiryForm } from '../components/EnquiryForm';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

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
        {/* Hero Section with Oscar Health Scroll-Driven Triptych & Editorial Transition */}
        <Hero onOpenEnquiry={() => scrollToEnquiry()} />

        {/* 6 Core Coordination Pillars */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) =>
            scrollToEnquiry(undefined, serviceTitle)
          }
        />

        {/* Global NRI Working Grid with MagicUI DottedMap */}
        <GlobalReachSection />

        {/* Scroll-Driven Editorial Phrase Reveal */}
        <ScrollRevealPhrase />

        {/* 3-Step Simple System */}
        <HowItWorks />

        {/* Trust, Chennai Roots & Leadership */}
        <TrustAndLeadership />

        {/* Vision & Mission Interactive Sliding Notch Cards (From Zenin architecture) */}
        <VisionMissionSection />

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
    </div>
  );
};
