import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ImagePlaceholder } from './ImagePlaceholder'
import { SunMotif } from './Motifs'
import { about, brand } from '../data/content'

const bioPoints = [
  { label: 'Education', value: about.education },
  { label: 'Profession', value: about.profession },
  { label: 'Industry', value: about.previousRole },
  { label: 'Public service', value: about.publicService },
]

export function About() {
  return (
    <section id="about" className="relative bg-soft py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Biography"
              title={
                <span id="about-heading">
                  MEET
                  <br />
                  EDGAR
                </span>
              }
              showAccent
            />
          </Reveal>

          <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <Reveal className="relative lg:col-span-5" delay={0.05}>
              <ImagePlaceholder
                label="Official Portrait"
                aspect="portrait"
                tone="charcoal"
                className="shadow-[var(--shadow-soft)]"
              />
              <div className="absolute -bottom-4 -right-4 hidden sm:block" aria-hidden="true">
                <SunMotif className="h-12 w-12 opacity-90" />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:pt-4" delay={0.1}>
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-charcoal sm:text-4xl">
                Electrical Engineer. Public Servant. Experienced Leader.
              </p>
              <p className="mt-8 text-base leading-relaxed text-charcoal/70 sm:text-lg">
                An electrical engineer and public servant with project-management experience and multiple
                terms as Bislig City councilor — now seeking to serve Barangay Tabon as Barangay
                Captain.
              </p>
              <div className="mt-10 space-y-5 border-t border-charcoal/10 pt-8">
                <div>
                  <p className="micro-label text-charcoal/40">Education</p>
                  <p className="mt-2 font-medium">{about.education}</p>
                </div>
                <div>
                  <p className="micro-label text-charcoal/40">Background</p>
                  <p className="mt-2 font-medium">{about.profession}</p>
                  <p className="mt-1 text-charcoal/65">{about.previousRole}</p>
                </div>
                <div>
                  <p className="micro-label text-charcoal/40">Public Service</p>
                  <p className="mt-2 font-medium">{about.publicService}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
