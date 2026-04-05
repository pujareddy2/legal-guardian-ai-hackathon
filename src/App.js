import './App.css';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [backendStatus, setBackendStatus] = useState('CHECKING');
  const [statusMessage, setStatusMessage] = useState('Connecting to analysis engine...');
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    const pingBackend = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/status`);
        const data = await res.json();
        if (res.ok && data.status === 'SUCCESS') {
          setBackendStatus('ONLINE');
          setStatusMessage('Backend is online and ready for scans.');
        } else {
          setBackendStatus('DEGRADED');
          setStatusMessage(data.message || 'Backend responded with an issue.');
        }
      } catch (checkErr) {
        setBackendStatus('OFFLINE');
        setStatusMessage('Backend unreachable. Check REACT_APP_API_URL and CORS settings.');
      }
    };

    pingBackend();
  }, [API_BASE_URL]);

  useEffect(() => {
    const onMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setPointer({ x, y });
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--pointer-x', String(pointer.x));
    root.style.setProperty('--pointer-y', String(pointer.y));
  }, [pointer]);

  const onFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setResult(null);
    setError('');
  };

  const analyzeDocument = async () => {
    if (!selectedFile) {
      setError('Please select a PDF first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${API_BASE_URL}/analyze-document`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.status !== 'SUCCESS') {
        throw new Error(data.message || 'Failed to analyze document.');
      }

      setResult(data);
    } catch (requestError) {
      setError(requestError.message || 'Could not connect to backend service.');
    } finally {
      setIsLoading(false);
    }
  };

  const structuredEntries = useMemo(
    () => Object.entries(result?.structured_data || {}),
    [result]
  );

  const statusToneClass =
    backendStatus === 'ONLINE'
      ? 'tone-online'
      : backendStatus === 'DEGRADED'
      ? 'tone-warn'
      : backendStatus === 'OFFLINE'
      ? 'tone-offline'
      : 'tone-checking';

  return (
    <div className="app-root">
      <div className="bg-grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />

      <header className="top-nav">
        <div className="brand">LEGAL GUARDIAN</div>
        <div className="nav-right">
          <span className="nav-pill">AI Contract Studio</span>
          <span className="nav-pill subtle">For Startups and Freelancers</span>
        </div>
      </header>

      <main className="hero">
        <section className="hero-content">
          <p className="eyebrow">New Release</p>
          <h1>Watch Over Every Clause Like a Pro</h1>
          <p className="subtitle">
            Drop in your contract and get instant plain-English insights, obligations, and hidden risk flags.
          </p>

          <div className={`backend-badge ${statusToneClass}`}>
            <span className="dot" />
            <strong>{backendStatus}</strong>
            <span>{statusMessage}</span>
          </div>

          <div className="highlights">
            <span>Fast PDF Analysis</span>
            <span>Simple Language Summary</span>
            <span>Built for Real Contracts</span>
          </div>
          <div className="hero-actions">
            <button className="play-btn">Start Free Scan</button>
            <span className="meta">No signup required for first analysis</span>
          </div>
        </section>

        <section className="glass-panel">
          <h2>Analyze Document</h2>
          <label htmlFor="file-input" className="label">Choose PDF document</label>
          <input id="file-input" type="file" accept=".pdf" onChange={onFileChange} />
          {selectedFile && <p className="file-name">Selected: {selectedFile.name}</p>}

          <button className="analyze-btn" onClick={analyzeDocument} disabled={isLoading}>
            {isLoading ? 'Scanning Contract...' : 'Analyze Document'}
          </button>

          {error && <p className="error">{error}</p>}
        </section>
      </main>

      <section className="content-rows">
        <h3>Featured Capabilities</h3>
        <div className="row-grid">
          <article className="mini-card">
            <h4>Plain Summary</h4>
            <p>Explain legal language in normal words without losing meaning.</p>
          </article>
          <article className="mini-card">
            <h4>Risk Focus</h4>
            <p>Spot sensitive terms and one-sided obligations quickly.</p>
          </article>
          <article className="mini-card">
            <h4>Action Ready</h4>
            <p>Use insights to negotiate, compare, and make better decisions.</p>
          </article>
        </div>

        <div className="pipeline-rail">
          <div className="rail-step active">
            <span>1</span>
            <p>Upload contract</p>
          </div>
          <div className="rail-step active">
            <span>2</span>
            <p>Scan with AI</p>
          </div>
          <div className={`rail-step ${result ? 'active' : ''}`}>
            <span>3</span>
            <p>Review risks</p>
          </div>
        </div>
      </section>

      {result && (
        <section className="result-wrap">
          <div className="result-card reveal delay-1">
            <h3>Summary</h3>
            <p>{result.summary || 'No summary returned.'}</p>
          </div>

          <div className="result-card reveal delay-2">
            <h3>Extracted Fields</h3>
            {structuredEntries.length === 0 ? (
              <p>No extracted fields returned.</p>
            ) : (
              <div className="field-grid">
                {structuredEntries.map(([key, value], index) => (
                  <article className={`field-card reveal delay-${(index % 4) + 1}`} key={key}>
                    <h4>{key}</h4>
                    {Array.isArray(value) ? (
                      <ul>
                        {value.map((item, idx) => (
                          <li key={`${key}-${idx}`}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{String(value)}</p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="footer-strip">
        <span>Legal Guardian AI</span>
        <span>Cinematic Contract Intelligence</span>
        <span className="api-label">API: {API_BASE_URL}</span>
      </footer>
    </div>
  );
}

export default App;
