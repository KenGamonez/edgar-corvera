import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { updates } from '../data/content'

export function Updates() {
  const latest = updates[0]

  return (
    <section id="updates" className="bg-paper" aria-labelledby="updates-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Newsroom"
              title={<span id="updates-heading">Campaign updates.</span>}
              description="Verified campaign activities and community updates are published here as the campaign takes shape."
            />
          </Reveal>

          {latest && (
            <Reveal className="mt-16 lg:mt-20">
              <article className="relative overflow-hidden border border-line bg-white">
                <span
                  className="pointer-events-none absolute -top-2 right-6 font-display text-[7rem] font-extrabold leading-none tabular text-charcoal/[0.04] select-none sm:text-[11rem]"
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="relative p-8 sm:p-14">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="micro-label bg-red px-3 py-2 text-white">{latest.tag}</span>
                    <span className="micro-label text-charcoal/40">{latest.date}</span>
                  </div>
                  <p className="micro-label mt-12 text-charcoal/45">{latest.category}</p>
                  <h3 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-charcoal sm:text-5xl">
                    {latest.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/60 sm:text-lg text-pretty">
                    {latest.excerpt}
                  </p>
                  <span className="red-bar mt-10 block" aria-hidden="true" />
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}