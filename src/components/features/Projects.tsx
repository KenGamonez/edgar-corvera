import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

const STATUSES = ["Planning", "In progress", "Completed"];

const TRACKED = [
  ["Project name", "What the project is and who it serves"],
  ["Location", "Purok, sitio, street, or area"],
  ["Category", "Water, power, roads, structures, programs"],
  ["Status", "Planning · In progress · Completed"],
  ["Timeline", "Start and target dates"],
  ["Progress", "Updates against plan"],
  ["Documentation", "Photos and public documents"],
];

export default function Projects() {
  const { t } = useLang();
  return (
    <div className="feat" id="feat-projects">
      <p className="feat__eyebrow">{t.featProjects.eyebrow}</p>
      <h3 className="feat__title">{t.featProjects.title}</h3>
      <p className="feat__intro">{t.featProjects.intro}</p>

      <div className="feat__body">
        <div className="flow" aria-label={t.featProjects.statusesLabel}>
          {STATUSES.map((s, i) => (
            <div className="flow__step" key={s}>
              <span className="flow__step-n">0{i + 1}</span>
              <span className="flow__step-t">{t.projectStatuses[i]}</span>
            </div>
          ))}
        </div>

        <div className="feat__card">
          <p className="feat__card-title">{t.featProjects.cardTitle}</p>
          <ul className="feat__list">
            {TRACKED.map(([item], i) => (
              <li key={item}>
                <span className="flow__step-n">{t.projectRows[i].label}</span>
                <p className="empty__text">{t.projectRows[i].desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="empty">
          <span className="empty__label">{t.featProjects.emptyLabel}</span>
          <p className="empty__text">{t.featProjects.emptyText}</p>
          <span className="empty__meta">{t.featProjects.emptyMeta}</span>
        </div>
      </div>
    </div>
  );
}
