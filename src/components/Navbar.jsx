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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-bg shadow-md py-2 backdrop-blur-md bg-opacity-90' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-2xl font-bold text-white">Blueprint<span className="text-primary-400">313</span></span>
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
                className="text-dark-200 hover:text-primary-300 transition-colors duration-300 cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="btn-luxury bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-green hover:scale-105 cursor-pointer border border-primary-400 border-opacity-30"
            >
              Join Waitlist
            </Link>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} className="text-primary-400" /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-dark-bg shadow-xl backdrop-blur-md bg-opacity-95`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-dark-200 hover:text-primary-300 transition-all duration-300 py-2 cursor-pointer border-b border-primary-900 border-opacity-30"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="cta"
              smooth={true}
              duration={500}
              className="btn-luxury bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-3 rounded-lg transition-all duration-300 text-center cursor-pointer mt-4 border border-primary-400 border-opacity-30 hover:shadow-green"
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
