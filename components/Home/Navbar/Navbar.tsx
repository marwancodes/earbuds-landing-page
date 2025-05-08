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
                <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-[#da1e37] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#f8f8f8] ring-offset-[#ff86bd] hover:ring-offset-[#f72585] ease focus:outline-none">
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                        <FaShoppingBag className='text-white mr-2' />
                        Button Text
                    </span>
                </a>
                {/* Theme Switch Button */}
                <ThemeToggle />
                {/* Burger Menu Icon */}
                <HiBars3BottomRight onClick={openNav} className='text-white w-8 h-8 cursor-pointer lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar