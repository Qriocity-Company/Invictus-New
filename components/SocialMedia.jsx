import React from 'react'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import x from '../assets/x.svg'
import whatsapp from '../assets/whatsapp.svg'
import Image from 'next/image'

const SocialMedia = ({isfb,isinsta,isx,iswhatsapp}) => {
  return (
    <div className='flex flex-col gap-6 md:gap-12 font-grotesk pb-16 w-[90%]'>
        <div className='p-4 px-12 border-2 border-[#D5D5D5] rounded-[40px] w-fit text-lg md:text-3xl text-black font-semibold  font-onest mx-auto md:mx-0'>SERVICES DID</div>

        <h1 className='font-[800] text-3xl md:text-[60px] md:leading-[59px] md:mt-0 mt-4'>Active Social Media Platforms</h1>

        <div className='flex md:gap-8  gap-6'>
            {isfb && <Image src={fb} alt='facebook' className='md:h-auto h-[50px] md:w-auto w-[50px]'></Image>}
            {isinsta && <Image src={insta} alt='instagram' className='md:h-auto h-[50px] md:w-auto w-[50px]'></Image>}
            {isx && <Image src={x} alt='x' className='md:h-auto h-[50px] md:w-auto w-[50px]'></Image>}
            {iswhatsapp && <Image src={whatsapp} alt='whatsapp' className='md:h-auto h-[50px] md:w-auto w-[50px]'></Image>}
        </div>

    </div>
  )
}

export default SocialMedia