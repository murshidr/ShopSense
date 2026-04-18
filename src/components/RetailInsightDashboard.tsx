import React, { useEffect, useState } from 'react';
import { fetchRetailerInsights } from '../services/firebase';

const RetailInsightDashboard: React.FC = () => {
  const [insights, setInsights] = useState<{
    topCategory: string;
    avgBudget: number;
    topPersona: string;
    trend: string;
    totalQueries: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRetailerInsights();
        setInsights(data as any);
      } catch (error) {
        console.error("Failed to load insights", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="flex-between" style={{ marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Operational Insights</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Live demand intelligence based on shopper behavior.</p>
          </div>
          <button className="btn" style={{ background: 'white', border: '1px solid var(--border)' }}>Export Data</button>
        </div>

        {loading ? (
          <p>Loading insights from Firestore...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { label: 'Top Category', value: insights?.topCategory || 'N/A', sub: 'Highest demand' },
              { label: 'Most Common Persona', value: insights?.topPersona || 'N/A', sub: 'Target audience' },
              { label: 'Avg. Budget', value: `₹${insights?.avgBudget || 0}`, sub: 'High intent' },
              { label: 'Total Queries', value: insights?.totalQueries?.toString() || '0', sub: 'Logged in DB' }
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', boxShadow: 'none' }}>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem' }}>{item.label}</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>{item.value}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '2rem', background: 'white', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 700 }}>Recent Search Intent Patterns</h4>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['"minimalist desk lamp"', '"noise cancelling for focus"', '"mulberry silk for sleep"', '"ergonomic keyboard developer"'].map((log, i) => (
              <div key={i} style={{ 
                padding: '0.5rem 1rem', 
                background: 'var(--accent)', 
                borderRadius: '8px', 
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)'
              }}>
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailInsightDashboard;
