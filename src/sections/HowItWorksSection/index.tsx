import React from "react";
import Card from "@/components/SectionCard";

const index = () => {
  return (
    <div id="section-three" className="my-11 md:my-20 p-4 md:p-6 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-4 mt-20 md:mt-[150px]">
      <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-6 text-center md:text-left order-1 md:order-1">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bowlby font-[400] text-[#424242] leading-tight">
          HOW CROWNED WORKS?!
        </h3>
        <p className="text-[#545B5B] font-sans font-[400] text-lg md:text-2xl mt-2 md:mt-6 max-w-md md:max-w-none">
          Crown your friends. Get crowned back.
          <br className="hidden md:block" /> It&apos;s like a chain reaction of good vibes — <br className="hidden md:block" /> anonymous,
          viral, and a little bit chaotic 🔥
        </p>
      </div>
      <div className="relative flex items-center justify-center flex-col gap-6 md:gap-8 bg-gradient-to-tl from-[#583A73] to-[#8459AB] px-4 md:px-6 py-8 md:py-12 rounded-lg order-2 md:order-2">
        <div className="h-[250px] md:h-[300px] w-[2px] absolute right-1/2 transform -translate-x-1/2 z-0 bg-white"></div>

        {/* <div className="bg-[#F0F3EA] flex items-center justify-start p-2 rounded-lg w-full z-40 gap-5">
          <Image
            src="/assets/third_section_first_icon.svg"
            alt="Description"
            width={35}
            height={35}
          />
          <p className="text-[#002F2A] font-sans text-lg">
            Pick a Crown (like “Most Likely to Go Viral”)
          </p>
        </div> */}
        <Card text="Pick a Crown (like “Most Likely to Go Viral”)" imagesrc="/assets/third_section_first_icon.svg" />
        <Card text="Send it to a friend — anonymous 👀" imagesrc="/assets/third_section_second_icon.svg" />
        <Card text="They unlock it by crowning someone else" imagesrc="/assets/third_section_third_icon.svg" />
        <Card text="Build streaks. Get crowned. Go viral." imagesrc="/assets/third_section_fourth_icon.svg" />
    
      </div>
    </div>
  );
};

export default index;
