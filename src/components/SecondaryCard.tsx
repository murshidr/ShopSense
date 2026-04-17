import React from 'react';
import { RecommendationResult } from '../services/recommendationEngine';

interface SecondaryCardProps {
  result: RecommendationResult;
}

const SecondaryCard: React.FC<SecondaryCardProps> = ({ result }) => {
  const { product } = result;

  return (
    <div className="card" style={{ height: '380px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '220px', background: 'var(--accent)', position: 'relative' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          {product.category}
        </p>
        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 700 }}>{product.name}</h4>
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.description}
        </p>
        <div className="flex-between">
          <span style={{ fontSize: '1.125rem', fontWeight: 800 }}>${product.price}</span>
          <button style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            border: '1px solid var(--border)', 
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>+</button>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCard;
