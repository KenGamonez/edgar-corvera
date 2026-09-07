import { Reveal } from './Reveal'
import { about } from '../data/content'

const facts = [
  { label: 'Education', value: about.education },
  { label: 'Background', value: about.previousRole },
  { label: 'Public Service', value: about.publicService },
]

export function About() {
  return (
    <section id="about" className="bg-white" aria-labelledby="about-heading">
      <div className="section-pad">
        <div className="container-site section-y grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
              <span className="absolute left-0 top-0 h-1 w-16 bg-red" aria-hidden="true" />
              <span className="absolute left-6 top-6 micro-label text-white/40">
                Official profile
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-display text-[clamp(9rem,28vw,17rem)] font-extrabold uppercase leading-none tracking-tight text-white/10">
                  EC
                </span>
              </span>
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 p-6 sm:p-8">
                <p className="micro-label text-red">Electrical Engineer</p>
                <p className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-white">
                  Edgar Corvera
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="eyebrow micro-label mb-6 text-red">About Edgar</p>
            <h2
              id="about-heading"
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-charcoal"
            >
              A leader
              <br />
              for Tabon.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/70 text-pretty">
              {about.intro}
            </p>

            <dl className="mt-12 grid gap-0 border-t border-line sm:grid-cols-3">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`border-b border-line py-7 sm:border-b-0 sm:py-8 ${
                    i < facts.length - 1 ? 'sm:border-r sm:pr-6' : ''
                  } ${i > 0 ? 'sm:pl-6' : ''}`}
                >
                  <dt className="micro-label text-charcoal/40">{fact.label}</dt>
                  <dd className="mt-3 font-medium leading-relaxed text-charcoal/80">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex items-center gap-4">
              <span className="red-bar" aria-hidden="true" />
              <span className="micro-label text-charcoal/45">{about.profession}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}