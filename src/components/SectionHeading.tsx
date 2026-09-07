import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  dark?: boolean
  center?: boolean
  className?: string
}

/**
 * Editorial section header: red-line eyebrow, oversize condensed display title,
 * optional red rule and supporting description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow micro-label mb-6 ${
            center ? 'justify-center' : ''
          } ${dark ? 'text-white/50' : 'text-charcoal/55'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] text-balance ${
          dark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-pretty ${
            dark ? 'text-white/55' : 'text-charcoal/60'
          } ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}