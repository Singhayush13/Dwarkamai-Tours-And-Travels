import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();
  const isDark = theme === "dark";

  const footerClasses = isDark
    ? "bg-black text-white border-top border-secondary"
    : "bg-white text-dark border-top";

  const linkBaseClasses = isDark ? "text-white-50" : "text-secondary";

  return (
    <footer className={`mt-5 ${footerClasses}`}>
      <div className="container py-4">
        {/* Top section */}
        <div className="row gy-4 align-items-start">
          {/* Brand / description */}
          <div className="col-lg-4 text-center text-lg-start">
            <h5 className="mb-1 text-uppercase fw-bold">
              Dwarkamai Tours &amp; Travels
            </h5>
            <small className={isDark ? "text-white-50" : "text-muted"}>
              Reliable bus and coach services for pilgrim, family and corporate travel across Maharashtra.
            </small>
          </div>

          {/* Quick links */}
          <div className="col-lg-4">
            <div className="d-flex flex-wrap justify-content-center gap-3">
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
                className="btn btn-sm rounded-pill px-3 fw-semibold"
                style={{
                  borderColor: isDark ? "#f8f9fa" : "#000",
                  color: isDark ? "#f8f9fa" : "#000",
                  backgroundColor: "transparent",
                }}
              >
                Get Approx Cost
              </Link>
            </div>
          </div>

          {/* Contact snippet */}
          <div className="col-lg-4 text-center text-lg-end">
            <small className={linkBaseClasses}>
              📞 <a
                href="tel:8999758984"
                className={`text-decoration-none ${linkBaseClasses}`}
              >
                +91 89997 58984
              </a>{" "}
              · 📍 Vasai, Mumbai
            </small>
          </div>
        </div>

        {/* Divider */}
        <hr className={isDark ? "border-secondary mt-4 mb-3" : "mt-4 mb-3"} />

        {/* Bottom line */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <small className={isDark ? "text-white-50" : "text-muted"}>
            © {year} Dwarkamai Tours &amp; Travels. All rights reserved.
          </small>
          <small className={isDark ? "text-white-50" : "text-muted"}>
            Designed for comfort, safety &amp; punctuality.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
