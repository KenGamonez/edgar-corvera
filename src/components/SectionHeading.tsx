import type { ReactNode } from 'react'
import { Sun } from './Sun'

type SectionHeadingProps = {
  title: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  rightLink?: { label: string; href: string }
  tone?: 'red' | 'white'
  center?: boolean
  className?: string
  id?: string
}

/**
 * Senatorbonggo-style section header: golden sun ornament, big Anton uppercase
 * title, optional supporting line and a trailing link on the right.
 */
export function SectionHeading({
  title,
  description,
  eyebrow,
  rightLink,
  tone = 'red',
  center = false,
  className = '',
  id,
}: SectionHeadingProps) {
  const titleColor = tone === 'white' ? 'text-white' : 'text-red'

  return (
    <div className={`${className} ${center ? 'text-center' : ''}`} id={id}>
      <div className="flex items-end justify-between gap-6">
        <div className={center ? 'mx-auto' : ''}>
          <Sun className={`h-12 w-12 ${center ? 'mx-auto' : ''} mb-4`} />
          {eyebrow && (
            <p
              className={`micro-label ${tone === 'white' ? 'text-gold' : 'text-blue'} mb-3`}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={`font-display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[0.01em] ${titleColor}`}
          >
            {title}
          </h2>
        </div>
        {rightLink && (
          <a
            href={rightLink.href}
            className={`micro-label hidden shrink-0 items-center gap-2 pb-2 font-bold underline-offset-4 transition-colors duration-300 hover:underline sm:inline-flex ${
              tone === 'white' ? 'text-white/85 hover:text-gold' : 'text-navy hover:text-red'
            }`}
          >
            {rightLink.label}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg text-pretty ${
            tone === 'white' ? 'text-white/75' : 'text-charcoal/70'
          } ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}