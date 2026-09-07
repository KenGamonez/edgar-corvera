type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  variant?: 'raw' | 'tile'
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
 * - 'raw': the transparent multicolor PNG, for light surfaces.
 * - 'tile': the logo placed on a white chip with a thin border — for use over
 *   dark surfaces where the dark elements of the multicolor logo would otherwise
 *   be illegible.
 */
export function Logo({
  className = '',
  size = 'md',
  variant = 'raw',
  alt = 'Edgar Corvera campaign logo',
}: LogoProps) {
  const img = (
    <img
      src="/logo.png"
      alt={alt}
      width={1200}
      height={480}
      decoding="async"
      draggable={false}
      className={`${sizes[size]} object-contain ${variant === 'tile' ? '' : className}`}
    />
  )

  if (variant === 'tile') {
    return (
      <span
        className={`inline-flex items-center justify-center border border-line bg-white p-3 sm:p-4 ${className}`}
      >
        {img}
      </span>
    )
  }

  return img
}