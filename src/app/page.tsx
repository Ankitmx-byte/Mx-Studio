import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ValuePropSection } from "@/components/landing/ValuePropSection";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { VideoEditingShowcase } from "@/components/landing/VideoEditingShowcase";
import { AdStudioShowcase } from "@/components/landing/AdStudioShowcase";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WorkspaceBento } from "@/components/landing/WorkspaceBento";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#090812] text-white selection:bg-[#F13DBB]/30 selection:text-white">
      {/* 1. Floating Luxury Navbar */}
      <Navbar />

      {/* 2. Cinematic Hero Section */}
      <HeroSection />

      {/* 3. Value Proposition Matrix */}
      <ValuePropSection />

      {/* 4. Core Four Creative Studios Showcase */}
      <FeatureShowcase />

      {/* 5. Deep-Dive: AI Video Editing Editable Timeline */}
      <VideoEditingShowcase />

      {/* 6. Deep-Dive: AI Ad Studio Multi-Format Matrix */}
      <AdStudioShowcase />

      {/* 7. How Mx Studio Works */}
      <HowItWorksSection />

      {/* 8. Interconnected Workspace Bento */}
      <WorkspaceBento />

      {/* 9. Transparent Pricing & 3-Day Free Trial */}
      <PricingSection />

      {/* 10. Comprehensive Honest FAQs */}
      <FaqSection />

      {/* 11. Final Conversion CTA */}
      <FinalCtaSection />

      {/* 12. Multi-Column Footer */}
      <Footer />
    </div>
  );
}
