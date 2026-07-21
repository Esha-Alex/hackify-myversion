'use client'
import { useEffect, useRef } from 'react'

const FLOW_STEPS = ['ENLIST.', 'GET BRIEFED.', 'DEPLOY FIRST.']

function ZigzagFlow() {
  return (
    <div className="relative hidden md:block w-[260px] h-[320px] shrink-0">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 260 320"
        fill="none"
      >
        <path
          d="M130 50 C 210 50, 210 120, 130 150 C 50 180, 50 250, 130 270"
          stroke="#a4c875"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute top-0 left-0 w-[210px] rounded-[1.75rem] border border-[#a4c875]/20 bg-[#16210f] px-6 py-4 shadow-[0_0_24px_rgba(164,200,117,0.08)]">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-[#E4E3D1]">
          {FLOW_STEPS[0]}
        </span>
      </div>

      <div className="absolute top-[125px] left-[50px] w-[210px] rounded-[1.75rem] border border-[#a4c875]/20 bg-[#16210f] px-6 py-4 shadow-[0_0_24px_rgba(164,200,117,0.08)]">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-[#E4E3D1]">
          {FLOW_STEPS[1]}
        </span>
      </div>

      <div className="absolute top-[248px] left-0 w-[210px] rounded-[1.75rem] border border-[#a4c875]/20 bg-[#16210f] px-6 py-4 shadow-[0_0_24px_rgba(164,200,117,0.08)]">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-[#E4E3D1]">
          {FLOW_STEPS[2]}
        </span>
      </div>
    </div>
  )
}

export default function Newsletter() {
  const containerRef = useRef(null)

  useEffect(() => {
    // This stops the form from loading twice in React
    if (containerRef.current.children.length > 0) return

    // Fallback input while the external kit loads
    const fallback = document.createElement('div')
    fallback.className = 'w-full'
    fallback.innerHTML = `
      <div class="w-full flex flex-col md:flex-row items-center gap-3">
        <input aria-label="email" class="newsletter-fallback w-full md:w-2/3 rounded-md border border-[#a4c875]/20 bg-black/10 px-3 py-2 text-white placeholder:text-[#cfcfcf] focus:outline-none" placeholder="Email address" />
        <button class="inline-flex items-center justify-center px-4 py-2 bg-[#a4c875] text-black font-bold rounded-md">ENLIST</button>
      </div>
    `
    containerRef.current.appendChild(fallback)

    const script = document.createElement('script')
    // ⚠️ Same Kit link and UID as before — untouched:
    script.src = "https://iedc-mace.kit.com/6fa16b58f5/index.js"
    script.setAttribute('data-uid', '6fa16b58f5')
    script.async = true

    // When the kit injects, remove the fallback
    const observer = new MutationObserver(() => {
      if (containerRef.current && containerRef.current.children.length > 1) {
        const fallbackEl = containerRef.current.querySelector('.newsletter-fallback')
        if (fallbackEl) fallbackEl.closest('div').remove()
        observer.disconnect()
      }
    })
    observer.observe(containerRef.current, { childList: true })

    containerRef.current.appendChild(script)
  }, [])

  return (
    <section
      id="newsletter"
      className="w-full py-16 md:py-24 bg-[#0d1009] border-t border-[#a4c875]/20 relative z-10"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(240px,260px)_minmax(0,1fr)] items-center">
          <ZigzagFlow />

          {/* Enlarged intel/newsletter card */}
          <div className="w-full">
            <div className="mb-6 text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#a4c875]">
                Enlist for Mission Briefs
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[#a4c875]/60">
                Hackify 3.O // Field Updates
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#a4c875]/25 bg-[#081009]/75 p-5 md:p-7 shadow-[0_0_50px_rgba(164,200,117,0.12)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#a4c875]/80 via-transparent to-[#a4c875]/40" />
              <div className="pointer-events-none absolute right-6 top-8 h-[160px] w-[160px] rounded-full border border-[#a4c875]/10 bg-[#a4c875]/5 opacity-10 blur-xl" />
              <div className="relative" style={{ minHeight: '120px' }}>
                <div ref={containerRef} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}