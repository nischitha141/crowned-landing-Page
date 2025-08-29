import Image from "next/image";
import React from "react";

const ViralStrategy = () => {
  const cards = [
    {
      id: 1,
      number: "01",
      title: "CHAIN REACTIONS OF HYPE",
      description:
        "Fans don’t just watch — they remix, repost, and chain your content. Every share builds hype.",
          numberPosition: { top: "-130px" },
      positon:false,
    },
      {
          id: 2,
          number: "02",
          title: "EARN AS YOU GROW",
          description:
              "Get paid when fans repost, extend your chain, or catch you in action on Crown Cam.",
          numberPosition: { top: "-115px" },
          positon:false,
    },
    {
      id: 3,
      number: "03",
      title: "RISE FAST, EARN CRED",
      description:
        "Level up with XP, unlock upgrades, and get early access to verification and pro analytics.",
        numberPosition: { top: "-130px" },
      positon:true,
    },
    {
      id: 4,
      number: "04",
      title: "COLLAB WITH BRANDS THAT GET IT",
      description:
        "Run trend-first challenges and monetize collabs with bold brands.",
       numberPosition: { top: "-120px", right: "-30px" },
       positon:true,
    },
  ];

  return (
    <div className=" mb-20 relative">
      <h3 className="relative flex items-center justify-center text-5xl font-bowlby text-[#424242] text-center my-5 mb-20">
        <div className="relative px-4 ">Benefits  <Image
                      src="/assets/crown.svg"
                      height={70}
                      width={70}
                      alt="crown"
                      className="absolute -top-7 -left-2 "
        
                  /> </div>
          </h3>
          
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative bg-purple-200 rounded-[50px] md:rounded-3xl p-4 md:p-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: "#FDEAC5" }}
            >
              {/* Large background number with shadow effect */}

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-8 ">
                      <h3 className={`${card.positon ? "text-end" : "text-start"}  text-sm md:text-xl font-sans font-[900] text-black  mb-2 md:mb-4`}>
                  {card.title}
                </h3>

                <div className="flex items-center justify-between gap-4 relative">
                  <div className={`relative w-full ${card.positon ? "order-2" : "order-1"}`}>
                    <div className={`absolute top-[${card.numberPosition.top}]   w-full text-center text-[#AA7105] font-syne text-[220px] font-[400]`}>
                      {card.number}
                    </div>
                    <div className="absolute top-[70px]  w-full h-[90px] bg-white blur-2xl"></div>
                  </div>

                  <p className={`w-full font-sans text-[#484848] font-[600] text-lg ${card.positon ? "order-1" : "order-2"}`}>
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Subtle gradient overlay for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 50%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViralStrategy;
