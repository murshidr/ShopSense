import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '5rem', minHeight: '80vh', paddingBottom: '5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>← Back</button>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 className="text-gradient" style={{ fontWeight: 800, fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>The Future of AI Retail</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          ShopSense is your premium AI-driven retail assistant, providing highly personalized shopping experiences and real-time retailer insights. We bridge the gap between imagination and physical products.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {[
          { icon: '🔍', title: 'Smart Discovery', desc: 'Find exactly what you need without endless scrolling.' },
          { icon: '🤖', title: 'AI Recommendations', desc: 'Our advanced Llama-3 models curate the perfect items just for you.' },
          { icon: '🎨', title: 'Dynamic Generation', desc: 'Can\'t find it? Our AI invents the perfect product based on your needs.' },
          { icon: '📊', title: 'Retail Insights', desc: 'Empowering retailers with deep analytics on shopper preferences.' }
        ].map((feature, i) => (
          <div key={i} className="card glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
