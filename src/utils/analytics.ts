import { config } from '../config/environment';

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
        Sentry: unknown;
        hj: ((...args: unknown[]) => void) & { q?: unknown[] };
    }
}

export const initializeAnalytics = () => {
    if (!config.isProduction) return;

    // Google Analytics
    if (config.analytics.googleAnalyticsId) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
            window.dataLayer.push(args);
        };
        window.gtag('js', new Date());
        window.gtag('config', config.analytics.googleAnalyticsId, {
            page_title: document.title,
            page_location: window.location.href,
        });
    }

    // Hotjar
    if (config.analytics.hotjarId) {
        (function (
            h: Window & { hj?: (...args: unknown[]) => void; _hjSettings?: { hjid: string | number; hjsv: number } },
            o: Document,
            t: string,
            j: string,
            a?: HTMLHeadElement,
            r?: HTMLScriptElement
        ) {
            h.hj = h.hj || function (...args: unknown[]) { (h.hj.q = h.hj.q || []).push(args); };
            h._hjSettings = { hjid: config.analytics.hotjarId, hjsv: 6 };
            a = o.getElementsByTagName('head')[0] as HTMLHeadElement;
            r = o.createElement('script');
            r.async = true;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
};

export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (!config.isProduction) {
        console.log('Analytics Event:', eventName, parameters);
        return;
    }

    if (window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

export const trackPageView = (path: string, title?: string) => {
    if (!config.isProduction) return;

    if (window.gtag) {
        window.gtag('config', config.analytics.googleAnalyticsId, {
            page_path: path,
            page_title: title || document.title,
        });
    }
};