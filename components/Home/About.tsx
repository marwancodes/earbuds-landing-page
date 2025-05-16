import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

type Props = {
    imageOrder: string;
    textOrder: string;
    title: string;
    linkText: string;
}

const About = ({imageOrder, textOrder, title, linkText} : Props) => {
  return (
    <div className='py-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* text content */}
            <div className={`${textOrder}`}>
                {/* Title */}
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                    {title}
                </h1>
                {/* List */}
                <div className='mt-8'>
                    <div className='mb-6 flex items-center space-x-4'>
                        <div className='w-6 h-6 flex flex-col items-center justify-center rounded-full bg-pink-600 text-white'>
                            <FaCheck />
                        </div>
                        <p className='text-sm sm-text-base text-gray-600 dark:text-gray-300'>
                            High-Resolution Audio compatible
                        </p>
                    </div>
                    <div className='mb-6 flex items-center space-x-4'>
                        <div className='w-6 h-6 flex flex-col items-center justify-center rounded-full bg-pink-600 text-white'>
                            <FaCheck />
                        </div>
                        <p className='text-sm sm-text-base text-gray-600 dark:text-gray-300'>
                            High quality wireless audio with BLUETOOTH® 
                        </p>
                    </div>
                    <div className='mb-6 flex items-center space-x-4'>
                        <div className='w-6 h-6 flex flex-col items-center justify-center rounded-full bg-pink-600 text-white'>
                            <FaCheck />
                        </div>
                        <p className='text-sm sm-text-base text-gray-600 dark:text-gray-300'>
                            Smart listening experience by Adaptive Sound Control
                        </p>
                    </div>
                    <div className='mb-6 flex items-center space-x-4'>
                        <div className='w-6 h-6 flex flex-col items-center justify-center rounded-full bg-pink-600 text-white'>
                            <FaCheck />
                        </div>
                        <p className='text-sm sm-text-base text-gray-600 dark:text-gray-300'>
                            Ergonomic, enfolding design earpads
                        </p>
                    </div>
                    <p className='font-semibold text-pink-600 cursor-pointer hover:underline w-fit'>{linkText}</p>
                </div>
            </div>
            {/* Image Content */}
            <div className={`${imageOrder}`}>
                <Image src="/images/h1.png" alt='image' width={500} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default About