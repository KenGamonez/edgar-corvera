import { Reveal } from './Reveal'
import { ImagePlaceholder } from './ImagePlaceholder'
import { about } from '../data/content'

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="section-pad">
        <div className="container-site grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-3 top-8 h-[55%] w-[3px] bg-red" aria-hidden="true" />
              <ImagePlaceholder
                label="Official Portrait"
                sublabel={about.profession}
                aspect="portrait"
                tone="charcoal"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <p className="micro-label mb-6 flex items-center gap-3 text-red">
              <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
              About Edgar
            </p>
            <h2
              id="about-heading"
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.005em] text-charcoal"
            >
              A leader
              <br />
              for Tabon.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/70">{about.intro}</p>

            <dl className="mt-10 grid gap-0 border-t border-charcoal/10 sm:grid-cols-3">
              <div className="border-b border-charcoal/10 py-6 sm:border-b-0 sm:border-r sm:py-8 sm:pr-6">
                <dt className="micro-label text-charcoal/40">Education</dt>
                <dd className="mt-3 font-medium">{about.education}</dd>
              </div>
              <div className="border-b border-charcoal/10 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:py-8">
                <dt className="micro-label text-charcoal/40">Background</dt>
                <dd className="mt-3 font-medium">{about.previousRole}</dd>
              </div>
              <div className="py-6 sm:py-8 sm:pl-6">
                <dt className="micro-label text-charcoal/40">Public Service</dt>
                <dd className="mt-3 font-medium">{about.publicService}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}