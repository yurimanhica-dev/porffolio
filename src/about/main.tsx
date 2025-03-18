import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "@/components/about";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <About />
  </StrictMode>
);
