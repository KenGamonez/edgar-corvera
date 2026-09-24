import { useLang } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/dict";
// Note: toggle styles live in nav.css, already imported by Nav.
// The toggle is rendered exclusively inside Nav, so no import needed here.

const OPTIONS: { code: Lang; short: string; full: string }[] = [
  { code: "en", short: "EN", full: "English" },
  { code: "bi", short: "BI", full: "Bisaya" },
];

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label={t.a11y.language}>
      {OPTIONS.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            className={`lang-toggle__btn${active ? " is-active" : ""}`}
            aria-pressed={active}
            aria-label={opt.full}
            onClick={() => setLang(opt.code)}
          >
            {opt.short}
          </button>
        );
      })}
    </div>
  );
}
