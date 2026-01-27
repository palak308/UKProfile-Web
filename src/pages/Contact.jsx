import React from 'react';
import data from '../data.json';
import '../styles/global.css';
import '../styles/Pages.css';

const { companyInfo } = data;

const Contact = () => {
  return (
    <div className="contact-page page-container">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>

        <div className="page-grid">
          
          {/* Contact Info */}
          <div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Contact Details</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>Visit Us</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{companyInfo.contact.address}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>Call Us</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Mobile: {companyInfo.contact.mobile}</p>
              <p style={{ color: 'var(--color-text-muted)' }}>Landline: {companyInfo.contact.landline}</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>Email Us</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{companyInfo.contact.email}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
             <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Send a Message</h2>
             <form className="contact-form">
               <input 
                 type="text" 
                 placeholder="Your Name" 
                 className="form-input"
               />
               <input 
                 type="email" 
                 placeholder="Your Email" 
                 className="form-input"
               />
               <textarea 
                 rows="5" 
                 placeholder="Your Message"
                 className="form-textarea"
               ></textarea>
               <button type="button" className="btn btn-primary">Send Message</button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
