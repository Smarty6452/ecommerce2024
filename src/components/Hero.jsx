import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* hero left  */}
        <div className="w-full sm:w-1/2 py-10 sm:py-0 flex flex-col items-center justify-center text-center">
    <div className="text-[#414141]">
        <div className="flex items-center justify-center gap-2 mb-3">
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        </div>
        <h1 className='text-3xl prata-regular sm:py-3'>Latest Arrivals</h1>
        <div className='flex items-center justify-center gap-2 mt-3'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
    </div>
</div>


        {/* Hero RIght Side  */}

        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />

    </div>
  )
}

export default Hero