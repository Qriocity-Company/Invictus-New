import React from 'react'
import Image from 'next/image'

import contact from '../../assets/contact-us-img.svg'
const page = () => {
  return (
    <main className='mt-20 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk font-semibold'>
      
      <div className='w-[90%] flex px-20 py-8 gap-10'>
        <div className='w-[50%]'>
          <h1 className='w-fit font-grotesk font-black text-[40px] md:text-[65px]'>
            Let's Start Crafting Now
          </h1>
          <form action="">

            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Your Name</label>
              <input type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-2'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Your Email</label>
              <input type="email" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-2'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Description</label>
              <textarea type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-2'/>
            </div>
            


          </form>
        </div>
        <div className='w-[50%]'>
          <Image src={contact} alt='Contact Us'></Image>
        </div>



      </div>

    </main>
  )
}

export default page