import React, { useState } from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen ,setIsOpen] = useState(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
  return (
    <nav className='w-full'>
        <div className='flex justify-between items-center p-4'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="logo" className='h-8'/>
                <h1 className='text-xl font-bold poppins'>Landguru</h1>
            </div>
        </div>
        <ul className='hidden md:flex space-x-6 text-gray-700'>
            <li><a href="#" className='block hover:text-blue-600'>Home</a></li>
            <li><a href="#" className='flex items-center gap-2 hover:text-blue-600'>Adversite</a></li>
            <li><a href="#" className='flex items-center gap-2 hover:text-blue-600'>Support</a></li>
            <li><a href="#" className='block hover:text-blue-600'>Contact</a></li>
        </ul>
        <div className='hidden md:block'>
            <button className='text-[#EF9E48] bg-[#FCF2E8] px-4 py-2 rounded '>Try for Free</button>
        </div>

        <div>
        </div>

    </nav>
  )
}

export default Navbar
