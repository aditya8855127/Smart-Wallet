import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function LandingPage() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Smart Wallet 🚀</h1>
          <Navbar />
        </div>
      </header>
      <main className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-heading">Manage Your Money Smartly</h2>
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
    </>
  );
}
