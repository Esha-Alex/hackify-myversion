'use client';
import React, { useEffect } from 'react';

export default function SponsorsPage() {

  useEffect(() => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-20.mp3');
    audio.volume = 0.05;

    const handleHover = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    const elements = document.querySelectorAll('button, .tactical-card-container, a');
    elements.forEach(el => el.addEventListener('mouseenter', handleHover));

    return () => {
      elements.forEach(el => el.removeEventListener('mouseenter', handleHover));
    };
  }, []);

  const sponsors = [
    { id: 'KAL-01', name: 'KALKITECH', type: 'Grid Infrastructure Provider', logo: '/KalkitechC.jpeg' },
    { id: 'ELE-02', name: 'ELECTRALYSYS', type: 'Primary energy grid and hardware logistics sponsor.', active: true },
    { id: 'KSUM-03', name: 'KSUM', type: 'State Operational Support', logo: '/KSUMC.jpeg' },
    { id: 'VIS-04', name: 'VISION DYNAMICS', type: 'Surveillance & Analytics' },
    { id: 'XYZ-05', name: '.XYZ', type: 'Digital Territory Provider' },
  ];

  const tiers = [
    {
      tier: '01',
      title: 'GOLD COMMAND',
      cost: '₹4,00,000 INR',
      benefits: ['Prime Logo Placement (All HUDs)', 'Direct Comms Access to Top 10 Squads', 'Dedicated Tactical Track', 'Physical Booth Setup (Command Center)']
    },
    {
      tier: '02',
      title: 'SILVER OPS',
      cost: '₹2,00,000 INR',
      benefits: ['Secondary Logo Placement', 'API / Tool Integration']
    },
    {
      tier: '03',
      title: 'BRONZE SUPPORT',
      cost: '₹80,000 INR',
      benefits: []
    }
  ];

  return (
    <div className="min-h-screen bg-[#13140a] text-white font-mono relative overflow-x-hidden">

      {/* Matrix Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15 bg-[radial-gradient(circle,rgba(216,255,122,0.08) 1px,transparent 1px)] bg-[length:32px_32px]" />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-[100]" />

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 rounded-lg border border-white/10 bg-[#13140a]/60 backdrop-blur-xl px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex flex-col leading-none hover:opacity-80 transition-opacity">
          <span className="font-bold text-xl text-[#D8FF7A] tracking-tighter">HACKIFY 3.0</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold text-white/70">
          <a href="/#strategy" className="hover:text-[#D8FF7A] transition-colors tracking-widest">STRATEGY</a>
          <a href="/#timeline" className="hover:text-[#D8FF7A] transition-colors tracking-widest">TIMELINE</a>
          <a href="/#tracks" className="hover:text-[#D8FF7A] transition-colors tracking-widest">TRACKS</a>
          <a href="/sponsors" className="text-[#D8FF7A] transition-colors tracking-widest border-b border-[#D8FF7A] pb-1">SPONSORS</a>
          <a href="/gallery" className="hover:text-[#D8FF7A] transition-colors tracking-widest">GALLERY</a>
          <a href="/team" className="hover:text-[#D8FF7A] transition-colors tracking-widest">TEAM</a>
          <a href="/newsletter" className="hover:text-[#D8FF7A] transition-colors tracking-widest">NEWSLETTER</a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-32 pb-24 px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Page Header */}
          <div className="border-l-4 border-[#D8FF7A] pl-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#D8FF7A] animate-pulse" />
              <span className="text-[10px] text-[#D8FF7A] uppercase tracking-[0.4em] font-bold">
                System Status: Operational
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#D8FF7A] tracking-tighter uppercase">
              Allied Forces
            </h1>
            <p className="text-[#cec6b4] text-sm md:text-base uppercase tracking-widest max-w-2xl leading-relaxed">
              Official partners and strategic allies powering HACKIFY '26. Authorized clearance required to view directives.
            </p>
          </div>

          {/* DEVFOLIO Special Registration Partner Card */}
          <div>
            <div className="text-[10px] text-[#D8FF7A] uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#D8FF7A]" />
              Registration Partner
              <span className="w-8 h-px bg-[#D8FF7A]" />
            </div>

            <div
              className="tactical-card-container relative border-2 border-[#D8FF7A] bg-[#1b1c11] p-10 group overflow-hidden"
              style={{ clipPath: 'polygon(28px 0%, 100% 0%, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0% 100%, 0% 28px)' }}
            >
              {/* Lime glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(216,255,122,0.08),transparent_70%)] pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D8FF7A] opacity-60" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D8FF7A] opacity-60" />

              <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
                {/* Logo box */}
                <div
                  className="flex-shrink-0 w-full lg:w-64 h-44 border-2 border-[#D8FF7A]/40 bg-[#0e0f05] flex items-center justify-center overflow-hidden"
                  style={{ clipPath: 'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)' }}
                >
                  <img
                    src="/DEVFOLIOC.jpeg"
                    alt="DEVFOLIO LOGO"
                    className="max-h-full max-w-full object-contain p-4"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-[#D8FF7A] font-bold text-2xl">
                    DEVFOLIO
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D8FF7A] animate-pulse rounded-full" />
                    <span className="text-[10px] text-[#D8FF7A] uppercase tracking-[0.5em] font-bold">Primary Registration Partner</span>
                  </div>
                  <h2 className="text-5xl font-bold text-[#D8FF7A] tracking-tighter uppercase">Devfolio</h2>
                  <p className="text-sm text-[#cec6b4] leading-7 max-w-2xl">
                    Devfolio is the official registration partner for HACKIFY '26, handling team onboarding, submission management, and participant communications throughout the event.
                  </p>
                  <div className="flex gap-6 pt-2 text-[10px] uppercase tracking-widest text-[#D8FF7A]/60 font-mono">
                    <span>✦ Team Onboarding</span>
                    <span>✦ Submissions</span>
                    <span>✦ Comms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Sponsors Grid */}
          <div className="space-y-8">
            <div className="text-[10px] text-[#D8FF7A] uppercase tracking-[0.4em] border-b border-[#D8FF7A]/10 pb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#D8FF7A]" />
              Official Sponsors
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((spon) => (
                <div
                  key={spon.id}
                  className="tactical-card-container relative border-2 border-[#3D301D] bg-[#1b1c11] p-8 group transition-all duration-300 hover:bg-[#1f2015] hover:border-[#D8FF7A]/40 cursor-pointer"
                  style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
                >
                  <div className="flex justify-between items-start mb-6 text-[10px] text-[#D8FF7A]/50">
                    <span>ID: {spon.id}</span>
                    {spon.active && (
                      <span className="text-[#D8FF7A] font-bold animate-pulse">■ ACTIVE LINK</span>
                    )}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-28 h-28 border border-[#3D301D] bg-white flex items-center justify-center overflow-hidden flex-shrink-0 p-2">
                      {spon.logo ? (
                        <img
                          src={spon.logo}
                          alt={`${spon.name} logo`}
                          className="w-full h-full object-contain p-2"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`${spon.logo ? 'hidden' : 'flex'} w-full h-full items-center justify-center text-[#a69146] font-bold text-sm`}>
                        {spon.name.substring(0, 4)}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#e4e3d1] tracking-tight">{spon.name}</h3>
                      <p className="text-[10px] text-[#D8FF7A] uppercase tracking-widest">{spon.type}</p>
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D8FF7A]/30 group-hover:border-[#D8FF7A] transition-colors" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D8FF7A]/30 group-hover:border-[#D8FF7A] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Tiers */}
          <div className="space-y-8">
            <div className="text-[10px] text-[#D8FF7A] uppercase tracking-[0.4em] border-b border-[#D8FF7A]/10 pb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#D8FF7A]" />
              Requisition Tiers // Asset Allocation
            </div>

            <div className="space-y-6">
              {tiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="tactical-card-container relative border-4 border-[#3D301D] bg-[#1b1c11] p-10 group hover:border-[#D8FF7A]/30 transition-colors"
                  style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="space-y-1">
                      <div className="text-[10px] text-[#D8FF7A] border border-[#D8FF7A]/30 px-2 py-0.5 inline-block mb-2 font-mono">
                        TIER {tier.tier}
                      </div>
                      <h3 className="text-4xl font-bold text-[#D8FF7A] tracking-tight">{tier.title}</h3>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-[10px] text-[#D8FF7A]/60 uppercase tracking-widest mb-1 font-mono">Requisition Cost</p>
                      <p className="text-3xl font-bold text-[#D8FF7A]">{tier.cost}</p>
                    </div>
                  </div>

                  {tier.benefits.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 border-t border-[#D8FF7A]/10 pt-8">
                      {tier.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-[#cec6b4] font-mono">
                          <span className="text-[#D8FF7A]">☑</span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D8FF7A]/30 group-hover:border-[#D8FF7A] transition-colors" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D8FF7A]/30 group-hover:border-[#D8FF7A] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Meta */}
          <div className="pt-12 flex justify-between items-center opacity-30 border-t border-[#D8FF7A]/10">
            <div className="text-[10px] text-[#cec6b4] uppercase tracking-[0.3em] font-mono">
              Auth: 09-AF-2026 // Status: Verified
            </div>
            <div className="text-[10px] text-[#cec6b4] uppercase tracking-[0.3em] font-mono">
              Encryption: AES-256 GCM
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#050505] border-t border-white/10 py-20 px-5 sm:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="mb-12">
          <span className="font-heading text-3xl font-black tracking-widest text-[#D8FF7A]">HACKIFY 3.0</span>
          <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-[#D8FF7A]/50 uppercase">
            End of Transmission
          </p>
        </div>

        <div className="mb-10 flex flex-col sm:flex-row gap-8 sm:gap-16 font-mono text-xs text-[#B8B8B8]">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-[#D8FF7A]/70 uppercase tracking-widest border-b border-[#D8FF7A]/20 pb-1 mb-1">Lead_01</span>
            <span className="text-white">Amal Narayan</span>
            <a href="tel:+919048372356" className="hover:text-[#D8FF7A] transition-colors">+91 9048372356</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-[#D8FF7A]/70 uppercase tracking-widest border-b border-[#D8FF7A]/20 pb-1 mb-1">Lead_02</span>
            <span className="text-white">Gopika</span>
            <a href="tel:+917558821825" className="hover:text-[#D8FF7A] transition-colors">+91 7558821825</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-[#D8FF7A]/70 uppercase tracking-widest border-b border-[#D8FF7A]/20 pb-1 mb-1">Comms_Net</span>
            <span className="text-white">Official Mail</span>
            <a href="mailto:iedcmaceofficial@gmail.com" className="hover:text-[#D8FF7A] transition-colors">iedcmaceofficial@gmail.com</a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
            Operated by IEDC MACE & KSUM
          </p>
          <p className="font-mono text-[8px] text-[#D8FF7A]/20 tracking-widest uppercase">
            SYS.STATUS: NOMINAL // RESEARCH MODE: ACTIVE
          </p>
        </div>
      </footer>
    </div>
  );
}