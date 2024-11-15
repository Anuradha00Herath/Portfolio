// components/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 text-white z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold text-pink-500">
              Anuradha
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#projects" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Projects
          </a>
          <a href="#contact" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
