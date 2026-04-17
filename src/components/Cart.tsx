import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '5rem', minHeight: '80vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>← Back</button>
        <h1 style={{ fontWeight: 800, fontSize: '2.5rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Your Cart</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
        <div className="card glass-panel" style={{ padding: '3rem', textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.5 }}>🛒</div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Your shopping cart is empty</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Start discovering premium products that match your style.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Explore ShopSense</button>
        </div>
        
        <div className="card" style={{ padding: '2rem', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Order Summary</h3>
          <div className="flex-between" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span>Subtotal</span>
            <span>₹0.00</span>
          </div>
          <div className="flex-between" style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex-between" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', fontWeight: 'bold', fontSize: '1.25rem' }}>
            <span>Total</span>
            <span>₹0.00</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', opacity: 0.5, cursor: 'not-allowed' }}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
