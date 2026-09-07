import { Reveal } from './Reveal'
import { Button } from './Button'

export function Connect() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-charcoal py-24 text-white sm:py-32 lg:py-40"
      aria-labelledby="connect-heading"
    >
      <div className="section-pad relative">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="micro-label mb-6 flex items-center justify-center gap-3 text-red">
                <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
                Connect
              </p>
              <h2
                id="connect-heading"
                className="font-display text-[clamp(3rem,11vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.005em] text-white"
              >
                Stay
                <br />
                connected.
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
                Follow updates, learn more about Edgar&apos;s public-service record, and stay
                informed about activities in Barangay Tabon.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
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
                  variant="outline-light"
                  onClick={() => {
                    /* Placeholder — no email invented */
                  }}
                >
                  Send a Message
                </Button>
              </div>
              <p className="mt-8 text-xs text-white/40">
                Contact channels intentionally omitted — to be added with verified details.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}