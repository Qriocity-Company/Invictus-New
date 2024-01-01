import React from 'react'
import puzzle1 from '../assets/puzzle-1.svg' 
import puzzle2 from '../assets/puzzle-2.svg' 
import Image from 'next/image'

const ProblemSolved = ({content}) => {
  return (
    <div className='flex flex-col font-grotesk py-16 w-[90%] md:items-start items-center'>
        <div className='p-4 px-12 border-2 border-[#D5D5D5] rounded-[40px] w-fit text-lg md:text-3xl text-black font-semibold  font-onest'>PROBLEM SOLVED</div>

        <div className='bg-[#F2EEE4] flex items-center relative w-full md:h-[152px] mt-6 md:mt-12  py-4 px-2 md:px-14 md:py-0'>
            <h2 className='font-[600] text-2xl md:text-[30px] md:leading-[30px]'>{content}</h2>
            <Image src={puzzle1} alt='puzzle' className='absolute top-[-41.75%] right-[22%] md:block hidden'></Image>
            <Image src={puzzle2} alt='puzzle' className='absolute top-[0%] right-[6%] md:block hidden'></Image>
            
            
        </div>

    </div>
  )
}

export default ProblemSolved