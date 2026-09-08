import { useState } from "react";
import { getVolunteers, volunteerPatch } from "../data";
import type { VolunteerRow } from "../data";
import { volunteerStatuses } from "../../lib/adminStore";
import {
  Drawer,
  EmptyState,
  Field,
  GuardNote,
  PageHeader,
  SectionLabel,
  StatusBadge,
  Select,
  TextArea,
  TextInput,
} from "../shared";
import { fmtDate, fmtDateTime } from "../../lib/adminStore";

export default function Volunteers() {
  const [rows, setRows] = useState<VolunteerRow[]>(getVolunteers());
  const [open, setOpen] = useState<VolunteerRow | null>(null);

  const [status, setStatus] = useState("NEW");
  const [note, setNote] = useState("");
  const [activity, setActivity] = useState("");
  const [savedMsg, setSavedMsg] = useState("");

  function openRow(row: VolunteerRow) {
    setOpen(row);
    setStatus(row.workflow.status);
    setNote("");
    setActivity(row.workflow.assignedActivity);
    setSavedMsg("");
  }

  function save() {
    if (!open) return;
    const w = open.workflow;
    const nextStatus = status as (typeof volunteerStatuses)[number];
    const nextNotes = note.trim() ? [...w.notes, note.trim()] : w.notes;
    volunteerPatch(open.ref, {
      status: nextStatus,
      assignedActivity: activity,
      notes: nextNotes,
    });
    setOpen({
      ...open,
      workflow: { ...w, status: nextStatus, assignedActivity: activity, notes: nextNotes },
    });
    setSavedMsg("Saved.");
    setRows(getVolunteers());
  }

  return (
    <>
      <PageHeader eyebrow="People" title="Volunteers">
        <span className="amono">{rows.length} registrations</span>
      </PageHeader>

      <GuardNote>
        Volunteer personal details live only behind this private layer and are
        never rendered on the public site.
      </GuardNote>

      {rows.length === 0 ? (
        <EmptyState
          title="No volunteer registrations yet"
          detail="Registrations submitted through the public /volunteer page appear here when residents sign up."
        />
      ) : (
        <>
          <SectionLabel>Registered volunteers</SectionLabel>
          <div className="astack">
            {rows.map((v) => (
              <button key={v.ref} className="arow" onClick={() => openRow(v)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{v.name || "Unnamed registration"}</p>
                    <p className="arow__sub">{v.ref}</p>
                  </div>
                  <div className="arow__cell">{v.area || "—"}</div>
                  <div className="arow__cell">{v.contact || "—"}</div>
                  <div className="arow__cell" title={v.skills || undefined}>{v.skills || "—"}</div>
                  <div className="arow__cell">{v.availability || "—"}</div>
                  <div>
                    <StatusBadge status={v.workflow.status} />
                  </div>
                  <div className="arow__cell">{fmtDate(v.submittedAt)}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <Drawer
        open={!!open}
        onClose={() => setOpen(null)}
        eyebrow={open?.ref ?? ""}
        title={open?.name || "Volunteer"}
      >
        {open && (
          <>
            <dl className="kv">
              <dt>Registered</dt>
              <dd>{fmtDateTime(open.submittedAt)}</dd>
              <dt>Status</dt>
              <dd>
                <StatusBadge status={open.workflow.status} />
              </dd>
              <dt>Contact</dt>
              <dd>{open.contact || "—"}</dd>
              <dt>Email</dt>
              <dd>{open.email || "—"}</dd>
              <dt>Area / location</dt>
              <dd>{open.area || "—"}</dd>
              <dt>How they can help</dt>
              <dd>{open.help || "—"}</dd>
              <dt>Skills / experience</dt>
              <dd>{open.skills || "—"}</dd>
              <dt>Availability</dt>
              <dd>{open.availability || "—"}</dd>
              <dt>Preferred activities</dt>
              <dd>{open.preferredActivities || "—"}</dd>
              <dt>Message</dt>
              <dd>{open.message || "—"}</dd>
            </dl>

            {open.workflow.notes.length > 0 && (
              <>
                <h3>Internal notes</h3>
                <div className="astack">
                  {open.workflow.notes.map((n, i) => (
                    <div key={i} className="anote" style={{ borderLeftColor: "var(--aamber)" }}>
                      {n}
                    </div>
                  ))}
                </div>
              </>
            )}

            <h3>Update registration</h3>
            <div className="aform">
              <div className="aform-row">
                <Field label="Status">
                  <Select value={status} onChange={setStatus} options={volunteerStatuses} />
                </Field>
                <Field label="Assigned activity">
                  <TextInput value={activity} onChange={setActivity} placeholder="Optional" />
                </Field>
              </div>
              <Field label="Add internal note">
                <TextArea value={note} onChange={setNote} placeholder="Visible only to the team" rows={2} />
              </Field>
              {savedMsg && <p className="amono" role="status">{savedMsg}</p>}
              <div className="abtnrow">
                <button className="abtn abtn--primary" onClick={save}>
                  Save changes
                </button>
              </div>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}