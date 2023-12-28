"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import contact from '../assets/contact-us-img.svg'

import contactBG from '../assets/contact-bg.svg'
import rocket from '../assets/contact-rocket.svg'
import '../styles/contact.css'
const ContactForm = () => {

  const [formData,setFormData] = useState({name:'',email:'',contact:'',message:'',service:''})

  const onchange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const onsubmit=async(e)=>{
    e.preventDefault();

    console.log(formData);

    const res = await fetch('/api/sendMail',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })

    const data = await res.json();

    console.log(data);

  }

  return (
    <main className='mt-20 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk font-semibold bg-[#FFFDF8] md:pb-10'>
      
      <div className='w-[90%] flex  flex-col md:flex-row   py-2 gap-20' id="anchor">
        <div className='w-[100%] md:w-[50%] order-2 md:order-1'>
          <h1 className='w-fit font-grotesk font-black text-[40px] leading-[50px] md:text-[90px] md:leading-[95px] md:mt-0 mt-6'>
            Let's Start Crafting Now
          </h1>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-4 md:mt-8 mt-4' onSubmit={onsubmit}>

            <div className='flex flex-col gap-2 md:col-span-2'>
              <label htmlFor="" className='text-xl'>Your Name</label>
              <input type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4' onChange={onchange} required value={formData.name} name='name'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Your Mobile No.</label>
              <input type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4' onChange={onchange} required value={formData.contact} name='contact'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Your Email</label>
              <input type="email" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4'  onChange={onchange} value={formData.email} name='email'/>
            </div>
            <div className='flex flex-col gap-2 md:col-span-2'>
              <label htmlFor="" className='text-xl'>Service Needed</label>
              <select name="service" value={formData.service} className='bg-[#D9D9D9] relative rounded-[10px] outline-none py-4 px-4 text-xl leading-[7rem]'  onChange={onchange}>
                <option value="Social Media Marketing" className='font-[500] text-xl leading-[7rem]'>Social Media Marketing</option>
                <option value="Performance Marketing" className='font-[500] text-xl leading-[7rem]'>Performance Marketing</option>
                <option value="Digital Service" className='font-[500] text-xl leading-[7rem]'>Digital Service</option>
                <option value="Web & App Development" className='font-[500] text-xl leading-[7rem]'>Web & App Development</option>
              </select>
            </div>
            
            <div className='flex flex-col gap-2 md:col-span-2'>
              <label htmlFor="" className='text-xl'>Description</label>
              <textarea type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4 resize-none' onChange={onchange} required value={formData.message} name='message'/>
            </div>
            
            
            <button id='anchor' className='bg-[#0C7D55] text-white py-2 px-8 rounded-[40px] border-none text-xl w-fit mt-4' type='submit'>Let's do it</button>


          </form>
        </div>
        <div className='w-[100%] md:w-[50%] order-1 md:order-2 relative '>
          <Image src={contactBG} alt='Contact Us' className='left-[50%] translate-x-[-50%] top-[6%] absolute'></Image>
          <Image src={rocket} alt='Contact Us' className=' floating md:mt-[15%] md:ml-[7%]'></Image>
        </div>



      </div>

    </main>
  )
}

export default ContactForm