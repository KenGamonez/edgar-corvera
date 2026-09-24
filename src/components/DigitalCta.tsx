import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import "./digital-cta.css";

export default function DigitalCta() {
  const { t } = useLang();
  return (
    <section className="dcta section" aria-labelledby="dcta-title">
      <div className="container dcta__grid">
        <div>
          <Reveal as="p" className="eyebrow" delay={0}>
            {t.digitalCta.eyebrow}
          </Reveal>
          <Reveal as="h2" className="dcta__title" id="dcta-title" delay={80}>
            {t.digitalCta.titleLine1}
            <br />
            <span className="dcta__accent">{t.digitalCta.titleLine2}</span>
          </Reveal>
          <Reveal as="p" className="dcta__sub" delay={160}>
            {t.digitalCta.sub}
          </Reveal>
          <Reveal className="dcta__actions" delay={220}>
            <a href="/digital-campaign" className="dcta__btn">
              {t.digitalCta.cta} →
            </a>
          </Reveal>
        </div>
        <Reveal className="dcta__meta-panel" variant="right" delay={120}>
          <ul className="dcta__meta">
            {t.digitalCtaMeta.map((m) => (
              <li key={m.label}>
                <span className="dcta__meta-label">{m.label}</span>
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
          <p className="dcta__note">{t.digitalCta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
