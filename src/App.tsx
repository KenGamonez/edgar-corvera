import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { About } from './components/About'
import { PublicService } from './components/PublicService'
import { LegislativeRecord } from './components/LegislativeRecord'
import { CommitteeExperience } from './components/CommitteeExperience'
import { ElectionStats } from './components/ElectionStats'
import { VisionForTabon } from './components/VisionForTabon'
import { Updates } from './components/Updates'
import { MediaGallery } from './components/MediaGallery'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'
import { WaveDivider } from './components/Motifs'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />

      <main>
        <Hero />
        <Introduction />
        <WaveDivider className="bg-white py-2" />
        <About />
        <PublicService />
        <LegislativeRecord />
        <CommitteeExperience />
        <ElectionStats />
        <VisionForTabon />
        <Updates />
        <MediaGallery />
        <Connect />
      </main>

      <Footer />
    </div>
  )
}
