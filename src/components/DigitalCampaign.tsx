import Reveal from "../lib/reveal";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLang } from "../i18n/LanguageContext";
import "./digital-campaign.css";

const ACTIVITIES_PERIODS = [
  "SEP 28 – OCT 21",
  "OCT 22 – OCT 31",
  "OCT 29 – OCT 31",
  "NOV 1",
  "NOV 2",
  "After the election",
] as const;

const TIMELINE_YEARS = [
  "SEP 2026 ONWARD",
  "OCT 22 – NOV 2",
  "NOV 1 – NOV 2",
  "AFTER THE ELECTION",
] as const;

export default function DigitalCampaign() {
  const { t } = useLang();
  return (
    <>
      <Nav />
      <main className="dc" id="main">
      {/* 01 — HERO */}
      <section className="dc-hero" id="dc-top">
        <div className="container">
          <div className="dc-hero__meta">
            <p className="dc-hero__mono">{t.digitalCampaign.heroMono}</p>
            <p className="dc-hero__mono dc-hero__mono--right">
              Barangay Tabon · Bislig City · Surigao del Sur
            </p>
          </div>

          <div className="dc-hero__grid">
            <div className="dc-hero__copy">
              <Reveal as="p" className="dc-hero__overline">Digital Campaign</Reveal>
              <Reveal as="h1" className="dc-hero__title" delay={60}>
                {t.digitalCampaign.heroTitle1}{" "}
                <span className="dc-hero__title-accent">{t.digitalCampaign.heroTitle2}</span>
              </Reveal>
              <Reveal as="p" className="dc-hero__lede" delay={140}>
                {t.digitalCampaign.heroLede}
              </Reveal>
              <Reveal className="dc-hero__actions" delay={220}>
                <a className="dc-hero__btn dc-hero__btn--solid" href="#dc-what">
                  {t.digitalCampaign.heroCta1}
                </a>
                <a className="dc-hero__btn dc-hero__btn--ghost" href="#dc-how">
                  {t.digitalCampaign.heroCta2}
                </a>
              </Reveal>
            </div>

            <Reveal className="dc-hero__panel" variant="right" delay={120}>
              <div className="dc-hero__panel-frame">
                <p className="dc-hero__panel-index">DIGITAL / 01</p>
                <span className="dc-hero__panel-line" />
                <p className="dc-hero__panel-caption">
                  {t.digitalCampaign.panelCaption}
                </p>
                <span className="dc-hero__panel-mono">
                  {t.digitalCampaign.panelMono}
                </span>
              </div>
              <span className="dc-hero__corner dc-hero__corner--tl" aria-hidden="true" />
              <span className="dc-hero__corner dc-hero__corner--br" aria-hidden="true" />
            </Reveal>
          </div>

          <div className="dc-hero__footer">
            <p className="dc-hero__mono">{t.digitalCampaign.heroFootLeft}</p>
            <p className="dc-hero__mono dc-hero__mono--right">{t.digitalCampaign.heroFootRight}</p>
          </div>
        </div>
      </section>

      {/* 02 — MORE THAN A WEBSITE */}
      <section className="dc-section dc-sec-intro" aria-labelledby="dc-more-title">
        <div className="container">
          <div className="dc-sec-intro__grid">
            <div>
              <Reveal as="p" className="eyebrow" >{t.digitalCampaign.moreEyebrow}</Reveal>
              <Reveal as="h2" className="dc__title" id="dc-more-title" delay={60}>
                {t.digitalCampaign.moreTitle}
              </Reveal>
            </div>
            <Reveal as="div" className="dc-sec-intro__prose" delay={120}>
              <p>
                {t.digitalCampaign.moreP1Lead}
                <strong>{t.digitalCampaign.moreP1Strong}</strong>
                {t.digitalCampaign.moreP1Rest}
              </p>
              <p>
                {t.digitalCampaign.moreP2}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — WHAT THE CAMPAIGN GETS */}
      <section className="dc-section dc-sec-blue" id="dc-what" aria-labelledby="dc-what-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.whatEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-what-title" delay={60}>
              {t.digitalCampaign.whatTitle1}
              <br /> {t.digitalCampaign.whatTitle2}
            </Reveal>
          </div>
          <div className="dc-cards">
            {t.dcGets.map((c, i) => (
              <Reveal className="dc-card" key={String(i + 1).padStart(2, "0")} delay={i * 80}>
                <span className="dc-card__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.qrEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-qr-title" delay={60}>
              {t.digitalCampaign.qrTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.qrSub}
            </Reveal>
          </div>
          <ol className="dc-list">
            {t.dcQr.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={String(i + 1).padStart(2, "0")} delay={i * 60}>
                <span className="dc-list__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.fieldEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-field-title" delay={60}>
              {t.digitalCampaign.fieldTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.fieldSub}
            </Reveal>
          </div>
          <ol className="dc-list">
            {t.dcField.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={String(i + 1).padStart(2, "0")} delay={i * 60}>
                <span className="dc-list__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.communityEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-community-title" delay={60}>
              {t.digitalCampaign.communityTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.communitySub}
            </Reveal>
          </div>
          <ol className="dc-list">
            {t.dcCommunity.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={String(i + 1).padStart(2, "0")} delay={i * 60}>
                <span className="dc-list__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.opsEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-ops-title" delay={60}>
              {t.digitalCampaign.opsTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.opsSub}
            </Reveal>
          </div>
          <ol className="dc-list dc-list--dark">
            {t.dcOps.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={String(i + 1).padStart(2, "0")} delay={i * 60}>
                <span className="dc-list__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.socialEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-social-title" delay={60}>
              {t.digitalCampaign.socialTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.socialSub}
            </Reveal>
          </div>
          <ol className="dc-list">
            {t.dcSocial.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={String(i + 1).padStart(2, "0")} delay={i * 60}>
                <span className="dc-list__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.mediaEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-media-title" delay={60}>
              {t.digitalCampaign.mediaTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.mediaSub}
            </Reveal>
          </div>
          <ol className="dc-list">
            {t.dcMediaLib.map((it, i) => (
              <Reveal as="li" className="dc-list__entry" key={String(i + 1).padStart(2, "0")} delay={i * 60}>
                <span className="dc-list__n">{String(i + 1).padStart(2, "0")}</span>
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.activitiesEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-activities-title" delay={60}>
              {t.digitalCampaign.activitiesTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.activitiesSub}
            </Reveal>
          </div>
          <ol className="dc-phases">
            {t.dcActivities.map((it, i) => (
              <Reveal as="li" className="dc-phase" key={it.title} delay={i * 50}>
                <span className="dc-phase__n">{String(i + 1).padStart(2, "0")}</span>
                <div className="dc-phase__body">
                  <h3 className="dc-phase__title">{it.title}</h3>
                  <p className="dc-phase__text">{it.text}</p>
                </div>
                <span className="dc-phase__period">{ACTIVITIES_PERIODS[i]}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 11 — HOW EVERYTHING CONNECTS */}
      <section className="dc-section dc-sec-dark" id="dc-how" aria-labelledby="dc-connect-title">
        <div className="container">
          <div className="dc__head dc__head--dark">
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.connectEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-connect-title" delay={60}>
              {t.digitalCampaign.connectTitle}
            </Reveal>
          </div>
          <div className="dc-connect">
            {t.dcConnects.map((it, i) => (
              <Reveal className="dc-connect__item" key={String(i + 1).padStart(2, "0")} delay={i * 90}>
                <span className="dc-connect__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="dc-connect__title">{it.title}</h3>
                <span className="dc-connect__tag">{it.tag}</span>
                <p className="dc-connect__text">{it.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="dc-connect__flow" delay={140}>
            <span>{t.dcFlow[0]}</span>
            <i aria-hidden="true">→</i>
            <span>{t.dcFlow[1]}</span>
            <i aria-hidden="true">→</i>
            <span>{t.dcFlow[2]}</span>
            <i aria-hidden="true">→</i>
            <span>{t.dcFlow[3]}</span>
          </Reveal>
        </div>
      </section>

      {/* 12 — MY ROLE */}
      <section className="dc-section" aria-labelledby="dc-role-title">
        <div className="container">
          <div className="dc__head">
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.roleEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-role-title" delay={60}>
              {t.digitalCampaign.roleTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.roleSub}
            </Reveal>
          </div>
          <div className="dc-cards">
            {t.dcRoles.map((it, i) => (
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.teamEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-team-title" delay={60}>
              {t.digitalCampaign.teamTitle}
            </Reveal>
            <Reveal as="p" className="dc__sub" delay={120}>
              {t.digitalCampaign.teamSub}
            </Reveal>
          </div>
          <div className="dc-cards">
            {t.dcTeamRoles.map((it, i) => (
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.timelineEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-timeline-title" delay={60}>
              {t.digitalCampaign.timelineTitle}
            </Reveal>
          </div>
          <div className="dc-timeline">
            {t.dcTimeline.map((entry, i) => (
              <Reveal className="dc-timeline__col" key={entry.label} delay={i * 80}>
                <span className="dc-timeline__years">{TIMELINE_YEARS[i]}</span>
                <h3 className="dc-timeline__label">{entry.label}</h3>
                <ul className="dc-timeline__items">
                  {entry.items.map((item) => (
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
            <Reveal as="p" className="eyebrow">{t.digitalCampaign.closingEyebrow}</Reveal>
            <Reveal as="h2" className="dc__title" id="dc-closing-title" delay={60}>
              {t.digitalCampaign.closingTitle1}
              <br />
              <span className="dc-closing__accent">{t.digitalCampaign.closingTitle2}</span>
            </Reveal>
            <Reveal as="p" className="dc-closing__text" delay={140}>
              {t.digitalCampaign.closingText}
            </Reveal>
            <Reveal className="dc-closing__actions" delay={220}>
              <a className="dc-hero__btn dc-hero__btn--solid" href="/">
                {t.digitalCampaign.closingCta1}
              </a>
              <a className="dc-hero__btn dc-hero__btn--ghost" href="/volunteer">
                {t.digitalCampaign.closingCta2} →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="dc-sec-compliance" aria-labelledby="dc-compliance-title">
        <div className="container">
          <Reveal as="p" className="dc-compliance__label" id="dc-compliance-title">
            {t.digitalCampaign.complianceLabel}
          </Reveal>
          <ul className="dc-compliance__list">
            {t.dcCompliance.map((c, i) => (
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
