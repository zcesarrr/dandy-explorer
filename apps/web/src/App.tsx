import { Route, Routes } from "react-router";
import ToonPage from "./pages/ToonPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ToonPage />} />
      <Route path="/toon/:id" element={<ToonPage />} />
      <Route path="/toon/:id/:tab" element={<ToonPage />} />
    </Routes>
  );
}
