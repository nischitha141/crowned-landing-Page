import Image from "next/image";
import React from "react";
import Link from "next/link";
import { APP_LINKS } from "@/constants/links";

const index = () => {
  return (
    <div
      id="section-five"
      className="my-16 md:my-20 md:mx-20 mx-10  mt-0 p-6 md:p-14 py-16 md:py-24 bg-[#AA7105] text-white flex flex-col items-center justify-center gap-6 md:gap-10 relative"
    >
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bowlby font[400] text-[#FAFAFA] text-center z-0 leading-tight">
        Be the first to drop Crowns that spark culture.
      </h2>
      <div className="mt-2 md:mt-4 flex flex-col sm:flex-row gap-4 sm:gap-4">
        <button className="text-nowrap border-4 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[50px] font-bowlby font-[400] text-sm xl:text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90 transition-all duration-200">
          JOIN THE WAITLIST
        </button>
      </div>
      <Image
        className="absolute top-[8%] md:top-[12%] left-[5%] md:left-[10%] w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
        src="/assets/star_1.svg"
        alt="polygon"
        width={30}
        height={30}
      />

      <Image
        className="absolute top-[3%] md:top-[5%] left-1/2 w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={40}
        height={40}
      />
      <Image
        className="absolute top-[6%] md:top-[10%] right-[8%] md:right-[15%] w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={20}
        height={20}
      />

      <Image
        className="absolute bottom-[5%] md:bottom-[8%] left-[5%] md:left-[10%] w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={50}
        height={50}
      />

      <Image
        className="absolute bottom-[5%] md:bottom-[8%] right-[5%] md:right-[10%] w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={30}
        height={30}
      />

      <Image
        className="absolute bottom-[5%] md:bottom-[8%] right-1/2 w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default index;
