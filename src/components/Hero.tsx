import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      padding: '120px 0 60px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: '400px',
        background: 'var(--primary-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1
      }} />
      
      <div className="container">
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'rgba(6, 182, 212, 0.1)',
          borderRadius: '2rem',
          color: 'var(--primary)',
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          border: '1px solid var(--primary-glow)'
        }}>
          AI-Powered Retail Intelligence
        </div>
        
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          maxWidth: '800px',
          margin: '0 auto 1.5rem'
        }}>
          Personalized Shopping, <span className="gradient-text">Redefined.</span>
        </h1>
        
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.25rem',
          maxWidth: '600px',
          margin: '0 auto 2.5rem'
        }}>
          Experience a smarter way to shop. Our AI assistant understands your style, 
          budget, and needs to curate the perfect collection just for you.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-primary pulse-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Try AI Assistant
          </button>
          <button className="btn glass" style={{ padding: '1rem 2rem', fontSize: '1.1rem', color: 'white' }}>
            View Retailer Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
