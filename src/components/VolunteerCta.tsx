import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import "./volunteer-cta.css";

export default function VolunteerCta() {
  const { t } = useLang();
  return (
    <section className="volcta section" aria-labelledby="volcta-title">
      <div className="container volcta__grid">
        <div>
          <Reveal as="p" className="eyebrow" delay={0}>
            {t.volunteerCta.eyebrow}
          </Reveal>
          <Reveal as="h2" className="volcta__title" id="volcta-title" delay={80}>
            {t.volunteerCta.titleLine1}
            <br /> {t.volunteerCta.titleLine2}
          </Reveal>
          <Reveal as="p" className="volcta__sub" delay={160}>
            {t.volunteerCta.sub}
          </Reveal>
          <Reveal className="volcta__actions" delay={220}>
            <a href="/volunteer" className="volcta__btn">
              {t.volunteerCta.cta} →
            </a>
          </Reveal>
        </div>
        <Reveal className="volcta__meta-panel" variant="right" delay={120}>
          <ul className="volcta__meta">
            {t.volunteerCtaMeta.map((m) => (
              <li key={m.label}>
                <span className="volcta__meta-label">{m.label}</span>
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
          <p className="volcta__note">{t.volunteerCta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}