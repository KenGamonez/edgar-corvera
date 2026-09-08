import { useState } from "react";
import { getQuestions, questionPatch } from "../data";
import type { QuestionRow } from "../data";
import { questionStatuses } from "../../lib/adminStore";
import {
  Drawer,
  EmptyState,
  Field,
  PageHeader,
  SectionLabel,
  Select,
  StatusBadge,
  TextArea,
} from "../shared";
import { fmtDateTime } from "../../lib/adminStore";

export default function Questions() {
  const [rows, setRows] = useState<QuestionRow[]>(getQuestions());
  const [open, setOpen] = useState<QuestionRow | null>(null);

  const [status, setStatus] = useState("NEW");
  const [response, setResponse] = useState("");
  const [note, setNote] = useState("");
  const [published, setPublished] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  function openRow(row: QuestionRow) {
    setOpen(row);
    setStatus(row.workflow.status);
    setResponse(row.workflow.response);
    setNote("");
    setPublished(row.workflow.published);
    setSavedMsg("");
  }

  function save(publish: boolean) {
    if (!open) return;
    const w = open.workflow;
    const nextStatus = status as (typeof questionStatuses)[number];
    const nextPublished = publish || published;
    const nextNotes = note.trim() ? [...w.notes, note.trim()] : w.notes;
    questionPatch(open.ref, {
      status: nextStatus,
      response,
      published: nextPublished,
      notes: nextNotes,
    });
    setOpen({ ...open, workflow: { ...w, status: nextStatus, response, published: nextPublished, notes: nextNotes } });
    setSavedMsg("Saved.");
    setRows(getQuestions());
  }

  return (
    <>
      <PageHeader eyebrow="Inbox" title="Ask Edgar">
        <span className="amono">{rows.length} messages</span>
      </PageHeader>

      {rows.length === 0 ? (
        <EmptyState
          title="No questions yet"
          detail="Questions submitted through the For Tabon hub appear here. Responses are prepared privately — nothing is published automatically."
        />
      ) : (
        <>
          <SectionLabel>Question inbox · New → Reviewing → Answered → Archived</SectionLabel>
          <div className="astack">
            {rows.map((q) => (
              <button key={q.ref} className="arow" onClick={() => openRow(q)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{q.message.slice(0, 70)}{q.message.length > 70 ? "…" : ""}</p>
                    <p className="arow__sub">{q.ref} · {q.name}</p>
                  </div>
                  <div className="arow__cell">{q.contact || "—"}</div>
                  <div>
                    <StatusBadge status={q.workflow.status} />
                  </div>
                  <div className="arow__cell">{q.workflow.published ? "Published" : "Not public"}</div>
                  <div className="arow__cell">{fmtDateTime(q.submittedAt)}</div>
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
        title="Question"
      >
        {open && (
          <>
            <dl className="kv">
              <dt>Submitted</dt>
              <dd>{fmtDateTime(open.submittedAt)}</dd>
              <dt>From</dt>
              <dd>{open.name}</dd>
              <dt>Contact</dt>
              <dd>{open.contact || "—"}</dd>
              <dt>Message</dt>
              <dd>{open.message}</dd>
              <dt>Status</dt>
              <dd>
                <StatusBadge status={open.workflow.status} />
              </dd>
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

            <h3>Prepare a response</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={status} onChange={setStatus} options={questionStatuses} />
              </Field>
              <Field label="Response draft">
                <TextArea
                  value={response}
                  onChange={setResponse}
                  placeholder="Draft the answer here. It is NOT published unless you choose to."
                  rows={5}
                />
              </Field>
              <Field label="Add internal note">
                <TextArea value={note} onChange={setNote} placeholder="Private to the team" rows={2} />
              </Field>
              {savedMsg && <p className="amono" role="status">{savedMsg}</p>}
              <div className="abtnrow">
                <button className="abtn abtn--primary" onClick={() => save(false)}>
                  Save
                </button>
                <button className="abtn abtn--ghost" onClick={() => save(true)} disabled={!response.trim()}>
                  {published ? "Published" : "Publish to public"}
                </button>
              </div>
              <p className="amono">
                {published
                  ? "This response is currently public on the site's content layer."
                  : "Responses become public content only when a team member explicitly publishes them."}
              </p>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}