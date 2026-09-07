import { Logo } from './Logo'
import { brand, navLinks } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-heading">
      <div className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 border-t border-white/10 pb-14 pt-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <a
                href="#top"
                aria-label="Edgar Corvera — back to top"
                className="inline-block border border-white/10 bg-white p-4 sm:p-5"
              >
                <Logo size="md" className="h-14 w-auto sm:h-16" />
              </a>
              <h2
                id="footer-heading"
                className="mt-8 font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-[0.002em] sm:text-5xl"
              >
                Edgar
                <br />
                Corvera
              </h2>
              <p className="mt-3 text-lg text-white/55">{brand.title}</p>
              <p className="mt-1 text-white/40">{brand.location}</p>
            </div>

            <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:items-end lg:text-right">
              <nav aria-label="Footer">
                <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="micro-label text-white/50 transition-colors duration-300 hover:text-red"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#connect"
                      className="micro-label text-red transition-colors duration-300 hover:text-white"
                    >
                      Connect
                    </a>
                  </li>
                </ul>
              </nav>

              <ul className="space-y-2 text-sm text-white/45">
                <li>{brand.election}</li>
                <li>{brand.province}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">© {year} Edgar Corvera Campaign</p>
            <p className="text-xs text-white/30">Election and legislative figures subject to verification.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}