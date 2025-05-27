import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            interest: formData.interest
          }
        ]);
      
      if (error) throw error;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        interest: ''
      });
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for joining our waitlist! We will contact you soon.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your information. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-dark-900 to-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Blueprint313 Prelaunch Waitlist
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be among the first to access our wealth creation strategies, investor network, and franchise opportunities when we launch.
          </p>
          
          <div className="bg-dark-800 bg-opacity-80 rounded-xl p-8 backdrop-blur-sm border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              What to Expect When We Launch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-dark-700 bg-opacity-50 rounded-lg p-4 border border-dark-600">
                <h4 className="text-xl font-semibold text-primary-300 mb-2">Community Access</h4>
                <p className="text-gray-300">
                  Connect with like-minded Shia business owners and learn best practices from each other.
                </p>
              </div>
              <div className="bg-dark-700 bg-opacity-50 rounded-lg p-4 border border-dark-600">
                <h4 className="text-xl font-semibold text-primary-300 mb-2">Premium Strategies</h4>
                <p className="text-gray-300">
                  Get full access to wealth creation strategies and opportunities for $49/month.
                </p>
              </div>
              <div className="bg-dark-700 bg-opacity-50 rounded-lg p-4 border border-dark-600">
                <h4 className="text-xl font-semibold text-primary-300 mb-2">Franchise Opportunity</h4>
                <p className="text-gray-300">
                  Secure your spot to own an exclusive franchise with $200K-$500K annual earning potential.
                </p>
              </div>
            </div>
            
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="flex-1 px-4 py-3 rounded-lg bg-dark-900 text-white placeholder-gray-400 border border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                  disabled={isSubmitting}
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-dark-900 text-white placeholder-gray-400 border border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-6">
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-900 text-white border border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                  disabled={isSubmitting}
                >
                  <option value="" className="bg-dark-800">I'm interested in...</option>
                  <option value="community" className="bg-dark-800">Free Community</option>
                  <option value="premium" className="bg-dark-800">Premium Strategies ($49/month)</option>
                  <option value="investor" className="bg-dark-800">Investor Network</option>
                  <option value="franchise" className="bg-dark-800">Franchise Opportunity ($100K)</option>
                </select>
              </div>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-800 bg-opacity-20 text-green-300 border border-green-700' : 'bg-red-800 bg-opacity-20 text-red-300 border border-red-700'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit"
                className={`w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
                {!isSubmitting && <FaArrowRight className="ml-2" />}
              </button>
            </form>
            
            <p className="text-gray-400 mt-4 text-sm">
              By joining our waitlist, you'll be the first to know when we launch and receive exclusive early-access benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
