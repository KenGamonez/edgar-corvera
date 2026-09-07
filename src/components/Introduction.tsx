import { Reveal } from './Reveal'
import { brand, about } from '../data/content'

export function Introduction() {
  return (
    <section id="intro" className="section-y bg-soft" aria-labelledby="intro-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <p className="micro-label mb-6 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              About the campaign
            </p>
            <h2
              id="intro-heading"
              className="font-display text-[clamp(2.75rem,8vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.005em] text-charcoal"
            >
              Engineering.
              <span className="block text-red">Public Service.</span>
              Experience.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/65 sm:text-xl">
              {about.intro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid gap-0 border-t border-charcoal/10 sm:mt-20 lg:grid-cols-4">
              {[
                { label: 'Candidate', value: brand.fullName },
                { label: 'Office', value: brand.title },
                { label: 'Location', value: brand.location },
                { label: 'Election', value: brand.election },
              ].map((row) => (
                <div
                  key={row.label}
                  className="border-b border-charcoal/10 py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
                >
                  <dt className="micro-label text-charcoal/40">{row.label}</dt>
                  <dd className="mt-3 font-display text-xl font-semibold uppercase tracking-tight text-charcoal sm:text-2xl">
                    {row.value}
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