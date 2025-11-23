import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isDark = theme === "dark";

  const handleScroll = (id) => {
    if (location.pathname !== "/") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top py-3 shadow-sm ${
        isDark ? "navbar-dark bg-black" : "navbar-light bg-white border-bottom"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          <span style={{ fontSize: "1.3rem", letterSpacing: "1px" }}>
            Dwarkamai
          </span>
          <div
            className={`small mt-0 ${
              isDark ? "text-white-50" : "text-secondary"
            }`}
            style={{ letterSpacing: ".5px" }}
          >
            Tours & Travels
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 gap-1">

            {["services", "buses", "reviews", "contact"].map((item) => (
              <li key={item} className="nav-item">
                <button
                  className="btn btn-link nav-link px-2 fw-medium"
                  style={{ fontSize: "0.95rem" }}
                  onClick={() => handleScroll(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}

            {/* CTA */}
            <li className="nav-item">
              <Link
                to="/estimate"
                className="btn px-4 py-2 fw-semibold rounded-pill shadow-sm"
                style={{
                  background: isDark ? "#ffffff22" : "#0d6efd",
                  color: isDark ? "#fff" : "#fff",
                  border: "none",
                  backdropFilter: "blur(6px)",
                  transition: "0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.06)")
                }
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Get Estimate
              </Link>
            </li>

            {/* Theme Button */}
            <li className="nav-item ms-lg-3">
              <button
                onClick={toggleTheme}
                className="btn border-0 rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                style={{
                  width: "40px",
                  height: "40px",
                  background: isDark ? "#ffffff" : "#2b2b2b",
                  color: isDark ? "#000" : "#fff",
                  transition: "0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.15)")
                }
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                title="Toggle Light/Dark"
              >
                {isDark ? "🌞" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
