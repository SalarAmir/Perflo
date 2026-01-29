import React from 'react';

const steps = [
  {
    number: '1',
    title: 'The Audit',
    description: 'We analyze your current workflow to find the bottlenecks costing you money.'
  },
  {
    number: '2',
    title: 'The Build',
    description: 'We custom-build your automation system and integrate it with your existing tools.'
  },
  {
    number: '3',
    title: 'The Handoff',
    description: 'We launch the system, train your staff, and provide monthly maintenance reports.'
  }
];

const ProcessStep = ({ number, title, description }) => (
  <div className="flow-item fade-up">
    <div className="flow-number">{number}</div>
    <div className="flow-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Process = () => {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>The Path to Freedom</h2>
          <p>Three steps to reclaiming your time.</p>
        </div>
        
        <div className="grid-3" style={{ marginTop: '60px' }}>
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
