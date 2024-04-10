import React, { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

import { useAnalytics } from "../hooks/useAnalytics";

export const AnalyticsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  React.useEffect(() => {
    // Отслеживание просмотра страницы
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  return <>{children}</>;
};
