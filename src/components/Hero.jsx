import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[150px] opacity-20 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700 rounded-full filter blur-[150px] opacity-20 animate-pulse-glow animate-delay-300"></div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Ethical Wealth Creation</span>
                <span className="block">For The <span className="text-primary-400">Shia Community</span></span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Discover alternative income streams and business opportunities that align with Shia principles. Join our community of entrepreneurs building ethical wealth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="cta"
                  smooth={true}
                  duration={500}
                  className="btn-luxury bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-green hover:scale-105 text-center flex items-center justify-center"
                >
                  <span>Join Waitlist</span>
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="opportunity"
                  smooth={true}
                  duration={500}
                  className="btn-luxury bg-dark-800 text-white border border-primary-600 px-8 py-4 rounded-lg transition-all duration-300 hover:bg-dark-700 text-center"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt={`Member ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-dark-bg"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-gray-300 text-sm">
                    <span className="text-primary-400 font-semibold">50+ Shia entrepreneurs</span> already on the waitlist
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl blur-md opacity-30 animate-pulse-glow"></div>
              <div className="relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Shia entrepreneurs collaborating" 
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Exclusive Wealth Strategies</h3>
                  <p className="text-gray-300 mb-4">
                    Access proven business models and income streams not taught in traditional education systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-dark-700 text-primary-300 text-xs font-medium px-2.5 py-1 rounded">Payment Processing</span>
                    <span className="bg-dark-700 text-primary-300 text-xs font-medium px-2.5 py-1 rounded">B2B Sales</span>
                    <span className="bg-dark-700 text-primary-300 text-xs font-medium px-2.5 py-1 rounded">Coaching</span>
                    <span className="bg-dark-700 text-primary-300 text-xs font-medium px-2.5 py-1 rounded">Real Estate</span>
                    <span className="bg-dark-700 text-primary-300 text-xs font-medium px-2.5 py-1 rounded">E-commerce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
