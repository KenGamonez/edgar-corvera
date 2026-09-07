import { Reveal } from './Reveal'
import { visionAreas } from '../data/content'

export function Vision() {
  return (
    <section id="for-tabon" className="bg-charcoal text-white" aria-labelledby="vision-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal>
            <p className="eyebrow micro-label mb-8 text-white/50">For Tabon</p>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2
                id="vision-heading"
                className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-white"
              >
                What Edgar
                <br />
                wants for Tabon.
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-white/55 text-pretty">
                Community priorities and areas of focus for Barangay Tabon — structured for
                discussion and development.
              </p>
            </div>
          </Reveal>

          <ul className="mt-16 border-t border-white/10 sm:mt-20">
            {visionAreas.map((area, i) => (
              <Reveal key={area.number} delay={i * 0.04}>
                <li className="group grid gap-3 border-b border-white/10 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10">
                  <span className="font-display text-lg font-extrabold leading-none tabular text-red sm:col-span-1">
                    {area.number}
                  </span>
                  <div className="sm:col-span-5">
                    <h3 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-red sm:text-5xl">
                      {area.title}
                      {area.subtitle && <span className="block text-white/45">{area.subtitle}</span>}
                    </h3>
                  </div>
                  <p className="text-white/55 sm:col-span-6 sm:text-lg text-pretty">
                    {area.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}