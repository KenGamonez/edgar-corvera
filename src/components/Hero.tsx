import { useEffect } from "react";
import type { CSSProperties } from "react";
import "./hero.css";

export default function Hero() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const panel = document.querySelector<HTMLElement>(".hero__panel");
      if (!panel) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 6;
      const y = (e.clientY / innerHeight - 0.5) * 6;
      panel.style.setProperty("--px", `${x.toFixed(2)}px`);
      panel.style.setProperty("--py", `${y.toFixed(2)}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__wash" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__meta">
          <p className="hero__mono">Bislig City · Surigao del Sur</p>
          <p className="hero__mono hero__mono--right">
            Public service, in the open
          </p>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__overline" data-reveal>
              Edgar Corvera
            </p>
            <h1
              className="hero__title"
              data-reveal="up"
              style={{ "--reveal-delay": "60ms" } as CSSProperties}
            >
              Honest work,
              <br />
              for the people
              <br />
              <span className="hero__title-accent">of Tabon.</span>
            </h1>
            <p
              className="hero__lede"
              data-reveal="up"
              style={{ "--reveal-delay": "140ms" } as CSSProperties}
            >
              Public service is measured not by position, but by the work, and
              by the trust of the people who receive it. This site is offered
              in that spirit — open, careful, and accountable.
            </p>

            <div
              className="hero__actions"
              data-reveal="up"
              style={{ "--reveal-delay": "220ms" } as CSSProperties}
            >
              <a className="hero__btn hero__btn--solid" href="#public-service">
                The record of service
              </a>
              <a className="hero__btn hero__btn--ghost" href="#for-tabon">
                For Tabon
              </a>
            </div>
          </div>

          <div className="hero__panel" data-reveal="right" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <div className="hero__panel-frame">
              <img
                className="hero__logo"
                src="/brand/logo.png"
                alt="Edgar Corvera"
                width={1983}
                height={793}
              />
              <span className="hero__panel-line" />
              <p className="hero__panel-caption">
                Barangay Tabon · Bislig City · Surigao del Sur
              </p>
            </div>
            <span className="hero__panel-corner hero__panel-corner--tl" aria-hidden="true" />
            <span className="hero__panel-corner hero__panel-corner--br" aria-hidden="true" />
          </div>
        </div>

        <div className="hero__footer">
          <p className="hero__mono">Edgar Corvera · Electrical Engineer</p>
          <p className="hero__mono hero__mono--right">
            For the people of Barangay Tabon
          </p>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-rule" />
      </a>
    </section>
  );
}