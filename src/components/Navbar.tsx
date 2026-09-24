import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sun } from './Sun'
import { LanguageToggle } from './LanguageToggle'
import { getNavLinks } from '../i18n/dict'
import { useLang } from '../i18n/LanguageContext'
import { useActiveSection, useScrolled } from '../hooks/useUi'

type NavbarProps = {
  menuOpen: boolean
  onToggleMenu: () => void
}

const SECTION_IDS = ['about', 'public-service', 'for-tabon', 'updates', 'media', 'connect'] as const
const LEFT_IDS = ['about', 'public-service', 'for-tabon'] as const
const RIGHT_IDS = ['updates', 'media', 'connect'] as const

export function Navbar({ menuOpen, onToggleMenu }: NavbarProps) {
  const scrolled = useScrolled(10)
  const reduced = useReducedMotion()
  const active = useActiveSection(SECTION_IDS)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { t } = useLang()
  const navLinks = getNavLinks(t)
  const leftLinks = LEFT_IDS.map((id) => navLinks.find((l) => l.id === id)).filter(
    (l): l is NonNullable<typeof l> => Boolean(l),
  )
  const rightLinks = RIGHT_IDS.map((id) => navLinks.find((l) => l.id === id)).filter(
    (l): l is NonNullable<typeof l> => Boolean(l),
  )

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onToggleMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, onToggleMenu])

  useEffect(() => {
    if (!menuOpen) return
    toggleRef.current?.focus()
  }, [menuOpen])

  const linkClass = (id: string) =>
    `group inline-flex items-center gap-2 micro-label text-white transition-colors duration-300 hover:text-white ${
      active === id ? 'text-white' : 'text-white/85'
    }`

  const star = (id: string) => (
    <span
      aria-hidden="true"
      className={`text-[0.8em] text-gold transition-opacity duration-300 ${
        active === id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
      }`}
    >
      ★
    </span>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      {/* Flag bar — red base with blue diagonal split */}
      <div
        className={`relative overflow-hidden bg-red shadow-[0_5px_11px_rgba(0,0,0,0.18),0_4px_15px_rgba(0,0,0,0.15)] transition-[height] duration-300 ${
          scrolled && !menuOpen ? 'h-[60px] sm:h-16' : 'h-16 sm:h-20'
        }`}
      >
        <span aria-hidden="true" className="clip-blue absolute inset-0 bg-blue" />
        <span aria-hidden="true" className="clip-red absolute inset-0 bg-red" />

        {/* Center crest — fixed size, absolutely centered, cannot be displaced. */}
        <a
          href="#top"
          aria-label={t.a11y.home}
          className="absolute left-1/2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-14 sm:w-14"
        >
          <Sun className="h-full w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
        </a>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 sm:gap-0">
          {/* Left — mobile hamburger + desktop left links (flex, shrink-0) */}
          <div className="flex shrink-0 items-center">
            <button
              ref={toggleRef}
              type="button"
              onClick={onToggleMenu}
              aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center text-3xl leading-none text-white lg:hidden"
            >
              <span className="sr-only">{menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}</span>
              {menuOpen ? <span aria-hidden="true">×</span> : <span aria-hidden="true">☰</span>}
            </button>

            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
              {leftLinks.map((link) => (
                <a key={link.id} href={link.href} className={linkClass(link.id)}>
                  {star(link.id)}
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Spacer keeps the absolutely-centered crest truly centered. */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Right — desktop links + language toggle + connect pill (shrink-0) */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
            <nav aria-label="Primary right" className="hidden items-center gap-7 lg:flex">
              {rightLinks.map((link) => (
                <a key={link.id} href={link.href} className={linkClass(link.id)}>
                  {star(link.id)}
                  {link.label}
                </a>
              ))}
            </nav>
            <LanguageToggle variant="header" />
            <a
              href="#connect"
              className="micro-label btn-shadow inline-flex items-center bg-navy px-4 py-2.5 text-gold transition-opacity duration-300 hover:opacity-80 sm:px-5"
            >
              {t.brand.connectCta}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile off-canvas menu — navy panel sliding from the left. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bottom-0 top-16 z-[60] overflow-y-auto bg-navy text-white sm:top-20 lg:hidden"
            initial={reduced ? false : { x: '-100%' }}
            animate={{ x: 0 }}
            exit={reduced ? undefined : { x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex min-h-full flex-col px-6 pb-12 pt-6 sm:px-10">
              <div className="mb-4 lg:hidden">
                <LanguageToggle variant="drawer" />
              </div>
              <nav aria-label="Mobile" className="flex-1">
                <ul>
                  {navLinks.map((link, i) => (
                    <li key={link.id} className="border-b border-white/15">
                      <a
                        href={link.href}
                        onClick={onToggleMenu}
                        aria-current={active === link.id ? 'true' : undefined}
                        className="flex items-center gap-4 py-5 font-display text-3xl uppercase tracking-wide transition-colors duration-300 hover:text-gold"
                      >
                        <span aria-hidden="true" className="text-gold">
                          »
                        </span>
                        {link.label}
                        <span className="ml-auto micro-label text-white/35">0{i + 1}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 border-t border-white/15 pt-8">
                <p className="micro-label text-gold">{t.brand.election}</p>
                <p className="mt-3 text-sm text-white/50">{t.brand.location}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}