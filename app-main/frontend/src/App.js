import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
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
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App bg-white min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <nav className="sr-only" aria-label="Quick links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Navbar />
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
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
