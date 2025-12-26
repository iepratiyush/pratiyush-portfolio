'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-card-bg/80 shadow-lg shadow-primary/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-2xl hover:shadow-primary/40"
      aria-label="Scroll to top"
    >
      <svg
        className="h-6 w-6 text-primary transition-transform group-hover:-translate-y-1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
