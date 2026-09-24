import React from "react";
import ReactDOM from "react-dom/client";
import { initReveal } from "./lib/reveal";
import { LanguageProvider } from "./i18n/LanguageContext";
import App from "./App";
import "./styles/app.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

initReveal();