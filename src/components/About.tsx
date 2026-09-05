import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ImagePlaceholder } from './ImagePlaceholder'
import { SunMotif } from './Motifs'
import { about, brand } from '../data/content'

const bioPoints = [
  { label: 'Full name', value: brand.fullName },
  { label: 'Known as', value: brand.knownAs },
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
                sublabel="Editorial portrait slot — not a likeness placeholder of Edgar"
                aspect="portrait"
                tone="charcoal"
                replaceHint="public/images/about-portrait.jpg"
                className="shadow-[var(--shadow-soft)]"
              />
              <div className="absolute -bottom-4 -right-4 hidden sm:block" aria-hidden="true">
                <SunMotif className="h-12 w-12 opacity-90" />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-4 lg:pt-4" delay={0.1}>
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-charcoal sm:text-4xl">
                {brand.fullName}
              </p>
              <p className="mt-3 text-blue">{brand.knownAs}</p>
              <p className="mt-8 text-base leading-relaxed text-charcoal/70 sm:text-lg">
                An engineering-minded public servant with project-management experience and multiple
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
              </div>
            </Reveal>

            <Reveal className="lg:col-span-3" delay={0.15}>
              <div className="border border-charcoal/10 bg-white p-6 sm:p-7">
                <p className="micro-label text-gold mb-6">Profile</p>
                <ol className="space-y-0">
                  {bioPoints.map((point, i) => (
                    <li
                      key={point.label}
                      className="border-b border-charcoal/8 py-4 last:border-0 last:pb-0 first:pt-0"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-display text-xs text-blue/50 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="micro-label text-charcoal/40">{point.label}</p>
                          <p className="mt-1.5 text-sm leading-snug text-charcoal/85">{point.value}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
