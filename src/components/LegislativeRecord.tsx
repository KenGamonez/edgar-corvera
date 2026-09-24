import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { useLang } from '../i18n/LanguageContext'

const RECORD_META = [
  { number: '01', reference: 'Ordinance No. 2017-05', year: '2017' },
  { number: '02', reference: null as string | null, year: '2023' },
  { number: '03', reference: null as string | null, year: '2023' },
  { number: '04', reference: null as string | null, year: '2022–2025' },
] as const

export function LegislativeRecord() {
  const { t } = useLang()
  return (
    <section id="legislative" className="bg-white" aria-labelledby="legislative-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <SectionHeading
            title={t.legislative.title}
            eyebrow={t.legislative.eyebrow}
            description={t.legislative.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.legislativeRecords.map((record, i) => (
              <Reveal key={RECORD_META[i].number} delay={0.05}>
                <article className="card-white group flex h-full flex-col border-t-4 border-red">
                  <div className="flex items-center justify-between gap-4 p-6 pb-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-red font-display text-2xl text-white">
                      {RECORD_META[i].number}
                    </span>
                    <div className="text-right">
                      {RECORD_META[i].reference ? (
                        <p className="micro-label text-blue">{RECORD_META[i].reference}</p>
                      ) : (
                        <p className="micro-label text-charcoal/40">{t.legislative.cityOrdinanceFallback}</p>
                      )}
                      <p className="mt-1 font-display text-sm uppercase tracking-widest text-charcoal/60">
                        {RECORD_META[i].year}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-0">
                    <h3 className="font-display text-2xl uppercase leading-tight tracking-wide text-navy sm:text-3xl">
                      {record.title}
                    </h3>
                    <span className="mt-4 inline-flex w-max items-center gap-2 bg-gold px-3 py-1.5 micro-label text-navy">
                      <span aria-hidden="true">★</span>
                      {record.role}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-sm text-charcoal/50">{t.legislative.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}