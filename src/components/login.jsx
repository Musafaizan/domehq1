import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import './auth.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  
  return (
    <div className="container">
      <div className="background"></div>
      <div className="card">
        <div className="logo">
          DOME
        </div>

        {error && <div style={{
          background: '#fee',
          color: '#c33',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '14px',
          borderLeft: '4px solid #c33'
        }}>{error}</div>}
       
        <form className="form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           
          {isLogin && (
            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot">Forgot password?</a>
            </div>
          )}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Loading...' : (isLogin ? 'Login' : 'Create Account')}
          </button>
        </form>

        <button 
          type="button" 
          className="google-btn"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <FaGoogle /> Continue with Google
        </button>
      
        <p className="switch">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="switch-link"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
}