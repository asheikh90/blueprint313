import React, { useState } from 'react';
import { FaArrowRight, FaLock, FaRegClock, FaUsers, FaCheckCircle } from 'react-icons/fa';

const CTA = () => {
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
    <section className="py-20 bg-gradient-to-br from-primary-900 via-secondary-900 to-secondary-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Blueprint313 Waitlist Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be among the first to access our exclusive wealth creation opportunities when we launch. Only 110 spots available.
            </p>
            <div className="inline-block px-4 py-2 bg-primary-500 bg-opacity-20 rounded-full text-primary-300 font-medium text-sm mb-6 animate-pulse-glow">
              <span className="flex items-center">
                <FaLock className="mr-2" /> Limited to 110 Members Only — 93 Spots Remaining
              </span>
            </div>
          </div>
          
          <div className="bg-secondary-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-glow border border-secondary-800 mb-12 animate-slide-up animate-delay-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-secondary-800 rounded-lg border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                  <FaRegClock className="text-2xl text-primary-400" />
                </div>
                <h4 className="font-semibold text-xl mb-2 text-white">Early Access</h4>
                <p className="text-gray-300">Be the first to access our opportunities before they're available to the public</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-secondary-800 rounded-lg border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                  <FaUsers className="text-2xl text-primary-400" />
                </div>
                <h4 className="font-semibold text-xl mb-2 text-white">Exclusive Community</h4>
                <p className="text-gray-300">Connect with like-minded Shia entrepreneurs focused on ethical wealth creation</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-secondary-800 rounded-lg border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                  <FaLock className="text-2xl text-primary-400" />
                </div>
                <h4 className="font-semibold text-xl mb-2 text-white">Reserved Spot</h4>
                <p className="text-gray-300">Guarantee your place in our programs when we officially launch</p>
              </div>
            </div>
            
            <div className="bg-secondary-800 p-6 rounded-lg border border-secondary-700 mb-8 animate-slide-up animate-delay-200">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-white">Launching Soon</h4>
                  <p className="text-gray-300">Join now to secure priority access</p>
                </div>
                <div className="flex items-center space-x-2 bg-primary-900 bg-opacity-30 px-4 py-2 rounded-lg border border-primary-800 animate-pulse-glow">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-primary-400 font-medium">Waitlist Open</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto animate-slide-up animate-delay-300">
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
                  <>Reserved <FaCheckCircle className="ml-2" /></>
                ) : isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>Join Waitlist <FaArrowRight className="ml-2" /></>
                )}
              </button>
            </form>
          </div>
          
          <div className="text-center animate-slide-up animate-delay-400">
            <p className="text-gray-300 mb-6">What happens after you join the waitlist?</p>
            <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0">
              <div className="flex items-center md:items-start md:flex-col md:text-center md:mx-6 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mr-4 md:mr-0 md:mb-3 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Confirmation email with exclusive content</p>
              </div>
              <div className="flex items-center md:items-start md:flex-col md:text-center md:mx-6 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mr-4 md:mr-0 md:mb-3 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Updates on launch timeline and opportunities</p>
              </div>
              <div className="flex items-center md:items-start md:flex-col md:text-center md:mx-6 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mr-4 md:mr-0 md:mb-3 animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Priority access when we officially launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
