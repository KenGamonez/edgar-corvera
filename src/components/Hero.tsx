import { motion, useReducedMotion } from 'framer-motion'
import { Button } from './Button'
import { Logo } from './Logo'
import { brand, about } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative grid min-h-svh overflow-hidden bg-black text-white lg:grid-cols-12"
      aria-labelledby="hero-heading"
    >
      {/* Ambient oversized monogram backdrop */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-10 select-none font-display text-[24rem] font-extrabold leading-none tracking-tighter text-white/[0.04] sm:text-[34rem] lg:-right-4"
      >
        EC
      </span>
      {/* Red accent band */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-red sm:w-2" aria-hidden="true" />

      <div className="section-pad relative z-10 pt-28 sm:pt-32 lg:col-span-8 lg:flex lg:flex-col lg:justify-center lg:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="micro-label flex items-center gap-3 text-white/60">
            <span className="inline-block h-[2px] w-10 bg-red" aria-hidden="true" />
            {brand.election}
          </p>

          <h1
            id="hero-heading"
            className="mt-8 font-display text-[clamp(3.75rem,13vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[0.004em] text-white"
          >
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              Edgar
            </motion.span>
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
            >
              Corvera
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-6 inline-flex w-max max-w-full items-center gap-4 bg-red px-6 py-4 sm:px-8"
        >
          <span className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-bold uppercase leading-none tracking-[0.02em] text-white">
            For Barangay Captain
          </span>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="micro-label text-white/50">{brand.location}</span>
          <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg text-pretty"
        >
          {about.intro}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href="#about" variant="primary">
            Meet Edgar
          </Button>
          <Button href="#public-service" variant="outline-light">
            Public Service Record
          </Button>
        </motion.div>
      </div>

      {/* Right identity panel */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease }}
        className="relative z-10 flex flex-col justify-end border-t border-white/10 lg:col-span-4 lg:border-t-0 lg:border-l"
      >
        <div className="relative flex min-h-[16rem] flex-1 items-center justify-center overflow-hidden p-8 sm:min-h-[20rem] lg:min-h-0">
          <Logo
            size="hero"
            alt="Edgar Corvera campaign logo"
            className="mx-auto max-w-[19rem] sm:max-w-[22rem]"
          />
        </div>

        <div className="border-t border-white/10 px-8 py-6 sm:px-10 sm:py-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="micro-label text-white/40">Candidate</p>
              <p className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-white">
                Edgar Corvera
              </p>
            </div>
            <div>
              <p className="micro-label text-white/40">Location</p>
              <p className="mt-2 font-display text-xl font-bold uppercase leading-tight tracking-tight text-white">
                {brand.locationShort}
                <br />
                {brand.city}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom ticker strip */}
      <div className="section-pad relative z-10 col-span-full border-t border-white/10">
        <div className="container-site flex items-center gap-4 py-5">
          <span className="micro-label text-white/40">{brand.locationShort} · {brand.city}</span>
          <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
          <span className="micro-label text-red">{brand.election}</span>
        </div>
      </div>
    </section>
  )
}