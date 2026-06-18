'use client'

import { Heart, Link } from 'lucide-react'

const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 py-20 px-5 sm:px-8 relative z-10 flex flex-col items-center text-center">
      <div className="mb-12">
        <span className="font-heading text-3xl font-black tracking-widest text-primary">HACKIFY 3.0</span>
        <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase">
          End of Transmission
        </p>
      </div>

      <div className="mb-10 flex flex-col sm:flex-row gap-8 sm:gap-16 font-mono text-xs text-[#B8B8B8]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-primary/70 uppercase tracking-widest border-b border-primary/20 pb-1 mb-1">Lead_01</span>
          <span className="text-white">Amal Narayan</span>
          <a href="tel:+919048372356" className="hover:text-primary transition-colors">+91 9048372356</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-primary/70 uppercase tracking-widest border-b border-primary/20 pb-1 mb-1">Lead_02</span>
          <span className="text-white">Gopika</span>
          <a href="tel:+917558821825" className="hover:text-primary transition-colors">+91 7558821825</a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-primary/70 uppercase tracking-widest border-b border-primary/20 pb-1 mb-1">Comms_Net</span>
          <span className="text-white">Official Mail</span>
          <a href="mailto:iedcmaceofficial@gmail.com" className="hover:text-primary transition-colors">iedcmaceofficial@gmail.com</a>
        </div>
      </div>

      <div className="flex gap-4 mb-12">
        {[
          { icon: Heart, href: '#' },
          { icon: WhatsAppIcon, href: '#' },
          { icon: Link, href: '#' },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(216,255,122,0.2)]"
          >
            <Icon className="size-5" strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
          Operated by IEDC MACE &amp; KSUM
        </p>
        <p className="font-mono text-[8px] text-primary/20 tracking-widest uppercase">
          SYS.STATUS: NOMINAL // RESEARCH MODE: ACTIVE
        </p>
      </div>
    </footer>
  )
}
