// components/Hero.tsx
import React from 'react';
import Navbar from './HeroSectionComponents/NavBar';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Navbar/>
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-green-500 opacity-40 blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide">
          Hi, I’m <span className="text-pink-500">Anuradha</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl mx-auto">
          I create engaging websites & digital experiences that help businesses grow.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-pink-500 hover:bg-pink-600 text-white px-10 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Explore My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
