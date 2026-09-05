export function DemoBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`micro-label inline-flex items-center gap-2 text-gold/90 ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
      Demo / Concept
    </span>
  )
}

/** Fixed corner mark — tasteful, unobtrusive */
export function DemoCorner() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 hidden sm:block">
      <div className="border border-charcoal/10 bg-white/90 px-3 py-2 shadow-[var(--shadow-nav)] backdrop-blur-sm">
        <DemoBadge />
      </div>
    </div>
  )
}
