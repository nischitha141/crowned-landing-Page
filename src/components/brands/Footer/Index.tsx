"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SOCIAL_LINKS } from "@/constants/links";

const Footer = () => {
  const handleNavigation = (sectionId: string) => {
    try {
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
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to simple navigation
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div className="my-4 sm:my-6 lg:my-8 xl:my-12 mx-4 sm:mx-6 lg:mx-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 lg:gap-5 bg-[#E0E0E0] p-4 sm:p-6 lg:p-8 xl:p-10 relative z-30 pointer-events-auto">
      {/* Logo Section */}
      <div className="flex flex-col items-center lg:items-start justify-start text-center lg:text-left">
        <Link href={"/"} className="cursor-pointer">
          <div className="text-[#583A73] font-jakarta text-xl sm:text-2xl lg:text-3xl flex items-center gap-1 sm:gap-2 relative">
            <h3 className="font-[800]">CROWNED</h3>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 bg-[#FCD310] rounded-full"></div>
            <Image
              className="absolute -top-4 sm:-top-6 lg:-top-9 left-1/2 right-1/2 transform -translate-x-1/2"
              src="/assets/crown.svg"
              alt="Crowned"
              width={50}
              height={40}
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
        </Link>
        <p className="font-sans font-extrabold text-xs sm:text-sm lg:text-md mt-2">
          Give Them Their Flowers.
        </p>
        <p className="font-sans font-[400] italic text-xs sm:text-sm lg:text-md">
          Crown friends with real moments of love,
          <br /> recognition & gratitude.
        </p>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 sm:mb-6">
          <ul className="font-sans font-extrabold text-sm sm:text-base lg:text-xl flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8">
            <li>
              <Link href={"/"} className="underline whitespace-nowrap hover:text-[#583A73] transition-colors cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNavigation("section-two");
                }}
                className="cursor-pointer underline whitespace-nowrap hover:text-[#583A73] transition-colors bg-transparent border-none p-0 text-inherit font-inherit"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNavigation("section-three");
                }}
                className="cursor-pointer underline whitespace-nowrap hover:text-[#583A73] transition-colors bg-transparent border-none p-0 text-inherit font-inherit"
              >
                How it Works
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNavigation("section-four");
                }}
                className="cursor-pointer underline whitespace-nowrap hover:text-[#583A73] transition-colors bg-transparent border-none p-0 text-inherit font-inherit"
              >
                Rewards
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNavigation("section-five");
                }}
                className="cursor-pointer underline whitespace-nowrap hover:text-[#583A73] transition-colors bg-transparent border-none p-0 text-inherit font-inherit"
              >
                Crown Cam
              </button>
            </li>
            <li>
              <Link href={"/contact"} className="underline whitespace-nowrap hover:text-[#583A73] transition-colors cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 sm:gap-6 lg:gap-10">
          <ul className="font-sans font-extrabold text-xs sm:text-sm lg:text-lg flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-8">
            <li>
              <Link 
                href={"/terms"} 
                className="underline whitespace-nowrap hover:text-[#583A73] transition-colors cursor-pointer inline-block"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link 
                href={"/policy"} 
                className="underline whitespace-nowrap hover:text-[#583A73] transition-colors cursor-pointer inline-block"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5">
        <Link href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
        </Link>
        <Link href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Image 
              src="/assets/tiktok.svg" 
              alt="TikTok" 
              width={16} 
              height={16}
              className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
