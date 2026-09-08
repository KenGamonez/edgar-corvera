import { Logo } from './Logo'
import { brand, navLinks } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <div className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 border-t-4 border-red py-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <a
                href="#top"
                aria-label="Edgar Corvera — back to top"
                className="inline-block border-4 border-gold bg-white p-3 sm:p-4"
              >
                <Logo size="md" className="h-12 w-auto sm:h-14" />
              </a>
              <h2
                id="footer-heading"
                className="mt-8 font-display text-4xl uppercase leading-[0.9] tracking-[0.01em] sm:text-5xl"
              >
                Edgar
                <br />
                Corvera
              </h2>
              <p className="mt-3 text-gold">{brand.title}</p>
              <p className="mt-1 text-white/60">{brand.location}</p>
              <p className="mt-1 text-white/40">{brand.province}</p>
            </div>

            <div className="flex flex-col justify-between gap-10 lg:col-span-7 lg:items-end lg:text-right">
              <nav aria-label="Footer">
                <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
                  {navLinks.map((link, i) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="text-base font-semibold text-white/80 transition-colors duration-300 hover:text-red"
                      >
                        <span aria-hidden="true" className="mr-1 text-gold">★</span>
                        {link.label}
                      </a>
                      {i < navLinks.length - 1 && (
                        <span aria-hidden="true" className="ml-8 hidden text-white/20 lg:inline">
                          |
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="w-full lg:max-w-md">
                <h3 className="font-display text-xl uppercase tracking-wide text-gold">Pages</h3>
                <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 border-t border-white/15 pt-4 text-left lg:text-right">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-300 hover:text-red"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">© {year} Edgar Corvera Campaign</p>
            <p className="text-xs text-white/30">
              Election and legislative figures subject to verification.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}