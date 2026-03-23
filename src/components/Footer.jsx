import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t" 
      style={{ 
        background: '#050505',
        borderColor: 'rgba(212,148,26,0.1)',
      }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-gold-600/30 group-hover:ring-gold-500/60 transition-all duration-300">
              <img src="/logo.jpg" alt="NamazLock" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-sm font-semibold">
              <span className="gold-gradient-text">Namaz</span>
              <span className="text-white/70">Lock</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-white/30">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-gold-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-white/20">
            © {year} NamazLock. Built with 🤍 for the Ummah.
          </p>
        </div>

        {/* Thin gold line accent */}
        <div className="mt-8 flex items-center justify-center">
          <div className="h-px w-40 opacity-20"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a227, transparent)' }} />
        </div>
      </div>
    </footer>
  )
}
