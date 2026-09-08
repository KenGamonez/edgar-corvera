import { getSurveys } from "../data";
import {
  EmptyState,
  PageHeader,
  SectionLabel,
  StatCard,
} from "../shared";
import { fmtDateTime } from "../../lib/adminStore";

export default function Survey() {
  const surveys = getSurveys();

  const ranks = new Map<string, number>();
  for (const s of surveys) {
    const p = "priority" in s ? String(s.priority) : "";
    ranks.set(p, (ranks.get(p) ?? 0) + 1);
  }
  const ranking = [...ranks.entries()].sort((a, b) => b[1] - a[1]);
  const maxRank = ranking[0]?.[1] ?? 0;

  return (
    <>
      <PageHeader eyebrow="Insight" title="Community survey">
        <span className="amono">{surveys.length} responses</span>
      </PageHeader>

      <section className="astats" aria-label="Survey summary">
        <StatCard label="Total responses" value={surveys.length} tone="blue" />
        <StatCard
          label="Priorities captured"
          value={ranking.length}
          note={surveys.length === 0 ? "Wait for responses" : "Distinct priorities named"}
        />
        <StatCard
          label="Areas represented"
          value="—"
          note="Area is not part of the survey form yet"
        />
      </section>

      <SectionLabel>Priority rankings</SectionLabel>
      {surveys.length === 0 ? (
        <EmptyState
          title="No survey responses yet"
          detail="Rankings, trends, and charts appear here only once residents respond through the For Tabon hub."
        />
      ) : (
        <div className="acard">
          <div className="acard__body" style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {ranking.map(([priority, count]) => (
              <div key={priority}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.82rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span style={{ fontWeight: 600, color: "var(--aink)" }}>
                    {priority || "Unspecified"}
                  </span>
                  <span className="amono">{count} {count === 1 ? "response" : "responses"}</span>
                </div>
                <div
                  style={{
                    height: "6px",
                    borderRadius: "999px",
                    background: "var(--abg)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(count / maxRank) * 100}%`,
                      background: "var(--ablue)",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            ))}
            <p className="amuted" style={{ fontSize: "0.78rem" }}>
              Rankings are computed from real responses only. "Areas represented"
              needs an area field added to the public survey before it can display.
            </p>
          </div>
        </div>
      )}

      {surveys.length > 0 && (
        <>
          <SectionLabel>Latest responses</SectionLabel>
          <div className="astack">
            {surveys.slice(0, 8).map((s) => (
              <div key={s.ref} className="arow">
                <div className="arow__main" style={{ gridTemplateColumns: "minmax(10rem,1fr) 8rem" }}>
                  <div>
                    <p className="arow__title">{"priority" in s ? String(s.priority) : ""}</p>
                    <p className="arow__sub">{s.ref}</p>
                  </div>
                  <div className="arow__cell">{fmtDateTime(s.submittedAt)}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}