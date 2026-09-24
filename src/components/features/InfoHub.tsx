import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

export default function InfoHub() {
  const { t } = useLang();
  return (
    <div className="feat" id="feat-info">
      <p className="feat__eyebrow">{t.featInfo.eyebrow}</p>
      <h3 className="feat__title">{t.featInfo.title}</h3>
      <p className="feat__intro">{t.featInfo.intro}</p>

      <div className="feat__body">
        <div className="feat__columns">
          {t.infoCategories.map((c) => (
            <div className="feat__card" key={c.title}>
              <p className="feat__card-title">{c.title}</p>
              <p className="empty__text">{c.note}</p>
              <span className="empty__meta" style={{ display: "block", marginTop: "0.8rem" }}>
                {t.featInfo.nothingYet}
              </span>
            </div>
          ))}
        </div>

        <div className="empty">
          <span className="empty__label">{t.featInfo.hallLabel}</span>
          <p className="empty__text">{t.featInfo.hallText}</p>
        </div>
      </div>
    </div>
  );
}
