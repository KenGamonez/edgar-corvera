import { Reveal } from './Reveal'
import { WaveMotif } from './Motifs'
import { serviceHighlights } from '../data/content'

export function PublicService() {
  return (
    <section
      id="public-service"
      className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32 lg:py-36"
      aria-labelledby="service-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 0% 0%, rgba(18,63,154,0.35), transparent 55%), radial-gradient(ellipse 40% 30% at 100% 100%, rgba(201,31,43,0.12), transparent 50%)',
        }}
      />

      <div className="section-pad relative">
        <div className="container-site">
          <Reveal>
            <p className="micro-label text-gold mb-6">Public Service</p>
            <h2
              id="service-heading"
              className="font-display text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
            >
              A RECORD
              <br />
              OF PUBLIC
              <br />
              <span className="text-white/90">SERVICE</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 max-w-md">
            <WaveMotif className="w-full opacity-90" />
            <p className="mt-8 text-base leading-relaxed text-white/60 sm:text-lg">
              Built on engineering discipline, project leadership, and multiple terms representing
              Bislig City — with focus areas in public works, infrastructure, renewable energy, and
              waterworks.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-0 border-t border-white/10 sm:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item, i) => (
              <Reveal
                key={item.label}
                delay={0.08 + i * 0.06}
                className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-6 md:py-12 md:last:border-r-0 lg:px-8"
              >
                <span className="font-display text-5xl font-semibold tracking-tight text-blue transition-colors duration-300 group-hover:text-gold sm:text-6xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {item.label}
                </h3>
                <p className="mt-2 text-lg text-white/50">{item.detail}</p>
                <div className="mt-8 h-px w-12 origin-left scale-x-100 bg-red transition-transform duration-500 group-hover:scale-x-150" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
