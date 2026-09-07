import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { elections } from '../data/content'

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
      <p className="font-display text-[clamp(2.75rem,5vw,4rem)] font-bold leading-none tracking-tight text-charcoal">
        {value}
      </p>
      <p className="micro-label mt-3 text-charcoal/40">{label}</p>
    </div>
  )
}

export function ElectionStats() {
  return (
    <section id="elections" className="bg-soft py-24 sm:py-32" aria-labelledby="elections-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Electoral Record"
              title={<span id="elections-heading">The numbers speak.</span>}
              description="City council election results presented factually."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
            {elections.map((race, i) => (
              <Reveal key={race.year} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col border border-charcoal/10 bg-white p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-6xl font-bold leading-none tracking-tight text-charcoal sm:text-7xl">
                        {race.year}
                      </p>
                      <p className="mt-3 font-medium uppercase tracking-widest text-charcoal/55">
                        {race.race}
                      </p>
                    </div>
                    <span
                      className={`micro-label px-3 py-2 ${
                        race.won ? 'bg-red text-white' : 'border border-charcoal/15 text-charcoal/55'
                      }`}
                    >
                      {race.result}
                    </span>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-8">
                    <AnimatedStat value={race.votes} label={race.votesLabel} />
                    <div>
                      <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold uppercase leading-tight text-charcoal">
                        {race.secondary}
                      </p>
                      <p className="micro-label mt-3 text-charcoal/40">Standing</p>
                    </div>
                  </div>

                  <div
                    className={`mt-auto h-1 w-16 pt-10 ${race.won ? 'bg-red' : 'bg-charcoal/15'}`}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}