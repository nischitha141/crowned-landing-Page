"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const index = () => {
  const handleNavigation = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If we're on home page, scroll to section centered in viewport
      const element = document.getElementById(sectionId);
      if (element) {
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
      }
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div className=" pb-[1px] rounded-lg bg-gradient-to-r from-white via-80% via-[#FDE6D4] to-[#FFC2E9]">
      <div className="flex items-center justify-between py-10 pt-12 border-transparent px-3 bg-[#FFFAF1] ">
        <Link href={"/"} className="cursor-pointer">
          <div className="text-[#583A73] font-jakarta text-2xl flex items-center gap-2 relative">
            <h3 className="font-[800]">CROWNED</h3>
            <div className="w-2.5 h-2.5 bg-[#FCD310] rounded-full"></div>

            <Image
              className="absolute -top-9 left-1/2 right-1/2 transform -translate-x-1/2"
              src="/assets/crown.svg"
              alt="Crowned"
              width={70}
              height={60}
            />
          </div>
        </Link>
        <div className="flex items-center gap-5 font-sans text-[#212121] text-lg font-[900]">
          <button
            onClick={() => handleNavigation("section-two")}
            className="nav-button cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("section-three")}
            className="nav-button cursor-pointer"
          >
            How it Works
          </button>
          <button
            onClick={() => handleNavigation("section-four")}
            className="nav-button cursor-pointer"
          >
            Rewards
          </button>
          <button
            onClick={() => handleNavigation("section-five")}
            className="nav-button cursor-pointer"
          >
            Crown Cam
          </button>
          <Link href={"/contact"} className="nav-button cursor-pointer">
            Contact Us
          </Link>
        </div>
        <div className="relative flex items-center justify-center gap-5">
          <button className="text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[40px] font-bowlby font-[400] text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90  transition-all duration-200">
            FOR BRANDS & CREATORS 🔥
          </button>
          <div className="p-2 border-[2px] border-[#212121]  h-[40px] shadow-[6px_6px_0px_#000000] bg-gradient-to-t from-[#583A73] to-[#8459AB]   z-10 flex items-center justify-center gap-2 hover:shadow-[9px_9px_0px_#000000] hover:opacity-90  transition-all duration-200">
            <div className="cursor-pointer">
              <Image
                src="/assets/apple.svg"
                alt="Discord"
                width={30}
                height={30}
              />
            </div>
            <div className="w-[2px] h-full bg-white"></div>
            <div className="cursor-pointer">
              <Image
                src="/assets/android.svg"
                alt="Discord"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
