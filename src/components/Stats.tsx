import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { elections, disclaimers } from '../data/content'

function StatNumber({ value, label }: { value: string; label: string }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-display text-[clamp(2.75rem,5vw,4rem)] font-extrabold leading-none tracking-tight tabular text-charcoal">
        {value}
      </p>
      <p className="micro-label mt-3 text-charcoal/40">{label}</p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section id="elections" className="bg-paper" aria-labelledby="elections-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Electoral Record"
              title={<span id="elections-heading">The numbers speak.</span>}
              description="City council election results presented factually — wins and losses alike."
            />
          </Reveal>

          <div className="mt-16 grid gap-px bg-line lg:mt-20 lg:grid-cols-2">
            {elections.map((race, i) => (
              <Reveal key={race.year} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-white sm:p-12">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-6xl font-extrabold leading-none tracking-tight tabular text-charcoal sm:text-7xl">
                        {race.year}
                      </span>
                      <span className="micro-label text-charcoal/40">{race.race}</span>
                    </div>
                    <span
                      className={`micro-label px-3 py-2 ${
                        race.won
                          ? 'bg-red text-white'
                          : 'border border-line-strong text-charcoal/55'
                      }`}
                    >
                      {race.result}
                    </span>
                  </div>

                  <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10">
                    <StatNumber value={race.votes} label={race.votesLabel} />
                    <div>
                      <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold uppercase leading-tight text-charcoal">
                        {race.secondary}
                      </p>
                      <p className="micro-label mt-3 text-charcoal/40">Standing</p>
                    </div>
                  </div>

                  <span
                    className={`mt-auto block h-1 w-16 pt-8 ${
                      race.won ? 'bg-red' : 'bg-charcoal/15'
                    }`}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>

          <p className="micro-label mt-8 text-charcoal/40">{disclaimers.elections}</p>
        </div>
      </div>
    </section>
  )
}