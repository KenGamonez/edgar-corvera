import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { updates } from '../data/content'

export function Updates() {
  return (
    <section id="updates" className="bg-blue text-white" aria-labelledby="updates-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <SectionHeading
            title="Latest Updates"
            eyebrow="Campaign Newsroom"
            tone="white"
            description="Verified campaign activities and community updates as they are published."
            rightLink={{ label: 'Media', href: '#media' }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((item) => (
              <Reveal key={item.id} className="md:col-span-2 lg:col-span-1">
                <article className="card-white group flex h-full flex-col text-charcoal">
                  <div className="relative flex aspect-[7/4] items-center justify-center overflow-hidden bg-linear-to-br from-blue to-navy">
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 -bottom-6 select-none font-display text-[7rem] uppercase leading-none text-white/10"
                    >
                      EC
                    </span>
                    <span aria-hidden="true" className="text-4xl text-gold">
                      ★
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="micro-label inline-flex items-center gap-2 bg-gold px-2.5 py-1 text-navy">
                        <span aria-hidden="true">★</span>
                        {item.tag}
                      </span>
                      <span className="micro-label text-charcoal/45">{item.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl uppercase leading-tight tracking-wide text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.excerpt}</p>
                    <p className="mt-auto pt-5 micro-label text-blue">{item.category}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}