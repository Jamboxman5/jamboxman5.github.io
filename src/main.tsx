import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
      <div className="w-full bg-gray-800 h-[120px]">
        <p className="text-gray-300 text-center font-thin text-xl pt-8">
          © Samuel Thompson, {new Date().getFullYear()} <br/> All Rights Reserved
        </p>
      </div>
    </HashRouter>
  </StrictMode>
);
