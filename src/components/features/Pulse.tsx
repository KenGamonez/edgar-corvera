import "./features.css";

const SLOTS = [
  { label: "Top priorities", note: "No data yet" },
  { label: "Survey participation", note: "No data yet" },
  { label: "Community concerns", note: "No data yet" },
  { label: "Recent topics", note: "No data yet" },
];

export default function Pulse() {
  return (
    <div className="feat" id="feat-pulse">
      <p className="feat__eyebrow">Feature 04 · Community pulse</p>
      <h3 className="feat__title">What Tabon is telling us</h3>
      <p className="feat__intro">
        This is the shared view of community feedback — priorities, concerns,
        and topics raised through the features on this page. Numbers are only
        shown when they are real.
      </p>

      <div className="feat__body">
        <div className="feat__columns">
          {SLOTS.map((slot) => (
            <div className="feat__card" key={slot.label}>
              <p className="feat__card-title">{slot.label}</p>
              <span className="status-tag">{slot.note}</span>
            </div>
          ))}
        </div>

        <div className="empty">
          <span className="empty__label">Community pulse</span>
          <p className="empty__text">
            Community responses will appear here as residents participate.
            Nothing is published until the data is verified.
          </p>
          <span className="empty__meta">Awaiting community data</span>
        </div>
      </div>
    </div>
  );
}