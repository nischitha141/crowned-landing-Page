"use client";
import Image from "next/image";
import React from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const BrandCrowns = () => {
  const brandCards = [
    {
      gradient: "from-[#FF9674] to-[#FFFFFF]",
      text: "🔥 Crown the smartest person you follow.",
    },
    {
      gradient: "from-[#61A4A1] to-[#FFFFFF]",
      text: "Crown the next big rapper in your city.",
    },
    {
      gradient: "from-[#F8A80D] to-[#FFFFFF]",
      text: "Crown someone who should collab with me.",
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

  const { scrollContainerRef, scrollLeft, scrollRight, handleMouseEnter, handleMouseLeave } = useInfiniteScroll(brandCards.length);

  return (
    <div className="mx-4 sm:mx-8 lg:mx-20 my-8 sm:my-12 lg:my-20">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 sm:gap-2 items-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bowlby text-[#424242] leading-tight">
            Crowns That Hit Different
          </h3>

          {/* Hide lock icon on mobile, show on desktop */}
          <Image
            src="assets/lock.svg"
            alt="Crowned"
            width={50}
            height={40}
            className="hidden sm:block sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px]"
          />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 sm:w-14 sm:h-14 border-[2px] border-[#E8E0EF] bg-[#FAFAFA] hover:bg-[#d0d0d0] transition-colors rounded-full cursor-pointer flex items-center justify-center"
          >
            <svg width="16" height="14" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[20px] sm:h-[17px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.35338 0.79696C8.90261 0.35798 8.17177 0.35798 7.721 0.79696L0.795379 7.54143C0.344608 7.98041 0.344608 8.69213 0.795378 9.13111L7.721 15.8756C8.17177 16.3146 8.90261 16.3146 9.35338 15.8756C9.80415 15.4366 9.80415 14.7249 9.35338 14.2859L4.39823 9.46035H22.3884C23.0259 9.46035 23.5427 8.95708 23.5427 8.33627C23.5427 7.71546 23.0259 7.21219 22.3884 7.21219L4.39823 7.21219L9.35338 2.38665C9.80415 1.94767 9.80415 1.23594 9.35338 0.79696Z" fill="#9E9E9E"/>
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e7e7e7] hover:bg-[#c8c8ca] transition-colors rounded-full cursor-pointer flex items-center justify-center"
          >
            <svg width="16" height="14" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[20px] sm:h-[17px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.9591 0.633874C15.4099 0.194894 16.1407 0.194894 16.5915 0.633874L23.5171 7.37834C23.9679 7.81732 23.9679 8.52905 23.5171 8.96803L16.5915 15.7125C16.1407 16.1515 15.4099 16.1515 14.9591 15.7125C14.5083 15.2735 14.5083 14.5618 14.9591 14.1228L19.9143 9.29726H1.92407C1.28658 9.29726 0.7698 8.794 0.769801 8.17318C0.769801 7.55237 1.28659 7.04911 1.92407 7.04911L19.9143 7.04911L14.9591 2.22356C14.5083 1.78458 14.5083 1.07285 14.9591 0.633874Z" fill="#583A73"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide w-full my-6 sm:my-8 lg:my-12"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {brandCards.map((card, index) => (
          <div
            key={`original-${index}`}
            className={`z-10 shrink-0 p-2 sm:p-3 lg:p-3.5 bg-gradient-to-b ${card.gradient} rounded-2xl sm:rounded-3xl w-[70vw] sm:w-auto sm:min-w-[320px] sm:max-w-[380px] max-w-[70vw] flex items-center justify-center flex-col`}
          >
            <div className="z-50 text-[#424242] py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8 font-jakarta text-base sm:text-lg lg:text-xl font-[800] bg-white rounded-xl sm:rounded-2xl w-full h-full flex items-center justify-center text-center min-h-[100px] sm:min-h-[140px] lg:min-h-[160px]">
              {card.text}
            </div>
          </div>
        ))}
        {brandCards.map((card, index) => (
          <div
            key={`duplicate-${index}`}
            className={`z-10 shrink-0 p-2 sm:p-3 lg:p-3.5 bg-gradient-to-b ${card.gradient} rounded-2xl sm:rounded-3xl w-[70vw] sm:w-auto sm:min-w-[320px] sm:max-w-[380px] max-w-[70vw] flex items-center justify-center flex-col`}
          >
            <div className="z-50 text-[#424242] py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8 font-jakarta text-base sm:text-lg lg:text-xl font-[800] bg-white rounded-xl sm:rounded-2xl w-full h-full flex items-center justify-center text-center min-h-[100px] sm:min-h-[140px] lg:min-h-[160px]">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCrowns;
