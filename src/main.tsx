import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./modules/AppModule/index.tsx";
import "./assets/global.scss";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
