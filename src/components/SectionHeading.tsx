import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
        >
          <span className="inline-block h-px w-8 bg-red" aria-hidden="true" />
          <p className="micro-label text-red">{eyebrow}</p>
        </div>
      )}
      <h2
        className={`font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.005em] text-balance ${
          dark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
            dark ? 'text-white/60' : 'text-charcoal/60'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}