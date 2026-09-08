import "./features.css";

const AREAS = [
  {
    title: "Public projects",
    note: "Community projects and their status will be shared here.",
  },
  {
    title: "Project progress",
    note: "Verified progress updates will be published here.",
  },
  {
    title: "Reports",
    note: "Public reports will be made available here.",
  },
  {
    title: "Public documents",
    note: "Public documents will be published here.",
  },
  {
    title: "Accomplishments",
    note: "Documented accomplishments will be shown here, with sources.",
  },
  {
    title: "Community priorities",
    note: "Priorities set with the community will be listed here as they are finalized.",
  },
];

export default function OpenTabon() {
  return (
    <div className="feat" id="feat-open-tabon">
      <p className="feat__eyebrow">Feature 08 · Open Tabon</p>
      <h3 className="feat__title">Open Tabon</h3>
      <p className="feat__intro">
        Transparency is the operating policy of this platform: public
        information is shared plainly — projects, progress, reports,
        documents, accomplishments, and the priorities the community has set.
        Nothing is published here that is not verified, and nothing is hidden
        that is public.
      </p>

      <div className="feat__body">
        <div className="feat__columns">
          {AREAS.map((a) => (
            <div className="feat__card" key={a.title}>
              <p className="feat__card-title">{a.title}</p>
              <p className="empty__text">{a.note}</p>
              <span className="empty__meta" style={{ display: "block", marginTop: "0.8rem" }}>
                Nothing published yet
              </span>
            </div>
          ))}
        </div>

        <div className="empty">
          <span className="empty__label">Open Tabon</span>
          <p className="empty__text">
            Verified public documents, project progress, and community
            priorities will be shared here.
          </p>
          <span className="empty__meta">Ready for public records</span>
        </div>
      </div>
    </div>
  );
}