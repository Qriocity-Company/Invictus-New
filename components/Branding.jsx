"use client"

import React,{useEffect} from 'react'
import qriocityBlack from '../assets/CaseStudy/qriocity/qriocity-logo-black.svg'
import qriocityWhite from '../assets/CaseStudy/qriocity/qriocity-logo-white.svg'
import Image from 'next/image'

const Branding = ({firstColor,secondColor,thirdColor,fourthColor}) => {

  useEffect(() => {
   
    console.log(firstColor,secondColor,thirdColor,fourthColor)
   
  }, [firstColor,secondColor,thirdColor,fourthColor])
  
  return (
    <div className='flex flex-col gap-6 md:gap-12 font-grotesk pb-12 md:pb-16 w-[90%]'>

      <h1 className='font-[800] text-3xl md:text-[60px] md:leading-[59px]'>Complete Design Branding</h1>

      <div className={`bg-[${firstColor}] flex flex-col md:flex-row w-full justify-around items-center px-6 md:px-0 py-6 md:py-20 gap-6 md:gap-0 md:rounded-[44px]`} style={{backgroundColor:firstColor}}>

        <div className='bg-black p-20 rounded-[22px] flex items-center justify-center'>
          <Image src={qriocityBlack} alt='img'></Image>
        </div>

        <div className='bg-white p-20 rounded-[22px] flex items-center justify-center'>
          <Image src={qriocityWhite} alt='img'></Image>
        </div>
      </div>

      <div className='flex w-full h-[320px]'>

        <div className={`w-[40%] flex flex-col h-full`}>
          <div className={`bg-[${firstColor}] h-[90%] w-full`} style={{backgroundColor:firstColor}}>

          </div>
          <div className='h-[10%] w-full flex'>
            <div className={`w-[40%] bg-[${firstColor}] opacity-[0.80] h-full`} style={{backgroundColor:firstColor}}>

            </div>
            <div className={`w-[30%] bg-[${firstColor}] opacity-[0.60] h-full`} style={{backgroundColor:firstColor}}>

            </div>
            <div className={`w-[15%] bg-[${firstColor}] opacity-[0.40] h-full`} style={{backgroundColor:firstColor}}>

            </div>
            <div className={`w-[15%] bg-[${firstColor}] opacity-[0.20] h-full`} style={{backgroundColor:firstColor}}>
  
            </div>
          </div>
        </div>
        <div className={`w-[30%] flex flex-col h-full`}>
          <div className={`bg-[${secondColor}] h-[90%] w-full`} style={{backgroundColor:secondColor}}>

          </div>
          <div className='h-[10%] w-full flex'>
            <div className={`w-[25%] bg-[${secondColor}] opacity-[0.80] h-full`} style={{backgroundColor:secondColor}}>

            </div>
            <div className={`w-[25%] bg-[${secondColor}] opacity-[0.60] h-full`} style={{backgroundColor:secondColor}}>

            </div>
            <div className={`w-[25%] bg-[${secondColor}] opacity-[0.40] h-full`} style={{backgroundColor:secondColor}}>

            </div>
            <div className={`w-[25%] bg-[${secondColor}] opacity-[0.20] h-full`} style={{backgroundColor:secondColor}}>

            </div>
          </div>
        </div>
        <div className={`w-[15%] flex flex-col h-full`}>
          <div className={`bg-[${thirdColor}] h-[90%] w-full`} style={{backgroundColor:thirdColor}}>

          </div>
          <div className='h-[10%] w-full flex'>
            <div className={`w-[33.33%] bg-[${thirdColor}] opacity-[0.80] h-full`} style={{backgroundColor:thirdColor}}>

            </div>
            <div className={`w-[33.33%] bg-[${thirdColor}] opacity-[0.60] h-full`} style={{backgroundColor:thirdColor}}>

            </div>
            <div className={`w-[33.33%] bg-[${thirdColor}] opacity-[0.20] h-full`} style={{backgroundColor:thirdColor}}>

            </div>
          </div>
        </div>
        <div className={`w-[15%] flex flex-col h-full`}>
          <div className={`bg-[${fourthColor}] h-[90%] w-full`} style={{backgroundColor:fourthColor}}>

          </div>
          <div className='h-[10%] w-full flex'>
            <div className={`w-[33.33%] bg-[${fourthColor}] opacity-[0.80] h-full`} style={{backgroundColor:fourthColor}}>

            </div>
            <div className={`w-[33.33%] bg-[${fourthColor}] opacity-[0.60] h-full`} style={{backgroundColor:fourthColor}}>

            </div>
            <div className={`w-[33.33%] bg-[${fourthColor}] opacity-[0.20] h-full`} style={{backgroundColor:fourthColor}}>

            </div>
          </div>
        </div>


      </div>
        

    </div>
  )
}

export default Branding