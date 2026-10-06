import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProblemSection } from "../components/ProblemSection";
import { CompanionshipSection } from "../components/CompanionshipSection";
import { ServicesSection } from "../components/ServicesSection";
import { HowItWorks } from "../components/HowItWorks";
import { SupportPlans } from "../components/SupportPlans";
import { CareTracks } from "../components/CareTracks";
import { FAQ } from "../components/FAQ";
import { EnquiryForm } from "../components/EnquiryForm";
import { Footer } from "../components/Footer";
import { WhatsAppFloating } from "../components/WhatsAppFloating";

export const Home: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToEnquiry = (plan?: string, service?: string) => {
    if (plan) setSelectedPlan(plan);
    if (service) setSelectedService(service);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#17211F] selection:bg-[#17352F] selection:text-[#F7F4ED]">
      {/* Navigation */}
      <Navbar onOpenEnquiry={() => scrollToEnquiry()} />

      <main className="bg-[#F7F4ED]">
        {/* 1. Hero: You built a life abroad. Who looks after home? */}
        <Hero onOpenEnquiry={() => scrollToEnquiry()} />

        {/* 2. Pain Points: You are not struggling because you don't care */}
        <ProblemSection />

        {/* 3. Companionship: The Part People Don't Talk About */}
        <CompanionshipSection />

        {/* 4. Services: The Nithya Mitra Approach — 6 Core Pillars */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) =>
            scrollToEnquiry(undefined, serviceTitle)
          }
        />

        {/* 5. How It Works: A simple system between you and home (4 steps) */}
        <HowItWorks />

        {/* 6. Flexible Family Support: Advanced, Premium, Elite */}
        <SupportPlans onSelectPlan={(planId) => scrollToEnquiry(planId)} />

        {/* 7. Optional Care Tracks: 10 specialized health pathways */}
        <CareTracks />

        {/* 8. FAQ: 6 Client Questions & Honest Answers */}
        <FAQ />

        {/* 9. Let's Talk: Tell Us About Your Family */}
        <EnquiryForm
          initialPlan={selectedPlan}
          initialService={selectedService}
        />
      </main>

      {/* Clean Solid Curved Footer */}
      <Footer onOpenEnquiry={() => scrollToEnquiry()} />

      {/* Floating WhatsApp */}
      <WhatsAppFloating onOpenEnquiry={() => scrollToEnquiry()} />
    </div>
  );
};
