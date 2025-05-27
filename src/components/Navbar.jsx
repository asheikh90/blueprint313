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
    { name: 'Pricing', to: 'pricing' },
    { name: 'Investor Network', to: 'investor-network' },
    { name: 'Franchise', to: 'franchise' },
    { name: 'Team', to: 'experts' },
    { name: 'Testimonials', to: 'testimonials' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-2xl font-bold text-white">Blueprint<span className="text-primary-500">313</span></span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Join Waitlist
            </Link>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-secondary-900 shadow-xl`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 py-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-3 rounded-lg transition-all duration-300 text-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
