import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-2xl font-bold text-white">Blueprint<span className="text-primary-500">313</span></span>
            </Link>
            <p className="mt-4 mb-6">
              Empowering the Shia community through ethical wealth creation strategies and business opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:info@blueprint313.com" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="about" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="opportunity" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link to="benefits" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="experts" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="testimonials" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="pricing" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Free Community
                  </Link>
                </li>
                <li>
                  <Link to="pricing" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Premium Strategies
                  </Link>
                </li>
                <li>
                  <Link to="investor-network" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Investor Network
                  </Link>
                </li>
                <li>
                  <Link to="franchise" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Franchise Opportunity
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@blueprint313.com" className="hover:text-primary-400 transition-colors duration-300">
                    info@blueprint313.com
                  </a>
                </li>
                <li>
                  <a href="tel:+13135481214" className="hover:text-primary-400 transition-colors duration-300">
                    (313) 548-1214
                  </a>
                </li>
                <li>
                  <Link to="cta" smooth={true} duration={500} className="hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Blueprint313. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="text-sm hover:text-primary-400 transition-colors duration-300 flex items-center"
            >
              Back to Top <FaArrowUp className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
