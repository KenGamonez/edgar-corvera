import { Reveal } from './Reveal'
import { WaveMotif, AccentCluster } from './Motifs'
import { visionAreas } from '../data/content'

export function VisionForTabon() {
  return (
    <section
      id="for-tabon"
      className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32"
      aria-labelledby="vision-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(18,63,154,0.25), transparent 55%)',
        }}
      />

      <div className="section-pad relative">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="micro-label text-gold mb-5">For Tabon</p>
                <h2
                  id="vision-heading"
                  className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
                >
                  A VISION
                  <br />
                  FOR TABON
                </h2>
              </div>
              <AccentCluster />
            </div>
            <div className="mt-8 max-w-lg">
              <WaveMotif className="w-full" />
              <p className="mt-6 text-base leading-relaxed text-white/55 sm:text-lg">
                Future platform areas for Barangay Tabon — structured for verified campaign content.
                No promises are stated here; these are editorial placeholders awaiting official
                priorities.
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 border-t border-white/10 lg:mt-20">
            {visionAreas.map((area, i) => (
              <Reveal key={area.number} delay={i * 0.04}>
                <li>
                  <button
                    type="button"
                    className="group flex w-full flex-col gap-3 border-b border-white/10 py-7 text-left transition-colors duration-300 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-9"
                  >
                    <div className="flex items-baseline gap-5 sm:gap-8">
                      <span className="font-display text-sm text-gold/70 tabular-nums transition-all duration-300 group-hover:text-gold group-hover:tracking-widest">
                        {area.number}
                      </span>
                      <span className="font-display text-2xl font-semibold tracking-tight transition-transform duration-400 group-hover:translate-x-2 sm:text-3xl md:text-4xl">
                        {area.title}
                        {area.subtitle && (
                          <>
                            <br className="sm:hidden" />
                            <span className="text-white/50"> {area.subtitle}</span>
                          </>
                        )}
                      </span>
                    </div>
                    <span className="ml-12 flex items-center gap-3 sm:ml-0">
                      <span className="h-px w-0 bg-red transition-all duration-500 group-hover:w-16" />
                      <span className="micro-label text-white/30 transition-colors group-hover:text-white/70">
                        Content forthcoming
                      </span>
                    </span>
                  </button>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
