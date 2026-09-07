import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'dark' | 'ghost' | 'outline-light'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary: 'bg-red text-white hover:bg-red-deep active:bg-red-deep',
  dark: 'bg-charcoal text-white hover:bg-black active:bg-black',
  ghost:
    'border border-line-strong text-charcoal hover:border-charcoal hover:bg-charcoal/[0.04] active:bg-charcoal/[0.07]',
  'outline-light': 'border border-white/35 text-white hover:border-white hover:bg-white/10',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.72rem] font-bold uppercase leading-none tracking-[0.16em] transition-colors duration-300 ${variants[variant]} ${className}`

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