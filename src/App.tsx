import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import PublicService from "./components/PublicService";
import ForTabon from "./components/ForTabon";
import Updates from "./components/Updates";
import Media from "./components/Media";
import GetInvolved from "./components/GetInvolved";
import VolunteerCta from "./components/VolunteerCta";
import Footer from "./components/Footer";
import Volunteer from "./components/Volunteer";
import { AuthProvider } from "./admin/AuthContext";
import AdminApp from "./admin/AdminApp";
import "./styles/app.css";

function PublicSite() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <PublicService />
        <ForTabon />
        <Updates />
        <Media />
        <GetInvolved />
        <VolunteerCta />
      </main>
      <Footer />
    </>
  );
}

function PageRouter({ path }: { path: string }) {
  if (path.startsWith("/admin")) return <AdminApp path={path} />;
  if (path === "/volunteer") return <Volunteer />;
  return <PublicSite />;
}

export default function App() {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      handleHashScroll(window.location.pathname);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const target = e.target as Element | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) return; // same-page anchor — let the browser scroll
      let url: URL | null = null;
      try {
        url = new URL(a.href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      const p = url.pathname;
      const inApp = p === "/" || p === "/volunteer" || p.startsWith("/admin");
      if (!inApp) return;
      // Already on home: native anchor handles the hash scroll
      if (p === "/" && window.location.pathname === "/") return;
      e.preventDefault();
      const next = p + url.search + url.hash;
      if (next !== window.location.pathname + window.location.search + window.location.hash) {
        window.history.pushState({}, "", next);
      }
      setPath(p);
      handleHashScroll(p);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (path === "/") handleHashScroll(path);
  }, [path]);

  return (
    <AuthProvider>
      <PageRouter path={path} />
    </AuthProvider>
  );
}

function handleHashScroll(path: string) {
  if (path !== "/") return;
  const hash = window.location.hash;
  if (hash) {
    const el = document.getElementById(hash.replace("#", ""));
    if (el) {
      el.scrollIntoView({ block: "start" });
      return;
    }
  }
  window.scrollTo(0, 0);
}