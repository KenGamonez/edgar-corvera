import { useState } from "react";
import {
  audit,
  contentStatuses,
  getAdminState,
  mutateAdmin,
  newId,
} from "../../lib/adminStore";
import type { DocItem } from "../../lib/adminStore";
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
  title: string;
  type: string;
  date: string;
  note: string;
  status: DocItem["status"];
};

const emptyDraft: Draft = { title: "", type: "", date: "", note: "", status: "DRAFT" };

export default function Documents() {
  const [list, setList] = useState<DocItem[]>(getAdminState().documents);
  const [addOpen, setAddOpen] = useState(false);
  const [detail, setDetail] = useState<DocItem | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [msg, setMsg] = useState("");

  function create() {
    if (!draft.title.trim()) {
      setMsg("Give the document a title.");
      return;
    }
    const item: DocItem = { id: newId("DOC"), ...draft, title: draft.title.trim() };
    mutateAdmin((s) => ({ ...s, documents: [item, ...s.documents] }));
    audit("Document added", item.title);
    setDraft(emptyDraft);
    setAddOpen(false);
    setMsg("");
    setList(getAdminState().documents);
  }

  function updateDetail(patch: Partial<DocItem>) {
    if (!detail) return;
    mutateAdmin((s) => ({
      ...s,
      documents: s.documents.map((d) => (d.id === detail.id ? { ...d, ...patch } : d)),
    }));
    if (patch.status && patch.status !== detail.status) audit(`Document moved to ${patch.status}`, detail.title);
    setDetail({ ...detail, ...patch });
    setList(getAdminState().documents);
  }

  return (
    <>
      <PageHeader eyebrow="Materials" title="Documents">
        <button className="abtn abtn--primary" onClick={() => setAddOpen(true)}>
          Add document
        </button>
      </PageHeader>

      {list.length === 0 ? (
        <EmptyState
          title="No documents organized yet"
          detail="Track internal documents, reference materials, and supporting files for updates and public service records."
        />
      ) : (
        <>
          <SectionLabel>Document register · Draft → Review → Published</SectionLabel>
          <div className="astack">
            {list.map((d) => (
              <button key={d.id} className="arow" onClick={() => setDetail(d)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{d.title}</p>
                    <p className="arow__sub">{d.id}</p>
                  </div>
                  <div className="arow__cell">{d.type || "—"}</div>
                  <div className="arow__cell">{d.date || "—"}</div>
                  <div>
                    <StatusBadge status={d.status} />
                  </div>
                  <div className="arow__cell" title={d.note}>{d.note?.slice(0, 40) || "—"}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <Drawer open={addOpen} onClose={() => setAddOpen(false)} eyebrow="Materials" title="Add document">
        <div className="aform">
          {msg && <p className="aguard" role="alert"><span className="aguard__dot" />{msg}</p>}
          <Field label="Title" required>
            <TextInput value={draft.title} onChange={(v) => setDraft((d) => ({ ...d, title: v }))} />
          </Field>
          <FormRow>
            <Field label="Type">
              <TextInput value={draft.type} onChange={(v) => setDraft((d) => ({ ...d, type: v }))} placeholder="e.g. Resolution, Memo, Brief" />
            </Field>
            <Field label="Date">
              <TextInput value={draft.date} onChange={(v) => setDraft((d) => ({ ...d, date: v }))} placeholder="YYYY-MM-DD" />
            </Field>
          </FormRow>
          <Field label="Status">
            <Select value={draft.status} onChange={(v) => setDraft((d) => ({ ...d, status: v as DocItem["status"] }))} options={contentStatuses} />
          </Field>
          <Field label="Note">
            <TextArea value={draft.note} onChange={(v) => setDraft((d) => ({ ...d, note: v }))} rows={3} />
          </Field>
          <div className="abtnrow">
            <button className="abtn abtn--primary" onClick={create}>
              Add document
            </button>
          </div>
        </div>
      </Drawer>

      <Drawer open={!!detail} onClose={() => setDetail(null)} eyebrow={detail?.id ?? ""} title={detail?.title ?? "Document"}>
        {detail && (
          <>
            <dl className="kv">
              <dt>Type</dt>
              <dd>{detail.type || "—"}</dd>
              <dt>Date</dt>
              <dd>{detail.date || "—"}</dd>
              <dt>Status</dt>
              <dd><StatusBadge status={detail.status} /></dd>
              <dt>Note</dt>
              <dd>{detail.note || "—"}</dd>
            </dl>
            <h3>Update</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={detail.status} onChange={(v) => updateDetail({ status: v as DocItem["status"] })} options={contentStatuses} />
              </Field>
              <Field label="Note">
                <TextArea value={detail.note} onChange={(v) => updateDetail({ note: v })} rows={3} />
              </Field>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}