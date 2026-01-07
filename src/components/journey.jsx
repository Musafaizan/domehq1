import React from 'react';
import './journey.css';

export default function Journey({ onClose }) {
  if (!onClose) {
    console.error("Journey component requires onClose prop!");
    return null;
  }

  return (
    <div className="journey-modal-root">
      {/* Overlay */}
      <div className="journey-overlay" onClick={onClose}></div>

      {/* Modal content */}
      <div className="journey-modal-content">
        <div className="contact-card">
          <h2 className="contact-title">Start Your Journey</h2>
          <p className="contact-subtitle">
            Tell us about yourself and your business idea — we'll handle the rest.
          </p>

          <form className="form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="form-group">
              <label>Your Business Idea</label>
              <textarea rows="4" placeholder="Describe your startup vision..." required />
            </div>

            <div className="button-group">
              <button type="submit" className="submit-btn">
                Submit <span className="arrow">→</span>
              </button>

              <button
                type="button"
                className="back-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
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
