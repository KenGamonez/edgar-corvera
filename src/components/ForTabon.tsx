import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import Reveal from "../lib/reveal";
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

const FEATURES: {
  key: string;
  num: string;
  title: string;
  text: string;
  component?: () => ReactNode;
  link?: string;
}[] = [
  {
    key: "survey",
    num: "01",
    title: "What matters to you",
    text: "Community priority survey.",
    component: Survey,
  },
  {
    key: "concerns",
    num: "02",
    title: "Tell us a concern",
    text: "Residents can submit a community concern.",
    component: Concerns,
  },
  {
    key: "ask",
    num: "03",
    title: "Ask Edgar",
    text: "Questions, suggestions, or a message.",
    component: AskEdgar,
  },
  {
    key: "pulse",
    num: "04",
    title: "Community Pulse",
    text: "Aggregated community feedback and priorities.",
    component: Pulse,
  },
  {
    key: "info",
    num: "05",
    title: "Tabon Information",
    text: "Useful community information, announcements, contacts, and resources.",
    component: InfoHub,
  },
  {
    key: "updates",
    num: "06",
    title: "Community Updates",
    text: "News, activities, announcements, and verified developments.",
    link: "#updates",
  },
  {
    key: "projects",
    num: "07",
    title: "Community Projects",
    text: "Track the projects that affect our community.",
    component: Projects,
  },
  {
    key: "open-tabon",
    num: "08",
    title: "Open Tabon",
    text: "Projects, reports, documents, and community priorities.",
    component: OpenTabon,
  },
];

function featureLabel(key: HubFeature | null): string {
  const f = FEATURES.find((f) => f.key === key);
  return f ? f.title : "For Tabon features";
}

export default function ForTabon() {
  const [active, setActive] = useState<HubFeature | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);

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
      panelRef.current?.focus();
    } else {
      headRef.current?.focus();
    }
  }, [active]);

  return (
    <section className="tabon section" id="for-tabon" aria-labelledby="tabon-title">
      <div className="container">
        <div className="tabon__head" ref={headRef} tabIndex={-1}>
          <div>
            <p className="eyebrow" data-reveal>
              For Tabon
            </p>
            <h2 className="tabon__title" id="tabon-title" data-reveal>
              The community is
              <br />
              <span className="tabon__title-em">at the center of this.</span>
            </h2>
          </div>
          <Reveal as="p" className="tabon__intro" delay={120}>
            A place to listen, understand what matters, connect people with
            information, and keep track of the work that affects our community.
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
                All For Tabon features
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
              {FEATURES.map((f, i) =>
                f.link ? (
                  <Reveal key={f.key} delay={i * 50}>
                    <a className="tabon__card tabon__card--link" href={f.link}>
                      <span className="tabon__card-n">{f.num}</span>
                      <span className="tabon__card-title">{f.title}</span>
                      <span className="tabon__card-text">{f.text}</span>
                      <span className="tabon__card-go">Community updates</span>
                    </a>
                  </Reveal>
                ) : (
                  <Reveal key={f.key} delay={i * 50}>
                    <button
                      className="tabon__card tabon__card--btn"
                      type="button"
                      onClick={() => openFeature(f.key as HubFeature)}
                      aria-label={`Open ${f.title}`}
                    >
                      <span className="tabon__card-n">{f.num}</span>
                      <span className="tabon__card-title">{f.title}</span>
                      <span className="tabon__card-text">{f.text}</span>
                      <span className="tabon__card-go">Open feature</span>
                    </button>
                  </Reveal>
                )
              )}
            </div>

            <Reveal className="tabon__pledge" delay={120}>
              <p className="tabon__pledge-text">
                Nothing is posted on this platform that has not actually
                happened — and no promise is made before it is ready.
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}