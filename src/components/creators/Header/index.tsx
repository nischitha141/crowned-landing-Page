import { APP_LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="relative flex items-center justify-between m-5">
      <Link href={"/"} className="cursor-pointer z-[500]">
        <div className="text-[#583A73] font-jakarta text-xl md:text-2xl flex items-center gap-2 relative">
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

      <div className="rounded-[40px] border-4 border-black flex font-bowlby text-lg text-white w-fit">
        <Link href="/brands">
          <button className="cursor-pointer text-white py-4 px-8 border-r-4 border-black bg-[#D9CCE5E0] rounded-l-[40px] hover:bg-[#C8B8D6] transition-all duration-200">
            Brands
          </button>
        </Link>

        <button className="cursor-pointer text-white py-4 px-8 bg-gradient-to-t from-[#583A73] to-[#8459AB] rounded-r-[40px]">
          Creators
        </button>
      </div>

      <div className="p-2 border-[2px] border-[#212121] h-[40px] shadow-[6px_6px_0px_#000000] bg-[#D9CCE5E0] z-10 flex items-center justify-center gap-2 hover:shadow-[9px_9px_0px_#000000] hover:opacity-90 transition-all duration-200">
        <Link
          href={APP_LINKS.APPLE_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            className=""
            src="/assets/black_apple.svg"
            alt="Apple"
            width={30}
            height={30}
          />
        </Link>
        <div className="w-[2px] h-full bg-black"></div>
        <Link
          href={APP_LINKS.GOOGLE_PLAY}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            src="/assets/black_android.svg"
            alt="Android"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default index;
