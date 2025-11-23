import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();
  const isDark = theme === "dark";

  // Dark theme: black background, white text
  // Light theme: white background, black text with a subtle top border
  const footerClasses = isDark
    ? "bg-black text-white"
    : "bg-white text-dark border-top";

  const linkBaseClasses = isDark
    ? "text-white-50"
    : "text-secondary";

  return (
    <footer className={`mt-5 ${footerClasses}`}>
      <div className="container py-4">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
          {/* Brand / description */}
          <div className="text-center text-lg-start">
            <h5 className="mb-1 text-uppercase fw-bold">
              Dwarkamai Tours &amp; Travels
            </h5>
            <small className={isDark ? "text-white-50" : "text-muted"}>
              Reliable bus services for pilgrim, family and corporate travel.
            </small>
          </div>

          {/* Links */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            <a
              href="#services"
              className={`text-decoration-none small ${linkBaseClasses}`}
            >
              Services
            </a>
            <a
              href="#buses"
              className={`text-decoration-none small ${linkBaseClasses}`}
            >
              Buses
            </a>
            <a
              href="#reviews"
              className={`text-decoration-none small ${linkBaseClasses}`}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className={`text-decoration-none small ${linkBaseClasses}`}
            >
              Contact
            </a>
            <Link
              to="/estimate"
              className={`btn btn-sm ${
                isDark ? "btn-outline-light" : "btn-outline-dark"
              }`}
            >
              Get Approx Cost
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center mt-3">
          <small className={isDark ? "text-white-50" : "text-muted"}>
            © {year} Dwarkamai Tours &amp; Travels. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
