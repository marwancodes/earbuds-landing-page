"use client";

import ThemeToggle from '@/components/Helper/ThemeToggle';
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2';

type MobileNavProps = {
  openNav: ()=> void;
}

const Navbar = ({openNav}: MobileNavProps) => {

  const [navBg, setNavBg] = useState(false);
  
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    }

    window.addEventListener('scroll', handler);

    return () => { window.removeEventListener('scroll', handler); }
    
  }, []);
  

  return (
    <div className={`transition-all ${navBg ? "bg-[#100e0f] shadow-md" : "fixed"} duration-200 h-[10vh] w-full z-[100] fixed bg-[#100e0f]`}>
        <div className='flex justify-between items-center h-full sm:w-[80%] w-[90%] mx-auto'>
            {/* Logo */}
            <div>
                <Image src="/images/earbuds-logo.png" alt="Logo" className='' width={40} height={40} />
            </div>

            {/* NAV LINKS */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id} >
                    <p className="text-[#f5f5f7] hover:text-[#d1d1d1] font-semibold transition-all duration-200 cursor-pointer">
                      {link.label}
                    </p>
                  </Link>
                ))}
            </div>

            {/* CTA BUTTON */}
            <div className='flex items-center space-x-4'>
                {/* Buy Now Button */}
                <a href="#_" className="relative p-0.5 inline-flex items-center justify-center overflow-hidden group rounded-md">
                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                        <span className="relative text-white flex items-center"> <FaShoppingBag className='text-white mr-2' /> Buy Now</span>
                    </span>
                </a>
                {/* Theme Switch Button */}
                <ThemeToggle />
                {/* Burger Menu Icon */}
                <HiBars3BottomRight onClick={openNav} className='text-white w-8 h-8 cursor-pointer lg:hidden bg-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar