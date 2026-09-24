import { useState } from "react";
import type { FormEvent } from "react";
import { submitQuestion } from "../../lib/api";
import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

export default function AskEdgar() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError(t.featAsk.errName);
      return;
    }
    if (!contact.trim()) {
      setError(t.featAsk.errContact);
      return;
    }
    if (!message.trim()) {
      setError(t.featAsk.errMsg);
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
      <p className="feat__eyebrow">{t.featAsk.eyebrow}</p>
      <h3 className="feat__title">{t.featAsk.title}</h3>
      <p className="feat__intro">{t.featAsk.intro}</p>

      <div className="feat__body">
        {result ? (
          <div className="feat__card">
            <div className="form-success" role="status">
              {t.featAsk.successLead}
              {result.ref ? ` (reference ${result.ref})` : ""} {t.featAsk.successTail}
            </div>
          </div>
        ) : (
          <form className="feat__card" onSubmit={onSubmit} noValidate>
            <div className="feat__columns">
              <div className="form-field">
                <label className="form-label" htmlFor="ask-name">
                  {t.featAsk.nameLabel}
                </label>
                <input
                  id="ask-name"
                  className="form-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder={t.featAsk.namePlaceholder}
                  aria-invalid={!!error && !name.trim()}
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="ask-contact">
                  {t.featAsk.contactLabel}
                </label>
                <input
                  id="ask-contact"
                  className="form-input"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t.featAsk.contactPlaceholder}
                  aria-invalid={!!error && !contact.trim()}
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="ask-message">
                {t.featAsk.msgLabel}
              </label>
              <textarea
                id="ask-message"
                className="form-textarea"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.featAsk.msgPlaceholder}
                aria-invalid={!!error && !message.trim()}
              />
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn-submit" type="submit" disabled={busy}>
              {busy ? t.featAsk.submitting : t.featAsk.submit}
            </button>

            <p className="empty__meta" style={{ marginTop: "1rem" }}>
              {t.featAsk.helper}
            </p>
          </form>
        )}

        <div className="empty">
          <span className="empty__label">{t.featAsk.emptyLabel}</span>
          <p className="empty__text">{t.featAsk.emptyText}</p>
          <span className="empty__meta">{t.featAsk.emptyMeta}</span>
        </div>
      </div>
    </div>
  );
}
