import Reveal from "../lib/reveal";
import "./public-service.css";

const RECORD = [
  {
    n: "01",
    area: "Council & legislative work",
    detail:
      "Ordinances, resolutions, and decisions shape how a community is governed. This is public work — studied in public, decided in public, and accountable to the people it serves.",
    tag: "Public responsibility",
  },
  {
    n: "02",
    area: "Infrastructure & public works",
    detail:
      "Roads, drainage, public buildings, and the physical foundations of daily life — the discipline of an engineer who expects structures to be measured, safe, and maintained.",
    tag: "Engineering",
  },
  {
    n: "03",
    area: "Renewable energy & power",
    detail:
      "Clean, dependable electricity for households and public facilities — energy planning that begins from a community’s actual needs, not from headlines.",
    tag: "Engineering",
  },
  {
    n: "04",
    area: "Waterworks & supply",
    detail:
      "Safe, dependable water for households and barangays — the utility a community cannot do without, understood as a service, not as a commodity.",
    tag: "Public responsibility",
  },
  {
    n: "05",
    area: "Budget · ways & means · taxation",
    detail:
      "How public resources are raised, budgeted, and accounted for — discipline that protects every peso that belongs to the community.",
    tag: "Public responsibility",
  },
  {
    n: "06",
    area: "Community welfare & programs",
    detail:
      "Senior citizens, youth, livelihood, health, education, and disaster preparedness — service that runs across the daily concerns of the community.",
    tag: "Community",
  },
];

export default function PublicService() {
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
              Public service
            </p>
            <h2 className="service__title" id="service-title" data-reveal>
              A record of
              <br />
              responsibility.
            </h2>
          </div>
          <Reveal as="p" className="service__intro" delay={120}>
            Public service is measured by the work. These are the areas of
            public life Edgar intends to take responsibility for Barangay
            Tabon — and the specific record behind each is published as it is
            verified.
          </Reveal>
        </div>

        <ol className="service__ledger">
          {RECORD.map((item, i) => (
            <Reveal as="li" className="service__entry" key={item.n} delay={i * 60}>
              <span className="service__entry-n">{item.n}</span>
              <div className="service__entry-body">
                <h3 className="service__entry-area">{item.area}</h3>
                <p className="service__entry-detail">{item.detail}</p>
                <span className="service__entry-tag">{item.tag}</span>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="service__note" delay={120}>
          <span className="service__note-label">On this record</span>
          <p className="service__note-text">
            Specific service details — dates, positions, and responsibilities —
            will be added here as they are verified. Nothing is listed that
            cannot be shown.
          </p>
        </Reveal>

        <Reveal className="service__recognition" delay={180}>
          <span className="service__recognition-label">Recognitions</span>
          <p className="service__recognition-text">
            Documented awards and recognitions will be listed here, together
            with their sources, as they are verified.
          </p>
          <span className="service__recognition-state">
            Nothing published yet
          </span>
        </Reveal>
      </div>
    </section>
  );
}