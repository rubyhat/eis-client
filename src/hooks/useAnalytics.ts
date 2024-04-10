import React from "react";
import ReactGA from "react-ga4";
import { VITE_GA_MESUREMENT_ID } from "../constants/envs";

const GA_MESUREMENT_ID = VITE_GA_MESUREMENT_ID;

interface TrackEventProps {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  React.useEffect(() => {
    ReactGA.initialize(GA_MESUREMENT_ID);
  }, []);

  const trackPageView = (path: string) => {
    ReactGA.send({ hitType: "pageview", page: path });
  };

  const trackEvent = ({ category, action, label, value }: TrackEventProps) => {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  };

  return { trackPageView, trackEvent };
};
