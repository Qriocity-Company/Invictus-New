"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import arrow from '../assets/arrow.svg'
import { usePathname } from 'next/navigation'

const FooterTop = () =>{
    return (
        <div className='bg-white w-full p-8 py-8 md:py-16 block md:flex justify-around relative'>

            <div className='flex flex-col items-center md:items-end font-grotesk font-bold text-[40px] md:text-[80px]'>
                <h1 className=''>Let's bring your</h1>
                <h1 className=''>ideas to life</h1>

            </div>

            <div className='w-full md:w-auto md:block flex justify-end md:justify-normal mt-6 md:mt-0'>
                <div className=' rounded-full flex justify-center items-center bg-black text-white text-base md:text-lg font-semibold  h-[130px] w-[130px] md:h-[250px] md:w-[250px]  hover:bg-[#0C7D55] hover:scale-110 transition-all duration-500 text-center p-4'>
                    Connect with us
                </div>
            </div>
            <Image src={arrow}  alt="img" className='w-[140px] md:w-auto absolute bottom-[22%] md:bottom-[10%] left-[15%] md:left-[52%]'></Image>
        </div>
    )
}

const FooterBottom = () =>{
   
    

    return(
        <div className="block md:flex w-full text-lg py-4 md:py-8 px-4 md:px-12  font-grotesk font-semibold justify-between">

            <div className='w-[100%] md:w-[50%] flex gap-2 md:gap-0 flex-col justify-between'>

                <div>
                    <div className='text-[#ADADAD]'>mail us</div>
                    <div>info@invictus.com</div>
                </div>

                <div>
                    <div className='text-[#ADADAD]'>even better, call us</div>
                    <div>+91-9944878589 +91-7530070101</div>
                </div>

            </div>
            <div className='mt-6 md:mt-0 grid row-span-2 gap-y-2 md:gap-y-4'>
                <div className='text-[#ADADAD]'>let's be friends</div>
                <div className='grid grid-cols-3 grid-rows-2 gap-x-12 md:gap-x-40 gap-y-8'>

                    <a href="">Facebook</a>
                    <a href="" >Instagram</a>
                    <a href="" >Youtube</a>
                    <a href="" >Linkedin</a>
                    <a href="" >Twitter</a>
                    <a href="" >Quora</a>

                </div>
            </div>

        </div>
    )
}

const Footer = () => {

    const pathname = usePathname()
    const [show,setShow] = useState(true);

    useEffect(()=>{
        
        console.log(pathname)
        if(pathname=='/contact'){
            setShow(false)
        }
    },[])

  return (
    <div className='w-full bg-white'>

        {
            show && <FooterTop/> 
        }
        <FooterBottom/>

    </div>
  )
}

export default Footer