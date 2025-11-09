import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./util/ResetScroll.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <ScrollToTop />
        <App />
        <Footer />
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
);
