import React from 'react'
import '../../styles/portfolio.css'
import Image from 'next/image'

import qriocityImg from '../../assets/portfolio/qriocity.svg'
import builders from '../../assets/portfolio/builders.svg'
import pethowz from '../../assets/portfolio/pethowz.png'
import water from '../../assets/portfolio/water.svg'
import law from '../../assets/portfolio/law.svg'
import parotta from '../../assets/portfolio/parotta.svg'
import chapati from '../../assets/portfolio/chapati.svg'
import parotta2 from '../../assets/portfolio/parotta-2.svg'
import Link from 'next/link'
const QriocityDiv=()=>{
    return(
        <div className='w-[90%] flex flex-col md:flex-row my-24 gap-12 md:gap-6'>

            <Link className='w-full md:w-1/2 ' href="/CaseStudy/Qriocity">
                <div className='bg-[#F15A29] rounded-[18px] py-28 flex items-center justify-center'>
                    <Image src={qriocityImg} alt='qriocity'></Image>
                </div>
                <div className='flex flex-col md:flex-row items-left  md:items-center gap-2 md:gap-6 mt-4 md:mt-8'>

                    <div className='flex order-2 md:order-1'>
                        <h2 className='font-[800] text-[30px] md:text-[48px] md:leading-[60px]'>Qriocity</h2>
                    </div>
                    <div className='flex md:gap-6 gap-3 md:order-2 order-1'>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>EDUCATION</span>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>EDUTECH</span>
                    </div>
                </div>
                <div className='font-[600] text-[20px] md:text-[30px] mt-1'>
                    Social Media Ads / Paid Ads
                </div>
            </Link>
            <div className='w-full md:w-1/2 '>
                <div className='bg-[#958F38] rounded-[18px] py-14 flex items-center justify-center md:px-0 px-6'>
                    <Image src={builders} alt='qriocity'></Image>
                </div>
                <div className='flex flex-col md:flex-row items-left  md:items-center gap-2 md:gap-6 mt-4 md:mt-8'>

                    <div className='flex order-2 md:order-1'>
                        <h2 className='font-[800] text-[30px] md:text-[48px] md:leading-[60px]'>VGK Builders</h2>
                    </div>
                    <div className='flex md:gap-6 gap-3 md:order-2 order-1'>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>REAL-ESTATE</span>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>INFRASTRUCTURE</span>
                    </div>
                </div>
                <div className='font-[600] text-[20px] md:text-[30px] mt-1'>
                Social Media Ads / Branding
                </div>
            </div>
        </div>
    )
}

const PethowzDiv = ()=>{
    return(
        <div className='w-[90%]'>
            <div className='w-full'>
                <div className='bg-[#FFC02E] rounded-[18px] p-8 flex items-center justify-center'>
                    <Image src={pethowz} alt='qriocity'></Image>
                </div>
                <div className='flex flex-col md:flex-row items-left  md:items-center gap-2 md:gap-6 mt-4 md:mt-8'>

                    <div className='flex order-2 md:order-1'>
                        <h2 className='font-[800] text-[30px] md:text-[48px] md:leading-[60px]'>Pethowz</h2>
                    </div>
                    <div className='flex md:gap-6 gap-3 md:order-2 order-1'>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>PET HOUSING</span>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>BUSINESS</span>
                    </div>
                </div>
                <div className='font-[600] text-[20px] md:text-[30px] mt-1'>
                    Social Media Ads / Branding
                </div>
            </div>
        </div>
    )
}

const WaterDiv=()=>{
    return(
        <div className='w-[90%] flex flex-col md:flex-row my-24 md:gap-6 gap-12'>

            <Link href="/CaseStudy/WaterOnClick" className='w-full md:w-1/2 '>
                <div className='bg-[#29D8FF] rounded-[18px] py-6 flex items-center justify-center'>
                    <Image src={water} alt='qriocity'></Image>
                </div>
                <div className='flex flex-col md:flex-row items-left  md:items-center gap-2 md:gap-6 mt-4 md:mt-8'>

                    <div className='flex order-2 md:order-1'>
                        <h2 className='font-[800] text-[30px] md:text-[48px] md:leading-[60px]'>WaterOnClick</h2>
                    </div>
                    <div className='flex md:gap-6 gap-3 md:order-2 order-1'>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>MINI BUSINESS</span>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>LIFESTYLE</span>
                    </div>
                </div>
                <div className='font-[600] text-[20px] md:text-[30px] mt-1'>
                    Social Media Ads / Paid Ads
                </div>
            </Link>
            <Link className='w-full md:w-1/2 ' href="/CaseStudy/VLS_Law_Academy">
                <div className='bg-[#22D4B3] rounded-[18px] py-0 flex items-center justify-center'>
                    <Image src={law} alt='qriocity'></Image>
                </div>
                <div className='flex flex-col md:flex-row items-left  md:items-center gap-2 md:gap-6 mt-4 md:mt-8'>

                    <div className='flex order-2 md:order-1'>
                        <h2 className='font-[800] text-[30px] md:text-[48px] md:leading-[60px]'>VLS Law Academy</h2>
                    </div>
                    <div className='flex md:gap-6 gap-3 md:order-2 order-1'>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>LAW FIRM</span>
                    </div>
                </div>
                <div className='font-[600] text-[20px] md:text-[30px] mt-1'>
                Social Media Ads / Branding
                </div>
            </Link>
        </div>
    )
}


const ParrotaDiv = ()=>{
    return(
        <div className='w-[90%]'>
            <div className='w-full'>
                <div className='bg-[#85472B] rounded-[18px]  flex items-center justify-center h-[260px] md:h-[618px] overflow-hidden relative'>
                    <Image src={parotta2} alt='qriocity' className='absolute left-[55%] translate-x-[-50%] bottom-[-42%] md:bottom-[-65%]'></Image>
                </div>
                <div className='flex flex-col md:flex-row items-left  md:items-center gap-2 md:gap-6 mt-4 md:mt-8'>

                    <div className='flex order-2 md:order-1'>
                        <h2 className='font-[800] text-[30px] md:text-[48px] md:leading-[60px]'>Chapati Kadai</h2>
                    </div>
                    <div className='flex md:gap-6 gap-3 md:order-2 order-1'>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>FOOD</span>
                        <span className='h-fit w-fit border-[1px] border-[#CECECE] rounded-[21px] px-4 py-1 font-[700] text-[13px]'>INDUSTRY</span>
                    </div>
                </div>
                <div className='font-[600] text-[20px] md:text-[30px] mt-1'>
                    Social Media Ads / Branding
                </div>
            </div>
        </div>
    )
}

const page = () => {
  return (
    <div className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk bg-[#FFFDF8] py-8 md:py-12'>

        <div className='w-[90%] flex md:flex-row flex-col justify-between gap-6 md:gap-0'>
            <div className='md:w-[50%]'>
                <h1 className='md:text-[86px] text-[40px] leading-[50px] font-[800] md:leading-[106px] mb-2'>Our Work</h1>
                <ul className='u-list list-disc relative font-[600] text-[18px] md:text-[30px] leading-[54px]'>
                    <li>Building Brands</li>
                    <li>Advertising & Graphics</li>
                    <li>Website</li>
                    <li>Brochure & Print Works</li>
                    <div className='v-line left-[2.65%] md:left-[1.35%]'></div>
                </ul>
            </div>
            <div className='md:w-[50%] flex justify-end flex-col'>
                <p className='font-[600] md:text-[30px] leading-[48px]'>Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content.</p>

                <button id='anchor' className='bg-[#0C7D55] text-white py-2 px-8 rounded-[40px] border-none text-xl w-fit mt-4 mb-2 font-[700]' type='submit'>Let's do it</button>
            </div>
        </div>

        <QriocityDiv/>
        <PethowzDiv/>
        <WaterDiv/>
        <ParrotaDiv/>
        
    </div>
  )
}

export default page