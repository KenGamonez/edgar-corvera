import Reveal from "../lib/reveal";
import "./digital-cta.css";

export default function DigitalCta() {
  return (
    <section className="dcta section" aria-labelledby="dcta-title">
      <div className="container dcta__grid">
        <div>
          <Reveal as="p" className="eyebrow" delay={0}>
            Digital Campaign
          </Reveal>
          <Reveal as="h2" className="dcta__title" id="dcta-title" delay={80}>
            ONE CAMPAIGN.
            <br />
            <span className="dcta__accent">ONE DIGITAL SYSTEM.</span>
          </Reveal>
          <Reveal as="p" className="dcta__sub" delay={160}>
            How the campaign is organized and run behind the scenes — and how
            it stays connected with the community.
          </Reveal>
          <Reveal className="dcta__actions" delay={220}>
            <a href="/digital-campaign" className="dcta__btn">
              See the system →
            </a>
          </Reveal>
        </div>
        <Reveal className="dcta__meta-panel" variant="right" delay={120}>
          <ul className="dcta__meta">
            <li>
              <span className="dcta__meta-label">Coordinate</span>
              <span>One clear operations system</span>
            </li>
            <li>
              <span className="dcta__meta-label">Document</span>
              <span>Field work recorded as it happens</span>
            </li>
            <li>
              <span className="dcta__meta-label">Connect</span>
              <span>The community stays in the loop</span>
            </li>
            <li>
              <span className="dcta__meta-label">Account</span>
              <span>Honest, transparent, within the law</span>
            </li>
          </ul>
          <p className="dcta__note">
            The digital side of the campaign — not a campaign manager, and not
            a commercial service.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
