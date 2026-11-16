import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Eager load Home for instant LCP
import Home from "./pages/Home";

// Lazy load secondary pages
const OurStory = lazy(() => import("./pages/OurStory"));
const Menu = lazy(() => import("./pages/Menu"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Reservations = lazy(() => import("./pages/Reservations"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Events = lazy(() => import("./pages/Events"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-12 text-cafe-muted">
      <div className="w-8 h-8 border-2 border-cafe-border border-t-cafe-accent rounded-full animate-spin mb-3" />
      <span className="font-serif text-xs tracking-[0.25em] uppercase text-cafe-primary font-medium">
        Loading Add Café
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cafe-bg text-cafe-text selection:bg-cafe-primary selection:text-cafe-bg">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/events" element={<Events />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}
