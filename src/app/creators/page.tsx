import React from "react";

import Header from "../../components/creators/Header";
import Content from "../../components/creators/HeroContent";
import Baloon from "../../components/creators/Baloon";
import BrandCrowns from "@/components/creators/BrandCrowns";
import ViralStrategy from "@/components/creators/ViralCard";
import Footer from "@/components/creators/Footer/Index";

import Waitlist from "@/components/creators/Waitlist";
import EarlyAccess from "@/components/creators/EarlyAccess";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col relative">
      <div className="min-h-[95vh] bg-[#FFFAF1] rounded-[40px] p-10 m-5 relative flex flex-col">
        <Header />
        <Content />
        <Baloon />
      </div>

      <BrandCrowns />

      <ViralStrategy />

      <EarlyAccess />

      <Waitlist />

      <Footer />
    </div>
  );
};

export default page;
