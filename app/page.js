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
              <img 
                alt="Devfolio" 
                // Using a globally hosted Devfolio logo so your server doesn't block the bot's image request
                src="https://hackhack-gcp.s3.amazonaws.com/sponsor_logos/4523c921387d4648bd1ffc8e6dfd158e_c21fb8c9f5e34da9910d54a559868725_devfolio.png" 
                style={{ height: '85px', width: 'auto' }} 
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
