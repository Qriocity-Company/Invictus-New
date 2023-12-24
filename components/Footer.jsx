import React from 'react'
import Image from 'next/image'
import arrow from '../assets/arrow.svg'
const FooterTop = () =>{
    return (
        <div className='bg-white w-full p-8 py-16 flex justify-around relative'>

            <div className='flex flex-col items-end font-grotesk font-bold text-[80px]'>
                <h1 className=''>Let's bring your</h1>
                <h1 className=''>ideas to life</h1>

            </div>

            <div>
                <div className=' rounded-full flex justify-center items-center bg-black text-white text-lg font-semibold h-[250px] w-[250px]'>
                    Connect with us
                </div>
            </div>
            <Image src={arrow} className='absolute bottom-[10%] left-[52%]'></Image>
        </div>
    )
}

const FooterBottom = () =>{
   
    return(
        <div className="flex w-full text-lg py-8 px-12  font-grotesk font-semibold justify-between">

            <div className='w-[50%] flex flex-col justify-between'>

                <div>
                    <div className='text-[#ADADAD]'>mail us</div>
                    <div>info@invictus.com</div>
                </div>

                <div>
                    <div className='text-[#ADADAD]'>even better, call us</div>
                    <div>+91-9944878589 +91-7530070101</div>
                </div>

            </div>
            <div className=' grid row-span-2 gap-y-4'>
                <div className='text-[#ADADAD]'>let's be friends</div>
                <div className='grid grid-cols-3 grid-rows-2 gap-x-40 gap-y-8'>

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
  return (
    <div className='w-full bg-white'>
        <FooterTop/>
        
        <FooterBottom/>

    </div>
  )
}

export default Footer