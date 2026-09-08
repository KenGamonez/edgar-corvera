import { useEffect, useState } from "react";
import "./nav.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "public-service", label: "Public Service" },
  { id: "for-tabon", label: "For Tabon" },
  { id: "updates", label: "Updates" },
  { id: "media", label: "Media" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`nav ${scrolled || open ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img
            src="/brand/logo.png"
            alt="Edgar Corvera"
            className="nav__logo"
            width={1983}
            height={793}
          />
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav
          id="nav-menu"
          className={`nav__menu ${open ? "nav__menu--open" : ""}`}
          aria-label="Primary"
        >
          <ul className="nav__links">
            {LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  className="nav__link"
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav__num">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}