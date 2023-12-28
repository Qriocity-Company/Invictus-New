import React from 'react'
import aboutImg from '../../assets/about/about-img.svg'
import arrow from '../../assets/about/arrow.svg'
import Image from 'next/image'

import entertainment from '../../assets/about/entertainment.svg'
import education from '../../assets/about/education.svg'
import business from '../../assets/about/business.svg'
import estate from '../../assets/about/real-estate.svg'
import healthcare from '../../assets/about/healthcare.svg'
import fitness from '../../assets/about/fitness.svg'
import lifestyle from '../../assets/about/lifestyle.svg'
import food from '../../assets/about/food.svg'


import '../../styles/servicePage.css'
import ContactForm from '@/components/ContactForm'
const AboutHero = ()=>{
    return (
        <div className='w-[90%] md:w-[80%]  flex-col  md:flex-row flex gap-10 items-center justify-center py-12'>

            <div className='w-full md:w-[50%] order-2 md:order-1'>
                <div className='w-auto md:w-[50%] font-grotesk font-black text-[40px] md:text-[90px] md:leading-[5.5rem]'>
                    The Invictus
                </div>
                
                <p className='text-[24px] md:text-[30px] mt-4 md:mt-12 md:w-[75%]'>
                A team of dynamic experts united in our passion for revolutionizing marketing through technology. Our zeal for innovation drives us to redefine the digital marketing landscape.
                </p>

                
            </div>
            <div className='w-[90%] md:w-[50%] flex items-center justify-center order-1 md:order-2'>
                <Image src={aboutImg} alt='Contact Us' className='w-[100%]'></Image>
            </div>

        </div>
    )
}
const OurMission=()=>{

    return(
        <div className='relative w-full bg-black  flex-col  md:flex-row flex gap-10 items-center justify-center py-16 md:pb-32 font-grotesk text-white overflow-hidden'>

            <div className='px-[10%] relative'>
                <h1 className='w-[30%] font-grotesk font-black text-[40px] md:text-[90px] md:leading-[5.5rem] '>
                    Our Mission
                </h1>
                <p className='mt-4 text-lg leading-[40px] md:text-[30px] md:w-[50%] z-50 relative'>
                To empower business leaders worldwide, guiding them to craft innovative customer experiences and achieve their revenue ambitions. At Invictus Global Tech, we stand at the intersection of artistic ingenuity and commercial success, dedicated to transforming the landscape of digital marketing.
                </p>
            </div>

            <Image src={arrow} alt="." className='hidden md:block z-1 md:h-auto absolute bottom-0 md:bottom-[-20%] md:left-[10%]'></Image>
        </div>
    )

}

const expertiseData=[
    {
        title:"Entertainment",
        img:entertainment,
        content:"Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content."
    },
    {
        title:"Education",
        img:education,
        content:"From large school districts to companies just starting out, We know that technology can change the world of education for the better."
    },
    {
        title:"Business",
        img:business,
        content:"Is your software as organized as you are? Whether it's an office calendar or a workforce management platform, we believe we can help you bring it to market."
    },
    {
        title:"Real Estate",
        img:estate,
        content:"Is your software as organized as you are? Whether it's an office calendar or a workforce management platform, we believe we can help you bring it to market."
    },
    {
        title:"Healthcare",
        img:healthcare,
        content:"Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content."
    },
    {
        title:"Health & Fitness",
        img:fitness,
        content:"From large school districts to companies just starting out, We know that technology can change the world of education for the better."
    },
    {
        title:"Lifestyle & Social",
        img:lifestyle,
        content:"Is your software as organized as you are? Whether it's an office calendar or a workforce management platform, we believe we can help you bring it to market."
    },
    {
        title:"Food & Drink",
        img:lifestyle,
        content:"Is your software as organized as you are? Whether it's an office calendar or a workforce management platform, we believe we can help you bring it to market."
    },

]

const OurExpertise=()=>{
    return (
        <div className='w-[90%] md:w-[80%]  py-12 md:py-16 md:pb-20'>

            <h1 className='w-[30%] font-grotesk font-black text-[40px] leading-[45px] md:text-[90px] md:leading-[5.5rem] '>
                Our Expertise
            </h1>

            <div className='grid md:grid-cols-4 md:grid-rows-2 gap-y-12 md:gap-y-16 gap-x-14 mt-14'>
                {
                    expertiseData.map((element,index)=>{
                        return(
                            <div>
                                <Image src={element.img} alt={element.title } className='hover:-translate-y-2 transition-all duration-300'></Image>
                                <h2 className='font-onest font-[700] text-[30px] leading-[41px] mt-8'>{element.title}</h2>
                                <p className='mt-2 md:mt-4 text-[20px] font-[500] font-grotesk'>{element.content}</p>
                            </div>
                        )
                    })
                }

            </div>


        </div>  
    )
}

const chooseUsData=[
    {
        content:"Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content."
    },
    {
        content:"Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content."
    },
    {
        content:"Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content."
    },
    {
        content:"Whether it's a streaming platform or an interactive mobile application, your user journey should be as entertaining as your content."
    },
]

const ChooseUs = ()=>{
    return(
        <div className='py-12 bg-[#F2EEE4] flex flex-col justify-center items-center'>

            <div className='flex  flex-col md:justify-between md:flex-row md:gap-16 w-[80%]  md:py-16  '>

                <div className='flex md:h-[90vh] flex-col gap-4 md:gap-8 w-[100%] md:w-[40%] md:sticky self-start top-[14%]'>
                    <h1 className='md:w-[100%] font-[800] text-[38px] md:text-[85px] md:leading-[5.5rem]'>Why Choose us ?</h1>
                    <p className='text-lg md:text-[30px] font-[500] text-justify'>
                    We conceptualize, design, and ship digital products and services. Beyond websites and applications, we make interactive environments and deliver innovative user experiences.
                    </p>
                    <p className='text-lg md:text-[30px] font-[500] text-justify'>
                    First, we'll collborate to show the world your best self. Then, we'll help other people understand why your business is exactly what they're looking for.
                    </p>
                </div>

                <div className='w-[100%] md:w-[60%] mt-2 md:mt-0'>
                    
                    {
                        chooseUsData.map((element,index)=>{
                            return (
                                <div className='bg-[#F2EEE4] singleService  md:h-auto  block md:flex justify-center items-center gap-10 mt-12 md:mt-20 '>
                                    <div className='w-[100%] md:w-[50%] flex md:justify-end text-[150px] md:text-[327px] leading-[160px] md:leading-[314px] font-[700] font-sketch'>
                                        {index+1}
                                    </div>
                                    <div className='w-[100%] md:w-[50%] '>
                                        <p className=' md:mt-4 text-lg md:text-[20px] font-[500] font-grotesk'>{element.content}</p>
                                    </div>

                                </div>
                            )

                        })
                    }
                    

                </div>

            </div>

        </div>
    )
}

const page = () => {
  return (
    <main className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk font-[500] bg-[#FFFDF8]'>

        <AboutHero/>
        <OurMission/>
        <OurExpertise/>
        <ChooseUs/>
        <ContactForm/>
        
    </main>
  )
}

export default page