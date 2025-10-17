import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";
import ThemeSelector from "./components/ThemeSelector.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
        <Footer />
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
);
