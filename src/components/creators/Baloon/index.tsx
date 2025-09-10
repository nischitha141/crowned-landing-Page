import React from "react";

const index = () => {
  return (
    <>
      {/* Hide balloons on very small screens, show smaller ones on mobile */}
      <div className="hidden sm:block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] bg-white rounded-full absolute top-1/4 sm:top-1/3 left-[5%] sm:left-[10%]"></div>
      <div className="hidden sm:block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] bg-[#D9B8D5] rounded-full absolute top-1/4 sm:top-1/3 right-[5%] sm:right-[10%]"></div>
      <div className="hidden md:block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] bg-black rounded-full absolute top-[55%] sm:top-[58%] right-[8%] sm:right-[11%]"></div>
      <div className="hidden md:block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] bg-[#DBEDFB] rounded-full absolute bottom-[18%] sm:bottom-[20%] right-[20%] sm:right-[25%]"></div>

      <div className="hidden md:block transform -rotate-[25deg] absolute bottom-[22%] sm:bottom-[26%] left-[18%] sm:left-[22%]">
        <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] bg-[#FEC6C7] rounded-full"></div>
        <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] bg-[#DBEDFB] rounded-full -mt-3 sm:-mt-4 lg:-mt-5"></div>
      </div>
    </>
  );
};

export default index;
