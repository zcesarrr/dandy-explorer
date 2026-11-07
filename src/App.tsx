import { Route, Routes } from "react-router";
import ToonPage from "./pages/ToonPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ToonPage />} />
      <Route path="/toon/:toonSlug" element={<ToonPage />} />
      <Route path="/toon/:toonSlug/:tabKey" element={<ToonPage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
