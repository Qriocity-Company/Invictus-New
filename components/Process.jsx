import React from 'react'
import brain from '../assets/iconoir_brain-research.svg'
import bulb from '../assets/icon-bulb.svg'
import graph from '../assets/icon-graph.svg'
import cart from '../assets/icon-cart.svg'
import Image from 'next/image'

const data = [
    {
        img:brain,
        title:"Research",
        content:"Analyzing your brand and market to craft a tailored online strategy."
    },
    {
        img:bulb,
        title:"Concept",
        content:"Designing unique branding, campaigns, and platforms to set you apart."
    },
    {
        img:graph,
        title:"Implement",
        content:"Executing data-driven solutions for maximum online impact and conversions."
    },
    {
        img:cart,
        title:"Handover",
        content:"Delivering optimized digital assets with training for your continued success."
    },
]

const SingleProcessDiv=({img,title,content})=>{
    return (
        <div className='p-12 py-20 border-2 border-b-8 text-black  border-black rounded-[81px] bg-white flex flex-col gap-8 items-center hover:bg-[#0C7D55] hover:scale-[0.98] hover:text-white transition-all duration-500'>

            <Image src={img}></Image>
            <h3 className='text-xl font-bold '>{title}</h3>
            <p className='text-center '>{content}</p>
        </div>
    )
}

const Process = () => {
  return (
    <div className='mt-12 w-full py-4 flex flex-col items-center gap-4'>

        <div className='p-4 px-12 border-4 border-gray-300 rounded-[40px] w-fit text-3xl text-black font-semibold '>Our Process</div>

        <div className='grid grid-cols-4 w-[90%] gap-4 mt-12'>

            {
                data.map((process,index)=>{
                    return <SingleProcessDiv img={process.img} title={process.title} content={process.content} key={index}/>

                })
            }

        </div>
        
    </div>
  )
}

export default Process