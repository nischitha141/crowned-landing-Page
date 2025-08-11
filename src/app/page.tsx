import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import CommunityPreviewSection from "@/sections/CommunityPreviewSection";
import EarningsSection from "@/sections/EarningsSection";
import CrownCamSection from "@/sections/CrownCamSection";
import CallToActionSection from "@/sections/CallToActionSection";

export default function Home() {
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
