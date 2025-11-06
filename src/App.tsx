import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./tailwind.css";
import SpigotPage from "./pages/SpigotPage";
import BoatCalculatorPage from "./pages/FuelEco/BoatCalculatorPage";
import CSC495 from "./pages/coursework/CSC495";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plugins" element={<SpigotPage />} />
        <Route path="/reacttools/fueleco" element={<BoatCalculatorPage />} />
        <Route path="/projects/csc-495" element={<CSC495 />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
