"use client"
import React, { useState, useEffect } from 'react';
import '../styles/testimonials.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Image from 'next/image';

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

const testimonialsData = [
  {
    quote: "Invictus transformed our social media game! Their Social Media Marketing strategies gave us a competitive edge, increasing brand engagement and customer connections.",
    author: "Karan Mehra, Tech Innovations Ltd",
  },
  {
    quote: "Invictus is our go-to for digital services. From stunning graphic design to seamless UX/UI, they understand the pulse of our audience.",
    author: "Sanjay Gupta, CreativeCraft Studios",
  },
  {
    quote: "In the world of performance marketing, Invictus stands out. Their data-driven approach and focus on ROI delivered tangible results for us.",
    author: "Arjun Reddy, Innovators",
  },
  {
    quote: "Invictus's web & app development exceeded our expectations. Their expertise and commitment to excellence are unmatched.",
    author: "Alex Greene, Visionaries Ltd",
  },
  {
    quote: "Invictus's web & app development exceeded our expectations. Their expertise and commitment to excellence are unmatched.",
    author: "Rodrigo Reynolds, DataTech Solutions",
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
    { img: qriocity },
    { img: resnet },
    { img: tvs },
    { img: volkswagen },
    { img: water }
];


const TestimonialCompanies = () =>{
    return (
      <div className='flex justify-center items-center w-full'>
        <div className='w-[90%] bg-black p-8 px-20 grid grid-cols-4'>
        {
          companyImages.map((company,index)=>{
            return(
                  <div className='w-full h-[150px] flex items-center justify-center' key={index}>
                    <Image src={company.img}></Image>

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
    <div className='mt-12 w-full py-16 flex flex-col items-center gap-4 bg-black text-white '>
      <div className='p-4 px-12 border-2 border-white rounded-[40px] w-fit text-3xl font-semibold '>Testimonials</div>
      <div className='flex gap-4 justify-center font-grotesk mt-4'>
        <h1 className='text-4xl font-bold'>What People</h1>
        <h1 className='text-4xl font-bold text-[#0C9363]'>love in us</h1>
      </div>
      <div className="outer-container bg-[#333333] h-[35vh]">
        <div className="slideshow-container">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="mySlides fade">
              <div className="content">
                <p>{testimonial.quote}</p>
                <div className="credentials">
                  <div className='text-center'>- {testimonial.author}</div>
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
