import React from 'react'
import '../styles/hero.css'
import Image from 'next/image'

import like from '../assets/like-icon.svg'
import heart from '../assets/heart-icon.svg'
import dollar from '../assets/dollar-icon.svg'
import heroImg from '../assets/hero-img.svg'
const Hero = () => {
  return (
    <div className='font-grotesk text-black mt-20 py-16 w-full flex flex-col  items-center relative'>

        <Image src={heart} className='absolute left-[10%] top-[5%]'></Image>
        <Image src={like} className='absolute right-[10%] top-[10%]'></Image>
        <Image src={dollar} className='absolute left-[20%] top-[30%]'></Image>
        <Image src={heart} className='absolute right-[20%] top-[35%]'></Image>
        <Image src={like} className='absolute left-[22%] top-[65%]'></Image>
        <Image src={dollar} className='absolute right-[15%] top-[60%]'></Image>


        <h2 className='font-onest text-3xl'>ELEVATING BRANDS, ACCELERATING SALES</h2>
        <div className="flex h-[50px] md:h-[98px] gap-3 text-center justify-center overflow-hidden ease-in-out ">
            <p className="w-fit font-grotesk font-black text-[60px]">Together We </p>
            
            <div className="font-grotesk font-black text-[60px]">
                <span className="wordspins  block" >Craft</span>
                <span className="wordspins block">Build</span>
                <span className="wordspins block">Grow</span>
            </div>
         </div>

         <Image src={heroImg} className='h-[60vh]' height={400} alt='img'></Image>
        

    </div>
  )
}

export default Hero