import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// ─── Mini iPhone Shell for feature tiles ─────────────────────────────────────
function FeaturePhone({ videoSrc, isHovered, posterIcon }) {
  const videoRef = useRef(null)

  // Fire/pause based on hover
  if (videoRef.current) {
    if (isHovered) {
      videoRef.current.play().catch(() => {})
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="relative w-[140px] aspect-[9/19] mx-auto flex-shrink-0">
      {/* Phone shell */}
      <div 
        className="w-full h-full rounded-[1.4rem] shadow-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #c8a020 0%, #a07010 30%, #806010 60%, #c8a020 100%)',
          boxShadow: isHovered 
            ? '0 0 30px rgba(212,148,26,0.35), 0 20px 60px rgba(0,0,0,0.8)'
            : '0 10px 40px rgba(0,0,0,0.8)',
        }}
      >
        <div className="m-[2px] rounded-[1.3rem] h-[calc(100%-4px)] overflow-hidden bg-black relative">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-12 h-3 bg-black rounded-full" />
          
          {/* Lock screen: always-on base */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{ 
              opacity: isHovered ? 0 : 1,
              background: 'linear-gradient(160deg, #0a2010 0%, #041a0a 50%, #020d05 100%)',
            }}
          >
            <div className="h-full flex flex-col items-center justify-center gap-2 px-3">
              <span className="text-2xl">{posterIcon}</span>
              <div className="w-8 h-0.5 rounded-full" style={{ background: 'rgba(212,148,26,0.4)' }} />
              <span className="text-[9px] text-gold-400/60 text-center font-medium tracking-wider uppercase">Tap to view</span>
            </div>
          </div>

          {/* Video that plays on hover */}
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Reflection */}
      <div 
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full blur-xl opacity-30 transition-opacity duration-500"
        style={{ 
          background: 'rgba(212,148,26,0.4)',
          opacity: isHovered ? 0.5 : 0.2,
        }}
      />
    </div>
  )
}

// ─── Feature tile data ────────────────────────────────────────────────────────
const FEATURES = [
  {
    id: 'blocking',
    title: 'Smart Blocking',
    desc: 'Apps lock down automatically at Adhan. Instagram, TikTok, games — gone until you\'ve prayed. Zero willpower required.',
    videoSrc: '/video-blocking.mp4',
    icon: '🔒',
    posterIcon: '🔒',
    accent: 'from-gold-900/40 to-gold-950/60',
    tag: 'Powered by Screen Time API',
  },
  {
    id: 'sync',
    title: 'Auto-Prayer Sync',
    desc: 'Prayer times calculated for your exact GPS location, every day. Synced to your calendar. Never miss a Salah window.',
    videoSrc: '/video-sync.mp4',
    icon: '🕌',
    posterIcon: '📅',
    accent: 'from-emerald-900/30 to-emerald-950/60',
    tag: 'Location-aware • Daily sync',
  },
  {
    id: 'analytics',
    title: 'Focus Analytics',
    desc: 'Track your spiritual consistency. Heatmaps, streaks, and focus scores that grow with your discipline.',
    videoSrc: '/video-analytics.mp4',
    icon: '📊',
    posterIcon: '📊',
    accent: 'from-amber-900/30 to-amber-950/60',
    tag: 'Weekly insights • Prayer streaks',
  },
]

// ─── Individual feature tile ──────────────────────────────────────────────────
function FeatureTile({ feature, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="feature-tile relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{
        background: 'rgba(12, 10, 4, 0.9)',
        border: hovered 
          ? '1px solid rgba(212,148,26,0.5)' 
          : '1px solid rgba(212,148,26,0.12)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(212,148,26,0.15), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,148,26,0.08)'
          : '0 4px 20px rgba(0,0,0,0.5)',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Background gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Gold shimmer on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 gold-shimmer opacity-10 rounded-2xl" />
      </motion.div>

      <div className="relative p-5 flex gap-4 items-start h-full">
        {/* Text side */}
        <div className="flex-1 flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{feature.icon}</span>
              <span className="text-xs font-medium text-gold-500/60 tracking-wider uppercase px-2 py-0.5 rounded-full" 
                style={{ background: 'rgba(212,148,26,0.1)', border: '1px solid rgba(212,148,26,0.15)' }}>
                {feature.tag}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">
              {feature.title}
            </h3>
            <p className="text-sm text-white/45 leading-relaxed">
              {feature.desc}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold-400/60 group-hover:text-gold-400 transition-colors duration-300">
            <span>Watch demo</span>
            <motion.span
              animate={hovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >→</motion.span>
          </div>
        </div>

        {/* Phone */}
        <FeaturePhone
          videoSrc={feature.videoSrc}
          isHovered={hovered}
          posterIcon={feature.posterIcon}
        />
      </div>
    </motion.div>
  )
}

// ─── Large hero tile (prayer rug texture) ────────────────────────────────────
function HeroTile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(12, 10, 4, 0.95)',
        border: '1px solid rgba(212,148,26,0.2)',
        minHeight: '520px',
      }}
    >
      {/* Prayer rug image fill */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.png)', filter: 'brightness(0.3) saturate(0.8)' }}
      />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />

      {/* Islamic geometric overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c9a227' stroke-width='0.5'%3E%3Cpolygon points='40,5 51,30 78,30 57,48 65,75 40,58 15,75 23,48 2,30 29,30'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      {/* Gold circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 H120 V60 H200 V100 H300" stroke="#c9a227" strokeWidth="1" fill="none" />
        <path d="M380,0 V80 H450 V120 H500" stroke="#c9a227" strokeWidth="1" fill="none" />
        <circle cx="120" cy="100" r="3" fill="#c9a227" />
        <circle cx="200" cy="60" r="3" fill="#c9a227" />
        <circle cx="450" cy="80" r="3" fill="#c9a227" />
      </svg>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.jpg" alt="NamazLock" className="w-10 h-10 rounded-full ring-2 ring-gold-600/40" />
          <div className="flex flex-col">
            <span className="text-xs text-gold-400/60 tracking-widest uppercase font-medium">Premium Feature Suite</span>
          </div>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
          <span className="gold-gradient-text">NamazLock</span>
          <br />
          <span className="text-white/85">Features</span>
        </h2>
        <p className="text-white/45 text-sm leading-relaxed max-w-xs">
          A sophisticated digital lock system built around the five pillars of daily prayer. Hover the tiles to see each feature in action.
        </p>

        {/* Feature count badges */}
        <div className="flex gap-2 mt-5">
          {['5 Prayers', 'Real-time Sync', 'iOS Native'].map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 text-[10px] font-semibold rounded-full"
              style={{
                background: 'rgba(212,148,26,0.1)',
                border: '1px solid rgba(212,148,26,0.25)',
                color: 'rgba(212,148,26,0.8)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Features Section ─────────────────────────────────────────────────────────
export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 circuit-bg">
      {/* Section gradient fade-in from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gold-border mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">Built for Focus</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Everything you need to
            <br />
            <span className="gold-gradient-text">pray without distraction.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Three powerful features, zero compromise. Hover any tile to watch the demo.
          </motion.p>
        </div>

        {/* Bento grid — asymmetric: 1 large left + 3 small right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Large left tile — spans 2 cols */}
          <div className="lg:col-span-2">
            <HeroTile />
          </div>

          {/* Right column — 3 stacked feature tiles spanning 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {FEATURES.map((feature, i) => (
              <FeatureTile key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060606] to-transparent pointer-events-none" />
    </section>
  )
}
