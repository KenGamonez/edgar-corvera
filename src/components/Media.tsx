import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import "./media.css";

/** Image assets are invariant; slot labels translate. */
const SLOT_IMGS = [
  "/images/community.png",
  "/images/public-service.png",
  "/images/events.png",
  "/images/activities.png",
  "/images/press.png",
  "/images/video.png",
];

export default function Media() {
  const { t } = useLang();
  return (
    <section className="media section" id="media" aria-labelledby="media-title">
      <div className="container">
        <div className="media__head">
          <div>
            <p className="eyebrow" data-reveal>
              {t.media.eyebrow}
            </p>
            <h2 className="media__title" id="media-title" data-reveal>
              {t.media.title}
            </h2>
          </div>
          <Reveal as="p" className="media__note" delay={120}>
            {t.media.note}
          </Reveal>
        </div>

        <div className="media__grid">
          <Reveal variant="left" className="media__featured" delay={60}>
            <div
              className="media__featured-panel"
              role="img"
              aria-label={t.media.featuredAria}
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
              <span className="media__mono">{t.media.featuredCaption}</span>
              <span className="media__mono">Edgar Corvera — Barangay Tabon</span>
            </span>
          </Reveal>

          <div className="media__stack">
            {t.mediaSlots.map((label, i) => (
              <Reveal className="media__slot" key={SLOT_IMGS[i]} delay={70 + i * 50}>
                <div
                  className="media__slot-inner"
                  role="img"
                  aria-label={`${label} — ${t.media.recordSuffix}`}
                >
                  <img
                    className="media__slot-img"
                    src={SLOT_IMGS[i]}
                    alt=""
                    width={1669}
                    height={942}
                  />
                  <span className="media__slot-label">{label}</span>
                  <span className="media__slot-note">
                    Edgar Corvera — Barangay Tabon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="media__strip" delay={120}>
          <span className="media__strip-label">{t.media.stripLabel}</span>
          <p className="media__strip-text">{t.media.stripText}</p>
          <span className="media__strip-state">{t.media.stripState}</span>
        </Reveal>
      </div>
    </section>
  );
}