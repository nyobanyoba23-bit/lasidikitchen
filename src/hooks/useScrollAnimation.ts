import React, { useState, useRef, useEffect } from 'react';

const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return [domRef, isVisible];
};

export default useScrollAnimation;

