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
      positon: false,
    },
    {
      id: 2,
      number: "02",
      title: "EARN AS YOU GROW",
      description:
        "Get paid when fans repost, extend your chain, or catch you in action on Crown Cam.",
      numberPosition: { top: "-115px" },
      positon: false,
    },
    {
      id: 3,
      number: "03",
      title: "RISE FAST, EARN CRED",
      description:
        "Level up with XP, unlock upgrades, and get early access to verification and pro analytics.",
      numberPosition: { top: "-130px" },
      positon: true,
    },
    {
      id: 4,
      number: "04",
      title: "COLLAB WITH BRANDS THAT GET IT",
      description:
        "Run trend-first challenges and monetize collabs with bold brands.",
      numberPosition: { top: "-120px", right: "-30px" },
      positon: true,
    },
  ];

  return (
    <div className="mb-12 sm:mb-16 lg:mb-20 relative px-4 sm:px-6 lg:px-0">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bowlby text-[#424242] text-center my-5 mb-12 sm:mb-16 lg:mb-20 relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
        <div className="relative px-2 sm:px-4">
          Benefits
          <Image
            src="/assets/crown.svg"
            height={70}
            width={70}
            alt="crown"
            className="absolute -top-4 sm:-top-7 -left-1 sm:-left-2 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
          />
        </div>
      </h3>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative bg-purple-200 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] p-6 sm:p-8 lg:p-12 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: "#FDEAC5" }}
            >
              {/* Large background number with shadow effect */}

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4 sm:gap-6 lg:gap-8">
                <h3
                  className={`${
                    card.positon ? "text-end" : "text-start"
                  } text-base sm:text-lg lg:text-xl font-sans font-[900] text-black mb-2 sm:mb-2 lg:mb-4`}
                >
                  {card.title}
                </h3>

                <div className="flex items-center justify-between gap-2 sm:gap-4 relative">
                  <div
                    className={`relative w-full ${
                      card.positon ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className="absolute w-full text-center text-[#AA7105] font-syne text-[120px] sm:text-[180px] lg:text-[220px] font-[400] -top-[50px] sm:-top-[100px] lg:-top-[130px]"
                    >
                      {card.number}
                    </div>
                    <div className="absolute top-[40px] sm:top-[60px] lg:top-[70px] w-full h-[15px] sm:h-[70px] lg:h-[90px] bg-white blur-xl sm:blur-2xl"></div>
                  </div>

                  <p
                    className={`w-full font-sans text-[#484848] font-[600] text-sm sm:text-base lg:text-[16px] leading-relaxed ${
                      card.positon ? "order-1" : "order-2"
                    }`}
                  >
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
