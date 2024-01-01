import StudyHeader from '@/components/StudyHeader'
import React from 'react'
import Image from 'next/image'

import headerImg from '../../../assets/CaseStudy/law/headerImg.png'
import middleImg from '../../../assets/CaseStudy/law/middleImg.png'
import catalogue from '../../../assets/CaseStudy/law/catalogue.png'
import ad from '../../../assets/CaseStudy/law/ad.png'
import logoWhite from '../../../assets/CaseStudy/waterClick/waterClick-white.svg'
import logoBlack from '../../../assets/CaseStudy/waterClick/waterClick-black.svg'


import ProblemSolved from '@/components/ProblemSolved'
import SocialMedia from '@/components/SocialMedia'
import Branding from '@/components/Branding'
import Typography from '@/components/Typography'
import Plan from '@/components/Plan'

import '../../../styles/header.css'

const page = () => {
  return (
    <div className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk bg-[#FFFDF8]'>
        
        <StudyHeader water={true} content={"We Dreamt, Planned, Executed and Scaled Qriocity to reach 1 Million Customers"} img={headerImg}/>
        
        <ProblemSolved content={"Struggling to generate leads for Law Classes"}/>

        <SocialMedia isfb={true} isinsta={true} iswhatsapp={true} isx={true}/>

        <Branding  logo1={logoBlack} logo2={logoWhite} firstColor={"#2B4483"} secondColor={"#FF8049"} thirdColor={"#6BFFCA"} fourthColor={"#E5E5E5"} logoColor={"#6BFFCA"}/>

        <Typography font={"Sofia"}/>

        <div className='w-full flex items-center justify-center py-6'>

          <Image src={middleImg} alt='.'></Image>

        </div>
        <div className={`w-full flex items-center justify-center bg-[#6BFFCA] `}>

          <Image src={catalogue} alt='.' className='md:h-[100vh] object-cover'></Image>

        </div>

        <div className='w-full flex items-center justify-center bg-[#F2EEE4] py-10'>

          <Image src={ad} alt='.' className=''></Image>

        </div>
        

        <Plan/>

    </div>
  )
}

export default page