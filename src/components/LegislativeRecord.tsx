import { Reveal } from './Reveal'
import { legislativeRecords } from '../data/content'

export function LegislativeRecord() {
  return (
    <section
      id="legislative"
      className="bg-soft py-24 sm:py-32"
      aria-labelledby="legislative-heading"
    >
      <div className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="micro-label mb-6 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              Record
            </p>
            <h2
              id="legislative-heading"
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.9] tracking-[-0.005em] text-charcoal"
            >
              A record
              <br />
              of work.
            </h2>
            <p className="mt-6 max-w-sm text-charcoal/60">
              Selected measures associated with Edgar&apos;s city council service.
            </p>
            <div className="mt-8 h-1 w-16 bg-red" aria-hidden="true" />
          </Reveal>

          <div className="lg:col-span-8">
            <ul>
              {legislativeRecords.map((item, i) => (
                <Reveal key={item.number} delay={i * 0.06}>
                  <li className="group grid gap-3 border-t border-charcoal/10 py-8 last:border-b sm:grid-cols-[56px_1fr_auto] sm:gap-8 sm:py-10">
                    <span className="font-display text-3xl font-bold tabular-nums text-charcoal/20 transition-colors duration-300 group-hover:text-red sm:text-4xl">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal sm:text-3xl">
                        {item.title}
                      </h3>
                      {item.reference && (
                        <p className="mt-2 text-sm text-charcoal/50">{item.reference}</p>
                      )}
                    </div>
                    <div className="sm:text-right">
                      <p className="micro-label text-charcoal/40">{item.year}</p>
                      <p className="mt-2 text-sm font-semibold text-red">{item.role}</p>
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