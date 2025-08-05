import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div id="section-five" className="my-20 p-14 py-24 bg-[#8459AB] text-white flex flex-col items-center justify-center gap-10 relative">
      <h2 className="text-7xl font-bowlby font[400] text-[#FAFAFA] text-center z-0">
        IT&apos;S YOUR TURN TO GET <br /> CROWNED 👑
      </h2>
       <div className="mt-4 flex space-x-4">
                <button className="bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2">
                  <Image
                    src="/assets/apple.svg"
                    alt="App Store"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] text-nowrap">Download on the</span>
                    <span className=" font-bold text-lg ">App Store</span>
                  </div>
                </button>
                <button className="bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2">
                  <Image
                    src="/assets/playstore.svg"
                    alt="App Store"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] text-nowrap">Get it on</span>
                    <span className=" font-bold text-lg ">Google Play</span>
                  </div>
                </button>
               
              </div>
      <Image
        className="absolute top-[12%]  left-[10%]"
        src="/assets/star_1.svg"
        alt="polygon"
        width={30}
        height={30}
      />
     
      <Image
        className="absolute top-[5%] left-1/2"
        src="/assets/star_2.svg"
        alt="polygon"
        width={40}
        height={40}
      />
      <Image
        className="absolute top-[10%] right-[15%]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={20}
        height={20}
      />

      <Image
        className="absolute bottom-[8%] left-[10%]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={50}
        height={50}
      />

      <Image
        className="absolute bottom-[8%] right-[10%]"
        src="/assets/star_2.svg"
        alt="polygon"
        width={30}
        height={30}
      />

      <Image
        className="absolute bottom-[8%] right-1/2"
        src="/assets/star_2.svg"
        alt="polygon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default index;
