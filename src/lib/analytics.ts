type AnalyticsEvent =
  | "resume_download"
  | "project_click"
  | "contact_submit"
  | "external_profile_click";

export function track(event: AnalyticsEvent, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  // Plausible / Umami / Custom privacy-first analytics hook
  const win = window as unknown as {
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    umami?: { track: (eventName: string, data?: Record<string, unknown>) => void };
  };

  if (typeof win.plausible === "function") {
    win.plausible(event, { props });
  } else if (win.umami && typeof win.umami.track === "function") {
    win.umami.track(event, props);
  } else {
    // In development or when no analytics provider is connected
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log(`[Analytics: ${event}]`, props);
    }
  }
}
