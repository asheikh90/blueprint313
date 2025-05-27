import React from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Experts = () => {
  const experts = [
    {
      name: "Ali H Sheikh",
      role: "Founder & Lead Strategist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Ali H Sheikh is a multi-disciplinary entrepreneur and strategist with a track record of building scalable operations in the automotive, tech, and consulting industries. He currently owns and operates two auto body shops in Pennsylvania and New Jersey, and is scaling several niche ventures including DriveCal (ADAS calibration), Refinery X / BlackForge Lubricants (oil and lubricant distribution), and BookedByAI (AI-powered client acquisition and automation services).\n\nAli's background includes a strong foundation in sales, management, recruiting, and training, having led high-performance teams across industries. He combines sharp execution with systems thinking, enabling him to build, optimize, and scale businesses from zero to growth mode using lean, data-backed strategies.\n\nBorn in Queens and shaped by a diverse journey through corporate leadership and community building, Ali now focuses on empowering others through platforms like Blueprint313 — a launchpad for Shia Muslim entrepreneurs — and Ghadeer Club, a nonprofit gaming and content creator network.\n\nA relentless operator and first-principles thinker, Ali doesn't chase trends — he builds ecosystems.",
      social: {
        linkedin: "https://linkedin.com/in/alihsheikh",
        twitter: "https://twitter.com/alihsheikh",
        instagram: "https://instagram.com/alihsheikh"
      }
    },
    {
      name: "Sarah Jafri",
      role: "Business Development",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Sarah specializes in helping businesses scale through strategic partnerships and innovative growth strategies.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Hasan Rizvi",
      role: "Financial Advisor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Hasan has over 15 years of experience in financial planning and wealth management for entrepreneurs.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  const [selectedExpert, setSelectedExpert] = React.useState(null);

  const openBioModal = (expert) => {
    setSelectedExpert(expert);
  };

  const closeBioModal = () => {
    setSelectedExpert(null);
  };

  return (
    <section id="experts" className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Meet Our Experts</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our team of industry professionals brings decades of combined experience in alternative wealth creation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-secondary-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
                <p className="text-primary-400 mb-4">{expert.role}</p>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {expert.bio.split('\n')[0]}
                </p>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => openBioModal(expert)}
                    className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
                  >
                    Read Full Bio
                  </button>
                  <div className="flex space-x-3">
                    <a href={expert.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      <FaLinkedinIn />
                    </a>
                    <a href={expert.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      <FaTwitter />
                    </a>
                    <a href={expert.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div className="bg-secondary-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedExpert.name}</h3>
                  <p className="text-primary-400">{selectedExpert.role}</p>
                </div>
                <button 
                  onClick={closeBioModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="prose prose-invert max-w-none">
                {selectedExpert.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-300 mb-4">{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-secondary-700">
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">Connect with {selectedExpert.name.split(' ')[0]}</p>
                  <div className="flex space-x-4">
                    <a href={selectedExpert.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      <FaLinkedinIn size={20} />
                    </a>
                    <a href={selectedExpert.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      <FaTwitter size={20} />
                    </a>
                    <a href={selectedExpert.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experts;
