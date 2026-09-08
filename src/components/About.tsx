import Reveal from "../lib/reveal";
import "./about.css";

const CHAPTERS = [
  {
    n: "01",
    title: "Education",
    text: "Edgar Corvera is an Electrical Engineer. Verified educational background will be published here as it is confirmed.",
    state: "To be published",
  },
  {
    n: "02",
    title: "Professional experience",
    text: "Engineering and industry experience — verified positions and organizations will be listed here as they are confirmed.",
    state: "To be published",
  },
  {
    n: "03",
    title: "Public service",
    text: "His documented public-service experience will be explained here, with dates and detail.",
    state: "To be published",
  },
  {
    n: "04",
    title: "Committee & responsibility",
    text: "Relevant committee and responsibility areas will be listed here as they are verified.",
    state: "To be published",
  },
  {
    n: "05",
    title: "Recognitions",
    text: "Documented awards and recognitions will be shown here, together with their sources.",
    state: "To be published",
  },
];

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__head">
          <p className="eyebrow" data-reveal>
            About Edgar
          </p>
          <h2 className="about__title" id="about-title" data-reveal>
            Edgar Corvera,
            <br />
            <span className="about__title-em">Electrical Engineer.</span>
          </h2>
        </div>

        <div className="about__grid">
          <Reveal variant="left" className="about__figure" delay={60}>
            <div className="about__frame" role="img" aria-label="Edgar Corvera — photograph">
              <img
                className="about__logo"
                src="/images/about.png"
                alt=""
                width={1669}
                height={942}
              />
            </div>
            <span className="about__figcap">
              <span className="about__mono">
                Barangay Tabon · Bislig City · Surigao del Sur
              </span>
            </span>
          </Reveal>

          <div className="about__content">
            <Reveal as="p" className="about__lead" delay={40}>
              Experience built through engineering,
              <br />
              industry, and public service.
            </Reveal>

            <Reveal as="p" className="about__text" delay={110}>
              Edgar Corvera is an Electrical Engineer from Barangay Tabon,
              Bislig City, Surigao del Sur. His approach to public service is
              shaped by the discipline of engineering — measure a problem
              carefully, plan the work, do it properly, and account for the
              result.
            </Reveal>

            <Reveal as="p" className="about__text" delay={160}>
              This section records who Edgar is and the experience he brings
              into serving his community. Education, professional experience,
              public service, committee work, and recognitions are each listed
              here — and only what is confirmed is shown.
            </Reveal>

            <Reveal className="about__chapters" delay={220}>
              {CHAPTERS.map((c) => (
                <div className="about__chapter" key={c.n}>
                  <span className="about__chapter-n">{c.n}</span>
                  <div className="about__chapter-body">
                    <h3 className="about__chapter-title">{c.title}</h3>
                    <p className="about__chapter-text">{c.text}</p>
                  </div>
                  <span className="about__chapter-state">{c.state}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="about__principles" delay={280}>
              <h3 className="about__principles-title">Working principles</h3>
              <ol className="about__principles-list">
                <li>
                  <span className="about__principles-num">01</span>
                  <div>
                    <strong>Honesty before optics</strong>
                    <p>Clear communication and disciplined public accounting.</p>
                  </div>
                </li>
                <li>
                  <span className="about__principles-num">02</span>
                  <div>
                    <strong>People before privilege</strong>
                    <p>Every decision weighed against the interest of ordinary citizens.</p>
                  </div>
                </li>
                <li>
                  <span className="about__principles-num">03</span>
                  <div>
                    <strong>Work before words</strong>
                    <p>Progress measured by accomplishment, not by announcement.</p>
                  </div>
                </li>
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}