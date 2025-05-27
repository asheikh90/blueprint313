import React from 'react';
import { FaArrowRight, FaCreditCard, FaHandshake, FaChalkboardTeacher, FaRobot, FaBullhorn } from 'react-icons/fa';

const Opportunity = () => {
  const opportunities = [
    {
      icon: <FaCreditCard className="text-4xl text-primary-500 mb-4" />,
      title: "Payment Processing",
      description: "Earn recurring revenue by helping businesses process credit card payments. Our partners provide the infrastructure, you provide the relationships.",
      benefits: [
        "Residual income from every transaction",
        "No technical knowledge required",
        "Full training and support provided",
        "Scalable business model"
      ]
    },
    {
      icon: <FaHandshake className="text-4xl text-primary-500 mb-4" />,
      title: "B2B Sales",
      description: "Leverage our proven sales systems to close high-ticket deals with businesses. We provide the leads, training, and support.",
      benefits: [
        "High commission structure",
        "Proven sales scripts and processes",
        "Weekly coaching and mentorship",
        "No cold calling required"
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-primary-500 mb-4" />,
      title: "Sales Coaching",
      description: "Help others improve their sales skills through our structured coaching program. Perfect for those with sales experience.",
      benefits: [
        "Recurring revenue from coaching clients",
        "Proven curriculum and materials provided",
        "Flexible schedule and location",
        "High-impact, rewarding work"
      ]
    },
    {
      icon: <FaRobot className="text-4xl text-primary-500 mb-4" />,
      title: "AI Strategies",
      description: "Implement cutting-edge AI solutions for businesses looking to automate and scale. No coding experience required.",
      benefits: [
        "Be at the forefront of technology",
        "Solve real business problems",
        "High-value service with premium pricing",
        "Ongoing support and updates"
      ]
    },
    {
      icon: <FaBullhorn className="text-4xl text-primary-500 mb-4" />,
      title: "Results-Based Marketing",
      description: "Help businesses generate leads and customers through our proven marketing frameworks. We provide the systems, you provide the execution.",
      benefits: [
        "Performance-based compensation",
        "Proven marketing templates and strategies",
        "Ongoing training and support",
        "Scalable client base"
      ]
    }
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="opportunity" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Wealth Creation Opportunities</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We've identified multiple proven paths to wealth that don't require traditional education or massive startup capital. Each opportunity is vetted, ethical, and aligned with Shia values.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200">
            {opportunities.map((opportunity, index) => (
              <button
                key={index}
                className={`py-4 px-6 font-medium text-sm sm:text-base transition-colors duration-300 ${
                  activeTab === index
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-600 hover:text-primary-500'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {opportunity.title}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  {opportunities[activeTab].icon}
                  <h3 className="text-2xl font-bold text-secondary-900">{opportunities[activeTab].title}</h3>
                </div>
                <p className="text-secondary-700 mb-6">
                  {opportunities[activeTab].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {opportunities[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span className="text-secondary-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center font-medium text-primary-600 hover:text-primary-500 transition-colors duration-300 group">
                  Learn more about this opportunity
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                <div className="bg-secondary-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-secondary-900">Success Story</h4>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-bold">MH</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-secondary-900">Mohammed H.</h5>
                        <p className="text-sm text-secondary-600">Started 8 months ago</p>
                      </div>
                    </div>
                    <p className="text-secondary-700 italic">
                      "I was skeptical at first, but after following the Blueprint313 system for this opportunity, I'm now earning more monthly than I did in my previous full-time job. The training and support have been incredible."
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-secondary-600">Monthly Income</p>
                        <p className="text-xl font-bold text-secondary-900">$8,500 - $12,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary-600">Hours Per Week</p>
                        <p className="text-xl font-bold text-secondary-900">15-20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold mb-4 text-secondary-900">Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm">✓</span>
                      </span>
                      <span className="text-secondary-700">Strong work ethic</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm">✓</span>
                      </span>
                      <span className="text-secondary-700">Willingness to learn</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm">✓</span>
                      </span>
                      <span className="text-secondary-700">Commitment to follow the system</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-600 text-sm">✗</span>
                      </span>
                      <span className="text-secondary-700">No degree required</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-600 text-sm">✗</span>
                      </span>
                      <span className="text-secondary-700">No large startup capital needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
            Join Waitlist to Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
