import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col bg-[#121212] bg_clip '>
        <div className='w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 '>
            {/* Text Content */}
            <div>
                {/* Heading */}
                <h1 className='text-3xl font-bold md:text-4xl text-white lg:text-5xl my-6 leading-[2.5rem] md:leading-[3.5rem]'>
                    Superior Sound & Comfortable Fit
                </h1>
                {/* Description */}
                <p className='text-xs sm:text-sm md:text-base font-medium text-[#f5f5f7]'>
                    Sit back, relax and prepare to experience a new level of audio excellence. These headphones combine cutting-edge technology with the finest craftsmanship, for the ultimate listening experience.
                </p>
                {/* Buttons */}
                <div className='mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                    {/* 1st Button */}
                    <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                        </span>
                        <span className="relative text-white">Buy Now</span>
                    </a>
                    {/* 2nd Button */}
                    <a href="#_" className="relative p-0.5 inline-flex items-center justify-center overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Explor More</span>
                        </span>
                    </a>
                </div>
            </div>
            {/* Image Content */}
            <div className='mx-auto hidden lg:block'>
                <Image src="/images/hero.png" alt="Earbuds" width={450} height={450} />
            </div>
        </div>
    </div>
  )
}

export default Hero