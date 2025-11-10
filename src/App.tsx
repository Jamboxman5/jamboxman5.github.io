import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./tailwind.css";
import SpigotPage from "./pages/games/SpigotPage";
import BoatCalculatorPage from "./pages/fueleco/BoatCalculatorPage";
import CSC495 from "./pages/coursework/CSC495";
import CheckMate from "./pages/projects/CheckMate";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plugins" element={<SpigotPage />} />
        <Route path="/reacttools/fueleco" element={<BoatCalculatorPage />} />
        <Route path="/projects/csc-495" element={<CSC495 />} />
        <Route path="/projects/CheckMate" element={<CheckMate />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
