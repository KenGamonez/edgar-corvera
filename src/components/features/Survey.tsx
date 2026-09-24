import { useState } from "react";
import type { FormEvent } from "react";
import { submitSurvey } from "../../lib/api";
import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

/** Submitted values are invariant (API/admin data); labels translate. */
const PRIORITY_VALUES = [
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
  const { t } = useLang();

  const chosen = priority === "Other" && other.trim() ? other.trim() : priority;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!chosen) {
      setError(t.featSurvey.errSelect);
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
      <p className="feat__eyebrow">{t.featSurvey.eyebrow}</p>
      <h3 className="feat__title">{t.featSurvey.title}</h3>
      <p className="feat__intro">{t.featSurvey.intro}</p>

      <div className="feat__body">
        {result ? (
          <div className="feat__card">
            <div className="form-success" role="status">
              {t.featSurvey.successLead}
              {result.ref ? ` (reference ${result.ref})` : ""}.
            </div>
            <p className="empty__meta" style={{ marginTop: "1rem" }}>
              {t.featSurvey.postNote}
            </p>
          </div>
        ) : (
          <form className="feat__card" onSubmit={onSubmit} noValidate>
            <p className="feat__card-title" id="survey-priorities-label">
              {t.featSurvey.cardTitle}
            </p>
            <div
              className="chips"
              role="radiogroup"
              aria-labelledby="survey-priorities-label"
            >
              {PRIORITY_VALUES.map((v, i) => (
                <label className="chip" key={v}>
                  <input
                    type="radio"
                    name="priority"
                    value={v}
                    checked={priority === v}
                    onChange={() => setPriority(v)}
                  />
                  <span>{t.surveyPriorities[i]}</span>
                </label>
              ))}
            </div>

            {priority === "Other" && (
              <div className="form-field" style={{ marginTop: "1rem" }}>
                <label className="form-label" htmlFor="survey-other">
                  {t.featSurvey.specifyLabel}
                </label>
                <input
                  id="survey-other"
                  className="form-input"
                  type="text"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder={t.featSurvey.answerPlaceholder}
                />
              </div>
            )}

            <div className="form-field" style={{ marginTop: "1rem" }}>
              <label className="form-label" htmlFor="survey-note">
                {t.featSurvey.noteLabel} <em>{t.featSurvey.noteHint}</em>
              </label>
              <textarea
                id="survey-note"
                className="form-textarea"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={t.featSurvey.notePlaceholder}
              />
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn-submit" type="submit" disabled={busy}>
              {busy ? t.featSurvey.submitting : t.featSurvey.submit}
            </button>
          </form>
        )}

        <div className="empty">
          <span className="empty__label">{t.featSurvey.emptyLabel}</span>
          <p className="empty__text">{t.featSurvey.emptyText}</p>
          <span className="empty__meta">{t.featSurvey.emptyMeta}</span>
        </div>
      </div>
    </div>
  );
}