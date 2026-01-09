import { useAuth } from '../context/AuthContext';
import './Pricing.css';

function Pricing() {
  const { currentUser } = useAuth();

  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <h1>Pricing Plans</h1>
        <p className="pricing-subtitle">
          Welcome, {currentUser?.displayName || currentUser?.email}!
        </p>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">29</span>
              <span className="period">/month</span>
            </div>
            <ul className="features">
              <li>✓ 10 Projects</li>
              <li>✓ 5GB Storage</li>
              <li>✓ Basic Support</li>
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>

          <div className="pricing-card featured">
            <div className="badge">Popular</div>
            <h3>Professional</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">79</span>
              <span className="period">/month</span>
            </div>
            <ul className="features">
              <li>✓ Unlimited Projects</li>
              <li>✓ 50GB Storage</li>
              <li>✓ Priority Support</li>
              <li>✓ Advanced Analytics</li>
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">199</span>
              <span className="period">/month</span>
            </div>
            <ul className="features">
              <li>✓ Unlimited Everything</li>
              <li>✓ 500GB Storage</li>
              <li>✓ 24/7 Support</li>
              <li>✓ Custom Solutions</li>
            </ul>
            <button className="select-plan">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;