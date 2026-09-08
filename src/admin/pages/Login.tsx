import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../AuthContext";
import { Field, TextInput } from "../shared";

export default function Login() {
  const { signIn, enterPreview } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [authError, setAuthError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Email is required.";
    else if (!/.+@.+\..+/.test(email.trim())) next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    else if (password.length < 8) next.password = "Password must be at least 8 characters.";
    setErrors(next);
    if (next.email || next.password) {
      setAuthError(null);
      return;
    }
    setAuthError(null);
    setBusy(true);
    const res = await signIn(email.trim(), password);
    setBusy(false);
    if (!res.ok) setAuthError(res.error);
  }

  return (
    <main className="alogin">
      <div className="alogin__card">
        <img
          src="/brand/logo.png"
          alt="Edgar Corvera"
          className="alogin__logo"
          width={1983}
          height={793}
        />
        <p className="alogin__eyebrow">Campaign operations</p>
        <h1 className="alogin__title">Edgar Corvera</h1>
        <p className="alogin__note">Authorized team access only.</p>

        <form onSubmit={onSubmit} noValidate>
          <Field label="Email" required error={errors.email}>
            <TextInput
              id="login-email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="name@campaign.ph"
              autoComplete="username"
              invalid={!!errors.email}
            />
          </Field>
          <Field label="Password" required error={errors.password}>
            <TextInput
              id="login-password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              autoComplete="current-password"
              invalid={!!errors.password}
            />
          </Field>

          {authError && (
            <div className="aguard" role="alert">
              <span className="aguard__dot" aria-hidden="true" />
              <span>{authError}</span>
            </div>
          )}

          <div className="abtnrow" style={{ marginTop: "1.1rem" }}>
            <button className="abtn abtn--primary abtn--lg" type="submit" disabled={busy}>
              {busy ? "Signing in…" : "Sign in →"}
            </button>
          </div>
        </form>

        <div className="alogin__dev">
          <p>
            This build has no authentication backend connected, so it will not
            verify credentials or create a session. Until Supabase auth is wired
            up, the dashboard is available only through the labelled preview
            below — it is a UI review surface, not secured access.
          </p>
          <button
            className="abtn abtn--ghost abtn--lg alogin__link"
            type="button"
            onClick={enterPreview}
          >
            Preview dashboard (development only)
          </button>
        </div>
      </div>
    </main>
  );
}