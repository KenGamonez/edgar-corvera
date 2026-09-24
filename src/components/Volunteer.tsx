import { useState } from "react";
import type { FormEvent } from "react";
import { submitVolunteer } from "../lib/api";
import { useLang } from "../i18n/LanguageContext";
import Nav from "./Nav";
import Footer from "./Footer";
import "./volunteer.css";

/** Submitted option values are invariant (API/admin data); labels translate. */
const HELP_VALUES = [
  "Community Activities",
  "Documentation / Photography",
  "Video",
  "Social Media",
  "Communications",
  "Logistics",
  "Event Support",
  "Other",
];

export default function Volunteer() {
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    email: "",
    area: "",
    help: "",
    skills: "",
    availability: "",
    preferredActivities: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);
  const { t } = useLang();

  function set(k: keyof typeof form, v: string | boolean) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = t.volunteerPage.errName;
    if (!form.contact.trim()) errs.contact = t.volunteerPage.errContact;
    if (form.email && !/.+@.+\..+/.test(form.email)) errs.email = t.volunteerPage.errEmail;
    if (!form.consent) errs.consent = t.volunteerPage.errConsent;
    setErrors(errs);
    setSubmitError(null);
    if (Object.keys(errs).length > 0) return;
    setBusy(true);
    const res = await submitVolunteer(form);
    setBusy(false);
    if (res.ok) setResult({ ref: res.ref });
    else setSubmitError(t.common.saveError);
  }

  return (
    <>
      <Nav />
      <main className="vsection" id="main">
      <section className="vsection__hero section" aria-labelledby="v-hero-title">
        <div className="container">
          <p className="eyebrow" data-reveal>
            {t.nav.joinTeam}
          </p>
          <h1
            className="vsection__hero-title"
            id="v-hero-title"
            data-reveal
          >
            {t.volunteerPage.title}
          </h1>
          <p className="vsection__hero-sub" data-reveal>
            {t.volunteerPage.sub}
          </p>
        </div>
      </section>

      <section className="vsection__form section" aria-labelledby="v-form-title">
        <div className="container vsection__grid">
          <div className="vsection__intro">
            <h2 id="v-form-title" className="vsection__form-title" data-reveal>
              {t.volunteerPage.formTitle}
            </h2>
            <p className="vsection__form-sub" data-reveal>
              {t.volunteerPage.formSub}
            </p>
          </div>

          <div className="vsection__panel" data-reveal>
            {result ? (
              <div className="form-success" role="status">
                <strong>{t.volunteerPage.successTitle}</strong>
                <br />
                {t.volunteerPage.successLead}
                {result.ref ? ` (reference ${result.ref})` : ""}.{" "}
                {t.volunteerPage.successTail}
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-name">
                      {t.volunteerPage.fullName} <em>{t.volunteerPage.required}</em>
                    </label>
                    <input
                      id="vol-name"
                      className="form-input"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-contact">
                      {t.volunteerPage.contactNumber} <em>{t.volunteerPage.required}</em>
                    </label>
                    <input
                      id="vol-contact"
                      className="form-input"
                      type="tel"
                      autoComplete="tel"
                      value={form.contact}
                      onChange={(e) => set("contact", e.target.value)}
                      aria-invalid={!!errors.contact}
                    />
                    {errors.contact && <span className="form-error">{errors.contact}</span>}
                  </div>
                </div>

                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-email">
                      {t.volunteerPage.email}
                    </label>
                    <input
                      id="vol-email"
                      className="form-input"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-area">
                      {t.volunteerPage.areaLabel}
                    </label>
                    <input
                      id="vol-area"
                      className="form-input"
                      type="text"
                      placeholder={t.volunteerPage.areaPlaceholder}
                      value={form.area}
                      onChange={(e) => set("area", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="vol-help">
                      {t.volunteerPage.helpLabel}
                    </label>
                    <select
                      id="vol-help"
                      className="form-select"
                      value={form.help}
                      onChange={(e) => set("help", e.target.value)}
                    >
                      <option value="">{t.volunteerPage.helpDefault}</option>
                      {HELP_VALUES.map((o, i) => (
                        <option key={o} value={o}>
                          {t.volunteerHelp[i]}
                        </option>
                      ))}
                    </select>
                </div>

                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-skills">
                      {t.volunteerPage.skillsLabel}
                    </label>
                    <textarea
                      id="vol-skills"
                      className="form-textarea"
                      rows={3}
                      placeholder={t.volunteerPage.optional}
                      value={form.skills}
                      onChange={(e) => set("skills", e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-availability">
                      {t.volunteerPage.availabilityLabel}
                    </label>
                    <input
                      id="vol-availability"
                      className="form-input"
                      type="text"
                      placeholder={t.volunteerPage.availabilityPlaceholder}
                      value={form.availability}
                      onChange={(e) => set("availability", e.target.value)}
                    />
                  </div>
                </div>

                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-activities">
                      {t.volunteerPage.activitiesLabel}
                    </label>
                    <input
                      id="vol-activities"
                      className="form-input"
                      type="text"
                      placeholder={t.volunteerPage.optional}
                      value={form.preferredActivities}
                      onChange={(e) => set("preferredActivities", e.target.value)}
                    />
                  </div>
                  <div />
                </div>

                <div className="form-field">
                    <label className="form-label" htmlFor="vol-message">
                      {t.volunteerPage.messageLabel}
                    </label>
                    <textarea
                      id="vol-message"
                      className="form-textarea"
                      rows={3}
                      placeholder={t.volunteerPage.optional}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </div>

                <label className="vsection__check">
                  <input
                    type="checkbox"
                    className="vsection__check-box"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                  />
                  <span>
                    {t.volunteerPage.consent} <em>{t.volunteerPage.required}</em>
                  </span>
                </label>
                {errors.consent && <span className="form-error">{errors.consent}</span>}

                {submitError && (
                  <p className="form-error" role="alert">
                    {submitError}
                  </p>
                )}

                <button className="btn-submit" type="submit" disabled={busy}>
                  {busy ? t.volunteerPage.submitting : `${t.volunteerPage.submit} →`}
                </button>

                <p className="empty__meta" style={{ marginTop: "0.8rem" }}>
                  {t.volunteerPage.privacyNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}