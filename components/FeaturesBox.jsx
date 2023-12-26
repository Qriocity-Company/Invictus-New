import React from 'react'

const FeaturesBox = () => {
  return (
    <div className='w-full py-10 md:py-20 flex justify-center items-center'>

        <div className='w-[85%] p-8 md:p-14 grid grid-cols-1 md:grid-cols-3 border-2 border-black rounded-[40px]'>

            <div className='font-grotesk text-center flex flex-col items-center  justify-center py-6 md:py-0'>
                <div className='text-[40px] md:text-[80px] font-bold leading-[4rem] md:leading-[7rem]'>01%</div>
                <p className='text-center text-[37px] font-[500] w-auto md:w-[50%] leading-10'>Increase in Sales</p>
            </div>
            <div className='font-grotesk text-center flex flex-col items-center  justify-center border-t-2 border-b-2 md:border-l-2 md:border-r-2  md:border-t-0 md:border-b-0 border-black py-6 md:py-0'>
                <div className='text-[40px] md:text-[80px] font-bold leading-[4rem] md:leading-[7rem]'>010+</div>
                <p className='text-center text-[37px] font-[500] w-auto md:w-[50%] leading-10'>High Quality Leads</p>
            </div>
            <div className='font-grotesk text-center flex flex-col items-center  justify-center py-6 md:py-0'>
                <div className='text-[40px] md:text-[80px] font-bold leading-[4rem] md:leading-[7rem]'>1X</div>
                <p className='text-center text-[37px] font-[500] w-auto md:w-[50%] leading-10 '>ROI on Ads Budget</p>
            </div>
      
        </div>

    </div>
  )
}

export default FeaturesBox