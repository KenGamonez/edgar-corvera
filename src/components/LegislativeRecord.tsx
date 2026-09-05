import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { disclaimers, legislativeRecords } from '../data/content'

export function LegislativeRecord() {
  return (
    <section
      id="legislative"
      className="bg-soft py-24 sm:py-32"
      aria-labelledby="legislative-heading"
    >
      <div className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Record"
                title={<span id="legislative-heading">LEGISLATIVE RECORD</span>}
                description="Selected measures associated with Edgar's city council service — presented for this concept site."
              />
              <p className="mt-8 max-w-sm text-xs leading-relaxed text-charcoal/45">
                {disclaimers.legislative}
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <ul>
                {legislativeRecords.map((item, i) => (
                  <Reveal key={item.number} delay={i * 0.06}>
                    <li className="group border-t border-charcoal/10 py-8 last:border-b sm:py-10">
                      <div className="grid gap-4 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-8">
                        <span className="font-display text-3xl font-semibold text-blue transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-semibold tracking-tight text-charcoal sm:text-2xl md:text-3xl">
                            {item.title}
                          </h3>
                          {item.reference && (
                            <p className="mt-2 text-sm text-charcoal/50">{item.reference}</p>
                          )}
                          <div className="mt-4 h-px w-0 bg-red transition-all duration-500 group-hover:w-16" />
                        </div>
                        <div className="sm:text-right">
                          <p className="micro-label text-charcoal/40">{item.year}</p>
                          <p className="mt-2 text-sm font-medium text-blue">{item.role}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
