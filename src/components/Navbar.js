import React from "react";
// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import {Link} from "react-router-dom";
export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0 bg-gradient-to-r from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-sm shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-100">Todo App</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <Link to="/" className="hover:text-yellow-300 text-blue-100">Home</Link>
            <Link to="/about" className="hover:text-yellow-300 text-blue-100">About</Link>
            <Link to="#" className="hover:text-yellow-300 text-blue-100">Services</Link>
            <Link to="#" className="hover:text-yellow-300 text-blue-100">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          {/* <button
            className="text-white md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-cyan-500/30 to-blue-500/30  backdrop-blur-md shadow-lg p-4 space-y-2">
          <Link to="#" className="block hover:text-gray-300">Home</Link>
          <Link to="#" className="block hover:text-gray-300">About</Link>
          <Link to="#" className="block hover:text-gray-300">Services</Link>
          <Link to="#" className="block hover:text-gray-300">Contact</Link>
        </div>
      )} */}
    </nav>
  );
}
