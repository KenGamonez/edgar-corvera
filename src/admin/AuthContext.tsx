import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { setAuditActor } from "../lib/adminStore";

/* ============================================================
   AUTH — campaign operations sign-in.
   ------------------------------------------------------------
   STATUS: Authentication is NOT connected. Supabase is not
   installed in this project, so there is no credential store and
   no secure session. This module defines the contract the UI is
   built around:

     signIn(email, password) -> Promise<SignInResult>

   When Supabase is wired up, replace the body of `signIn` with
   supabase.auth.signInWithPassword(...) and this resolves to the
   session. Until then it always reports that verification is not
   available — we do not fake authentication.

   `enterPreview()` grants an in-memory, clearly labelled preview
   session so the operations UI can be reviewed. It is intentionally
   NOT persistent, NOT secure, and restricted to a development mode.
   ============================================================ */

export type Session = {
  name: string;
  role: string;
  preview: true;
};

export type SignInResult =
  | { ok: true; session: Session }
  | { ok: false; error: string };

type AuthCtx = {
  session: Session | null;
  signIn: (email: string, password: string) => Promise<SignInResult>;
  enterPreview: () => void;
  signOut: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setAuditActor(session ? session.name : "Team member");
  }, [session]);

  const value = useMemo<AuthCtx>(
    () => ({
      session,
      signIn: async (_email: string, _password: string): Promise<SignInResult> => {
        await wait(650);
        return {
          ok: false,
          error:
            "Secure sign-in is not connected in this build. No credentials are checked or stored — connect Supabase authentication to enable campaign team access.",
        };
      },
      enterPreview: () => {
        setSession({ name: "Preview session", role: "CAMPAIGN ADMIN", preview: true });
      },
      signOut: () => setSession(null),
    }),
    [session]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth(): AuthCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}