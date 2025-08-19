import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const index = () => {
  return (
    <div id="section-two" className="my-16 md:my-28 md:mt-32 bg-[#8459AB] flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-4">
      <div className="relative flex items-center justify-center p-4 mt-20 md:mt-0 md:p-0 order-2 md:order-1 h-[300px] md:h-auto">
        <Image className="absolute -z-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px]" src="/assets/second_section_last_polygon.svg" alt="polygon" width={400} height={400} />
        <Image className="absolute bottom-[10%] left-[10px] z-40 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="/assets/second_section_first_polygon.svg" alt="polygon" width={300} height={300} />
        <Image className="absolute z-50 w-[220px] h-[400px] md:w-[300px] md:h-[550px]" src="/assets/mobile_second.svg" alt="polygon" width={300} height={300} />
        <Image className="absolute left-[20%] transform rotate-12 z-40 w-[70px] h-[70px] md:w-[100px] md:h-[100px]" src="/assets/triangle_group.svg" alt="polygon" width={100} height={100} />
      </div>

      <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-6 text-white p-6 md:p-8 py-8 md:py-16 text-center md:text-left order-1 md:order-2">
        <h3 className="font-[400] text-3xl md:text-5xl lg:text-6xl font-bowlby leading-tight">WAIT, WHAT IS CROWNED?</h3>
        <p className="font-[600] font-sans text-lg md:text-2xl max-w-md md:max-w-none">It&apos;s a social recognition chain game. Crown your friends anonymously for being awesome<br className="hidden md:block" /> — and let the love ripple out.</p>
        <Button text="Try it Out 🔥" />
      </div>
    </div>
  );
};

export default index;
