import React from 'react';
import { FaUserTie, FaGraduationCap, FaChartLine, FaLaptopCode, FaHandshake, FaMoneyBillWave, FaRegLightbulb, FaShieldAlt, FaUsers, FaArrowRight } from 'react-icons/fa';

const Experts = () => {
  const expertCategories = [
    {
      icon: <FaMoneyBillWave className="text-3xl text-primary-500" />,
      title: "Payment Processing",
      description: "Expert with proven track record in merchant services and payment processing systems."
    },
    {
      icon: <FaHandshake className="text-3xl text-primary-500" />,
      title: "B2B Sales",
      description: "Elite closer with experience in high-ticket B2B sales and account management."
    },
    {
      icon: <FaGraduationCap className="text-3xl text-primary-500" />,
      title: "Sales Training",
      description: "Sales coach who has developed top-performing sales teams and methodologies."
    },
    {
      icon: <FaLaptopCode className="text-3xl text-primary-500" />,
      title: "AI Implementation",
      description: "AI specialist who has successfully integrated AI solutions for business growth."
    },
    {
      icon: <FaChartLine className="text-3xl text-primary-500" />,
      title: "Performance Marketing",
      description: "Results-driven marketer with expertise in pay-for-performance campaigns."
    },
    {
      icon: <FaUserTie className="text-3xl text-primary-500" />,
      title: "Crypto & Trading",
      description: "Ethical investment expert with proven success in Sharia-compliant trading."
    }
  ];

  return (
    <section id="experts" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Join Our Expert Network</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              We're seeking 12 elite professionals with proven track records to provide exceptional value in their respective fields. Join our exclusive network of experts and help shape the future of wealth creation in the Shia community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-secondary-900 rounded-xl p-6 border border-secondary-800 shadow-md transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-slide-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title} Expert</h3>
              </div>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-400 font-medium">1 of 2 positions open</span>
                <button className="text-white bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-lg transition-all duration-300 flex items-center">
                  Apply <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-900 to-secondary-800 rounded-xl p-8 border border-secondary-700 shadow-glow animate-slide-up animate-delay-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Join Our Expert Network?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <FaRegLightbulb className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Share Your Expertise</h4>
                    <p className="text-gray-300">Help others succeed while establishing yourself as a thought leader in your field.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <FaUsers className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Exclusive Network</h4>
                    <p className="text-gray-300">Connect with other elite professionals in the Shia community.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <FaMoneyBillWave className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Lucrative Compensation</h4>
                    <p className="text-gray-300">Earn substantial income through our revenue-sharing model.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What We're Looking For</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <FaChartLine className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-gray-300">Demonstrated success and expertise in your specific field.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <FaShieldAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ethical Approach</h4>
                    <p className="text-gray-300">Commitment to Sharia-compliant and ethical business practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <FaGraduationCap className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teaching Ability</h4>
                    <p className="text-gray-300">Skill in communicating complex concepts in an accessible way.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Apply to Join Our Expert Network
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
