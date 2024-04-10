import React from "react";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./appTheme";
import { ToasterProvider } from "../../providers/ToasterProvider";

import { RouteList } from "../../routeList";

import { TestHostAlert } from "../../components/TestHostAlert";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnalyticsProvider } from "../../providers/AnalyticsProvider";

const client = new QueryClient();

export const App = () => {
  return (
    <Router>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={appTheme}>
          <AnalyticsProvider>
            <div className="wrapper">
              <TestHostAlert />
              <Header />
              <main className="content">
                <Suspense>
                  <RouteList />
                </Suspense>
              </main>
              <Footer />
            </div>
            <ToasterProvider />
          </AnalyticsProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};
