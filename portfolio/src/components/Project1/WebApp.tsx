// components/WebApp.tsx
import Image from 'next/image';
import React from 'react';
import image1 from '../../../assets/images/StyleSyncWeb.jpg';
import image2 from '../../../assets/images/StyleSync/WNeb8mxSNr.png';

const WebApp: React.FC = () => {
  return (
    <div id="web-app" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Salon Appointment Booking Web App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
            <p className="text-gray-400 mb-4">
              Our salon appointment booking web app is designed to simplify the process for customers. They can choose a salon, select a staff member, pick a date and time, and book their appointment effortlessly. 
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              <li>Book appointments with or without signing in.</li>
              <li>Receive all appointment details via email after booking.</li>
              <li>Cancel appointments up to 15 minutes before the scheduled time.</li>
            </ul>
          </div>
          <div className="flex justify-center transform hover:scale-105 transition duration-300">
            <Image
              src={image2} // Replace with the actual image path
              alt="Web App Overview"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex justify-center transform hover:scale-105 transition duration-300">
            <Image
              src={image1} // Replace with the actual image path
              alt="Booking Interface"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <p className="text-gray-400 mb-4">
              Our web app includes several key features that enhance the user experience:
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Easy navigation for selecting salons and staff.</li>
              <li>Intuitive calendar interface for choosing dates and times.</li>
              <li>Real-time email notifications for confirmations and reminders.</li>
              <li>Simple cancellation process for flexibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApp;
