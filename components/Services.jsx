"use client"

import React,{useState} from 'react'

import { FaAngleDown } from "react-icons/fa";
import '../styles/services.css'
const Services = () => {
  const servicesData = [
    {
      title: "Social Media Marketing",
      content:
        "Social media marketing focuses on promoting brands and products on various social media platforms. It's about creating engaging content, managing social media profiles, and running social media advertisements to enhance brand presence and engagement with the target audience.",
    },
    {
      title:
        "Performance Marketing",
      content:
        "Performance marketing is a comprehensive term that includes online marketing and advertising programs where advertisers pay only when a specific action is completed, such as a sale, lead, or click. It's data-driven and highly measurable, focusing on delivering tangible results in terms of ROI.",
    },
    {
      title: "Digital Services",
      content:
        "Design services encompass a wide range of activities, from graphic design for digital and print media to user experience (UX) and user interface (UI) design for apps and websites. This field is about creating visually appealing and functional designs that resonate with the target audience and enhance the user experience",
    },
    {
      title: "Web & App Development",
      content: "Marketing has always been about utilising tools to connect with your audience at the right place and time. While traditional marketing methods are still relevant in our modern age, the sheer amount of time we spend and rely on the internet has meant that digital marketing has boomed.",
    },

    // Add more titles and contents as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative w-full flex flex-col items-center py-2 md:py-8">

      <div className='p-4 px-12 border-2 border-[#D5D5D5] rounded-[40px] w-fit text-lg md:text-3xl text-black font-semibold  font-onest'>Our Services</div>

      <div className='mt-4 w-[90%] md:w-[50%]'>
      {servicesData.map((item, index) => (
        
        <div key={index} className={`transform my-6 p-4 bg-[#FFFDF8] text-black border-2 border-[#696969] transition-all duration-1000 ${(openIndex==index)?'h-[430px] md:h-[300px] ':'h-[80px] md:h-[100px]'}`}>
          <div
            className="flex justify-between items-center p-2 cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex  items-center w-full">
             
              <div className="flex justify-between items-center w-full ">
                <div className={`flex serviceDiv  gap-5 items-center  `}>
                  
                  <div className="md:text-5xl text-xl text-gray-500 font-[700]">
                    {"0"+(index + 1)}
                  </div>
                  <span
                    className={`text-lg md:text-3xl lg:text-5xl text-start font-grotesk font-extrabold md:px-5`}
                  >
                    {item.title}
                  </span>
                </div>
                <div className={`${(openIndex==index)?'rotate-icon':''}`}>
                  <FaAngleDown className='text-xl'/>
                </div>
              </div>
            </div>
          </div>
          
          <div className={` ${(openIndex==index)?'block':'hidden' } fade-in p-5  md:px-10 pb-16  border-t border-gray-300 relative`}>
            <p className="text-gray-500">{item.content}</p>
            <button className='bg-[#0C7D55] text-white py-2 px-4 md:px-8 rounded-[40px] border-none absolute right-[5%] bottom-[3.5%] md:bottom-[5%]'>Know More</button>
          </div>
          
        </div>
      
      ))}
      </div>
      
    </div>
  );
}

export default Services