import React from 'react';
import FadeIn from '../components/common/FadeIn';
import '../styles/global.css';
import '../styles/Pages.css';

const Services = () => {
  const services = [
    {
      title: "Residential",
      description: "Designing luxury homes, high-rise apartments, and townships that blend comfort with aesthetics.",
      icon: "🏠"
    },
    {
      title: "Commercial",
      description: "Creating efficient and modern office spaces, malls, and retail environments.",
      icon: "🏢"
    },
    {
      title: "Redevelopment",
      description: "Expertise in transforming old structures into modern, high-value assets (MHADA & Private).",
      icon: "🏗️"
    },
    {
      title: "PMC",
      description: "Project Management Consultancy to ensure timely and quality delivery of construction projects.",
      icon: "📋"
    },
    {
      title: "Hotels",
      description: "Designing hospitality experiences including luxury hotels, resorts, and banquet halls.",
      icon: "🏨"
    }
  ];

  return (
    <div className="services-page page-container">
      <div className="container">
        <FadeIn>
          <h1 className="page-title">Our Services</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="page-subtitle">
            Comprehensive architectural and design solutions tailored to your needs.
          </p>
        </FadeIn>

        <div className="page-grid" style={{ alignItems: 'stretch' }}>
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div style={{ 
                background: 'var(--color-bg-secondary)', 
                padding: '2rem', 
                borderRadius: '4px',
                textAlign: 'center',
                border: '1px solid #333',
                height: '100%' 
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
