import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ProblemSection } from '../components/ProblemSection';
import { CompanionshipSection } from '../components/CompanionshipSection';
import { ServicesSection } from '../components/ServicesSection';
import { HowItWorks } from '../components/HowItWorks';
import { SupportPlans } from '../components/SupportPlans';
import { CareTracks } from '../components/CareTracks';
import { TrustSection } from '../components/TrustSection';
import { TeamSection } from '../components/TeamSection';
import { Testimonials } from '../components/Testimonials';
import { CaseStudies } from '../components/CaseStudies';
import { FounderStory } from '../components/FounderStory';
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

        {/* 4 Trust Principles Strip */}
        <TrustStrip />

        {/* Problem Section (Pains, Frustrations, Questions) */}
        <ProblemSection />

        {/* Emotional / Companionship Focus Section */}
        <CompanionshipSection />

        {/* Core Services Section with Drawer details */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) =>
            scrollToEnquiry(undefined, serviceTitle)
          }
        />

        {/* 4-Step Narrative Timeline */}
        <HowItWorks />

        {/* Support Plans */}
        <SupportPlans onSelectPlan={(planId) => scrollToEnquiry(planId)} />

        {/* Optional Care Tracks Horizontal Scroll */}
        <CareTracks />

        {/* Trust Framework Section */}
        <TrustSection />

        {/* Local Ground Team Section */}
        <TeamSection onScheduleIntro={() => scrollToEnquiry()} />

        {/* Video Testimonials & Privacy Commitment */}
        <Testimonials />

        {/* Real Situations & Operational Scenarios */}
        <CaseStudies />

        {/* Founder Story & Brand Philosophy */}
        <FounderStory />

        {/* Accordion FAQs */}
        <FAQ />

        {/* Consultation / Conversion Enquiry Form */}
        <EnquiryForm
          initialPlan={selectedPlan}
          initialService={selectedService}
        />

        {/* Final Conversion CTA */}
        <FinalCTA onOpenEnquiry={() => scrollToEnquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Integration: Floating desktop pill + Mobile sticky bar */}
      <WhatsAppFloating onOpenEnquiry={() => scrollToEnquiry()} />
    </div>
  );
};
