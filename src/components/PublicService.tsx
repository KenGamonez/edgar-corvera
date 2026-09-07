import { Reveal } from './Reveal'
import { timeline } from '../data/content'

export function PublicService() {
  return (
    <section
      id="public-service"
      className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32"
      aria-labelledby="service-heading"
    >
      <div className="section-pad relative">
        <div className="container-site">
          <Reveal>
            <p className="micro-label mb-6 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              Public Service
            </p>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2
                id="service-heading"
                className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.005em] text-white"
              >
                Service
                <br />
                with purpose.
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                From engineering discipline to project leadership, from industry to elective public
                service — a path of experience that leads to Barangay Tabon.
              </p>
            </div>
          </Reveal>

          <ul className="mt-16 grid gap-0 border-t border-white/10 sm:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {timeline.slice(0, 4).map((item, i) => (
              <Reveal key={item.id} delay={0.06 * i} className="h-full">
                <li className="group border-b border-white/10 py-10 md:border-r md:px-6 md:py-12 md:last:border-r-0 lg:px-8">
                  <span className="font-display text-6xl font-bold tabular-nums text-white/20 transition-colors duration-300 group-hover:text-red sm:text-7xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-white/50">{item.subtitle}</p>
                  <p className="mt-5 text-sm leading-relaxed text-white/45">{item.detail}</p>
                  <div className="mt-8 h-1 w-12 bg-red" aria-hidden="true" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}