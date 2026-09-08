import { Reveal } from './Reveal'
import { Button } from './Button'
import { brand, about } from '../data/content'

const facts = [
  { label: 'Education', value: about.education },
  { label: 'Profession', value: about.profession },
  { label: 'Background', value: about.previousRole },
  { label: 'Public Service', value: about.publicService },
]

const tiles = [
  { href: '#public-service', label: 'Public Service', index: '01' },
  { href: '#legislative', label: 'Legislative Record', index: '02' },
  { href: '#for-tabon', label: 'For Tabon', index: '03' },
]

export function About() {
  return (
    <section id="about" className="bg-blue text-white" aria-labelledby="about-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="micro-label flex items-center gap-2 text-gold">
                <span aria-hidden="true">★</span>
                {brand.election}
              </p>
              <h2
                id="about-heading"
                className="mt-4 font-display text-[clamp(3.2rem,9vw,7rem)] uppercase leading-[0.9] tracking-[0.01em] text-white"
              >
                Barangay
                <br />
                Captain
              </h2>
              <p className="mt-6 text-base text-gold/90 sm:text-lg">
                {brand.fullName} · {brand.location}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base leading-[1.7] text-white/90 sm:text-lg text-pretty">
                {about.intro}
              </p>

              <ul className="mt-8 space-y-4">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex items-baseline gap-4 border-b border-white/15 pb-3">
                    <span className="micro-label w-40 shrink-0 text-gold">{fact.label}</span>
                    <span className="font-medium text-white/90">{fact.value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#public-service" variant="red">
                  Read More
                </Button>
                <Button href="#for-tabon" variant="gold">
                  Vision for Tabon
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Link tiles — image graphic + navy title bar */}
      <div className="section-pad pb-10 sm:pb-16">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {tiles.map((tile) => (
            <Reveal key={tile.href} delay={0.05}>
              <a href={tile.href} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <span aria-hidden="true" className="absolute inset-0 bg-red" />
                  <span aria-hidden="true" className="clip-blue absolute inset-0 bg-blue" />
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 -top-6 select-none font-display text-[8rem] uppercase leading-none text-white/15 transition-transform duration-500 group-hover:scale-110"
                  >
                    {tile.index}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <span className="font-display text-[5rem] uppercase leading-none tracking-tight text-white/85 transition-colors duration-300 group-hover:text-gold">
                      EC
                    </span>
                  </span>
                </span>
                <span className="block bg-navy text-center font-display text-xl uppercase tracking-wide text-white transition-colors duration-300 group-hover:bg-red sm:text-2xl">
                  <span className="block py-5">{tile.label}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}