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
          <Reveal>
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

          <Reveal delay={0.08}>
            <dl className="mt-16 grid gap-0 border-t border-line lg:grid-cols-4 sm:mt-20">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-line py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
                >
                  <dt className="micro-label text-charcoal/40">{fact.label}</dt>
                  <dd className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-tight text-charcoal sm:text-2xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}