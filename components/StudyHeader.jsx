import React from 'react'
import Image from 'next/image'
const StudyHeader = ({img,content}) => {
  return (
    <div className='bg-black flex items-center justify-end relative w-full font-grotesk'>

        <h2 className='absolute text-white font-[600] md:text-[48px] md:leading-[62px] top-[50%] translate-y-[-50%] left-[5%] w-[80%] md:w-[42%]'>{content}</h2>

        <Image src={img} alt='img'></Image>
        
    </div>
  )
}

export default StudyHeader