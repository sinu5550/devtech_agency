import React from 'react'
import { Hero } from './Hero'
import { FaArrowRight } from "react-icons/fa6";
const Header = () => {
  return (
    <header className=' bg-gradient-to-b from-gray-300 to-white '>
        
<div className=''>
    
        {/* Desktop Navigation */}
        <div className='flex justify-between py-8 px-8'>
        <nav className='hidden md:flex items-center w-max py-3 px-5 bg-gray-100 gap-12 rounded-md font-semibold '>
            
            <a href="text-base tracking-wider z-50">Services</a>
            <a href="text-base tracking-wider z-50">Pricing</a>
            <a href="text-base tracking-wider z-50">About</a>
            <a href="text-base tracking-wider z-50">Insights</a>
            <a href="text-base tracking-wider z-50">Contact</a>
        </nav>
        <button className='py-3 px-5 bg-gray-100 rounded-md font-semibold flex items-center gap-2'>Get Started <FaArrowRight /></button>
        </div>

        <h1 className='font-bold tracking-wider text-[200px] hidden md:flex justify-center'>DevTech.</h1>
</div>

    <Hero/>
    </header>
    
  )
}

export default Header