import { Reveal } from './Reveal'
import { Button } from './Button'
import { Sun } from './Sun'
import { brand } from '../data/content'

export function Connect() {
  return (
    <section id="connect" className="bg-navy text-white" aria-labelledby="connect-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Sun className="mx-auto h-16 w-16" />
              <p className="micro-label mt-6 text-gold">{brand.election}</p>
              <h2
                id="connect-heading"
                className="mt-4 font-display text-[clamp(3rem,11vw,7rem)] uppercase leading-[0.9] tracking-[0.01em]"
              >
                Stay<br />connected.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg text-pretty">
                Follow the campaign, learn more about Edgar&apos;s public-service record, and stay
                informed about activities in Barangay Tabon.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="#updates" variant="red">
                  Follow Updates
                </Button>
                <Button href="#for-tabon" variant="gold">
                  Vision for Tabon
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/45">
                Official contact channels will be published here once verified.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}