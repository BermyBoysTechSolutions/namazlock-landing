import { motion } from 'framer-motion'

const STATS = [
  { value: '5×', label: 'Daily Prayer Times' },
  { value: '100%', label: 'Automatic Blocking' },
  { value: '0', label: 'Willpower Required' },
]

const TESTIMONIALS = [
  {
    quote: "I finally stopped missing Asr because I was scrolling. NamazLock changed my relationship with my phone.",
    name: "Ahmed K.",
    role: "Early beta tester",
    initials: "AK",
    bg: "from-emerald-700 to-emerald-900",
  },
  {
    quote: "The auto-blocking is seamless. When Fajr hits, my phone just knows. It's the accountability I needed.",
    name: "Mariam R.",
    role: "Beta waitlist member",
    initials: "MR",
    bg: "from-gold-600 to-gold-800",
  },
  {
    quote: "Finally an app that takes Salah seriously. The analytics keep me consistent even on tough days.",
    name: "Faisal H.",
    role: "Engineer & daily user",
    initials: "FH",
    bg: "from-emerald-600 to-teal-900",
  },
]

export default function About({ onJoinWaitlist }) {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden" 
      style={{ background: 'linear-gradient(180deg, #060606 0%, #080808 100%)' }}>

      {/* Background circuit pattern */}
      <div className="absolute inset-0 circuit-bg opacity-50" />

      {/* Gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,148,26,0.4), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-24">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold gold-gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main about content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gold-border mb-6">
              <span className="text-xs font-medium text-gold-400 tracking-wider uppercase">Our Mission</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Technology that serves
              <br />
              <span className="gold-gradient-text">your faith, not against it.</span>
            </h2>

            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                Every Muslim knows the feeling — the Adhan calls, and instead of putting down your phone, you tell yourself "just one more minute." Thirty minutes later, Salah time has passed.
              </p>
              <p>
                NamazLock removes that decision entirely. Your phone knows when prayer time starts. It locks distracting apps automatically, holds you accountable, and unlocks when you're done.
              </p>
              <p className="text-white/70 font-medium">
                Simple. Automatic. Spiritually grounded.
              </p>
            </div>

            <motion.button
              onClick={onJoinWaitlist}
              className="btn-gold mt-8 px-7 py-3.5 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="about-waitlist-btn"
            >
              Join the Waitlist
            </motion.button>
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            {[
              { icon: '🔒', title: 'Automatic at Adhan', desc: 'No manual switching. Apps lock the moment the call to prayer sounds.' },
              { icon: '📍', title: 'Location-accurate times', desc: 'GPS-calibrated solar calculations, updated daily for your city.' },
              { icon: '📈', title: 'Progress tracking', desc: 'See your consistency across weeks. Build the habit, watch the streak grow.' },
              { icon: '🤲', title: 'Built by Muslims', desc: 'Every design decision honors the sanctity of Salah.' },
              { icon: '🛡️', title: 'Privacy-first', desc: 'Zero data sold. Ever. Your prayer habits are sacred.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.2 }}
                className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/3 group"
                style={{ border: '1px solid transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(212,148,26,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white/85 mb-0.5 group-hover:text-gold-400 transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Community voices
            </h3>
            <p className="text-white/40 text-sm">From early testers and the waitlist community</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-card gold-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-gold-400 text-xs">★</span>
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center text-xs font-bold text-white/80 flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80">{t.name}</div>
                    <div className="text-xs text-white/35">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 p-10 sm:p-14 rounded-3xl relative overflow-hidden text-center"
          style={{
            background: 'rgba(12, 10, 4, 0.9)',
            border: '1px solid rgba(212,148,26,0.3)',
          }}
        >
          {/* Gold glow center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full blur-3xl opacity-15"
              style={{ background: 'radial-gradient(circle, rgba(212,148,26,0.6) 0%, transparent 70%)' }} />
          </div>

          <div className="relative">
            <img src="/logo.jpg" alt="NamazLock" className="w-14 h-14 rounded-full ring-2 ring-gold-600/50 mx-auto mb-5 shadow-xl" />
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Reclaim your prayer time.
            </h3>
            <p className="text-white/45 mb-8 max-w-md mx-auto text-base leading-relaxed">
              Join over 1,200 Muslims who are ready to put Salah first.
            </p>
            <motion.button
              onClick={onJoinWaitlist}
              className="btn-gold px-10 py-4 rounded-full font-bold text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="bottom-waitlist-btn"
            >
              Join the Waitlist — It's Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
