"use client";
import Image from "next/image";
import React, { useRef } from "react";

const BrandCrowns = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -470,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 470,
        behavior: "smooth",
      });
    }
  };

  const brandCards = [
    {
      gradient: "from-[#75c6c2] to-[#FFFFFF]",
      text: "Crown someone who deserves a Spotify Premium gift.Crown someone who deserves a Spotify Premium gift.",
    },
    {
      gradient: "from-[#8459AB] to-[#FFFFFF]",
      text: "Crown the friend who needs a Nike day off.",
    },
    {
      gradient: "from-[#75c6c2] to-[#FFFFFF]",
      text: "Crown your favorite crypto enthusiast.",
    },
    {
      gradient: "from-[#FF6B6B] to-[#FFFFFF]",
      text: "Crown the gamer who deserves a Steam gift card.",
    },
    {
      gradient: "from-[#4ECDC4] to-[#FFFFFF]",
      text: "Crown someone special with an Amazon gift.",
    },
    {
      gradient: "from-[#45B7D1] to-[#FFFFFF]",
      text: "Crown the movie lover with Netflix premium.",
    },
    {
      gradient: "from-[#96CEB4] to-[#FFFFFF]",
      text: "Crown the foodie with a DoorDash surprise.",
    },
    {
      gradient: "from-[#FFEAA7] to-[#FFFFFF]",
      text: "Crown the fashionista with a style upgrade.",
    },
  ];

  return (
    <div className="mx-20 my-20">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <h3 className="text-5xl font-bowlby text-[#424242]">
            Popular Brand Crowns
          </h3>

          <Image
            src="assets/lock.svg"
            alt="Crowned"
            width={50}
            height={40}
            className="w-[70px] h-[70px]"
          />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={scrollLeft}
            className="w-14 h-14 border-[2px] border-[#E8E0EF] bg-[#FAFAFA]   hover:bg-[#d0d0d0] transition-colors rounded-full cursor-pointer flex items-center justify-center "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="w-14 h-14 bg-[#e7e7e7] hover:bg-[#c8c8ca] transition-colors rounded-full cursor-pointer flex items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide w-full my-12  "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {brandCards.map((card, index) => (
          <div
            key={index}
            className={`z-10  shrink-1 p-2 bg-gradient-to-b ${card.gradient} rounded-2xl min-w-[450px]  flex items-center justify-center flex-col flex-shrink-0`}
          >
            <div className="z-50 p-3 text-[#424242] py-8 font-jakarta text-xl font-[800] bg-white rounded-2xl w-full h-full flex items-center justify-center text-start ">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCrowns;
