import StudyHeader from '@/components/StudyHeader'
import React from 'react'
import Image from 'next/image'
import qinsta from '../../../assets/CaseStudy/qriocity/qriocity-insta.svg'
import qriocityAds from '../../../assets/CaseStudy/qriocity/qriocity-ad.svg'
import bottomImg from '../../../assets/CaseStudy/qriocity/qriocity-bottomImg.png'
import headerImg from '../../../assets/CaseStudy/qriocity/topImage-qriocity.png'
import ProblemSolved from '@/components/ProblemSolved'
import SocialMedia from '@/components/SocialMedia'
import Branding from '@/components/Branding'
import Typography from '@/components/Typography'
import Plan from '@/components/Plan'

const page = () => {
  return (
    <div className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk bg-[#FFFDF8]'>
        
        <StudyHeader content={"We Dreamt, Planned, Executed and Scaled Qriocity to reach 1 Million Customers"} img={headerImg}/>
        
        <ProblemSolved content={"Struggling to generate leads for pet boarding"}/>

        <SocialMedia isfb={true} isinsta={true} iswhatsapp={true} isx={false}/>

        <Branding firstColor={"#26CFD3"} secondColor={"#F15A29"} thirdColor={"#070707"} fourthColor={"#F1F1F1"}/>

        <Typography font={"Poppins"}/>

        <div className='w-full flex items-center justify-center bg-[#F15A29] py-6'>

          <Image src={qinsta} alt='.'></Image>

        </div>
        <div className='w-full flex items-center justify-center bg-[#F2EEE4] pb-16'>

          <Image src={qriocityAds} alt='.' className=''></Image>

        </div>
        <div className='w-full flex items-center justify-center'>

          <Image src={bottomImg} alt='.' className='w-full'></Image>

        </div>

        <Plan/>

    </div>
  )
}

export default page