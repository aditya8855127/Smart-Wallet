import Navbar from './Navbar';

export default function About() {
  return (
    <div className="about-page premium">
      <Navbar />
      <section className="hero-section about-hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">About Smart Wallet</h1>
            <p className="hero-description">
              Your premium personal finance companion designed to bring clarity and control 
              to your financial life with elegant simplicity and powerful insights.
            </p>
          </div>
        </div>
      </section>

      <section className="features-section about-features">
        <div className="container">
          <h3 className="section-title">Why Smart Wallet Stands Out</h3>
          <div className="features-grid premium-grid">
            <div className="feature-card premium-card">
              <div className="feature-icon large">💳</div>
              <h4>Real-time Expense Tracking</h4>
              <p>Capture every transaction instantly and categorize spending with intelligent auto-detection.</p>
            </div>
            <div className="feature-card premium-card">
              <div className="feature-icon large">📊</div>
              <h4>Advanced Analytics</h4>
              <p>Beautiful visualizations and spending patterns that help you make smarter financial decisions.</p>
            </div>
            <div className="feature-card premium-card">
              <div className="feature-icon large">🔒</div>
              <h4>Bank-grade Security</h4>
              <p>Your data stays encrypted locally. No cloud sync, no tracking, complete privacy control.</p>
            </div>
            <div className="feature-card premium-card">
              <div className="feature-icon large">⚡</div>
              <h4>Lightning Fast</h4>
              <p>Instant updates, smooth animations, and optimized performance across all devices.</p>
            </div>
            <div className="feature-card premium-card">
              <div className="feature-icon large">📱</div>
              <h4>Perfect Responsiveness</h4>
              <p>Flawless experience on desktop, tablet, and mobile - designed for modern workflows.</p>
            </div>
            <div className="feature-card premium-card">
              <div className="feature-icon large">🎨</div>
              <h4>Premium Design</h4>
              <p>Crafted with glassmorphism aesthetics, smooth micro-interactions, and fintech elegance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Finances?</h2>
            <p className="cta-subtitle">Join thousands who trust Smart Wallet for financial clarity</p>
            <a href="/login" className="hero-cta cta-button">Get Started Free</a>
          </div>
        </div>
      </section>
    </div>
  );
}
