import React from 'react';

// Styles
import './styles/index.css';

// Hooks
import { useScrollAnimation } from './hooks';

// Components
import {
  Navbar,
  Hero,
  Features,
  Services,
  Process,
  About,
  CTA,
  Footer,
  WorkflowAnimation
} from './components';

/**
 * PerFlo Agency Website
 * Built with React and Vanilla CSS (No Tailwind)
 * Focus: Healthcare Automation, ROI, System-Driven Results
 */
const PerFloWebsite = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WorkflowAnimation />
      <Services />
      <Process />
      <About />
      <CTA />
      <Footer />
    </>
  );
};

export default PerFloWebsite;
