import { Reveal } from './Reveal'
import { updates } from '../data/content'

export function Updates() {
  return (
    <section id="updates" className="bg-white py-24 sm:py-32" aria-labelledby="updates-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <p className="micro-label mb-6 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              Newsroom
            </p>
            <h2
              id="updates-heading"
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.005em] text-charcoal"
            >
              Campaign
              <br />
              updates.
            </h2>
          </Reveal>

          <div className="mt-14 lg:mt-20">
            {updates.length > 0 ? (
              <Reveal>
                <article className="flex h-full flex-col border border-charcoal/10 bg-soft p-8 sm:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="micro-label bg-red px-3 py-2 text-white">{updates[0].tag}</span>
                    <span className="micro-label text-charcoal/40">{updates[0].date}</span>
                  </div>
                  <p className="micro-label mt-10 text-charcoal/45">{updates[0].category}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-charcoal sm:text-4xl">
                    {updates[0].title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-charcoal/60">{updates[0].excerpt}</p>
                  <div className="mt-10 h-1 w-12 bg-red" aria-hidden="true" />
                </article>
              </Reveal>
            ) : (
              <Reveal>
                <div className="border border-charcoal/10 bg-soft p-12 text-center">
                  <p className="text-charcoal/50">Campaign updates will be published here.</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}