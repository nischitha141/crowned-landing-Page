import Image from "next/image";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FFFAF1] relative overflow-x-hidden">
      {/* <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute -top-[1%] -left-[5%] blur-[200px] z-10 pointer-events-none'></div> */}
      <div className="absolute -top-[1%] md:-left-[5%] -left-[15%] w-[600px] h-[600px] z-10 pointer-events-none">
        <Image
          src="/assets/blob-1.png"
          alt="Decorative Background"
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {children}
    </div>
  );
}
