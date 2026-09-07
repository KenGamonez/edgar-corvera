import { Reveal } from './Reveal'
import { brand, about } from '../data/content'

const facts = [
  { label: 'Candidate', value: brand.fullName },
  { label: 'Seeking', value: brand.title },
  { label: 'Location', value: brand.location },
  { label: 'Election', value: brand.election },
]

export function Introduction() {
  return (
    <section id="intro" className="bg-paper" aria-labelledby="intro-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow micro-label mb-8 text-charcoal/55">About the campaign</p>
              <h2
                id="intro-heading"
                className="font-display text-[clamp(2.75rem,8vw,7rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-charcoal"
              >
                Engineering.
                <span className="block text-red">Public Service.</span>
                Experience.
              </h2>
              <span className="red-bar mt-8" aria-hidden="true" />
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/65 sm:text-xl text-pretty">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <aside className="border-l-2 border-red bg-white px-7 py-8 sm:px-9">
                <p className="micro-label text-charcoal/40">At a glance</p>
                <dl className="mt-6 space-y-7">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="micro-label text-charcoal/40">{fact.label}</dt>
                      <dd className="mt-2 font-display text-xl font-bold uppercase leading-tight tracking-tight text-charcoal sm:text-2xl">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}