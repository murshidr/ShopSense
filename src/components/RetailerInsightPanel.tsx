import React from 'react';

const RetailerInsightPanel: React.FC = () => {
  return (
    <section id="insights" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem' }}>Retailer <span className="gradient-text">Insights</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Real-time consumer behavior and inventory intelligence.</p>
          </div>
          <div className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Updated: Just now
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Engagement Rate</p>
            <h3 style={{ fontSize: '2rem' }}>24.8% <span style={{ color: '#10b981', fontSize: '0.875rem' }}>↑ 4.2%</span></h3>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '1rem' }}>
              <div style={{ width: '70%', height: '100%', background: 'var(--primary)', borderRadius: '2px' }}></div>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Avg. Basket Size</p>
            <h3 style={{ fontSize: '2rem' }}>$112.50 <span style={{ color: '#10b981', fontSize: '0.875rem' }}>↑ 12%</span></h3>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '1rem' }}>
              <div style={{ width: '85%', height: '100%', background: 'var(--secondary)', borderRadius: '2px' }}></div>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Sentiment Score</p>
            <h3 style={{ fontSize: '2rem' }}>4.8/5 <span style={{ color: '#10b981', fontSize: '0.875rem' }}>Stable</span></h3>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '1rem' }}>
              <div style={{ width: '92%', height: '100%', background: 'var(--primary)', borderRadius: '2px' }}></div>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h4 style={{ marginBottom: '1.5rem' }}>Style Trend Analysis</h4>
            <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '1rem', padding: '0 1rem' }}>
              {[60, 85, 45, 90, 70, 55, 75].map((h, i) => (
                <div key={i} style={{ 
                  flex: 1, 
                  height: `${h}%`, 
                  background: `linear-gradient(to top, var(--primary), var(--secondary))`,
                  borderRadius: '4px 4px 0 0',
                  opacity: 0.8
                }}></div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h4 style={{ marginBottom: '1.5rem' }}>Predicted Demand</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Eco-Fashion</span>
                <span style={{ fontWeight: 600, color: '#10b981' }}>High</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Athleisure</span>
                <span style={{ fontWeight: 600, color: '#f59e0b' }}>Medium</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Luxury Wear</span>
                <span style={{ fontWeight: 600, color: '#ef4444' }}>Low</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Vintage</span>
                <span style={{ fontWeight: 600, color: '#10b981' }}>Rising</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailerInsightPanel;
