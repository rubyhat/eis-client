import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Help = React.lazy(() => import("../pages/Help"));
const About = React.lazy(() => import("../pages/About"));
const Links = React.lazy(() => import("../pages/Links"));
const Catalog = React.lazy(() => import("../pages/Catalog"));
const Roadmap = React.lazy(() => import("../pages/Roadmap"));
const Contacts = React.lazy(() => import("../pages/Contacts"));
const EstateDetails = React.lazy(() => import("../pages/EstateDetails"));
const Sell = React.lazy(() => import("../pages/Orders/Sell"));

const Policy = React.lazy(() => import("../pages/Documents/Policy"));
const Agreement = React.lazy(() => import("../pages/Documents/Agreement"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));

export const RouteList = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<EstateDetails />} />

      <Route path="/orders/sell" element={<Sell />} />

      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />
      <Route path="/links" element={<Links />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="/docs/policy" element={<Policy />} />
      <Route path="/docs/agreement" element={<Agreement />} />

      <Route
        path="/access-denied"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <AccessDenied />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
