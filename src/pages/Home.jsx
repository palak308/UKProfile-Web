import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import '../styles/Home.css';

const { projects, companyInfo } = data;

// Importing a placeholder image for now, later we can use real images
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

const Home = () => {
  // Select 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img src={PLACEHOLDER_IMG} alt="Architecture Background" className="hero-background" />
        <div className="hero-content">
          <h1 className="hero-title">{companyInfo.heroTitle}</h1>
          <p className="hero-subtitle">UK Designs | Krataarth Architects</p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container about-preview">
        <h2 className="section-title">Designing Possibilities</h2>
        <p className="about-text">
          {companyInfo.philosophy}
        </p>
        <Link to="/about" className="btn">Read More About Us</Link>
      </section>

      {/* Latest Work */}
      <section className="section container">
        <h2 className="section-title">Latest Work</h2>
        <div className="project-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="project-card">
              <img src={PLACEHOLDER_IMG} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projects" className="btn">View All Projects</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
