import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: 0
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}>S</div>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Shop<span className="gradient-text">Sense</span></h2>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#shopper" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Shopper</a>
          <a href="#insights" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Retailer</a>
        </nav>

        <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
