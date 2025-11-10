import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit
) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id));

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });

    return () => observer.current?.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};

export default useScrollSpy;
