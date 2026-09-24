import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { dict } from "./dict";
import type { Content, Lang } from "./dict";
import { metaForPath } from "./routes";

const STORAGE_KEY = "edgar-corvera-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
  /** Refresh document metadata for a pathname in the active language. */
  syncRouteMeta: (pathname: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "bi") return saved;
  } catch {
    // localStorage unavailable — fall back to English.
  }
  return "en";
}

function applyMeta(lang: Lang, pathname: string): void {
  const meta = metaForPath(dict[lang], pathname);
  document.documentElement.lang = lang === "bi" ? "ceb" : "en";
  if (!meta) return;
  document.title = meta.title;
  const setMeta = (selector: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  };
  setMeta('meta[name="description"]', meta.description);
  setMeta('meta[property="og:title"]', meta.ogTitle);
  setMeta('meta[property="og:description"]', meta.ogDescription);
  setMeta('meta[name="twitter:title"]', meta.ogTitle);
  setMeta('meta[name="twitter:description"]', meta.ogDescription);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore persistence failures (private mode, etc.).
    }
  }, []);

  const syncRouteMeta = useCallback(
    (pathname: string) => {
      applyMeta(lang, pathname);
    },
    [lang]
  );

  // Keep <html lang> + metadata in sync on mount and on language change.
  useEffect(() => {
    syncRouteMeta(
      typeof window !== "undefined" ? window.location.pathname : "/"
    );
  }, [syncRouteMeta]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dict[lang], syncRouteMeta }),
    [lang, setLang, syncRouteMeta]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
