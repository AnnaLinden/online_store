import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
