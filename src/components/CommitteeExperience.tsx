import { Reveal } from './Reveal'
import { committees } from '../data/content'

export function CommitteeExperience() {
  return (
    <section id="committees" className="bg-white" aria-labelledby="committees-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal className="max-w-3xl">
            <p className="eyebrow micro-label mb-8 text-charcoal/55">Areas of Public Service</p>
            <h2
              id="committees-heading"
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-charcoal"
            >
              Broad
              <br />
              experience.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-line lg:mt-20 lg:grid-cols-2">
            {committees.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.1} className="h-full">
                <article className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-paper sm:p-12 lg:p-14">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-6xl font-extrabold leading-none tabular text-charcoal/10 transition-colors duration-300 group-hover:text-red sm:text-7xl">
                      0{i + 1}
                    </span>
                    <span className="micro-label text-charcoal/35">Committee</span>
                  </div>
                  <h3 className="mt-14 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-charcoal sm:text-5xl">
                    {item.title}
                    <span className="block text-red">{item.subtitle}</span>
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/65 text-pretty">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-12">
                    <span className="red-bar" aria-hidden="true" />
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