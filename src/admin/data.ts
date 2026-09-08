import { listSubmissions } from "../lib/api";
import type { StoredSubmission } from "../lib/api";
import {
  getAdminState,
  patchConcern,
  patchQuestion,
  patchVolunteer,
} from "../lib/adminStore";
import type {
  ConcernWorkflow,
  QuestionWorkflow,
  VolunteerWorkflow,
} from "../lib/adminStore";

/* ============================================================
   ADMIN DATA — reads real public submissions + team records.
   Nothing here is seeded. Counts are always derived from what
   actually exists so the dashboard never fabricates numbers.
   ============================================================ */

export function byKind(kind: StoredSubmission["kind"]): StoredSubmission[] {
  return listSubmissions()
    .filter((s) => s.kind === kind)
    .sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
}

export type VolunteerRow = {
  kind: "volunteer";
  ref: string;
  submittedAt: string;
  name: string;
  contact: string;
  email: string;
  area: string;
  help: string;
  skills: string;
  availability: string;
  preferredActivities: string;
  message: string;
  workflow: VolunteerWorkflow;
};

export function getVolunteers(): VolunteerRow[] {
  const flows = getAdminState().workflows.volunteers;
  return byKind("volunteer").map((s) => {
    const v = s as StoredSubmission & { kind: "volunteer" } & Record<string, string>;
    return {
      kind: "volunteer",
      ref: s.ref,
      submittedAt: s.submittedAt,
      name: v.fullName ?? "",
      contact: v.contact ?? "",
      email: v.email ?? "",
      area: v.area ?? "",
      help: v.help ?? "",
      skills: v.skills ?? "",
      availability: v.availability ?? "",
      preferredActivities: v.preferredActivities ?? "",
      message: v.message ?? "",
      workflow: flows[s.ref] ?? { ref: s.ref, status: "NEW", notes: [], assignedActivity: "" },
    };
  });
}

export type ConcernRow = {
  kind: "concern";
  ref: string;
  submittedAt: string;
  category: string;
  area: string;
  description: string;
  name: string;
  contact: string;
  hasPhoto: boolean;
  photoLabel: string;
  workflow: ConcernWorkflow;
};

export function getConcerns(): ConcernRow[] {
  const flows = getAdminState().workflows.concerns;
  return byKind("concern").map((s) => {
    const c = s as StoredSubmission & { kind: "concern" } & Record<string, unknown>;
    return {
      kind: "concern",
      ref: s.ref,
      submittedAt: s.submittedAt,
      category: String(c.category ?? ""),
      area: String(c.area ?? ""),
      description: String(c.description ?? ""),
      name: String(c.name ?? ""),
      contact: String(c.contact ?? ""),
      hasPhoto: Boolean(c.hasPhoto),
      photoLabel: String(c.photoLabel ?? ""),
      workflow: flows[s.ref] ?? { ref: s.ref, status: "NEW", assignee: "", notes: [], actionTaken: "" },
    };
  });
}

export type QuestionRow = {
  kind: "question";
  ref: string;
  submittedAt: string;
  name: string;
  contact: string;
  message: string;
  workflow: QuestionWorkflow;
};

export function getQuestions(): QuestionRow[] {
  const flows = getAdminState().workflows.questions;
  return byKind("question").map((s) => {
    const q = s as StoredSubmission & { kind: "question" } & Record<string, unknown>;
    return {
      kind: "question",
      ref: s.ref,
      submittedAt: s.submittedAt,
      name: String(q.name ?? ""),
      contact: String(q.contact ?? ""),
      message: String(q.message ?? ""),
      workflow: flows[s.ref] ?? { ref: s.ref, status: "NEW", notes: [], response: "", published: false },
    };
  });
}

export function getSurveys() {
  return byKind("survey");
}

export const volunteerPatch = patchVolunteer;
export const concernPatch = patchConcern;
export const questionPatch = patchQuestion;

export type NotifItem = {
  id: string;
  label: string;
  detail: string;
  href: string;
  at: string;
};

/** Derived notification list from real pending records only. */
export function getNotifications(): NotifItem[] {
  const out: NotifItem[] = [];
  for (const v of getVolunteers()) {
    if (v.workflow.status === "NEW") {
      out.push({
        id: v.ref,
        label: "New volunteer registration",
        detail: v.name || v.ref,
        href: "/admin/volunteers",
        at: v.submittedAt,
      });
    }
  }
  for (const c of getConcerns()) {
    if (c.workflow.status === "NEW") {
      out.push({
        id: c.ref,
        label: "New community concern",
        detail: `${c.category} · ${c.area || "no area"}`,
        href: "/admin/concerns",
        at: c.submittedAt,
      });
    }
  }
  for (const q of getQuestions()) {
    if (q.workflow.status === "NEW") {
      out.push({
        id: q.ref,
        label: "Question awaiting response",
        detail: q.name || q.ref,
        href: "/admin/questions",
        at: q.submittedAt,
      });
    }
  }
  const admin = getAdminState();
  for (const u of admin.updates) {
    if (u.status === "DRAFT" || u.status === "REVIEW") {
      out.push({
        id: u.id,
        label: "Content awaiting review",
        detail: u.title,
        href: "/admin/updates",
        at: u.date,
      });
    }
  }
  for (const m of admin.media) {
    if (m.status === "RAW" || m.status === "SELECTED") {
      out.push({
        id: m.id,
        label: "Media awaiting approval",
        detail: m.title,
        href: "/admin/media",
        at: "",
      });
    }
  }
  const upcoming = admin.activities.filter(
    (a) => a.status === "CONFIRMED" && a.date && a.date >= new Date().toISOString().slice(0, 10)
  );
  for (const a of upcoming) {
    out.push({
      id: a.id,
      label: "Upcoming activity",
      detail: `${a.name} · ${a.date}`,
      href: "/admin/activities",
      at: a.date,
    });
  }
  return out.sort((x, y) => (x.at > y.at ? -1 : 1));
}

export function countByStatus<T extends string>(
  rows: { workflow: { status: string } }[],
  status: T
): number {
  return rows.filter((r) => r.workflow.status === status).length;
}