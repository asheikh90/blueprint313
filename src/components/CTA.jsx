import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Blueprint313 Prelaunch Waitlist
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be among the first to access our wealth creation strategies, investor network, and franchise opportunities when we launch.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              What to Expect When We Launch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-white mb-2">Community Access</h4>
                <p className="text-gray-300">
                  Connect with like-minded Shia business owners and learn best practices from each other.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-white mb-2">Premium Strategies</h4>
                <p className="text-gray-300">
                  Get full access to wealth creation strategies and opportunities for $49/month.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="text-xl font-semibold text-white mb-2">Franchise Opportunity</h4>
                <p className="text-gray-300">
                  Secure your spot to own an exclusive franchise with $200K-$500K annual earning potential.
                </p>
              </div>
            </div>
            
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="mb-6">
                <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="" className="bg-secondary-800">I'm interested in...</option>
                  <option value="community" className="bg-secondary-800">Free Community</option>
                  <option value="premium" className="bg-secondary-800">Premium Strategies ($49/month)</option>
                  <option value="investor" className="bg-secondary-800">Investor Network</option>
                  <option value="franchise" className="bg-secondary-800">Franchise Opportunity ($100K)</option>
                </select>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Join the Waitlist
                <FaArrowRight className="ml-2" />
              </button>
            </form>
            
            <p className="text-gray-400 mt-4 text-sm">
              By joining our waitlist, you'll be the first to know when we launch and receive exclusive early-access benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
