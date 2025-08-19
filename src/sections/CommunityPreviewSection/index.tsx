import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="my-8 md:my-10 p-4 md:p-6 flex flex-col items-center justify-center gap-6 md:gap-8 mt-[10px] relative">
      
      {/* Mobile Layout - Stacked Cards */}
      <div className="md:hidden flex flex-col items-center gap-4 md:gap-6 w-full px-2 md:px-4">
        <div className="w-full border-4 md:border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-2 p-3 md:p-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            ❤️ Most Loved
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            The one who makes everyone feel seen, heard, and hyped up.
          </p>
        </div>

        <div className="w-full border-4 md:border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-3 md:p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-3 md:gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            💡 Genius Mind
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
           That friend who somehow knows everything — from random trivia to life hacks that actually work.
          </p>
        </div>

        <div className="w-full border-4 md:border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-3 md:p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-3 md:gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            🔥 Viral Star
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            Every post hits different — it&apos;s only a matter of time before the world catches on.
          </p>
        </div>

        <div className="w-full border-4 md:border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-3 md:p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-3 md:gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            🌟 Secret Hero
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            Always there for others, lifting people up without seeking the spotlight.
          </p>
        </div>

        <div className="w-full border-4 md:border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-3 md:p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-3 md:gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            👑 Funniest Friend
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            You&apos;ve single-handedly carried the group chat with memes, roasts, and perfect comebacks.
          </p>
        </div>

        <Image
          className="mt-0 md:mt-6 w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
          src="/assets/crown.svg"
          alt="crown"
          width={150}
          height={150}
        />
      </div>

      {/* Desktop Layout - Overlapping Cards */}
      <div className="hidden md:block relative h-[350px] lg:h-[400px] w-full">
        <div className="w-[200px] absolute top-0 right-1/2 transform translate-x-1/2 rotate-[10deg] border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-2 p-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            ❤️ Most Loved
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            The one who makes everyone feel seen, heard, and hyped up.
          </p>
        </div>

        <div className="w-[250px] absolute top-[10%] left-[12%] transform -rotate-6 border-8 border-[#F8A80D] pb-10 rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            💡 Genius Mind
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
           That friend who somehow knows everything — from random trivia to life hacks that actually work.
          </p>
        </div>

        <div className="w-[300px] h-[150px] absolute bottom-[5%] left-[5%] transform -rotate-[10deg] border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            🔥 Viral Star
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            Every post hits different — it&apos;s only a matter of time before the world catches on.
          </p>
        </div>

        <div className="w-[250px] absolute top-[10%] right-[12%] transform rotate-6 border-8 border-[#F8A80D] pb-10 rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            🌟 Secret Hero
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            Always there for others, lifting people up without seeking the spotlight.
          </p>
        </div>

        <div className="w-[300px] h-[150px] absolute bottom-[5%] right-[5%] transform rotate-[10deg] border-8 border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-sm md:text-[13px]">
            👑 Funniest Friend
          </p>
          <p className="font-sans font-[700] text-xs md:text-[11px] leading-relaxed">
            You&apos;ve single-handedly carried the group chat with memes, roasts, and perfect comebacks.
          </p>
        </div>

        <Image
          className="absolute -bottom-[80px] md:-bottom-[100px] right-1/2 transform translate-x-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
          src="/assets/crown.svg"
          alt="crown"
          width={300}
          height={300}
        />
      </div>

      <div className="mt-4 md:mt-8">
        <h3 className="text-3xl -mt-8 md:mt-0 md:text-5xl lg:text-6xl font-bowlby font-[400] text-[#424242] text-center leading-tight px-4">
          Watch the love spread.
          <br />
          and see your inbox flood
        </h3>
      </div>
    </div>
  );
};

export default index;
