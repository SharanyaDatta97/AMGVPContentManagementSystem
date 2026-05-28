import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FounderServices from "./pages/FounderServices";
import ServiceDetail from "./pages/ServiceDetail";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import BurnRunway from "./calculator/pages/BurnRunway";
import RevenueProjector from "./calculator/pages/RevenueProjector";
import SafeDilution from "./calculator/pages/SafeDilution";
import AboutUs from "./pages/AboutUs";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App bg-white min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founder-services" element={<FounderServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources/burnrunway" element={<BurnRunway />} />
          <Route path="/resources/revenueprojector" element={<RevenueProjector />} />
          <Route path="/resources/safedilution" element={<SafeDilution />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
