// components/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to send form data
    console.log(formData);
  };

  return (
    <div id="contact" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-200 mb-12">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-400">
              Feel free to get in touch with me through any of the following methods:
            </p>
            <ul className="space-y-4">
              <li>
                <a href="mailto:herathanuradha03@gmail.com" className="text-pink-500 font-semibold hover:underline">
                  Email: herathanuradha03@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94715279236" className="text-pink-500 font-semibold hover:underline">
                  Phone: +9471 527 9236
                </a>
              </li>
              <li>
                <a href="https://wa.me/94715279236" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-semibold hover:underline">
                  WhatsApp: +9471 527 9236
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anuradha-herath-914223267/" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-semibold hover:underline">
                  LinkedIn: linkedin.com/in/AnuradhaHerath
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-gray-200 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
