import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import "./nav.css";

const LINK_IDS = [
  "about",
  "public-service",
  "for-tabon",
  "updates",
  "media",
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const onHome =
    typeof window !== "undefined" && window.location.pathname === "/";

  const linkLabels: Record<(typeof LINK_IDS)[number], string> = {
    about: t.nav.about,
    "public-service": t.nav.publicService,
    "for-tabon": t.nav.forTabon,
    updates: t.nav.updates,
    media: t.nav.media,
  };
  const links = LINK_IDS.map((id) => ({ id, label: linkLabels[id] }));

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`nav ${scrolled || open ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}
    >
      <a className="nav__skip" href="#main">
        {t.a11y.skipToContent}
      </a>
      <div className="container nav__inner">
        <a href={onHome ? "#top" : "/"} className="nav__brand" onClick={() => setOpen(false)}>
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
          <span className="visually-hidden">
            {open ? t.a11y.closeMenu : t.a11y.openMenu}
          </span>
        </button>

        <nav
          id="nav-menu"
          className={`nav__menu ${open ? "nav__menu--open" : ""}`}
          aria-label={t.a11y.primaryNav}
        >
          <ul className="nav__links">
            {links.map((link, i) => (
              <li key={link.id}>
                <a
                  className="nav__link"
                  href={onHome ? `#${link.id}` : `/#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav__num">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__cta">
            <LanguageToggle />
            <a
              href="/volunteer"
              className="nav__join"
              onClick={() => setOpen(false)}
            >
              {t.nav.joinTeam}
            </a>
            <a
              href="/admin/login"
              className="nav__login"
              onClick={() => setOpen(false)}
            >
              {t.nav.teamLogin}
            </a>
          </div>

          <div className="nav__menu-foot">
            <span>Edgar Corvera</span>
            <span>Barangay Tabon · Bislig City · Surigao del Sur</span>
          </div>
        </nav>
      </div>
    </header>
  );
}