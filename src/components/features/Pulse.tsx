import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

export default function Pulse() {
  const { t } = useLang();
  return (
    <div className="feat" id="feat-pulse">
      <p className="feat__eyebrow">{t.featPulse.eyebrow}</p>
      <h3 className="feat__title">{t.featPulse.title}</h3>
      <p className="feat__intro">{t.featPulse.intro}</p>

      <div className="feat__body">
        <div className="feat__columns">
          {t.pulseSlots.map((slot) => (
            <div className="feat__card" key={slot.label}>
              <p className="feat__card-title">{slot.label}</p>
              <span className="status-tag">{slot.note}</span>
            </div>
          ))}
        </div>

        <div className="empty">
          <span className="empty__label">{t.featPulse.emptyLabel}</span>
          <p className="empty__text">{t.featPulse.emptyText}</p>
          <span className="empty__meta">{t.featPulse.emptyMeta}</span>
        </div>
      </div>
    </div>
  );
}
