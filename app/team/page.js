'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader'

export default function TeamPage() {
  const [openComm, setOpenComm] = useState(null);
  const [flipped, setFlipped] = useState([false, false, false]);
  const flipRefs = useRef([]);

  const setFlip = (index, value) => {
    setFlipped((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    const el = flipRefs.current[index];
    if (el) {
      gsap.to(el, { rotateY: value ? 180 : 0, duration: 0.6, ease: 'power2.inOut' });
    }
  };

  useEffect(() => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-20.mp3');
    audio.volume = 0.05;
    const handleHover = () => { audio.currentTime = 0; audio.play().catch(() => {}); };
    const elements = document.querySelectorAll('button, .tactical-card-container, a');
    elements.forEach(el => el.addEventListener('mouseenter', handleHover));
    return () => { elements.forEach(el => el.removeEventListener('mouseenter', handleHover)); };
  }, []);

  const team = [
    { id: 'ID-3301', name: 'CHRISTY CHRISTOPHER', role: 'LEAD', contact: '+91 79943 76774', image: '/ChristyC.jpeg' },
    { id: 'ID-8822', name: 'SAMUEL M DILEEP', role: 'LEAD', contact: '+91 80752 58045', image: '/SamuelC.jpeg' },
    { id: 'ID-7731', name: 'GOPIKA M', role: 'LEAD', contact: '+91 75588 21825', image: '/GopikaC.jpeg' },
    { id: 'ID-8924', name: 'AMAL NARAYAN', role: 'LEAD', contact: '+91 90483 72356', image: '/AmalC.jpeg' },
    { id: 'ID-4411', name: 'ANIRUDH', role: 'LEAD', contact: '+91 79072 83190', image: '/AnirudhC.jpeg' },
  ];

  const webTeam = [
    { name: 'ESHA ALEX', image: '/EshaC.jpeg' },
    { name: 'APARNA SURESH', image: '/AparnaC.jpg' },
    { name: 'NAYANA SURENDRAN', image: '/NayanaC.jpeg' },
  ];

  const renderMember = (member) => (
    <div key={member.id} className="flex flex-col items-center text-center">
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-5 sm:mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200';
            e.target.className = 'w-full h-full object-cover opacity-30';
          }}
        />
      </div>

      <h3 className="font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide text-[#e4e3d1]">
        {member.name}
      </h3>
      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-[#a4c875]">
        {member.role}
      </p>

      <button
        onClick={() => setOpenComm(openComm === member.id ? null : member.id)}
        className="mt-5 bg-gradient-to-r from-[#a4c875] to-[#7a9b4f] text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest px-5 py-2.5"
        style={{
          clipPath:
            'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
        }}
      >
        {openComm === member.id ? 'Close Channel' : 'Initiate Comms'}
      </button>

      {openComm === member.id && (
        <div className="mt-3 text-xs sm:text-sm text-[#a4c875] tracking-widest uppercase break-all">
          {member.contact}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#13140a] text-white font-mono relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15 bg-[radial-gradient(circle,rgba(216,255,122,0.08)_1px,transparent_1px)] bg-[length:32px_32px]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-[100]" />

      <SiteHeader />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">

          {/* Page Header */}
          <div className="border-l-4 border-[#a4c875] pl-4 sm:pl-6 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#a4c875] tracking-tighter uppercase">
              Meet The Team
            </h2>
            <p className="text-[#cec6b4] text-xs sm:text-sm md:text-base uppercase tracking-widest max-w-2xl leading-relaxed">
              The minds behind HACKIFY '26 — organizers, leads, and builders driving the event from the ground up.
            </p>
          </div>

          {/* Core Organizers — centered, large heading */}
          <div className="text-center text-xl sm:text-3xl md:text-4xl font-bold text-[#a4c875] uppercase tracking-tight border-b border-[#a4c875]/10 pb-5">
            Core Organizers
          </div>

          {/* Team Grid — no cards, row 1: 3 members, row 2: left-aligned remainder */}
          <div className="max-w-6xl mx-auto px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-y-14 md:gap-y-16 gap-x-8 md:gap-x-12">
              {team.slice(0, 3).map(renderMember)}
            </div>

            <hr className="my-12 sm:my-14 md:my-16 border-t border-[#a4c875]/15" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-y-14 md:gap-y-16 gap-x-8 md:gap-x-12">
              {team.slice(3, 5).map(renderMember)}
            </div>
          </div>

          {/* Web Team Section — no cards, flip-on-hover photo (GSAP) */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 pt-4 sm:pt-6 md:pt-8">
            <div className="border-l-4 border-[#a4c875] pl-4 sm:pl-6 space-y-3">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#a4c875] tracking-tighter uppercase">
                Web Team
              </h3>
              <p className="text-[#cec6b4] text-xs sm:text-sm uppercase tracking-widest max-w-xl leading-relaxed">
                The team responsible for designing, building, and deploying the HACKIFY '26 digital experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 gap-x-6 max-w-3xl mx-auto sm:mx-0">
              {webTeam.map((person, index) => (
                <div key={person.name} className="flex flex-col items-center text-center">
                  {/* Flip container — perspective wrapper, works on hover (desktop) and tap (mobile) */}
                  <div
                    className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-4 sm:mb-5 cursor-pointer touch-manipulation select-none"
                    style={{ perspective: '800px' }}
                    onMouseEnter={() => setFlip(index, true)}
                    onMouseLeave={() => setFlip(index, false)}
                    onClick={() => setFlip(index, !flipped[index])}
                  >
                    <div
                      ref={(el) => (flipRefs.current[index] = el)}
                      className="relative w-full h-full rounded-full"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Front — photo */}
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full items-center justify-center text-[#a4c875] font-bold text-2xl bg-[#0e0f05]">
                          {person.name.charAt(0)}
                        </div>
                      </div>

                      {/* Back — "WEB DEVELOPER" */}
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-[#a4c875] to-[#7a9b4f] flex items-center justify-center"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <span className="text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 text-center">
                          Web Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base uppercase tracking-wide text-[#e4e3d1]">
                    {person.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}