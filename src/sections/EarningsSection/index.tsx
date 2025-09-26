import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div
      id="section-four"
      className="flex flex-col md:flex-row items-center justify-start my-16 md:my-20 pt-16 md:pt-16 p-6 md:p-16 bg-[#8459AB] gap-8 md:gap-0 relative"
    >
      <div className="flex flex-col gap-6 md:gap-10 items-center md:items-start justify-start w-full md:w-[45vw] text-center md:text-left relative z-50">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bowlby font-[400] text-[#FAFAFA] leading-tight relative z-50">
          <span className="text-nowrap">EARN FROM</span> BEING CROWNED
        </h3>
        <p className="font-sans font-[600] text-lg md:text-xl text-[#FAFAFA] max-w-md md:max-w-none relative z-50">
          💰 2 ways to earn real money on Crowned: <br />
          1. Get friends to join with a subscription <br />
          2. Post UGC via Crown Cam on TikTok and earn through views (CPM)
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full h-[350px] md:h-[500px] md:before:content-[''] md:before:absolute md:before:w-0 md:before:h-0 md:before:border-l-[900px] md:before:border-r-[0px] md:before:border-t-[625px] md:before:border-l-transparent md:before:border-r-transparent md:before:border-t-[#D9CCE5] md:before:-top-[65px] md:before:-right-[65px] md:before:z-10 z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Image
            src="/assets/fifth_section_coin.svg"
            alt="polygon"
            width={550}
            height={550}
            className="w-[350px] h-[350px] md:w-[550px] md:h-[550px]"
          />
          <div className="absolute top-0 right-0 z-50">
            <Image
              src="/assets/arrow_down.svg"
              alt="polygon"
              width={60}
              height={60}
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
            />
          </div>

          <div className="absolute bottom-0 left-0 z-50">
            <Image
              src="/assets/arrow_up.svg"
              alt="polygon"
              width={60}
              height={60}
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
            />
          </div>
        </div>

        <div className="absolute top-[15%] left-[10%] md:top-[10%] md:left-0 z-50">
          <Image
            src="/assets/star_1.svg"
            alt="polygon"
            width={80}
            height={80}
            className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] "
          />
        </div>

        <div className="absolute bottom-[20%] left-[5%] md:bottom-[10%] md:left-[5%] z-50">
          <Image
            src="/assets/star_2.svg"
            alt="polygon"
            width={50}
            height={50}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
          />
        </div>

        <div className="hidden md:block absolute bottom-[15%] right-[5%] z-50">
          <Image
            src="/assets/star_2.svg"
            alt="polygon"
            width={50}
            height={50}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
          />
        </div>

        <div className="hidden md:block absolute bottom-0 right-1/3 z-50">
          <Image
            src="/assets/star_2.svg"
            alt="polygon"
            width={60}
            height={60}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          />
        </div>

        <div className="absolute top-[15%] right-[10%] md:top-0 md:right-0 z-50">
          <Image
            src="/assets/star_2.svg"
            alt="polygon"
            width={60}
            height={60}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          />
        </div>
        {/* <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div>
              <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div>
              <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div>
              <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div> */}
      </div>
    </div>
  );
};

export default index;
