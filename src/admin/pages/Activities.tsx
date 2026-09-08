import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  activityStatuses,
  audit,
  getAdminState,
  mutateAdmin,
  newId,
} from "../../lib/adminStore";
import type { Activity } from "../../lib/adminStore";
import {
  Drawer,
  EmptyState,
  Field,
  FormRow,
  PageHeader,
  SectionLabel,
  Select,
  StatusBadge,
  TextArea,
  TextInput,
} from "../shared";

type Draft = {
  name: string;
  date: string;
  time: string;
  location: string;
  responsible: string;
  notes: string;
  checklist: string;
  participants: string;
  photos: string;
  status: Activity["status"];
  postNotes: string;
};

const emptyDraft: Draft = {
  name: "",
  date: "",
  time: "",
  location: "",
  responsible: "",
  notes: "",
  checklist: "",
  participants: "",
  photos: "",
  status: "PLANNING",
  postNotes: "",
};

export default function Activities() {
  const [list, setList] = useState<Activity[]>(getAdminState().activities);
  const [addOpen, setAddOpen] = useState(false);
  const [detail, setDetail] = useState<Activity | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [fileNote, setFileNote] = useState("");
  const [msg, setMsg] = useState("");

  function commit(d: Draft): Activity {
    const item: Activity = {
      id: newId("ACT"),
      name: d.name.trim(),
      date: d.date,
      time: d.time,
      location: d.location.trim(),
      responsible: d.responsible.trim(),
      notes: d.notes.trim(),
      checklist: d.checklist.split(",").map((s) => s.trim()).filter(Boolean),
      participants: d.participants.split(",").map((s) => s.trim()).filter(Boolean),
      photos: d.photos.trim(),
      status: d.status,
      postNotes: d.postNotes.trim(),
    };
    mutateAdmin((s) => ({ ...s, activities: [item, ...s.activities] }));
    audit("Activity created", item.name);
    return item;
  }

  function onSubmitAdd() {
    if (!draft.name.trim()) {
      setMsg("Give the activity a name.");
      return;
    }
    commit(draft);
    setMsg("");
    setDraft(emptyDraft);
    setAddOpen(false);
    setList(getAdminState().activities);
  }

  function onDraft(k: keyof Draft, v: string) {
    setDraft((d) => ({ ...d, [k]: v }));
  }

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setFileNote(f ? `${f.name} (${(f.size / 1024).toFixed(0)} kB) — file selected for this session only` : "");
  }

  function updateDetail(patch: Partial<Activity>) {
    if (!detail) return;
    mutateAdmin((s) => ({
      ...s,
      activities: s.activities.map((a) => (a.id === detail.id ? { ...a, ...patch } : a)),
    }));
    setDetail({ ...detail, ...patch });
    if (patch.status && patch.status !== detail.status) {
      audit(`Activity "${detail.name}" moved to ${patch.status}`, detail.id);
    }
    setList(getAdminState().activities);
  }

  function sourceFlip() {
    if (!detail) return;
    audit("Activity marked as content source", detail.name);
    setMsg("Marked for recap + social content. Photos and post-event notes stay in the activity record.");
  }

  return (
    <>
      <PageHeader eyebrow="Field work" title="Activities">
        <button className="abtn abtn--primary" onClick={() => setAddOpen(true)}>
          New activity
        </button>
      </PageHeader>

      {list.length === 0 ? (
        <EmptyState
          title="No activities on the calendar"
          detail="Add planned or confirmed campaign activities. Completed work can then feed activity recaps, updates, and social content."
        />
      ) : (
        <>
          <SectionLabel>Activity calendar · Planning → Confirmed → Completed → Closed</SectionLabel>
          <div className="astack">
            {list.map((a) => (
              <button key={a.id} className="arow" onClick={() => setDetail(a)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{a.name}</p>
                    <p className="arow__sub">{a.id}</p>
                  </div>
                  <div className="arow__cell">{a.date || "TBD"}</div>
                  <div className="arow__cell">{a.time || "—"}</div>
                  <div className="arow__cell">{a.location || "—"}</div>
                  <div className="arow__cell">{a.responsible || "—"}</div>
                  <div>
                    <StatusBadge status={a.status} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Add drawer */}
      <Drawer open={addOpen} onClose={() => setAddOpen(false)} eyebrow="New" title="Add activity">
        <div className="aform">
          {msg && <p className="aguard" role="alert"><span className="aguard__dot" />{msg}</p>}
          <Field label="Activity name" required>
            <TextInput value={draft.name} onChange={(v) => onDraft("name", v)} placeholder="e.g. Community cleanup" />
          </Field>
          <FormRow>
            <Field label="Date">
              <TextInput value={draft.date} onChange={(v) => onDraft("date", v)} placeholder="YYYY-MM-DD" />
            </Field>
            <Field label="Time">
              <TextInput value={draft.time} onChange={(v) => onDraft("time", v)} placeholder="e.g. 8 AM – 12 NN" />
            </Field>
          </FormRow>
          <FormRow>
            <Field label="Location">
              <TextInput value={draft.location} onChange={(v) => onDraft("location", v)} placeholder="Where" />
            </Field>
            <Field label="Responsible person">
              <TextInput value={draft.responsible} onChange={(v) => onDraft("responsible", v)} placeholder="Optional" />
            </Field>
          </FormRow>
          <Field label="Status">
            <Select value={draft.status} onChange={(v) => onDraft("status", v)} options={activityStatuses} />
          </Field>
          <Field label="Notes">
            <TextArea value={draft.notes} onChange={(v) => onDraft("notes", v)} rows={3} />
          </Field>
          <Field label="Checklist">
            <TextInput value={draft.checklist} onChange={(v) => onDraft("checklist", v)} placeholder="Comma-separated tasks" />
          </Field>
          <Field label="Participants">
            <TextInput value={draft.participants} onChange={(v) => onDraft("participants", v)} placeholder="Comma-separated names" />
          </Field>
          <div className="abtnrow">
            <button className="abtn abtn--primary" onClick={onSubmitAdd}>
              Create activity
            </button>
          </div>
        </div>
      </Drawer>

      {/* Detail drawer */}
      <Drawer open={!!detail} onClose={() => setDetail(null)} eyebrow={detail?.id ?? ""} title={detail?.name ?? "Activity"}>
        {detail && (
          <>
            <dl className="kv">
              <dt>Date</dt>
              <dd>{detail.date || "TBD"}</dd>
              <dt>Time</dt>
              <dd>{detail.time || "—"}</dd>
              <dt>Location</dt>
              <dd>{detail.location || "—"}</dd>
              <dt>Responsible</dt>
              <dd>{detail.responsible || "—"}</dd>
              <dt>Status</dt>
              <dd>
                <StatusBadge status={detail.status} />
              </dd>
            </dl>

            {detail.notes && (
              <>
                <h3>Notes</h3>
                <p className="amuted" style={{ fontSize: "0.86rem" }}>{detail.notes}</p>
              </>
            )}

            {detail.checklist.length > 0 && (
              <>
                <h3>Checklist</h3>
                <ul className="astack">
                  {detail.checklist.map((t, i) => (
                    <li key={i} style={{ fontSize: "0.85rem", color: "var(--a2)" }}>
                      <span style={{ color: "var(--ablue)", fontFamily: "var(--amono)", marginRight: "0.5rem" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {detail.participants.length > 0 && (
              <>
                <h3>Participants</h3>
                <ul className="astack">
                  {detail.participants.map((p, i) => (
                    <li key={i} style={{ fontSize: "0.85rem", color: "var(--a2)" }}>{p}</li>
                  ))}
                </ul>
              </>
            )}

            <h3>Photos</h3>
            <p className="amuted" style={{ fontSize: "0.82rem" }}>
              {detail.photos || "No photos noted. Attach files once storage is connected."}
            </p>
            <Field label="Add photo note (session preview only)">
              <input className="ainput" type="file" accept="image/*" onChange={onFile} />
              {fileNote && <p className="amono">{fileNote}</p>}
            </Field>

            <h3>Post-event notes</h3>
            <Field label="Recap">
              <TextArea
                value={detail.postNotes}
                onChange={(v) => updateDetail({ postNotes: v })}
                placeholder="What happened, outcomes, next steps"
                rows={4}
              />
            </Field>

            <h3>Update status</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={detail.status} onChange={(v) => updateDetail({ status: v as Activity["status"] })} options={activityStatuses} />
              </Field>
              <div className="abtnrow">
                <button className="abtn abtn--ghost" onClick={sourceFlip}>
                  Source recap + social content
                </button>
              </div>
              <p className="amuted" style={{ fontSize: "0.78rem" }}>
                Activity → photos → website update → social media content. Marking an activity as a source keeps
                the recap and post-event notes ready for the content pipeline.
              </p>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}