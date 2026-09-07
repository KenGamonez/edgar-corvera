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
    <section id="media" className="bg-white" aria-labelledby="media-heading">
      <div className="section-pad">
        <div className="container-site section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title={<span id="media-heading">In the community.</span>}
              description="Documentary photography of community life, public service, and everyday moments in Tabon."
            />
          </Reveal>

          <div className="mt-16 grid auto-rows-fr gap-4 sm:gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
            {mediaItems.map((item, i) => (
              <Reveal
                key={item.id}
                delay={i * 0.05}
                className={`${aspectMap[item.aspect]} ${
                  item.aspect === 'tall' ? 'md:min-h-[420px]' : ''
                }`}
              >
                <figure className="group relative h-full min-h-[220px] overflow-hidden border border-line bg-charcoal">
                  <div
                    className="absolute inset-0 bg-charcoal transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute right-4 top-4 h-7 w-7 border-r-2 border-t-2 border-red opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="micro-label text-red">{item.category}</span>
                      <span
                        className="font-display text-4xl font-extrabold leading-none tabular text-white/20"
                        aria-hidden="true"
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <span
                        className="mb-4 block h-1 w-0 bg-red transition-all duration-500 group-hover:w-12"
                        aria-hidden="true"
                      />
                      <p className="font-display text-xl font-bold uppercase tracking-tight text-white/75 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                        {item.caption}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="micro-label mt-8 text-charcoal/40">
            Photographic documentation will be added here as official campaign photos become
            available.
          </p>
        </div>
      </div>
    </section>
  )
}