import { Logo } from './Logo'
import { brand, navLinks } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden bg-black text-white"
      aria-labelledby="footer-heading"
    >
      <div className="section-pad">
        <div className="container-site grid gap-14 border-t border-white/10 pt-16 pb-10 sm:pt-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <a href="#top" className="inline-flex" aria-label="Edgar Corvera home">
              <Logo size="lg" variant="dark" />
            </a>
            <h2
              id="footer-heading"
              className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold uppercase leading-[0.9] tracking-[-0.005em]"
            >
              Edgar
              <br />
              Corvera
            </h2>
            <p className="mt-4 text-lg text-white/55">{brand.title}</p>
            <p className="mt-1 text-white/40">{brand.location}</p>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:items-end lg:text-right">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="micro-label text-white/50 transition-colors hover:text-red"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#connect" className="micro-label text-red transition-colors hover:text-white">
                    Connect
                  </a>
                </li>
              </ul>
            </nav>

            <div className="space-y-3">
              <p className="text-sm text-white/40">
                {brand.election}
                <span className="mx-2 text-white/25">·</span>
                {year}
              </p>
            </div>
          </div>
        </div>

        <div className="container-site flex flex-col gap-2 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">© {year} Edgar Corvera Campaign</p>
          <p className="text-xs text-white/30">Surigao del Sur, Philippines</p>
        </div>
      </div>
    </footer>
  )
}