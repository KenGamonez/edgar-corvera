import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary: 'bg-red text-white hover:bg-[#a81a24] active:bg-[#961821]',
  secondary: 'bg-charcoal text-white hover:bg-black active:bg-black',
  ghost:
    'bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal/60 hover:bg-charcoal/[0.03]',
  'outline-light':
    'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.68rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      <span
        className="inline-block opacity-70 transition-transform duration-300 group-hover:translate-x-1"
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