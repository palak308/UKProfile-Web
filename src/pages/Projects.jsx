import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import { imageMap } from '../utils/imageMap';
import FadeIn from '../components/common/FadeIn';
import '../styles/Home.css';
import '../styles/Pages.css';

const { projects } = data;

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Filter Bar Styles
  const filterBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '3rem',
  };

  const getFilterBtnStyle = (active) => ({
    background: 'transparent',
    border: 'none',
    color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: 'pointer',
    padding: '0.5rem',
    borderBottom: active ? '2px solid var(--color-primary)' : '2px solid transparent',
    transition: 'all 0.3s ease',
  });

  return (
    <div className="projects-page page-container">
      <div className="container">
        <header style={{ marginBottom: '3rem' }}>
          <FadeIn>
            <h1 className="page-title">Our Projects</h1>
          </FadeIn>
        </header>

        {/* Filter Bar */}
        <FadeIn delay={0.2}>
          <div style={filterBarStyle}>
            {categories.map(category => (
              <button 
                key={category}
                style={getFilterBtnStyle(filter === category)}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="project-grid">
          {filteredProjects.map((project, index) => {
            const projectImages = imageMap[project.imageKey];
            const thumbnail = Array.isArray(projectImages) ? projectImages[0] : projectImages;

            return (
              <FadeIn key={project.id} delay={index * 0.05}>
                <Link to={`/projects/${project.id}`} className="project-card-link">
                  <div className="project-card">
                    <img 
                      src={thumbnail || imageMap['sky-walks'][0]} 
                      alt={project.title} 
                      className="project-img" 
                    />
                    <div className="project-overlay">
                      <p className="project-category">{project.category}</p>
                      <h3 className="project-title">{project.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>{project.location}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
        })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
