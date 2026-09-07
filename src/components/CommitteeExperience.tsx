import { Reveal } from './Reveal'
import { committees } from '../data/content'

export function CommitteeExperience() {
  return (
    <section id="committees" className="bg-white py-24 sm:py-32" aria-labelledby="committees-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <p className="micro-label mb-6 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              Areas of Public Service
            </p>
            <h2
              id="committees-heading"
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.005em] text-charcoal"
            >
              Broad
              <br />
              experience.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:mt-20 lg:grid-cols-2">
            {committees.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.08} className="h-full">
                <article className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-soft sm:p-12">
                  <span className="micro-label text-charcoal/35">0{i + 1}</span>
                  <h3 className="mt-12 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-charcoal sm:text-5xl">
                    {item.title}
                    <span className="block text-red">{item.subtitle}</span>
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/65">
                    {item.description}
                  </p>
                  <div className="mt-12 h-1 w-12 bg-red" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}