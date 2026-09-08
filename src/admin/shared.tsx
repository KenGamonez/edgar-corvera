import { useEffect } from "react";
import type { FormEvent, ReactNode } from "react";

/* ============================================================
   ADMIN SHARED — small primitives for the operations layer.
   These are intentionally plain and quiet: dense, keyboard
   friendly, and free of decorative animation.
   ============================================================ */

const STATUS_TONE: Record<string, string> = {
  NEW: "blue",
  REVIEWING: "amber",
  ASSIGNED: "violet",
  "ACTION TAKEN": "blue",
  RESOLVED: "green",
  ANSWERED: "green",
  ARCHIVED: "grey",
  CONTACTED: "blue",
  ACTIVE: "green",
  INACTIVE: "grey",
  PLANNING: "grey",
  CONFIRMED: "blue",
  COMPLETED: "green",
  CLOSED: "grey",
  IDEA: "grey",
  DRAFT: "grey",
  REVIEW: "amber",
  APPROVED: "violet",
  SCHEDULED: "blue",
  PUBLISHED: "green",
  RAW: "grey",
  SELECTED: "violet",
  EDITED: "amber",
};

export function StatusBadge({ status }: { status: string }) {
  const tone = STATUS_TONE[status] ?? "grey";
  return (
    <span className={`abadge abadge--${tone}`}>
      <span className="abadge__dot" />
      {status.replace(/_/g, " ")}
    </span>
  );
}

export function EmptyState({
  title,
  detail,
  children,
}: {
  title: string;
  detail?: string;
  children?: ReactNode;
}) {
  return (
    <div className="aempty">
      <p className="aempty__title">{title}</p>
      {detail && <p className="aempty__detail">{detail}</p>}
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  note,
  tone = "grey",
}: {
  label: string;
  value: string | number;
  note?: string;
  tone?: "blue" | "red" | "green" | "amber" | "grey";
}) {
  return (
    <div className={`astat astat--${tone}`}>
      <span className="astat__value">{value}</span>
      <span className="astat__label">{label}</span>
      {note && <span className="astat__note">{note}</span>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="ahead">
      <div>
        <p className="ahead__eyebrow">{eyebrow}</p>
        <h1 className="ahead__title">{title}</h1>
      </div>
      {children && <div className="ahead__actions">{children}</div>}
    </header>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="asec-label">{children}</h2>;
}

export function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="afield">
      <label className="afield__label">
        {label}
        {required && <span className="afield__req"> *</span>}
      </label>
      {hint && <p className="afield__hint">{hint}</p>}
      {children}
      {error && (
        <p className="afield__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput(props: {
  id?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  invalid?: boolean;
}) {
  return (
    <input
      id={props.id}
      className="ainput"
      type={props.type ?? "text"}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-invalid={props.invalid || undefined}
    />
  );
}

export function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[] | string[];
  placeholder?: string;
}) {
  return (
    <select
      className="ainput"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      className="ainput ainput--area"
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export function FormRow({ children }: { children: ReactNode }) {
  return <div className="aform-row">{children}</div>;
}

export function Drawer({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={`adrawer ${open ? "adrawer--open" : ""}`} aria-hidden={!open}>
      <div
        className="adrawer__scrim"
        onClick={onClose}
        role="presentation"
      />
      <aside
        className="adrawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="adrawer-title"
      >
        <header className="adrawer__head">
          <div>
            {eyebrow && <p className="adrawer__eyebrow">{eyebrow}</p>}
            <h2
              id="adrawer-title"
              className="adrawer__title"
              tabIndex={-1}
              ref={(el) => {
                if (open && el && document.activeElement !== el) el.focus();
              }}
            >
              {title}
            </h2>
          </div>
          <button
            className="abtn abtn--icon"
            onClick={onClose}
            aria-label="Close panel"
          >
            <CloseIcon />
          </button>
        </header>
        <div className="adrawer__body">{children}</div>
      </aside>
    </div>
  );
}

export function NoteBox({ children }: { children: ReactNode }) {
  return <div className="anote">{children}</div>;
}

export function GuardNote({ children }: { children: ReactNode }) {
  return (
    <div className="aguard">
      <span className="aguard__dot" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function SubmitButton({
  children,
  busy,
  onClick,
}: {
  children: ReactNode;
  busy?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className="abtn abtn--primary"
      disabled={busy}
      onClick={(e) => {
        e.preventDefault();
        if (!busy) onClick?.();
      }}
    >
      {busy ? "Working…" : children}
    </button>
  );
}

export function useFormSubmit() {
  return (e: FormEvent) => e.preventDefault();
}

export const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 9a6 6 0 1 1 12 0c0 4 1.5 6 1.5 6H4.5S6 13 6 9Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M10 19h4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const SignOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);