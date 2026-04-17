import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 1000,
      padding: '0.75rem 0'
    }}>
      <div className="container flex-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
          <img src="/logo.png" alt="ShopSense Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
          <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--primary)' }}>
            ShopSense
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Discover', 'Categories', 'Insights', 'Account'].map((item) => (
            <span key={item} style={{ 
              fontSize: '0.875rem', 
              fontWeight: 600, 
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}>
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ fontSize: '1.25rem', cursor: 'pointer' }}>🛒</span>
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-8px',
              background: 'var(--primary)',
              color: 'white',
              fontSize: '0.625rem',
              padding: '2px 5px',
              borderRadius: '10px',
              fontWeight: 700
            }}>2</span>
          </div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent)', overflow: 'hidden' }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
