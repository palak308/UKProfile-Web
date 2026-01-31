import React from 'react';
import data from '../data.json';
import { imageMap } from '../utils/imageMap';
import FadeIn from '../components/common/FadeIn';
import '../styles/global.css';
import '../styles/Pages.css';

const { companyInfo } = data;

const About = () => {
  return (
    <div className="about-page page-container">
      <div className="container">
        
        {/* Philosophy Section */}
        <section className="about-section">
          <FadeIn>
            <h1 className="page-title">About Us</h1>
          </FadeIn>
          <div className="about-content">
            {companyInfo.aboutUs ? (
              companyInfo.aboutUs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <p className="about-text-point">
                    {paragraph}
                  </p>
                </FadeIn>
              ))
            ) : (
              <p className="page-subtitle">{companyInfo.philosophy}</p>
            )}
          </div>
        </section>

        {/* Director Section */}
        <section className="page-grid">
          <FadeIn direction="right" delay={0.2} className="page-grid-item">
            <img 
              src={imageMap.director[0]} 
              alt={companyInfo.director.name}
            />
          </FadeIn>
          <FadeIn direction="left" delay={0.4}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{companyInfo.director.name}</h2>
            <h3 style={{ fontSize: '1rem', marginBottom: '2rem', color: 'var(--color-text)' }}>{companyInfo.director.title}</h3>
            <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              {companyInfo.director.bio}
            </p>
          </FadeIn>
        </section>

      </div>
    </div>
  );
};

export default About;
