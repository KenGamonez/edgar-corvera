import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  audit,
  getAdminState,
  mediaKinds,
  mediaStatuses,
  mutateAdmin,
  newId,
} from "../../lib/adminStore";
import type { MediaItem } from "../../lib/adminStore";
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
  kind: MediaItem["kind"];
  status: MediaItem["status"];
  association: string;
  file: string;
  note: string;
};

const emptyDraft: Draft = {
  title: "",
  kind: "Photo",
  status: "RAW",
  association: "",
  file: "",
  note: "",
};

export default function Media() {
  const [list, setList] = useState<MediaItem[]>(getAdminState().media);
  const [addOpen, setAddOpen] = useState(false);
  const [detail, setDetail] = useState<MediaItem | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [msg, setMsg] = useState("");
  const [fileName, setFileName] = useState("");

  function onDraft(k: keyof Draft, v: string) {
    setDraft((d) => ({ ...d, [k]: v }));
  }

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      setFileName(`${f.name} · ${(f.size / 1024).toFixed(0)} kB (session preview only)`);
      onDraft("file", f.name);
    }
  }

  function create() {
    if (!draft.title.trim()) {
      setMsg("Give the media item a title.");
      return;
    }
    const item: MediaItem = { id: newId("MED"), ...draft, title: draft.title.trim() };
    mutateAdmin((s) => ({ ...s, media: [item, ...s.media] }));
    audit("Media entry added", item.title);
    setDraft(emptyDraft);
    setFileName("");
    setAddOpen(false);
    setMsg("");
    setList(getAdminState().media);
  }

  function updateDetail(patch: Partial<MediaItem>) {
    if (!detail) return;
    mutateAdmin((s) => ({
      ...s,
      media: s.media.map((m) => (m.id === detail.id ? { ...m, ...patch } : m)),
    }));
    if (patch.status && patch.status !== detail.status) audit(`Media moved to ${patch.status}`, detail.title);
    setDetail({ ...detail, ...patch });
    setList(getAdminState().media);
  }

  return (
    <>
      <PageHeader eyebrow="Library" title="Media library">
        <button className="abtn abtn--primary" onClick={() => setAddOpen(true)}>
          Add media entry
        </button>
      </PageHeader>

      {list.length === 0 ? (
        <EmptyState
          title="No media organized yet"
          detail="Photos, videos, graphics, and press material can be organized here and linked to activities, updates, public service, community, and social posts."
        />
      ) : (
        <>
          <SectionLabel>Media pipeline · Raw → Selected → Edited → Approved → Published</SectionLabel>
          <div className="astack">
            {list.map((m) => (
              <button key={m.id} className="arow" onClick={() => setDetail(m)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{m.title}</p>
                    <p className="arow__sub">{m.id}</p>
                  </div>
                  <div className="arow__cell">{m.kind}</div>
                  <div className="arow__cell">{m.association || "—"}</div>
                  <div className="arow__cell">{m.file || "No file"}</div>
                  <div>
                    <StatusBadge status={m.status} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      <Drawer open={addOpen} onClose={() => setAddOpen(false)} eyebrow="Library" title="Add media entry">
        <div className="aform">
          {msg && <p className="aguard" role="alert"><span className="aguard__dot" />{msg}</p>}
          <Field label="Title" required>
            <TextInput value={draft.title} onChange={(v) => onDraft("title", v)} />
          </Field>
          <FormRow>
            <Field label="Type">
              <Select value={draft.kind} onChange={(v) => onDraft("kind", v)} options={mediaKinds} />
            </Field>
            <Field label="Status">
              <Select value={draft.status} onChange={(v) => onDraft("status", v)} options={mediaStatuses} />
            </Field>
          </FormRow>
          <Field label="Associated with">
            <TextInput value={draft.association} onChange={(v) => onDraft("association", v)} placeholder="Activity, update, public service, community, social post" />
          </Field>
          <Field label="File">
            <input className="ainput" type="file" onChange={onFile} />
            {fileName && <p className="amono">{fileName}</p>}
          </Field>
          <Field label="Note">
            <TextArea value={draft.note} onChange={(v) => onDraft("note", v)} rows={3} />
          </Field>
          <div className="abtnrow">
            <button className="abtn abtn--primary" onClick={create}>
              Add entry
            </button>
          </div>
        </div>
      </Drawer>

      <Drawer open={!!detail} onClose={() => setDetail(null)} eyebrow={detail?.id ?? ""} title={detail?.title ?? "Media"}>
        {detail && (
          <>
            <dl className="kv">
              <dt>Type</dt>
              <dd>{detail.kind}</dd>
              <dt>Status</dt>
              <dd><StatusBadge status={detail.status} /></dd>
              <dt>Associated with</dt>
              <dd>{detail.association || "—"}</dd>
              <dt>File</dt>
              <dd>{detail.file || "No file attached"}</dd>
              <dt>Note</dt>
              <dd>{detail.note || "—"}</dd>
            </dl>
            <h3>Update status</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={detail.status} onChange={(v) => updateDetail({ status: v as MediaItem["status"] })} options={mediaStatuses} />
              </Field>
              <Field label="Note">
                <TextArea value={detail.note} onChange={(v) => updateDetail({ note: v })} rows={3} />
              </Field>
              <p className="amuted" style={{ fontSize: "0.78rem" }}>
                File storage is not connected yet; entries hold metadata so the workflow pipeline is ready.
              </p>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}