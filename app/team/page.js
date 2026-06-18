'use client';
import React, { useEffect, useState } from 'react';

export default function TeamPage() {

  const [openComm, setOpenComm] = useState(null);

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

  const team = [
    { id: 'ID-3301', name: 'CHRISTY CHRISTOPHER', role: 'LOGISTICS LEAD', clearance: 'DELTA', division: 'OPERATIONS', contact: '+91 xxxxx xxxxx', image: '/ChristyC.jpeg' },
    { id: 'ID-8822', name: 'SAMUEL M DILEEP', role: 'LEAD', clearance: 'SIGMA', division: 'CYBERSECURITY', contact: '+91 xxxxx xxxxx', image: '/SamuelC.jpeg' },
    { id: 'ID-7731', name: 'GOPIKA M', role: 'COMM. OFFICER', clearance: 'ALPHA', division: 'INFRASTRUCTURE', contact: '+91 xxxxx xxxxx', image: '/GopikaC.jpeg' },
    { id: 'ID-8924', name: 'AMAL NARAYAN', role: 'LEAD STRATEGIST', clearance: 'OMEGA', division: 'LOGISTICS', contact: '+91 xxxxx xxxxx', image: '/AmalC.jpeg' },
    { id: 'ID-4411', name: 'ANIRUDH', role: 'TECH INTEL', clearance: 'SIGMA', division: 'CYBERSECURITY', contact: '+91 xxxxx xxxxx', image: '/AnirudhC.jpeg' },
  ];

  const webTeam = [
    { name: 'ESHA ALEX', role: 'UI/UX & Frontend Lead', tag: 'Interface Architecture', image: '/EshaC.jpeg' },
    { name: 'APARNA SURESH', role: 'Frontend Developer', tag: 'Visual Systems', image: '/AparnaC.jpg' },
    { name: 'NAYANA SURENDRAN', role: 'Frontend Developer', tag: 'Design & Deployment', image: '/NayanaC.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-[#13140a] text-white font-mono relative overflow-x-hidden">

      {/* Matrix Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15 bg-[radial-gradient(circle,rgba(166,145,70,0.08) 1px,transparent 1px)] bg-[length:32px_32px]" />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-[100]" />

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 rounded-lg border border-white/10 bg-[#13140a]/60 backdrop-blur-xl px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex flex-col leading-none hover:opacity-80 transition-opacity">
          <span className="font-bold text-xl text-[#a69146] tracking-tighter">HACKIFY '26</span>
          <span className="text-[10px] uppercase tracking-widest text-[#a69146]/60 mt-0.5">3rd Edition</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-bold text-white/70">
          <a href="/#strategy" className="hover:text-[#a69146] transition-colors tracking-widest">STRATEGY</a>
          <a href="/#timeline" className="hover:text-[#a69146] transition-colors tracking-widest">TIMELINE</a>
          <a href="/#tracks" className="hover:text-[#a69146] transition-colors tracking-widest">TRACKS</a>
          <a href="/sponsors" className="hover:text-[#a69146] transition-colors tracking-widest">SPONSORS</a>
          <a href="/gallery" className="hover:text-[#a69146] transition-colors tracking-widest">GALLERY</a>
          <a href="/team" className="text-[#ddc574] tracking-widest border-b border-[#ddc574] pb-1">TEAM</a>
          <a href="/newsletter" className="hover:text-[#a69146] transition-colors tracking-widest">NEWSLETTER</a>
        </div>
        <button className="bg-[#a69146] text-black px-6 py-2 rounded-sm font-bold text-sm hover:bg-[#ddc574] transition-all duration-300">
          ENLIST NOW
        </button>
      </nav>

      <section className="pt-32 pb-24 px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Page Header */}
          <div className="border-l-4 border-[#a69146] pl-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#a69146] animate-pulse" />
              <span className="text-[10px] text-[#a69146] uppercase tracking-[0.4em] font-bold">
                System Status: Operational
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#ddc574] tracking-tighter uppercase">
              Meet The Team
            </h2>
            <p className="text-[#cec6b4] text-sm md:text-base uppercase tracking-widest max-w-2xl leading-relaxed">
              The minds behind HACKIFY '26 — organizers, leads, and builders driving the event from the ground up.
            </p>
          </div>

          {/* ── Core Organizers Label ── */}
          <div className="text-[10px] text-[#a69146] uppercase tracking-[0.4em] border-b border-[#a69146]/10 pb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#a69146]" />
            Core Organizers
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="tactical-card-container relative border-4 border-[#3D301D] bg-[#1b1c11] p-8 group transition-all duration-300 hover:bg-[#1f2015] cursor-crosshair"
                style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
              >
                {/* Photo + Name */}
                <div className="flex gap-4 items-center mb-8">
                  <div className="relative w-20 h-20 border border-[#3D301D] bg-[#0e0f05] overflow-hidden flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200';
                          e.target.className = "w-full h-full object-cover opacity-30";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#a69146] font-bold text-2xl bg-[#1b1c11]">
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px] opacity-20 pointer-events-none" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#e4e3d1] flex items-center gap-2 leading-tight">
                      <span className="text-[#a69146] text-xs">●</span> {member.name}
                    </h3>
                    <p className="text-[10px] text-[#a69146] uppercase tracking-widest">{member.role}</p>
                    <p className="text-[9px] text-[#cec6b4]/40 uppercase tracking-tighter">Clearance: {member.clearance}</p>
                  </div>
                </div>

                {/* Division */}
                <div className="border-t border-[#3D301D] pt-5 mb-6">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest">
                    <span className="text-[#cec6b4]/40">Division:</span>
                    <span className="text-[#e4e3d1]">{member.division}</span>
                  </div>
                </div>

                {/* Initiate Comm Button */}
                <button
                  onClick={() => setOpenComm(openComm === member.id ? null : member.id)}
                  className="w-full border border-[#a69146]/30 py-3 text-[10px] text-[#a69146] uppercase tracking-[0.3em] hover:bg-[#a69146] hover:text-[#0e0f05] transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-sm">✉</span>
                  {openComm === member.id ? 'Close Channel' : 'Initiate Comm'}
                </button>

                {/* Contact reveal */}
                {openComm === member.id && (
                  <div className="mt-4 border border-[#a69146]/20 bg-[#0e0f05] px-4 py-3 text-[11px] text-[#ddc574] tracking-widest uppercase flex items-center gap-2">
                    <span className="text-[#a69146]">📡</span>
                    Contact: {member.contact}
                  </div>
                )}

                {/* HUD corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#a69146]/30 group-hover:border-[#a69146] transition-colors" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#a69146]/30 group-hover:border-[#a69146] transition-colors" />
              </div>
            ))}
          </div>

          {/* ── Web Support Section ── */}
          <div className="space-y-10 pt-8">
            <div className="border-l-4 border-[#a69146] pl-6 space-y-3">
              <div className="text-[10px] text-[#a69146] uppercase tracking-[0.4em] flex items-center gap-3">
                <span className="w-8 h-px bg-[#a69146]" />
                Digital Infrastructure
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#ddc574] tracking-tighter uppercase">
                Web Support
              </h3>
              <p className="text-[#cec6b4] text-sm uppercase tracking-widest max-w-xl leading-relaxed">
                The team responsible for designing, building, and deploying the HACKIFY '26 digital experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webTeam.map((person, index) => (
                <div
                  key={index}
                  className="relative bg-[#1b1c11] border border-[#3D301D] hover:border-[#a69146]/40 transition-all duration-300 p-8 flex flex-col items-center text-center group overflow-hidden"
                  style={{ borderRadius: '4px' }}
                >
                  {/* Subtle gold glow top */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a69146]/40 to-transparent" />

                  {/* Oval image */}
                  <div className="w-32 h-40 rounded-[50%] overflow-hidden border-2 border-[#a69146]/40 group-hover:border-[#ddc574] transition-colors mb-6 flex-shrink-0 bg-[#0e0f05]"
                    style={{ boxShadow: '0 0 24px rgba(166,145,70,0.15)' }}>
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`${person.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center text-[#a69146] font-bold text-3xl`}>
                      {person.name.charAt(0)}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h4 className="font-bold text-[#e4e3d1] text-lg tracking-tight mb-1">{person.name}</h4>
                  <p className="text-[10px] text-[#a69146] uppercase tracking-widest mb-2">{person.role}</p>
                  <div className="w-8 h-px bg-[#a69146]/30 my-3" />
                  <p className="text-[9px] text-[#cec6b4]/50 uppercase tracking-[0.2em]">{person.tag}</p>

                  {/* Bottom corner accents */}
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#a69146]/20 group-hover:border-[#a69146]/60 transition-colors" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#a69146]/20 group-hover:border-[#a69146]/60 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Meta */}
          <div className="pt-12 flex justify-between items-center opacity-30 border-t border-[#a69146]/10">
            <div className="text-[10px] text-[#cec6b4] uppercase tracking-[0.3em]">
              Auth: LVL-5-CLEARANCE // SYSLOG: ACCESSED
            </div>
            <div className="text-[10px] text-[#cec6b4] uppercase tracking-[0.3em]">
              Encryption: AES-256 GCM
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0f05] border-t-2 border-white/10 py-16 px-8 relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="font-bold text-2xl text-[#a69146] tracking-tighter">HACKIFY '26</div>
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] leading-relaxed font-mono">
              Operated by IEDC MACE & KSUM.<br />
              Encrypted Terminal ID: 09-AF-2026.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-xs font-bold text-[#a69146] tracking-widest mb-4 uppercase">CONTACT LEADS</h5>
              <div className="text-xs space-y-2 text-white/60 uppercase">
                <p>Amal Narayan</p>
                <p>Gopika M</p>
                <p>Christy Christopher</p>
                <p>Anirudh</p>
                <p>Samuel M Dileep</p>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#a69146] tracking-widest mb-4 uppercase">SECURE CHANNELS</h5>
              <div className="text-xs space-y-2 text-white/60">
                <p className="lowercase">iedcmaceofficial@gmail.com</p>
                <p className="uppercase">IG / @iedcmace</p>
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-white/20 text-[10px] space-y-0.5">
            <p>SYS.STATUS: NOMINAL</p>
            <p>ENCRYPTION: AES-256 GCM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}