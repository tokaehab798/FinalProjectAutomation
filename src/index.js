import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthContextProvider } from "./context/AuthContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <BrowserRouter basename="">
      <Suspense fallback={<span>...</span>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </AuthContextProvider>
);
