import React from 'react';
import { Cpu, Award } from 'lucide-react';
import profileImage from '../../assets/WhatsApp Image 2025-02-19 at 11.21.52_6ccb9d17.jpg';

const skills = [
  'N8N Automation',
  'AI Security',
  'JSON & Text Mining',
  'Automated Scheduling',
  'Email Management',
  'Machine Learning Methods'
];

const ProfileCard = () => (
  <div className="profile-card">
    <div className="avatar-placeholder">
      <img src={profileImage} alt="Salar Amir" className="avatar-image" />
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Salar Amir</h3>
    <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '16px' }}>
      Software Engineer & Automation Architect
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
      <span className="skill-badge">
        <Cpu size={14} style={{ display: 'inline', marginRight: '4px' }} /> Agentic Workflows
      </span>
    </div>
  </div>
);

const Certification = () => (
  <div className="cert-container">
    <div className="cert-header">
      <Award size={32} color="#2EBFA5" />
      <div>
        <h4 style={{ margin: 0 }}>Building AI Agents – Fundamentals to Advanced</h4>
        <span style={{ fontSize: '0.9rem', color: '#5D7285' }}>
          Certified by Packt | Provided by NYS Dept of Labor
        </span>
      </div>
    </div>
    
    <p style={{ fontSize: '0.95rem', color: '#5D7285', marginBottom: '16px' }}>
      Rigorous certification in designing autonomous agent behaviors, securing AI pipelines, 
      and integrating tools like N8N for real-world tasks.
    </p>

    <div className="skills-grid">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge">{skill}</span>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid fade-up">
          <ProfileCard />

          <div className="about-content">
            <h2>I Automate Everything. You Should Too.</h2>
            <div className="philosophy-box">
              <p className="philosophy-text">
                "You might expect a large agency team. You won't find one. I believe so strongly 
                in automation that I run this entire operation using the same systems I build for you. 
                Why hire a bloat of managers when intelligent agents can do the job faster, cheaper, 
                and with zero errors?"
              </p>
            </div>
            <p style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
              I am a Software Engineer specialized in building autonomous systems that handle 
              complex logistics. My approach isn't just about saving time—it's about creating 
              self-driving businesses.
            </p>
            
            <Certification />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
