import Reveal from "../lib/reveal";
import Nav from "./Nav";
import Footer from "./Footer";
import "./digital-campaign.css";

const CAMPAIGN_GETS = [
  {
    n: "01",
    title: "One source of truth",
    text: "Every member of the campaign team works from the same up-to-date record — schedules, tasks, locations, and updates all live in one place.",
  },
  {
    n: "02",
    title: "A clear campaign timeline",
    text: "From readiness to final days to closeout, the whole campaign path is laid out in plain view — so the team always knows where it stands.",
  },
  {
    n: "03",
    title: "Clean, organized media",
    text: "Photos, documents, and materials are named, dated, and stored in one library — ready when they are needed, easy to find later.",
  },
  {
    n: "04",
    title: "Public trust through transparency",
    text: "The same discipline applied in public service — studied, documented, and accountable — is applied to how the campaign presents itself.",
  },
];

const QR_SYSTEM = [
  {
    n: "01",
    title: "A link the community can scan",
    text: "A single QR code placed in campaign materials leads to the campaign's public digital presence — no clutter, no confusion.",
  },
  {
    n: "02",
    title: "Information in one place",
    text: "What the community needs — who, what, where, when — is gathered into one simple, reliable place they can open on any phone.",
  },
  {
    n: "03",
    title: "Easy to update, always accurate",
    text: "Because the content is centralized, a correction or an update appears everywhere at once. The community always reads the current version.",
  },
];

const FIELD_DOC = [
  {
    n: "01",
    title: "Evidence over claims",
    text: "Field work is documented as it happens — with date, place, and detail — so the record rests on what was actually done.",
  },
  {
    n: "02",
    title: "Organized records",
    text: "Every entry is filed consistently, so the team can recall precisely what happened, where, and when.",
  },
  {
    n: "03",
    title: "Accountable to the community",
    text: "The same discipline Edgar applies to public service — measure, plan, do, account — is applied to the campaign's own activity.",
  },
];

const COMMUNITY_CONNECTION = [
  {
    n: "01",
    title: "Two-way, not one-way",
    text: "The campaign listens as much as it speaks — concerns, questions, and input from the community are gathered and acknowledged.",
  },
  {
    n: "02",
    title: "In every voice",
    text: "Digital is one channel among many. It works alongside field visits and face-to-face contact where the community lives and moves.",
  },
  {
    n: "03",
    title: "Real people, real responses",
    text: "Every message is read and answered by the team — not by automated noise. The connection stays human.",
  },
];

const PRIVATE_OPS = [
  {
    n: "01",
    title: "Internal coordination",
    text: "One shared space for the team to coordinate tasks, schedules, and responsibilities — without scattering information across messages.",
  },
  {
    n: "02",
    title: "Controlled access",
    text: "The private operations area is separate and restricted. Only authorized members of the campaign team can enter it.",
  },
  {
    n: "03",
    title: "Protected records",
    text: "Internal notes and planning are kept separate from public material — protected while the campaign is active.",
  },
];

const SOCIAL_CENTER = [
  {
    n: "01",
    title: "One calendar, one voice",
    text: "Posts across channels are planned from a single calendar, keeping the message consistent and the tempo steady.",
  },
  {
    n: "02",
    title: "Consistent timing",
    text: "Material goes out on a schedule the team controls — not in scattered bursts, but in a steady, planned rhythm.",
  },
  {
    n: "03",
    title: "Keep it human",
    text: "Campaigns remain most credible when they sound like real people talking to neighbors, not like output from a machine.",
  },
];

const MEDIA_LIBRARY = [
  {
    n: "01",
    title: "One organized archive",
    text: "Photos, documents, and materials are filed by date and purpose — searchable, label-led, and easy to pull when needed.",
  },
  {
    n: "02",
    title: "Named and dated",
    text: "Consistent naming keeps the library usable even months later, and makes it simple to trace any image back to its moment.",
  },
  {
    n: "03",
    title: "Ready for the record",
    text: "An organized library supports both the campaign and the lasting public record it leaves behind.",
  },
];

const ACTIVITIES = [
  {
    title: "Readiness",
    period: "SEP 28 – OCT 21",
    text: "Building and testing the tools the campaign will rely on, so everything is ready before the official campaign period begins.",
  },
  {
    title: "Official campaign",
    period: "OCT 22 – OCT 31",
    text: "The core of the campaign — connected, documented field activity across the barangay, day by day.",
  },
  {
    title: "The final days",
    period: "OCT 29 – OCT 31",
    text: "A focused, deliberate closing stretch — measured, not rushed, and always in step with the law.",
  },
  {
    title: "Silence",
    period: "NOV 1",
    text: "All campaign activity pauses as the law requires. The quiet speaks louder than any post.",
  },
  {
    title: "Election day",
    period: "NOV 2",
    text: "The team steps back to let the people of Tabon decide — calmly, cleanly, and without obstruction.",
  },
  {
    title: "Closeout",
    period: "After the election",
    text: "The work is accounted for, records are preserved, and the campaign closes openly and honestly.",
  },
];

const HOW_CONNECTS = [
  {
    n: "01",
    title: "Field",
    tag: "What happens on the ground",
    text: "The source of the campaign's real work — visits, activities, and the people behind them.",
  },
  {
    n: "02",
    title: "Documentation",
    tag: "The record",
    text: "Every field activity is captured, dated, and filed — so the work is never lost or unverifiable.",
  },
  {
    n: "03",
    title: "Operations",
    tag: "The coordination",
    text: "A private space where the team plans, schedules, and coordinates around that record.",
  },
  {
    n: "04",
    title: "Public",
    tag: "The connection",
    text: "A clean, honest public presence shaped from the documented work — so the community hears what actually happened.",
  },
];

const MY_ROLE = [
  {
    title: "Digital lead & operator",
    text: "My role is the digital side of the campaign — building and running the systems that keep the team organized and the public connected. I am not the campaign manager and do not claim to be one.",
  },
  {
    title: "Reliable, not flashy",
    text: "The work favors dependability over noise. Systems are built to run steadily, be easy to operate, and survive a demanding schedule.",
  },
  {
    title: "Accountable to the same rules",
    text: "Everything the digital side does stays within the same legal and ethical boundaries that govern the whole campaign.",
  },
];

const TEAM_ROLE = [
  {
    title: "The whole team",
    text: "The campaign team is broader than any one role — organizers, volunteers, and supporters each carry the work forward.",
  },
  {
    title: "My place in it",
    text: "I support the team's digital system so that coordination is easier and the public connection is stronger.",
  },
  {
    title: "Plenty still to do",
    text: "Digital is one piece of a larger effort. Field work, community contact, and the people themselves remain at the center.",
  },
];

const TIMELINE = [
  {
    label: "Build & readiness",
    years: "SEP 2026 ONWARD",
    items: ["Digital system set up and tested", "Team onboarding and roles clarified"],
  },
  {
    label: "Official campaign",
    years: "OCT 22 – NOV 2",
    items: ["Connected field activity", "Steady public presence", "Full documentation"],
  },
  {
    label: "Silence & election day",
    years: "NOV 1 – NOV 2",
    items: ["Campaign activity paused as required", "People of Tabon decide"],
  },
  {
    label: "Closeout",
    years: "AFTER THE ELECTION",
    items: ["Work accounted for", "Records preserved", "Campaign closed honestly"],
  },
];

const COMPLIANCE = [
  "This page is the digital operations side of a public-service campaign — not a commercial offering. There is no pricing, no package, and nothing for sale.",
  "It is a demonstration and planning concept. No figures, statistics, results, or testimonials on this page are real or claimed.",
  "The campaign will operate strictly within the rules and schedules set by the Commission on Elections (COMELEC). Nothing here overrides or replaces those rules.",
  "Nothing on this page is legal advice. The campaign will follow the guidance of qualified counsel on all matters.",
  "All published content reflects only confirmed information, in line with the same honesty this site is built on.",
];

export default function DigitalCampaign() {
  return (
    <>
      <Nav />
      <main className="dc">
      {/* 01 — HERO */}
      <section className="dc-hero" id="dc-top">
        <div className="container">
          <div className="dc-hero__meta">
            <p className="dc-hero__mono">The digital side of the campaign</p>
            <p className="dc-hero__mono dc-hero__mono--right">
              Barangay Tabon · Bislig City · Surigao del Sur
            </p>
          </div>

          <div className="dc-hero__grid">
            <div className="dc-hero__copy">
              <Reveal as="p" className="dc-hero__overline">Digital Campaign</Reveal>
              <Reveal as="h1" className="dc-hero__title" delay={60}>
                ONE CAMPAIGN.{" "}
                <span className="dc-hero__title-accent">ONE DIGITAL SYSTEM.</span>
              </Reveal>
              <Reveal as="p" className="dc-hero__lede" delay={140}>
                A single, organized digital system behind the campaign for the
                people of Barangay Tabon — coordinate the team, document the
                work, and connect with the community in one clear, honest place.
              </Reveal>
              <Reveal className="dc-hero__actions" delay={220}>
                <a className="dc-hero__btn dc-hero__btn--solid" href="#dc-what">
                  What the campaign gets
                </a>
                <a className="dc-hero__btn dc-hero__btn--ghost" href="#dc-how">
                  How it connects
                </a>
              </Reveal>
            </div>

            <Reveal className="dc-hero__panel" variant="right" delay={120}>
              <div className="dc-hero__panel-frame">
                <p className="dc-hero__panel-index">DIGITAL / 01</p>
                <span className="dc-hero__panel-line" />
                <p className="dc-hero__panel-caption">
                  Organize · Document · Connect
                </p>
                <span className="dc-hero__panel-mono">
                  SEP 2026 — after the election
                </span>
              </div>
              <span className="dc-hero__corner dc-hero__corner--tl" aria-hidden="true" />
              <span className="dc-hero__corner dc-hero__corner--br" aria-hidden="true" />
            </Reveal>
          </div>

          <div className="dc-hero__footer">
            <p className="dc-hero__mono">Digital operations · in service of the record</p>
            <p className="dc-hero__mono dc-hero__mono--right">No pricing. Nothing for sale.</p>
          </div>
        </div>
      </section>

      {/* 02 — MORE THAN A WEBSITE */}
      <section className="dc-section dc-sec-intro" aria-labelledby="dc-more-title">
        <div className="container">
          <div className="dc-sec-intro__grid">
            <div>
              <Reveal as="p" className="eyebrow" >More than a website</Reveal>
              <Reveal as="h2" className="dc__title" id="dc-more-title" delay={60}>
                The digital side of the campaign.
              </Reveal>
            </div>
            <Reveal as="div" className="dc-sec-intro__prose" delay={120}>
              <p>
                A campaign depends on coordination, timing, and trust. This
                page describes the <strong>digital system</strong> that keeps those
                three things in order — a working operations layer behind the
                campaign, not a marketing page.
              </p>
              <p>
                It is the digital side of a public-service campaign for Barangay
                Tabon. Positioned that way on purpose: this is how the campaign
                is organized and run — not a commercial service.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — WHAT THE CAMPAIGN GETS */}
      <section className="dc-section dc-sec-blue" id="dc-what" aria-labelledby="dc-what-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">What the campaign gets</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-what-title" delay={60}>
              Order, record,
              <br /> and a clear path.
            </Reveal>
          </div>
          <div className="dc-cards">
            {CAMPAIGN_GETS.map((c, i) => (
              <Reveal className="dc-card" key={c.n} delay={i * 80}>
                <span className="dc-card__n">{c.n}</span>
                <h3 className="dc-card__title">{c.title}</h3>
                <p className="dc-card__text">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — QR SYSTEM */}
      <section className="dc-section" aria-labelledby="dc-qr-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">One simple link</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-qr-title" delay={60}>
              The QR system.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              A single scannable link connects the community to the campaign's
              public information — nothing scattered, nothing confusing.
            </Reveal>
          </div>
          <ol className="dc-list">
            {QR_SYSTEM.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={it.n} delay={i * 60}>
                <span className="dc-list__n">{it.n}</span>
                <div className="dc-list__body">
                  <h3 className="dc-list__title">{it.title}</h3>
                  <p className="dc-list__text">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 — FIELD DOCUMENTATION */}
      <section className="dc-section dc-sec-tint" aria-labelledby="dc-field-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">Evidence over claims</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-field-title" delay={60}>
              Field documentation.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              The campaign's real work happens on the ground. Every field
              activity is documented as it happens — dated, placed, and filed —
              so the record rests on what was actually done.
            </Reveal>
          </div>
          <ol className="dc-list">
            {FIELD_DOC.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={it.n} delay={i * 60}>
                <span className="dc-list__n">{it.n}</span>
                <div className="dc-list__body">
                  <h3 className="dc-list__title">{it.title}</h3>
                  <p className="dc-list__text">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — COMMUNITY CONNECTION */}
      <section className="dc-section" aria-labelledby="dc-community-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">Two-way, not one-way</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-community-title" delay={60}>
              Community connection.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              Digital works alongside field contact. The campaign listens as
              much as it speaks, and every message reaches a real person.
            </Reveal>
          </div>
          <ol className="dc-list">
            {COMMUNITY_CONNECTION.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={it.n} delay={i * 60}>
                <span className="dc-list__n">{it.n}</span>
                <div className="dc-list__body">
                  <h3 className="dc-list__title">{it.title}</h3>
                  <p className="dc-list__text">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — PRIVATE OPERATIONS */}
      <section className="dc-section dc-sec-dark" aria-labelledby="dc-ops-title">
        <div className="container">
          <div className="dc__head dc__head--dark">
            <Reveal as="p" className="eyebrow">Behind the scenes</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-ops-title" delay={60}>
              Private operations.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              Inside the campaign, a controlled, shared space keeps the team
              coordinated — separate from what the public sees.
            </Reveal>
          </div>
          <ol className="dc-list dc-list--dark">
            {PRIVATE_OPS.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={it.n} delay={i * 60}>
                <span className="dc-list__n">{it.n}</span>
                <div className="dc-list__body">
                  <h3 className="dc-list__title">{it.title}</h3>
                  <p className="dc-list__text">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 08 — SOCIAL MEDIA COMMAND CENTER */}
      <section className="dc-section" aria-labelledby="dc-social-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">Steady, not scattered</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-social-title" delay={60}>
              Social media command center.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              One calendar, one voice. Posts are planned, timed, and kept human
              across every channel.
            </Reveal>
          </div>
          <ol className="dc-list">
            {SOCIAL_CENTER.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={it.n} delay={i * 60}>
                <span className="dc-list__n">{it.n}</span>
                <div className="dc-list__body">
                  <h3 className="dc-list__title">{it.title}</h3>
                  <p className="dc-list__text">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 09 — MEDIA LIBRARY */}
      <section className="dc-section dc-sec-tint" aria-labelledby="dc-media-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">An organized archive</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-media-title" delay={60}>
              The media library.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              Photos, documents, and materials — named, dated, and filed in one
              searchable place that supports both the campaign and the record it
              leaves behind.
            </Reveal>
          </div>
          <ol className="dc-list">
            {MEDIA_LIBRARY.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={it.n} delay={i * 60}>
                <span className="dc-list__n">{it.n}</span>
                <div className="dc-list__body">
                  <h3 className="dc-list__title">{it.title}</h3>
                  <p className="dc-list__text">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 10 — ACTIVITIES */}
      <section className="dc-section" aria-labelledby="dc-activities-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">The campaign path</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-activities-title" delay={60}>
              Campaign activities.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              The campaign is laid out in phases — from readiness through the
              official period to a clean closeout — always in step with the law.
            </Reveal>
          </div>
          <ol className="dc-phases">
            {ACTIVITIES.map((it, i) => (
              <Reveal as="li" className="dc-phase" key={it.title} delay={i * 50}>
                <span className="dc-phase__n">{String(i + 1).padStart(2, "0")}</span>
                <div className="dc-phase__body">
                  <h3 className="dc-phase__title">{it.title}</h3>
                  <p className="dc-phase__text">{it.text}</p>
                </div>
                <span className="dc-phase__period">{it.period}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 11 — HOW EVERYTHING CONNECTS */}
      <section className="dc-section dc-sec-dark" id="dc-how" aria-labelledby="dc-connect-title">
        <div className="container">
          <div className="dc__head dc__head--dark">
            <Reveal as="p" className="eyebrow">One system, four parts</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-connect-title" delay={60}>
              How everything connects.
            </Reveal>
          </div>
          <div className="dc-connect">
            {HOW_CONNECTS.map((it, i) => (
              <Reveal className="dc-connect__item" key={it.n} delay={i * 90}>
                <span className="dc-connect__n">{it.n}</span>
                <h3 className="dc-connect__title">{it.title}</h3>
                <span className="dc-connect__tag">{it.tag}</span>
                <p className="dc-connect__text">{it.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="dc-connect__flow" delay={140}>
            <span>Field</span>
            <i aria-hidden="true">→</i>
            <span>Documentation</span>
            <i aria-hidden="true">→</i>
            <span>Operations</span>
            <i aria-hidden="true">→</i>
            <span>Public</span>
          </Reveal>
        </div>
      </section>

      {/* 12 — MY ROLE */}
      <section className="dc-section" aria-labelledby="dc-role-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">My part in it</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-role-title" delay={60}>
              My role.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              The digital side of the campaign — not the campaign manager, and
              not a commercial service.
            </Reveal>
          </div>
          <div className="dc-cards">
            {MY_ROLE.map((it, i) => (
              <Reveal className="dc-card dc-card--plain" key={it.title} delay={i * 80}>
                <span className="dc-card__tag">{it.title}</span>
                <p className="dc-card__text">{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — CAMPAIGN TEAM ROLE */}
      <section className="dc-section dc-sec-tint" aria-labelledby="dc-team-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">The work is shared</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-team-title" delay={60}>
              The campaign team.
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              Digital is one piece of a much larger effort, carried by
              organizers, volunteers, and supporters.
            </Reveal>
          </div>
          <div className="dc-cards">
            {TEAM_ROLE.map((it, i) => (
              <Reveal className="dc-card dc-card--plain" key={it.title} delay={i * 80}>
                <span className="dc-card__tag">{it.title}</span>
                <p className="dc-card__text">{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — COMPLETE TIMELINE */}
      <section className="dc-section" aria-labelledby="dc-timeline-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">The whole path</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-timeline-title" delay={60}>
              SEP 2026 — closeout.
            </Reveal>
          </div>
          <div className="dc-timeline">
            {TIMELINE.map((t, i) => (
              <Reveal className="dc-timeline__col" key={t.label} delay={i * 80}>
                <span className="dc-timeline__years">{t.years}</span>
                <h3 className="dc-timeline__label">{t.label}</h3>
                <ul className="dc-timeline__items">
                  {t.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — LESS SCATTERED / MORE CONNECTED */}
      <section className="dc-section dc-sec-blue dc-sec-closing" aria-labelledby="dc-closing-title">
        <div className="container">
          <div className="dc-closing">
            <Reveal as="p" className="eyebrow">The point of it all</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-closing-title" delay={60}>
              Less scattered.
              <br />
              <span className="dc-closing__accent">More connected.</span>
            </Reveal>
            <Reveal as="p" className="dc-closing__text" delay={140}>
              When the team is organized, the record is honest, and the
              community stays connected — the campaign runs the way public life
              should: measured, open, and accountable.
            </Reveal>
            <Reveal className="dc-closing__actions" delay={220}>
              <a className="dc-hero__btn dc-hero__btn--solid" href="/">
                Return to the campaign site
              </a>
              <a className="dc-hero__btn dc-hero__btn--ghost" href="/volunteer">
                Join the team →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="dc-sec-compliance" aria-labelledby="dc-compliance-title">
        <div className="container">
          <Reveal as="p" className="dc-compliance__label" id="dc-compliance-title">
            Honest boundaries
          </Reveal>
          <ul className="dc-compliance__list">
            {COMPLIANCE.map((c, i) => (
              <Reveal as="li" className="dc-compliance__item" key={i} delay={i * 30}>
                <span className="dc-compliance__n">{String(i + 1).padStart(2, "0")}</span>
                <p>{c}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
