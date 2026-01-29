import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer
 * Used for scroll-based animations (fade-up effects)
 */
export const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    if (elements.length > 0) {
      observer.current = new IntersectionObserver((ioEntries) => {
        setEntries(ioEntries);
      }, { threshold: 0.1, ...options });

      elements.forEach(el => observer.current.observe(el));
    }
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [elements, options]);

  return [setElements, entries];
};

/**
 * Custom hook for handling scroll animations
 * Automatically observes and animates elements with 'fade-up' class
 */
export const useScrollAnimation = () => {
  const [setObservedElements, entries] = useIntersectionObserver();

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    setObservedElements(Array.from(els));
  }, [setObservedElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, [entries]);
};
