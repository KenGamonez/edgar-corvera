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
              title={<span id="media-heading">In the community.</span>}
              description="Documentary photography of community life, public service, and everyday moments in Tabon."
            />
          </Reveal>

          <div className="mt-14 grid auto-rows-fr gap-4 sm:gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
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
                    className="absolute inset-0 bg-charcoal transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <span className="micro-label text-red">{item.category}</span>
                      <span
                        className="mt-1 h-5 w-5 border-r-2 border-t-2 border-red opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="mb-3 h-1 w-0 bg-red transition-all duration-500 group-hover:w-12" />
                      <p className="font-display text-xl font-bold uppercase tracking-tight text-white opacity-70 transition-opacity duration-400 group-hover:opacity-100 sm:text-2xl">
                        {item.caption}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}