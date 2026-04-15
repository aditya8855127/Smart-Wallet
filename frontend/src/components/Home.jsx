import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Features from './Features';

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Manage Your Money Smartly</h1>
            <p className="hero-description">
              Track your expenses effortlessly, gain insights into your spending habits, 
              and take control of your finances with Smart Wallet. Simple, secure, and smart.
            </p>
            <div className="hero-buttons">
              <Link to="/login" className="hero-cta">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Features />
    </div>
  );
}
