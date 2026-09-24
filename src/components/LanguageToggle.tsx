import { useLang } from '../i18n/LanguageContext'

type LanguageToggleProps = {
  variant?: 'header' | 'drawer'
  className?: string
}

export function LanguageToggle({ variant = 'header', className = '' }: LanguageToggleProps) {
  const { lang, setLang, t } = useLang()

  const base =
    variant === 'drawer'
      ? 'inline-flex w-full items-center justify-center'
      : 'inline-flex items-center'

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={`${base} micro-label overflow-hidden rounded-full border border-white/40 bg-white/10 ${className}`}
    >
      {(['en', 'bi'] as const).map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={code === 'en' ? 'English' : 'Bisaya'}
            className={`px-3 py-1.5 uppercase tracking-[0.12em] transition-colors duration-200 ${
              active ? 'bg-gold text-navy' : 'text-white/80 hover:text-white'
            } ${variant === 'drawer' ? 'flex-1 py-2.5 text-sm' : 'text-[0.7rem]'}`}
          >
            {code === 'en' ? 'EN' : 'BI'}
          </button>
        )
      })}
    </div>
  )
}
