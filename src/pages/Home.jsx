import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import { imageMap } from '../utils/imageMap';
import FadeIn from '../components/common/FadeIn';
import '../styles/Home.css';

const { projects, companyInfo } = data;

const Home = () => {
  // Select hero images for slider
  const heroImages = [
    imageMap['the-erra']?.[1] || imageMap['the-erra']?.[0], // User preferred
    imageMap['sky-walks']?.[1],
    imageMap['villa-california']?.[0], 
    imageMap['brynks-arya']?.[0], // Commercial
    imageMap['garden-enclave']?.[0],
    imageMap['township-unlaunched']?.[0], // Public/Government
    imageMap['sai-grandeur-hotel']?.[0], // Hotel
    imageMap['orion-chs']?.[0], // Public/Government
  ].filter(Boolean); // Remove undefined if any

  // State for active image
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Auto-rotate images
  React.useEffect(() => {
    if (heroImages.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  // Select 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        {heroImages.map((imgSrc, index) => (
          <img 
            key={index}
            src={imgSrc} 
            alt={`Architecture Background ${index + 1}`} 
            className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <FadeIn delay={0.2} direction="up">
            <h1 className="hero-title">{companyInfo.heroTitle}</h1>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <p className="hero-subtitle">UK Designs | Krataarth Architects</p>
          </FadeIn>
          <FadeIn delay={0.6} direction="up">
            <div style={{ marginTop: '2rem' }}>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="section container about-preview">
        <FadeIn>
          <h2 className="section-title">Designing Possibilities</h2>
          <p className="about-text">
            {companyInfo.philosophy}
          </p>
          <Link to="/about" className="btn">Read More About Us</Link>
        </FadeIn>
      </section>

      {/* Latest Work */}
      <section className="section container">
        <FadeIn>
          <h2 className="section-title">Latest Work</h2>
        </FadeIn>
        <div className="project-grid">
          {featuredProjects.map((project, index) => {
            // Handle image array -> get first image
            const projectImages = imageMap[project.imageKey];
            const thumbnail = Array.isArray(projectImages) ? projectImages[0] : projectImages;

            return (
              <FadeIn key={project.id} delay={index * 0.1}>
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
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
        })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <FadeIn delay={0.3}>
            <Link to="/projects" className="btn">View All Projects</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
