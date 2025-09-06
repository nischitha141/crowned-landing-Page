"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SOCIAL_LINKS } from "@/constants/links";

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
    <div className="my-16 md:my-28 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-5 px-4">
      {/* Logo Section */}
      <div className="flex flex-col items-center md:items-start justify-start text-center md:text-left">
        <Link href={"/"} className="cursor-pointer">
          <div className="text-[#583A73] font-jakarta text-2xl md:text-3xl flex items-center gap-2 relative">
            <h3 className="font-[800]">CROWNED</h3>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FCD310] rounded-full"></div>
            <Image
              className="absolute -top-6 md:-top-9 left-1/2 right-1/2 transform -translate-x-1/2"
              src="/assets/crown.svg"
              alt="Crowned"
              width={50}
              height={40}
            />
          </div>
        </Link>
        <p className="font-sans font-extrabold text-sm md:text-md mt-2">
          Give Them Their Flowers.
        </p>
        <p className="font-sans font-[400] italic text-sm md:text-md">
          Crown friends with real moments of love,
          <br /> recognition & gratitude.
        </p>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-6">
          <ul className="font-sans font-extrabold text-base md:text-xl flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <li>
              <Link href={"/"} className="underline whitespace-nowrap">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-two")}
                className="cursor-pointer underline whitespace-nowrap"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-three")}
                className="cursor-pointer underline whitespace-nowrap"
              >
                How it Works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-four")}
                className="cursor-pointer underline whitespace-nowrap"
              >
                Rewards
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("section-five")}
                className="cursor-pointer underline whitespace-nowrap"
              >
                Crown Cam
              </button>
            </li>
            <li>
              <Link href={"/contact"} className="underline whitespace-nowrap">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 md:gap-10">
          <ul className="font-sans font-extrabold text-sm md:text-lg flex items-center justify-center gap-4 md:gap-8">
            <li>
              <Link href={"/terms"} className="underline whitespace-nowrap">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={"/policy"} className="underline whitespace-nowrap">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center justify-center gap-4 md:gap-5">
        <Link href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </div>
        </Link>
        <Link href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image src="/assets/tiktok.svg" alt="TikTok" width={20} height={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default index;
