import React from 'react';
import { FaRegLightbulb, FaRegClock, FaUsers, FaShieldAlt, FaHandHoldingUsd, FaGraduationCap } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRegLightbulb className="text-4xl text-primary-500 mb-4" />,
      title: 'Alternative Wealth Paths',
      description: 'Access proven wealth creation methods that don\'t require traditional education or career paths.',
      delay: '0'
    },
    {
      icon: <FaRegClock className="text-4xl text-primary-500 mb-4" />,
      title: 'Time Freedom',
      description: 'Build systems that generate income without trading your time for money.',
      delay: '100'
    },
    {
      icon: <FaUsers className="text-4xl text-primary-500 mb-4" />,
      title: 'Community Support',
      description: 'Connect with like-minded Shia entrepreneurs who share your values and ambitions.',
      delay: '200'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-500 mb-4" />,
      title: 'Ethical Opportunities',
      description: 'All wealth creation methods align with Shia principles and ethical business practices.',
      delay: '300'
    },
    {
      icon: <FaHandHoldingUsd className="text-4xl text-primary-500 mb-4" />,
      title: 'Multiple Income Streams',
      description: 'Diversify your income with various opportunities that complement each other.',
      delay: '400'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-primary-500 mb-4" />,
      title: 'Practical Education',
      description: 'Learn by doing with step-by-step guidance and mentorship from successful entrepreneurs.',
      delay: '500'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Why Join Blueprint313</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our platform is designed specifically for members of the Shia community who want to create wealth through ethical, alternative methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-secondary-900 rounded-xl shadow-md hover:shadow-glow transition-all duration-300 hover:-translate-y-2 p-8 border border-secondary-800 animate-slide-up"
              style={{animationDelay: `${benefit.delay}ms`}}
            >
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">{benefit.title}</h3>
              <p className="text-gray-300 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-900 to-secondary-800 rounded-xl shadow-md p-8 border border-secondary-700 animate-slide-up animate-delay-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Commitment</h3>
              <p className="text-gray-300 mb-4">
                At Blueprint313, we're dedicated to providing the Shia community with ethical wealth creation opportunities that align with our values and principles.
              </p>
              <p className="text-gray-300">
                We carefully vet each opportunity to ensure it meets our standards for ethics, profitability, and accessibility. Our goal is to help you build sustainable wealth without compromising your values.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-secondary-700 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Focus on practical, actionable strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Provide comprehensive training and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Create a supportive community environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Ensure all opportunities are ethical and Sharia-compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Continuously vet and add new wealth creation methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
