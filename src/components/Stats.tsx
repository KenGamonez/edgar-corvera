import { Reveal } from './Reveal'
import { elections, disclaimers } from '../data/content'

export function Stats() {
  return (
    <section id="stats" className="bg-navy text-white" aria-labelledby="stats-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal>
            <p className="micro-label text-gold">Election Record</p>
            <h2
              id="stats-heading"
              className="mt-3 font-display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[0.01em] text-white"
            >
              Proven in the field.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {elections.map((election) => (
              <Reveal key={election.year} delay={0.05}>
                <div
                  className={`flex h-full flex-col justify-between gap-6 border-b-4 p-7 sm:p-9 ${
                    election.won ? 'border-gold bg-blue/40' : 'border-red/60 bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-display text-7xl leading-none tabular text-gold sm:text-8xl">
                        {election.votes}
                      </p>
                      <p className="micro-label mt-3 text-white/60">{election.votesLabel}</p>
                    </div>
                    <span className="font-display text-4xl uppercase leading-none text-white/25">
                      {election.year}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-2xl uppercase tracking-wide text-white sm:text-3xl">
                      {election.race}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{election.secondary}</p>
                    <p
                      className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 micro-label ${
                        election.won ? 'bg-gold text-navy' : 'bg-red text-white'
                      }`}
                    >
                      <span aria-hidden="true">★</span>
                      {election.result}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-sm text-white/40">{disclaimers.elections}</p>
        </div>
      </div>
    </section>
  )
}