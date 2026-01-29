import React from 'react';
import { Activity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="brand">
          <Activity size={28} color="#2EBFA5" />
          PerFlo<span>.</span>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-actions">
          <a href="#audit" className="nav-btn">Free Audit</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
