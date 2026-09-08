import { useState } from "react";
import type { FormEvent } from "react";
import { submitVolunteer } from "../lib/api";
import Nav from "./Nav";
import Footer from "./Footer";
import "./volunteer.css";

const HELP_OPTIONS = [
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
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);

  function set(k: keyof typeof form, v: string | boolean) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = "Name is required.";
    if (!form.contact.trim()) errs.contact = "Contact is required.";
    if (form.email && !/.+@.+\..+/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.consent) errs.consent = "Consent is required.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setBusy(true);
    const res = await submitVolunteer(form);
    setBusy(false);
    if (res.ok) setResult({ ref: res.ref });
  }

  return (
    <>
      <Nav />
      <main className="vsection">
      <section className="vsection__hero section" aria-labelledby="v-hero-title">
        <div className="container">
          <p className="eyebrow" data-reveal>
            Join the team
          </p>
          <h1
            className="vsection__hero-title"
            id="v-hero-title"
            data-reveal
          >
            Be part of the work in Tabon.
          </h1>
          <p className="vsection__hero-sub" data-reveal>
            Whether you can help with community activities, documentation,
            communications, logistics, or other campaign work, register your
            interest with the team.
          </p>
        </div>
      </section>

      <section className="vsection__form section" aria-labelledby="v-form-title">
        <div className="container vsection__grid">
          <div className="vsection__intro">
            <h2 id="v-form-title" className="vsection__form-title" data-reveal>
              Volunteer registration
            </h2>
            <p className="vsection__form-sub" data-reveal>
              This registration lets the team understand how you can help.
              Registering does not guarantee a role, but it tells the campaign
              you want to participate.
            </p>
          </div>

          <div className="vsection__panel" data-reveal>
            {result ? (
              <div className="form-success" role="status">
                <strong>Thank you for volunteering.</strong>
                <br />
                Your registration has been received
                {result.ref ? ` (reference ${result.ref})` : ""}. The campaign
                team will contact you regarding available opportunities.
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-name">
                      Full name <em>(required)</em>
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
                      Contact number <em>(required)</em>
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
                      Email address
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
                      Area / location
                    </label>
                    <input
                      id="vol-area"
                      className="form-input"
                      type="text"
                      placeholder="e.g. Purok 3"
                      value={form.area}
                      onChange={(e) => set("area", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="vol-help">
                    How would you like to help?
                  </label>
                  <select
                    id="vol-help"
                    className="form-select"
                    value={form.help}
                    onChange={(e) => set("help", e.target.value)}
                  >
                    <option value="">Select an area</option>
                    {HELP_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-skills">
                      Skills / experience
                    </label>
                    <textarea
                      id="vol-skills"
                      className="form-textarea"
                      rows={3}
                      placeholder="Optional"
                      value={form.skills}
                      onChange={(e) => set("skills", e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-availability">
                      Availability
                    </label>
                    <input
                      id="vol-availability"
                      className="form-input"
                      type="text"
                      placeholder="e.g. Weekends, Evenings, Flexible"
                      value={form.availability}
                      onChange={(e) => set("availability", e.target.value)}
                    />
                  </div>
                </div>

                <div className="vsection__cols">
                  <div className="form-field">
                    <label className="form-label" htmlFor="vol-activities">
                      Preferred activities
                    </label>
                    <input
                      id="vol-activities"
                      className="form-input"
                      type="text"
                      placeholder="Optional"
                      value={form.preferredActivities}
                      onChange={(e) => set("preferredActivities", e.target.value)}
                    />
                  </div>
                  <div />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="vol-message">
                    Additional message
                  </label>
                  <textarea
                    id="vol-message"
                    className="form-textarea"
                    rows={3}
                    placeholder="Optional"
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
                    I consent to be contacted by the campaign team regarding
                    volunteer opportunities. <em>(required)</em>
                  </span>
                </label>
                {errors.consent && <span className="form-error">{errors.consent}</span>}

                <button className="btn-submit" type="submit" disabled={busy}>
                  {busy ? "Submitting…" : "Become a volunteer →"}
                </button>

                <p className="empty__meta" style={{ marginTop: "0.8rem" }}>
                  This registration is received privately by the campaign
                  operations team. Your information is not displayed on the
                  public site.
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