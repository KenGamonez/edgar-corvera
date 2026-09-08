import { useState } from "react";
import { getAdminState } from "../../lib/adminStore";
import { EmptyState, PageHeader, SectionLabel } from "../shared";
import { fmtDateTime } from "../../lib/adminStore";

export default function Audit() {
  const [entries] = useState(getAdminState().audit);

  return (
    <>
      <PageHeader eyebrow="System" title="Audit log">
        <span className="amono">{entries.length} entries</span>
      </PageHeader>

      {entries.length === 0 ? (
        <EmptyState
          title="No audit entries yet"
          detail="Every team action — publishing content, updating volunteer status, assigning a concern, adding media — is recorded here as the team works. No historical entries are seeded."
        />
      ) : (
        <>
          <SectionLabel>Team activity</SectionLabel>
          <ol className="atimeline">
            {entries.map((e, i) => (
              <li key={i} className="atimeline__item">
                <p className="atimeline__action">{e.action}</p>
                <p className="atimeline__detail">{e.detail}</p>
                <p className="atimeline__time">
                  {e.actor} · {fmtDateTime(e.at)}
                </p>
              </li>
            ))}
          </ol>
          <p className="amuted" style={{ fontSize: "0.76rem", marginTop: "1rem" }}>
            Entries are written locally for the environment until an audit_log
            table is connected with RLS.
          </p>
        </>
      )}
    </>
  );
}