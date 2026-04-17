import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchAssistant from './components/SearchAssistant';
import RecommendationCard from './components/RecommendationCard';
import SecondaryCard from './components/SecondaryCard';
import RetailInsightDashboard from './components/RetailInsightDashboard';
import { getRecommendations, RecommendationResult, SearchPreferences } from './services/recommendationEngine';
import { logShopperQuery } from './services/firebase';
import { getAIRecommendations } from './services/aiService';

const App: React.FC = () => {
  const [results, setResults] = useState<RecommendationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (prefs: SearchPreferences) => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Log query to Firebase
    logShopperQuery(prefs);
    
    try {
      const aiResults = await getAIRecommendations(prefs);
      if (aiResults && aiResults.length > 0) {
        setResults(aiResults);
      } else {
        setResults(getRecommendations(prefs));
      }
    } catch (error) {
      console.error("Search Error:", error);
      setResults(getRecommendations(prefs));
    }
    
    setIsLoading(false);
    
    setTimeout(() => {
      const resultsEl = document.getElementById('curated-matches');
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <SearchAssistant onSearch={handleSearch} isLoading={isLoading} />
        
        {hasSearched && !isLoading && (
          <div id="curated-matches" className="section" style={{ paddingTop: '2rem' }}>
            <div className="container">
              <div className="flex-between" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Curated Matches</h2>
                <span style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', fontSize: '0.9375rem' }}>View all →</span>
              </div>

              {results.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2rem' }}>
                  <RecommendationCard result={results[0]} isBestFit={true} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {results.slice(1, 3).map((res, i) => (
                      <SecondaryCard key={i} result={res} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="card" style={{ padding: '4rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-muted)' }}>No exact matches found. Try adjusting your preferences.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {isLoading && (
          <div className="section" style={{ textAlign: 'center' }}>
            <div className="container">
              <div style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                border: '3px solid var(--accent)',
                borderTopColor: 'var(--primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '1rem'
              }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Personalizing your collection...</p>
            </div>
          </div>
        )}

        <RetailInsightDashboard />
      </main>

      <footer className="section" style={{ borderTop: '1px solid var(--border)', padding: '3rem 0' }}>
        <div className="container flex-between">
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>RetailAssistant</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>© 2024 RetailAssistant. Curated for you.</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
            <span>Sustainability</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
