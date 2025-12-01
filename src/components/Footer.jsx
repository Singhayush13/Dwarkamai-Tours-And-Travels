// src/components/Footer.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TelephoneFill, GeoAltFill, EnvelopeFill, Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { gsap } from "gsap";

const Footer = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const year = new Date().getFullYear();
  const rootRef = useRef(null);

  useEffect(() => {
    // Gentle entrance animation
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, { y: 18, opacity: 0, duration: 0.7, ease: "power3.out" });
      gsap.from(el.querySelectorAll(".footer-col"), {
        y: 8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.12,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const footerBg = isDark ? "#050505" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)";
  const muted = isDark ? "#9fb4c2" : "#6c757d";
  const linkBase = isDark ? "text-white-50" : "text-secondary";

  return (
    <footer
      ref={rootRef}
      className="pt-5 pb-4"
      style={{ background: footerBg, color: isDark ? "#eef6f8" : "#111827", borderTop: `1px solid ${cardBorder}` }}
    >
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* Brand */}
          <div className="col-12 col-md-4 footer-col text-center text-md-start">
            <Link to="/" className="text-decoration-none d-inline-flex align-items-center mb-2" aria-label="Dwarkamai Tours home">
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  display: "inline-grid",
                  placeItems: "center",
                  marginRight: 12,
                  background: isDark ? "linear-gradient(90deg,#06252b,#08303a)" : "#f1f5f9",
                  color: isDark ? "#aeeff6" : "#0b1220",
                  fontWeight: 800,
                }}
              >
                DT
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 0.4, color: isDark ? "#fff" : "#111827" }}>
                  Dwarkamai
                </div>
                <div style={{ fontSize: 12, color: muted, lineHeight: 1 }}>
                  Tours &amp; Travels
                </div>
              </div>
            </Link>

            <p className="small mb-2" style={{ color: muted, maxWidth: 320 }}>
              Reliable bus & coach services — pilgrim, family and corporate travel across Maharashtra. Clean coaches, experienced drivers, punctual service.
            </p>

            <div className="d-flex gap-2 justify-content-center justify-content-md-start mt-3">
              <a href="https://wa.me/918999758984" aria-label="Whatsapp" className="d-inline-flex align-items-center justify-content-center rounded-circle" style={iconWrapStyle(isDark)}>
                <Whatsapp size={16} />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="d-inline-flex align-items-center justify-content-center rounded-circle" style={iconWrapStyle(isDark)}>
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook" className="d-inline-flex align-items-center justify-content-center rounded-circle" style={iconWrapStyle(isDark)}>
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 footer-col">
            <h6 className="fw-bold mb-3" style={{ color: isDark ? "#fff" : "#111827" }}>Quick links</h6>

            <div className="d-flex flex-wrap gap-2">
              <a href="#services" className={`small text-decoration-none px-2 py-1 rounded ${linkBase} hover-underline`} aria-label="Services">Services</a>
              <a href="#buses" className={`small text-decoration-none px-2 py-1 rounded ${linkBase} hover-underline`} aria-label="Buses">Buses</a>
              <a href="#reviews" className={`small text-decoration-none px-2 py-1 rounded ${linkBase} hover-underline`} aria-label="Reviews">Reviews</a>
              <a href="#contact" className={`small text-decoration-none px-2 py-1 rounded ${linkBase} hover-underline`} aria-label="Contact">Contact</a>
              <Link to="/estimate" className="btn btn-sm rounded-pill px-3 fw-semibold" style={{ borderColor: isDark ? "#f8f9fa" : "#000", color: isDark ? "#f8f9fa" : "#000", background: "transparent" }}>
                Get Approx Cost
              </Link>
            </div>

            <div className="mt-3">
              <a href="/terms" className={`small text-decoration-none ${linkBase} me-3`}>Terms</a>
              <a href="/privacy" className={`small text-decoration-none ${linkBase}`}>Privacy</a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 footer-col text-center text-md-end">
            <h6 className="fw-bold mb-3" style={{ color: isDark ? "#fff" : "#111827" }}>Contact</h6>

            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2 mb-2">
              <TelephoneFill className={isDark ? "text-white" : "text-dark"} />
              <a href="tel:8999758984" className={`text-decoration-none fw-semibold ${isDark ? "text-white" : "text-dark"}`} aria-label="Call Dwarkamai Tours">
                +91 89997 58984
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2 mb-2">
              <EnvelopeFill className={isDark ? "text-white" : "text-dark"} />
              <a href="mailto:info@dwarkamaitours.com" className={`text-decoration-none ${linkBase}`} aria-label="Email Dwarkamai Tours">
                info@dwarkamaitours.com
              </a>
            </div>

            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2">
              <GeoAltFill className={isDark ? "text-white" : "text-dark"} />
              <span className={`small ${linkBase}`}>Vasai, Mumbai</span>
            </div>

            <div className="mt-3 d-flex gap-2 justify-content-center justify-content-md-end">
              <a href="tel:8999758984" className="btn btn-sm btn-success rounded-pill" aria-label="Call now">
                📞 Call Us
              </a>
              <a href="#contact" className={`btn btn-sm ${isDark ? "btn-outline-light" : "btn-outline-dark"} rounded-pill`} aria-label="Open contact">
                ✉️ Enquire
              </a>
            </div>
          </div>
        </div>

        <hr className={`my-4`} style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }} />

        {/* Bottom line */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
            © {year} Dwarkamai Tours &amp; Travels. All rights reserved.
          </div>

          <div className="text-center text-md-end">
            <div className="small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
              Designed for comfort, safety &amp; punctuality.
            </div>

            <div className="mt-1 small fw-semibold" style={{ color: isDark ? "#fff" : "#111827" }}>
              {/* "Made by Heart Logo By Ayush Singh" as requested */}
              <span style={{ marginRight: 6 }}>Made by</span>
              <span aria-hidden="true" style={{ color: "#e11d48" }}>♥</span>
              <span style={{ marginLeft: 6 }}>By Ayush Singh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        .hover-underline:hover { text-decoration: underline; }
        .btn-sm { padding: 0.375rem 0.85rem; }
        /* icon wrappers */
        .footer a[aria-label] { text-decoration: none; }
      `}</style>
    </footer>
  );
};

// small inline helper styles
function iconWrapStyle(isDark) {
  return {
    width: 36,
    height: 36,
    display: "inline-grid",
    placeItems: "center",
    background: isDark ? "rgba(255,255,255,0.04)" : "#f1f5f9",
    color: isDark ? "#e6eef8" : "#111827",
    borderRadius: 8,
    textDecoration: "none",
  };
}

export default Footer;
