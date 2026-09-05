import { Reveal } from './Reveal'
import { Button } from './Button'
import { WaveMotif, AccentCluster } from './Motifs'
import { DemoBadge } from './DemoBadge'

export function Connect() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
      aria-labelledby="connect-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(18,63,154,0.06), transparent 70%)',
        }}
      />

      <div className="section-pad relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mb-6 flex justify-center">
                <DemoBadge />
              </div>
              <p className="micro-label text-blue mb-5">Connect</p>
              <h2
                id="connect-heading"
                className="font-display text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-charcoal"
              >
                STAY
                <br />
                CONNECTED
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mx-auto mt-8 flex max-w-sm justify-center">
                <WaveMotif className="w-full" />
              </div>
              <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-charcoal/65 sm:text-lg">
                Follow updates, learn more about Edgar&apos;s public-service record, and stay
                informed about activities in Barangay Tabon.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    /* Placeholder — no social URL invented */
                  }}
                >
                  Connect
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    /* Placeholder — no email invented */
                  }}
                >
                  Send a Message
                </Button>
              </div>
              <p className="mt-8 text-xs text-charcoal/40">
                Contact channels intentionally omitted — to be added with verified details.
              </p>
              <div className="mt-10 flex justify-center">
                <AccentCluster />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
