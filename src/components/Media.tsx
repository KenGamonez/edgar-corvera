import Reveal from "../lib/reveal";
import "./media.css";

const SLOTS = [
  { label: "Community", img: "/images/community.png" },
  { label: "Public Service", img: "/images/public-service.png" },
  { label: "Events", img: "/images/events.png" },
  { label: "Activities", img: "/images/activities.png" },
  { label: "Press", img: "/images/press.png" },
  { label: "Video", img: "/images/video.png" },
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
              aria-label="Edgar Corvera — visual record"
            >
              <img
                className="media__featured-img"
                src="/images/featured.png"
                alt=""
                width={1669}
                height={942}
              />
            </div>
            <span className="media__featured-caption">
              <span className="media__mono">Visual record</span>
              <span className="media__mono">Edgar Corvera — Barangay Tabon</span>
            </span>
          </Reveal>

          <div className="media__stack">
            {SLOTS.map((slot, i) => (
              <Reveal className="media__slot" key={slot.label} delay={70 + i * 50}>
                <div
                  className="media__slot-inner"
                  role="img"
                  aria-label={`${slot.label} — Edgar Corvera record`}
                >
                  <img
                    className="media__slot-img"
                    src={slot.img}
                    alt=""
                    width={1669}
                    height={942}
                  />
                  <span className="media__slot-label">{slot.label}</span>
                  <span className="media__slot-note">
                    Edgar Corvera — Barangay Tabon
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