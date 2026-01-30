import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist." 
      />
      <div className="page-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ 
          fontSize: '6rem', 
          color: 'var(--color-primary)', 
          marginBottom: '1rem',
          lineHeight: 1
        }}>404</h1>
        <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ 
          color: 'var(--color-text-muted)', 
          maxWidth: '500px', 
          margin: '0 auto 3rem' 
        }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
