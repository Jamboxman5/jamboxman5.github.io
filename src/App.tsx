import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./tailwind.css";
import SpigotPage from "./pages/SpigotPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plugins" element={<SpigotPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
