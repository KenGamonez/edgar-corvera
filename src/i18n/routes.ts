import type { Content, RouteMeta } from "./dict";

export type RouteKey = "home" | "volunteer" | "digitalCampaign";

/** Map a pathname to its metadata key. Returns null for admin/unknown paths. */
export function routeKeyForPath(pathname: string): RouteKey | null {
  if (pathname === "/") return "home";
  if (pathname === "/volunteer") return "volunteer";
  if (pathname === "/digital-campaign") return "digitalCampaign";
  return null;
}

export function metaForPath(t: Content, pathname: string): RouteMeta | null {
  const key = routeKeyForPath(pathname);
  if (!key) return null;
  return t.meta[key];
}
