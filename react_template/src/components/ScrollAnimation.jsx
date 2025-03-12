import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, threshold = 0.2, className = '', animation = 'fade-in-up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Define the options for the Intersection Observer
    const options = {
      threshold: threshold,
      rootMargin: '0px 0px -100px 0px' // Adjust when the animation triggers
    };
    
    // Create an observer instance
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation has played, no need to keep observing
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Start observing the target element
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    // Clean up the observer when component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  // Different animation styles
  const animations = {
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'fade-in-up': 'opacity-0 translate-y-10 transition-all duration-1000',
    'fade-in-right': 'opacity-0 translate-x-10 transition-all duration-1000',
    'fade-in-left': 'opacity-0 -translate-x-10 transition-all duration-1000',
    'zoom-in': 'opacity-0 scale-95 transition-all duration-1000',
  };
  
  const animationClasses = animations[animation] || animations['fade-in'];
  
  return (
    <div 
      ref={ref} 
      className={`${className} ${animationClasses} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;