// components/SalonProjectHero.tsx
import React from 'react';
import Image from 'next/image';
import image1 from '../../../assets/images/StyleSync.jpg';
import Navbar from './NavBar';

const SalonProjectHero: React.FC = () => {
  return (
    <div>
         <Navbar/>
        <div className="relative bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path-to-salon-project-background.jpg')", // Replace with actual background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)', // Blur effect on the background
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-32">
        {/* Text Content */}
        <div className="text-left max-w-md mb-8 lg:mb-0 lg:order-1">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Salon Appointment <br /> Management System
          </h1>
          <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 mb-8 lg:mb-0 lg:ml-12 lg:order-2 lg:hidden">
          <Image
            src={image1} // Replace with actual project image
            alt="Salon Management System"
            className="w-full h-auto"
          />
        </div>
          <p className="text-lg text-gray-300 mb-6">
            A user-friendly solution for booking and managing salon appointments. Empowering salon owners with effective tools to enhance customer experiences and streamline operations.
          </p>

          {/* Call-to-Action Button */}
          <a
            href="https://github.com/Anuradha00Herath/StyleSync.git"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View on github
          </a>
        </div>

        {/* Project Image with Card Effect */}
        <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 mb-8 lg:mb-0 lg:ml-12 lg:order-2 hidden lg:block">
          <Image
            src={image1} // Replace with actual project image
            alt="Salon Management System"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default SalonProjectHero;
