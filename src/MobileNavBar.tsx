import React, { useEffect, useState } from 'react'
import { IoMdBriefcase, IoMdContact, IoMdHome, IoMdInformationCircle } from 'react-icons/io';
import { scrollToSection } from './Hero';

const MobileNavBar = () => {
  type MenuItem = {
      icon: React.ReactNode;
      name:String
    };
    
    const MenuBar: MenuItem[] = [
      {
        icon: <IoMdHome size={20}/>,
        name:"Home"
      },
      {
        icon: <IoMdContact size={20}/>,
        name:"About"
      },
      {
        icon: <IoMdInformationCircle size={20} />,
        name:"Projects"
      },
      {
        icon: <IoMdBriefcase size={20} />,
        name:"Contact"
      },
    ];
    const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className='w-screen flex items-center justify-center'>
      <div
  className={`h-10 bg-gradient-to-r from-[#0c0f19] via-[#1a1d2a] to-[#2a2e42] fixed bottom-6 z-10 sm:hidden w-80 flex justify-between items-center px-4 rounded-md border-[#4b5563] border-2 shadow-[0_4px_10px_rgba(75,85,99,0.7)] transition-transform duration-500 ${
    showNav ? 'translate-y-0' : 'translate-y-20'
  }`}
>
        {MenuBar.map((menu, index) => (
          <div key={index} className='text-white' onClick={()=>scrollToSection(menu.name.toLowerCase())}>
            {menu.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileNavBar