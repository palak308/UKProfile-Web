import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import { imageMap } from '../utils/imageMap';
import '../styles/Home.css';

const { projects, companyInfo } = data;

const Home = () => {
  // Select 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        {/* Use the first project image or a specific hero image if available */}
        <img 
          src={imageMap['sky-walks']?.[0]} 
          alt="Architecture Background" 
          className="hero-background" 
        />
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
          {featuredProjects.map(project => {
            // Handle image array -> get first image
            const projectImages = imageMap[project.imageKey];
            const thumbnail = Array.isArray(projectImages) ? projectImages[0] : projectImages;

            return (
              <div key={project.id} className="project-card">
                <img 
                  src={thumbnail || imageMap['sky-walks'][0]} 
                  alt={project.title} 
                  className="project-img" 
                />
              <div className="project-overlay">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          );
        })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projects" className="btn">View All Projects</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
