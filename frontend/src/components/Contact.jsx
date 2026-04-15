import { useState } from 'react';
import Navbar from './Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
        setSubmitting(false);
        setTimeout(() => setSubmitted(false), 4000);
      }, 1500);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-page-home-style">
      <Navbar />
      <main className="hero-section contact-hero-home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Get in Touch</h1>
            <p className="hero-description">
              Have a question or need assistance? We're here to help. 
              Send us a message and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </main>

      <section className="contact-form-section-home">
        <div className="container">
          {!submitted ? (
              <div className="form-card-wrapper">
                <form onSubmit={handleSubmit} className="premium-form-card">
                  <div className="form-field-group">
                    <div className="field-wrapper">
                      <label className="field-label">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({...formData, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: ''});
                        }}
                        className={`premium-input ${errors.name ? 'input-error' : ''}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                  </div>

                  <div className="form-field-group">
                    <div className="field-wrapper">
                      <label className="field-label">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: ''});
                        }}
                        className={`premium-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-field-group">
                    <div className="field-wrapper full">
                      <label className="field-label">Your Message</label>
                      <textarea
                        rows="6"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({...formData, message: e.target.value});
                          if (errors.message) setErrors({...errors, message: ''});
                        }}
                        className={`premium-textarea ${errors.message ? 'input-error' : ''}`}
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>
                  </div>

                  <button type="submit" className="premium-form-btn" disabled={submitting}>
                    {submitting ? (
                      <>
                        <span className="btn-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
          ) : (
            <div className="success-card-home">
              <div className="success-icon-home">✅</div>
              <h2 className="success-title-home">Message Sent!</h2>
              <p className="success-text-home">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              <button className="hero-cta new-message-btn-home" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
