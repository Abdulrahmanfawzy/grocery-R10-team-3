import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
console.log("REACT MAIN.TSX STARTING");
// Ensure the fixed token is always set for the application
localStorage.setItem(
  "token",
  "355|DaHfhqKU7rcbUYuq0GJSOiyZVT4c0QHWU7ENaoSP141eb587",
);

import "./index.css";
import App from "./App.tsx";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
