import Image from "next/image";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FFFAF1] relative overflow-x-hidden overflow-y-hidden">
      <div className="absolute -top-[1%] md:-left-[5%] -left-[15%] w-[600px] h-[600px] z-20">
        <Image
          src="/assets/blob-1.png"
          alt="Decorative Background"
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      <div className="absolute top-1/2 md:-right-[20%] -right-[40%] w-[600px] h-[600px] z-20">
        <Image
          src="/assets/blob-2.png"
          alt="Decorative Background"
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-[5%] md:-left-[20%] -left-[50%] w-[600px] h-[600px] z-20">
        <Image
          src="/assets/blob-3.png"
          alt="Decorative Background"
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute -top-[1%] -left-[5%] blur-[200px] z-10'></div> */}
      {/* <div className="w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute top-1/2 -right-[10%] blur-[200px] z-0"></div> */}
      {/* <div className="w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute -bottom-[1%] -left-[1%] blur-[200px] z-0"></div> */}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
