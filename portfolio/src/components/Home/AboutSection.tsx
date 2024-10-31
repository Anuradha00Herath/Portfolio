// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/your-photo.jpg" // Replace with the path to your actual image
            alt="Anuradha Herath"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-pink-500"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-200">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Hi! I’m <span className="font-bold text-pink-500">Anuradha Herath</span>, currently an undergraduate specializing in Information Technology at the 
            <span className="font-bold text-pink-500"> University of Moratuwa</span>. 
            I am a passionate <span className="font-bold">web and mobile full-stack developer</span> as well as a <span className="font-bold">UI/UX designer</span> 
            with a focus on creating engaging and intuitive digital experiences.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            I specialize in delivering practical solutions to complex problems, combining creativity with technical skills to help businesses grow in the digital world.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
