import { navLinks } from '@/constant/constant'
import React from 'react'
import { CgClose } from 'react-icons/cg';

type MobileNavProps = {
  showNav: boolean;
  closeNav: ()=> void;
}


const MobileNav = ({closeNav, showNav}: MobileNavProps) => {

  const navOpen = showNav ? 'translate-x-0' : '-translate-x-[100%]';

  return (
    <div>
        {/* Overlay */}
        <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1003] bg-black opacity-70 w-full h-screen`}></div>
        {/* Navlinks */}
        <div className={`text-white ${navOpen} bg-[#100e0f] h-full w-[80%] sm:w-[60%] z-[1010] fixed flex flex-col justify-center transform transition-all duration-500 delay-300 space-y-6`}>
            {navLinks.map((link) => (
                <a href={link.url} key={link.id} className="text-[#f5f5f7] hover:text-[#da1e37] font-semibold transition-all duration-200 cursor-pointer text-center text-2xl py-4">
                    {link.label}
                </a>    
            ))}
          {/* Close Button */}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>
        </div>
    </div>
  )
}

export default MobileNav;