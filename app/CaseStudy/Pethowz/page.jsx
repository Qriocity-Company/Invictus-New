import React from 'react'
import headerImg from '../../../assets/CaseStudy/pethowz/pethowz-header.png'

import second from '../../../assets/CaseStudy/pethowz/pethowz-second.png'
import third from '../../../assets/CaseStudy/pethowz/pehowz-third.png'
import logo2 from '../../../assets/CaseStudy/pethowz/logo-white.svg'
import logo1 from '../../../assets/CaseStudy/pethowz/logo-black.svg'




import Image from 'next/image'
import ProblemSolved from '@/components/ProblemSolved'
import SocialMedia from '@/components/SocialMedia'

const Header = ({img,content}) => {
    return (
      <div className='bg-black flex items-center justify-end relative w-full font-grotesk pt-10'>
  
          <h2 className='absolute z-10 text-white font-[600] text-[24px] md:text-[48px] md:leading-[62px] top-[70%] md:top-1/2 translate-y-[-50%] left-[5%] w-[90%] md:w-[42%]'>{content}</h2>
  
          <div className=' brightness-50 md:brightness-100'>
            <Image src={img} alt='img'></Image>
  
          </div>
          
      </div>
    )
}

const BrandingPethowz = () => {

    return (
      <div className='flex flex-col gap-6 md:gap-12 font-grotesk pb-12 md:pb-16 w-[90%]'>
  
        <div className={` flex flex-col md:flex-row w-full justify-around items-center  py-6 md:py-20 gap-6 md:gap-4`}>
  
          <div className='bg-black p-20  flex items-center justify-center md:w-[50%]'>
            <Image src={logo1} alt='img' ></Image>
          </div>
  
          <div className='bg-white p-20  border-2 border-[#B0B0B0] md:w-[50%] flex items-center justify-center'>
            <Image src={logo2} alt='img'></Image>
          </div>
        </div>

        <div className='w-[99.8%] block md:flex gap-0'>
            <div className='flex w-full md:w-1/2 h-[100px] md:h-[140px] border-none'>
                <div className='bg-[#FF9062] w-[50%] h-full'>

                </div>
                <div className='bg-[rgb(255,192,46)] w-[50%] h-full '>

                </div>
            </div>
            <div className='flex w-full md:w-1/2 h-[100px] md:h-[140px] border-none'>
                <div className='bg-[#FAB326] w-[40%] h-full border-none'>

                </div>
                <div className='bg-[#EC9400] w-[20%] h-full'>

                </div>
                <div className='bg-[#676767] w-[20%] h-full'>

                </div>
                <div className='bg-[#000000] w-[20%] h-full'>

                </div>
            </div>
           
        </div>
        
   
        
          
  
      </div>
    )
  }

  const Plan = () => {
    return (
      <div className='w-full my-12 md:my-20 font-grotesk bg-[#F2EEE4] flex justify-center items-center py-12'>

        <div className='w-[90%]'>
            <h1 className='font-[800] text-3xl md:text-[60px] md:leading-[57px]'>Lead Generation Campaigns</h1>
    
            <p className='font-[500] md:text-[30px] md:leading-[42px] mt-8 md:mt-12'>A lead generation strategy is an overarching plan for getting prospective customers to share their contact information with you and opt into marketing or sales communications (i.e., become leads).</p>

            <p className='font-[500] md:text-[30px] leading-[42px]'>A good lead generation strategy allows you to :</p>
            <ul className='font-[500] md:text-[30px] leading-[42px] list-disc pl-8'>
                <li>Populate your sales pipeline.</li>
                <li>Build an email distribution list.</li>
                <li>Identify the highest-quality prospects (i.e., conduct lead qualification).</li>
                <li>Personalize your marketing and sales efforts.</li>
            </ul>
        </div>
          
      </div>
    )
  }
  
const page = () => {
  return (
    <div className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk bg-[#FFFDF8]'>

        <Header img={headerImg} content={"We Dreamt, Planned, Executed and Scaled Pethowz to reach 1 Million Customers"}/>

        <ProblemSolved content={"Struggling to generate leads for pet boarding"}/>

        <SocialMedia isfb={true} isinsta={true} iswhatsapp={true} isx={false}/>


        {/* Branding */}
        <div className='w-[90%]'>
            <h1 className='font-[800] text-3xl md:text-[60px] md:leading-[59px]'>Complete Design Branding</h1>
        </div>
        <Image src={second} alt='pethowz' className='mt-12 w-[92%] object-cover'></Image>
        
        <BrandingPethowz/>
        <Image src={second} alt='pethowz' className='w-[93%]'></Image>
        <div className='w-[90%] mt-10'>
            <h1 className='font-[800] text-3xl md:text-[60px] md:leading-[59px]'>Brand Awareness Campaign</h1>
        </div>
        <div className='w-[90%] mt-6 flex justify-center'>
            <Image src={third} alt='pethowz' className='w-[100%] object-cover'></Image>
        </div>

        
        <Plan/>

    </div>
  )
}

export default page