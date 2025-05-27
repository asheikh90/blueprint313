import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tennex Legal",
      location: "Law Firm Consulting",
      image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "When I joined Tennex Legal, they had only 3 clients. I implemented marketing systems, AI strategies, and outsourcing solutions to retain more profit. Within 3 years, we scaled to serving over 30 law firms across the country.",
      business: "Law Firm Consulting"
    },
    {
      name: "One Investments",
      location: "Real Estate Investment",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "I helped develop comprehensive systems for One Investments, recruited and trained over 20 team members, and facilitated millions in commissions for our sales team. We successfully expanded to 5+ offices across North America.",
      business: "Real Estate Investment"
    },
    {
      name: "Maaco Auto Body",
      location: "Auto Repair",
      image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "While simultaneously running multiple businesses, I assisted Maaco Auto Body in growing from a single location to two thriving shops. I implemented systems that allowed for efficient scaling without sacrificing quality or customer satisfaction.",
      business: "Auto Repair Franchise"
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
          <h2 className="section-title">My Success Stories</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Before launching Blueprint313, I've helped scale multiple businesses across different industries. Here are some of the results I've achieved.
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
          
          <div className="mt-16 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">My Investment in This Blueprint</h3>
            <p className="text-secondary-700 mb-6">
              This is the first time I'm teaching the exact blueprint that helped me succeed. I've invested:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary-50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 font-bold">
                    $$$
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">Financial Investment</h3>
                </div>
                <p className="text-secondary-700">
                  Hundreds of thousands of dollars invested in courses, training programs, and business tools to develop these systems.
                </p>
              </div>
              
              <div className="bg-secondary-50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 font-bold">
                    ⏰
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">Time Investment</h3>
                </div>
                <p className="text-secondary-700">
                  Countless hours working holidays and weekends, sacrificing time with family to perfect these business systems.
                </p>
              </div>
              
              <div className="bg-secondary-50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 text-primary-600 font-bold">
                    🧠
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">Experience</h3>
                </div>
                <p className="text-secondary-700">
                  Years of real-world testing, refining, and implementing these strategies across multiple industries and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
