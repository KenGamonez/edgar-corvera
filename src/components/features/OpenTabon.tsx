import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

export default function OpenTabon() {
  const { t } = useLang();
  return (
    <div className="feat" id="feat-open-tabon">
      <p className="feat__eyebrow">{t.featOpen.eyebrow}</p>
      <h3 className="feat__title">{t.featOpen.title}</h3>
      <p className="feat__intro">{t.featOpen.intro}</p>

      <div className="feat__body">
        <div className="feat__columns">
          {t.openAreas.map((a) => (
            <div className="feat__card" key={a.title}>
              <p className="feat__card-title">{a.title}</p>
              <p className="empty__text">{a.note}</p>
              <span className="empty__meta" style={{ display: "block", marginTop: "0.8rem" }}>
                {t.featOpen.nothingYet}
              </span>
            </div>
          ))}
        </div>

        <div className="empty">
          <span className="empty__label">{t.featOpen.emptyLabel}</span>
          <p className="empty__text">{t.featOpen.emptyText}</p>
          <span className="empty__meta">{t.featOpen.emptyMeta}</span>
        </div>
      </div>
    </div>
  );
}
