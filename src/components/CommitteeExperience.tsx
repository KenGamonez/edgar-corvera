import { Reveal } from './Reveal'
import { StarMotif } from './Motifs'
import { committees } from '../data/content'

export function CommitteeExperience() {
  return (
    <section
      id="committees"
      className="relative overflow-hidden bg-blue py-24 text-white sm:py-32"
      aria-labelledby="committees-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 opacity-20"
        aria-hidden="true"
      >
        <StarMotif className="h-40 w-40" animated={false} />
      </div>

      <div className="section-pad relative">
        <div className="container-site">
          <Reveal>
            <p className="micro-label text-gold mb-5">Areas of Public Service</p>
            <h2
              id="committees-heading"
              className="font-display max-w-2xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
            >
              COMMITTEE EXPERIENCE
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
            {committees.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.08}>
                <article className="group relative min-h-[280px] border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40 hover:bg-white/[0.07] sm:p-10 lg:min-h-[340px]">
                  <span className="micro-label text-gold/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-8 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                    {item.title}
                    <br />
                    <span className="text-white/70">{item.subtitle}</span>
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                    {item.description}
                  </p>
                  <div className="absolute bottom-8 left-8 h-0.5 w-10 bg-gold transition-all duration-500 group-hover:w-20 sm:left-10" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
