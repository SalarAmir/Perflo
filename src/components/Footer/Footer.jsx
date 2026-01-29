import React from 'react';

const footerLinks = {
  services: [
    { label: 'Patient Follow-Up', href: '#' },
    { label: 'Inventory Alerts', href: '#' },
    { label: 'Clinical Trials', href: '#' }
  ],
  company: [
    { label: 'About Salar', href: '#about' },
    { label: 'Case Studies', href: '#' },
    { label: 'Contact', href: '#audit' }
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>PerFlo.</h3>
            <p>
              Automating healthcare operations so providers can focus on patients, 
              not paperwork.
            </p>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {currentYear} PerFlo Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
