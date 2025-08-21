import { APP_LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Header from "../../components/brands/Header";
import Content from "../../components/brands/HeroContent";
import Baloon from "../../components/brands/Baloon";
import BrandCrowns from "@/components/brands/BrandCrowns";
import ViralStrategy from "@/components/brands/ViralCard";
import Footer from "@/components/brands/Footer/Index";

import Waitlist from "@/components/brands/Waitlist";
import EarlyAccess from "@/components/brands/EarlyAccess";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col relative">
      <div className="min-h-[95vh] bg-[#F0EBF5] rounded-[40px] p-10 m-5 relative flex flex-col">
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
