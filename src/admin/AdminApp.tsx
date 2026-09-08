import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";
import {
  countByStatus,
  getConcerns,
  getNotifications,
  getQuestions,
  getVolunteers,
} from "./data";
import { getAdminState } from "../lib/adminStore";
import { BellIcon, CloseIcon, MenuIcon, SignOutIcon } from "./shared";
import "./admin.css";

import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Volunteers from "./pages/Volunteers";
import Concerns from "./pages/Concerns";
import Questions from "./pages/Questions";
import Activities from "./pages/Activities";
import Social from "./pages/Social";
import Media from "./pages/Media";
import Documents from "./pages/Documents";
import Updates from "./pages/Updates";
import PublicService from "./pages/PublicService";
import Survey from "./pages/Survey";
import Analytics from "./pages/Analytics";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Audit from "./pages/Audit";

type Page =
  | "overview"
  | "volunteers"
  | "concerns"
  | "questions"
  | "activities"
  | "social"
  | "media"
  | "updates"
  | "public-service"
  | "survey"
  | "documents"
  | "analytics"
  | "team"
  | "settings"
  | "notifications"
  | "audit";

function pageFromPath(path: string): Page {
  const p = path.replace(/\/admin\/?/, "").split("/")[0];
  const map: Record<string, Page> = {
    volunteers: "volunteers",
    concerns: "concerns",
    questions: "questions",
    activities: "activities",
    social: "social",
    media: "media",
    documents: "documents",
    updates: "updates",
    "public-service": "public-service",
    survey: "survey",
    analytics: "analytics",
    team: "team",
    notifications: "notifications",
    audit: "audit",
    settings: "settings",
  };
  return map[p] ?? "overview";
}

const NAV: { group: string; items: { id: Page; label: string; href: string }[] }[] = [
  {
    group: "Operations",
    items: [
      { id: "overview", label: "Overview", href: "/admin" },
      { id: "volunteers", label: "Volunteers", href: "/admin/volunteers" },
      { id: "concerns", label: "Community concerns", href: "/admin/concerns" },
      { id: "questions", label: "Ask Edgar", href: "/admin/questions" },
      { id: "activities", label: "Activities", href: "/admin/activities" },
    ],
  },
  {
    group: "Content",
    items: [
      { id: "social", label: "Social media", href: "/admin/social" },
      { id: "media", label: "Media library", href: "/admin/media" },
      { id: "updates", label: "Updates", href: "/admin/updates" },
      { id: "public-service", label: "Public service", href: "/admin/public-service" },
    ],
  },
  {
    group: "Insight",
    items: [
      { id: "survey", label: "Community survey", href: "/admin/survey" },
      { id: "documents", label: "Documents", href: "/admin/documents" },
      { id: "analytics", label: "Analytics", href: "/admin/analytics" },
      { id: "team", label: "Team", href: "/admin/team" },
    ],
  },
  {
    group: "System",
    items: [
      { id: "notifications", label: "Notifications", href: "/admin/notifications" },
      { id: "audit", label: "Audit log", href: "/admin/audit" },
      { id: "settings", label: "Settings", href: "/admin/settings" },
    ],
  },
];

function counts(): Record<Page, number> {
  const volunteers = getVolunteers();
  const concerns = getConcerns();
  const questions = getQuestions();
  const admin = getAdminState();
  return {
    overview: 0,
    volunteers: countByStatus(volunteers, "NEW"),
    concerns: countByStatus(concerns, "NEW"),
    questions: questions.filter((q) => q.workflow.status === "NEW").length,
    activities: admin.activities.length,
    social: admin.social.length,
    media: admin.media.filter((m) => m.status === "RAW" || m.status === "SELECTED").length,
    updates: admin.updates.filter((u) => u.status === "DRAFT" || u.status === "REVIEW").length,
    "public-service": 0,
    survey: 0,
    documents: admin.documents.length,
    analytics: 0,
    team: admin.team.length,
    notifications: getNotifications().length,
    audit: admin.audit.length,
    settings: 0,
  };
}

export default function AdminApp({ path }: { path: string }) {
  const { session, signOut } = useAuth();

  if (!session) {
    return (
      <div className="admin-root">
        <Login />
      </div>
    );
  }

  return <Shell path={path} onSignOut={signOut} />;
}

function Shell({ path, onSignOut }: { path: string; onSignOut: () => void }) {
  const { session } = useAuth();
  const page = pageFromPath(path);
  const [sideOpen, setSideOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [notifs, setNotifs] = useState(getNotifications());

  useEffect(() => {
    setNotifs(getNotifications());
  }, [path]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setSideOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSideOpen(false);
        setBellOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cts = counts();

  const pageTitle =
    NAV.flatMap((g) => g.items).find((i) => i.id === page)?.label ?? "Overview";

  const pages: Record<Page, ReactNode> = {
    overview: <Overview />,
    volunteers: <Volunteers />,
    concerns: <Concerns />,
    questions: <Questions />,
    activities: <Activities />,
    social: <Social />,
    media: <Media />,
    updates: <Updates />,
    "public-service": <PublicService />,
    survey: <Survey />,
    documents: <Documents />,
    analytics: <Analytics />,
    team: <Team />,
    settings: <Settings />,
    notifications: <Notifications />,
    audit: <Audit />,
  };

  return (
    <div className="admin-root">
      <div className="apreview">
        <span>Preview session</span>
        <span>·</span>
        <span>Development only — authentication not connected</span>
        <a href="/">View public site</a>
      </div>

      {sideOpen && (
        <div
          className={`aside__scrim aside__scrim--show`}
          onClick={() => setSideOpen(false)}
        />
      )}

      <div className="admin-shell">
        <aside className={`aside ${sideOpen ? "aside--open" : ""}`}>
          <div className="aside__brand">
            <img
              src="/brand/logo.png"
              alt="Edgar Corvera"
              className="aside__logo"
              width={1983}
              height={793}
            />
            <span className="aside__brand-meta">
              <span className="aside__brand-name">Campaign operations</span>
              <span className="aside__brand-sub">Edgar Corvera</span>
            </span>
          </div>

          <nav className="aside__nav" aria-label="Operations">
            {NAV.map((group) => (
              <div className="aside__group" key={group.group}>
                <p className="aside__group-label">{group.group}</p>
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`aside__link ${page === item.id ? "aside__link--active" : ""}`}
                    onClick={() => setSideOpen(false)}
                  >
                    <span>{item.label}</span>
                    {cts[item.id] > 0 && (
                      <span className="aside__count">{cts[item.id]}</span>
                    )}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <div className="aside__foot">
            <span className="aside__auth">
              {session!.name} · {session!.role}
            </span>
            <button className="abtn abtn--ghost" onClick={onSignOut}>
              <SignOutIcon />
              Sign out
            </button>
          </div>
        </aside>

        <div className="admin-main">
          <header className="atop">
            <div className="atop__left">
              <button
                className="abtn abtn--icon"
                aria-label="Open navigation"
                onClick={() => setSideOpen(true)}
                style={{ display: window.innerWidth > 1024 ? "none" : "inline-flex" }}
              >
                <MenuIcon />
              </button>
              <p className="atop__crumb">
                <b>Operations</b> / {pageTitle}
              </p>
            </div>
            <div className="atop__right">
              <span className="atop__user">{session!.role}</span>
              <div className="atop__bell">
                <button
                  className="abtn abtn--icon"
                  aria-label="Notifications"
                  aria-expanded={bellOpen}
                  onClick={() => setBellOpen((s) => !s)}
                >
                  <BellIcon />
                </button>
                {notifs.length > 0 && <span className="atop__bell-dot" />}
                {bellOpen && (
                  <div className="anot">
                    <div className="anot__head">
                      <span className="anot__title">Notifications</span>
                      <span className="amono">{notifs.length}</span>
                    </div>
                    {notifs.length === 0 ? (
                      <p className="amuted" style={{ padding: "0.5rem", fontSize: "0.78rem" }}>
                        Nothing pending right now.
                      </p>
                    ) : (
                      notifs.slice(0, 5).map((n) => (
                        <a key={n.id} href={n.href} className="anot__item">
                          <span>
                            <strong>{n.label}</strong>
                            <br />
                            {n.detail}
                          </span>
                          <small>{n.at ? new Date(n.at).toLocaleDateString() : ""}</small>
                        </a>
                      ))
                    )}
                    <a href="/admin/notifications" className="anot__see-all">
                      View all notifications →
                    </a>
                  </div>
                )}
              </div>
              <span
                className="abtn abtn--icon"
                role="button"
                aria-label="Close notifications popover"
                style={{ display: bellOpen ? "inline-flex" : "none" }}
                onClick={() => setBellOpen(false)}
              >
                <CloseIcon />
              </span>
            </div>
          </header>

          <main className="apage" key={page}>
            {pages[page]}
          </main>
        </div>
      </div>
    </div>
  );
}