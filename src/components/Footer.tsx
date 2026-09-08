import "./footer.css";

const SITE = [
  { id: "about", label: "About" },
  { id: "public-service", label: "Public Service" },
  { id: "for-tabon", label: "For Tabon" },
  { id: "updates", label: "Updates" },
  { id: "media", label: "Media" },
];

const FEATURES = [
  { id: "survey", label: "Community survey" },
  { id: "concerns", label: "Community concerns" },
  { id: "ask", label: "Ask Edgar" },
  { id: "projects", label: "Community projects" },
  { id: "open-tabon", label: "Open Tabon" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <div className="footer__cta-copy">
            <p className="footer__cta-eyebrow">Digital Campaign</p>
            <p className="footer__cta-title">A more connected campaign.</p>
          </div>
          <a className="footer__cta-btn" href="/digital-campaign">
            See the system
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
          <p className="footer__tagline">
            Public service for the community of Barangay Tabon.
          </p>
        </div>

        <div className="footer__grid">
          <nav className="footer__col" aria-label="Site">
            <h3 className="footer__col-title">Site</h3>
            <ul>
              {SITE.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Community features">
            <h3 className="footer__col-title">For Tabon</h3>
            <ul>
              {FEATURES.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__col-title">Community</h3>
            <ul>
              <li>
                <span className="footer__text">
                  Barangay Tabon
                  <br />
                  Bislig City, Surigao del Sur
                </span>
              </li>
              <li>
                <a href="#get-involved">Get involved</a>
              </li>
              <li>
                <a href="/volunteer">Join the team</a>
              </li>
              <li>
                <a href="#open-tabon">Open Tabon — transparency</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            &copy; {year} Edgar Corvera. Built for the community of Barangay
            Tabon.
          </p>
          <p className="footer__legal footer__legal--right">
            <span className="footer__mono">
              Honest work · for the people of Tabon
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}