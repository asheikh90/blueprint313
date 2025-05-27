import React from 'react';
import { FaHandshake, FaChartLine, FaShieldAlt, FaSearchDollar, FaRegLightbulb } from 'react-icons/fa';

const InvestorNetwork = () => {
  const benefits = [
    {
      icon: <FaHandshake className="text-4xl text-primary-500 mb-4" />,
      title: "Exclusive Access",
      description: "Connect with pre-vetted Shia entrepreneurs with proven business models seeking capital for growth."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-500 mb-4" />,
      title: "Growth Potential",
      description: "Invest in businesses with demonstrated traction and clear paths to scalable returns."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-500 mb-4" />,
      title: "Ethical Alignment",
      description: "All investment opportunities are screened for compliance with Shia principles and ethical business practices."
    },
    {
      icon: <FaSearchDollar className="text-4xl text-primary-500 mb-4" />,
      title: "Due Diligence Support",
      description: "Receive comprehensive business analysis and risk assessment for each investment opportunity."
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-primary-500 mb-4" />,
      title: "Knowledge Sharing",
      description: "Learn from experienced investors and gain insights into successful investment strategies."
    }
  ];

  const opportunities = [
    {
      industry: "Technology",
      description: "AI-powered solutions for small businesses",
      investment: "$50K - $250K",
      return: "Projected 3.2x ROI in 36 months",
      stage: "Growth"
    },
    {
      industry: "Healthcare",
      description: "Innovative medical device manufacturing",
      investment: "$100K - $500K",
      return: "Projected 2.8x ROI in 48 months",
      stage: "Expansion"
    },
    {
      industry: "Real Estate",
      description: "Commercial property development in emerging markets",
      investment: "$250K - $1M",
      return: "Projected 2.5x ROI in 60 months",
      stage: "Established"
    }
  ];

  return (
    <section id="investor-network" className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Shia Investor Network</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect with vetted Shia entrepreneurs and access exclusive investment opportunities with proven business models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">For Investors</h3>
            <p className="text-gray-300 mb-6">
              Our investor network is designed for Shia professionals looking to invest in ethical, high-potential businesses within our community. We provide a platform for meaningful connections between capital and opportunity.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary-500 mr-3 mt-1">
                    {benefit.icon.type}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                Apply to Join Investor Network
              </button>
            </div>
          </div>
          
          <div className="bg-secondary-800 rounded-xl p-6 shadow-md border border-secondary-700">
            <h3 className="text-xl font-bold mb-6 text-white">Sample Investment Opportunities</h3>
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="border-b border-secondary-700 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-primary-400">{opportunity.industry}</h4>
                    <span className="text-sm bg-secondary-700 text-primary-300 px-2 py-1 rounded">
                      {opportunity.stage}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{opportunity.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Investment: <span className="text-white">{opportunity.investment}</span></span>
                    <span className="text-gray-400">Return: <span className="text-white">{opportunity.return}</span></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-2">These are sample opportunities. Actual investments require full due diligence.</p>
              <button className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300">
                View All Opportunities
              </button>
            </div>
          </div>
        </div>

        <div className="bg-secondary-900 rounded-xl shadow-md p-8 border border-secondary-800">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-white">For Entrepreneurs</h3>
              <p className="text-gray-300 mb-4">
                If you're a Shia entrepreneur with a proven business model seeking investment to scale, our network provides access to aligned investors who understand your vision and values.
              </p>
              <p className="text-gray-300 mb-6">
                We carefully vet all businesses to ensure they meet our standards for ethical practices, growth potential, and community impact.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-white">Requirements:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Established business with proven revenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Clear growth strategy and use of funds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Alignment with Shia ethical principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span className="text-gray-300">Detailed business plan and financials</span>
                </li>
              </ul>
              <button className="bg-secondary-700 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Apply for Funding
              </button>
            </div>
            <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-secondary-700 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Success Story</h3>
              <div className="bg-secondary-800 rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center mr-4">
                    <span className="text-primary-300 font-bold">AJ</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Ahmed J.</h5>
                    <p className="text-sm text-gray-400">MedTech Founder</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Through Blueprint313's investor network, we secured $350K in funding from fellow Shia investors who understood our vision. This allowed us to scale our medical device company while maintaining our ethical standards. The investors brought not just capital, but valuable industry connections."
                </p>
                <div className="border-t border-secondary-700 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Investment Secured</p>
                      <p className="text-xl font-bold text-white">$350,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Current Valuation</p>
                      <p className="text-xl font-bold text-white">$4.2M</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Our network has facilitated over $2.5M in investments across 12 Shia-owned businesses in the last 18 months, with an average return of 2.7x for investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorNetwork;
