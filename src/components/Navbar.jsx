import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Opportunities', to: 'opportunity' },
    { name: 'Benefits', to: 'benefits' },
    { name: 'Experts', to: 'experts' },
    { name: 'Success Stories', to: 'testimonials' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className={`${scrolled ? 'text-primary-500' : 'text-white'}`}>Blueprint</span>
              <span className={`${scrolled ? 'text-white' : 'text-primary-400'}`}>313</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer font-medium hover:text-primary-400 transition-colors duration-300 ${
                  scrolled ? 'text-gray-300' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button className={`${
              scrolled 
                ? 'bg-primary-600 hover:bg-primary-500 text-white' 
                : 'bg-white bg-opacity-10 hover:bg-opacity-20 text-white backdrop-filter backdrop-blur-sm border border-white border-opacity-20'
            } font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105`}>
              Join Waitlist
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-white' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-secondary-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <div className="space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white text-xl font-medium text-center hover:text-primary-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
              <button className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
