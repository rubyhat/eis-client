import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { RouteList } from "../../routeList";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import { appTheme } from "./appTheme";
import React from "react";
import { ToasterProvider } from "../../providers/ToasterProvider";

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <div className="wrapper">
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
    </Router>
  );
};
