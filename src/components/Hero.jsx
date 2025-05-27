import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight, FaLock } from 'react-icons/fa';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="hero" className="relative bg-dark-bg pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0 animate-slide-up">
            <div className="inline-block px-4 py-1 bg-primary-500 bg-opacity-20 rounded-full text-primary-300 font-medium text-sm mb-6 animate-pulse-glow">
              Coming Soon — Limited to 110 Members Only
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-accent-300 animate-gradient">
              Alternative Wealth Creation for the Shia Community
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
              Discover multiple proven paths to financial freedom without traditional education. Join our exclusive waitlist to be the first to access our wealth-building opportunities.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative max-w-md w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-5 py-4 pr-36 rounded-lg bg-secondary-800 border border-secondary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || submitted}
                  required
                />
                <button 
                  type="submit"
                  className={`absolute right-1 top-1 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center ${
                    submitted 
                      ? 'bg-primary-700 text-white cursor-default' 
                      : isSubmitting 
                        ? 'bg-primary-700 text-white cursor-wait' 
                        : 'bg-primary-600 hover:bg-primary-500 text-white hover:scale-105'
                  }`}
                  disabled={isSubmitting || submitted}
                >
                  {submitted ? (
                    <>Reserved</>
                  ) : isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Join Waitlist</>
                  )}
                </button>
              </div>
            </form>
            <div className="flex items-center mt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg bg-gradient-to-br from-primary-500 to-accent-500"></div>
                ))}
              </div>
              <div className="ml-3">
                <p className="text-gray-300 text-sm">
                  <span className="text-primary-400 font-semibold">Only 110 spots available</span> — {submitted ? '1 spot reserved for you' : '93 spots remaining'}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 md:pl-10">
            <div className="relative animate-float">
              <div className="bg-secondary-900 bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-xl border border-secondary-800 shadow-glow">
                <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                  <FaLock className="text-primary-500 mr-2" /> Exclusive Opportunities:
                </h3>
                <div className="space-y-3">
                  <div className="bg-secondary-800 p-4 rounded-lg border border-secondary-700 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mr-3 animate-pulse-glow">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="text-white font-semibold">Payment Processing</h4>
                    </div>
                    <p className="text-gray-300 mt-2 pl-13">Earn recurring revenue every time customers swipe their cards</p>
                  </div>
                  <div className="bg-secondary-800 p-4 rounded-lg border border-secondary-700 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mr-3 animate-pulse-glow">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="text-white font-semibold">B2B Sales</h4>
                    </div>
                    <p className="text-gray-300 mt-2 pl-13">High-ticket sales with our proprietary lead funnels</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link
                    to="opportunity"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center transform transition-transform duration-300 hover:translate-x-2"
                  >
                    See all opportunities <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full opacity-20 z-0 animate-pulse-glow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-500 rounded-full opacity-20 z-0 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-secondary-800 animate-slide-up animate-delay-300">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Trusted by members of the Shia community</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-white font-semibold">Najaf Institute</div>
              <div className="text-white font-semibold">Karbala Business Network</div>
              <div className="text-white font-semibold">Shia Entrepreneurs Alliance</div>
              <div className="text-white font-semibold">Muslim Professionals Group</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#111827" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
