import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { timeline } from '../data/content'

export function Timeline() {
  return (
    <section id="timeline" className="bg-white py-24 sm:py-32" aria-labelledby="timeline-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Path"
              title={<span id="timeline-heading">SERVICE TIMELINE</span>}
              description="A concise path from engineering and project management into elective public service — culminating in the 2026 candidacy for Barangay Tabon."
            />
          </Reveal>

          <div className="relative mt-16 lg:mt-20">
            {/* Vertical line */}
            <div
              className="absolute left-[11px] top-2 bottom-2 w-px bg-charcoal/10 md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            />

            <ol className="space-y-0">
              {timeline.map((item, i) => {
                const left = i % 2 === 0
                return (
                  <Reveal key={item.id} delay={i * 0.04} className="relative">
                    <li className="group relative grid gap-4 py-8 md:grid-cols-2 md:gap-12 md:py-10">
                      {/* Dot */}
                      <span
                        className="absolute left-1.5 top-10 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue bg-white md:left-1/2 md:-translate-x-1/2 md:top-12"
                        aria-hidden="true"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>

                      <div
                        className={`pl-10 md:pl-0 ${
                          left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                        }`}
                      >
                        <p className="micro-label text-blue">{item.subtitle}</p>
                        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                          {item.title}
                        </h3>
                        <p
                          className={`mt-3 max-w-md text-charcoal/60 ${
                            left ? 'md:ml-auto' : ''
                          }`}
                        >
                          {item.detail}
                        </p>
                      </div>

                      {/* Spacer for alternating layout on desktop */}
                      {left && <div className="hidden md:block" aria-hidden="true" />}
                    </li>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
