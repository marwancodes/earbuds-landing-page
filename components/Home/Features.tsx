import React from 'react';
import { featuresData } from '@/constant/constant';

const Features = () => {
  return (
    <div className='py-16'>
        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuresData.map((feature) => (
                <div key={feature.id} className='text-center mx-auto'>
                    {/* Icon */}
                    <div className='mx-auto text-center'>
                        {feature.icon}
                    </div>
                    {/* Title */}
                    <h1 className='mt-4 text-lg font-semibold text-shadow-gray-900 dark:text-white'>
                        {feature.title}
                    </h1>
                    {/* Description */}
                    <p className='mt-4 text-sm font-medium text-gray-600 dark:text-gray-300'>
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features