export const config = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.yoseph.dev',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://yoseph.dev',
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GA_ID,
    hotjarId: import.meta.env.VITE_HOTJAR_ID,
  },
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
  },
  contact: {
    emailServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    emailTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    emailPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
} as const;