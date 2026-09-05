import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Logo } from './Logo'
import { DemoBadge } from './DemoBadge'
import { navLinks } from '../data/content'
import { useActiveSection, useScrolled } from '../hooks/useUi'

type NavbarProps = {
  menuOpen: boolean
  onToggleMenu: () => void
}

const SECTION_IDS = [
  'about',
  'public-service',
  'for-tabon',
  'updates',
  'media',
  'connect',
] as const

export function Navbar({ menuOpen, onToggleMenu }: NavbarProps) {
  const scrolled = useScrolled(16)
  const reduce = useReducedMotion()
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled || menuOpen
            ? 'border-b border-charcoal/[0.07] bg-white/90 shadow-[var(--shadow-nav)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="section-pad">
          <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
            <a
              href="#top"
              className="relative z-50 flex shrink-0 items-center gap-3"
              aria-label="Edgar Corvera home"
            >
              <Logo size="sm" variant="frame" />
            </a>

            <nav className="hidden items-center gap-8 xl:gap-10 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="nav-link micro-label text-charcoal/65 transition-colors duration-300 hover:text-charcoal"
                  data-active={active === link.id ? 'true' : 'false'}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <DemoBadge className="hidden lg:inline-flex" />
              <a
                href="#connect"
                className={`hidden items-center px-4 py-2.5 text-[0.62rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 sm:inline-flex ${
                  active === 'connect'
                    ? 'bg-red text-white'
                    : 'bg-red text-white hover:bg-[#a81a24]'
                }`}
              >
                Connect
              </a>
              <button
                type="button"
                className="relative z-50 flex h-10 w-10 items-center justify-center border border-charcoal/12 transition-colors hover:border-charcoal/30 lg:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={onToggleMenu}
              >
                <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
                <span className="relative block h-3 w-4.5">
                  <span
                    className={`absolute left-0 block h-[1.5px] w-full bg-charcoal transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      menuOpen ? 'top-[5px] rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[5px] block h-[1.5px] w-full bg-charcoal transition-all duration-300 ${
                      menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[1.5px] w-full bg-charcoal transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      menuOpen ? 'top-[5px] -rotate-45' : 'top-[10px]'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
              onClick={onToggleMenu}
              aria-hidden="true"
            />
            <motion.nav
              className="absolute inset-0 flex flex-col bg-charcoal px-7 pb-10 pt-24 text-white sm:px-10"
              initial={reduce ? false : { y: '8%', opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '6%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile"
            >
              <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">
                <Logo size="md" variant="dark" />
                <DemoBadge />
              </div>

              <ul className="flex flex-1 flex-col justify-center gap-0">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={onToggleMenu}
                      className="group flex items-baseline justify-between border-b border-white/[0.08] py-5"
                      aria-current={active === link.id ? 'true' : undefined}
                    >
                      <span
                        className={`font-display text-[2rem] font-semibold tracking-tight transition-colors sm:text-4xl ${
                          active === link.id ? 'text-gold' : 'group-hover:text-gold'
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="micro-label text-white/30">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <a
                  href="#connect"
                  onClick={onToggleMenu}
                  className="mt-6 inline-flex w-full items-center justify-center bg-red px-6 py-4 text-[0.68rem] font-semibold tracking-[0.18em] text-white uppercase"
                >
                  Connect
                </a>
                <p className="mt-6 text-sm leading-relaxed text-white/35">
                  Barangay Tabon · Bislig City
                  <br />
                  2026 Barangay & SK Elections
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
