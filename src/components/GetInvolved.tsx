import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import { subscribe } from "../lib/api";
import { openFeature } from "../lib/hub";
import "./get-involved.css";

/** Features are invariant keys; labels/details translate. */
const ACTION_FEATURES = ["survey", "concerns", "ask", "ask"] as const;

export default function GetInvolved() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);
  const { t } = useLang();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError(t.getInvolved.emptyError);
      return;
    }
    if (!/.+@.+\..+/.test(email.trim())) {
      setError(t.getInvolved.invalidError);
      return;
    }
    setError(null);
    setBusy(true);
    const res = await subscribe({ name, email });
    setBusy(false);
    if (res.ok) setResult({ ref: res.ref });
    else setError(res.error);
  }

  return (
    <section
      className="involved section"
      id="get-involved"
      aria-labelledby="involved-title"
    >
      <div className="container involved__grid">
        <div className="involved__info">
          <p className="eyebrow" data-reveal>
            {t.getInvolved.eyebrow}
          </p>
          <h2 className="involved__title" id="involved-title" data-reveal>
            {t.getInvolved.titleLine1}
            <br />
            {t.getInvolved.titleLine2}
          </h2>
          <Reveal as="p" className="involved__text" delay={120}>
            {t.getInvolved.text}
          </Reveal>
          <Reveal className="involved__details" delay={200}>
            <div className="involved__detail">
              <span className="involved__detail-label">{t.getInvolved.detailCommunity}</span>
              <span className="involved__detail-value">
                Barangay Tabon · Bislig City · Surigao del Sur
              </span>
            </div>
            <div className="involved__detail">
              <span className="involved__detail-label">{t.getInvolved.detailReach}</span>
              <span className="involved__detail-value">
                {t.getInvolved.detailReachValue}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="involved__panel" variant="right" delay={80}>
          <p className="involved__panel-title">{t.getInvolved.panelTitle}</p>
          <ul className="involved__actions">
            {t.getInvolvedActions.map((a, i) => (
              <li key={ACTION_FEATURES[i] + i}>
                <button
                  className="involved__action"
                  type="button"
                  onClick={() => openFeature(ACTION_FEATURES[i])}
                >
                  <span className="involved__action-label">{a.label}</span>
                  <span className="involved__action-detail">{a.detail}</span>
                  <span className="involved__action-go" aria-hidden="true">
                    &rarr;
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="involved__signup">
            <p className="involved__panel-title">{t.getInvolved.signupTitle}</p>
            {result ? (
              <div className="form-success" role="status">
                {t.getInvolved.successLead}
                {result.ref ? ` (reference ${result.ref})` : ""}.
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="form-field">
                  <label className="form-label" htmlFor="sub-name">
                    {t.getInvolved.nameLabel}
                  </label>
                  <input
                    id="sub-name"
                    className="form-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder={t.getInvolved.namePlaceholder}
                    aria-invalid={!!error && !name.trim()}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="sub-email">
                    {t.getInvolved.emailLabel}
                  </label>
                  <input
                    id="sub-email"
                    className="form-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="you@email.com"
                    aria-invalid={!!error}
                  />
                </div>
                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <button className="btn-submit" type="submit" disabled={busy}>
                  {busy ? t.getInvolved.submitting : t.getInvolved.submit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}