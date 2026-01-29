import React from 'react';

const CTA = () => {
  return (
    <section id="audit" className="cta-section">
      <div className="container cta-container fade-up">
        <h2>Ready to Automate?</h2>
        <p>
          Book a free 30-minute audit. We'll show you exactly where you're losing time 
          and how much you could save. No obligation.
        </p>
        <a href="https://calendly.com/salaramir2002/30min" target="_blank" rel="noopener noreferrer">
          <button className="btn-white">
            Schedule Free Audit
          </button>
        </a>
        <p style={{ fontSize: '0.9rem', marginTop: '20px', opacity: 0.7 }}>
          Includes a custom ROI calculation for your practice.
        </p>
      </div>
    </section>
  );
};

export default CTA;
