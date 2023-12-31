"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import serviceImg from '../../assets/services-img.svg'
import social from '../../assets/services/social-media.svg'
import performance from '../../assets/services/marketting.svg'
import design from '../../assets/services/design-services.svg'
import web from '../../assets/services/web-app-dev.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';


import '../../styles/servicePage.css'

const SingleService = ({img,title,content})=>{
    return (
        <div className='singleService  md:h-auto  block md:flex justify-center items-center gap-10 mt-16 md:mt-20 bg-[#FFFDF8]'>
            <div className='w-[100%] md:w-[50%] h-[180px] md:h-auto flex justify-end'>
                <Image src={img} alt='.'></Image>
            </div>
            <div className='w-[100%] md:w-[50%] mt-6 md:mt-0'>
                <h2 className='font-onest text-2xl md:text-[30px] leading-[41px]'>{title}</h2>
                <p className='mt-4 text-lg font-[500] md:text-[20px] leading-[28px]'>{content}</p>
            </div>

        </div>
    )
}


const page = () => {

    const servicesData = [
        {
          img:social,
          title: 'Social Media Marketing',
          content: "Social media marketing focuses on promoting brands and products on various social media platforms. It's about creating engaging content, managing social media profiles, and running social media advertisements to enhance brand presence and engagement with the target audience."
        },
        {
            img:performance,
          title: 'Performance Marketing',
          content: "Through targeted advertising, analytics, and strategic planning, we focus on enhancing your brand's performance across various channels. Our ultimate goal is to maximize your return on investment (ROI) by analyzing real-time data and making strategic adjustments to campaigns. This ensures that your marketing efforts are not just impactful but also highly efficient in achieving your business objectives."
        },
        {
            img:design,
          title: 'Design Services',
          content: "Design services encompass a wide range of activities, from graphic design for digital and print media to user experience (UX) and user interface (UI) design for apps and websites. This field is about creating visually appealing and functional designs that resonate with the target audience and enhance the user experience."
        },
        {
            img:web,
          title: 'Web & App Development',
          content: "Website and app development involves the creation and maintenance of websites and mobile applications. This includes web design, web publishing, web programming, and database management. It's a crucial aspect of digital presence, ensuring that businesses have functional, efficient, and user-friendly platforms for their audience."
        }
    ];

    useEffect(() => {
        AOS.init({
             duration: 1000,
             once: false,
             delay:100
           })
     }, [])

  return (
    <main className='mt-16 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk font-[500] bg-[#FFFDF8] '>
        
        <div className='w-[90%] md:w-[80%]  flex-col  md:flex-row flex gap-10 items-center justify-center py-8'>

            <div className='w-full md:w-[50%] order-2 md:order-1'>
                <h1 className='w-fit font-grotesk font-black text-[40px] md:text-[90px] md:leading-[5.5rem]'>
                    Explore Our Services
                </h1>
                
                <p className='text-[30px] my-6'>
                We really are obsessed with creating delightful digital products, brands, and experiences.
                </p>

                <button className='bg-[#0C7D55] text-white py-2 px-8 rounded-[40px] border-none text-xl mt-8'>Let's do it</button>
                
            </div>
            <div className='w-[90%] md:w-[50%] flex items-center justify-center order-1 md:order-2'>
                <Image src={serviceImg} alt='Contact Us' className='w-[100%]'></Image>
            </div>

        </div>


        <div className='flex  flex-col md:justify-between md:flex-row md:gap-16 w-[80%] py-16  '>

                <div className='flex md:h-[90vh] flex-col gap-4 w-[100%] md:w-[40%] md:sticky self-start top-[9%]'>
                    <h1 className='md:w-[100%] font-[800] text-[40px] md:text-[90px] leading-[95px]'>What we do?</h1>
                    <p className='text-lg md:text-[30px] font-[500] leading-[39px]'>
                    We conceptualize, design, and ship digital products and services. Beyond websites and applications, we make interactive environments and deliver innovative user experiences.
                    </p>
                    <p className='text-lg md:text-[30px] font-[500] leading-[39px]'>
                    First, we'll collborate to show the world your best self. Then, we'll help other people understand why your business is exactly what they're looking for.
                    </p>
                </div>
                
                <div className='w-[100%] md:w-[60%] mt-12 md:mt-0'>
                    
                    {
                        servicesData.map((service,index)=>{
                            return <SingleService img={service.img} content={service.content} title={service.title} key={index}/>

                        })
                    }
                    

                </div>

        </div>

        


    </main>
  )
}

export default page