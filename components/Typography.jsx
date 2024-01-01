import React from 'react'

const Typography = ({font}) => {
  return (
    <div className={`w-[90%] md:my-12 md:pb-0 pb-8 `} style={{fontFamily:font}}>

        <h2 className='font-[600] text-3xl md:text-[45px]'>Typography</h2>

        <div className='flex items-center justify-between md:flex-row flex-col my-4 md:my-12'>

          <div className='flex flex-col justify-between gap-10 md:order-1 order-2'>


              <h1 className='font-[600] text-[45px] md:text-[90px]'>{font}</h1>

              <div className='font-[600] text-lg md:text-[27px] md:leading-[35px]'>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890~!@#$%^&*()_+</p>
              </div>
            
            <div className='font-[400] text-lg md:text-[27px] md:leading-[35px]'>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>1234567890~!@#$%^&*()_+</p>
            </div>
              
          </div>
          <div className='text-[200px] leading-[200px] md:text-[423px] md:leading-[423px] font-[600] md:order-2 order-1'>
              Aa
          </div>
        </div>
        
    </div>
  )
}

export default Typography