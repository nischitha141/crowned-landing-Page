import { APP_LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="relative m-2 sm:m-5">
      {/* Mobile Layout: Two rows */}
      <div className="sm:hidden">
        {/* First row: Logo and App Store buttons */}
        <div className="flex items-center justify-between mb-4">
          <Link href={"/"} className="cursor-pointer z-[500]">
            <div className="text-[#583A73] font-jakarta text-lg flex items-center gap-1 relative">
              <h3 className="font-[800]">CROWNED</h3>
              <div className="w-1.5 h-1.5 bg-[#FCD310] rounded-full"></div>
              <Image
                className="absolute -top-3 left-1/2 right-1/2 transform -translate-x-1/2"
                src="/assets/crown.svg"
                alt="Crowned"
                width={35}
                height={30}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
          </Link>

          <div className="p-1.5 border-[2px] border-[#212121] h-[35px] shadow-[4px_4px_0px_#000000] bg-[#D9CCE5E0] z-10 flex items-center justify-center gap-1 hover:shadow-[6px_6px_0px_#000000] hover:opacity-90 transition-all duration-200">
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
                width={25}
                height={25}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </Link>
            <div className="w-[1px] h-full bg-black"></div>
            <Link
              href={APP_LINKS.GOOGLE_PLAY}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/assets/black_android.svg"
                alt="Android"
                width={25}
                height={25}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
        </div>

        {/* Second row: Brands/Creators tabs centered */}
        <div className="flex justify-center">
          <div className="rounded-[20px] border-2 border-black flex font-bowlby text-sm text-white">
            <button className="cursor-pointer py-2 px-3 border-r-2 border-black bg-gradient-to-t from-[#583A73] to-[#8459AB] rounded-l-[20px]">
              Brands
            </button>

            <Link href="/creators">
              <button className="cursor-pointer text-white py-2 px-3 bg-[#D9CCE5E0] rounded-r-[20px] hover:bg-[#C8B8D6] transition-all duration-200">
                Creators
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Single row */}
      <div className="hidden sm:flex items-center justify-between">
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
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
        </Link>

        <div className="rounded-[40px] border-4 border-black flex font-bowlby text-lg text-white">
          <button className="cursor-pointer py-4 px-8 border-r-4 border-black bg-gradient-to-t from-[#583A73] to-[#8459AB] rounded-l-[40px]">
            Brands
          </button>

          <Link href="/creators">
            <button className="cursor-pointer text-white py-4 px-8 bg-[#D9CCE5E0] rounded-r-[40px] hover:bg-[#C8B8D6] transition-all duration-200">
              Creators
            </button>
          </Link>
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
              style={{
                width: 'auto',
                height: 'auto',
              }}
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
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
