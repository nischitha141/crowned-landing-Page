"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { APP_LINKS } from "@/constants/links";

const index = () => {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 250;
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;

      const elementTop = element.offsetTop;
      const scrollPosition =
        elementTop -
        headerHeight -
        (viewportHeight - headerHeight - elementHeight) / 2;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="section-five" className="my-8 sm:my-12 lg:my-16 xl:my-20 mx-4 sm:mx-6 lg:mx-10 xl:mx-20 mt-0 p-4 sm:p-6 lg:p-10 xl:p-14 py-8 sm:py-12 lg:py-16 xl:py-24 bg-[#8459AB] text-white flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bowlby font[400] text-[#FAFAFA] text-center z-0 leading-tight px-2 sm:px-4">
              BE THE BRAND BEHIND THE NEXT VIRAL CHAIN.
      </h2>
       <div className="mt-2 sm:mt-2 lg:mt-4 flex flex-col sm:flex-row gap-4 sm:gap-4">
                <button 
            onClick={() => handleNavigation("early-access-form")}
            className="w-full sm:w-auto text-nowrap border-2 sm:border-4 border-[#212121] bg-[#E1D6EA] shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] py-2 sm:py-1.5 px-4 sm:px-3 h-[44px] sm:h-[50px] font-bowlby font-[400] text-sm sm:text-sm xl:text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[6px_6px_0px_#000000] sm:hover:shadow-[9px_9px_0px_#000000] hover:opacity-90 transition-all duration-200">
            JOIN THE WAITLIST
          </button>
              </div>
      <Image
        className="absolute top-[8%] md:top-[12%] left-[5%] md:left-[10%] w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
        src="/assets/star_1.svg"
        alt="polygon"
        width={30}
        height={30}
      />
     
      <Image
        className="absolute top-[3%] md:top-[5%] left-1/2 w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={40}
        height={40}
      />
      <Image
        className="absolute top-[6%] md:top-[10%] right-[8%] md:right-[15%] w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={20}
        height={20}
      />

      <Image
        className="absolute bottom-[5%] md:bottom-[8%] left-[5%] md:left-[10%] w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={50}
        height={50}
      />

      <Image
        className="absolute bottom-[5%] md:bottom-[8%] right-[5%] md:right-[10%] w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={30}
        height={30}
      />

      <Image
        className="absolute bottom-[5%] md:bottom-[8%] right-1/2 w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default index;
