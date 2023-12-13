import React from "react";
import { Route, Routes } from "react-router-dom";

const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
// const ProductInfo = React.lazy(() => import("../pages/ProductInfo"));
// const Products = React.lazy(() => import("../pages/Products"));
const Home = React.lazy(() => import("../pages/Home"));
const Catalog = React.lazy(() => import("../pages/Catalog"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

export const RouteList = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductInfo />} />*/}

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
