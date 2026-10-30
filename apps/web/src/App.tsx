import { Navigate, Route, Routes } from "react-router";
import ToonPage from "./pages/ToonPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ToonPage />} />
      <Route path="/toon/:toonId" element={<ToonPage />} />
      <Route path="/toon/:toonId/:tab" element={<ToonPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
