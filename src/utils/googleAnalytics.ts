// src/utils/googleAnalytics.ts
import ReactGA from "react-ga4";

// 👇 Aquí pega tu ID real (G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
