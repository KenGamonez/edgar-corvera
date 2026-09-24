import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { useLang } from '../i18n/LanguageContext'

export function PublicService() {
  const { t } = useLang()
  return (
    <section id="public-service" className="bg-paper" aria-labelledby="service-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <SectionHeading
            title={t.publicService.title}
            eyebrow={t.publicService.eyebrow}
            description={t.publicService.description}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {t.timeline.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} delay={0.05 * (i % 5)} className="h-full">
                <article className="card-white group flex h-full flex-col">
                  <div className="relative overflow-hidden bg-linear-to-br from-blue via-blue to-navy p-6">
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 right-2 select-none font-display text-[5.5rem] uppercase leading-none text-white/15 transition-colors duration-300 group-hover:text-gold/30"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true" className="text-lg text-gold">
                      ★
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="micro-label text-blue">{item.subtitle}</p>
                    <h3 className="mt-2 font-display text-2xl uppercase leading-none tracking-wide text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.detail}</p>
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