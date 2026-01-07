import React, { useState } from 'react';
import './swiftstart.css';
import Journey from './journey'; // Make sure the path is correct

export default function Swiftstart() {
  const [showJourney, setShowJourney] = useState(false);

  const openJourney = () => setShowJourney(true);
  const closeJourney = () => setShowJourney(false);

  return (
    <>
      <section className="swiftstart-section">
        <div className="section-header">
          <h2>We'll Do It For You</h2>
          <p>From (No) Idea to Launch</p>
        </div>

        <div className="swiftstart-card">
          <h3 className="service-title">SwiftSTART</h3>
          <p className="service-description">
            Complete startup launch service – we handle everything from ideation to deployment
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <span className="red-dot">•</span>
              <div>
                <strong>Idea Generation</strong><br />
                AI-powered brainstorming
              </div>
            </div>

            <div className="feature-item">
              <span className="red-dot">•</span>
              <div>
                <strong>Market Research</strong><br />
                Comprehensive analysis
              </div>
            </div>

            <div className="feature-item">
              <span className="red-dot">•</span>
              <div>
                <strong>Product Development</strong><br />
                Full-stack implementation
              </div>
            </div>

            <div className="feature-item">
              <span className="red-dot">•</span>
              <div>
                <strong>Launch Support</strong><br />
                Go-to-market strategy
              </div>
            </div>
          </div>

          {/* 🔥 OPEN FORM */}
          <button className="cta-button" onClick={openJourney}>
            Start Your Journey <span className="arrow">→</span>
          </button>
        </div>
      </section>

      {/* 🔥 MODAL FORM */}
      {showJourney && <Journey onClose={closeJourney} />}
    </>
  );
}
 