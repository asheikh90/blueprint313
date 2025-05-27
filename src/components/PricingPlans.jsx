import React from 'react';
import { Link } from 'react-scroll';
import { FaCheck, FaTimes, FaArrowRight, FaUsers, FaLightbulb, FaRocket, FaBuilding } from 'react-icons/fa';

const PricingPlans = () => {
  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Connect with Shia business owners and learn best practices",
      icon: <FaUsers className="text-4xl text-primary-500 mb-4" />,
      features: [
        { text: "Community forum access", included: true },
        { text: "Monthly virtual meetups", included: true },
        { text: "Basic business resources", included: true },
        { text: "Peer-to-peer learning", included: true },
        { text: "Limited access to case studies", included: true },
        { text: "Full wealth strategies", included: false },
        { text: "1-on-1 coaching", included: false },
        { text: "Opportunity access", included: false }
      ],
      buttonText: "Join Waitlist",
      buttonClass: "border-2 border-primary-600 text-primary-600 hover:bg-dark-800"
    },
    {
      name: "Premium Strategies",
      price: "$49",
      period: "/month",
      description: "Full access to wealth creation strategies and opportunities",
      icon: <FaLightbulb className="text-4xl text-primary-500 mb-4" />,
      features: [
        { text: "Everything in Community plan", included: true },
        { text: "Full wealth strategies", included: true },
        { text: "Weekly coaching calls", included: true },
        { text: "Opportunity access", included: true },
        { text: "Implementation guides", included: true },
        { text: "Priority support", included: true },
        { text: "Exclusive workshops", included: true },
        { text: "Franchise opportunity", included: false }
      ],
      buttonText: "Join Waitlist",
      buttonClass: "bg-primary-600 hover:bg-primary-500 text-white",
      highlighted: true
    },
    {
      name: "Investor Network",
      price: "Application",
      description: "For Shia professionals looking to invest in proven business models",
      icon: <FaRocket className="text-4xl text-primary-500 mb-4" />,
      features: [
        { text: "Vetted investment opportunities", included: true },
        { text: "Exclusive investor events", included: true },
        { text: "Due diligence support", included: true },
        { text: "Networking with founders", included: true },
        { text: "Investment education", included: true },
        { text: "Portfolio diversification guidance", included: true },
        { text: "Halal investment verification", included: true },
        { text: "Quarterly investment reports", included: true }
      ],
      buttonText: "Join Waitlist",
      buttonClass: "border-2 border-primary-600 text-primary-600 hover:bg-dark-800"
    },
    {
      name: "Franchise Opportunity",
      price: "$100K",
      description: "Own your exclusive franchise and earn $200K-$500K annually",
      icon: <FaBuilding className="text-4xl text-primary-500 mb-4" />,
      features: [
        { text: "Proven business model", included: true },
        { text: "Comprehensive training", included: true },
        { text: "Ongoing support", included: true },
        { text: "Exclusive territory rights", included: true },
        { text: "Marketing systems", included: true },
        { text: "Operations playbook", included: true },
        { text: "Scaling guidance", included: true },
        { text: "Potential $200K-$500K annual earnings", included: true }
      ],
      buttonText: "Join Waitlist",
      buttonClass: "bg-dark-700 hover:bg-dark-600 text-white"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Business Model & Pricing</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the path that aligns with your goals. From free community access to premium strategies and investment opportunities.
          </p>
          <p className="mt-4 text-primary-400 font-medium">
            This is not a get-rich-quick scheme. You will need to work for your success.
          </p>
          <p className="mt-2 text-gray-300 font-medium">
            We're currently in pre-launch phase. Join the waitlist to be notified when we launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-dark-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-dark-700 ${
                plan.highlighted ? 'ring-2 ring-primary-500 transform hover:scale-105' : 'transform hover:scale-102'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary-500 text-dark-900 text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-300">{plan.period}</span>}
                </div>
                <p className="text-gray-300 text-center mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <span className="text-green-500 mr-2 mt-1"><FaCheck /></span>
                      ) : (
                        <span className="text-red-500 mr-2 mt-1"><FaTimes /></span>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="cta" 
                  smooth={true} 
                  duration={500}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-dark-800 rounded-xl shadow-md p-8 max-w-4xl mx-auto border border-dark-700">
          <h3 className="text-2xl font-bold text-white mb-6">Important Notes About Our Business Model</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-primary-300 mb-2">This Is Not a Get-Rich-Quick Scheme</h4>
              <p className="text-gray-300">
                Blueprint313 is built on the foundation of ethical, sustainable wealth creation. Our strategies require real work, dedication, and implementation. We provide the roadmap, tools, and support, but your success depends on your commitment to taking action.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary-300 mb-2">Community-First Approach</h4>
              <p className="text-gray-300">
                We believe in the power of community, which is why we offer a free tier for Shia business owners to connect and learn from each other. Our premium offerings provide deeper strategies and personalized guidance for those ready to accelerate their journey.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary-300 mb-2">Ethical Investment Opportunities</h4>
              <p className="text-gray-300">
                Our investor network connects Shia professionals with vetted, ethical business opportunities that align with our values. We facilitate connections between capital and promising ventures within our community.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary-300 mb-2">Franchise Model</h4>
              <p className="text-gray-300">
                For those seeking a proven path to business ownership, our franchise opportunity provides a turnkey system with comprehensive training and support. The $100K investment gives you access to a business model with potential earnings of $200K-$500K annually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
