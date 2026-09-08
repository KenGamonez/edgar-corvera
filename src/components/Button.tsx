import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'red' | 'blue' | 'gold' | 'outline'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  red: 'bg-red text-white hover:opacity-80 active:opacity-70',
  blue: 'bg-blue text-white hover:opacity-80 active:opacity-70',
  gold: 'bg-gold text-navy hover:opacity-85 active:opacity-70',
  outline: 'border border-white/60 text-white hover:border-white hover:bg-white/10',
}

export function Button({
  variant = 'red',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `btn-shadow group inline-flex items-center justify-center gap-3 px-7 py-3.5 font-display text-sm uppercase tracking-[0.12em] transition-all duration-300 ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      <span
        className="inline-block opacity-80 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}