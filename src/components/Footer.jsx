import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold">
                <span className="text-primary-500">Blueprint</span>
                <span className="text-primary-300">313</span>
              </a>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Blueprint313 is dedicated to providing ethical wealth creation opportunities for the Shia community. Our mission is to help you achieve financial freedom through proven, alternative paths.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="mailto:info@blueprint313.com" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-700 transition-colors duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Opportunities</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Payment Processing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">B2B Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Sales Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">AI Strategies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Results-Based Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Join Waitlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Expert Network</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Blueprint313. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
