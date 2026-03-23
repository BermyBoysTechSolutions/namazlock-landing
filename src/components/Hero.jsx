import { useRef } from 'react'
import { motion } from 'framer-motion'

const PRAYER_TIMES = [
  { name: 'Fajr', time: '5:41 AM', icon: '🌙' },
  { name: 'Dhuhr', time: '1:22 PM', icon: '☀️' },
  { name: 'Asr', time: '4:35 PM', icon: '🌤️' },
  { name: 'Maghrib', time: '7:48 PM', icon: '🌅' },
  { name: 'Isha', time: '9:15 PM', icon: '⭐' },
]

function IPhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] mx-auto float-phone select-none">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-[3.2rem] blur-3xl opacity-30 bg-gradient-to-b from-gold-400/30 via-emerald-800/20 to-transparent scale-90 -z-10" />
      
      {/* Phone shell */}
      <div className="relative rounded-[3.2rem] overflow-hidden shadow-[0_0_0_2px_rgba(212,148,26,0.5),0_0_0_4px_rgba(180,120,20,0.15),0_40px_100px_rgba(0,0,0,0.9)]"
        style={{ background: 'linear-gradient(145deg, #c8a020 0%, #a07010 30%, #806010 60%, #c8a020 100%)' }}
      >
        {/* Inner bezels */}
        <div className="m-[3px] rounded-[2.9rem] overflow-hidden bg-black relative">
          {/* Notch/Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-24 h-[1.4rem] bg-black rounded-full border border-black/50" />
          
          {/* Screen content */}
          <div className="relative min-h-[620px] sm:min-h-[680px]"
            style={{
              background: 'linear-gradient(160deg, #0a2010 0%, #041a0a 40%, #061508 80%, #020d05 100%)'
            }}
          >
            {/* Islamic geometric corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 opacity-30">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L80 0 L80 20 Q60 20 60 40 L40 40 Q40 20 20 20 L0 20 Z" fill="none" stroke="#c9a227" strokeWidth="0.8"/>
                <path d="M0 0 L40 0 L40 40 Z" fill="rgba(201,162,39,0.05)"/>
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-30 transform scale-x-[-1]">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L80 0 L80 20 Q60 20 60 40 L40 40 Q40 20 20 20 L0 20 Z" fill="none" stroke="#c9a227" strokeWidth="0.8"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 opacity-30 transform scale-y-[-1]">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L80 0 L80 20 Q60 20 60 40 L40 40 Q40 20 20 20 L0 20 Z" fill="none" stroke="#c9a227" strokeWidth="0.8"/>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30 transform scale-x-[-1] scale-y-[-1]">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L80 0 L80 20 Q60 20 60 40 L40 40 Q40 20 20 20 L0 20 Z" fill="none" stroke="#c9a227" strokeWidth="0.8"/>
              </svg>
            </div>
            
            {/* Screen content */}
            <div className="pt-14 px-6 pb-8 flex flex-col items-center text-center gap-4 h-full">
              {/* Status bar */}
              <div className="flex items-center justify-between w-full text-xs text-gold-400/70 px-2">
                <span>1:30 PM</span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path d="M1 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3zm5.5-4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5zm5.5 8a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5z"/></svg>
                  📶
                </span>
              </div>

              {/* Mosque icon */}
              <div className="text-3xl mt-2">🕌</div>
              
              <div className="text-gold-400/80 text-xs font-medium tracking-widest uppercase">Dhuhr Prayer</div>

              <div className="my-1">
                <div className="font-display text-2xl font-bold leading-tight"
                  style={{ color: '#c9a227' }}
                >
                  Phone locked
                  <br />for Dhuhr
                </div>
              </div>

              {/* Timer */}
              <div className="text-4xl font-bold text-white/90 tabular-nums tracking-wider font-display">
                14:32
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase font-medium">remaining</div>

              {/* Progress bar */}
              <div className="w-full max-w-[200px]">
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #c9a227, #f2c84a)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-xs text-white/30 mt-1.5">until prayer ends</div>
              </div>

              {/* Prayer times mini list */}
              <div className="w-full mt-3 space-y-1.5">
                {PRAYER_TIMES.map((p, i) => (
                  <div key={p.name} className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs ${
                    i === 1 
                      ? 'bg-gold-600/20 border border-gold-600/30' 
                      : 'bg-white/5'
                  }`}>
                    <span className={i === 1 ? 'text-gold-400 font-semibold' : 'text-white/50'}>{p.name}</span>
                    <span className={i === 1 ? 'text-gold-300 font-semibold' : 'text-white/40'}>{p.time}</span>
                  </div>
                ))}
              </div>

              {/* Lock icon */}
              <div className="mt-4 flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-gold-500/60">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <p className="text-[10px] text-white/30 leading-tight text-center">
                  Use NamazLock to unlock<br />after prayer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute right-[-5px] top-28 w-1.5 h-12 rounded-r-full"
        style={{ background: 'linear-gradient(145deg, #c8a020, #806010)' }} />
      <div className="absolute left-[-5px] top-24 w-1.5 h-8 rounded-l-full"
        style={{ background: 'linear-gradient(145deg, #c8a020, #806010)' }} />
      <div className="absolute left-[-5px] top-36 w-1.5 h-8 rounded-l-full"
        style={{ background: 'linear-gradient(145deg, #c8a020, #806010)' }} />
      <div className="absolute left-[-5px] top-48 w-1.5 h-8 rounded-l-full"
        style={{ background: 'linear-gradient(145deg, #c8a020, #806010)' }} />
    </div>
  )
}

export default function Hero({ onJoinWaitlist }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden circuit-bg-dense"
    >
      {/* Hero background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#080808]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />
      
      {/* Circuit dots scattered */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-gold-500/30 animate-pulse" />
      <div className="absolute top-3/4 left-1/3 w-1 h-1 rounded-full bg-gold-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-gold-500/25 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-emerald-600/20 animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gold-border mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">Launching 2025</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="gold-gradient-text">NamazLock</span>
              <br />
              <span className="text-white">Digital Discipline</span>
              <br />
              <span className="text-white/70 text-4xl sm:text-5xl lg:text-6xl font-semibold">for Spiritual Focus.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg text-white/50 leading-relaxed mb-8 max-w-lg lg:max-w-none"
            >
              Your phone locks automatically at prayer time. No excuses. No distractions.
              Just presence. <span className="text-gold-400/80 font-medium">Pure spiritual focus, powered by iOS.</span>
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {['Smart Blocking', 'Auto-Prayer Sync', 'Focus Analytics'].map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1.5 text-xs font-medium rounded-full glass-card gold-border text-gold-400/80"
                >
                  {feat}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                onClick={onJoinWaitlist}
                className="btn-gold px-8 py-4 rounded-full text-base font-bold w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-waitlist-btn"
              >
                Join the Waitlist
              </motion.button>
              <motion.a
                href="#features"
                className="btn-outline-gold px-8 py-4 rounded-full text-base font-semibold w-full sm:w-auto text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Features →
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[
                  { initials: 'AK', bg: 'from-emerald-700 to-emerald-900' },
                  { initials: 'MR', bg: 'from-gold-600 to-gold-800' },
                  { initials: 'FH', bg: 'from-emerald-600 to-teal-900' },
                  { initials: 'SA', bg: 'from-gold-500 to-gold-700' },
                ].map((a) => (
                  <div
                    key={a.initials}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${a.bg} ring-2 ring-[#080808] flex items-center justify-center text-[10px] font-bold text-white/80`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">
                <span className="text-white/70 font-semibold">1,200+</span> muslims on the waitlist
              </p>
            </motion.div>
          </div>

          {/* Right: iPhone mockup - on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 flex items-center justify-center lg:justify-end"
          >
            <IPhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
