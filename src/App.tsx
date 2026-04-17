import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShopperForm from './components/ShopperForm';
import RecommendationGrid from './components/RecommendationGrid';
import RetailerInsightPanel from './components/RetailerInsightPanel';

const App: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (preferences: any) => {
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
      window.scrollTo({ top: document.getElementById('results')?.offsetTop || 800, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="app">
      <div className="bg-mesh"></div>
      <Header />
      
      <main>
        <Hero />
        
        <ShopperForm onSubmit={handleFormSubmit} />
        
        {loading && (
          <div className="container" style={{ textAlign: 'center', padding: '40px 0' }}>
            <div className="animate-float" style={{ 
              fontSize: '1.5rem', 
              color: 'var(--primary)',
              fontWeight: 600
            }}>
              ShopSense AI is analyzing your preferences...
            </div>
          </div>
        )}
        
        {showResults && (
          <div id="results">
            <RecommendationGrid />
          </div>
        )}
        
        <RetailerInsightPanel />
      </main>
      
      <footer className="glass" style={{ padding: '4rem 0', marginTop: '4rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ marginBottom: '1rem' }}>Shop<span className="gradient-text">Sense</span></h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
              The future of retail is personal. Powered by Google AI services to provide the best experience for shoppers and retailers alike.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Platform</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Shopper App</li>
              <li>Retailer Dashboard</li>
              <li>AI Insights</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          &copy; 2026 ShopSense AI. All rights reserved. Built for the AMD Prompt-a-thon.
        </div>
      </footer>
    </div>
  );
};

export default App;
