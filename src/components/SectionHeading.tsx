import type { ReactNode } from 'react'
import { AccentCluster } from './Motifs'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  showAccent?: boolean
  className?: string
  dark?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  showAccent = false,
  className = '',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
        >
          {showAccent && <AccentCluster />}
          <p
            className={`micro-label ${dark ? 'text-white/55' : 'text-blue'}`}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={`font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance ${
          dark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
            dark ? 'text-white/65' : 'text-charcoal/65'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
