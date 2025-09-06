"use client";
import React from 'react'

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
    <div className="flex flex-col items-center justify-between my-16 text-center gap-24 h-full">
          <div className="flex flex-col gap-9 text-center w-[50vw] items-center justify-center">
            <h1 className="text-[#212121] text-6xl font-bowlby">
              Start Crown Chains That Sell.{" "}
            </h1>

            <p className="text-[#212121] font-sans text-2xl mt-5">
              From remix culture to real conversions — launch viral Crown
              campaigns that reach the right Gen Z audiences.
            </p>

            <button 
              onClick={() => handleNavigation("early-access-form")}
              className=" w-[400px] text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[60px] font-bowlby font-[400] text-sm xl:text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90 transition-all duration-200">
              GET ME EARLY ACCESS 🔥
            </button>
          </div>

          <div className="bg-[#111827] text-white font-sans text-base rounded-full py-3 px-6">
            ⭐ Loved by creators from TikTok, YouTube & Instagram
          </div>
        </div>
  )
}

export default index