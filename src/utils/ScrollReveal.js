// ScrollReveal.js - Utility for scroll animations
export const setupScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Initial check
  setTimeout(revealOnScroll, 300);
  
  return () => window.removeEventListener('scroll', revealOnScroll);
};

// Hook for component-specific animations
export const setupComponentAnimations = (setIsVisible) => {
  setTimeout(() => {
    setIsVisible(true);
  }, 100);
};
