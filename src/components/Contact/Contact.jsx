import './Contact.css';
import { useState } from 'react';
import { profileConfig } from '../../config/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h3>Location</h3>
                  <p>{profileConfig.contact.location}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>{profileConfig.contact.phone}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>{profileConfig.contact.email}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a 
                  href={profileConfig.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="GitHub"
                >
                  🐙 GitHub
                </a>
                <a 
                  href={profileConfig.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="form-input"
                  placeholder="Enter your full name"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form-input"
                  placeholder="Enter your email address"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  required 
                />
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;