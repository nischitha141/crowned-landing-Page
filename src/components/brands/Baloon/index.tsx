import React from 'react'

const index = () => {
  return (
      <>
          <div className="w-[60px] h-[60px] bg-white rounded-full absolute top-1/3 left-[10%]"></div>
        <div className="w-[60px] h-[60px] bg-[#D9B8D5] rounded-full absolute top-1/3 right-[10%]"></div>
        <div className="w-[60px] h-[60px] bg-black rounded-full absolute top-1/2 right-[15%]"></div>
        <div className="w-[60px] h-[60px] bg-[#DBEDFB] rounded-full absolute bottom-[20%] right-[25%] "></div>

        <div className="transform -rotate-[25deg] absolute bottom-[20%] left-[25%]">
          <div className="w-[60px] h-[60px] bg-[#FEC6C7] rounded-full "></div>
          <div className="w-[60px] h-[60px] bg-[#DBEDFB] rounded-full -mt-5"></div>
        </div>
          </>
  )
}

export default index