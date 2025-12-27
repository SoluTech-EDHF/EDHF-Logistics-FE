import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { useAppStore } from "@/store";
import { registerInterceptors } from "@/services";

registerInterceptors(() => useAppStore.getState().token);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
