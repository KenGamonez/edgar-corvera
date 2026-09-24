import { useState } from 'react'
import { useLang } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PublicService } from './components/PublicService'
import { LegislativeRecord } from './components/LegislativeRecord'
import { CommitteeExperience } from './components/CommitteeExperience'
import { Stats } from './components/Stats'
import { Vision } from './components/Vision'
import { Updates } from './components/Updates'
import { MediaGallery } from './components/MediaGallery'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLang()

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        {t.a11y.skipToContent}
      </a>

      <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />

      <main>
        <Hero />
        <About />
        <PublicService />
        <LegislativeRecord />
        <CommitteeExperience />
        <Stats />
        <Vision />
        <Updates />
        <MediaGallery />
        <Connect />
      </main>

      <Footer />
    </div>
  )
}