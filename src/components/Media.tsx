import Reveal from "../lib/reveal";
import "./media.css";

const CATEGORIES = [
  "Community",
  "Public Service",
  "Events",
  "Activities",
  "Press",
  "Video",
];

export default function Media() {
  return (
    <section className="media section" id="media" aria-labelledby="media-title">
      <div className="container">
        <div className="media__head">
          <div>
            <p className="eyebrow" data-reveal>
              Media
            </p>
            <h2 className="media__title" id="media-title" data-reveal>
              A visual record of public service.
            </h2>
          </div>
          <Reveal as="p" className="media__note" delay={120}>
            Photography, video, and press coverage will be published here as
            they are produced. Nothing is labelled before it exists.
          </Reveal>
        </div>

        <div className="media__grid">
          <Reveal variant="left" className="media__featured" delay={60}>
            <div
              className="media__featured-panel"
              role="img"
              aria-label="Edgar Corvera identity mark"
            >
              <img
                className="media__featured-logo"
                src="/brand/logo.png"
                alt=""
                width={1983}
                height={793}
              />
            </div>
            <span className="media__featured-caption">
              <span className="media__mono">Identity</span>
              <span className="media__mono">Edgar Corvera — Barangay Tabon</span>
            </span>
          </Reveal>

          <div className="media__stack">
            {CATEGORIES.map((cat, i) => (
              <Reveal className="media__slot" key={cat} delay={70 + i * 50}>
                <div className="media__slot-inner" role="img" aria-label={`${cat} — no media published`}>
                  <span className="media__slot-label">{cat}</span>
                  <span className="media__slot-note">
                    No media has been published yet.
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="media__strip" delay={120}>
          <span className="media__strip-label">Press &amp; coverage</span>
          <p className="media__strip-text">
            Press releases and coverage will be archived here, with links to
            their original sources, as they are published.
          </p>
          <span className="media__strip-state">Nothing published yet</span>
        </Reveal>
      </div>
    </section>
  );
}