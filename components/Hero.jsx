"use client"

import React,{useEffect , useState} from 'react'
import '../styles/hero.css'
import Image from 'next/image'

import like from '../assets/like-icon.svg'
import heart from '../assets/heart-icon.svg'
import dollar from '../assets/dollar-icon.svg'
import heroImg from '../assets/hero-img.svg'
const Hero = () => {

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateRandomCircles = () => {
      const numberOfCircles = 15; 
      const newCircles = [];
      const horizontalGaps = 30; 

      for (let i = 0; i < numberOfCircles; i++) {
        const randomHorizontalPosition = `${Math.random() * 99}%`;
        const randomVerticalDelay = `${Math.random() * 3000}ms`;

        // Randomly choose one of the three images
        const randomImage = Math.random() < 0.33 ? dollar : Math.random() < 0.5 ? heart : like;
        const rotateClass = Math.random() < 0.5 ? 'rotate' : '';

        newCircles.push(
          <Image
            key={i}
            src={randomImage}
            className={`absolute fizz bottom-[10%] h-[30px] md:h-auto ${rotateClass}`}
            style={{ left: randomHorizontalPosition, animationDelay: randomVerticalDelay }}
          />
        );
      }
      setCircles(newCircles);
    };

    generateRandomCircles();
  }, []); // Run only once on component mount

  return (
    <div className='font-grotesk text-black mt-20 py-8 w-full flex flex-col  items-center relative overflow-hidden'>

        {/* <Image src={heart} className='absolute left-[8%] top-[1%] md:left-[10%] md:top-[5%] h-[30px] md:h-auto '></Image>
        <Image src={like} className='absolute right-[10%] top-[4%] md:top-[10%] h-[30px] md:h-auto '></Image>
        <Image src={dollar} className='absolute left-[20%] top-[30%] h-[30px] md:h-auto '></Image>
        <Image src={heart} className='absolute right-[5%] md:right-[20%] top-[30%] md:top-[35%] h-[30px] md:h-auto '></Image>
        <Image src={like} className='absolute left-[10%] md:left-[22%] top-[65%] h-[30px] md:h-auto '></Image>
        <Image src={dollar} className='absolute right-[5%] md:right-[15%] top-[60%] h-[30px] md:h-auto '></Image> */}


        <h2 className='font-onest text-xl md:text-3xl  text-center md:text-left'>ELEVATING BRANDS, ACCELERATING SALES</h2>
        <div className="flex h-[50px] md:h-[98px] gap-3 text-center justify-center overflow-hidden ease-in-out ">
            <p className="w-fit font-grotesk font-black text-[40px] md:text-[60px]">Together We </p>
            
            <div className="font-grotesk font-black text-[40px] md:text-[60px]">
                <span className="wordspins  block" >Craft</span>
                <span className="wordspins block">Build</span>
                <span className="wordspins block">Grow</span>
            </div>
         </div>

          {/* <Image src={dollar} className='absolute fizz bottom-[10%] left-[5%] h-[30px] md:h-auto '></Image> */}
          
         <Image src={heroImg} className='h-[60vh]' height={400} alt='img'></Image>
         
         {
          circles.map((element)=>{
            return element
          })
         }
        

    </div>
  )
}

export default Hero