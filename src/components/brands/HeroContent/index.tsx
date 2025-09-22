"use client";
import React from 'react'
import EmailCTA from "@/components/shared/EmailCTA";

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
    <div className="flex flex-col items-center justify-between my-8 sm:my-16 text-center gap-12 sm:gap-24 h-full px-4 sm:px-0">
          <div className="flex flex-col gap-6 sm:gap-9 text-center w-full sm:w-[80vw] lg:w-[50vw] items-center justify-center">
            <h1 className="text-[#212121] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bowlby leading-tight">
              Start Crown Chains That Sell.{" "}
            </h1>

            <p className="text-[#212121] font-sans text-lg sm:text-xl md:text-2xl mt-2 sm:mt-5 leading-relaxed">
              From remix culture to real conversions — launch viral Crown
              campaigns that reach the right Gen Z audiences.
            </p>

            {/* <button
              onClick={() => handleNavigation("early-access-form")}
              className="w-full max-w-[400px] sm:w-[400px] border-2 border-[#212121] bg-[#E1D6EA] shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] py-3 sm:py-1.5 px-3 h-[50px] sm:h-[60px] font-bowlby font-[400] text-sm sm:text-sm xl:text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[6px_6px_0px_#000000] sm:hover:shadow-[9px_9px_0px_#000000] hover:opacity-90 transition-all duration-200">
              GET ME EARLY ACCESS 🔥
            </button> */}

        <EmailCTA targetPage="/brands/submit" buttonText="Get Early Access" />
          </div>

          <div className="bg-[#111827] text-white font-sans text-sm sm:text-base rounded-full py-2 sm:py-3 px-4 sm:px-6 max-w-full text-center">
            ⭐ Loved by creators from TikTok, YouTube & Instagram
          </div>
        </div>
  )
}

export default index