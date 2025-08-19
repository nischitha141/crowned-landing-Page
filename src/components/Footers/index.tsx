"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="my-28  flex items-center justify-between gap-5 ">
      <div className="flex flex-col items-start justify-start">
        <Link href={"/"} className="cursor-pointer">
          <div className="text-[#583A73] font-jakarta text-3xl flex items-center gap-2 relative">
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
        <p className="font-sans font-extrabold text-md">
          Give Them Their Flowers.
        </p>
        <p className="font-sans font-[400] italic text-md">
          Crown friends with real moments of love,
          <br /> recognition & gratitude.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <ul className="font-sans font-extrabold text-xl flex  items-center justify-center gap-8">
            <li>
              <Link href={"/"} className="underline">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-two")}
                className="cursor-pointer underline"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-three")}
                className="cursor-pointer underline"
              >
                How it Works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-four")}
                className="cursor-pointer underline"
              >
                Rewards
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-five")}
                className="cursor-pointer underline"
              >
                Crown Cam
              </button>
            </li>
            <li>
              <Link href={"/contact"} className="underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 mt-7 ">
          <ul className="font-sans font-extrabold text-lg flex  items-center justify-center gap-8">
            <li>
              <Link href={"/terms"} className="underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={"/policy"} className="underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <Image
            src="/assets/instagram.svg"
            alt="Instagram"
            width={25}
            height={25}
          />
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <Image src="/assets/tiktok.svg" alt="TikTok" width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default index;
