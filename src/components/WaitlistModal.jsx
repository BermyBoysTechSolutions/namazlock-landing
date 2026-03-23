import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  )
}

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    // Simulate submission (replace with real API)
    try {
      await new Promise((r) => setTimeout(r, 1400))
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setEmail('')
      setPhone('')
      setErrorMsg('')
    }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-md rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(10, 8, 3, 0.97)',
                border: '1px solid rgba(212,148,26,0.4)',
                boxShadow: '0 0 0 1px rgba(212,148,26,0.12), 0 40px 100px rgba(0,0,0,0.9), 0 0 60px rgba(212,148,26,0.08)',
              }}
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-40 h-40 opacity-20 pointer-events-none">
                <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 Q80 0 80 80 Q80 0 160 0" fill="none" stroke="#c9a227" strokeWidth="1"/>
                  <path d="M0 0 L0 80 Q0 0 80 0 Z" fill="rgba(201,162,39,0.06)"/>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none transform rotate-180">
                <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 Q80 0 80 80 Q80 0 160 0" fill="none" stroke="#c9a227" strokeWidth="1"/>
                  <path d="M0 0 L0 80 Q0 0 80 0 Z" fill="rgba(201,162,39,0.06)"/>
                </svg>
              </div>

              {/* Circuit line decoration */}
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M10 10 H50 V40 H70 M10 60 H30 V70 H70' stroke='%23c9a227' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23c9a227'/%3E%3Ccircle cx='30' cy='60' r='2' fill='%23c9a227'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white/50">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>

              <div className="relative p-8 sm:p-10">
                {status === 'success' ? (
                  /* ── Success state ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, #c9a227, #f2c84a)',
                        boxShadow: '0 0 30px rgba(212,148,26,0.4)',
                      }}
                    >
                      <CheckIcon />
                    </motion.div>
                    <img src="/logo.jpg" alt="NamazLock" className="w-12 h-12 rounded-full ring-2 ring-gold-600/40 mb-4" />
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      You're on the list! 🎉
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      We'll notify you the moment NamazLock launches. 
                      <br/>Get ready to reclaim your prayer time.
                    </p>
                    <div className="px-4 py-2 rounded-full text-xs font-medium text-gold-400" 
                      style={{ background: 'rgba(212,148,26,0.1)', border: '1px solid rgba(212,148,26,0.25)' }}>
                      Barak Allahu feekum 🤲
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form state ── */
                  <>
                    {/* Logo + header */}
                    <div className="flex flex-col items-center text-center mb-8">
                      <img 
                        src="/logo.jpg" 
                        alt="NamazLock" 
                        className="w-14 h-14 rounded-full ring-2 ring-gold-600/50 shadow-lg shadow-black/50 mb-4"
                      />
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                        Join the{' '}
                        <span className="gold-gradient-text">NamazLock</span>
                        <br />Waitlist
                      </h2>
                      <p className="text-white/40 text-sm">
                        Be first to experience digital discipline for prayer.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email */}
                      <div className="group">
                        <label className="block text-xs font-semibold text-gold-400/80 mb-1.5 tracking-wider uppercase">
                          Email Address <span className="text-gold-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(212,148,26,0.2)',
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(212,148,26,0.6)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(212,148,26,0.2)'}
                          required
                          id="waitlist-email"
                          autoComplete="email"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-gold-400/80 mb-1.5 tracking-wider uppercase">
                          Phone Number <span className="text-white/25">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(212,148,26,0.2)',
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'rgba(212,148,26,0.6)'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(212,148,26,0.2)'}
                          id="waitlist-phone"
                          autoComplete="tel"
                        />
                      </div>

                      {/* Error */}
                      {errorMsg && (
                        <motion.p
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-400/80 flex items-center gap-1.5"
                        >
                          <span>⚠</span> {errorMsg}
                        </motion.p>
                      )}

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 rounded-xl font-bold text-base tracking-wide mt-2 relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #c9a227 0%, #f2c84a 50%, #c9a227 100%)',
                          backgroundSize: '200% 100%',
                          color: '#080808',
                          boxShadow: '0 4px 20px rgba(212,148,26,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                        }}
                        whileHover={{ scale: 1.01, backgroundPosition: '100% 0' }}
                        whileTap={{ scale: 0.98 }}
                        id="waitlist-submit-btn"
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full inline-block"
                            />
                            Joining...
                          </span>
                        ) : (
                          'Join Waitlist'
                        )}
                      </motion.button>

                      {/* Privacy note */}
                      <p className="text-center text-[11px] text-white/25 leading-relaxed">
                        No spam — ever. We'll only notify you at launch.
                        <br />Your data stays private. 🔒
                      </p>
                    </form>

                    {/* Separator */}
                    <div className="flex items-center gap-3 my-5">
                      <div className="flex-1 h-px" style={{ background: 'rgba(212,148,26,0.12)' }} />
                      <span className="text-[11px] text-white/20 font-medium">Exclusive early access</span>
                      <div className="flex-1 h-px" style={{ background: 'rgba(212,148,26,0.12)' }} />
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex -space-x-2">
                        {[
                          { initials: 'AK', bg: 'from-emerald-700 to-emerald-900' },
                          { initials: 'MR', bg: 'from-gold-600 to-gold-800' },
                          { initials: 'FH', bg: 'from-emerald-600 to-teal-900' },
                        ].map((a) => (
                          <div
                            key={a.initials}
                            className={`w-7 h-7 rounded-full bg-gradient-to-br ${a.bg} ring-2 ring-[#0a0803] flex items-center justify-center text-[9px] font-bold text-white/80`}
                          >
                            {a.initials}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-white/35">
                        <span className="text-white/60 font-semibold">1,200+</span> already waiting
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
