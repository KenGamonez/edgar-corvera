import { useEffect, useRef } from 'react'
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
  const scrolled = useScrolled(12)
  const reduced = useReducedMotion()
  const active = useActiveSection(SECTION_IDS)
  const toggleRef = useRef<HTMLButtonElement>(null)

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

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? 'border-line bg-white shadow-[0_1px_0_rgba(22,24,28,0.04),0_12px_32px_rgba(22,24,28,0.05)]'
          : 'border-transparent bg-white lg:border-transparent lg:bg-transparent'
      }`}
    >
      <div className="section-pad">
        <div className="container-site flex h-16 items-center gap-4 sm:h-20 lg:gap-8">
          {/* Logo slot — flexes (min-w-0) so an image-loading change in logo width can never push the controls. */}
          <a
            href="#top"
            aria-label="Edgar Corvera — home"
            className="flex min-w-0 flex-1 items-center lg:flex-none"
          >
            <Logo size="sm" className="h-12 w-auto lg:h-14" />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:ml-auto lg:flex"
          >
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

          {/* Actions slot — shrink-0, fixed size, cannot be displaced. */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#connect"
              className="micro-label hidden items-center bg-red px-5 py-3 text-white transition-colors hover:bg-red-deep md:inline-flex"
            >
              Connect
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={onToggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-12 w-12 shrink-0 items-center justify-center lg:hidden"
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="relative block h-4 w-7" aria-hidden="true">
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

      {/* Mobile menu panel — positioned below the fixed header, below it in z-order. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 z-[50] overflow-y-auto bg-white sm:top-20 lg:hidden"
            initial={reduced ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex min-h-full flex-col px-6 pb-12 pt-2 sm:px-10">
              <nav aria-label="Mobile" className="border-t border-line">
                <ul>
                  {navLinks.map((link, i) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={onToggleMenu}
                        aria-current={active === link.id ? 'true' : undefined}
                        className={`flex items-center justify-between gap-6 border-b border-line py-5 transition-colors duration-300 ${
                          active === link.id ? 'text-red' : 'text-charcoal hover:text-red'
                        }`}
                      >
                        <span className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                          {link.label}
                        </span>
                        <span className="micro-label text-charcoal/35">0{i + 1}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10">
                <a
                  href="#connect"
                  onClick={onToggleMenu}
                  className="micro-label flex w-full items-center justify-center bg-red px-6 py-4 text-white transition-colors hover:bg-red-deep"
                >
                  Connect
                </a>
                <p className="mt-6 text-sm text-charcoal/45">
                  {brand.title} — {brand.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}