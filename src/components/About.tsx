import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import "./about.css";

const CHAPTER_NUMS = ["01", "02", "03", "04", "05"] as const;
const PRINCIPLE_NUMS = ["01", "02", "03"] as const;

export default function About() {
  const { t } = useLang();
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__head">
          <p className="eyebrow" data-reveal>
            {t.about.eyebrow}
          </p>
          <h2 className="about__title" id="about-title" data-reveal>
            Edgar Corvera,
            <br />
            <span className="about__title-em">Electrical Engineer.</span>
          </h2>
        </div>

        <div className="about__grid">
          <Reveal variant="left" className="about__figure" delay={60}>
            <div className="about__frame" role="img" aria-label={t.about.photoLabel}>
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
              {t.about.leadLine1}
              <br />
              {t.about.leadLine2}
            </Reveal>

            <Reveal as="p" className="about__text" delay={110}>
              {t.about.text1}
            </Reveal>

            <Reveal as="p" className="about__text" delay={160}>
              {t.about.text2}
            </Reveal>

            <Reveal className="about__chapters" delay={220}>
              {t.aboutChapters.map((c, i) => (
                <div className="about__chapter" key={CHAPTER_NUMS[i]}>
                  <span className="about__chapter-n">{CHAPTER_NUMS[i]}</span>
                  <div className="about__chapter-body">
                    <h3 className="about__chapter-title">{c.title}</h3>
                    <p className="about__chapter-text">{c.text}</p>
                  </div>
                  <span className="about__chapter-state">{t.about.toBePublished}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="about__principles" delay={280}>
              <h3 className="about__principles-title">{t.about.principlesTitle}</h3>
              <ol className="about__principles-list">
                {t.aboutPrinciples.map((p, i) => (
                  <li key={PRINCIPLE_NUMS[i]}>
                    <span className="about__principles-num">{PRINCIPLE_NUMS[i]}</span>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}