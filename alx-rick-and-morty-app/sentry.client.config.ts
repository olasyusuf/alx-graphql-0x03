import * as Sentry from "@sentry/nextjs";


Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || undefined,
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: process.env.NODE_ENV || "development",
  release: "alx-rick-and-morty-app@1.0.0", 
  debug: process.env.NODE_ENV === "development", 
});

