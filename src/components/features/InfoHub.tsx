import "./features.css";

const CATEGORIES = [
  {
    title: "Announcements",
    note: "Official announcements for Barangay Tabon will be posted here.",
  },
  {
    title: "Events",
    note: "Meetings, consultations, and community activities will be listed here.",
  },
  {
    title: "Important contacts",
    note: "Verified contacts for the barangay and public services will be listed here.",
  },
  {
    title: "Emergency information",
    note: "Emergency numbers and procedures will be published here as they are verified.",
  },
  {
    title: "Public services",
    note: "Public services available to residents will be explained here.",
  },
  {
    title: "Community programs",
    note: "Ongoing and upcoming community programs will be shown here.",
  },
  {
    title: "Local resources",
    note: "Local offices, facilities, and useful resources will be compiled here.",
  },
  {
    title: "Useful documents",
    note: "Public documents and reference materials will be made available here.",
  },
];

export default function InfoHub() {
  return (
    <div className="feat" id="feat-info">
      <p className="feat__eyebrow">Feature 05 · Tabon information</p>
      <h3 className="feat__title">Tabon Information</h3>
      <p className="feat__intro">
        A single place for information that residents actually use — contacts,
        announcements, events, services, and resources for Barangay Tabon.
        Category by category, useful information will be published here as it
        is prepared and verified.
      </p>

      <div className="feat__body">
        <div className="feat__columns">
          {CATEGORIES.map((c) => (
            <div className="feat__card" key={c.title}>
              <p className="feat__card-title">{c.title}</p>
              <p className="empty__text">{c.note}</p>
              <span className="empty__meta" style={{ display: "block", marginTop: "0.8rem" }}>
                Nothing published yet
              </span>
            </div>
          ))}
        </div>

        <div className="empty">
          <span className="empty__label">Barangay hall</span>
          <p className="empty__text">
            Barangay Tabon, Bislig City, Surigao del Sur. Official contact
            details of the barangay hall will be published here as they are
            verified.
          </p>
        </div>
      </div>
    </div>
  );
}