import React from 'react';
import type { RecommendationResult } from '../services/recommendationEngine';

interface RecommendationCardProps {
  result: RecommendationResult;
  isBestFit?: boolean;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ result, isBestFit }) => {
  const { product, matchScore, reason } = result;

  return (
    <div className="card" style={{ display: 'flex', minHeight: '380px', position: 'relative' }}>
      {isBestFit && (
        <div style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          padding: '0.4rem 0.8rem',
          borderRadius: '99px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontWeight: 700,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <span style={{ color: '#8b5cf6' }}>✪</span> Best Choice
        </div>
      )}

      <div style={{ flex: '1.2', position: 'relative' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ flex: '1', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          {product.category}
        </p>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.2 }}>
          {product.name}
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9375rem', lineHeight: 1.6 }}>
          "{reason}"
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>Compatibility</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 700 }}>{matchScore}% Match</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${matchScore}%` }}></div>
          </div>
        </div>

        <div className="flex-between">
          <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>₹{product.price.toLocaleString('en-IN')}</span>
          <button className="btn btn-primary" style={{ padding: '0.8rem 1.8rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
