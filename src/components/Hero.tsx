import { motion, useReducedMotion } from 'framer-motion'
import { Button } from './Button'
import { ImagePlaceholder } from './ImagePlaceholder'
import { brand, about } from '../data/content'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-16 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 pb-14 pt-12 lg:col-span-7 lg:pb-24 lg:pt-20 xl:col-span-6"
          >
            <p className="micro-label mb-8 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              {brand.election}
            </p>

            <h1
              id="hero-heading"
              className="font-display text-[clamp(3.5rem,13vw,8.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.005em] text-charcoal"
            >
              <span className="block">Edgar</span>
              <span className="block">Corvera</span>
            </h1>

            <p className="mt-7 font-display text-[clamp(1.5rem,4vw,3rem)] font-semibold uppercase leading-tight tracking-[0.01em] text-red">
              For Barangay Captain
            </p>
            <p className="mt-3 font-medium text-charcoal/70">{brand.location}</p>

            <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/60 sm:text-lg">
              {about.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="#about" variant="primary">
                Explore Edgar
              </Button>
              <Button href="#public-service" variant="ghost">
                Public Service Record
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 xl:col-span-6"
          >
            <div className="relative">
              <div className="absolute -left-3 bottom-0 top-8 w-[3px] bg-red" aria-hidden="true" />
              <ImagePlaceholder
                label="Edgar Corvera"
                sublabel={brand.title}
                aspect="hero"
                tone="soft"
                className="border border-charcoal/10"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-charcoal px-6 py-5 sm:px-8">
                <div>
                  <p className="micro-label text-red">Candidate</p>
                  <p className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-white">
                    Edgar Corvera
                  </p>
                </div>
                <p className="text-right text-xs leading-relaxed text-white/50">
                  Barangay Tabon
                  <br />
                  {brand.city} · Surigao del Sur
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-pad">
        <div className="container-site flex items-center gap-4 border-t border-charcoal/10 py-5">
          <span className="micro-label text-charcoal/40">{brand.locationShort} · {brand.city}</span>
          <span className="h-px flex-1 bg-charcoal/10" aria-hidden="true" />
          <span className="micro-label text-red">{brand.election}</span>
        </div>
      </div>
    </section>
  )
}