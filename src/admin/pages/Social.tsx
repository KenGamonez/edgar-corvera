import { useState } from "react";
import {
  audit,
  getAdminState,
  mutateAdmin,
  newId,
  platforms,
  socialStatuses,
} from "../../lib/adminStore";
import type { SocialPost } from "../../lib/adminStore";
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
  date: string;
  platform: SocialPost["platform"];
  contentType: string;
  caption: string;
  media: string;
  relatedUpdate: string;
  status: SocialPost["status"];
};

const emptyDraft: Draft = {
  date: "",
  platform: "Facebook",
  contentType: "",
  caption: "",
  media: "",
  relatedUpdate: "",
  status: "IDEA",
};

export default function Social() {
  const [list, setList] = useState<SocialPost[]>(getAdminState().social);
  const [addOpen, setAddOpen] = useState(false);
  const [detail, setDetail] = useState<SocialPost | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [msg, setMsg] = useState("");

  function onDraft(k: keyof Draft, v: string) {
    setDraft((d) => ({ ...d, [k]: v }));
  }

  function markDraft() {
    audit("Social post drafted", draft.caption);
  }

  function create() {
    if (!draft.caption.trim()) {
      setMsg("Write a caption before saving this post.");
      return;
    }
    const item: SocialPost = { id: newId("SOC"), ...draft, caption: draft.caption.trim() };
    mutateAdmin((s) => ({ ...s, social: [item, ...s.social] }));
    audit("Social post added to calendar", item.caption);
    setDraft(emptyDraft);
    setAddOpen(false);
    setMsg("");
    setList(getAdminState().social);
  }

  function updateDetail(patch: Partial<SocialPost>) {
    if (!detail) return;
    mutateAdmin((s) => ({
      ...s,
      social: s.social.map((p) => (p.id === detail.id ? { ...p, ...patch } : p)),
    }));
    if (patch.status && patch.status !== detail.status) audit(`Social post moved to ${patch.status}`, detail.caption);
    setDetail({ ...detail, ...patch });
    setList(getAdminState().social);
  }

  return (
    <>
      <PageHeader eyebrow="Content" title="Social media command center">
        <button className="abtn abtn--primary" onClick={() => setAddOpen(true)}>
          New post
        </button>
      </PageHeader>

      <p className="amono" style={{ margin: "0 0 1.2rem" }}>
        Planning &amp; approval workflow only — nothing posts automatically.
      </p>

      {list.length === 0 ? (
        <EmptyState
          title="No social content planned"
          detail="Build the content calendar here: date, platform, type, caption, media, and status. Content flows from completed activities."
        >
          <div className="abtnrow" style={{ justifyContent: "center", marginTop: "1rem" }}>
            <button className="abtn abtn--ghost" onClick={() => setAddOpen(true)}>
              Add first post
            </button>
          </div>
        </EmptyState>
      ) : (
        <>
          <SectionLabel>Content calendar · Idea → Draft → Review → Approved → Scheduled → Published</SectionLabel>
          <div className="astack">
            {list.map((p) => (
              <button key={p.id} className="arow" onClick={() => setDetail(p)} style={{ width: "100%", textAlign: "left" }}>
                <div className="arow__main">
                  <div>
                    <p className="arow__title">{p.caption.slice(0, 60)}{p.caption.length > 60 ? "…" : ""}</p>
                    <p className="arow__sub">{p.id}</p>
                  </div>
                  <div className="arow__cell">{p.date || "TBD"}</div>
                  <div className="arow__cell">{p.platform}</div>
                  <div className="arow__cell">{p.contentType || "—"}</div>
                  <div>
                    <StatusBadge status={p.status} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Add drawer */}
      <Drawer open={addOpen} onClose={() => setAddOpen(false)} eyebrow="Content calendar" title="New social post">
        <div className="aform">
          {msg && <p className="aguard" role="alert"><span className="aguard__dot" />{msg}</p>}
          <FormRow>
            <Field label="Date">
              <TextInput value={draft.date} onChange={(v) => onDraft("date", v)} placeholder="YYYY-MM-DD" />
            </Field>
            <Field label="Platform">
              <Select value={draft.platform} onChange={(v) => onDraft("platform", v)} options={platforms} />
            </Field>
          </FormRow>
          <FormRow>
            <Field label="Content type">
              <TextInput value={draft.contentType} onChange={(v) => onDraft("contentType", v)} placeholder="e.g. Photo, Reel, Announcement" />
            </Field>
            <Field label="Status">
              <Select value={draft.status} onChange={(v) => onDraft("status", v)} options={socialStatuses} />
            </Field>
          </FormRow>
          <Field label="Caption" required>
            <TextArea value={draft.caption} onChange={(v) => onDraft("caption", v)} rows={4} />
          </Field>
          <Field label="Media">
            <TextInput value={draft.media} onChange={(v) => onDraft("media", v)} placeholder="Linked media / gallery note" />
          </Field>
          <Field label="Related website update">
            <TextInput value={draft.relatedUpdate} onChange={(v) => onDraft("relatedUpdate", v)} placeholder="Optional" />
          </Field>
          <div className="abtnrow">
            <button className="abtn abtn--primary" onClick={create}>
              Add to calendar
            </button>
            <button className="abtn abtn--ghost" onClick={() => { markDraft(); setAddOpen(false); }}>
              Save as idea
            </button>
          </div>
        </div>
      </Drawer>

      {/* Detail drawer */}
      <Drawer open={!!detail} onClose={() => setDetail(null)} eyebrow={detail?.id ?? ""} title="Social post">
        {detail && (
          <>
            <dl className="kv">
              <dt>Date</dt>
              <dd>{detail.date || "TBD"}</dd>
              <dt>Platform</dt>
              <dd>{detail.platform}</dd>
              <dt>Content type</dt>
              <dd>{detail.contentType || "—"}</dd>
              <dt>Status</dt>
              <dd><StatusBadge status={detail.status} /></dd>
              <dt>Media</dt>
              <dd>{detail.media || "—"}</dd>
              <dt>Related update</dt>
              <dd>{detail.relatedUpdate || "—"}</dd>
            </dl>

            <h3>Caption</h3>
            <p className="amuted" style={{ fontSize: "0.88rem", whiteSpace: "pre-wrap" }}>{detail.caption}</p>

            <h3>Update status</h3>
            <div className="aform">
              <Field label="Status">
                <Select value={detail.status} onChange={(v) => updateDetail({ status: v as SocialPost["status"] })} options={socialStatuses} />
              </Field>
              <p className="amuted" style={{ fontSize: "0.78rem" }}>
                Scheduling and publishing to Facebook, Instagram, TikTok, or YouTube is not wired up yet — this
                calendar is the planning and approval layer.
              </p>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}