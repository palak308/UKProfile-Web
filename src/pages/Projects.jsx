import React, { useState } from 'react';
import data from '../data.json';
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
          <h1 className="page-title">Our Projects</h1>
        </header>

        {/* Filter Bar */}
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

        {/* Grid */}
        <div className="project-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt={project.title} 
                className="project-img" 
              />
              <div className="project-overlay">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
