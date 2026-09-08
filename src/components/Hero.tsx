import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Button } from './Button'
import { Logo } from './Logo'
import { Sun } from './Sun'
import { brand, about } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const
const SLIDE_MS = 6000

type Slide = {
  kicker: string
  lines: string[]
  accent: 'blue' | 'red'
  body: string
  buttons: { href: string; label: string; variant: 'red' | 'gold' }[]
}

const slides: Slide[] = [
  {
    kicker: brand.title,
    lines: ['Edgar', 'Corvera'],
    accent: 'red',
    body: about.intro,
    buttons: [
      { href: '#about', label: 'Meet Edgar', variant: 'red' },
      { href: '#for-tabon', label: 'Vision for Tabon', variant: 'gold' },
    ],
  },
  {
    kicker: `${brand.locationShort} · ${brand.city}`,
    lines: ['Engineering.', 'Public Service.', 'Experience.'],
    accent: 'blue',
    body: 'Bringing technical discipline and community focus home to Barangay Tabon.',
    buttons: [
      { href: '#public-service', label: 'Public Service', variant: 'red' },
      { href: '#updates', label: 'Updates', variant: 'gold' },
    ],
  },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(timer)
  }, [index, reduce])

  const slide = slides[index]

  return (
    <section id="top" className="relative overflow-hidden" aria-label="Campaign banner">
      <div className="relative h-[min(34rem,88vh)] min-h-[32rem] sm:h-[min(38rem,88vh)] lg:h-[min(40rem,90vh)]">
        {/* Flag backdrop + white overlay (reference: photo + rgba white 0.7). */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="clip-red absolute inset-0 bg-red" />
          <div className="clip-blue absolute inset-0 bg-blue" />
        </div>
        <div className="absolute inset-0 bg-white/70" aria-hidden="true" />

        {/* Decorative oversized sun, corner EC monogram. */}
        <Sun className="absolute -right-10 top-6 hidden h-64 w-64 opacity-20 md:block lg:-right-16 lg:h-80 lg:w-80" />
        <span
          aria-hidden="true"
          className="absolute -bottom-16 left-6 hidden select-none font-display text-[18rem] uppercase leading-none text-navy/[0.06] lg:block"
        >
          EC
        </span>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.7, ease }}
            className="absolute inset-0"
          >
            <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:gap-14">
              <div className="flex-1 lg:pb-2">
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease }}
                  className="micro-label flex items-center gap-2 text-navy"
                >
                  <span aria-hidden="true" className="text-gold">
                    ★
                  </span>
                  {slide.kicker}
                </motion.p>

                <h1 className="mt-4 font-display text-[clamp(3.4rem,11vw,7.5rem)] uppercase leading-[0.9] tracking-[0.01em] text-navy">
                  {slide.lines.map((line, i) => (
                    <motion.span
                      key={line}
                      className="block"
                      initial={reduce ? false : { opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.25 + i * 0.08, ease }}
                    >
                      <span
                        className={
                          slide.accent === 'red' && i === slide.lines.length - 1
                            ? 'text-red'
                            : undefined
                        }
                      >
                        {line}
                      </span>
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease }}
                  className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg text-pretty"
                >
                  {slide.body}
                </motion.p>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.62, ease }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {slide.buttons.map((btn) => (
                    <Button key={btn.href} href={btn.href} variant={btn.variant}>
                      {btn.label}
                    </Button>
                  ))}
                </motion.div>
              </div>

              {/* Banner label — the campaign mark on a white crest card. */}
              <motion.div
                initial={reduce ? false : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="shrink-0 lg:max-w-md"
              >
                <div className="btn-shadow relative bg-white p-5 sm:p-7">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1.5 w-full bg-gold"
                  />
                  <Logo size="hero" alt="Edgar Corvera campaign logo" className="w-full" />
                  <p className="micro-label mt-5 flex items-center justify-center gap-2 text-center text-charcoal/60">
                    <span aria-hidden="true" className="text-red">
                      ★
                    </span>
                    {brand.election}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 sm:bottom-6 sm:left-6">
          <button
            type="button"
            onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
            aria-label="Previous"
            className="btn-shadow flex h-11 w-11 items-center justify-center bg-white font-display text-xl text-red transition-colors duration-300 hover:bg-red hover:text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIndex((index + 1) % slides.length)}
            aria-label="Next"
            className="btn-shadow flex h-11 w-11 items-center justify-center bg-white font-display text-xl text-red transition-colors duration-300 hover:bg-red hover:text-white"
          >
            ›
          </button>
          <div className="ml-2 flex items-center gap-2" role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-navy/40 transition-colors duration-300 ${
                  i === index ? 'bg-red' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}