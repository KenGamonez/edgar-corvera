/* ============================================================
   FOR TABON HUB — feature routing via URL hash.
   Features are addressable (e.g. /#survey) so they can be linked
   from anywhere on the site and shared directly.
   ============================================================ */

export type HubFeature =
  | "survey"
  | "concerns"
  | "ask"
  | "pulse"
  | "info"
  | "projects"
  | "open-tabon";

export const HUB_FEATURES: HubFeature[] = [
  "survey",
  "concerns",
  "ask",
  "pulse",
  "info",
  "projects",
  "open-tabon",
];

export function openFeature(feature: HubFeature) {
  try {
    window.history.replaceState(null, "", `#${feature}`);
  } catch {
    /* some environments restrict history access — state still updates below */
  }
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function closeFeature() {
  try {
    window.history.replaceState(null, "", "#for-tabon");
  } catch {
    /* no-op */
  }
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function currentFeature(): HubFeature | null {
  const h = window.location.hash.replace(/^#/, "");
  if ((HUB_FEATURES as string[]).includes(h)) return h as HubFeature;
  return null;
}