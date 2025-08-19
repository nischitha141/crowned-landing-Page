"use client";
import { useEffect } from "react";
import Header from "@/components/Headers";
import Footer from "@/components/Footers";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import CommunityPreviewSection from "@/sections/CommunityPreviewSection";
import EarningsSection from "@/sections/EarningsSection";
import CrownCamSection from "@/sections/CrownCamSection";
import CallToActionSection from "@/sections/CallToActionSection";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the # symbol
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page has loaded properly
        setTimeout(() => {
          const headerHeight = 100; // Header height
          const viewportHeight = window.innerHeight;
          const elementHeight = element.offsetHeight;
          
          // Calculate position to center the section in the visible viewport
          const elementTop = element.offsetTop;
          const scrollPosition = elementTop - headerHeight - (viewportHeight - headerHeight - elementHeight) / 2;
          
          window.scrollTo({
            top: Math.max(0, scrollPosition), // Ensure we don't scroll above the page
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="container bg-[#FFFAF1] min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CommunityPreviewSection />
      <EarningsSection />
      <CrownCamSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
