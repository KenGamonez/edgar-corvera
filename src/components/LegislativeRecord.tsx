import { Reveal } from './Reveal'
import { legislativeRecords, disclaimers } from '../data/content'

export function LegislativeRecord() {
  return (
    <section
      id="legislative"
      className="bg-paper"
      aria-labelledby="legislative-heading"
    >
      <div className="section-pad">
        <div className="container-site section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow micro-label mb-8 text-charcoal/55">Record</p>
            <h2
              id="legislative-heading"
              className="font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.005em] text-charcoal"
            >
              A record
              <br />
              of work.
            </h2>
            <p className="mt-6 max-w-sm text-charcoal/60">
              Selected measures associated with Edgar&apos;s city council service — and the
              committees behind the work.
            </p>
            <span className="red-bar mt-8 block" aria-hidden="true" />
            <p className="micro-label mt-8 max-w-xs text-charcoal/40">{disclaimers.legislative}</p>
          </Reveal>

          <div className="lg:col-span-8">
            <ul>
              {legislativeRecords.map((item, i) => (
                <Reveal key={item.number} delay={i * 0.05}>
                  <li className="group grid gap-3 border-t border-line py-8 last:border-b sm:grid-cols-[5rem_1fr_auto] sm:gap-8 sm:py-10">
                    <span className="font-display text-4xl font-extrabold leading-none tabular text-charcoal/15 transition-colors duration-300 group-hover:text-red">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal/50">
                        {item.reference ?? 'City Council measure'}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="micro-label text-charcoal/45">{item.year}</p>
                      <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-red">
                        {item.role}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}