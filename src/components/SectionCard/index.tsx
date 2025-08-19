import Image from "next/image";
import React from "react";

interface SectionCardProps {
  text?: string;
  imagesrc?: string;
}
const index = ({ text, imagesrc }: SectionCardProps) => {
  return (
    <div className="bg-[#F0F3EA] flex items-center justify-start p-3 md:p-2 rounded-lg w-full z-40 gap-3 md:gap-5">
      <Image
        src={imagesrc || "/assets/third_section_first_icon.svg"}
        alt="Description"
        width={35}
        height={35}
        className="w-[28px] h-[28px] md:w-[35px] md:h-[35px] flex-shrink-0"
      />
      <p className="text-[#002F2A] font-sans text-sm md:text-lg leading-relaxed">
        {text || "Pick a Crown (like “Most Likely to Go Viral”)"}
      </p>
    </div>
  );
};

export default index;
