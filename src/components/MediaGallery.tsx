import { Reveal } from './Reveal'
import { Button } from './Button'
import { useLang } from '../i18n/LanguageContext'

const aspectClass: Record<string, string> = {
  wide: 'aspect-[4/3]',
  square: 'aspect-square',
  tall: 'aspect-[3/4]',
}

const MEDIA_ASPECTS = ['wide', 'tall', 'square', 'wide', 'square', 'tall'] as const

export function MediaGallery() {
  const { t } = useLang()
  return (
    <section id="media" className="bg-red text-white" aria-labelledby="media-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="micro-label flex items-center gap-2 text-gold">
                <span aria-hidden="true">★</span>
                {t.media.eyebrow}
              </p>
              <h2
                id="media-heading"
                className="mt-4 font-display text-[clamp(3rem,9vw,6rem)] uppercase leading-[0.9] tracking-[0.01em]"
              >
                {t.media.titleLine1}<br />{t.media.titleLine2}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg text-pretty">
                {t.media.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#updates" variant="blue">
                  {t.media.ctaPrimary}
                </Button>
                <Button href="#connect" variant="outline">
                  {t.media.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            {/* Featured visual — the campaign mark, not fabricated photography. */}
            <Reveal delay={0.1}>
              <div className="btn-shadow relative overflow-hidden border-4 border-white bg-linear-to-br from-blue to-navy p-8 sm:p-10">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 -right-4 select-none font-display text-[12rem] uppercase leading-none text-white/10"
                >
                  EC
                </span>
                <span aria-hidden="true" className="text-5xl text-gold">
                  ★
                </span>
                <p className="mt-6 font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl">
                  {t.media.crestTitle}
                </p>
                <p className="mt-4 micro-label text-white/70">
                  {t.media.crestNote}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Gallery grid */}
          <div className="mt-16">
            <p className="micro-label flex items-center gap-2 text-gold">
              <span aria-hidden="true">★</span>
              {t.media.galleryLabel}
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.mediaItems.map((item, i) => (
                <Reveal key={`m${i + 1}`} delay={0.03}>
                  <figure className="btn-shadow group relative overflow-hidden border-2 border-white/30 transition-colors duration-300 hover:border-gold">
                    <div
                      className={`relative ${aspectClass[MEDIA_ASPECTS[i] ?? 'wide'] ?? 'aspect-[4/3]'} flex items-center justify-center bg-white/5 transition-colors duration-300 group-hover:bg-white/10`}
                    >
                      <span
                        aria-hidden="true"
                        className="select-none font-display text-[5rem] uppercase leading-none text-white/15 transition-colors duration-300 group-hover:text-gold/40"
                      >
                        EC
                      </span>
                      <span className="micro-label absolute right-3 top-3 bg-white/15 px-2 py-1 text-white/80">
                        {item.category}
                      </span>
                    </div>
                    <figcaption className="bg-navy px-5 py-4">
                      <p className="font-display text-lg uppercase tracking-wide text-white">
                        {item.caption}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}