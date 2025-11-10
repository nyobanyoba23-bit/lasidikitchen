import { useState, useRef, useEffect } from 'react';

const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current; // Capture domRef.current in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use the captured variable in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, [domRef]); // Added domRef to dependency array

  return [domRef, isVisible];
};

export default useScrollAnimation;

