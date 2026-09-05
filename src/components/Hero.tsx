import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Logo } from './Logo'
import { Button } from './Button'
import { ImagePlaceholder } from './ImagePlaceholder'
import { AccentCluster, WaveMotif, StarMotif } from './Motifs'
import { brand } from '../data/content'

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 56])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 24])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-white pt-16 sm:pt-[4.25rem]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 92% 8%, rgba(18,63,154,0.05), transparent 55%), radial-gradient(ellipse 35% 35% at 5% 90%, rgba(246,181,46,0.04), transparent 50%)',
        }}
      />

      <div className="section-pad relative">
        <div className="container-site relative grid items-end gap-8 pb-14 pt-8 lg:grid-cols-12 lg:gap-6 lg:pb-20 lg:pt-12 xl:gap-8">
          {/* Left editorial column */}
          <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7 lg:pb-4 xl:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-7 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <p className="micro-label text-blue">{brand.location}</p>
              <span className="hidden h-px w-10 bg-charcoal/15 sm:block" aria-hidden="true" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.25rem,11.5vw,7.75rem)] font-bold leading-[0.84] tracking-[-0.05em] text-charcoal"
            >
              <span className="block">EDGAR</span>
              <span className="relative block">
                CORVERA
                <StarMotif
                  className="absolute -right-2 top-2 hidden h-3 w-3 sm:block lg:-right-6 lg:top-4 lg:h-4 lg:w-4"
                  delay={0.6}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-end gap-5 sm:mt-8"
            >
              <div className="max-w-md">
                <p className="font-display text-lg font-medium tracking-tight text-blue sm:text-xl md:text-2xl">
                  {brand.title}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/60 sm:text-base md:text-lg">
                  {brand.tagline}
                </p>
              </div>
              <AccentCluster className="mb-0.5 shrink-0" />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-7 max-w-md sm:mt-8"
            >
              <WaveMotif className="w-full" />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-10"
            >
              <Button href="#intro" variant="primary">
                Explore Edgar
              </Button>
              <Button href="#public-service" variant="ghost">
                Public Service Record
              </Button>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-6 sm:mt-12"
            >
              <p className="micro-label text-charcoal/35">
                2026
                <span className="mx-2 text-gold">·</span>
                Barangay & SK Elections
              </p>
              <a
                href="#intro"
                className="group micro-label flex items-center gap-2 text-charcoal/40 transition-colors hover:text-blue"
              >
                <span className="scroll-cue inline-block h-8 w-px bg-charcoal/25" aria-hidden="true" />
                Scroll
              </a>
            </motion.div>
          </motion.div>

          {/* Right portrait — overlaps on large screens */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 lg:-ml-4 xl:col-span-6 xl:-ml-8"
          >
            {/* Brand accent rail */}
            <div
              className="absolute -left-2 top-10 z-20 hidden h-[55%] w-[2px] lg:block"
              style={{
                background: 'linear-gradient(180deg, #123F9A 0%, #C91F2B 55%, #F6B52E 100%)',
              }}
              aria-hidden="true"
            />

            <div className="absolute -top-3 right-0 z-20 hidden items-center gap-2 lg:flex">
              <span className="micro-label text-charcoal/30">01</span>
              <span className="h-px w-8 bg-charcoal/15" aria-hidden="true" />
              <span className="micro-label text-charcoal/30">Portrait</span>
            </div>

            <motion.div style={{ y: portraitY }} className="relative">
              <ImagePlaceholder
                label="Edgar Corvera"
                aspect="hero"
                tone="soft"
                className="shadow-[var(--shadow-soft)]"
              />
              {/* Overlap caption strip on desktop */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent p-5 pt-16 sm:p-6 sm:pt-20 lg:hidden">
                <p className="micro-label text-gold/90">Candidate</p>
                <p className="mt-1 font-display text-lg font-medium text-white">
                  Edgar Corvera
                </p>
              </div>
            </motion.div>

            <div className="mt-5 hidden items-center justify-between gap-4 border-t border-charcoal/10 pt-5 lg:flex">
              <div>
                <p className="micro-label text-charcoal/40">Candidate</p>
                <p className="mt-1.5 font-display text-xl font-medium tracking-tight">
                  Edgar Corvera
                </p>
              </div>
              <p className="text-right text-xs leading-relaxed text-charcoal/40">
                Barangay Tabon
                <br />
                Bislig City · Surigao del Sur
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-pad">
        <div className="container-site flex items-center gap-4 border-t border-charcoal/[0.08] py-4">
          <span className="micro-label text-charcoal/25">Tabon · Bislig</span>
          <span className="h-px flex-1 bg-charcoal/[0.08]" aria-hidden="true" />
          <span className="micro-label text-charcoal/25">2026</span>
        </div>
      </div>
    </section>
  )
}
