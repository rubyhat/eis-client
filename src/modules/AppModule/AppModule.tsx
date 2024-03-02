import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { RouteList } from "../../routeList";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./appTheme";
import React from "react";
import { ToasterProvider } from "../../providers/ToasterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestHostAlert } from "../../components/TestHostAlert";

const client = new QueryClient();

export const App = () => {
  return (
    <Router>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={appTheme}>
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
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};
