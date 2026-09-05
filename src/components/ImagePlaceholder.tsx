type Aspect = 'hero' | 'portrait' | 'editorial' | 'wide' | 'tall' | 'square' | 'gallery'

const aspectClass: Record<Aspect, string> = {
  hero: 'aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]',
  portrait: 'aspect-[3/4]',
  editorial: 'aspect-[16/10]',
  wide: 'aspect-[16/9]',
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  gallery: 'aspect-[4/3]',
}

type ImagePlaceholderProps = {
  label: string
  sublabel?: string
  aspect?: Aspect
  className?: string
  tone?: 'soft' | 'charcoal' | 'blue'
  /** Drop in a real image path later — e.g. "/images/your-file.jpg" */
  src?: string
  alt?: string
}

/**
 * Editorial image placeholder component.
 * Pass `src="/images/your-file.jpg"` to display a real image.
 */
export function ImagePlaceholder({
  label,
  sublabel,
  aspect = 'editorial',
  className = '',
  tone = 'soft',
  src,
  alt,
}: ImagePlaceholderProps) {
  const tones = {
    soft: {
      bg: 'bg-soft',
      title: 'text-charcoal',
      body: 'text-charcoal/55',
    },
    charcoal: {
      bg: 'bg-charcoal',
      title: 'text-white',
      body: 'text-white/55',
    },
    blue: {
      bg: 'bg-blue',
      title: 'text-white',
      body: 'text-white/60',
    },
  }[tone]

  if (src) {
    return (
      <figure className={`relative overflow-hidden ${aspectClass[aspect]} ${className}`}>
        <img
          src={src}
          alt={alt ?? label}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </figure>
    )
  }

  return (
    <figure
      className={`relative overflow-hidden ${aspectClass[aspect]} ${tones.bg} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,38,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,38,42,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue/15"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-0 flex flex-col items-start justify-end p-5 sm:p-7">
        <span
          className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${tones.title}`}
        >
          {label}
        </span>
        {sublabel && (
          <span className={`mt-1 max-w-xs text-sm leading-relaxed ${tones.body}`}>{sublabel}</span>
        )}
      </figcaption>
      <span
        className="absolute right-4 top-4 h-8 w-8 border-r border-t border-gold/60"
        aria-hidden="true"
      />
    </figure>
  )
}
