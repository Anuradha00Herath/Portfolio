// components/Footer.tsx
import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Footer Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Anuradha Herath
            </h3>
            <p className="mt-1">Web & Mobile Full-Stack Developer, UI/UX Designer</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-400 hover:text-pink-500 transition duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-pink-500 transition duration-300"
                  aria-label="Phone"
                >
                  <FaPhone size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center md:mt-0 md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Anuradha Herath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
