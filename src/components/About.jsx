import React from 'react';
import { FaRocket, FaLaptopCode, FaChartLine, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-primary-600 mb-4" />,
      title: 'Alternative Path to Success',
      description: 'Discover how to achieve financial freedom without traditional education paths.'
    },
    {
      icon: <FaLaptopCode className="text-4xl text-primary-600 mb-4" />,
      title: 'Practical Skills',
      description: 'Learn actionable skills that create real-world value and generate income.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-600 mb-4" />,
      title: 'Proven Strategies',
      description: 'Access wealth-building methods that aren\'t openly taught elsewhere.'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-primary-600 mb-4" />,
      title: 'Shia-Based Values',
      description: 'All strategies align with Shia principles and ethical business practices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Blueprint313</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Blueprint313 is a platform dedicated to teaching modern wealth creation strategies to the Shia community. We believe in providing practical, ethical alternatives to traditional career paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">{feature.title}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Our Mission</h3>
              <p className="text-secondary-700 mb-4">
                At Blueprint313, we're committed to showing that success doesn't require following conventional paths. We believe that with focus, determination, and the right guidance, anyone can build significant wealth.
              </p>
              <p className="text-secondary-700">
                Our platform provides the knowledge, strategies, and community support needed to pursue alternative paths to financial success while staying true to Shia values and principles.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-secondary-700">Focus on one thing until mastery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-secondary-700">Build systems that scale your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-secondary-700">Learn practical skills with immediate application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-secondary-700">Develop a growth mindset and entrepreneurial thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span className="text-secondary-700">Create ethical businesses aligned with Shia values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
