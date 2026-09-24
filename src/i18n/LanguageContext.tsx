import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { dict, type Content, type Lang } from './dict'

const STORAGE_KEY = 'edgar-corvera-lang'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'bi') return saved
  } catch {
    // localStorage unavailable — fall back to English.
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore persistence failures (private mode, etc.).
    }
  }, [])

  // Sync <html lang>, <title>, and meta descriptions with the active language.
  useEffect(() => {
    const content = dict[lang]
    document.documentElement.lang = lang === 'bi' ? 'ceb' : 'en'
    document.title = content.meta.title

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute('content', value)
    }
    setMeta('meta[name="description"]', content.meta.description)
    setMeta('meta[property="og:description"]', content.meta.ogDescription)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', content.meta.title)
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
