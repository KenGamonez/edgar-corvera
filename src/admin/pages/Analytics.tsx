import {
  EmptyState,
  PageHeader,
  SectionLabel,
} from "../shared";

const METRICS = [
  "Website visitors",
  "Page views",
  "Traffic sources",
  "Volunteer registrations",
  "Community concerns",
  "Questions",
  "Survey participation",
  "Update performance",
  "Social referral traffic",
];

export default function Analytics() {
  return (
    <>
      <PageHeader eyebrow="Insight" title="Analytics">
        <span className="amono">No data source connected</span>
      </PageHeader>

      <EmptyState
        title="Analytics will appear here once a data source is connected"
        detail="This page is prepared to surface website visitors, page views, traffic sources, volunteer registrations, community concerns, questions, survey participation, update performance, and social referral traffic. Nothing is displayed until a real analytics connection exists."
      />

      <SectionLabel>Metrics the dashboard is shaped around</SectionLabel>
      <div className="acard">
        <div className="acard__body">
          <ul className="astack">
            {METRICS.map((m) => (
              <li
                key={m}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.84rem",
                  color: "var(--a2)",
                  paddingBottom: "0.6rem",
                  borderBottom: "1px solid var(--aline)",
                }}
              >
                <span>{m}</span>
                <span className="amono">No data</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}