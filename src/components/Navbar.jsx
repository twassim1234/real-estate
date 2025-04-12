import React, { useEffect, useState } from 'react'
import Logo from "../Assets/Logo.png";
import menu from "../Assets/menu-icon.svg";
import close from "../Assets/close-icon.svg";
import Contact from './Contact';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

useEffect(()=>{
  if (showMobileMenu){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return()=>{
    document.body.style.overflow = 'auto'
  };
},[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between
      items-center py-4 px-6 md:px-0 lg:px-32 bg-transparent'>
        <img src={Logo} alt="Logo" className='h-16 w-32'/>
        <ul className='hidden md:flex gap-9 text-black text-lg'>
          <a href="/" className='cursor-pointer
           hover:text-gray-400'>Home</a>
           <a href="/About" className='cursor-pointer
           hover:text-gray-400'>About</a>
           <a href="/Projects" className='cursor-pointer
           hover:text-gray-400'>Selling</a>
            <a href="/Rent" className='cursor-pointer
           hover:text-gray-400'>Rent</a>
        </ul>
        <button className='hidden md:block bg-black px-8 py-2 
        rounded-full font-bold text-white'><a href="/Contact">Contact Us</a></button>

        <img  onClick={()=> setShowMobileMenu(true) } src={menu} className="md:hidden w-7 cursor-pointer" alt='menu'/>
      </div>

      {/*------------------------mobile-menu----------*/}

      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false) } src={close} className='w-6' alt='close'/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5
         text-lg font-medium '>
          <a onClick={()=> setShowMobileMenu(false) } href="/" className='px-4 py-2 rounded-b-full 
          inline-block'>Home</a>
              <a onClick={()=> setShowMobileMenu(false) } href="/About" className='px-4 py-2 rounded-b-full 
          inline-block'>About</a>
              <a onClick={()=> setShowMobileMenu(false) } href="/Projects" className='px-4 py-2 rounded-b-full 
          inline-block'>Projects</a>
                  <a onClick={()=> setShowMobileMenu(false) } href="/Projects" className='px-4 py-2 rounded-b-full 
          inline-block'>Projects</a>
         <button className=' bg-black px-8 py-2 
         rounded-full text-white mt-28 font-bold '><a href='/Contact'></a>Contact Us</button>     
        </ul>
       
      </div>

    </div>
  )
}

export default Navbar
