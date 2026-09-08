import { useState } from "react";
import type { FormEvent } from "react";
import { submitSurvey } from "../../lib/api";
import "./features.css";

const PRIORITIES = [
  "Roads & drainage",
  "Water",
  "Electricity",
  "Health",
  "Education",
  "Livelihood",
  "Public safety",
  "Environment",
  "Sports & recreation",
  "Senior citizens",
  "Youth",
  "Disaster preparedness",
  "Other",
];

export default function Survey() {
  const [priority, setPriority] = useState("");
  const [other, setOther] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);

  const chosen = priority === "Other" && other.trim() ? other.trim() : priority;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!chosen) {
      setError("Please select the area Tabon should prioritize first.");
      return;
    }
    setError("");
    setBusy(true);
    const res = await submitSurvey({ priority: chosen, note });
    setBusy(false);
    if (res.ok) setResult({ ref: res.ref });
    else setError(res.error);
  }

  return (
    <div className="feat" id="feat-survey">
      <p className="feat__eyebrow">Feature 01 · Community survey</p>
      <h3 className="feat__title">What should Tabon prioritize?</h3>
      <p className="feat__intro">
        If you could improve one thing in our community first, what should it
        be? Responses are collected anonymously and used only to understand
        what matters to the community.
      </p>

      <div className="feat__body">
        {result ? (
          <div className="feat__card">
            <div className="form-success" role="status">
              Salamat. Your response has been received
              {result.ref ? ` (reference ${result.ref})` : ""}.
            </div>
            <p className="empty__meta" style={{ marginTop: "1rem" }}>
              Aggregate views will appear in Community Pulse once a real set of
              responses is available.
            </p>
          </div>
        ) : (
          <form className="feat__card" onSubmit={onSubmit} noValidate>
            <p className="feat__card-title" id="survey-priorities-label">
              Choose the area to prioritize
            </p>
            <div
              className="chips"
              role="radiogroup"
              aria-labelledby="survey-priorities-label"
            >
              {PRIORITIES.map((p) => (
                <label className="chip" key={p}>
                  <input
                    type="radio"
                    name="priority"
                    value={p}
                    checked={priority === p}
                    onChange={() => setPriority(p)}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>

            {priority === "Other" && (
              <div className="form-field" style={{ marginTop: "1rem" }}>
                <label className="form-label" htmlFor="survey-other">
                  Specify
                </label>
                <input
                  id="survey-other"
                  className="form-input"
                  type="text"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder="Your answer"
                />
              </div>
            )}

            <div className="form-field" style={{ marginTop: "1rem" }}>
              <label className="form-label" htmlFor="survey-note">
                Optional note <em>(anything else we should know)</em>
              </label>
              <textarea
                id="survey-note"
                className="form-textarea"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Optional"
              />
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn-submit" type="submit" disabled={busy}>
              {busy ? "Submitting…" : "Submit response"}
            </button>
          </form>
        )}

        <div className="empty">
          <span className="empty__label">Community responses</span>
          <p className="empty__text">
            Community responses will appear here as residents participate.
          </p>
          <span className="empty__meta">Results are only shown once verified</span>
        </div>
      </div>
    </div>
  );
}