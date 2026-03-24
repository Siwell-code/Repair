import React, { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';
import '../styles/ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const checkVisibility = useCallback(() => {
    const shouldBeVisible = window.pageYOffset > 300;
    if (shouldBeVisible !== isVisible) {
      requestAnimationFrame(() => {
        setIsVisible(shouldBeVisible);
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const throttledCheck = throttle(checkVisibility, 200);
    window.addEventListener('scroll', throttledCheck);
    
    return () => {
      window.removeEventListener('scroll', throttledCheck);
      throttledCheck.cancel();
    };
  }, [checkVisibility]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Наверх"
      title="Наверх"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;