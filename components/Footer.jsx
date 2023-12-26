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
        <div className='bg-white w-full p-8 py-8 md:py-16 block md:flex justify-around relative'>

            <div data-aos="flip-up" className='flex flex-col items-center md:items-end font-grotesk font-bold text-[40px] md:text-[80px]'>
                <h1 className=''>Let's bring your</h1>
                <h1 className=''>ideas to life</h1>

            </div>

            <div data-aos="fade-right" className=' w-full md:w-auto md:block flex justify-end md:justify-normal mt-6 md:mt-0'>
                <div className='font-grotesk rounded-full flex justify-center items-center bg-black text-white text-base md:text-2xl font-semibold  h-[130px] w-[130px] md:h-[250px] md:w-[250px]  hover:bg-[#0C7D55] hover:scale-110 transition-all duration-500 text-center p-4'>
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
        <div  id='anchor' className="block md:flex w-full text-lg md:text-2xl py-4 md:py-8 md:pb-12 px-4 md:px-20  font-grotesk font-semibold justify-between overflow-hidden">

            <div data-aos="fade-up" data-aos-anchor="#anchor" data-aos-duration="2000" className='w-[100%] md:w-[50%] flex gap-2 md:gap-8 flex-col justify-between'>

                <div className='flex flex-col gap-4'>
                    <div className='text-[#ADADAD]'>mail us</div>
                    <div>info@invictus.com</div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='text-[#ADADAD]'>even better, call us</div>
                    <div className='flex gap-8'>
                        <div>
                        +91-9944878589
                        </div>
                        <div>
                        +91-7530070101
                        </div>
                    </div>
                    
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor="#anchor" className='mt-6 md:mt-0 grid row-span-2 gap-y-2 md:gap-y-4'>
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