type LogoProps = {
  className?: string
  variant?: 'dark' | 'light' | 'frame'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  alt?: string
}

const sizes = {
  sm: 'h-8 w-auto sm:h-9',
  md: 'h-10 w-auto sm:h-11',
  lg: 'h-14 w-auto sm:h-16 md:h-[4.5rem]',
  xl: 'h-20 w-auto sm:h-28 md:h-36',
} as const

/**
 * Primary campaign brand mark.
 * Asset: /logo.png (from "Egar Corvera Logo.png" — filename typo preserved)
 * Horizontal proportions respected — never stretched.
 */
export function Logo({
  className = '',
  variant = 'frame',
  size = 'md',
  alt = 'Edgar Corvera campaign logo',
}: LogoProps) {
  const img = (
    <img
      src="/logo.png"
      alt={alt}
      className={`${sizes[size]} max-w-full object-contain object-left ${className}`}
      width={480}
      height={200}
      decoding="async"
    />
  )

  if (variant === 'dark' || variant === 'light') {
    return img
  }

  return (
    <span className="inline-flex items-center justify-center overflow-hidden bg-charcoal p-1 sm:p-1.5">
      {img}
    </span>
  )
}
