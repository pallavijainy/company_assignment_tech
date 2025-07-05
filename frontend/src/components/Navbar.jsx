import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full ">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-8" />
                    <h1 className="text-xl font-bold poppins">Landguru</h1>
                </div>

                <ul className="hidden md:flex space-x-6 text-gray-700">
                    <li><a href="#" className="block hover:text-blue-600">Home</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-blue-600">Adversite <IoIosArrowDown /></a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:text-blue-600">Support <IoIosArrowDown /></a></li>
                    <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
                </ul>

                <div className="hidden md:block">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                        Try for Free
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-6 pt-4 pb-6 space-y-4 ">
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="block hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="flex items-center gap-2 hover:text-blue-600">Adversite <IoIosArrowDown /></a></li>
                        <li><a href="#" className="flex items-center gap-2 hover:text-blue-600">Support <IoIosArrowDown /></a></li>
                        <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
                    </ul>
                    <button className="w-full mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                        Try for Free
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
