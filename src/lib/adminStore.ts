/* ============================================================
   ADMIN STORE — private campaign operations state.
   ------------------------------------------------------------
   Today this persists to localStorage so the operations UI can be
   exercised end to end. When Supabase is connected, each section
   (activities, social, media, updates, documents, audit, team) maps
   to a table guarded by Row Level Security, and this module becomes
   the thin client wrapper around those queries.

   Records created here are team-entered data — nothing is seeded.
   ============================================================ */

export type VolunteerWorkflow = {
  ref: string;
  status: "NEW" | "CONTACTED" | "ACTIVE" | "INACTIVE";
  notes: string[];
  assignedActivity: string;
};

export type ConcernWorkflow = {
  ref: string;
  status: "NEW" | "REVIEWING" | "ASSIGNED" | "ACTION TAKEN" | "RESOLVED";
  assignee: string;
  notes: string[];
  actionTaken: string;
};

export type QuestionWorkflow = {
  ref: string;
  status: "NEW" | "REVIEWING" | "ANSWERED" | "ARCHIVED";
  notes: string[];
  response: string;
  published: boolean;
};

export type Activity = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  responsible: string;
  notes: string;
  checklist: string[];
  participants: string[];
  photos: string;
  status: "PLANNING" | "CONFIRMED" | "COMPLETED" | "CLOSED";
  postNotes: string;
};

export type SocialPost = {
  id: string;
  date: string;
  platform: "Facebook" | "Instagram" | "TikTok" | "YouTube";
  contentType: string;
  caption: string;
  media: string;
  relatedUpdate: string;
  status: "IDEA" | "DRAFT" | "REVIEW" | "APPROVED" | "SCHEDULED" | "PUBLISHED";
};

export type MediaItem = {
  id: string;
  title: string;
  kind: "Photo" | "Video" | "Graphic" | "Press";
  status: "RAW" | "SELECTED" | "EDITED" | "APPROVED" | "PUBLISHED";
  association: string;
  file: string;
  note: string;
};

export type UpdateRecord = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  media: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED";
};

export type PsRecord = {
  id: string;
  category: string;
  record: string;
  date: string;
  description: string;
  document: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED";
};

export type DocItem = {
  id: string;
  title: string;
  type: string;
  date: string;
  note: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED";
};

export type AdminMember = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AuditEntry = {
  at: string;
  actor: string;
  action: string;
  detail: string;
};

export type AdminState = {
  workflows: {
    volunteers: Record<string, VolunteerWorkflow>;
    concerns: Record<string, ConcernWorkflow>;
    questions: Record<string, QuestionWorkflow>;
  };
  activities: Activity[];
  social: SocialPost[];
  media: MediaItem[];
  updates: UpdateRecord[];
  publicService: PsRecord[];
  documents: DocItem[];
  team: AdminMember[];
  audit: AuditEntry[];
};

const KEY = "edgar-corvera.admin.v1";

function emptyState(): AdminState {
  return {
    workflows: { volunteers: {}, concerns: {}, questions: {} },
    activities: [],
    social: [],
    media: [],
    updates: [],
    publicService: [],
    documents: [],
    team: [],
    audit: [],
  };
}

export function getAdminState(): AdminState {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyState();
    const base = JSON.parse(raw) as Partial<AdminState>;
    return {
      ...emptyState(),
      ...base,
      workflows: {
        volunteers: base.workflows?.volunteers ?? {},
        concerns: base.workflows?.concerns ?? {},
        questions: base.workflows?.questions ?? {},
      },
    };
  } catch {
    return emptyState();
  }
}

function save(state: AdminState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — session-only */
  }
}

export function mutateAdmin(mutator: (state: AdminState) => AdminState) {
  const next = mutator(getAdminState());
  save(next);
  return next;
}

export function newId(prefix: string): string {
  const stamp = Date.now().toString(36).slice(-4).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `${prefix}-${stamp}${rand}`;
}

let actor = "Team member";

export function setAuditActor(name: string) {
  actor = name;
}

export function audit(action: string, detail: string) {
  return mutateAdmin((s) => {
    const entry: AuditEntry = {
      at: new Date().toISOString(),
      actor,
      action,
      detail,
    };
    return { ...s, audit: [entry, ...s.audit].slice(0, 400) };
  });
}

/* ---- Workflow helpers (volunteers, concerns, questions) ---- */

export function patchVolunteer(
  ref: string,
  patch: Partial<VolunteerWorkflow>
): string {
  let msg = "";
  mutateAdmin((s) => {
    const existing = s.workflows.volunteers[ref] ?? {
      ref,
      status: "NEW",
      notes: [],
      assignedActivity: "",
    };
    const merged: VolunteerWorkflow = { ...existing, ...patch };
    if (!msg && patch.status && patch.status !== existing.status) {
      msg = `Volunteer status updated to ${patch.status}`;
    }
    return {
      ...s,
      workflows: {
        ...s.workflows,
        volunteers: { ...s.workflows.volunteers, [ref]: merged },
      },
    };
  });
  if (msg) audit(msg, `Volunteer ${ref}`);
  return msg;
}

export function patchConcern(ref: string, patch: Partial<ConcernWorkflow>): string {
  let msg = "";
  mutateAdmin((s) => {
    const existing = s.workflows.concerns[ref] ?? {
      ref,
      status: "NEW",
      assignee: "",
      notes: [],
      actionTaken: "",
    };
    const merged: ConcernWorkflow = { ...existing, ...patch };
    if (!msg && patch.status && patch.status !== existing.status) {
      msg = `Concern ${ref} moved to ${patch.status}`;
    }
    if (!msg && patch.assignee && patch.assignee !== existing.assignee) {
      msg = `Concern ${ref} assigned to ${patch.assignee}`;
    }
    return {
      ...s,
      workflows: {
        ...s.workflows,
        concerns: { ...s.workflows.concerns, [ref]: merged },
      },
    };
  });
  if (msg) audit(msg, `Concern ${ref}`);
  return msg;
}

export function patchQuestion(ref: string, patch: Partial<QuestionWorkflow>): string {
  let msg = "";
  mutateAdmin((s) => {
    const existing = s.workflows.questions[ref] ?? {
      ref,
      status: "NEW",
      notes: [],
      response: "",
      published: false,
    };
    const merged: QuestionWorkflow = { ...existing, ...patch };
    if (!msg && patch.status && patch.status !== existing.status) {
      msg = `Question ${ref} moved to ${patch.status}`;
    }
    if (!msg && patch.published) {
      msg = `Response published for question ${ref}`;
    }
    return {
      ...s,
      workflows: {
        ...s.workflows,
        questions: { ...s.workflows.questions, [ref]: merged },
      },
    };
  });
  if (msg) audit(msg, `Question ${ref}`);
  return msg;
}

export const volunteerStatuses = ["NEW", "CONTACTED", "ACTIVE", "INACTIVE"] as const;
export const concernStatuses = [
  "NEW",
  "REVIEWING",
  "ASSIGNED",
  "ACTION TAKEN",
  "RESOLVED",
] as const;
export const questionStatuses = ["NEW", "REVIEWING", "ANSWERED", "ARCHIVED"] as const;
export const activityStatuses = ["PLANNING", "CONFIRMED", "COMPLETED", "CLOSED"] as const;
export const socialStatuses = [
  "IDEA",
  "DRAFT",
  "REVIEW",
  "APPROVED",
  "SCHEDULED",
  "PUBLISHED",
] as const;
export const mediaStatuses = ["RAW", "SELECTED", "EDITED", "APPROVED", "PUBLISHED"] as const;
export const contentStatuses = ["DRAFT", "REVIEW", "PUBLISHED"] as const;
export const platforms = ["Facebook", "Instagram", "TikTok", "YouTube"] as const;
export const mediaKinds = ["Photo", "Video", "Graphic", "Press"] as const;
export const teamRoles = [
  "ADMINISTRATOR",
  "CAMPAIGN ADMIN",
  "CONTENT MANAGER",
  "MEDIA MANAGER",
  "VOLUNTEER COORDINATOR",
  "SOCIAL MEDIA MANAGER",
] as const;

export function fmtDate(iso: string): string {
  const d = iso ? new Date(iso) : new Date();
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function fmtDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}