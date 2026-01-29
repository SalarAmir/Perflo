import React from 'react';
import { TrendingUp, ShieldCheck, Database } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Result Driven',
    description: 'We focus on metrics that matter: Revenue recovered, hours saved, and patient retention rates.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Secure',
    description: "HIPAA-aware workflows that run 24/7 without complaints, sick days, or coffee breaks."
  },
  {
    icon: Database,
    title: 'Seamless Integration',
    description: 'We connect with the tools you already use—Google Workspace, your EMR, and more.'
  }
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card fade-up">
    <div className="feature-icon-box">
      <Icon size={28} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="section value-section">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Systems, Not Just Software</h2>
          <p>We don't just sell you a tool. We build, install, and maintain the entire workflow so you never have to think about it again.</p>
        </div>
        
        <div className="grid-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
