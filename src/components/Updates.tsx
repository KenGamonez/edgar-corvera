import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { updates } from '../data/content'

export function Updates() {
  return (
    <section id="updates" className="bg-white py-24 sm:py-32" aria-labelledby="updates-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Newsroom"
              title={<span id="updates-heading">LATEST UPDATES</span>}
              description="Demonstration editorial pieces only — clearly marked as demo content for this proposal."
              showAccent
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-12">
            {/* Featured */}
            <Reveal className="lg:col-span-7" delay={0.05}>
              <article className="group flex h-full flex-col border border-charcoal/10 transition-shadow duration-500 hover:shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-soft">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-charcoal/5 transition-transform duration-700 group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div className="absolute left-5 top-5">
                    <span className="micro-label bg-charcoal px-3 py-1.5 text-gold">
                      {updates[0].tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="micro-label text-blue">{updates[0].category}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="micro-label text-charcoal/40">{updates[0].date}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl md:text-4xl">
                    {updates[0].title}
                  </h3>
                  <p className="mt-4 flex-1 text-charcoal/60">{updates[0].excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-blue uppercase">
                    Read concept
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Stack */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              {updates.slice(1).map((item, i) => (
                <Reveal key={item.id} delay={0.1 + i * 0.08} className="flex-1">
                  <article className="group flex h-full flex-col border-t border-charcoal/10 pt-8 first:border-t-0 first:pt-0 lg:border-t lg:pt-8 lg:first:border-t lg:first:pt-8">
                    <div className="flex items-center gap-3">
                      <span className="micro-label text-gold">{item.tag}</span>
                      <span className="h-px flex-1 bg-charcoal/10" />
                      <span className="micro-label text-charcoal/35">{item.date}</span>
                    </div>
                    <p className="micro-label mt-5 text-blue">{item.category}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-blue sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{item.excerpt}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
