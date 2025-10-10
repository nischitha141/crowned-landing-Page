"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { APP_LINKS } from "@/constants/links";

interface SubmitHeaderProps {
  backgroundColor?: string;
}

const SubmitHeader: React.FC<SubmitHeaderProps> = ({ backgroundColor = "#FFFAF1" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    // Navigate to home with hash for submit pages
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div style={{ backgroundColor }} className="w-full">
      <div className="flex items-center justify-between py-6 md:py-10 md:pt-12 border-transparent px-3" style={{ backgroundColor }}>
        {/* Logo */}
        <Link href={"/"} className="cursor-pointer z-[500]">
          <div className="text-[#583A73] font-jakarta text-xl md:text-2xl flex items-center gap-2 relative">
            <h3 className="font-[800]">CROWNED</h3>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FCD310] rounded-full"></div>
            <Image
              className="absolute -top-3 md:-top-5 left-1/2 right-1/2 transform -translate-x-1/2"
              src="/assets/crown.svg"
              alt="Crowned"
              width={50}
              height={40}
            />
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-5 font-sans text-[#212121] text-lg font-[900] flex-1 justify-center">
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

        {/* Desktop App Store Buttons */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="p-2 border-[2px] border-[#212121] h-[40px] shadow-[6px_6px_0px_#000000] bg-gradient-to-t from-[#583A73] to-[#8459AB] z-10 flex items-center justify-center gap-2 hover:shadow-[9px_9px_0px_#000000] hover:opacity-90 transition-all duration-200">
            <Link
              href={APP_LINKS.APPLE_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/assets/apple.svg"
                alt="Apple"
                width={30}
                height={30}
              />
            </Link>
            <div className="w-[2px] h-full bg-white"></div>
            <Link
              href={APP_LINKS.GOOGLE_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/assets/android.svg"
                alt="Android"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 cursor-pointer"
        >
          <span
            className={`w-6 h-0.5 bg-[#583A73] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#583A73] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#583A73] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full border-t border-[#FDE6D4] shadow-lg z-[9999]" style={{ backgroundColor }}>
          <div className="flex flex-col p-4 space-y-4 w-full">
            <button
              onClick={() => {
                handleNavigation("section-two");
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-3 px-4 text-[#212121] font-sans font-[900] text-lg hover:bg-[#FDE6D4] rounded transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => {
                handleNavigation("section-three");
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-3 px-4 text-[#212121] font-sans font-[900] text-lg hover:bg-[#FDE6D4] rounded transition-colors cursor-pointer"
            >
              How it Works
            </button>
            <button
              onClick={() => {
                handleNavigation("section-four");
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-3 px-4 text-[#212121] font-sans font-[900] text-lg hover:bg-[#FDE6D4] rounded transition-colors cursor-pointer"
            >
              Rewards
            </button>
            <button
              onClick={() => {
                handleNavigation("section-five");
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-3 px-4 text-[#212121] font-sans font-[900] text-lg hover:bg-[#FDE6D4] rounded transition-colors cursor-pointer"
            >
              Crown Cam
            </button>
            <Link
              href={"/contact"}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-3 px-4 text-[#212121] font-sans font-[900] text-lg hover:bg-[#FDE6D4] rounded transition-colors cursor-pointer"
            >
              Contact Us
            </Link>

            {/* Mobile App Store Buttons */}
            <div className="pt-4 border-t border-[#FDE6D4] w-full">
              <div className="w-full p-3 border-[2px] border-[#212121] shadow-[4px_4px_0px_#000000] bg-gradient-to-t from-[#583A73] to-[#8459AB] flex items-center justify-center gap-4 hover:shadow-[6px_6px_0px_#000000] transition-all">
                <Link
                  href={APP_LINKS.APPLE_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Image
                    src="/assets/apple.svg"
                    alt="Apple"
                    width={25}
                    height={25}
                  />
                </Link>
                <div className="w-[1px] h-6 bg-white"></div>
                <Link
                  href={APP_LINKS.GOOGLE_PLAY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Image
                    src="/assets/android.svg"
                    alt="Android"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitHeader;