import React from 'react';
import './journey.css';

export default function Journey({ onClose }) {
  if (!onClose) {
    console.error("Journey component requires onClose prop!");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Form submitted! (Add your submission logic)");
  };

  return (
    <div className="journey-modal-root">
      {/* Dark overlay */}
      <div className="journey-overlay" onClick={onClose}></div>

      {/* Modal content */}
      <div className="journey-modal-content">
        <div className="contact-card">
          {/* Close button */}
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>

          <h2 className="contact-title">Start Your Journey</h2>
          <p className="contact-subtitle">
            Tell us about yourself and your business idea — we'll handle the rest.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="idea">Your Business Idea</label>
              <textarea
                id="idea"
                rows="5"
                placeholder="Describe your startup vision in detail..."
                required
              />
            </div>

            <div className="button-group">
              <button type="submit" className="submit-btn">
                Submit Application
                <span className="arrow">→</span>
              </button>

              <button
                type="button"
                className="back-btn"
                onClick={onClose}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

