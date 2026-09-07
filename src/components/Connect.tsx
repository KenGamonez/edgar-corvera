import { Reveal } from './Reveal'
import { Button } from './Button'
import { brand } from '../data/content'

export function Connect() {
  return (
    <section id="connect" className="bg-black text-white" aria-labelledby="connect-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow micro-label mb-8 justify-center text-white/50">
                {brand.election}
              </p>
              <h2
                id="connect-heading"
                className="font-display text-[clamp(3rem,11vw,8rem)] font-extrabold uppercase leading-[0.85] tracking-[0.002em] text-white"
              >
                Stay
                <br />
                connected.
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl text-pretty">
                Follow the campaign, learn more about Edgar&apos;s public-service record, and stay
                informed about activities in Barangay Tabon.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button href="#updates" variant="primary">
                  Follow Updates
                </Button>
                <Button href="#for-tabon" variant="outline-light">
                  Vision for Tabon
                </Button>
              </div>
              <p className="mt-8 text-xs text-white/40">
                Official contact channels will be published here once verified.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}