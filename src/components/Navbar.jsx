import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isDark = theme === "dark";

  const handleScroll = (id) => {
    if (location.pathname !== "/") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navClasses = isDark
    ? "navbar navbar-expand-lg navbar-dark bg-black sticky-top py-3 shadow-sm"
    : "navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3 shadow-sm";

  return (
    <nav className={navClasses} style={{ backdropFilter: "blur(10px)" }}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          <span style={{ fontSize: "1.3rem", letterSpacing: "0.08em" }}>
            Dwarkamai
          </span>
          <div
            className={`small mt-0 ${
              isDark ? "text-white-50" : "text-secondary"
            }`}
          >
            Tours &amp; Travels
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
                  className="btn btn-link nav-link px-2 fw-semibold"
                  style={{ fontSize: "0.95rem" }}
                  onClick={() => handleScroll(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}

            {/* CTA */}
            <li className="nav-item ms-lg-2">
              <Link
                to="/estimate"
                className={`btn rounded-pill px-4 fw-semibold ${
                  isDark ? "btn-outline-light" : "btn-dark"
                }`}
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
                  backgroundColor: isDark ? "#ffffff" : "#212529",
                  color: isDark ? "#000000" : "#ffffff",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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
