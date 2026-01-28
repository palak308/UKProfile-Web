import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import data from '../data.json';
import { imageMap } from '../utils/imageMap';
import '../styles/Pages.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = data.projects.find(p => p.id === parseInt(id));

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  if (!project) {
    return (
      <div className="page-container container" style={{textAlign: 'center', paddingTop: '10rem'}}>
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-primary" style={{marginTop: '2rem'}}>Back to Projects</Link>
      </div>
    );
  }

  const projectImages = imageMap[project.imageKey] || [];
  const images = Array.isArray(projectImages) ? projectImages : [projectImages].filter(Boolean);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-detail-page page-container">
      <div className="container">
        
        {/* Navigation */}
        <button onClick={() => navigate(-1)} className="back-link">
          &larr; Back
        </button>

        {/* Header */}
        <header className="project-header">
          <span className="project-category-badge">{project.category}</span>
          <h1 className="project-title-large">{project.title}</h1>
          <p className="project-location-large">{project.location}</p>
        </header>

        {/* Info Grid */}
        <div className="project-info-grid">
          <div className="info-item">
            <h3>Client</h3>
            <p>{project.client}</p>
          </div>
          <div className="info-item">
            <h3>Status</h3>
            <p>{project.status}</p>
          </div>
          <div className="info-item">
            <h3>Type</h3>
            <p>{project.category}</p>
          </div>
          {project.plotArea && (
            <div className="info-item">
              <h3>Plot Area</h3>
              <p>{project.plotArea}</p>
            </div>
          )}
          {project.constructionArea && (
            <div className="info-item">
              <h3>Const. Area</h3>
              <p>{project.constructionArea}</p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="project-description">
          <h3 className="section-label">Overview</h3>
          <p>{project.description || "No description available."}</p>
        </div>

        {/* Gallery */}
        <div className="project-gallery">
          <h3 className="section-label">Gallery</h3>
          <div className="gallery-grid">
            {images.length > 0 ? (
              images.map((img, index) => (
                <div key={index} className="gallery-item" onClick={() => setSelectedIndex(index)}>
                  <img src={img} alt={`${project.title} view ${index + 1}`} loading="lazy" />
                  <div className="gallery-overlay">
                    <span>View Fullscreen</span>
                  </div>
                </div>
              ))
            ) : (
               <p className="no-images">No images available for this project.</p>
            )}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="lightbox-overlay" onClick={() => setSelectedIndex(null)}>
            <button className="lightbox-close" onClick={() => setSelectedIndex(null)}>&times;</button>
            
            {/* Prev Button */}
            {images.length > 1 && (
              <button className="lightbox-nav prev" onClick={handlePrev} title="Previous Image">&#10094;</button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button className="lightbox-nav next" onClick={handleNext} title="Next Image">&#10095;</button>
            )}

            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <img src={images[selectedIndex]} alt="Full screen" className="lightbox-image" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;
