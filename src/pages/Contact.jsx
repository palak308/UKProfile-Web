import React from 'react';
import data from '../data.json';
import FadeIn from '../components/common/FadeIn';
import '../styles/global.css';
import '../styles/Pages.css';

const { companyInfo } = data;

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${companyInfo.contact.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Message from UK Profile Website"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page page-container">
      <div className="container">
        <FadeIn>
          <h1 className="page-title">Get In Touch</h1>
        </FadeIn>

        <div className="page-grid">
          
          {/* Contact Info */}
          <FadeIn direction="right" delay={0.2}>
            <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Contact Details</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Visit Us</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{companyInfo.contact.address}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Call Us</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Mobile: {companyInfo.contact.mobile}</p>
              <p style={{ color: 'var(--color-text-muted)' }}>Landline: {companyInfo.contact.landline}</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Email Us</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{companyInfo.contact.email}</p>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.4}>
             <h2 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Send a Message</h2>
             <form className="contact-form" onSubmit={handleSubmit}>
               <input 
                 type="text" 
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 placeholder="Your Name" 
                 className="form-input"
                 required
               />
               <input 
                 type="email" 
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 placeholder="Your Email" 
                 className="form-input"
                 required
               />
               <textarea 
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 rows="5" 
                 placeholder="Your Message"
                 className="form-textarea"
                 required
               ></textarea>
               
               <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p style={{ color: '#4caf50', marginTop: '1rem' }}>
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#f44336', marginTop: '1rem' }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
             </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
