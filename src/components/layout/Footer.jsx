import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import './Footer.css';

const { companyInfo } = data;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand & Tagline */}
        <div className="footer-column">
          <h3>UK Design</h3>
          <p>{companyInfo.name}</p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            {companyInfo.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>{companyInfo.contact.address}</p>
          <p>Email: {companyInfo.contact.email}</p>
          <p>Phone: {companyInfo.contact.mobile}</p>
          <p>Landline: {companyInfo.contact.landline}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UK Designs Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
