type SunProps = {
  className?: string
}

function rayPoints(i: number) {
  const theta = (i * 45 * Math.PI) / 180
  const spread = (12 * Math.PI) / 180
  const rIn = 19
  const rOut = 47
  const px = (r: number, a: number) => 50 + Math.cos(a) * r
  const py = (r: number, a: number) => 50 + Math.sin(a) * r
  return [
    `${px(rIn, theta).toFixed(2)},${py(rIn, theta).toFixed(2)}`,
    `${px(rOut, theta - spread).toFixed(2)},${py(rOut, theta - spread).toFixed(2)}`,
    `${px(rOut, theta + spread).toFixed(2)},${py(rOut, theta + spread).toFixed(2)}`,
  ].join(' ')
}

export function Sun({ className = '' }: SunProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Golden sun"
      className={className}
    >
      <g fill="#fee000" stroke="#cc172c" strokeWidth="0.5">
        <circle cx="50" cy="50" r="19" />
        {Array.from({ length: 8 }).map((_, i) => (
          <polygon key={i} points={rayPoints(i)} />
        ))}
      </g>
    </svg>
  )
}