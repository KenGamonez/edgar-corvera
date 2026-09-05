import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-red text-white hover:bg-[#a81a24] active:bg-[#961821]',
  secondary:
    'bg-blue text-white hover:bg-[#0e3480] active:bg-[#0c2d6e]',
  ghost:
    'bg-transparent text-charcoal border border-charcoal/18 hover:border-charcoal/45 hover:bg-charcoal/[0.03]',
  'outline-light':
    'bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/[0.06]',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `group relative inline-flex items-center justify-center gap-3 overflow-hidden px-7 py-3.5 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${variants[variant]} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        className="relative z-10 inline-block translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
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
