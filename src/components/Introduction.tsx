import { Reveal } from './Reveal'
import { WaveMotif, SunMotif } from './Motifs'
import { about, brand } from '../data/content'

export function Introduction() {
  return (
    <section
      id="intro"
      className="relative bg-white section-y"
      aria-labelledby="intro-heading"
    >
      <div className="section-pad">
        <div className="container-site">
          <div className="mb-10 flex items-center gap-4 sm:mb-14">
            <Reveal>
              <p className="micro-label text-blue">Introduction</p>
            </Reveal>
            <span className="h-px flex-1 max-w-[120px] bg-charcoal/10" aria-hidden="true" />
            <Reveal delay={0.05}>
              <SunMotif className="h-5 w-5" animated={false} />
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <h2
              id="intro-heading"
              className="font-display text-[clamp(2.5rem,7.5vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.042em] text-charcoal"
            >
              <span className="block">ENGINEERING.</span>
              <span className="block text-blue">PUBLIC SERVICE.</span>
              <span className="block">EXPERIENCE.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 border-t border-charcoal/[0.08] pt-12 lg:mt-16 lg:grid-cols-12 lg:gap-14 lg:pt-16">
            <Reveal delay={0.1} className="lg:col-span-5">
              <WaveMotif className="mb-8 w-44 sm:w-52" />
              <p className="text-lg leading-relaxed text-charcoal/65 sm:text-xl sm:leading-relaxed">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.16} className="lg:col-span-6 lg:col-start-7">
              <dl className="space-y-0">
                {[
                  { label: 'Candidate', value: brand.fullName, emphasis: true },
                  { label: 'Office', value: brand.title },
                  {
                    label: 'Barangay',
                    value: (
                      <>
                        {brand.location}
                        <br />
                        <span className="text-charcoal/45">{brand.province}</span>
                      </>
                    ),
                  },
                  { label: 'Election', value: brand.election },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 border-b border-charcoal/[0.08] py-6 first:pt-0 last:border-0 sm:grid-cols-[130px_1fr] sm:gap-6"
                  >
                    <dt className="micro-label pt-1 text-charcoal/35">{row.label}</dt>
                    <dd
                      className={
                        row.emphasis
                          ? 'font-display text-xl font-medium tracking-tight sm:text-2xl'
                          : 'text-charcoal/70'
                      }
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
