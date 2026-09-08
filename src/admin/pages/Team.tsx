import { useState } from "react";
import {
  audit,
  getAdminState,
  mutateAdmin,
  newId,
  teamRoles,
} from "../../lib/adminStore";
import type { AdminMember } from "../../lib/adminStore";
import {
  EmptyState,
  Field,
  FormRow,
  GuardNote,
  PageHeader,
  SectionLabel,
  Select,
  TextInput,
} from "../shared";

const ROLE_NOTES: Record<string, string> = {
  ADMINISTRATOR: "Full control of the operations layer and team accounts.",
  "CAMPAIGN ADMIN": "Runs the overall campaign operations workspace.",
  "CONTENT MANAGER": "Writes and publishes website updates and public service records.",
  "MEDIA MANAGER": "Owns the media library pipeline from raw to published.",
  "VOLUNTEER COORDINATOR": "Handles volunteer registrations, statuses, and assignments.",
  "SOCIAL MEDIA MANAGER": "Manages the content calendar and approval workflow.",
};

export default function Team() {
  const [members, setMembers] = useState<AdminMember[]>(getAdminState().team);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>(teamRoles[0]);
  const [error, setError] = useState("");

  const hasFullAccess = (r: string) => r === "ADMINISTRATOR" || r === "CAMPAIGN ADMIN";

  function add() {
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    const member: AdminMember = { id: newId("MEM"), name: name.trim(), email: email.trim(), role };
    mutateAdmin((s) => ({ ...s, team: [...s.team, member] }));
    audit("Team member added", `${member.name} · ${member.role}`);
    setName("");
    setEmail("");
    setError("");
    setMembers(getAdminState().team);
  }

  function remove(id: string) {
    const member = members.find((m) => m.id === id);
    mutateAdmin((s) => ({ ...s, team: s.team.filter((m) => m.id !== id) }));
    if (member) audit("Team member removed", member.name);
    setMembers(getAdminState().team);
  }

  return (
    <>
      <PageHeader eyebrow="People" title="Team">
        <span className="amono">{members.length} members</span>
      </PageHeader>

      <GuardNote>
        Team accounts and roles are private to the operations layer. They are
        never listed on the public site.
      </GuardNote>

      <SectionLabel>Role structure</SectionLabel>
      <div className="acard">
        <div className="acard__body">
          <ul className="astack">
            {teamRoles.map((r) => (
              <li
                key={r}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  fontSize: "0.84rem",
                  paddingBottom: "0.7rem",
                  borderBottom: "1px solid var(--aline)",
                }}
              >
                <div>
                  <p style={{ fontWeight: 600, color: "var(--aink)" }}>{r}</p>
                  <p className="amuted" style={{ fontSize: "0.76rem" }}>
                    {ROLE_NOTES[r]}
                  </p>
                </div>
                <div style={{ flex: "none" }} className="amono">
                  {hasFullAccess(r) ? "FULL ACCESS" : "SCOPED ACCESS"}
                </div>
              </li>
            ))}
          </ul>
          <p className="amuted" style={{ fontSize: "0.76rem", marginTop: "0.7rem" }}>
            Access is modeled as permissions per role. Enforcement happens when
            authentication and RLS are connected; today this is the architecture,
            not the gate.
          </p>
        </div>
      </div>

      <SectionLabel>Members</SectionLabel>
      {members.length === 0 ? (
        <EmptyState
          title="No team members listed yet"
          detail="Add team members to the operations workspace. Their contact and role details stay private here."
        />
      ) : (
        <div className="acard">
          <div className="acard__body">
            <ul className="astack">
              {members.map((m) => (
                <li
                  key={m.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "0.86rem",
                    paddingBottom: "0.7rem",
                    borderBottom: "1px solid var(--aline)",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--aink)" }}>{m.name}</p>
                    <p className="amono">{m.email}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <span className="amono">{m.role}</span>
                    <button className="abtn abtn--danger abtn--icon" onClick={() => remove(m.id)} aria-label={`Remove ${m.name}`}>
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <SectionLabel>Add team member</SectionLabel>
      <div className="acard">
        <div className="acard__body">
          <div className="aform">
            {error && <p className="aguard" role="alert"><span className="aguard__dot" />{error}</p>}
            <FormRow>
              <Field label="Name" required>
                <TextInput value={name} onChange={setName} placeholder="Full name" />
              </Field>
              <Field label="Email" required>
                <TextInput value={email} onChange={setEmail} type="email" placeholder="name@campaign.ph" />
              </Field>
            </FormRow>
            <Field label="Role">
              <Select value={role} onChange={setRole} options={teamRoles} />
            </Field>
            <div className="abtnrow">
              <button className="abtn abtn--primary" onClick={add}>
                Add member
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}