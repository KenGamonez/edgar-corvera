import { useEffect, useState } from "react";
import {
  countByStatus,
  getConcerns,
  getNotifications,
  getQuestions,
  getSurveys,
  getVolunteers,
} from "../data";
import { getAdminState } from "../../lib/adminStore";
import {
  EmptyState,
  NoteBox,
  PageHeader,
  SectionLabel,
  StatCard,
  StatusBadge,
} from "../shared";

export default function Overview() {
  const volunteers = getVolunteers();
  const concerns = getConcerns();
  const questions = getQuestions();
  const surveys = getSurveys();
  const notifs = getNotifications();

  const [admin, setAdmin] = useState(getAdminState());
  useEffect(() => {
    setAdmin(getAdminState());
  }, []);

  const upcoming = admin.activities.filter(
    (a) => a.status === "CONFIRMED" && a.date >= new Date().toISOString().slice(0, 10)
  );
  const pendingContent = admin.updates.filter((u) => u.status === "DRAFT" || u.status === "REVIEW");
  const pendingMedia = admin.media.filter((m) => m.status === "RAW" || m.status === "SELECTED");

  const attention: { label: string; detail: string; href: string; badge: string }[] = [];
  for (const v of volunteers) {
    if (v.workflow.status === "NEW")
      attention.push({
        label: "New volunteer registration",
        detail: `${v.name || "Unnamed"} · ${v.area || "no area"}`,
        href: "/admin/volunteers",
        badge: "NEW",
      });
  }
  for (const c of concerns) {
    if (c.workflow.status === "NEW")
      attention.push({
        label: "New community concern",
        detail: `${c.category} · ${c.area || "no area"}`,
        href: "/admin/concerns",
        badge: "NEW",
      });
  }
  for (const q of questions) {
    if (q.workflow.status === "NEW" || q.workflow.status === "REVIEWING")
      attention.push({
        label: "Question awaiting response",
        detail: `${q.message.slice(0, 80)}${q.message.length > 80 ? "…" : ""}`,
        href: "/admin/questions",
        badge: q.workflow.status,
      });
  }
  for (const u of pendingContent)
    attention.push({
      label: "Content awaiting review",
      detail: u.title,
      href: "/admin/updates",
      badge: u.status,
    });
  for (const a of upcoming)
    attention.push({
      label: "Upcoming activity",
      detail: `${a.name} · ${a.date}`,
      href: "/admin/activities",
      badge: "CONFIRMED",
    });

  return (
    <>
      <PageHeader eyebrow="Command center" title="Campaign operations">
        <span className="amono">
          {surveys.length} survey responses · {notifs.length} open items
        </span>
      </PageHeader>

      <section className="astats" aria-label="Overview counts">
        <StatCard
          label="New concerns"
          value={countByStatus(concerns, "NEW")}
          note={concerns.length === 0 ? "No submissions" : `${concerns.length} total`}
          tone={countByStatus(concerns, "NEW") > 0 ? "red" : "grey"}
        />
        <StatCard
          label="Unanswered questions"
          value={questions.filter((q) => q.workflow.status !== "ANSWERED" && q.workflow.status !== "ARCHIVED").length}
          note={questions.length === 0 ? "No submissions" : `${questions.length} total`}
          tone={questions.filter((q) => q.workflow.status === "NEW").length > 0 ? "amber" : "grey"}
        />
        <StatCard
          label="New volunteers"
          value={countByStatus(volunteers, "NEW")}
          note={volunteers.length === 0 ? "No registrations" : `${volunteers.length} total`}
          tone={countByStatus(volunteers, "NEW") > 0 ? "blue" : "grey"}
        />
        <StatCard
          label="Upcoming activities"
          value={upcoming.length}
          note={admin.activities.length === 0 ? "None planned" : `${admin.activities.length} in calendar`}
          tone={upcoming.length > 0 ? "blue" : "grey"}
        />
        <StatCard
          label="Pending content"
          value={pendingContent.length}
          note="Updates & public service"
          tone={pendingContent.length > 0 ? "amber" : "grey"}
        />
        <StatCard
          label="Pending media"
          value={pendingMedia.length}
          note="Raw to approved"
          tone={pendingMedia.length > 0 ? "amber" : "grey"}
        />
      </section>

      <SectionLabel>Today / needs attention</SectionLabel>
      {attention.length === 0 ? (
        <EmptyState
          title="Nothing needs attention"
          detail="There are no new volunteer registrations, concerns, questions, or review items right now."
        />
      ) : (
        <div className="astack">
          {attention.map((item, i) => (
            <a
              key={item.label + item.detail + i}
              href={item.href}
              className="arow"
            >
              <div className="arow__main" style={{ gridTemplateColumns: "minmax(10rem,1fr) 8rem" }}>
                <div>
                  <p className="arow__title">{item.label}</p>
                  <p className="arow__sub">{item.detail}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <StatusBadge status={item.badge} />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      <SectionLabel>Data source</SectionLabel>
      <NoteBox>
        Counts above come from actual records held in this build (submissions on
        this device and team-entered entries). When Supabase is connected, these
        same cards will query the volunteer, concern, question, activity, update,
        and media tables under Row Level Security.
      </NoteBox>
    </>
  );
}