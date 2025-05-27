import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fatima K.",
      location: "Chicago, IL",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Blueprint313 completely changed my perspective on wealth creation. I was stuck in a 9-5 job with limited growth, but after implementing the strategies I learned, I've been able to build a business that generates more income with fewer hours.",
      business: "E-commerce Store Owner"
    },
    {
      name: "Hussein M.",
      location: "Houston, TX",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "As someone who was skeptical of alternative income paths, I can honestly say that Blueprint313 delivered beyond my expectations. The community support and practical strategies helped me build a six-figure business in just 14 months.",
      business: "Digital Marketing Agency"
    },
    {
      name: "Zahra J.",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "What sets Blueprint313 apart is their focus on ethical business practices that align with Shia values. I never felt like I had to compromise my principles to succeed. Now I'm earning more while making a positive impact.",
      business: "Health & Wellness Consultant"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Hear from members of our community who have successfully implemented our wealth creation strategies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="absolute top-8 left-8 text-primary-200">
              <FaQuoteLeft size={48} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-100">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-secondary-700 text-lg italic mb-6 relative z-10">
                  {testimonials[currentIndex].text}
                </p>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary-600">{testimonials[currentIndex].business}</p>
                  <p className="text-secondary-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentIndex === index ? 'bg-primary-600' : 'bg-secondary-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 font-bold">
                  76%
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Increased Income</h3>
              </div>
              <p className="text-secondary-700">
                76% of our members report at least doubling their income within the first year of implementing our strategies.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 font-bold">
                  92%
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Satisfaction Rate</h3>
              </div>
              <p className="text-secondary-700">
                92% of members report high satisfaction with the support, community, and results they've achieved through Blueprint313.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 font-bold">
                  68%
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Time Freedom</h3>
              </div>
              <p className="text-secondary-700">
                68% of our members report working fewer hours while earning more money after implementing our business systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
