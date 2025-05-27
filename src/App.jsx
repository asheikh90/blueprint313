import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CTA from './components/CTA';
import FranchiseOpportunity from './components/FranchiseOpportunity';
// Import other components as needed

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <Hero />
      {/* Add other components here */}
      <FranchiseOpportunity />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
