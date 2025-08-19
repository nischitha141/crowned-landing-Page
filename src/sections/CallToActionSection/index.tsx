import Image from "next/image";
import React from "react";
import Link from "next/link";
import { APP_LINKS } from "@/constants/links";

const index = () => {
  return (
    <div id="section-five" className="my-16 md:my-20 mt-0 p-6 md:p-14 py-16 md:py-24 bg-[#8459AB] text-white flex flex-col items-center justify-center gap-6 md:gap-10 relative">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bowlby font[400] text-[#FAFAFA] text-center z-0 leading-tight">
        IT&apos;S YOUR TURN TO GET <br /> CROWNED 👑
      </h2>
       <div className="mt-2 md:mt-4 flex flex-col sm:flex-row gap-4 sm:gap-4">
                <Link href={APP_LINKS.APPLE_STORE} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 md:px-4 py-2 md:py-1 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer w-full sm:w-auto">
                  <Image
                    src="/assets/apple.svg"
                    alt="App Store"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] md:text-[12px] text-nowrap">Download on the</span>
                    <span className="font-bold text-sm md:text-lg">App Store</span>
                  </div>
                </Link>
                <Link href={APP_LINKS.GOOGLE_PLAY} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 md:px-4 py-2 md:py-1 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer w-full sm:w-auto">
                  <Image
                    src="/assets/playstore.svg"
                    alt="Google Play"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] md:text-[12px] text-nowrap">Get it on</span>
                    <span className="font-bold text-sm md:text-lg">Google Play</span>
                  </div>
                </Link>
               
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
