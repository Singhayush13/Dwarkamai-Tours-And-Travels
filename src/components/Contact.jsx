import React from "react";
import { TelephoneFill, EnvelopeFill, GeoAltFill } from "react-bootstrap-icons";

const Contact = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff", // PURE black/white
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Left Info */}
          <div className="col-lg-5">
            <h2 className={`fw-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}>
              Get in Touch
            </h2>

            <p
              className="mb-4"
              style={{
                color: isDark ? "#bfbfbf" : "#6c757d",
              }}
            >
              Have a travel plan? Reach out and we’ll help you with availability, 
              route suggestions and the best quotation.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <TelephoneFill
                  size={20}
                  className={isDark ? "me-3 text-light" : "me-3 text-primary"}
                />
                <a
                  href="tel:8999758984"
                  className={`text-decoration-none ${
                    isDark ? "text-white" : "text-dark"
                  }`}
                >
                  +91 89997 58984
                </a>
              </li>

              <li className="d-flex align-items-center mb-3">
                <EnvelopeFill
                  size={20}
                  className={isDark ? "me-3 text-light" : "me-3 text-primary"}
                />
                <a
                  href="mailto:info@dwarkamaitours.com"
                  className={`text-decoration-none ${
                    isDark ? "text-white" : "text-dark"
                  }`}
                >
                  info@dwarkamaitours.com
                </a>
              </li>

              <li className="d-flex align-items-start">
                <GeoAltFill
                  size={20}
                  className={isDark ? "me-3 text-light" : "me-3 text-primary"}
                />
                <span className={isDark ? "text-white-50" : "text-dark"}>
                  Vasai, Mumbai, Maharashtra
                </span>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="col-lg-7">
            <form
              className="card shadow-sm border-0"
              style={{
                backgroundColor: isDark ? "#000000" : "#ffffff", // kill grey card bg
                color: isDark ? "#ffffff" : "#000000",
                borderRadius: "14px",
                border: isDark ? "1px solid #333" : "1px solid #e5e5e5",
              }}
            >
              <div className="card-body p-4">
                <h5 className="fw-semibold mb-3">Send us an Enquiry</h5>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                        required
                        style={{
                          backgroundColor: isDark ? "#111111" : "#ffffff",
                          color: isDark ? "#ffffff" : "#000000",
                          borderColor: isDark ? "#444444" : "#ced4da",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-2">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        required
                        style={{
                          backgroundColor: isDark ? "#111111" : "#ffffff",
                          color: isDark ? "#ffffff" : "#000000",
                          borderColor: isDark ? "#444444" : "#ced4da",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 mt-1">
                  <label className="form-label">Travel Details</label>
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Pickup location, date, destination, number of passengers..."
                    required
                    style={{
                      backgroundColor: isDark ? "#111111" : "#ffffff",
                      color: isDark ? "#ffffff" : "#000000",
                      borderColor: isDark ? "#444444" : "#ced4da",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-100 rounded-pill fw-semibold py-2"
                  style={{
                    backgroundColor: isDark ? "#ffffff" : "#000000",
                    color: isDark ? "#000000" : "#ffffff",
                  }}
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
