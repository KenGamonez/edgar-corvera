import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "../lib/reveal";
import { subscribe } from "../lib/api";
import { openFeature } from "../lib/hub";
import "./get-involved.css";

const ACTIONS = [
  {
    label: "Answer the community survey",
    detail: "Help set what Tabon should prioritize first.",
    feature: "survey",
  },
  {
    label: "Tell us a concern",
    detail: "Log a community concern so it can be documented and followed up.",
    feature: "concerns",
  },
  {
    label: "Send a suggestion",
    detail: "A suggestion is a form of service.",
    feature: "ask",
  },
  {
    label: "Ask Edgar",
    detail: "Questions and messages are collected for review and response.",
    feature: "ask",
  },
] as const;

export default function GetInvolved() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email.");
      return;
    }
    if (!/.+@.+\..+/.test(email.trim())) {
      setError("Please enter a valid email address.");
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
            Get involved
          </p>
          <h2 className="involved__title" id="involved-title" data-reveal>
            Participation is how
            <br />
            a community works.
          </h2>
          <Reveal as="p" className="involved__text" delay={120}>
            Answer a survey, raise a concern, send a suggestion, ask a
            question, or simply stay informed. Every form of participation
            helps the platform serve the community better.
          </Reveal>
          <Reveal className="involved__details" delay={200}>
            <div className="involved__detail">
              <span className="involved__detail-label">Community</span>
              <span className="involved__detail-value">
                Barangay Tabon · Bislig City · Surigao del Sur
              </span>
            </div>
            <div className="involved__detail">
              <span className="involved__detail-label">Reach the team</span>
              <span className="involved__detail-value">
                Through the forms on this page.
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="involved__panel" variant="right" delay={80}>
          <p className="involved__panel-title">Ways to take part</p>
          <ul className="involved__actions">
            {ACTIONS.map((a) => (
              <li key={a.label + a.detail}>
                <button
                  className="involved__action"
                  type="button"
                  onClick={() => openFeature(a.feature)}
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
            <p className="involved__panel-title">Receive updates</p>
            {result ? (
              <div className="form-success" role="status">
                Salamat. You are signed up for updates
                {result.ref ? ` (reference ${result.ref})` : ""}.
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="form-field">
                  <label className="form-label" htmlFor="sub-name">
                    Name
                  </label>
                  <input
                    id="sub-name"
                    className="form-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={!!error && !name.trim()}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="sub-email">
                    Email
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
                  {busy ? "Submitting…" : "Sign up for updates"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}