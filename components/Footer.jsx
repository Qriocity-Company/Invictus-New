"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import arrow from '../assets/arrow.svg'
import { usePathname } from 'next/navigation'

import AOS from 'aos';
import 'aos/dist/aos.css';

const FooterTop = () =>{

    useEffect(() => {
        AOS.init({
             duration: 600,
             once: false,
             
           })
     }, [])

    return (
        <div className='bg-[#FFFDF8] w-full p-8 py-8 md:py-16 block md:flex justify-around relative'>

            <div data-aos="flip-up" className='flex flex-col items-center md:items-end font-grotesk font-[500] text-[40px] md:text-[80px]'>
                <h1 className=''>Let's bring your</h1>
                <h1 className=''>ideas to life</h1>

            </div>

            <div data-aos="fade-right" className=' w-full md:w-auto md:block flex justify-end md:justify-normal mt-6 md:mt-0'>
                <div className='font-grotesk rounded-full flex justify-center items-center bg-black text-white text-base md:text-2xl font-semibold  h-[130px] w-[130px] md:h-[250px] md:w-[250px]  hover:bg-[#0C7D55] hover:scale-105 transition-all duration-500 text-center p-4'>
                    Connect with us
                </div>
            </div>
            <Image src={arrow} data-aos="fade-right" alt="img" className='w-[140px] md:w-auto absolute bottom-[22%] md:bottom-[10%] left-[15%] md:left-[52%]'></Image>
        </div>
    )
}

const FooterBottom = () =>{
   
    useEffect(() => {
        AOS.init({
             duration: 600,
             once: false,
             
           })
     }, [])

    return(
        <div  id='anchor' className="block md:flex w-full text-lg md:text-2xl py-4 md:py-8 md:pb-12 px-4 md:px-20  font-grotesk font-[500] justify-between overflow-hidden bg-[#FFFDF8]">

            <div data-aos="fade-up" data-aos-anchor="#anchor" data-aos-duration="2000" className='w-[100%] md:w-[50%] flex gap-2 md:gap-8 flex-col justify-between'>

                <div className='flex flex-col gap-4'>
                    <div className='text-[#ADADAD]'>mail us</div>
                    <a href="mailto:contact@invictusglobaltech.com">contact@invictusglobaltech.com</a>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='text-[#ADADAD]'>even better, call us</div>
                    <div className='flex gap-8'>
                        <a href="tel:+916369757054">
                        +91-6369757054
                        </a>
                        <a href="tel:+917530070101">
                        +91-7530070101
                        </a>
                    </div>
                    
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor="#anchor" className='mt-6 md:mt-0 grid row-span-2 gap-y-2 md:gap-y-4'>
                <div className='text-[#ADADAD]'>let's be friends</div>
                <div className='grid grid-cols-3 grid-rows-2 gap-x-12 md:gap-x-40 gap-y-8'>

                    <a href="https://www.facebook.com/people/Invictus-Global-Tech/61557394517942/" target="_blank" rel="noopener noreferrer" className='hover:text-[#17A9FD] hover:scale-105 transition-all duration-300'>Facebook</a>
                    <a href="https://www.instagram.com/invictusglobaltech/" target="_blank" rel="noopener noreferrer" className='hover:text-[#833AB4] hover:scale-105 transition-all duration-300'>Instagram</a>
                    <a href="https://www.youtube.com/@invictusglobaltech-offl" target="_blank" rel="noopener noreferrer" className='hover:text-[#FF0000] hover:scale-105 transition-all duration-300'>Youtube</a>
                    <a href="https://www.linkedin.com/company/96644104/admin/dashboard/" target="_blank" rel="noopener noreferrer" className='hover:text-[#0A66C2] hover:scale-105 transition-all duration-300'>Linkedin</a>
                    {/* <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-300'>X</a>
                    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className='hover:text-[#B92B27] hover:scale-105 transition-all duration-300'>Quora</a> */}

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
    },[pathname])

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