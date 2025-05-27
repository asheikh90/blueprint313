import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "Blueprint313 showed me that I don't need a traditional career to be successful. Their payment processing opportunity has given me recurring income that grows every month.",
      author: "Ahmed H.",
      location: "Chicago, IL",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      opportunity: "Payment Processing"
    },
    {
      id: 2,
      content: "The B2B sales training and lead generation system is incredible. I closed my first deal within 3 weeks and earned more in one month than I did in 6 months at my previous job.",
      author: "Zahra M.",
      location: "Houston, TX",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      opportunity: "B2B Sales"
    },
    {
      id: 3,
      content: "I was skeptical at first, but the AI business strategies opportunity has transformed my income. I'm now helping businesses implement AI solutions and getting paid based on results.",
      author: "Hussein A.",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      opportunity: "AI Strategies"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from members of our community who have already benefited from our wealth creation opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-secondary-800 rounded-xl shadow-lg p-8 relative border border-secondary-700 transform transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-slide-up`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-900 bg-opacity-50 rounded-full flex items-center justify-center animate-pulse-glow">
                <FaQuoteLeft className="text-primary-500" />
              </div>
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary-900 bg-opacity-30 rounded-full text-primary-400 text-sm font-medium mb-4 border border-primary-800">
                  {testimonial.opportunity}
                </div>
                <p className="text-gray-300 italic">{testimonial.content}</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-500"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary-800 rounded-xl shadow-md p-8 border border-secondary-700 animate-slide-up animate-delay-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mt-2">Join our waitlist today to be the first to access our opportunities when we launch.</p>
          </div>
          
          <div className="flex justify-center">
            <button className="btn-primary">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
