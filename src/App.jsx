import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaRocket, FaLaptopCode, FaChartLine, FaGraduationCap, FaRegLightbulb, FaRegClock } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Opportunity from './components/Opportunity';
import Benefits from './components/Benefits';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import InvestorNetwork from './components/InvestorNetwork';
import FranchiseOpportunity from './components/FranchiseOpportunity';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add scroll reveal animation
    const handleScrollAnimation = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    // Initial check
    setTimeout(handleScrollAnimation, 300);
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <Opportunity />
      <Benefits />
      <PricingPlans />
      <InvestorNetwork />
      <FranchiseOpportunity />
      <Experts />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
