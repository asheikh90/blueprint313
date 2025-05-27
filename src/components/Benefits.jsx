import React from 'react';
import { FaRegLightbulb, FaRegClock, FaChartLine, FaShieldAlt, FaUsers, FaHandHoldingUsd } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRegLightbulb className="text-4xl text-primary-400 mb-4" />,
      title: "Knowledge Not Taught Elsewhere",
      description: "Access wealth-building strategies that aren't taught in traditional education systems or openly shared."
    },
    {
      icon: <FaRegClock className="text-4xl text-primary-400 mb-4" />,
      title: "Time Freedom",
      description: "Build systems that generate income without trading hours for dollars, giving you control over your time."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-400 mb-4" />,
      title: "Scalable Income",
      description: "Unlike traditional jobs with fixed salaries, these opportunities offer unlimited income potential as you scale."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-400 mb-4" />,
      title: "Ethical Alignment",
      description: "All strategies are vetted to ensure they align with Shia principles and ethical business practices."
    },
    {
      icon: <FaUsers className="text-4xl text-primary-400 mb-4" />,
      title: "Community Support",
      description: "Join a network of like-minded Shia entrepreneurs who provide support, accountability, and collaboration."
    },
    {
      icon: <FaHandHoldingUsd className="text-4xl text-primary-400 mb-4" />,
      title: "Low Startup Costs",
      description: "Most opportunities require minimal initial investment compared to traditional business models."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Alternative Paths?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Traditional education and career paths aren't the only way to success. Here's why our community members are choosing alternative wealth creation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-dark-800 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-green border border-dark-700">
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">{benefit.title}</h3>
              <p className="text-gray-300 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-800 rounded-xl shadow-md p-8 border border-dark-700">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-white">The Blueprint313 Difference</h3>
              <p className="text-gray-300 mb-4">
                Unlike generic "get rich quick" programs, Blueprint313 is specifically designed for the Shia community with a focus on ethical wealth creation that aligns with our values and principles.
              </p>
              <p className="text-gray-300">
                We don't just teach theory - we provide proven systems, ongoing support, and a community of successful entrepreneurs who are actively implementing these strategies.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-dark-600 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Who This Is For</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span className="text-gray-300">Ambitious individuals seeking financial independence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span className="text-gray-300">Those dissatisfied with traditional career paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span className="text-gray-300">People willing to work hard and follow proven systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span className="text-gray-300">Shia Muslims looking for ethical business opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-2">✓</span>
                  <span className="text-gray-300">Those ready to invest in themselves and their future</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 w-full">
                  Join Our Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
