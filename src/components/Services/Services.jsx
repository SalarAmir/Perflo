import React from 'react';
import { Pill, ClipboardList } from 'lucide-react';

// Use Case Visual Components
const NoShowVisual = () => (
  <div style={{ width: '240px', background: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
    <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '10px 10px 10px 0', marginBottom: '10px', fontSize: '12px' }}>
      Hi Sarah, reminder for your cleaning tmrw at 2 PM. Reply C to confirm.
    </div>
    <div style={{ background: '#2EBFA5', color: 'white', padding: '10px', borderRadius: '10px 10px 0 10px', marginLeft: 'auto', marginBottom: '10px', width: 'fit-content', fontSize: '12px' }}>
      C
    </div>
    <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '10px 10px 10px 0', fontSize: '12px' }}>
      Great! See you then. Here is your intake form: link.com/form
    </div>
  </div>
);

const InventoryVisual = () => (
  <div style={{ textAlign: 'center' }}>
    <Pill size={60} color="#ef4444" style={{ marginBottom: '20px' }} />
    <div style={{ background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', display: 'flex', gap: '10px', alignItems: 'center' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
      <span style={{ fontWeight: '600', fontSize: '14px' }}>Alert: Amoxicillin Expiring in 30 Days</span>
    </div>
  </div>
);

const TrialVisual = () => (
  <>
    <ClipboardList size={80} color="#2EBFA5" />
    <div style={{ position: 'absolute', bottom: '30px', background: 'white', padding: '10px 20px', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', fontWeight: 'bold', color: '#0B2545' }}>
      ✓ 12 New Participants
    </div>
  </>
);

// Use Case Data
const useCases = [
  {
    tag: 'For Medical & Dental Practices',
    title: 'The "No-Show" Killer',
    description: 'Stop wasting hours calling patients. Our system automatically confirms appointments via SMS/Email, sends intake forms 3 days prior, and instantly triggers reschedule sequences for cancellations.',
    result: '30-40% Reduction in No-Shows',
    Visual: NoShowVisual,
    reversed: false
  },
  {
    tag: 'For Pharmacies',
    title: 'Inventory Intelligence',
    description: 'Never throw away expired medication again. We track your stock and send proactive alerts 90, 60, and 30 days before expiration, plus auto-draft reorder emails when stock gets low.',
    result: '$5k-15k Saved Annually',
    resultStyle: { background: '#1e293b' },
    Visual: InventoryVisual,
    reversed: true
  },
  {
    tag: 'For Clinical Research',
    title: 'Trial Recruitment Booster',
    description: 'Fill your studies faster. We automate the screening pipeline: instant inquiry responses, qualified candidate scheduling, and protocol compliance tracking to keep your study on track.',
    result: '25% Increase in Enrollment',
    Visual: TrialVisual,
    reversed: false
  }
];

const UseCase = ({ tag, title, description, result, resultStyle = {}, Visual, reversed }) => {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 968;
  
  return (
    <div className="use-case fade-up">
      {reversed && isDesktop ? (
        <>
          <div className="use-case-visual">
            <Visual />
          </div>
          <div className="use-case-content">
            <span className="tag">{tag}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="result-box" style={resultStyle}>
              <div className="result-label">Average Impact</div>
              <div className="result-value">{result}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="use-case-content">
            <span className="tag">{tag}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="result-box" style={resultStyle}>
              <div className="result-label">Average Impact</div>
              <div className="result-value">{result}</div>
            </div>
          </div>
          <div className="use-case-visual">
            <Visual />
          </div>
        </>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Automated Workflows</h2>
          <p>Choose the system that solves your biggest headache.</p>
        </div>

        {useCases.map((useCase, index) => (
          <UseCase key={index} {...useCase} />
        ))}
      </div>
    </section>
  );
};

export default Services;
