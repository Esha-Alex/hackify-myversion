'use client'
import { useEffect, useRef } from 'react'

export default function Newsletter() {
  const containerRef = useRef(null)

  useEffect(() => {
    // This stops the form from loading twice in React
    if (containerRef.current.children.length > 0) return

    const script = document.createElement('script')
    // ⚠️ PASTE YOUR KIT LINK AND UID HERE:
    script.src = "https://iedc-mace.kit.com/6fa16b58f5/index.js" 
    script.setAttribute('data-uid', '6fa16b58f5') 
    script.async = true
    
    containerRef.current.appendChild(script)
  }, [])

return (
    <section id="newsletter" className="w-full py-16 bg-[#0d1009] border-t border-[#a4c875]/20 relative z-10 flex justify-center">
      {/* Moved the comment inside the section, or just delete it entirely! */}
      <div className="max-w-md w-full px-4">
        <div ref={containerRef} className="w-full shadow-[0_0_30px_rgba(164,200,117,0.05)]" />
      </div>
    </section>
  )
}