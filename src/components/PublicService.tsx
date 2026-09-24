import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import "./public-service.css";

const RECORD_NUMS = ["01", "02", "03", "04", "05", "06"] as const;

export default function PublicService() {
  const { t } = useLang();
  return (
    <section
      className="service section"
      id="public-service"
      aria-labelledby="service-title"
    >
      <div className="container">
        <div className="service__head">
          <div>
            <p className="eyebrow" data-reveal>
              {t.publicService.eyebrow}
            </p>
            <h2 className="service__title" id="service-title" data-reveal>
              {t.publicService.titleLine1}
              <br />
              {t.publicService.titleLine2}
            </h2>
          </div>
          <Reveal as="p" className="service__intro" delay={120}>
            {t.publicService.intro}
          </Reveal>
        </div>

        <ol className="service__ledger">
          {t.publicServiceRecords.map((item, i) => (
            <Reveal as="li" className="service__entry" key={RECORD_NUMS[i]} delay={i * 60}>
              <span className="service__entry-n">{RECORD_NUMS[i]}</span>
              <div className="service__entry-body">
                <h3 className="service__entry-area">{item.area}</h3>
                <p className="service__entry-detail">{item.detail}</p>
                <span className="service__entry-tag">{item.tag}</span>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="service__note" delay={120}>
          <span className="service__note-label">{t.publicService.noteLabel}</span>
          <p className="service__note-text">{t.publicService.noteText}</p>
        </Reveal>

        <Reveal className="service__recognition" delay={180}>
          <span className="service__recognition-label">{t.publicService.recogLabel}</span>
          <p className="service__recognition-text">{t.publicService.recogText}</p>
          <span className="service__recognition-state">
            {t.publicService.recogState}
          </span>
        </Reveal>
      </div>
    </section>
  );
}