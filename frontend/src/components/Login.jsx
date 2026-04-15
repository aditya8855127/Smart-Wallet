import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberMe');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const success = login(email, password);
    setTimeout(() => {
      setLoading(false);
      if (success) {
        localStorage.setItem('rememberMe', email);
        navigate('/dashboard', { replace: true });
      } else {
        setError('Invalid credentials. Demo: user@example.com / password');
      }
    }, 1500);
  };

  return (
    <div className="login-page-home-style">
      <Navbar />
      <main className="hero-section login-hero-home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Welcome Back</h1>
            <p className="hero-description">
              Sign in to your Smart Wallet account to manage your finances and track expenses.
            </p>
          </div>
        </div>
      </main>

      <section className="login-form-section-home">
        <div className="container">
          <div className="form-wrapper-home">
            <form onSubmit={handleSubmit} className="premium-form-card login-form-card">
              <div className="form-field-group">
                <div className="field-wrapper">
                  <label className="field-label">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="premium-input"
                    placeholder="your-email@example.com"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-field-group">
                <div className="field-wrapper">
                  <label className="field-label">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    className="premium-input"
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {error && (
                <div className="form-error-card">
                  <span className="error-icon">⚠️</span>
                  {error}
                </div>
              )}

              <button type="submit" className="premium-form-btn login-submit-enhanced" disabled={loading}>
                {loading ? (
                  <>
                    <span className="btn-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

              <div className="form-footer-enhanced">
                <p className="demo-info">Demo: <strong>user@example.com</strong> / <strong>password</strong></p>
                <Link to="/" className="signup-link-enhanced">Don't have an account? Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

