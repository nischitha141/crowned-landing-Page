import Image from "next/image";
import React from "react";
import Link from "next/link";
import { APP_LINKS } from "@/constants/links";

const index = () => {
  return (
    <div id="section-one" className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 my-10 md:my-20 px-4 md:px-0">
      <div className="md:pl-4 flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-1">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-[400] text-[#424242] font-bowlby leading-tight">
          Who’s your MVP?
          <br /> Crown them. Get
          <br /> Crowned. Go Viral.
        </h1>
        <p className="my-4 md:my-5 text-[#212121] text-base md:text-xl max-w-md md:max-w-none">
          Crowned is a fun way to show love anonymously. <br /> Recognize
          friends. Build streaks. Spark a chain <br /> reaction.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full sm:w-auto">
          <Link href={APP_LINKS.APPLE_STORE} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 md:py-1 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
            <Image
              src="/assets/apple.svg"
              alt="App Store"
              width={40}
              height={40}
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
            />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-[12px] text-nowrap">Download on the</span>
              <span className="font-bold text-base md:text-lg">App Store</span>
            </div>
          </Link>
          <Link href={APP_LINKS.GOOGLE_PLAY} target="_blank" rel="noopener noreferrer" className="pl-8 bg-black text-white px-4 py-2 md:py-1 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
            <Image
              src="/assets/playstore.svg"
              alt="Google Play"
              width={40}
              height={40}
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
            />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-[12px] text-nowrap">Get it on</span>
              <span className="font-bold text-base md:text-lg">Google Play</span>
            </div>
          </Link>
          {/* <button className="bg-black text-white px-4 py-2 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2">
            <Image
              src="/assets/apple.svg"
              alt="App Store"
              width={60}
              height={60}
            />
            <div className="flex flex-col items-start">
              <span className="text-sm text-nowrap">Get it on</span>
              <span className="block font-bold text-2xl text-nowrap">
                Google Play
              </span>
            </div>
          </button> */}
        </div>
      </div>

      <div className="p-4 md:p-6 relative flex flex-col items-center justify-center mt-7 md:mt-1 order-2 md:order-1">
        <div className="relative">
          <div className="w-[280px] h-[280px] md:w-[375px] md:h-[375px] rounded-full bg-gradient-to-b from-[#FFCE00] via-[#EF258A] to-[#7650FF] relative overflow-hidden">
            <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2">
              <Image
                src="/assets/mobile.svg"
                alt="Phone"
                width={250}
                height={350}
                className="max-w-none w-[180px] h-[260px] md:w-[250px] md:h-[350px]"
              />
            </div>
          </div>
          <div className="absolute top-[-5%] left-1/2 transform -translate-x-1/2">
            <Image
              src="/assets/mobile_top.svg"
              alt="Phone"
              width={250}
              height={350}
              className="max-w-none w-[180px] h-[260px] md:w-[250px] md:h-[350px]"
            />
          </div>
        </div>

        <div className="absolute bottom-[20%] -left-[12%] md:-left-[15%] rounded-xl shadow-md p-1 transform -rotate-12 bg-gradient-to-b from-[#F8A80D] to-[#FFFFFF] scale-75 md:scale-100">
          <div className=" bg-white rounded-xl p-2 flex flex-col items-center ">
            <div className="flex items-center gap-2 text-[14px]">
              <span className="">🔥</span>
              <h3 className=" font-extrabold font-jakarta text-[#424242]">
                Best Person
              </h3>
            </div>
            <p className="text-[11px] font-bold text-[#616161] ">
              The kindest person I <br /> know!!!
            </p>
          </div>
        </div>

        <div className="absolute top-[30%] -right-[3%] md:-right-[5%] rounded-xl shadow-md p-1 transform rotate-[20deg] bg-[#f1f1f1] scale-75 md:scale-100">
          <div className=" bg-white rounded-xl p-2">
            <div className="flex items-center justify-center flex-col ">
              <h3 className="text-[12px] font-extrabold font-jakarta text-[#424242] text-center">
                You just received a crown
              </h3>
              <button className="text-[11px] text-white rounded-[100px] py-1.5 mt-3 px-4 bg-gradient-to-b from-[#583A73] to-[#8459AB] font-sans font-[700]">
                Click to unlock
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-[5%] -left-[8%] md:-left-[10%]">
          <Image src="/assets/crown.svg" alt="crown" width={125} height={100} className="w-[80px] h-[65px] md:w-[125px] md:h-[100px]" />
        </div>

        <div className="absolute -top-[20%] -right-[1%] md:-right-[2%]">
          <Image src="/assets/cloud.svg" alt="cloud" width={125} height={100} className="w-[80px] h-[65px] md:w-[125px] md:h-[100px]" />
        </div>

        <div className="absolute top-[5%] right-[12%] md:right-[15%]">
          <Image src="/assets/rain.svg" alt="rain" width={45} height={40} className="w-[30px] h-[26px] md:w-[45px] md:h-[40px]" />
        </div>
        <div className="absolute -bottom-[9%] right-0">
          <Image src="/assets/lock.svg" alt="lock" width={125} height={100} className="w-[80px] h-[65px] md:w-[125px] md:h-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default index;
