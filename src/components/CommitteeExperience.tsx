import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { committees } from '../data/content'

export function CommitteeExperience() {
  return (
    <section id="committees" className="bg-paper" aria-labelledby="committees-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <SectionHeading
            title="Committee Experience"
            eyebrow="Council Committees"
            description="Areas of committee work where engineering discipline meets city governance."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {committees.map((committee, i) => (
              <Reveal key={committee.title} delay={0.05}>
                <article className="card-white group relative h-full overflow-hidden border-t-8 border-blue p-7 sm:p-9">
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -top-8 select-none font-display text-[8rem] uppercase leading-none text-blue/10 transition-colors duration-300 group-hover:text-red/15"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="text-2xl text-gold">
                    ★
                  </span>
                  <h3 className="mt-5 font-display text-3xl uppercase leading-none tracking-wide text-navy sm:text-4xl">
                    {committee.title}
                    {committee.subtitle && (
                      <span className="block text-red">{committee.subtitle}</span>
                    )}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70 text-pretty">
                    {committee.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}