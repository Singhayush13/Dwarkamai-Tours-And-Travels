import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
const NotFoundPage = lazy(() => import("./components/NotFound"));

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const FleetPage = lazy(() => import("./pages/FleetPage"));
const DestinationsPage = lazy(() => import("./pages/DestinationsPage"));
const PackagesPage = lazy(() => import("./pages/PackagesPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage").then((module) => ({ default: module.ContactPage })));
const BookingPage = lazy(() => import("./pages/ContactPage").then((module) => ({ default: module.BookingPage })));
const PrivacyPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.TermsPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <ScrollToTop />
        <Navbar />
        <main className="site-main">
          <Suspense fallback={<div className="route-loading" role="status">Loading your next stop…</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/packages/:slug" element={<PackagesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </ThemeProvider>
    </MotionConfig>
  );
}
