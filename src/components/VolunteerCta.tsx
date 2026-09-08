import Reveal from "../lib/reveal";
import "./volunteer-cta.css";

export default function VolunteerCta() {
  return (
    <section className="volcta section" aria-labelledby="volcta-title">
      <div className="container volcta__grid">
        <div>
          <Reveal as="p" className="eyebrow" delay={0}>
            Volunteer
          </Reveal>
          <Reveal as="h2" className="volcta__title" id="volcta-title" delay={80}>
            Your time can make
            <br /> a difference.
          </Reveal>
          <Reveal as="p" className="volcta__sub" delay={160}>
            Want to take part in the work happening in Tabon?
          </Reveal>
          <Reveal className="volcta__actions" delay={220}>
            <a href="/volunteer" className="volcta__btn">
              Join the team →
            </a>
          </Reveal>
        </div>
        <Reveal className="volcta__meta-panel" variant="right" delay={120}>
          <ul className="volcta__meta">
            <li>
              <span className="volcta__meta-label">Community</span>
              <span>Community activities &amp; field support</span>
            </li>
            <li>
              <span className="volcta__meta-label">Documentation</span>
              <span>Photography &amp; records</span>
            </li>
            <li>
              <span className="volcta__meta-label">Communications</span>
              <span>Social media &amp; outreach</span>
            </li>
            <li>
              <span className="volcta__meta-label">Logistics</span>
              <span>Event coordination &amp; support</span>
            </li>
          </ul>
          <p className="volcta__note">
            Registering does not guarantee a role. The campaign team reviews
            registrations and reaches out when opportunities are available.
          </p>
        </Reveal>
      </div>
    </section>
  );
}