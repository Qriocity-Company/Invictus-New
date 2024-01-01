import StudyHeader from '@/components/StudyHeader'
import React from 'react'
import Image from 'next/image'

import headerImg from '../../../assets/CaseStudy/waterClick/waterClick-topImage.png'
import middleImg from '../../../assets/CaseStudy/waterClick/waterClick-middleImg.png'
import waterAd from '../../../assets/CaseStudy/waterClick/waterClick-ad.png'
import logoWhite from '../../../assets/CaseStudy/waterClick/waterClick-white.svg'
import logoBlack from '../../../assets/CaseStudy/waterClick/waterClick-black.svg'


import ProblemSolved from '@/components/ProblemSolved'
import SocialMedia from '@/components/SocialMedia'
import Branding from '@/components/Branding'
import Typography from '@/components/Typography'
import Plan from '@/components/Plan'

const page = () => {
  return (
    <div className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk bg-[#FFFDF8]'>
        
        <StudyHeader water={true} content={"We Dreamt, Planned, Executed and Scaled Qriocity to reach 1 Million Customers"} img={headerImg}/>
        
        <ProblemSolved content={"Struggling to generate leads for Law Classes"}/>

        <SocialMedia isfb={true} isinsta={true} iswhatsapp={true} isx={true}/>

        <Branding  logo1={logoBlack} logo2={logoWhite} firstColor={"#0071B9"} secondColor={"#1BA1E5"} thirdColor={"#29D8FF"} fourthColor={"#F1F1F1"} logoColor={"#29D8FF"}/>

        <Typography font={"Poppins"}/>

        <div className='w-full flex items-center justify-center py-6'>

          <Image src={middleImg} alt='.'></Image>

        </div>
        <div className='w-full flex items-center justify-center bg-[#F2EEE4] pb-16'>

          <Image src={waterAd} alt='.' className=''></Image>

        </div>
        

        <Plan/>

    </div>
  )
}

export default page