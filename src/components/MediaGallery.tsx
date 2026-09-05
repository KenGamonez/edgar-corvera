import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { mediaItems } from '../data/content'

const aspectMap = {
  wide: 'aspect-[16/10] md:col-span-2',
  tall: 'aspect-[3/4] md:row-span-2',
  square: 'aspect-square',
} as const

export function MediaGallery() {
  return (
    <section id="media" className="bg-soft py-24 sm:py-32" aria-labelledby="media-heading">
      <div className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title={<span id="media-heading">IN THE COMMUNITY</span>}
              description="Asymmetrical documentary gallery — each frame is a replaceable image slot for verified photography."
            />
          </Reveal>

          <div className="mt-14 grid auto-rows-fr gap-4 sm:gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
            {mediaItems.map((item, i) => (
              <Reveal
                key={item.id}
                delay={i * 0.05}
                className={`${aspectMap[item.aspect]} ${
                  item.aspect === 'tall' ? 'md:min-h-[420px]' : ''
                }`}
              >
                <figure className="group relative h-full min-h-[220px] overflow-hidden bg-charcoal">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#2a3036] to-blue/40 transition-transform duration-700 ease-out group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                    aria-hidden="true"
                  />

                  <figcaption className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                    <div className="flex items-start justify-between">
                      <span className="micro-label translate-y-1 text-gold opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        {item.category}
                      </span>
                      <span
                        className="h-6 w-6 border-r border-t border-white/30 opacity-50 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="mb-3 h-px w-0 bg-red transition-all duration-500 group-hover:w-12" />
                      <p className="translate-y-2 font-display text-lg font-medium tracking-tight text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xl">
                        {item.caption}
                      </p>
                      <p className="mt-2 text-[10px] tracking-wider text-white/35 uppercase opacity-0 transition-opacity delay-75 group-hover:opacity-100">
                        Replace · public/images/{item.id}.jpg
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4 border-t border-charcoal/10 pt-8">
              {['Community', 'Public Service', 'Events', 'Documentation'].map((cat) => (
                <span
                  key={cat}
                  className="micro-label border border-charcoal/10 bg-white px-4 py-2 text-charcoal/55"
                >
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
