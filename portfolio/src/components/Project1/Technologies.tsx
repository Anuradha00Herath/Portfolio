// components/Technologies.tsx
import Image from 'next/image';
import React from 'react';
import rimg from '../../../assets/images/EpOqfO6d_400x400.png';
import rnimg from '../../../assets/images/images.png';
import tsimg from '../../../assets/images/typescript.svg';
import twimg from '../../../assets/images/images (1).png';
import nimg from '../../../assets/images/images (2).png';
import eimg from '../../../assets/images/express-js.png';
import psqlimg from '../../../assets/images/images (3).png';
import pimg from '../../../assets/images/images (4).png'


const technologies = [
  {
    id: 1,
    name: 'React',
    logo: rimg, // Replace with the actual logo path
  },
  {
    id: 2,
    name: 'React Native',
    logo: rnimg, // Replace with the actual logo path
  },
  {
    id: 3,
    name: 'TypeScript',
    logo: tsimg, // Replace with the actual logo path
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    logo: twimg, // Replace with the actual logo path
  },
  {
    id: 5,
    name: 'Node.js',
    logo: nimg, // Replace with the actual logo path
  },
  {
    id: 6,
    name: 'Express',
    logo: eimg, // Replace with the actual logo path
  },
  {
    id: 7,
    name: 'PostgreSQL',
    logo: psqlimg, // Replace with the actual logo path
  },
  {
    id: 8,
    name: 'Prisma',
    logo: pimg, // Replace with the actual logo path
  },
];

const Technologies: React.FC = () => {
  return (
    <div id="technologies" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Technologies Used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {technologies.map((tech) => (
            <div key={tech.id} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg transform hover:scale-105 transition duration-300">
              <Image
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
