import { useLang } from "../i18n/LanguageContext";
import "./footer.css";

/** Anchor/feature identifiers are invariant; labels translate. */
const SITE_IDS = ["about", "public-service", "for-tabon", "updates", "media"] as const;

const FEATURE_IDS = ["survey", "concerns", "ask", "projects", "open-tabon"] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <div className="footer__cta-copy">
            <p className="footer__cta-eyebrow">{t.footer.ctaEyebrow}</p>
            <p className="footer__cta-title">{t.footer.ctaTitle}</p>
          </div>
          <a className="footer__cta-btn" href="/digital-campaign">
            {t.footer.ctaBtn}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="footer__brand">
          <img
            src="/brand/logo.png"
            alt="Edgar Corvera"
            className="footer__logo"
            width={1983}
            height={793}
          />
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer__grid">
          <nav className="footer__col" aria-label={t.footer.navSiteLabel}>
            <h3 className="footer__col-title">{t.footer.colSite}</h3>
            <ul>
              {SITE_IDS.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`}>{t.footerSite[i]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label={t.footer.navFeaturesLabel}>
            <h3 className="footer__col-title">{t.footer.colFeatures}</h3>
            <ul>
              {FEATURE_IDS.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`}>{t.footerFeatures[i]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__col-title">{t.footer.colCommunity}</h3>
            <ul>
              <li>
                <span className="footer__text">
                  Barangay Tabon
                  <br />
                  Bislig City, Surigao del Sur
                </span>
              </li>
              <li>
                <a href="#get-involved">{t.footer.getInvolved}</a>
              </li>
              <li>
                <a href="/volunteer">{t.nav.joinTeam}</a>
              </li>
              <li>
                <a href="#open-tabon">{t.footer.openTabonTransparency}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            &copy; {year} Edgar Corvera. {t.footer.legalSuffix}
          </p>
          <p className="footer__legal footer__legal--right">
            <span className="footer__mono">{t.footer.motto}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}