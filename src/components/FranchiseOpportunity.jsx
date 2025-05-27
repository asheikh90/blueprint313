import React from 'react';
import { Link } from 'react-scroll';
import { FaStore, FaChartLine, FaUserTie, FaTools, FaRegHandshake } from 'react-icons/fa';

const FranchiseOpportunity = () => {
  const benefits = [
    {
      icon: <FaStore className="text-4xl text-primary-500 mb-4" />,
      title: "Proven Business Model",
      description: "Access a turnkey system with demonstrated success and profitability across multiple markets."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-500 mb-4" />,
      title: "High Earning Potential",
      description: "Franchise owners typically earn between $200,000-$500,000 annually after the initial ramp-up period."
    },
    {
      icon: <FaUserTie className="text-4xl text-primary-500 mb-4" />,
      title: "Comprehensive Training",
      description: "Receive extensive training on all aspects of the business, from operations to marketing and sales."
    },
    {
      icon: <FaTools className="text-4xl text-primary-500 mb-4" />,
      title: "Ongoing Support",
      description: "Benefit from continuous guidance, regular updates, and a dedicated support team to ensure your success."
    },
    {
      icon: <FaRegHandshake className="text-4xl text-primary-500 mb-4" />,
      title: "Exclusive Territory",
      description: "Secure exclusive rights to operate in your designated geographic area without internal competition."
    }
  ];

  return (
    <section id="franchise" className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Exclusive Franchise Opportunity</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Secure your spot to own an exclusive franchise in the next 12 months with potential earnings of $200,000-$500,000 annually.
          </p>
          <p className="mt-4 text-primary-400 font-medium">
            Coming Soon - Limited to only 10 franchise territories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-secondary-800 rounded-xl p-8 shadow-md border border-secondary-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Franchise Overview</h3>
            <div className="space-y-6 text-gray-300">
              <p>
                Our franchise opportunity provides a complete business system that has been refined and proven across multiple markets. With a modest investment of $100,000, you'll gain access to a turnkey operation with comprehensive training, ongoing support, and exclusive territory rights.
              </p>
              <p>
                This is not just about buying a business—it's about securing your financial future with a model that consistently generates between $200,000-$500,000 in annual earnings for franchise owners who follow our system.
              </p>
              <p>
                Unlike traditional franchises that often require millions in startup capital, our model is designed to be accessible while still delivering exceptional returns. We've streamlined operations, optimized marketing, and created systems that allow you to focus on growth rather than day-to-day management.
              </p>
              <div className="bg-secondary-700 rounded-lg p-6 mt-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Investment Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Initial Investment</p>
                    <p className="text-2xl font-bold text-white">$100,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Annual Earnings Potential</p>
                    <p className="text-2xl font-bold text-white">$200K-$500K</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Typical ROI Timeline</p>
                    <p className="text-xl font-bold text-white">12-24 months</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Available Territories</p>
                    <p className="text-xl font-bold text-white">Limited to 10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Our Franchise</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-secondary-800 rounded-lg p-4 border border-secondary-700 transform transition-all duration-300 hover:scale-105">
                  <div className="mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link 
                to="cta" 
                smooth={true} 
                duration={500}
                className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 w-full flex items-center justify-center"
              >
                Join Franchise Waitlist
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-secondary-800 rounded-xl shadow-md p-8 border border-secondary-700">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">My Business Scaling Experience</h3>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-700">
                <img 
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Ali H Sheikh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="bg-secondary-700 rounded-lg p-6">
                <p className="text-gray-300 text-lg italic mb-6">
                  "I've spent years developing and refining business systems that work across multiple industries. With Tennex Legal, we scaled from 3 to 30+ law firms in just 3 years. At One Investments, we built systems that allowed us to open 5+ offices and train 20+ team members who earned millions in commissions. I've also helped Maaco Auto Body grow from 1 to 2 locations while running multiple other businesses simultaneously."
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-white">Ali H Sheikh</h5>
                    <p className="text-sm text-gray-400">Founder, Blueprint313</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-semibold text-white">Franchise Application Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center mr-3 text-white font-bold">1</span>
                    <span className="text-gray-300">Join the waitlist for early access when we launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center mr-3 text-white font-bold">2</span>
                    <span className="text-gray-300">Receive detailed franchise information package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center mr-3 text-white font-bold">3</span>
                    <span className="text-gray-300">Schedule an introductory call to discuss the opportunity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center mr-3 text-white font-bold">4</span>
                    <span className="text-gray-300">Complete qualification process and application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center mr-3 text-white font-bold">5</span>
                    <span className="text-gray-300">Secure your exclusive territory</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Limited to only 10 franchise territories in the next 12 months</p>
            <Link 
              to="cta" 
              smooth={true} 
              duration={500}
              className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Request Franchise Information Package
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseOpportunity;
