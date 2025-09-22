import React from "react";

import Header from "../../components/brands/Header";
import Content from "../../components/brands/HeroContent";
import Baloon from "../../components/brands/Baloon";
import BrandCrowns from "@/components/brands/BrandCrowns";
import ViralStrategy from "@/components/brands/ViralCard";
import Footer from "@/components/brands/Footer/Index";

import Waitlist from "@/components/brands/Waitlist";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col relative">
      <div className="min-h-auto md:min-h-[95vh] bg-[#F0EBF5] rounded-[20px] sm:rounded-[40px] p-4 sm:p-8 lg:p-10 m-2 sm:m-5 relative flex flex-col">
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
