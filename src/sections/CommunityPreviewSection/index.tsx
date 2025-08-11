import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="my-10 p-6 flex flex-col items-center justify-center gap-8 mt-[10px] relative">
      <div className="relative h-[400px] w-full">
        <div className="w-[200px] absolute top-0 right-1/2 transform translate-x-1/2  rotate-[10deg] border-8  border-[#F8A80D] rounded-2xl text-[#FAFAFA]  bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-2 p-4">
          <p className="font-jakarta font-extrabold text-[13px]">
            🔥 Best Person
          </p>
          <p className="font-sans font-[700] text-[11px] text-">
            Just launched my new project! Excited to share it with the community
            🚀
          </p>
        </div>

        <div className="w-[250px] absolute top-[10%] left-[12%] transform -rotate-6 border-8  border-[#F8A80D] pb-10 rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">
            🔥 Best Person
          </p>
          <p className="font-sans font-[700] text-[11px]">
            Just launched my new project! Excited to share it with the community
            🚀
          </p>
        </div>

        <div className="w-[300px] h-[150px]  absolute bottom-[5%] left-[5%] transform -rotate-[10deg]  border-8  border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">
            🔥 Best Person
          </p>
          <p className="font-sans font-[700] text-[11px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="w-[250px] absolute top-[10%] right-[12%] transform rotate-6 border-8  border-[#F8A80D] pb-10 rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">
            🔥 Best Person
          </p>
          <p className="font-sans font-[700] text-[11px]">
            Just launched my new project! Excited to share it with the community
            🚀
          </p>
        </div>

        <div className="w-[300px] h-[150px]  absolute bottom-[5%] right-[5%] transform rotate-[10deg]  border-8  border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">
            🔥 Best Person
          </p>
          <p className="font-sans font-[700] text-[11px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <Image
          className="absolute -bottom-[100px] right-1/2 transform translate-x-1/2"
          src="/assets/crown.svg"
          alt="crown"
          width={300}
          height={300}
        />
      </div>

      <div>
        <h3 className="text-6xl font-bowlby font-[400] text-[#424242] text-center">
          Watch the love spread.
          <br />
          and see your inbox flood
        </h3>
      </div>
    </div>
  );
};

export default index;
