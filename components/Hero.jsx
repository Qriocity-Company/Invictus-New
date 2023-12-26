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
      // const numberOfCircles = 15; 
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
      const numberOfCircles = screenWidth < 600 ? 7 : 10;
      const newCircles = [];
      const horizontalGaps = 30; 

      for (let i = 0; i < numberOfCircles; i++) {
        const randomHorizontalPosition = `${Math.random() * 99}%`;
        const randomVerticalPosition=`${Math.random() * 99}%`;
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
      // for(let i=0;i<6;i++){
      //   const randomHorizontalPosition = `${Math.random() * 99}%`;
      //   const randomVerticalPosition = `${Math.random() * 40 + 30}%`;
      //   const randomVerticalDelay = `${Math.random() * 1000}ms`;

      //   const randomImage = Math.random() < 0.33 ? dollar : Math.random() < 0.5 ? heart : like;
      //   const rotateClass = Math.random() < 0.5 ? 'rotate' : '';

      //   newCircles.push(
      //     <Image
      //       key={i}
      //       src={randomImage}
      //       className={`absolute one-time  h-[30px] md:h-auto ${rotateClass}`}
      //       style={{ left: randomHorizontalPosition, bottom:randomVerticalPosition ,  animationDelay: randomVerticalDelay }}
      //     />
      //   );

      // }
      setCircles(newCircles);
    };

    generateRandomCircles();
  }, []); // Run only once on component mount

  return (
    <div className='font-grotesk text-black mt-[4rem] py-8 w-full flex flex-col  items-center relative overflow-hidden bg-[#FFFDF8]'>

        <Image src={heart} className='absolute left-[8%] top-[1%] md:left-[10%] md:top-[5%] h-[30px] md:h-auto  one-time'></Image>
        <Image src={like} className='one-time absolute right-[10%] top-[4%] md:top-[10%] h-[30px] md:h-auto '></Image>
        <Image src={dollar} className='one-time  absolute left-[20%] top-[30%] h-[30px] md:h-auto '></Image>
        <Image src={heart} className='one-time absolute right-[5%] md:right-[20%] top-[30%] md:top-[35%] h-[30px] md:h-auto '></Image>
        <Image src={heart} className='one-time absolute right-[5%] md:right-[5%] top-[30%] md:top-[45%] h-[30px] md:h-auto '></Image>
        <Image src={like} className='one-time absolute left-[10%] md:left-[22%] top-[65%] h-[30px] md:h-auto '></Image>
        <Image src={dollar} className='one-time absolute right-[5%] md:right-[15%] top-[60%] h-[30px] md:h-auto '></Image>
        <Image src={heart} className='one-time absolute left-[8%] top-[50%] md:left-[10%] md:top-[50%] h-[30px] md:h-auto '></Image>


        <h2 className='font-onest mt-6  text-lg md:text-3xl  text-center md:text-left'>ELEVATING BRANDS, ACCELERATING SALES</h2>
        <div className="flex h-[70px] md:h-[110px] gap-3 text-center justify-center overflow-hidden ease-in-out ">
            <p className="w-fit font-grotesk font-black text-[40px] md:text-[85px]">Together We </p>
            
            <div className="font-grotesk font-black text-[40px] md:text-[85px]">
                <span className="wordspins  block" >Craft</span>
                <span className="wordspins block">Build</span>
                <span className="wordspins block">Grow</span>
            </div>
         </div>
          
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