import React from 'react';
import { FaMoneyBillWave, FaHandshake, FaChalkboardTeacher, FaRobot, FaChartLine, FaBitcoin, FaShieldAlt, FaSolarPanel, FaOilCan, FaIndustry } from 'react-icons/fa';

const Opportunity = () => {
  const opportunities = [
    {
      id: 1,
      icon: <FaMoneyBillWave className="text-3xl text-primary-500" />,
      title: "Payment Processing",
      description: "Earn recurring revenue every time anyone swipes their credit card at a business. Our payment processing opportunity allows you to build a steady income stream with minimal ongoing effort.",
      features: [
        "Residual income from every transaction",
        "Scalable business model",
        "Low startup costs",
        "Ongoing technical support"
      ],
      highlight: "Earn 0.5-1.5% of every transaction processed",
      animationDelay: "0"
    },
    {
      id: 2,
      icon: <FaHandshake className="text-3xl text-primary-500" />,
      title: "High-Ticket B2B Sales",
      description: "Access premium leads through our proprietary funnels and close high-value deals with businesses. We provide the leads, training, and support system to help you succeed.",
      features: [
        "Exclusive lead generation system",
        "Proven sales scripts and frameworks",
        "Comprehensive training program",
        "High commission structure"
      ],
      highlight: "Earn $5,000-$25,000 per closed deal",
      animationDelay: "100"
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-3xl text-primary-500" />,
      title: "High-End Closer Training",
      description: "Learn to become an elite sales professional who can close high-ticket deals. Our comprehensive training program will transform you into a top-tier closer with the skills to earn substantial commissions.",
      features: [
        "Advanced psychology and persuasion techniques",
        "Objection handling mastery",
        "High-ticket closing frameworks",
        "Ongoing mentorship from top closers"
      ],
      highlight: "Earn $10,000-$50,000 monthly as a trained closer",
      animationDelay: "200"
    },
    {
      id: 4,
      icon: <FaRobot className="text-3xl text-primary-500" />,
      title: "AI Business Strategies",
      description: "Implement cutting-edge AI solutions for businesses and get paid based on the results you deliver. Our pay-by-outcome model ensures clients see value and you maximize earnings.",
      features: [
        "Proprietary AI implementation frameworks",
        "Technical support from our team",
        "Performance-based compensation",
        "Exclusive access to AI tools and resources"
      ],
      highlight: "Earn 15-30% of the value you create",
      animationDelay: "300"
    },
    {
      id: 5,
      icon: <FaChartLine className="text-3xl text-primary-500" />,
      title: "Results-Based Marketing",
      description: "Offer marketing services where you only get paid when you deliver results. Our proven systems and templates make it easy to create winning campaigns for clients.",
      features: [
        "Done-for-you marketing templates",
        "Campaign management tools",
        "Performance tracking dashboard",
        "Client acquisition support"
      ],
      highlight: "Earn 20-40% of revenue generated",
      animationDelay: "400"
    },
    {
      id: 6,
      icon: <FaBitcoin className="text-3xl text-primary-500" />,
      title: "Crypto & Trading Opportunities",
      description: "Coming soon: Vetted opportunities in cryptocurrency and trading markets. We're partnering with trusted professionals to bring you ethical, Sharia-compliant investment strategies.",
      features: [
        "Sharia-compliant investment options",
        "Expert-led training and guidance",
        "Risk management frameworks",
        "Community support and networking"
      ],
      highlight: "Join the waitlist for early access",
      animationDelay: "500"
    }
  ];

  const verticals = [
    {
      icon: <FaSolarPanel className="text-2xl text-primary-500" />,
      title: "Solar Energy",
      description: "High-converting lead funnels for the booming solar industry, with qualified prospects ready to invest in renewable energy solutions."
    },
    {
      icon: <FaOilCan className="text-2xl text-primary-500" />,
      title: "Oil & Lubricants",
      description: "Specialized B2B lead generation for industrial lubricants, automotive oils, and related products with high commission potential."
    },
    {
      icon: <FaIndustry className="text-2xl text-primary-500" />,
      title: "Industrial Equipment",
      description: "Premium leads for high-ticket industrial machinery, equipment, and services with established buying intent."
    }
  ];

  return (
    <section id="opportunity" className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Exclusive Opportunities</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Blueprint313 provides multiple pathways to wealth creation, all vetted and proven to work. Join our waitlist to be the first to access these opportunities when we launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div 
              key={opportunity.id} 
              className={`bg-secondary-800 rounded-xl shadow-lg transition-all duration-500 hover:shadow-glow hover:-translate-y-2 overflow-hidden border border-secondary-700 animate-slide-up`}
              style={{animationDelay: `${opportunity.animationDelay}ms`}}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{opportunity.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{opportunity.description}</p>
                <div className="bg-primary-900 bg-opacity-30 p-4 rounded-lg mb-4 border border-primary-800">
                  <span className="font-semibold text-primary-400">{opportunity.highlight}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {opportunity.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-primary-900 to-secondary-800 p-4 border-t border-secondary-700">
                <button className="w-full bg-secondary-900 hover:bg-secondary-800 text-primary-400 font-medium py-2 px-4 rounded-lg border border-primary-700 transition-all duration-300 hover:text-primary-300 flex items-center justify-center">
                  <FaShieldAlt className="mr-2" /> Join Waitlist
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 animate-slide-up animate-delay-300">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Lead Generation Verticals</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our proprietary lead funnels supply high-quality prospects across multiple industries, giving you access to lucrative markets with proven conversion rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => (
              <div key={index} className="bg-secondary-800 p-6 rounded-xl shadow-md border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                  {vertical.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{vertical.title}</h4>
                <p className="text-gray-300">{vertical.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-900 to-secondary-800 rounded-2xl p-8 shadow-md border border-secondary-700 animate-slide-up animate-delay-400">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Why Choose Blueprint313?</h3>
            <p className="text-gray-300 mt-2">Our opportunities are specifically selected based on these criteria:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary-800 p-6 rounded-xl shadow-sm border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                <FaShieldAlt className="text-primary-500 text-xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Ethical & Sharia-Compliant</h4>
              <p className="text-gray-300">All opportunities align with Shia values and ethical business practices.</p>
            </div>
            
            <div className="bg-secondary-800 p-6 rounded-xl shadow-sm border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                <FaChartLine className="text-primary-500 text-xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven & Profitable</h4>
              <p className="text-gray-300">Each opportunity has been tested and proven to generate significant income.</p>
            </div>
            
            <div className="bg-secondary-800 p-6 rounded-xl shadow-sm border border-secondary-700 transform transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                <FaHandshake className="text-primary-500 text-xl" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Supported & Guided</h4>
              <p className="text-gray-300">You'll receive comprehensive training and ongoing support to succeed.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-slide-up animate-delay-500">
          <button className="btn-primary">
            Join the Waitlist Now
          </button>
          <p className="mt-4 text-gray-400">Only 110 spots available for our initial launch</p>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
