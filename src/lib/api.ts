/* ============================================================
   DATA LAYER — prepared for Supabase integration.
   ------------------------------------------------------------
   These functions are the single interface between the UI and
   wherever data is stored. Today they persist to the browser
   (localStorage) with a simulated network delay so the UI
   already handles loading and failure states correctly.

   When a backend is connected, replace the body of `submit`
   with a Supabase call. Tables the frontend is shaped around:

     profiles, surveys, survey_responses, community_concerns,
     questions, suggestions, announcements, events, projects,
     project_updates, media, documents
   ============================================================ */

export type SurveyPayload = { priority: string; note: string };

export type ConcernPayload = {
  category: string;
  area: string;
  description: string;
  name: string;
  contact: string;
  hasPhoto: boolean;
  photoLabel: string;
};

export type QuestionPayload = {
  name: string;
  contact: string;
  message: string;
};

export type SubscriptionPayload = { name: string; email: string };

export type Submission =
  | ({ kind: "survey" } & SurveyPayload)
  | ({ kind: "concern" } & ConcernPayload)
  | ({ kind: "question" } & QuestionPayload)
  | ({ kind: "subscription" } & SubscriptionPayload);

export type SubmitResult =
  | { ok: true; ref: string }
  | { ok: false; error: string };

const STORAGE_KEY = "edgar-corvera.submissions.v1";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function load(): Submission[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Submission[]) : [];
  } catch {
    return [];
  }
}

function store(all: Submission[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* storage unavailable — submission still confirmed in session */
  }
}

function makeRef(kind: Submission["kind"]): string {
  const prefix =
    { survey: "SURV", concern: "CONC", question: "ASK", subscription: "SUB" }[
      kind
    ] ?? "REC";
  const n = load().length + 1;
  const stamp = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")
    .slice(-4);
  return `${prefix}-${stamp}-${String(n).padStart(3, "0")}`;
}

/**
 * Common submission pipeline. When connecting Supabase, replace this
 * whole function with e.g.
 *   await supabase.from("survey_responses").insert({ ...payload });
 * and keep returning the same SubmitResult shape.
 */
async function submit(
  kind: Submission["kind"],
  payload: Omit<Submission, "kind">
): Promise<SubmitResult> {
  await wait(600); // simulated network — remove when a backend is live
  try {
    const ref = makeRef(kind);
    const all = load();
    const entry = {
      kind,
      ...(payload as Record<string, unknown>),
      ref,
      submittedAt: new Date().toISOString(),
    };
    all.push(entry as unknown as Submission);
    store(all);
    return { ok: true, ref };
  } catch {
    return {
      ok: false,
      error: "The message could not be saved right now. Please try again.",
    };
  }
}

export const submitSurvey = (p: SurveyPayload) => submit("survey", p);
export const submitConcern = (p: ConcernPayload) => submit("concern", p);
export const submitQuestion = (p: QuestionPayload) => submit("question", p);
export const subscribe = (p: SubscriptionPayload) => submit("subscription", p);