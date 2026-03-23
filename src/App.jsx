import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <div className="noise-overlay min-h-screen bg-[#080808]">
      <Navbar onJoinWaitlist={() => setWaitlistOpen(true)} />
      <main>
        <Hero onJoinWaitlist={() => setWaitlistOpen(true)} />
        <Features />
        <About onJoinWaitlist={() => setWaitlistOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </div>
  )
}
