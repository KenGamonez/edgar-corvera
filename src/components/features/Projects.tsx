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
  return (
    <div className="feat" id="feat-projects">
      <p className="feat__eyebrow">Feature 07 · Community projects</p>
      <h3 className="feat__title">Community Projects</h3>
      <p className="feat__intro">
        The work that affects our community should be visible: what is being
        done, where, with what timeline, and what stage it has reached. Projects
        are tracked plainly — nothing is shown that has not actually happened.
      </p>

      <div className="feat__body">
        <div className="flow" aria-label="Project statuses">
          {STATUSES.map((s, i) => (
            <div className="flow__step" key={s}>
              <span className="flow__step-n">0{i + 1}</span>
              <span className="flow__step-t">{s}</span>
            </div>
          ))}
        </div>

        <div className="feat__card">
          <p className="feat__card-title">How each project will be tracked</p>
          <ul className="feat__list">
            {TRACKED.map(([item, desc]) => (
              <li key={item}>
                <span className="flow__step-n">{item}</span>
                <p className="empty__text">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="empty">
          <span className="empty__label">Community projects</span>
          <p className="empty__text">
            Community projects will be shown here as they are published.
          </p>
          <span className="empty__meta">Nothing published yet</span>
        </div>
      </div>
    </div>
  );
}