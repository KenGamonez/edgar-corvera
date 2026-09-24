import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Sun } from './Sun'
import { useLang } from '../i18n/LanguageContext'

const VISION_NUMBERS = ['01', '02', '03', '04', '05', '06'] as const

export function Vision() {
  const { t } = useLang()
  return (
    <section id="for-tabon" className="relative overflow-hidden bg-white" aria-labelledby="vision-heading">
      {/* Decorative flag motif in the corner, like the reference's flag graphic. */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 hidden opacity-60 lg:block">
        <div className="relative h-72 w-72 rotate-45">
          <span className="absolute inset-0 bg-blue" />
          <span className="clip-red absolute inset-0 bg-red" />
          <Sun className="absolute left-1/2 top-[38%] h-16 w-16 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="section-pad relative">
        <div className="container-site section-y">
          <SectionHeading
            title={t.vision.title}
            eyebrow={t.vision.eyebrow}
            center
            description={t.vision.description}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.visionAreas.map((area, i) => (
              <Reveal key={VISION_NUMBERS[i]} delay={0.04}>
                <article className="tile-blue group flex h-full flex-col items-start gap-1 p-7 text-left transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                  <div className="flex w-full items-center justify-between">
                    <span aria-hidden="true" className="text-2xl text-gold">
                      ★
                    </span>
                    <span className="font-display text-4xl leading-none text-white/25">
                      {VISION_NUMBERS[i]}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight tracking-wide text-white sm:text-3xl">
                    {area.title}
                    {area.subtitle && <span className="block text-gold">{area.subtitle}</span>}
                  </h3>
                  <p className="mt-3 font-sans text-sm uppercase tracking-[0.08em] text-white/65">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}