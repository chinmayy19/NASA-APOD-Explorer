import React, { useEffect, useState } from 'react';
import './App.css'; 

function App() {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchApod(d) {
    setLoading(true);
    try {
      const url = '/api/apod' + (d ? `?date=${d}` : '');
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        setApod(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>NASA APOD Explorer</h1>
        <p>Discover the cosmos, one day at a time.</p>
      </header>

      <div className="controls">
        <input 
          type="date" 
          value={date} 
          onChange={e => setDate(e.target.value)} 
        />
        <button className="load-btn" onClick={() => fetchApod(date)}>
          Explore Date
        </button>
      </div>

      {loading ? (
        <div className="loading-state">
          <h3>Traveling through space...</h3>
        </div>
      ) : apod ? (
        <div className="apod-card">
          <div className="media-container">
            {apod.media_type === 'image' ? (
              <img 
                src={apod.url} 
                alt={apod.title} 
                className="apod-image" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"; 
                  e.target.style.padding = "50px";
                  e.target.style.background = "#fff";
                }}
              />
            ) : (
              /* RESPONSIVE VIDEO WRAPPER */
              <div className="video-responsive">
                <iframe
                  title="space-video"
                  src={apod.url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          
          <div className="content-details">
            <span className="date-badge">{apod.date}</span>
            <h2>{apod.title}</h2>
            
            <p className="explanation">
              {apod.explanation}
            </p>
            
            {apod.copyright && (
              <p className="copyright">© Image Copyright: {apod.copyright}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="loading-state">
          <p>No data loaded.</p>
        </div>
      )}
    </div>
  );
}

export default App;