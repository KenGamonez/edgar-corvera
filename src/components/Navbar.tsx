import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Logo } from './Logo'
import { navLinks, brand } from '../data/content'
import { useActiveSection, useScrolled } from '../hooks/useUi'

type NavbarProps = {
  menuOpen: boolean
  onToggleMenu: () => void
}

const SECTION_IDS = ['about', 'public-service', 'for-tabon', 'updates', 'media', 'connect'] as const

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

  const solid = scrolled || menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          solid
            ? 'border-charcoal/10 bg-white shadow-[var(--shadow-nav)]'
            : 'border-transparent bg-white lg:border-transparent lg:bg-transparent'
        }`}
      >
        <div className="section-pad">
          <div className="container-site relative flex h-16 items-center justify-between gap-4 sm:h-20">
            <a href="#top" aria-label="Edgar Corvera home" className="flex shrink-0 items-center">
              <Logo size="sm" variant="frame" />
            </a>

            <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link micro-label transition-colors duration-300 ${
                    active === link.id ? 'text-red' : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                  data-active={active === link.id ? 'true' : 'false'}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#connect"
                className="micro-label hidden items-center bg-red px-5 py-3 text-white transition-colors hover:bg-[#a81a24] sm:inline-flex"
              >
                Connect
              </a>
              <button
                type="button"
                className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center sm:static sm:translate-y-0 lg:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={onToggleMenu}
              >
                <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
                <span className="relative block h-4 w-7">
                  <span
                    className={`absolute left-0 block h-[2px] w-full bg-charcoal transition-all duration-300 ${
                      menuOpen ? 'top-[7px] rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] block h-[2px] w-full bg-charcoal transition-all duration-300 ${
                      menuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[2px] w-full bg-charcoal transition-all duration-300 ${
                      menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
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
            className="fixed inset-x-0 bottom-0 top-16 z-[50] overflow-y-auto bg-white sm:top-20 lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav
              className="flex min-h-full flex-col px-6 pb-10 pt-8 sm:px-10"
              aria-label="Mobile"
            >
              <ul className="border-t border-charcoal/10">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={reduce ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={onToggleMenu}
                      aria-current={active === link.id ? 'true' : undefined}
                      className={`flex items-center justify-between gap-6 border-b border-charcoal/10 py-5 transition-colors duration-300 ${
                        active === link.id ? 'text-red' : 'text-charcoal hover:text-red'
                      }`}
                    >
                      <span className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                        {link.label}
                      </span>
                      <span className="micro-label text-charcoal/35">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.24 }}
                className="mt-10"
              >
                <a
                  href="#connect"
                  onClick={onToggleMenu}
                  className="micro-label inline-flex w-full items-center justify-center bg-red px-6 py-4 text-white transition-colors hover:bg-[#a81a24]"
                >
                  Connect
                </a>
                <p className="mt-6 text-sm text-charcoal/45">
                  {brand.title} — {brand.locationShort}, {brand.city}
                  <br />
                  {brand.election}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}