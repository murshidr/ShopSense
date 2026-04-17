import React, { useState } from 'react';
import type { SearchPreferences } from '../services/recommendationEngine';

interface SearchAssistantProps {
  onSearch: (prefs: SearchPreferences) => void;
  isLoading: boolean;
}

const SearchAssistant: React.FC<SearchAssistantProps> = ({ onSearch, isLoading }) => {
  const [prefs, setPrefs] = useState<SearchPreferences>({
    query: '',
    budget: 25000,
    category: 'All',
    persona: 'Professional'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prefs.query.trim()) {
      onSearch(prefs);
    }
  };

  return (
    <div className="section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>Good morning.</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>Let's find exactly what you need today.</p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '900px' }}>
          <div className="search-bar" style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>✨</span>
            <input 
              type="text" 
              placeholder="I'm looking for a minimalist desk lamp for my home office..."
              value={prefs.query}
              onChange={(e) => setPrefs({ ...prefs, query: e.target.value })}
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                fontSize: '1.1rem',
                outline: 'none',
                color: 'var(--text-primary)'
              }}
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              disabled={isLoading}
            >
              {isLoading ? 'Thinking...' : 'Explore →'}
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', padding: '0 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Budget:</span>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000"
                value={prefs.budget}
                onChange={(e) => setPrefs({ ...prefs, budget: parseInt(e.target.value) })}
                style={{ cursor: 'pointer', width: '120px' }}
              />
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)' }}>₹{prefs.budget.toLocaleString('en-IN')}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Category:</span>
              <select 
                value={prefs.category}
                onChange={(e) => setPrefs({ ...prefs, category: e.target.value })}
                style={{ border: 'none', background: 'var(--accent)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600 }}
              >
                <option>All</option>
                <option>Home</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Beauty</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>I am a:</span>
              <select 
                value={prefs.persona}
                onChange={(e) => setPrefs({ ...prefs, persona: e.target.value })}
                style={{ border: 'none', background: 'var(--accent)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600 }}
              >
                <option>Professional</option>
                <option>Student</option>
                <option>Traveler</option>
                <option>Gamer</option>
                <option>Techie</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 1rem' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500 }}>📈 Trending:</span>
            <span className="tag" onClick={() => setPrefs({...prefs, query: 'Ergonomic chairs'})}>Ergonomic chairs</span>
            <span className="tag" onClick={() => setPrefs({...prefs, query: 'Mechanical keyboards'})}>Mechanical keyboards</span>
            <span className="tag" onClick={() => setPrefs({...prefs, query: 'Aesthetic organizers'})}>Aesthetic organizers</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchAssistant;
