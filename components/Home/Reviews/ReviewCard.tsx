import Image from 'next/image';
import React from 'react';
import { BsQuote } from 'react-icons/bs';

type Props = {
    image: string;
    name: string;
    role: string;
}

const ReviewCard = ({ image, name, role }:Props) => {
  return (
    <div>
        <BsQuote className='w-14 h-14 text-[#ff5677]'/>
        <p className='text-sm text-center text-gray-800 dark:text-gray-200'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Excepturi rerum commodi nam aspernatur id repellat,
             esse amet itaque voluptatum laudantium vitae laboriosam 
             assumenda sapiente consectetur animi. Vero aut quas quaerat.
        </p>
        <div className='mt-6'>
            <Image src={image} alt='image' width={100} height={100} className='object-center mx-auto rounded-full' />
            <h1 className='mt-4 text-lg font-bold text-center'>{name}</h1>
            <h1 className='text-center text-gray-500'>{role}</h1>
        </div>
    </div>
  )
}

export default ReviewCard