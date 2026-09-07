type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  alt?: string
}

const sizes = {
  sm: 'h-12 w-auto',
  md: 'h-14 w-auto sm:h-16',
  lg: 'h-20 w-auto sm:h-24',
  xl: 'h-28 w-auto sm:h-32',
  hero: 'h-auto w-full',
} as const

/**
 * Campaign brand mark. Source asset: /logo.png (transparent PNG, multicolor).
 * Proportions are fixed by the intrinsic ratio — the logo is never stretched.
 */
export function Logo({ className = '', size = 'md', alt = 'Edgar Corvera campaign logo' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      width={1200}
      height={480}
      decoding="async"
      draggable={false}
      className={`${sizes[size]} object-contain ${className}`}
    />
  )
}