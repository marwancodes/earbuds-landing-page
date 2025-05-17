import React from 'react'
import ReviewSlider from './ReviewSlider';


const Reviews = () => {
  return (
    <div className='py-16'>
        {/* Title */}
        <h1 className='font-bold text-2xl sm:text-3xl text-center text-gray-900 dark:text-white '>
            10K+ Customer&apos;s Trust Us
        </h1>
        {/* Divider */}
        <span className='w-18 h-1 bg-[#ff5677] mx-auto mt-3 block rounded'></span>
        {/* Description */}
        <div className='w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16 '>
            {/* Slider */}
            <ReviewSlider />
        </div>
    </div>
  )
}

export default Reviews;