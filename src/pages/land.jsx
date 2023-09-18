// LandingPage.jsx

import React from 'react';
import './land.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <header className="landing-header">
        <h1>Welcome to My Docusaurus Site</h1>
      </header>
      <section className="landing-content">
        <p>This is a custom landing page for a Docusaurus project.</p>
        <button className="explore-btn"><Link
            className="button button--secondary button--lg"
            to="/docs/">
            Enter JD Docs
          </Link></button>
      </section>
      <footer className="landing-footer">
        <p>© 2023 My Docusaurus Project</p>
      </footer>
    </div>
  );
}

export default LandingPage;
