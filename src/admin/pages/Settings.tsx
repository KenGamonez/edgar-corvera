import { PageHeader, SectionLabel } from "../shared";

export default function Settings() {
  return (
    <>
      <PageHeader eyebrow="System" title="Settings">
        <span className="amono">Interface preferences &amp; profile</span>
      </PageHeader>

      <SectionLabel>Profile</SectionLabel>
      <div className="acard">
        <div className="acard__body">
          <div className="aform">
            <div className="aform-row">
              <div className="afield">
                <label className="afield__label" htmlFor="set-name">Display name</label>
                <input id="set-name" className="ainput" defaultValue="Campaign team" />
              </div>
              <div className="afield">
                <label className="afield__label" htmlFor="set-email">Email</label>
                <input id="set-email" className="ainput" type="email" defaultValue="team@campaign.ph" />
              </div>
            </div>
          </div>
          <p className="amuted" style={{ marginTop: "0.8rem", fontSize: "0.76rem" }}>
            Profile values are local placeholders. Connected authentication will
            govern identity and permissions.
          </p>
        </div>
      </div>

      <SectionLabel>Security</SectionLabel>
      <div className="acard">
        <div className="acard__body">
          <p className="amuted" style={{ fontSize: "0.86rem", lineHeight: 1.7 }}>
            Authentication is not connected in this build, so there are no
            session, password, or two-factor settings to configure here yet.
            Once Supabase auth is wired up, sign-in, session handling, and
            password recovery will be managed through the account controls that
            appear here.
          </p>
        </div>
      </div>

      <SectionLabel>Data</SectionLabel>
      <div className="acard">
        <div className="acard__body">
          <p className="amuted" style={{ fontSize: "0.86rem", lineHeight: 1.7 }}>
            Today the operations workspace persists to this browser via
            localStorage so the workflow can be exercised end to end. Migrating
            to Supabase (with Row Level Security) moves records to per-table
            storage shared across the team.
          </p>
        </div>
      </div>
    </>
  );
}