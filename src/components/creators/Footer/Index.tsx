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
    <div className="my-5 md:my-12 mx-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-5 bg-[#E0E0E0] p-6 md:p-10 relative z-30 pointer-events-auto">
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
        <div className="flex gap-6 md:gap-10">
          <ul className="font-sans font-extrabold text-sm md:text-lg flex items-center justify-center gap-4 md:gap-8">
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

export default Footer;
