"use client"
import React, { useState, useEffect } from 'react';
import '../styles/testimonials.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import builders from '../assets/testimonials/builders.svg'
import chapati from '../assets/testimonials/chapati.svg'
import gym from '../assets/testimonials/gym.svg'
import infyniti from '../assets/testimonials/infyniti.svg'
import law from '../assets/testimonials/law.svg'
import merc from '../assets/testimonials/mercedes.svg'
import pethouse from '../assets/testimonials/pethouse.svg'
import qriocity from '../assets/testimonials/qriocity.svg'
import resnet from '../assets/testimonials/resnet.svg'
import tvs from '../assets/testimonials/tvs.svg'
import volkswagen from '../assets/testimonials/volkswagen.svg'
import water from '../assets/testimonials/water.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialsData = [
  {
    quote: "“The amount of work we have is daunting. It’s nice to know that you are there ​to support us and you can take on the heavy lifting.”",
    author: "Jency Anthony, Pethowz",
  },
  {
    quote: "“Partnering with Invictus was an instrumental component for SoFi to elevate and build authority within the investment sector, a critical area of expansion for us in 2021.”",
    author: "Karun, Volkswagon",
  },
  {
    quote: "“With Invictus support, we saw an immediate impact within the 1st quarter that resulted in impressive keyword rankings, website visitors, and product downloads for Figma Ideas”",
    author: "Henry William, Resnet Solutions",
  },
  {
    quote: "“Invictus's web & app development exceeded our expectations. Their expertise and commitment to excellence are unmatched.”",
    author: "Alex Greene, Visionaries Ltd",
  },
  
];

const companyImages = [
    { img: builders },
    { img: chapati },
    { img: gym },
    { img: infyniti },
    { img: law },
    { img: merc },
    { img: pethouse },
    { img: qriocity , route:"/CaseStudy/Qriocity"},
    { img: resnet },
    { img: tvs },
    { img: volkswagen },
    { img: water }
];


const TestimonialCompanies = () =>{

    useEffect(() => {
      AOS.init({
          duration: 600,
          once: false,
          
        })
    }, [])
  
    return (
      <div className='flex justify-center items-center w-full'>
        <div className='w-[100%] md:w-[90%] bg-black p-8  md:px-20 grid grid-cols-3 md:grid-cols-4  gap-x-8 md:gap-x-4 gap-y-4'>
        {
          companyImages.map((company,index)=>{
            return(
                  company.hasOwnProperty('route')?
                  <Link href={company.route} data-aos="fade-up" className='w-full h-[100px] md:h-[150px] flex items-center justify-center ' key={index} >
                    <Image src={company.img} className=' company hover:-translate-y-2 transition-all duration-300 '></Image>

                  </Link>
                  :
                  <div data-aos="fade-up" className='w-full h-[100px] md:h-[150px] flex items-center justify-center ' key={index} >
                    <Image src={company.img} className=' company hover:-translate-y-2 transition-all duration-300 '></Image>

                  </div>
                )
              })
        }
        </div>

      </div>
    )
}


const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => setSlideIndex((prevIndex) => (prevIndex + n + testimonialsData.length) % testimonialsData.length);
  const minusSlide = (n) => setSlideIndex((prevIndex) => (prevIndex - n + testimonialsData.length) % testimonialsData.length);
  const currentSlide = (n) => setSlideIndex(n);

  const showSlides = (index) => {
    const slides = document.getElementsByClassName("mySlides");
   

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[index].style.display = "flex";

  };

  return (
    <div className=' mt-12 w-full pb-4 md:pb-16 py-8 md:py-16 flex flex-col items-center gap-4 bg-black text-white '>
      <div className='p-4 px-12 border-2 border-[#D5D5D5] rounded-[40px] w-fit text-lg md:text-3xl text-white font-semibold  font-onest'>Testimonials</div>
      <div className='flex gap-2 justify-center font-grotesk mt-4'>
        <h1 className='text-3xl md:text-5xl font-bold'>What People</h1>
        <h1 className='text-3xl md:text-5xl font-bold text-[#0C9363]'>love in us</h1>
      </div>
      <div className="outer-container bg-[#333333] h-[35vh]">
        <div className="slideshow-container">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="mySlides fade">
              <div className="content text-center ">
                <p className='font-[400] font-onest'>{testimonial.quote}</p>
                <div className="credentials">
                  <div className='text-center font-black font-onest'>- {testimonial.author}</div>
                </div>
              </div>
            </div>
          ))}
          <span className="prev" onClick={() => minusSlide(1)}>
            <FaAngleLeft />
          </span>
          <span className="next" onClick={() => plusSlides(1)}>
            <FaAngleRight />
          </span>
        </div>
      </div>
      <TestimonialCompanies/>
    </div>
  );
}

export default Testimonials;
