type LogoProps = {
  className?: string
  variant?: 'dark' | 'light' | 'frame'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  alt?: string
}

const sizes = {
  sm: 'h-14 w-auto sm:h-14',
  md: 'h-12 w-auto sm:h-[3.25rem]',
  lg: 'h-16 w-auto sm:h-[4.5rem] md:h-[5.25rem]',
  xl: 'h-24 w-auto sm:h-[8.5rem] md:h-[10rem]',
} as const

/**
 * Primary campaign brand mark.
 * Asset: /logo.png (from "Egar Corvera Logo.png" â€” filename typo preserved)
 * Horizontal proportions respected â€” never stretched.
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
    <span className="inline-flex items-center justify-center overflow-hidden p-0">
      {img}
    </span>
  )
}




