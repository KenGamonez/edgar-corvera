import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { disclaimers, elections } from '../data/content'

function AnimatedStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce)

  useEffect(() => {
    if (inView) setShown(true)
  }, [inView])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <p className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-none tracking-tight text-charcoal">
        {value}
      </p>
      <p className="micro-label mt-3 text-charcoal/40">{label}</p>
    </div>
  )
}

export function ElectionStats() {
  return (
    <section id="elections" className="bg-white py-24 sm:py-32" aria-labelledby="elections-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Electoral Record"
              title={<span id="elections-heading">ELECTION EXPERIENCE</span>}
              description="City council election results presented factually from supplied research."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
            {elections.map((race, i) => (
              <Reveal key={race.year} delay={i * 0.1}>
                <article
                  className={`relative overflow-hidden border p-8 sm:p-10 ${
                    race.won
                      ? 'border-charcoal/10 bg-soft'
                      : 'border-charcoal/10 bg-white'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-5xl font-semibold tracking-tight text-blue sm:text-6xl">
                        {race.year}
                      </p>
                      <p className="mt-2 text-charcoal/60">{race.race}</p>
                    </div>
                    <span
                      className={`micro-label px-3 py-1.5 ${
                        race.won
                          ? 'bg-blue text-white'
                          : 'border border-charcoal/15 text-charcoal/55'
                      }`}
                    >
                      {race.result}
                    </span>
                  </div>

                  <div className="mt-12 grid gap-8 sm:grid-cols-2">
                    <AnimatedStat value={race.votes} label={race.votesLabel} />
                    <div>
                      <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-charcoal">
                        {race.secondary}
                      </p>
                      <p className="micro-label mt-3 text-charcoal/40">Standing</p>
                    </div>
                  </div>

                  <div
                    className={`mt-10 h-1 w-full origin-left ${
                      race.won ? 'bg-blue' : 'bg-charcoal/10'
                    }`}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-xs leading-relaxed text-charcoal/45">
              {disclaimers.elections}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
