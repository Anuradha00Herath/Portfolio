// components/Projects.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../../assets/images/Scaleafy.jpg';
import StyleSync from '../../../assets/images/StyleSync.jpg'

const projects = [
  {
    id:1,
    title: 'Salon Management System',
    description: 'A full-stack web and mobile application for scheduling and managing salon appointments.',
    link: '#', // Replace with the actual project link
    image: StyleSync, // Replace with project image path
  },
  {
    id:2,
    title: 'Digital Marketing Website',
    description: 'A responsive marketing website with sections for services, blogs, and contact.',
    link: '#', // Replace with the actual project link
    image: image1, // Replace with project image path
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <Link href={`/Projects${project.id}`}>
                  <span
                    className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold transition duration-300"
                  >
                    View Project
                  </span>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
