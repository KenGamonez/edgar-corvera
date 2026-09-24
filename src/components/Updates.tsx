import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import "./updates.css";

const ITEMS: {
  cat: string;
  date: string;
  title: string;
  summary: string;
}[] = [];

export default function Updates() {
  const { t } = useLang();
  return (
    <section className="updates section" id="updates" aria-labelledby="updates-title">
      <div className="container">
        <div className="updates__head">
          <div>
            <p className="eyebrow" data-reveal>
              {t.updates.eyebrow}
            </p>
            <h2 className="updates__title" id="updates-title" data-reveal>
              {t.updates.title}
            </h2>
          </div>
          <Reveal as="p" className="updates__note" delay={120}>
            {t.updates.note}
          </Reveal>
        </div>

        {ITEMS.length > 0 ? (
          <ul className="updates__list">
            {ITEMS.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <a className="updates__item" href="#media">
                  <span className="updates__item-meta">
                    <span className="updates__item-cat">{item.cat}</span>
                    <span className="updates__item-date">{item.date}</span>
                  </span>
                  <span className="updates__item-body">
                    <span className="updates__item-title">{item.title}</span>
                    <span className="updates__item-summary">{item.summary}</span>
                  </span>
                  <span className="updates__item-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="updates__empty" delay={80}>
            <span className="updates__empty-label">{t.updates.emptyLabel}</span>
            <p className="updates__empty-text">{t.updates.emptyText}</p>
            <span className="updates__empty-meta">{t.updates.emptyMeta}</span>
          </Reveal>
        )}

        <Reveal as="p" className="updates__status" delay={100}>
          {t.updates.status}
        </Reveal>
      </div>
    </section>
  );
}