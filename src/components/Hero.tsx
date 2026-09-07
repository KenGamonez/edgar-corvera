import { motion, useReducedMotion } from 'framer-motion'
import { Button } from './Button'
import { Logo } from './Logo'
import { brand, about } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div className="section-pad pt-16 sm:pt-20">
        <div className="container-site grid gap-12 pt-8 pb-6 sm:pt-12 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pt-16 lg:pb-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="relative z-10 lg:col-span-7"
          >
            <p className="micro-label mb-8 flex items-center gap-3 text-charcoal/55">
              <span className="inline-block h-[2px] w-8 bg-red" aria-hidden="true" />
              {brand.election}
            </p>

            <h1
              id="hero-heading"
              className="font-display text-[clamp(3.75rem,12.5vw,9.5rem)] font-extrabold uppercase leading-[0.82] tracking-[0.005em] text-charcoal"
            >
              <span className="block">Edgar</span>
              <span className="block">Corvera</span>
            </h1>

            <p className="font-display mt-5 text-[clamp(1.6rem,4vw,2.75rem)] font-bold uppercase leading-none tracking-[0.02em] text-red">
              For Barangay Captain
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="micro-label text-charcoal/50">{brand.location}</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/65 sm:text-lg text-pretty">
              {about.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="#about" variant="primary">
                Meet Edgar
              </Button>
              <Button href="#public-service" variant="ghost">
                Public Service Record
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="lg:col-span-5"
          >
            <div className="relative border border-line bg-white">
              <span
                className="absolute -top-px left-0 h-1 w-16 bg-red"
                aria-hidden="true"
              />
              <div className="flex min-h-[16rem] items-center justify-center p-6 sm:min-h-[19rem] sm:p-10">
                <Logo
                  size="hero"
                  alt="Edgar Corvera campaign logo"
                  className="mx-auto max-w-[24rem] sm:max-w-[26rem]"
                />
              </div>
              <hr className="editorial-rule" aria-hidden="true" />
              <div className="flex items-end justify-between gap-4 bg-charcoal px-6 py-5 sm:px-8">
                <div>
                  <p className="micro-label text-red">Candidate</p>
                  <p className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-white">
                    Edgar Corvera
                  </p>
                </div>
                <p className="text-right text-xs leading-relaxed text-white/50">
                  Barangay Tabon
                  <br />
                  {brand.city} · {brand.province}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-pad">
        <div className="container-site flex items-center gap-4 border-t border-line py-5">
          <span className="micro-label text-charcoal/45">
            {brand.locationShort} · {brand.city}
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
          <span className="micro-label text-red">{brand.election}</span>
        </div>
      </div>
    </section>
  )
}