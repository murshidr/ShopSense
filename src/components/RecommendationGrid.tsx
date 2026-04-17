import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  match: number;
  image: string;
}

const RecommendationGrid: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Neural Knit Sweater", category: "Eco-Fashion", price: "$89", match: 98, image: "https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?w=400&h=400&fit=crop" },
    { id: 2, name: "Prism Tech Jacket", category: "Outerwear", price: "$145", match: 95, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop" },
    { id: 3, name: "Quantum Sneakers", category: "Footwear", price: "$120", match: 92, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
    { id: 4, name: "Aether Silk Scarf", category: "Accessories", price: "$45", match: 89, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop" },
  ];

  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'var(--primary)' }}>★</span> AI Recommended For You
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {products.map((product) => (
            <div key={product.id} className="glass-card" style={{ padding: '1rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--primary)',
                border: '1px solid var(--primary-glow)',
                zIndex: 1
              }}>
                {product.match}% Match
              </div>
              
              <img 
                src={product.image} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  marginBottom: '1rem'
                }}
              />
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                {product.category}
              </p>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.name}</h4>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{product.price}</span>
                <button className="btn glass" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem', color: 'white' }}>
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationGrid;
