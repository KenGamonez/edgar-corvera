import { useState } from "react";
import { concernPatch, getConcerns } from "../data";
import type { ConcernRow } from "../data";
import { concernStatuses } from "../../lib/adminStore";
import {
  Drawer,
  EmptyState,
  Field,
  GuardNote,
  PageHeader,
  SectionLabel,
  Select,
  StatusBadge,
  TextArea,
  TextInput,
} from "../shared";
import { fmtDateTime } from "../../lib/adminStore";

export default function Concerns() {
  const [rows, setRows] = useState<ConcernRow[]>(getConcerns());
  const [open, setOpen] = useState<ConcernRow | null>(null);

  const [status, setStatus] = useState("NEW");
  const [assignee, setAssignee] = useState("");
  const [note, setNote] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [savedMsg, setSavedMsg] = useState("");

  function openRow(row: ConcernRow) {
    setOpen(row);
    setStatus(row.workflow.status);
    setAssignee(row.workflow.assignee);
    setNote("");
    setActionTaken(row.workflow.actionTaken);
    setSavedMsg("");
  }

  function save() {
    if (!open) return;
    const w = open.workflow;
    const nextStatus = status as (typeof concernStatuses)[number];
    const nextNotes = note.trim() ? [...w.notes, note.trim()] : w.notes;
    concernPatch(open.ref, {
      status: nextStatus,
      assignee,
      actionTaken,
      notes: nextNotes,
    });
    setOpen({
      ...open,
      workflow: { ...w, status: nextStatus, assignee, actionTaken, notes: nextNotes },
    });
    setSavedMsg("Saved.");
    setRows(getConcerns());
  }

  return (
    <>
      <PageHeader eyebrow="Community" title="Community concerns">
        <span className="amono">{rows.length} submissions</span>
      </PageHeader>

      <GuardNote>
        Resident contact information is kept private to this layer. Only
        verified, non-personal details may move toward public content.
      </GuardNote>

      {rows.length === 0 ? (
        <EmptyState
          title="No concerns submitted yet"
          detail="Concerns logged through the For Tabon hub appear here for review, assignment, and resolution tracking."
        />
      ) : (
        <>
          <SectionLabel>Concern workflow · New → Reviewing → Assigned → Action taken → Resolved</SectionLabel>
          <div className="astack">
            {rows.map((c) => (
              <button key={c.ref} className="arow" onClick={() => openRow(c)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{c.category}</p>
                    <p className="arow__sub">{c.ref}</p>
                  </div>
                  <div className="arow__cell">{c.area || "—"}</div>
                  <div className="arow__cell" title={c.description}>{c.description.slice(0, 60)}{c.description.length > 60 ? "…" : ""}</div>
                  <div>
                    <StatusBadge status={c.workflow.status} />
                  </div>
                  <div className="arow__cell">{c.workflow.assignee || "—"}</div>
                  <div className="arow__cell">{fmtDateTime(c.submittedAt)}</div>
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
        title={open?.category || "Concern"}
      >
        {open && (
          <>
            <dl className="kv">
              <dt>Submitted</dt>
              <dd>{fmtDateTime(open.submittedAt)}</dd>
              <dt>Status</dt>
              <dd>
                <StatusBadge status={open.workflow.status} />
              </dd>
              <dt>Area / location</dt>
              <dd>{open.area || "—"}</dd>
              <dt>Description</dt>
              <dd>{open.description}</dd>
              <dt>Photo</dt>
              <dd>{open.hasPhoto ? open.photoLabel : "Not attached"}</dd>
              <dt>Submitted by</dt>
              <dd>{open.name || "Anonymous"}</dd>
              <dt>Contact</dt>
              <dd>{open.contact || "Not provided"}</dd>
              <dt>Assignee</dt>
              <dd>{open.workflow.assignee || "Unassigned"}</dd>
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

            <h3>Update concern</h3>
            <div className="aform">
              <div className="aform-row">
                <Field label="Status">
                  <Select value={status} onChange={setStatus} options={concernStatuses} />
                </Field>
                <Field label="Assign team member">
                  <TextInput value={assignee} onChange={setAssignee} placeholder="Optional" />
                </Field>
              </div>
              <Field label="Record action taken">
                <TextArea value={actionTaken} onChange={setActionTaken} placeholder="What has been done so far" rows={3} />
              </Field>
              <Field label="Add internal note">
                <TextArea value={note} onChange={setNote} placeholder="Private to the team" rows={2} />
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