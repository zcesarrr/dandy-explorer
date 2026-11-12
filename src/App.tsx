// I don't know where else to put this, but this is my TODO/Plan list:
// Add a little cooldown timer indicator on AbilityCard (research time)

import { Navigate, Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import CollectionPage from "./pages/CollectionPage";
import { toonsConfig } from "./collections/toons/config";
import { twistedsConfig } from "./collections/twisteds/config";
import { trinketsConfig } from "./collections/trinkets/config";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/toons" replace />} />

      <Route path="/toons" element={<CollectionPage config={toonsConfig} />} />
      <Route path="/toons/:slug" element={<CollectionPage config={toonsConfig} />} />
      <Route path="/toons/:slug/:tabKey" element={<CollectionPage config={toonsConfig} />} />

      <Route path="/twisteds" element={<CollectionPage config={twistedsConfig} />} />
      <Route path="/twisteds/:slug" element={<CollectionPage config={twistedsConfig} />} />
      <Route path="/twisteds/:slug/:tabKey" element={<CollectionPage config={twistedsConfig} />} />

      <Route path="/trinkets" element={<CollectionPage config={trinketsConfig} />} />
      <Route path="/trinkets/:slug" element={<CollectionPage config={trinketsConfig} />} />
      <Route path="/trinkets/:slug/:tabKey" element={<CollectionPage config={trinketsConfig} />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
