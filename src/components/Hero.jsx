import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight, FaLock, FaCheckCircle, FaSpinner, FaMobile } from 'react-icons/fa';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
    
    // Add scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

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

  const handleSMSClick = () => {
    const phoneNumber = "7327638486";
    const message = "Hi, I'm interested in the Blueprint313 initiative.\n\nMy name is [Your Name]. I'm from [Your City/State], and I'm interested in [Briefly describe your background and what aspect of Blueprint313 you're excited about—e.g., business scaling, AI tools, community, etc.].";
    
    // Create the SMS link with the preset message
    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <section id="hero" className="relative bg-dark-bg pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-secondary-400 rounded-full filter blur-3xl opacity-10 animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-3/5 mb-12 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1 bg-primary-600 bg-opacity-20 rounded-full text-primary-300 font-medium text-sm mb-6 animate-pulse-glow border border-primary-700 border-opacity-30">
              <span className="animate-shimmer inline-block">Coming Soon — Limited to 110 Members Only</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500 animate-gradient">
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
                  className="w-full px-5 py-4 pr-36 rounded-lg bg-dark-800 border border-primary-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || submitted}
                  required
                />
                <button 
                  type="submit"
                  className={`absolute right-1 top-1 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center btn-luxury ${
                    submitted 
                      ? 'bg-gradient-to-r from-primary-700 to-primary-800 text-white cursor-default' 
                      : isSubmitting 
                        ? 'bg-gradient-to-r from-primary-700 to-primary-800 text-white cursor-wait' 
                        : 'bg-gradient-to-r from-primary-400 to-primary-600 text-dark-bg hover:shadow-green hover:scale-105'
                  }`}
                  disabled={isSubmitting || submitted}
                >
                  {submitted ? (
                    <><FaCheckCircle className="mr-2" /> Reserved</>
                  ) : isSubmitting ? (
                    <><FaSpinner className="mr-2 animate-spin" /> Processing...</>
                  ) : (
                    <>Join Waitlist</>
                  )}
                </button>
              </div>
            </form>
            <div className="flex items-center mt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg bg-gradient-to-br from-primary-400 to-primary-600 animate-pulse-glow" style={{ animationDelay: `${i * 200}ms` }}></div>
                ))}
              </div>
              <div className="ml-3">
                <p className="text-gray-300 text-sm">
                  <span className="text-primary-400 font-semibold">Only 110 spots available</span> — {submitted ? '1 spot reserved for you' : '93 spots remaining'}
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-dark-800 bg-opacity-70 rounded-lg border border-primary-800 border-opacity-50">
              <div className="flex items-center">
                <FaMobile className="text-primary-400 text-xl mr-3" />
                <div>
                  <p className="text-white font-medium">Phone Number (SMS Enabled):</p>
                  <a 
                    href="#" 
                    onClick={handleSMSClick}
                    className="text-primary-300 text-lg font-bold hover:text-primary-400 transition-colors"
                  >
                    📱 (732) 763-8486
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Click the number to send a pre-filled SMS message about your interest
              </p>
            </div>
          </div>
          <div className={`md:w-2/5 md:pl-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative animate-float">
              <div className="luxury-card p-6 rounded-xl shadow-glow gold-border">
                <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                  <FaLock className="text-primary-400 mr-2" /> <span className="green-text">Exclusive Opportunities:</span>
                </h3>
                <div className="space-y-3">
                  <div className="bg-dark-800 bg-opacity-80 p-4 rounded-lg border border-primary-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-green-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mr-3 animate-pulse-glow">
                        <span className="text-dark-bg font-bold">1</span>
                      </div>
                      <h4 className="text-white font-semibold">Payment Processing</h4>
                    </div>
                    <p className="text-gray-300 mt-2 pl-13">Earn recurring revenue every time customers swipe their cards</p>
                  </div>
                  <div className="bg-dark-800 bg-opacity-80 p-4 rounded-lg border border-primary-800 transform transition-transform duration-500 hover:scale-105 hover:shadow-green-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mr-3 animate-pulse-glow">
                        <span className="text-dark-bg font-bold">2</span>
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
                    className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center transform transition-all duration-300 hover:translate-x-2 group"
                  >
                    See all opportunities <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 z-0 animate-pulse-glow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-600 rounded-full opacity-20 z-0 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-primary-800 reveal">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Trusted by members of the Shia community</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-primary-300 font-semibold transition-all duration-300 hover:text-primary-400 hover:scale-105">Najaf Institute</div>
              <div className="text-primary-300 font-semibold transition-all duration-300 hover:text-primary-400 hover:scale-105">Karbala Business Network</div>
              <div className="text-primary-300 font-semibold transition-all duration-300 hover:text-primary-400 hover:scale-105">Shia Entrepreneurs Alliance</div>
              <div className="text-primary-300 font-semibold transition-all duration-300 hover:text-primary-400 hover:scale-105">Muslim Professionals Group</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#0f1a14" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
