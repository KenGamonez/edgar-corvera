import { useState } from "react";
import {
  audit,
  contentStatuses,
  getAdminState,
  mutateAdmin,
  newId,
} from "../../lib/adminStore";
import type { UpdateRecord } from "../../lib/adminStore";
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
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  media: string;
  status: UpdateRecord["status"];
};

const emptyDraft: Draft = {
  title: "",
  date: "",
  category: "",
  image: "",
  excerpt: "",
  media: "",
  status: "DRAFT",
};

export default function Updates() {
  const [list, setList] = useState<UpdateRecord[]>(getAdminState().updates);
  const [addOpen, setAddOpen] = useState(false);
  const [detail, setDetail] = useState<UpdateRecord | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [msg, setMsg] = useState("");

  function onDraft(k: keyof Draft, v: string) {
    setDraft((d) => ({ ...d, [k]: v }));
  }

  function create() {
    if (!draft.title.trim()) {
      setMsg("Give the update a title.");
      return;
    }
    const item: UpdateRecord = { id: newId("UPD"), ...draft, title: draft.title.trim() };
    mutateAdmin((s) => ({ ...s, updates: [item, ...s.updates] }));
    audit("Update created", item.title);
    setDraft(emptyDraft);
    setAddOpen(false);
    setMsg("");
    setList(getAdminState().updates);
  }

  function updateDetail(patch: Partial<UpdateRecord>) {
    if (!detail) return;
    mutateAdmin((s) => ({
      ...s,
      updates: s.updates.map((u) => (u.id === detail.id ? { ...u, ...patch } : u)),
    }));
    if (patch.status && patch.status !== detail.status) audit(`Update moved to ${patch.status}`, detail.title);
    setDetail({ ...detail, ...patch });
    setList(getAdminState().updates);
  }

  return (
    <>
      <PageHeader eyebrow="Content" title="Updates">
        <button className="abtn abtn--primary" onClick={() => setAddOpen(true)}>
          New update
        </button>
      </PageHeader>

      <NoteBox>
        Website updates entered here are part of the editorial pipeline. The
        public Updates page is currently a static placeholder — connecting the
        CMS layer will make published records render automatically.
      </NoteBox>

      {list.length === 0 ? (
        <EmptyState
          title="No updates written yet"
          detail="Drafts, reviews, and published content can all live here until the content management layer is wired up."
        >
          <div className="abtnrow" style={{ justifyContent: "center", marginTop: "1rem" }}>
            <button className="abtn abtn--ghost" onClick={() => setAddOpen(true)}>
              Create first update
            </button>
          </div>
        </EmptyState>
      ) : (
        <>
          <SectionLabel>Update pipeline · Draft → Review → Published</SectionLabel>
          <div className="astack">
            {list.map((u) => (
              <button key={u.id} className="arow" onClick={() => setDetail(u)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{u.title}</p>
                    <p className="arow__sub">{u.id}</p>
                  </div>
                  <div className="arow__cell">{u.category || "—"}</div>
                  <div className="arow__cell">{u.date || "—"}</div>
                  <div>
                    <StatusBadge status={u.status} />
                  </div>
                  <div className="arow__cell">{u.image || "No featured image"}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <Drawer open={addOpen} onClose={() => setAddOpen(false)} eyebrow="Content" title="New update">
        <div className="aform">
          {msg && <p className="aguard" role="alert"><span className="aguard__dot" />{msg}</p>}
          <Field label="Title" required>
            <TextInput value={draft.title} onChange={(v) => onDraft("title", v)} />
          </Field>
          <FormRow>
            <Field label="Date">
              <TextInput value={draft.date} onChange={(v) => onDraft("date", v)} placeholder="YYYY-MM-DD" />
            </Field>
            <Field label="Category">
              <TextInput value={draft.category} onChange={(v) => onDraft("category", v)} placeholder="e.g. Infrastructure, Health" />
            </Field>
          </FormRow>
          <Field label="Featured image">
            <TextInput value={draft.image} onChange={(v) => onDraft("image", v)} placeholder="Media library reference or file name" />
          </Field>
          <Field label="Content / excerpt">
            <TextArea value={draft.excerpt} onChange={(v) => onDraft("excerpt", v)} rows={5} />
          </Field>
          <Field label="Media">
            <TextInput value={draft.media} onChange={(v) => onDraft("media", v)} placeholder="Supporting photo or video" />
          </Field>
          <Field label="Status">
            <Select value={draft.status} onChange={(v) => onDraft("status", v)} options={contentStatuses} />
          </Field>
          <div className="abtnrow">
            <button className="abtn abtn--primary" onClick={create}>
              Save update
            </button>
          </div>
        </div>
      </Drawer>

      <Drawer open={!!detail} onClose={() => setDetail(null)} eyebrow={detail?.id ?? ""} title={detail?.title ?? "Update"}>
        {detail && (
          <>
            <dl className="kv">
              <dt>Date</dt>
              <dd>{detail.date || "—"}</dd>
              <dt>Category</dt>
              <dd>{detail.category || "—"}</dd>
              <dt>Status</dt>
              <dd><StatusBadge status={detail.status} /></dd>
              <dt>Featured image</dt>
              <dd>{detail.image || "—"}</dd>
              <dt>Media</dt>
              <dd>{detail.media || "—"}</dd>
            </dl>
            <h3>Content</h3>
            <p className="amuted" style={{ fontSize: "0.88rem", whiteSpace: "pre-wrap" }}>{detail.excerpt || "—"}</p>
            <h3>Update status</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={detail.status} onChange={(v) => updateDetail({ status: v as UpdateRecord["status"] })} options={contentStatuses} />
              </Field>
              <Field label="Title">
                <TextInput value={detail.title} onChange={(v) => updateDetail({ title: v })} />
              </Field>
              <Field label="Category">
                <TextInput value={detail.category} onChange={(v) => updateDetail({ category: v })} />
              </Field>
              <Field label="Content / excerpt">
                <TextArea value={detail.excerpt} onChange={(v) => updateDetail({ excerpt: v })} rows={5} />
              </Field>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}