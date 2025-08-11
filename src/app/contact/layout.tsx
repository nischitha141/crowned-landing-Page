export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FFFAF1] relative overflow-x-hidden">
      <div className='w-[300px] h-[300px] bg-gradient-to-tr from-[#8459AB] to-[#A47EC6CC] rounded-full absolute -top-[1%] -left-[5%] blur-[200px] z-30'></div>
      {children}
    </div>
  );
}
