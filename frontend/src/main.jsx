import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import Home from "./assets/pages/home/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
