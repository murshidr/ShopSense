import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="container flex-between" style={{ height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'var(--primary)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}>S</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>RetailAssistant</h2>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, borderBottom: '2px solid var(--primary)', padding: '0.5rem 0' }}>Discover</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Collections</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Trends</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontWeight: 500 }}>Curated</a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>🛍️</span>
          <span style={{ cursor: 'pointer', color: 'var(--text-secondary)', position: 'relative' }}>
            🔔
            <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#f43f5e', width: '8px', height: '8px', borderRadius: '50%', border: '2px solid white' }}></span>
          </span>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#e5e7eb',
            overflow: 'hidden',
            border: '2px solid white',
            boxShadow: '0 0 0 1px #e5e7eb'
          }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
