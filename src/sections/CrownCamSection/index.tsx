import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
      <div className="p-4 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-4 my-16 md:my-20 mt-16 mb-0 md:mt-[200px]">
          <div className='relative flex items-center justify-center md:mt-0 mt-28 h-[250px] md:h-auto order-2 md:order-1'>
              <Image className='-z-0 absolute md:bottom-[18%] bottom-[30%] left-[14%] w-[50px] h-[50px] md:w-[70px] md:h-[70px]' src='/assets/sixth_section_dots.svg' alt='polygon' width={70} height={70} />
              <Image className='z-50 absolute -top-[40%] right-[22%] w-[50px] h-[50px] md:w-[70px] md:h-[70px]' src='/assets/sixth_section_dollar.svg' alt='polygon' width={70} height={70} />
              <Image className='z-10 absolute left-[15%] -top-[30%] w-[200px] h-[200px] md:w-[300px] md:h-[300px]' src='/assets/sixth_section_background.svg' alt='polygon' width={300} height={300} />
              <Image className='z-40 absolute -top-[23%] w-[200px] h-[200px] md:w-[300px] md:h-[300px]' src='/assets/sixth_section_image.png' alt='polygon' width={300} height={300} />
              <Image className='z-30 absolute left-[18%] top-[10%] w-[30px] h-[75px] md:w-[40px] md:h-[100px]' src='/assets/sixth_section_share.svg' alt='polygon' width={40} height={100} />

          </div>
          <div className='flex flex-col gap-6 md:gap-10 items-center md:items-start justify-center text-center md:text-left order-1 md:order-2'>
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-bowlby font-[400] text-[#424242] leading-tight">
                  LIGHTS. CROWN.<br/> CASH. 🎥 💸
              </h3>
              <p className="font-sans font-[600] text-lg md:text-2xl text-[#424242] max-w-md md:max-w-none">
                  🎥 Use #CrownCam on TikTok and Snapchat<br /> 💰 Get cash when your video pops off<br />
                  🔥 No likes needed. Just good vibes + views.
        </p>
          </div>
    </div>
  )
}

export default index