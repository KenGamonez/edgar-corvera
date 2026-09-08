import { useState } from "react";
import {
  audit,
  contentStatuses,
  getAdminState,
  mutateAdmin,
  newId,
} from "../../lib/adminStore";
import type { PsRecord } from "../../lib/adminStore";
import {
  Drawer,
  EmptyState,
  Field,
  FormRow,
  NoteBox,
  PageHeader,
  SectionLabel,
  Select,
  StatusBadge,
  TextArea,
  TextInput,
} from "../shared";

type Draft = {
  category: string;
  record: string;
  date: string;
  description: string;
  document: string;
  status: PsRecord["status"];
};

const emptyDraft: Draft = {
  category: "",
  record: "",
  date: "",
  description: "",
  document: "",
  status: "DRAFT",
};

export default function PublicService() {
  const [list, setList] = useState<PsRecord[]>(getAdminState().publicService);
  const [addOpen, setAddOpen] = useState(false);
  const [detail, setDetail] = useState<PsRecord | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [msg, setMsg] = useState("");

  function onDraft(k: keyof Draft, v: string) {
    setDraft((d) => ({ ...d, [k]: v }));
  }

  function create() {
    if (!draft.record.trim()) {
      setMsg("Enter a record reference or title.");
      return;
    }
    const item: PsRecord = { id: newId("PUB"), ...draft, record: draft.record.trim() };
    mutateAdmin((s) => ({ ...s, publicService: [item, ...s.publicService] }));
    audit("Public service record added", item.record);
    setDraft(emptyDraft);
    setAddOpen(false);
    setMsg("");
    setList(getAdminState().publicService);
  }

  function updateDetail(patch: Partial<PsRecord>) {
    if (!detail) return;
    mutateAdmin((s) => ({
      ...s,
      publicService: s.publicService.map((p) => (p.id === detail.id ? { ...p, ...patch } : p)),
    }));
    if (patch.status && patch.status !== detail.status) audit(`Public service moved to ${patch.status}`, detail.record);
    setDetail({ ...detail, ...patch });
    setList(getAdminState().publicService);
  }

  return (
    <>
      <PageHeader eyebrow="Service" title="Public service records">
        <button className="abtn abtn--primary" onClick={() => setAddOpen(true)}>
          Add record
        </button>
      </PageHeader>

      <NoteBox>
        Public service records are verified, documented entries — not claims.
        Only information confirmed by the team should move to the published
        state.
      </NoteBox>

      {list.length === 0 ? (
        <EmptyState
          title="No public service records yet"
          detail="Document verified public service activity, infrastructure updates, or community programs here."
        />
      ) : (
        <>
          <SectionLabel>Public service pipeline · Draft → Review → Published</SectionLabel>
          <div className="astack">
            {list.map((p) => (
              <button key={p.id} className="arow" onClick={() => setDetail(p)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{p.record}</p>
                    <p className="arow__sub">{p.id}</p>
                  </div>
                  <div className="arow__cell">{p.category || "—"}</div>
                  <div className="arow__cell">{p.date || "—"}</div>
                  <div>
                    <StatusBadge status={p.status} />
                  </div>
                  <div className="arow__cell" title={p.description}>{p.description?.slice(0, 40) || "—"}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <Drawer open={addOpen} onClose={() => setAddOpen(false)} eyebrow="Service" title="Add public service record">
        <div className="aform">
          {msg && <p className="aguard" role="alert"><span className="aguard__dot" />{msg}</p>}
          <FormRow>
            <Field label="Category">
              <TextInput value={draft.category} onChange={(v) => onDraft("category", v)} placeholder="e.g. Roads, Health, Water" />
            </Field>
            <Field label="Record" required>
              <TextInput value={draft.record} onChange={(v) => onDraft("record", v)} placeholder="Short title or record reference" />
            </Field>
          </FormRow>
          <FormRow>
            <Field label="Date">
              <TextInput value={draft.date} onChange={(v) => onDraft("date", v)} placeholder="YYYY-MM-DD" />
            </Field>
            <Field label="Supporting document">
              <TextInput value={draft.document} onChange={(v) => onDraft("document", v)} placeholder="File name or reference" />
            </Field>
          </FormRow>
          <Field label="Status">
            <Select value={draft.status} onChange={(v) => onDraft("status", v)} options={contentStatuses} />
          </Field>
          <Field label="Description">
            <TextArea value={draft.description} onChange={(v) => onDraft("description", v)} rows={4} />
          </Field>
          <div className="abtnrow">
            <button className="abtn abtn--primary" onClick={create}>
              Add record
            </button>
          </div>
        </div>
      </Drawer>

      <Drawer open={!!detail} onClose={() => setDetail(null)} eyebrow={detail?.id ?? ""} title={detail?.record ?? "Public service"}>
        {detail && (
          <>
            <dl className="kv">
              <dt>Category</dt>
              <dd>{detail.category || "—"}</dd>
              <dt>Record</dt>
              <dd>{detail.record}</dd>
              <dt>Date</dt>
              <dd>{detail.date || "—"}</dd>
              <dt>Status</dt>
              <dd><StatusBadge status={detail.status} /></dd>
              <dt>Supporting document</dt>
              <dd>{detail.document || "—"}</dd>
            </dl>
            <h3>Description</h3>
            <p className="amuted" style={{ fontSize: "0.88rem", whiteSpace: "pre-wrap" }}>{detail.description || "—"}</p>
            <h3>Update</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={detail.status} onChange={(v) => updateDetail({ status: v as PsRecord["status"] })} options={contentStatuses} />
              </Field>
              <Field label="Description">
                <TextArea value={detail.description} onChange={(v) => updateDetail({ description: v })} rows={4} />
              </Field>
              <Field label="Supporting document">
                <TextInput value={detail.document} onChange={(v) => updateDetail({ document: v })} placeholder="File reference" />
              </Field>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}