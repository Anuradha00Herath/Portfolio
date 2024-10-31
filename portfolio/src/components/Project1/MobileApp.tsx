// components/MobileApp.tsx
import Image from 'next/image';
import React from 'react';
import image from '../../../assets/images/Top-Mobile-App-Development-Companies-in-Chennai-1.webp'

const MobileApp: React.FC = () => {
  return (
    <div id="mobile-app" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Salon Management Mobile App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
            <p className="text-gray-400 mb-4">
              Our salon management mobile app is designed to help salon owners efficiently manage their appointments. With an intuitive interface, owners can easily track their bookings and monitor their salons performance.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4">
              <li>Receive and manage appointments seamlessly.</li>
              <li>View salon statistics to improve services.</li>
              <li>Register multiple staff members under one salon.</li>
              <li>Show customers real-time availability and salon location.</li>
            </ul>
          </div>
          <div className="flex justify-center transform hover:scale-105 transition duration-300">
            <Image
              src={image} // Replace with the actual image path
              alt="Mobile App Overview"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex justify-center transform hover:scale-105 transition duration-300">
            <Image
              src={image}// Replace with the actual image path
              alt="Appointment Management Interface"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <p className="text-gray-400 mb-4">
              Our mobile app offers various features tailored for salon owners:
            </p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Manage appointments on-the-go with a user-friendly interface.</li>
              <li>Track staff availability and manage their schedules.</li>
              <li>Access detailed statistics and insights into salon performance.</li>
              <li>Provide customers with easy access to services and location.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
