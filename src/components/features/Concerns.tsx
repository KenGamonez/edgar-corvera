import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { submitConcern } from "../../lib/api";
import { useLang } from "../../i18n/LanguageContext";
import "./features.css";

/** Submitted values are invariant (API/admin data); labels translate. */
const CATEGORY_VALUES = [
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

export default function Concerns() {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [file, setFile] = useState<{ name: string; size: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ref: string } | null>(null);
  const { t } = useLang();

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setFile(f ? { name: f.name, size: f.size } : null);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!category) {
      setError(t.featConcerns.errCat);
      return;
    }
    if (!description.trim()) {
      setError(t.featConcerns.errDesc);
      return;
    }
    setError(null);
    setBusy(true);
    const res = await submitConcern({
      category,
      area,
      description,
      name,
      contact,
      hasPhoto: !!file,
      photoLabel: file ? file.name : "",
    });
    setBusy(false);
    if (res.ok) setResult({ ref: res.ref });
    else setError(res.error);
  }

  return (
    <div className="feat" id="feat-concerns">
      <p className="feat__eyebrow">{t.featConcerns.eyebrow}</p>
      <h3 className="feat__title">{t.featConcerns.title}</h3>
      <p className="feat__intro">{t.featConcerns.intro}</p>

      <div className="feat__body">
        <div className="flow" aria-label={t.featConcerns.stagesLabel}>
          {t.concernStages.map((stage, i) => (
            <div className="flow__step" key={stage}>
              <span className="flow__step-n">0{i + 1}</span>
              <span className="flow__step-t">{stage}</span>
            </div>
          ))}
        </div>

        {result ? (
          <div className="feat__card">
            <div className="form-success" role="status">
              {t.featConcerns.successLead}
              {result.ref ? ` (reference ${result.ref})` : ""}.{" "}
              {t.featConcerns.successTail}
            </div>
          </div>
        ) : (
          <form className="feat__card" onSubmit={onSubmit} noValidate>
            <div className="feat__columns">
              <div>
                <div className="form-field">
                  <label className="form-label" htmlFor="concern-category">
                    {t.featConcerns.catLabel}
                  </label>
                  <select
                    id="concern-category"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-invalid={!!error && !category}
                  >
                    <option value="">{t.featConcerns.catDefault}</option>
                    {CATEGORY_VALUES.map((c, i) => (
                      <option key={c} value={c}>
                        {t.concernCategories[i]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="concern-area">
                    {t.featConcerns.areaLabel} <em>{t.featConcerns.areaHint}</em>
                  </label>
                  <input
                    id="concern-area"
                    className="form-input"
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder={t.featConcerns.areaPlaceholder}
                  />
                </div>
              </div>

              <div>
                <div className="form-field">
                  <label className="form-label" htmlFor="concern-desc">
                    {t.featConcerns.descLabel}
                  </label>
                  <textarea
                    id="concern-desc"
                    className="form-textarea"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t.featConcerns.descPlaceholder}
                    aria-invalid={!!error && !description.trim()}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="concern-photo">
                    {t.featConcerns.photoLabel} <em>{t.featConcerns.optional}</em>
                  </label>
                  <input
                    id="concern-photo"
                    className="form-input"
                    type="file"
                    accept="image/*"
                    onChange={onFile}
                  />
                  {file && (
                    <span className="form-label">
                      {file.name} · {(file.size / 1024).toFixed(0)} kB{" "}
                      {t.featConcerns.fileSelected}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="feat__columns">
              <div className="form-field">
                <label className="form-label" htmlFor="concern-name">
                  {t.featConcerns.nameLabel} <em>{t.featConcerns.optional}</em>
                </label>
                <input
                  id="concern-name"
                  className="form-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder={t.featConcerns.namePlaceholder}
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="concern-contact">
                  {t.featConcerns.contactLabel} <em>{t.featConcerns.contactHint}</em>
                </label>
                <input
                  id="concern-contact"
                  className="form-input"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t.featConcerns.contactPlaceholder}
                />
              </div>
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn-submit" type="submit" disabled={busy}>
              {busy ? t.featConcerns.submitting : t.featConcerns.submit}
            </button>
          </form>
        )}

        <div className="empty">
          <span className="empty__label">{t.featConcerns.emptyLabel}</span>
          <p className="empty__text">{t.featConcerns.emptyText}</p>
          <span className="empty__meta">{t.featConcerns.emptyMeta}</span>
        </div>
      </div>
    </div>
  );
}