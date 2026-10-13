export const GA_MEASUREMENT_ID = "G-F6E28B9J6F";

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

export const trackEvent = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }
};
