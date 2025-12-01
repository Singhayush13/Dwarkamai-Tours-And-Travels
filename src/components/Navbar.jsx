// src/components/NavbarEnhanced.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

/**
 * NavbarEnhanced
 * Props:
 *  - theme: "light" | "dark"
 *  - toggleTheme: function to toggle the theme
 *
 * Note: Import bootstrap CSS once in your app:
 *   import 'bootstrap/dist/css/bootstrap.min.css';
 */
const NAV_ITEMS = ["services", "buses", "reviews", "contact"];

const Navbar = ({ theme = "light", toggleTheme }) => {
  const location = useLocation();
  const isDark = theme === "dark";
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navRef = useRef(null);
  const themeBtnRef = useRef(null);
  const collapseRef = useRef(null);

  /* ---------- ANIMATIONS: entrance + theme toggle ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // subtle slide down + fade
      gsap.from(navRef.current, { y: -14, opacity: 0, duration: 0.6, ease: "power3.out" });

      // small hover scale for CTA buttons (delegated)
      gsap.set(".nav-cta", { transformOrigin: "center" });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Animate the theme toggle pill and navbar colors when theme changes
  useEffect(() => {
    // visual animation on the theme button itself
    const el = themeBtnRef.current;
    if (!el) return;
    const tl = gsap.timeline();
    if (isDark) {
      tl.to(el, { rotate: 360, duration: 0.38, ease: "power2.out" });
      tl.to(el, { scale: 1.02, duration: 0.12, ease: "power1.inOut" }, "<");
      tl.to(el, { scale: 1, duration: 0.12 });
    } else {
      tl.to(el, { rotate: -360, duration: 0.38, ease: "power2.out" });
      tl.to(el, { scale: 1.02, duration: 0.12, ease: "power1.inOut" }, "<");
      tl.to(el, { scale: 1, duration: 0.12 });
    }

    // subtle background tint animation for navbar using CSS variables (the CSS handles transitions)
  }, [isDark]);

  /* ---------- Auto-collapse on nav click (mobile) ---------- */
  const handleNavClick = (targetId) => {
    // scroll only if on homepage
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // navigate to home and then scroll? you can implement route push if needed
      // e.g. history.push("/") and then scroll after navigation
    }

    // collapse the mobile menu
    if (expanded && collapseRef.current) {
      // hide bootstrap collapse by toggling 'show' classes (safe approach)
      const collapseEl = collapseRef.current;
      collapseEl.classList.remove("show");
      setExpanded(false);
    }
  };

  /* ---------- Scrollspy: set active section while on homepage ---------- */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const ids = NAV_ITEMS.map((i) => document.getElementById(i)).filter(Boolean);
    if (!ids.length) return;

    const onScroll = () => {
      const Y = window.scrollY + window.innerHeight * 0.25;
      let current = null;
      for (const el of ids) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (Y >= top) current = el.id;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  /* ---------- Call button: opens dialer. number is not visually displayed ---------- */
  const phoneNumber = "tel:+918999758984";
  const handleCall = () => {
    // attempt to open device dialer
    window.location.href = phoneNumber;
  };

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg sticky-top py-3 shadow-sm ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-white border-bottom"}`}
      style={{
        backdropFilter: "saturate(120%) blur(6px)",
        transition: "background-color 300ms ease, color 300ms ease, border-color 300ms ease",
        zIndex: 1020,
      }}
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex flex-column" to="/" aria-label="Dwarkamai Tours and Travels home">
          <span className="fw-bold text-uppercase" style={{ letterSpacing: ".06em", fontSize: "1.15rem" }}>
            Dwarkamai
          </span>
          <small className={`m-0 ${isDark ? "text-muted text-white-50" : "text-muted text-secondary"}`} style={{ lineHeight: 1 }}>
            Tours &amp; Travels
          </small>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => {
            setExpanded((s) => !s);
            const collapseEl = collapseRef.current;
            if (collapseEl) collapseEl.classList.toggle("show");
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible area */}
        <div ref={collapseRef} className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
            {NAV_ITEMS.map((item) => {
              const label = item[0].toUpperCase() + item.slice(1);
              const active = activeSection === item;
              return (
                <li key={item} className="nav-item">
                  <button
                    className={`nav-link btn btn-link px-2 py-0 fw-semibold ${active ? "active text-primary" : ""}`}
                    style={{
                      fontSize: ".95rem",
                      transition: "color .18s ease, transform .12s ease",
                    }}
                    onClick={() => handleNavClick(item)}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              );
            })}

            {/* Get Estimate CTA */}
            <li className="nav-item ms-lg-2">
              <Link
                to="/estimate"
                className="btn nav-cta rounded-pill px-4 fw-semibold"
                style={{
                  backgroundColor: isDark ? "transparent" : "#111827",
                  color: isDark ? "#fff" : "#fff",
                  border: isDark ? "1px solid rgba(255,255,255,0.12)" : "none",
                  transition: "transform .12s ease, box-shadow .12s ease",
                }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -3, boxShadow: "0 10px 30px rgba(2,6,23,0.12)", duration: 0.18 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, boxShadow: "none", duration: 0.18 })}
              >
                Get Estimate
              </Link>
            </li>

            {/* Call Us — no number displayed; opens phone dialer */}
            <li className="nav-item ms-lg-2 d-none d-lg-block">
              <button
                onClick={handleCall}
                className="btn btn-outline-success rounded-pill px-3 fw-semibold"
                aria-label="Call Dwarkamai Tours at +91 89997 58984"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.04, duration: 0.12 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.12 })}
              >
                {/* visually show only icon + text 'Call Us' — not the number */}
                <span style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
                  📞 <span className="d-none d-sm-inline">Call Us</span>
                </span>
              </button>
            </li>

            {/* Theme toggle */}
            <li className="nav-item ms-2">
              <button
                ref={themeBtnRef}
                onClick={() => toggleTheme && toggleTheme()}
                className="btn border-0 rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                style={{
                  width: 42,
                  height: 42,
                  backgroundColor: isDark ? "#fff" : "#212529",
                  color: isDark ? "#000" : "#fff",
                  transition: "background-color 260ms ease, color 260ms ease, transform 140ms ease",
                }}
                title="Toggle Light / Dark"
                aria-pressed={isDark}
              >
                <span style={{ fontSize: "0.95rem", lineHeight: 1 }}>{isDark ? "🌞" : "🌙"}</span>
              </button>
            </li>

          </ul>

          {/* Mobile Call button (visible only on small screens) */}
          <div className="d-lg-none mt-3">
            <button
              onClick={handleCall}
              className="btn btn-success w-100 rounded-pill fw-semibold"
              aria-label="Call Dwarkamai Tours at +91 89997 58984"
            >
              📞 Call Us
            </button>
          </div>
        </div>
      </div>

      {/* local CSS for polish */}
      <style>{`
        /* Active nav link subtle underline */
        .nav-link.active { position: relative; }
        .nav-link.active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 3px;
          border-radius: 6px;
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          opacity: .98;
          transform: translateY(6px);
          transition: transform .18s ease, opacity .18s ease;
        }

        /* Tighter spacing for navbar items */
        .navbar-nav .nav-item { display: flex; align-items: center; }

        /* Toggler subtle style */
        .navbar-toggler { width: 48px; height: 40px; display:flex; align-items:center; justify-content:center; border-radius: 8px; }
        .navbar-toggler:focus { outline: none; box-shadow: 0 6px 16px rgba(2,6,23,0.08); }

        /* small screen adjustments */
        @media (max-width: 991px) {
          .navbar { padding: .6rem 1rem; }
          .nav-cta { margin-top: .25rem; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
