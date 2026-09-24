import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import Reveal from "../lib/reveal";
import { useLang } from "../i18n/LanguageContext";
import { openFeature, closeFeature, currentFeature } from "../lib/hub";
import type { HubFeature } from "../lib/hub";
import Survey from "./features/Survey";
import Concerns from "./features/Concerns";
import AskEdgar from "./features/AskEdgar";
import Pulse from "./features/Pulse";
import InfoHub from "./features/InfoHub";
import Projects from "./features/Projects";
import OpenTabon from "./features/OpenTabon";
import "./features/features.css";
import "./for-tabon.css";

type FeatureDef = {
  key: string;
  num: string;
  component?: () => ReactNode;
  link?: string;
};

/** Identifiers, order, and wiring are invariant; titles/texts translate. */
const FEATURE_DEFS: FeatureDef[] = [
  { key: "survey", num: "01", component: Survey },
  { key: "concerns", num: "02", component: Concerns },
  { key: "ask", num: "03", component: AskEdgar },
  { key: "pulse", num: "04", component: Pulse },
  { key: "info", num: "05", component: InfoHub },
  { key: "updates", num: "06", link: "#updates" },
  { key: "projects", num: "07", component: Projects },
  { key: "open-tabon", num: "08", component: OpenTabon },
];

export default function ForTabon() {
  const [active, setActive] = useState<HubFeature | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLang();

  const features = FEATURE_DEFS.map((d, i) => ({
    ...d,
    title: t.forTabonFeatures[i].title,
    text: t.forTabonFeatures[i].text,
  }));

  const featureLabel = (key: HubFeature | null): string => {
    const f = features.find((f) => f.key === key);
    return f ? f.title : t.forTabon.fallbackLabel;
  };

  useEffect(() => {
    setActive(currentFeature());

    const onHash = () => {
      const f = currentFeature();
      setActive(f);

      if (f) {
        const section = document.getElementById("for-tabon");
        if (section) {
          const r = section.getBoundingClientRect();
          if (r.top < 0 || r.bottom > window.innerHeight) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (active) {
      panelRef.current?.focus({ preventScroll: true });
    } else {
      headRef.current?.focus({ preventScroll: true });
    }
  }, [active]);

  return (
    <section className="tabon section" id="for-tabon" aria-labelledby="tabon-title">
      <div className="container">
        <div className="tabon__head" ref={headRef} tabIndex={-1}>
          <div>
            <p className="eyebrow" data-reveal>
              {t.forTabon.eyebrow}
            </p>
            <h2 className="tabon__title" id="tabon-title" data-reveal>
              {t.forTabon.titleLine1}
              <br />
              <span className="tabon__title-em">{t.forTabon.titleLine2}</span>
            </h2>
          </div>
          <Reveal as="p" className="tabon__intro" delay={120}>
            {t.forTabon.intro}
          </Reveal>
        </div>

        {active ? (
          <div
            className="feat"
            ref={panelRef as RefObject<HTMLDivElement>}
            tabIndex={-1}
            aria-live="polite"
            aria-label={featureLabel(active)}
          >
            <div className="feat__top">
              <button
                className="feat__back"
                type="button"
                onClick={closeFeature}
              >
                {t.forTabon.backLabel}
              </button>
              <span className="status-tag">{featureLabel(active)}</span>
            </div>

            {active === "survey" && <Survey />}
            {active === "concerns" && <Concerns />}
            {active === "ask" && <AskEdgar />}
            {active === "pulse" && <Pulse />}
            {active === "info" && <InfoHub />}
            {active === "projects" && <Projects />}
            {active === "open-tabon" && <OpenTabon />}
          </div>
        ) : (
          <>
            <div className="tabon__features">
              {features.map((f, i) =>
                f.link ? (
                  <Reveal key={f.key} delay={i * 50}>
                    <a
                      className={`tabon__card tabon__card--link ${i === 0 ? "tabon__card--lead" : ""}`}
                      href={f.link}
                    >
                      <span className="tabon__card-n">{f.num}</span>
                      <span className="tabon__card-title">{f.title}</span>
                      <span className="tabon__card-text">{f.text}</span>
                      <span className="tabon__card-go">{t.forTabon.linkCardGo}</span>
                    </a>
                  </Reveal>
                ) : (
                  <Reveal key={f.key} delay={i * 50}>
                    <button
                      className={`tabon__card tabon__card--btn ${i === 0 ? "tabon__card--lead" : ""}`}
                      type="button"
                      onClick={() => openFeature(f.key as HubFeature)}
                      aria-label={`${t.forTabon.openPrefix} ${f.title}`}
                    >
                      <span className="tabon__card-n">{f.num}</span>
                      <span className="tabon__card-title">{f.title}</span>
                      <span className="tabon__card-text">{f.text}</span>
                      <span className="tabon__card-go">{t.forTabon.openAction}</span>
                    </button>
                  </Reveal>
                )
              )}
            </div>

            <Reveal className="tabon__pledge" delay={120}>
              <p className="tabon__pledge-text">{t.forTabon.pledge}</p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}