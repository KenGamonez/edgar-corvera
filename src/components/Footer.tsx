import { Logo } from './Logo'
import { WaveMotif, StarMotif } from './Motifs'
import { brand, disclaimers, navLinks } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-charcoal text-white" aria-labelledby="footer-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 0% 100%, rgba(18,63,154,0.4), transparent 50%), radial-gradient(ellipse 30% 30% at 100% 0%, rgba(201,31,43,0.15), transparent 45%)',
        }}
      />

      <div className="section-pad relative pt-20 pb-10 sm:pt-28">
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <Logo size="lg" variant="dark" />
              <h2
                id="footer-heading"
                className="mt-8 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.035em]"
              >
                EDGAR
                <br />
                CORVERA
              </h2>
              <p className="mt-5 text-lg text-white/55">{brand.title}</p>
              <p className="mt-2 text-white/40">{brand.location}</p>
              <div className="mt-8 max-w-xs">
                <WaveMotif className="w-full" />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:items-end lg:text-right">
              <nav aria-label="Footer">
                <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="micro-label text-white/50 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#connect"
                      className="micro-label text-red transition-colors hover:text-gold"
                    >
                      Connect
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="space-y-3">
                <p className="micro-label flex items-center gap-2 text-gold lg:justify-end">
                  <StarMotif className="h-3 w-3" animated={false} />
                  {disclaimers.demo}
                </p>
                <p className="text-sm text-white/35">
                  {brand.election}
                  <span className="mx-2 text-white/20">·</span>
                  {year}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/30">
              © {year} Edgar Corvera Campaign Concept. Presentation website.
            </p>
            <p className="text-xs text-white/25">
              Surigao del Sur, Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
