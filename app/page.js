'use client'
import { useEffect } from 'react'

export default function DummyVerificationPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: '50px', background: '#000', color: '#fff', textAlign: 'center' }}>
      <h1>Hackify 3.0 Verification Node</h1>
      
      {/* 1. The Apply Button */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div 
          className="apply-button" 
          data-hackathon-slug="hackify-3" 
          data-button-theme="dark-inverted"
          style={{ height: '44px', width: '312px' }}
        ></div>
      </div>

      {/* 2. The Sponsor Logo */}
      <section id="sponsors" style={{ marginTop: '50px' }}>
        <h2>Sponsors</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {/* STRICT MATCH: target="_blank" and no trailing slash */}
          <a href="https://devfolio.co" target="_blank" rel="noreferrer noopener">
            <img src="/devfolio.png" alt="Devfolio" />
          </a>
        </div>
      </section>
    </div>
  )
}
