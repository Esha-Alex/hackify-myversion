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
      <h1>Hackify 3.0 - System Override</h1>
      
      {/* 1. Devfolio Apply Button */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <div 
          className="apply-button" 
          data-hackathon-slug="hackify-3" 
          data-button-theme="dark-inverted"
          style={{ height: '44px', width: '312px' }}
        ></div>
      </div>

      {/* 2. HackNITR-Style Sponsor Block */}
      <section id="sponsors" style={{ marginTop: '50px' }}>
        <div id="Sponsors">
          <h2>Sponsors</h2>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {/* Exact HackNITR structure: target="_blank", no trailing slash */}
          <a target="_blank" rel="noreferrer noopener" href="https://devfolio.co">
            <div>
              {/* Back to your local image! Added a white background so it's visible */}
              <img 
                alt="Devfolio" 
                src="/devfolioc.png" 
                style={{ height: '85px', width: 'auto', backgroundColor: '#fff', padding: '10px', borderRadius: '8px' }} 
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
