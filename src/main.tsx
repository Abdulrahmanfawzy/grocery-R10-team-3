import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
console.log("REACT MAIN.TSX STARTING");
// Ensure the fixed token is always set for the application

import "./index.css";
import App from "./App.tsx";
import { QueryClient } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" richColors />
  </StrictMode>,
);
