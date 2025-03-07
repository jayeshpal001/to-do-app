import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 backdrop-blur-sm shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold ">Todo App</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#" className="hover:text-yellow-300">Home</a>
            <a href="#" className="hover:text-yellow-300">About</a>
            <a href="#" className="hover:text-yellow-300">Services</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-cyan-500/30 to-blue-500/30  backdrop-blur-md shadow-lg p-4 space-y-2">
          <a href="#" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
