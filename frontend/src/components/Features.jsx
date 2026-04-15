function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Expense Tracking',
      description: 'Track every expense with categories and real-time insights into your spending patterns.'
    },
    {
      icon: '📈',
      title: 'Analytics Dashboard',
      description: 'Visualize your financial data with beautiful charts and get actionable insights.'
    },
    {
      icon: '🔒',
      title: 'Secure Data',
      description: 'Your data is encrypted and stored locally. We never share your financial information.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h3 className="section-title">Why Choose Smart Wallet?</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
