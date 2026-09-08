import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { submitConcern } from "../../lib/api";
import "./features.css";

const CATEGORIES = [
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

const STAGES = ["Received", "Under review", "In progress", "Resolved"];

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

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    setFile(f ? { name: f.name, size: f.size } : null);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!category) {
      setError("Please choose a category for the concern.");
      return;
    }
    if (!description.trim()) {
      setError("Please describe the concern briefly.");
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
      <p className="feat__eyebrow">Feature 02 · Community concerns</p>
      <h3 className="feat__title">Tell us a concern</h3>
      <p className="feat__intro">
        Share a concern so it can be documented, understood, and followed up.
        A concern is logged with a reference number and moves through the
        stages below as it is reviewed and acted on.
      </p>

      <div className="feat__body">
        <div className="flow" aria-label="Concern review stages">
          {STAGES.map((stage, i) => (
            <div className="flow__step" key={stage}>
              <span className="flow__step-n">0{i + 1}</span>
              <span className="flow__step-t">{stage}</span>
            </div>
          ))}
        </div>

        {result ? (
          <div className="feat__card">
            <div className="form-success" role="status">
              Salamat. Your concern has been received
              {result.ref ? ` (reference ${result.ref})` : ""}. It will be
              reviewed and followed up.
            </div>
          </div>
        ) : (
          <form className="feat__card" onSubmit={onSubmit} noValidate>
            <div className="feat__columns">
              <div>
                <div className="form-field">
                  <label className="form-label" htmlFor="concern-category">
                    Category
                  </label>
                  <select
                    id="concern-category"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-invalid={!!error && !category}
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="concern-area">
                    Location / area <em>(purok, sitio, street, landmark)</em>
                  </label>
                  <input
                    id="concern-area"
                    className="form-input"
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. purok 3, near the covered court"
                  />
                </div>
              </div>

              <div>
                <div className="form-field">
                  <label className="form-label" htmlFor="concern-desc">
                    Description
                  </label>
                  <textarea
                    id="concern-desc"
                    className="form-textarea"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the concern concretely"
                    aria-invalid={!!error && !description.trim()}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="concern-photo">
                    Photo <em>(optional)</em>
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
                      {file.name} · {(file.size / 1024).toFixed(0)} kB selected
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="feat__columns">
              <div className="form-field">
                <label className="form-label" htmlFor="concern-name">
                  Name <em>(optional)</em>
                </label>
                <input
                  id="concern-name"
                  className="form-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="concern-contact">
                  Contact <em>(optional, for follow-up)</em>
                </label>
                <input
                  id="concern-contact"
                  className="form-input"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Phone or email"
                />
              </div>
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn-submit" type="submit" disabled={busy}>
              {busy ? "Submitting…" : "Submit concern"}
            </button>
          </form>
        )}

        <div className="empty">
          <span className="empty__label">Published concerns</span>
          <p className="empty__text">
            No concerns are published yet. Public updates about concerns will
            appear here as they are received, reviewed, and followed up.
          </p>
          <span className="empty__meta">Nothing published yet</span>
        </div>
      </div>
    </div>
  );
}