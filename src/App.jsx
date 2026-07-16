import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Compass,
  ExternalLink,
  HeartHandshake,
  History,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MoonStar,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const SITE_URL = 'https://www.namazlock.com'
const SUPPORT_EMAIL = 'Bermyboysecom@gmail.com'

const screens = [
  { src: '/screens/prayer.png', label: 'Prayer times', className: 'screen-prayer' },
  { src: '/screens/qibla.png', label: 'Qibla compass' },
  { src: '/screens/tasbih.png', label: 'Guided Tasbih' },
  { src: '/screens/quran-library.png', label: 'Quran library' },
  { src: '/screens/quran-reading.png', label: 'Quran reading' },
  { src: '/screens/dua.png', label: 'Quranic duas' },
]

const features = [
  {
    icon: LockKeyhole,
    title: 'Prayer-time shielding',
    body: 'Choose the apps and categories that distract you. NamazLock uses Apple Screen Time controls to shield those selections during each prayer window.',
  },
  {
    icon: MapPin,
    title: 'Prayer times for your location',
    body: 'Calculate Fajr, Dhuhr, Asr, Maghrib, and Isha locally with established methods, madhab selection, and configurable reminders.',
  },
  {
    icon: Compass,
    title: 'A Qibla compass you can read',
    body: 'See the Kaaba bearing, live device heading, and a clear facing-Qibla state without sending your location to an account or analytics service.',
  },
  {
    icon: MoonStar,
    title: 'The full Quran, offline',
    body: 'Read all 114 surahs with Arabic, English translation, and careful transliteration, or browse selected passages by theme.',
  },
  {
    icon: Sparkles,
    title: 'Guided Tasbih and Quranic duas',
    body: 'Complete the 33–33–34 dhikr sequence with haptic milestones and keep a practical collection of duas for everyday situations.',
  },
  {
    icon: History,
    title: 'Private prayer history',
    body: 'Mark prayers, build a streak, and review your consistency. Your history and preferences remain stored on your device.',
  },
]

const privacyPoints = [
  'No account required',
  'No advertising or tracking',
  'No third-party analytics SDKs',
  'Prayer history stays on your device',
  'Screen Time selections remain private and opaque',
]

function setMeta(name, content, attribute = 'name') {
  let node = document.head.querySelector(`meta[${attribute}="${name}"]`)
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attribute, name)
    document.head.appendChild(node)
  }
  node.setAttribute('content', content)
}

function usePageMetadata({ title, description, path }) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', `${SITE_URL}${path}`, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${SITE_URL}${path}`
  }, [title, description, path])
}

function Brand({ compact = false }) {
  return (
    <a className="brand" href="/" aria-label="NamazLock home">
      <img src="/app-icon.png" alt="" width={compact ? 34 : 42} height={compact ? 34 : 42} />
      <span>NamazLock</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand compact />
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#privacy" onClick={() => setOpen(false)}>Privacy</a>
          <a href="/support" onClick={() => setOpen(false)}>Support</a>
          <span className="availability"><span /> iPhone · Coming soon</span>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <Brand compact />
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
        </div>
        <p>© 2026 NamazLock. Built for salah.</p>
      </div>
    </footer>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow"><MoonStar size={16} /> A calmer rhythm around every salah</p>
          <h1 id="hero-title">NamazLock</h1>
          <p className="hero-lede">Protect prayer time from the apps that compete for your attention.</p>
          <p className="hero-detail">
            Accurate local prayer times, user-selected app shielding, Qibla, the full Quran, guided Tasbih, and Quranic duas in one private, ad-free iPhone app.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#experience">Explore the app <ArrowRight size={18} /></a>
            <a className="button button-quiet" href="/privacy">How privacy works</a>
          </div>
          <div className="hero-trust" aria-label="NamazLock principles">
            <span><ShieldCheck size={16} /> On-device by design</span>
            <span><Check size={16} /> No ads</span>
            <span><Check size={16} /> No account</span>
          </div>
        </div>

        <div className="hero-device" aria-label="NamazLock prayer screen on iPhone">
          <div className="phone-frame">
            <img src="/screens/prayer.png" alt="NamazLock prayer times and Screen Time controls" />
          </div>
          <div className="device-note">
            <LockKeyhole size={18} />
            <span><strong>You choose what is shielded.</strong> NamazLock never locks the device itself.</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#experience" aria-label="Continue to app experience"><ChevronDown size={22} /></a>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-heading">
        <p className="eyebrow green">One focused companion</p>
        <h2>From the adhan to the final tasbih.</h2>
        <p>Every screen serves a real part of daily worship, without feeds, ads, accounts, or noise.</p>
      </div>
      <div className="screen-rail" aria-label="NamazLock app screenshots">
        {screens.map((screen) => (
          <figure className={screen.className || ''} key={screen.src}>
            <img src={screen.src} alt={`${screen.label} screen in NamazLock`} loading="lazy" />
            <figcaption>{screen.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function FeatureGrid() {
  return (
    <section className="features-band section" id="features">
      <div className="section-heading align-left">
        <p className="eyebrow gold">Built around the five prayers</p>
        <h2>Focus when it matters. Guidance when you need it.</h2>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, body }) => (
          <article className="feature-item" key={title}>
            <div className="feature-icon"><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ShieldExplainer() {
  return (
    <section className="shield-section section">
      <div className="shield-copy">
        <p className="eyebrow gold"><LockKeyhole size={16} /> Prayer Lock</p>
        <h2>Strong enough to interrupt the scroll. Respectful enough to leave you in control.</h2>
        <p>
          NamazLock uses Apple’s Family Controls, Managed Settings, and Device Activity frameworks. After you grant Screen Time permission, you choose the apps, categories, or websites to shield during prayer windows.
        </p>
        <div className="shield-steps">
          <div><span>1</span><p><strong>Allow Screen Time access</strong> through Apple’s system permission.</p></div>
          <div><span>2</span><p><strong>Select distractions</strong> without NamazLock learning which apps you picked.</p></div>
          <div><span>3</span><p><strong>Pray with space</strong> while the extension applies and clears the shield on schedule.</p></div>
        </div>
      </div>
      <div className="shield-visual">
        <img src="/app-icon.png" alt="NamazLock green and gold app icon" />
        <div className="shield-status"><ShieldCheck size={21} /><span>Apple Screen Time controls</span></div>
        <div className="shield-status"><RotateCcw size={21} /><span>Automatic start and end scheduling</span></div>
        <div className="shield-status"><HeartHandshake size={21} /><span>Intentional override remains available</span></div>
      </div>
    </section>
  )
}

function PrivacyBand() {
  return (
    <section className="privacy-band section" id="privacy">
      <div>
        <p className="eyebrow green"><ShieldCheck size={16} /> Private by default</p>
        <h2>Your worship is not a data product.</h2>
        <p>NamazLock does not operate user accounts, advertising, tracking, or analytics. Location is used on your device for prayer times and Qibla. Your settings, prayer history, and Screen Time selection tokens stay there too.</p>
        <a className="text-link" href="/privacy">Read the full privacy policy <ArrowRight size={17} /></a>
      </div>
      <ul>
        {privacyPoints.map((point) => <li key={point}><Check size={17} /> {point}</li>)}
      </ul>
    </section>
  )
}

function FAQ() {
  const questions = [
    ['Does NamazLock lock my entire iPhone?', 'No. It uses Apple’s Screen Time APIs to shield only the apps, categories, and websites you select. Essential device functions remain available.'],
    ['Does the app need an internet connection?', 'Core prayer calculations, Quran reading, Qibla, duas, Tasbih, history, and scheduled shields are designed to work locally.'],
    ['Can I change prayer calculations?', 'Yes. You can select an established calculation method, choose Hanafi or Shafi Asr timing, and configure reminder lead time and lock duration.'],
    ['What happens to my location?', 'NamazLock uses location on your device to calculate prayer times and Qibla. The app has no account service or analytics pipeline receiving it.'],
  ]

  return (
    <section className="faq section">
      <div className="section-heading">
        <p className="eyebrow green">Clear answers</p>
        <h2>Before you begin.</h2>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<ChevronDown size={19} /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <img src="/app-icon.png" alt="" />
      <div>
        <p className="eyebrow gold">Coming soon to iPhone</p>
        <h2>Make room for salah.</h2>
        <p>NamazLock is being prepared for the App Store. Questions, accessibility needs, and feedback are welcome.</p>
      </div>
      <a className="button button-gold" href={`mailto:${SUPPORT_EMAIL}`}>Contact support <Mail size={18} /></a>
    </section>
  )
}

function LandingPage() {
  usePageMetadata({
    title: 'NamazLock — Prayer Times, App Shielding, Quran & Qibla',
    description: 'NamazLock is a private, ad-free iPhone prayer companion with local salah times, user-selected app shielding, Qibla, the full Quran, Tasbih, duas, and prayer history.',
    path: '/',
  })

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <FeatureGrid />
        <ShieldExplainer />
        <PrivacyBand />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

function PolicyLayout({ eyebrow, title, intro, children }) {
  return (
    <div className="policy-page">
      <Header />
      <main className="policy-main">
        <header className="policy-hero">
          <div className="policy-icon"><ShieldCheck size={28} /></div>
          <p className="eyebrow gold">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>
        <article className="policy-content">{children}</article>
      </main>
      <Footer />
    </div>
  )
}

function PrivacyPage() {
  usePageMetadata({
    title: 'Privacy Policy — NamazLock',
    description: 'How NamazLock handles location, notifications, Screen Time selections, prayer history, and other on-device information.',
    path: '/privacy',
  })

  return (
    <PolicyLayout
      eyebrow="Effective July 16, 2026"
      title="Privacy Policy"
      intro="NamazLock is designed to support worship without turning private spiritual habits into a data product."
    >
      <section>
        <h2>Summary</h2>
        <p>NamazLock does not require an account and does not include advertising, tracking, third-party analytics, or data-broker integrations. The app’s core information is processed and stored locally on your device.</p>
      </section>
      <section>
        <h2>Information used by the app</h2>
        <h3>Location</h3>
        <p>If you grant permission, NamazLock uses your device location to calculate local prayer times and the Qibla bearing. NamazLock does not transmit your location to us or associate it with an account.</p>
        <h3>Screen Time selections</h3>
        <p>If you enable Prayer Lock, Apple’s Family Controls framework provides opaque tokens for the apps, categories, or websites you select. NamazLock uses those tokens only to apply the shields you configure. The tokens do not reveal the identity of your selections to NamazLock’s developer and are not uploaded to us.</p>
        <h3>Prayer history and preferences</h3>
        <p>Prayer completion history, streaks, calculation method, madhab, reminder settings, theme, lock preferences, and Tasbih sessions are stored locally on your device.</p>
        <h3>Notifications and device sensors</h3>
        <p>Notification permission is used to schedule prayer reminders. Compass heading is used for Qibla orientation. These features are processed through Apple frameworks on your device.</p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>NamazLock does not collect personal information through the app. We do not receive analytics events, advertising identifiers, prayer history, Screen Time activity, selected-app identities, precise location, Quran reading activity, or Tasbih activity.</p>
      </section>
      <section>
        <h2>Data sharing and sale</h2>
        <p>We do not sell, rent, or share app data with advertisers, data brokers, or analytics companies. Because the app does not send the information described above to us, we cannot use it for cross-app tracking or behavioral profiling.</p>
      </section>
      <section>
        <h2>Retention and deletion</h2>
        <p>Locally stored app information remains on your device until you reset the relevant history or settings in NamazLock, or delete the app. You can revoke Location, Notifications, or Screen Time access at any time in iOS Settings.</p>
      </section>
      <section>
        <h2>Website information</h2>
        <p>This website is hosted by Vercel and may receive standard technical request information needed to deliver webpages, such as an IP address, browser type, and request time. NamazLock does not add advertising cookies, behavioral analytics, account tracking, or contact forms to this site.</p>
      </section>
      <section>
        <h2>Children’s privacy</h2>
        <p>NamazLock does not knowingly collect personal information from children or adults. Screen Time authorization and device permissions are controlled through Apple’s operating system.</p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>We may update this policy as NamazLock changes. The effective date at the top of this page will identify the latest version. Material changes will be reflected here before the corresponding app release where practical.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Questions or privacy requests can be sent to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
      </section>
    </PolicyLayout>
  )
}

function SupportPage() {
  usePageMetadata({
    title: 'Support — NamazLock',
    description: 'Get help with NamazLock prayer times, Screen Time access, app shielding, notifications, location, Qibla, Quran, and Tasbih.',
    path: '/support',
  })

  return (
    <PolicyLayout
      eyebrow="NamazLock support"
      title="How can we help?"
      intro="Start with the steps below or email us directly. Include your iOS version and what you expected to happen, but never send sensitive personal information."
    >
      <section className="support-contact">
        <div>
          <Mail size={24} />
          <div><h2>Email support</h2><p>For product help, accessibility feedback, or privacy questions.</p></div>
        </div>
        <a className="button button-gold" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}<ExternalLink size={16} /></a>
      </section>
      <section>
        <h2>Screen Time access or app selection</h2>
        <ol>
          <li>Open NamazLock Settings and tap <strong>Allow Screen Time Access</strong>.</li>
          <li>Approve Apple’s Family Controls permission sheet.</li>
          <li>Tap <strong>Choose Apps to Lock</strong>, make a selection, and confirm it in Apple’s picker.</li>
          <li>Make sure Prayer Lock is enabled and use <strong>Test Lock Now</strong> to verify your selection.</li>
        </ol>
        <p>If authorization was previously denied, open iOS Settings and review NamazLock’s Screen Time access.</p>
      </section>
      <section>
        <h2>A shield did not clear</h2>
        <p>Open NamazLock and use the available end or unlock action. Confirm the phone’s date, time, and time zone are set automatically. If the behavior repeats, restart the iPhone and email support with the prayer name and approximate start and end times.</p>
      </section>
      <section>
        <h2>Prayer times or location</h2>
        <p>Confirm Location access is allowed for NamazLock, then review the calculation method and madhab in Settings. Prayer times are calculated locally and may differ between recognized methods or local mosque conventions.</p>
      </section>
      <section>
        <h2>Prayer reminders</h2>
        <p>Confirm Notifications are enabled for NamazLock in iOS Settings. Also check Focus modes, Silent Mode, and Scheduled Summary, which can affect how a reminder is presented.</p>
      </section>
      <section>
        <h2>Qibla compass</h2>
        <p>Allow Location access, move away from magnets or metal objects, and gently move the phone in a figure-eight motion if the heading appears inaccurate. Hold the phone flat and wait for the bearing to settle.</p>
      </section>
      <section>
        <h2>Delete app data</h2>
        <p>Prayer history and settings are stored locally. Use available reset controls in the app, revoke permissions in iOS Settings, or delete NamazLock to remove its locally stored data from the device.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We aim to respond as soon as practical.</p>
      </section>
    </PolicyLayout>
  )
}

function NotFoundPage() {
  usePageMetadata({
    title: 'Page Not Found — NamazLock',
    description: 'The requested NamazLock page could not be found.',
    path: window.location.pathname,
  })
  return (
    <>
      <Header />
      <main className="not-found"><p className="eyebrow gold">404</p><h1>That page is not here.</h1><a className="button button-gold" href="/">Return home</a></main>
      <Footer />
    </>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/privacy') return <PrivacyPage />
  if (path === '/support') return <SupportPage />
  if (path === '/') return <LandingPage />
  return <NotFoundPage />
}
