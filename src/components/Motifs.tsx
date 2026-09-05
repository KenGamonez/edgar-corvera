type MotifProps = {
  className?: string
  animated?: boolean
}

/** Abstract flowing blue/red wave from the campaign logo */
export function WaveMotif({ className = '', animated = true }: MotifProps) {
  return (
    <svg
      viewBox="0 0 400 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'wave-animate' : ''} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 22 C80 22 120 6 200 8 C280 10 320 20 398 4"
        stroke="#123F9A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M2 22 C80 22 120 6 200 8 C280 10 320 20 398 4"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform="translate(0 3)"
        opacity="0.9"
      />
      <path
        d="M2 22 C80 22 120 6 200 8 C280 10 320 20 398 4"
        stroke="#C91F2B"
        strokeWidth="3.5"
        strokeLinecap="round"
        transform="translate(0 6)"
      />
    </svg>
  )
}

/** Thin wave divider for section transitions */
export function WaveDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`section-pad overflow-hidden ${className}`} aria-hidden="true">
      <div className="container-site">
        <WaveMotif className="w-full max-w-md opacity-90" />
      </div>
    </div>
  )
}

/** Golden Philippine sun accent — rare, premium */
export function SunMotif({ className = '', animated = true }: MotifProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'sun-animate' : ''} ${className}`}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="7" fill="#F6B52E" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x1 = 24 + Math.cos(angle) * 11
        const y1 = 24 + Math.sin(angle) * 11
        const x2 = 24 + Math.cos(angle) * 20
        const y2 = 24 + Math.sin(angle) * 20
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F6B52E"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

/** Small gold star accents */
export function StarMotif({
  className = '',
  animated = true,
  delay = 0,
}: MotifProps & { delay?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="#F6B52E"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'star-animate' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      aria-hidden="true"
    >
      <path d="M8 1.2l1.7 4.4 4.7.4-3.6 3.1 1.1 4.6L8 11.4l-4 2.3 1.1-4.6L1.6 6l4.7-.4L8 1.2z" />
    </svg>
  )
}

export function AccentCluster({ className = '' }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center gap-2 ${className}`} aria-hidden="true">
      <SunMotif className="h-7 w-7" />
      <StarMotif className="absolute -right-1 -top-1 h-3 w-3" delay={0.4} />
      <StarMotif className="absolute -bottom-0.5 left-0 h-2.5 w-2.5" delay={1.1} />
    </div>
  )
}
