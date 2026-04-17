import React, { useState } from 'react';

interface ShopperFormProps {
  onSubmit: (preferences: any) => void;
}

const ShopperForm: React.FC<ShopperFormProps> = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState({
    style: 'Modern',
    budget: 'Medium',
    occasion: 'Casual',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <section id="shopper" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="glass-card" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Tell Shop<span className="gradient-text">Sense</span> Your Preferences
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label>Style Preference</label>
                <select 
                  value={preferences.style}
                  onChange={(e) => setPreferences({ ...preferences, style: e.target.value })}
                >
                  <option>Modern</option>
                  <option>Vintage</option>
                  <option>Minimalist</option>
                  <option>Bohemian</option>
                  <option>Streetwear</option>
                </select>
              </div>
              
              <div>
                <label>Budget Range</label>
                <select 
                  value={preferences.budget}
                  onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                >
                  <option>Value ($)</option>
                  <option>Medium ($$)</option>
                  <option>Premium ($$$)</option>
                  <option>Luxury ($$$$)</option>
                </select>
              </div>
              
              <div style={{ gridColumn: 'span 2' }}>
                <label>Occasion</label>
                <select 
                  value={preferences.occasion}
                  onChange={(e) => setPreferences({ ...preferences, occasion: e.target.value })}
                >
                  <option>Casual Wear</option>
                  <option>Business Professional</option>
                  <option>Evening / Party</option>
                  <option>Active / Sport</option>
                  <option>Wedding / Formal</option>
                </select>
              </div>
              
              <div style={{ gridColumn: 'span 2' }}>
                <label>Specific Interests or Keywords</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Sustainable fabrics, pastel colors, waterproof, oversized fit..."
                  value={preferences.interests}
                  onChange={(e) => setPreferences({ ...preferences, interests: e.target.value })}
                />
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                Generate Recommendations
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ShopperForm;
