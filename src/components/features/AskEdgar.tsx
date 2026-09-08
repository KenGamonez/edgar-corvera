import { useState } from "react";
import type { FormEvent } from "react";
import { submitQuestion } from "../../lib/api";
import "./features.css";

export default function AskEdgar() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please share your name so the message can be addressed.");
      return;
    }
    if (!contact.trim()) {
      setError("Please add a way to reach you for a reply.");
      return;
    }
    if (!message.trim()) {
      setError("Please write your question or message.");
      return;
    }
    setError(null);
    setBusy(true);
    const res = await submitQuestion({ name, contact, message });
    setBusy(false);
    if (res.ok) setResult({ ref: res.ref });
    else setError(res.error);
  }

  return (
    <div className="feat" id="feat-ask">
      <p className="feat__eyebrow">Feature 03 · Ask Edgar</p>
      <h3 className="feat__title">Ask Edgar</h3>
      <p className="feat__intro">
        Have a question, suggestion, or message? Your message is collected for
        review and response. General questions that help the whole community
        may be published without your personal details.
      </p>

      <div className="feat__body">
        {result ? (
          <div className="feat__card">
            <div className="form-success" role="status">
              Salamat. Your message has been received
              {result.ref ? ` (reference ${result.ref})` : ""} and will be
              reviewed and responded to.
            </div>
          </div>
        ) : (
          <form className="feat__card" onSubmit={onSubmit} noValidate>
            <div className="feat__columns">
              <div className="form-field">
                <label className="form-label" htmlFor="ask-name">
                  Name
                </label>
                <input
                  id="ask-name"
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
                <label className="form-label" htmlFor="ask-contact">
                  Contact
                </label>
                <input
                  id="ask-contact"
                  className="form-input"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Phone or email"
                  aria-invalid={!!error && !contact.trim()}
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="ask-message">
                Question or message
              </label>
              <textarea
                id="ask-message"
                className="form-textarea"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message"
                aria-invalid={!!error && !message.trim()}
              />
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn-submit" type="submit" disabled={busy}>
              {busy ? "Submitting…" : "Send message"}
            </button>

            <p className="empty__meta" style={{ marginTop: "1rem" }}>
              Messages are collected for review and response.
            </p>
          </form>
        )}

        <div className="empty">
          <span className="empty__label">Public replies</span>
          <p className="empty__text">
            Responses to general community questions will be published here if
            they are useful to everyone in Barangay Tabon.
          </p>
          <span className="empty__meta">Nothing published yet</span>
        </div>
      </div>
    </div>
  );
}