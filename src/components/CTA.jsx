import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
    <section id="cta" className="py-20 bg-gradient-to-br from-secondary-900 to-secondary-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-secondary-800 rounded-2xl p-8 md:p-12 shadow-glow border border-secondary-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Alternative Wealth Journey?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join our exclusive waitlist today. Limited to only 110 members from the Shia community who are serious about creating wealth through alternative paths.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-5 py-4 rounded-lg bg-secondary-700 border border-secondary-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || submitted}
                required
              />
            </div>
            <button 
              type="submit"
              className={`w-full font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${
                submitted 
                  ? 'bg-primary-700 text-white cursor-default' 
                  : isSubmitting 
                    ? 'bg-primary-700 text-white cursor-wait' 
                    : 'bg-primary-600 hover:bg-primary-500 text-white hover:scale-105'
              }`}
              disabled={isSubmitting || submitted}
            >
              {submitted ? (
                <>Spot Reserved - Thank You!</>
              ) : isSubmitting ? (
                <>Processing...</>
              ) : (
                <>Join Waitlist <FaArrowRight className="ml-2" /></>
              )}
            </button>
            
            {submitted && (
              <div className="mt-4 text-center text-primary-400">
                We'll contact you soon with exclusive access details.
              </div>
            )}
          </form>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-4">Only 110 spots available for our first cohort</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse"></div>
              <p className="text-primary-400 font-medium">
                {submitted ? '1 spot reserved for you' : '93 spots remaining'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
