import React from "react";

import Header from "../../components/creators/Header";
import Content from "../../components/creators/HeroContent";
import Baloon from "../../components/creators/Baloon";
import BrandCrowns from "@/components/creators/BrandCrowns";
import ViralStrategy from "@/components/creators/ViralCard";
import Footer from "@/components/creators/Footer/Index";

import Waitlist from "@/components/creators/Waitlist";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col relative">
      <div className="min-h-auto sm:min-h-[95vh] bg-[#FFFAF1] rounded-[20px] sm:rounded-[40px] p-4 sm:p-8 lg:p-10 m-2 sm:m-5 relative flex flex-col">
        <Header />
        <Content />
        <Baloon />
      </div>

      <BrandCrowns />

      <ViralStrategy />

      <Waitlist />

      <Footer />
    </div>
  );
};

export default page;
