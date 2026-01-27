import React from 'react';
import data from '../data.json';
import '../styles/global.css';
import '../styles/Pages.css';

const { companyInfo } = data;

const About = () => {
  return (
    <div className="about-page page-container">
      <div className="container">
        
        {/* Philosophy Section */}
        <section>
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            {companyInfo.philosophy}
          </p>
        </section>

        {/* Director Section */}
        <section className="page-grid">
          <div className="page-grid-item">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt={companyInfo.director.name}
            />
          </div>
          <div>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{companyInfo.director.name}</h2>
            <h3 style={{ fontSize: '1rem', marginBottom: '2rem', color: '#fff' }}>{companyInfo.director.title}</h3>
            <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              {companyInfo.director.bio}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
