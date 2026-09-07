import { Reveal } from './Reveal'
import { timeline } from '../data/content'

export function PublicService() {
  return (
    <section
      id="public-service"
      className="bg-charcoal text-white"
      aria-labelledby="service-heading"
    >
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal>
            <p className="eyebrow micro-label mb-8 text-white/50">Public Service</p>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2
                id="service-heading"
                className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-white"
              >
                Service
                <br />
                with purpose.
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-white/55 text-pretty">
                From engineering discipline to project leadership, from industry to elective public
                service — a path of experience that leads to Barangay Tabon.
              </p>
            </div>
          </Reveal>

          <ul className="mt-16 grid gap-px bg-white/10 sm:mt-20 md:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, i) => (
              <Reveal key={item.id} delay={0.05 * i} className="h-full">
                <li className="group flex h-full flex-col bg-charcoal p-7 transition-colors duration-300 hover:bg-ink sm:p-8">
                  <span className="font-display text-5xl font-extrabold leading-none tabular text-white/15 transition-colors duration-300 group-hover:text-red sm:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-10 micro-label text-white/40">{item.subtitle}</span>
                  <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{item.detail}</p>
                  <span
                    className="mt-8 block h-1 w-10 bg-red transition-all duration-500 group-hover:w-16"
                    aria-hidden="true"
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}