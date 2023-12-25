"use client"

import React, { useState } from 'react'
import Image from 'next/image'

import contact from '../../assets/contact-us-img.svg'
import '../../styles/contact.css'
const page = () => {

  const [formData,setFormData] = useState({name:'',email:'',contact:'',company:'',message:'',budget:''})

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
    <main className='mt-20 w-full flex flex-col justify-center items-center lg:max-w-[1536px] font-grotesk font-semibold'>
      
      <div className='w-[90%] flex  flex-col md:flex-row  px-4 md:px-20 py-8 gap-10'>
        <div className='w-[100%] md:w-[50%] order-2 md:order-1'>
          <h1 className='w-fit font-grotesk font-black text-[40px] md:text-[65px]'>
            Let's Start Crafting Now
          </h1>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-8' onSubmit={onsubmit}>

            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Your Name</label>
              <input type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4' onChange={onchange} required value={formData.name} name='name'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Your Email</label>
              <input type="email" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4'  onChange={onchange} value={formData.email} name='email'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Contact</label>
              <input type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4' onChange={onchange} required value={formData.contact} name='contact'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Company Name</label>
              <input type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4' onChange={onchange} required value={formData.company} name='company'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Description</label>
              <textarea type="text" className='bg-[#D9D9D9] rounded-[10px] outline-none py-4 px-4 resize-none' onChange={onchange} required value={formData.message} name='message'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-xl'>Budget</label>
              <div className='flex items-center gap-2'>
                <input type="radio" name='budget' value="2,000 - 5,000" onChange={onchange}/>
                <label htmlFor="">2000-5000</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" name='budget' value="20,000 - 70,000" onChange={onchange}/>
                <label htmlFor="">20,000-70,000</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" name='budget' value="70,000+" onChange={onchange}/>
                <label htmlFor="">70,000 +</label>
              </div>
            </div>
            
            <button className='bg-[#0C7D55] text-white py-2 px-8 rounded-[40px] border-none text-xl w-fit' type='submit'>Let's do it</button>


          </form>
        </div>
        <div className='w-[100%] md:w-[50%] order-1 md:order-2'>
          <Image src={contact} alt='Contact Us' className='floating'></Image>
        </div>



      </div>

    </main>
  )
}

export default page