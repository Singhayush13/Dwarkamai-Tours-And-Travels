import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = ({ theme }) => {
  const heroRef = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-left", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-right", {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".hero-stat", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="py-5"
      style={{
        background: isDark ? "#050505" : "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-7 hero-left">
            <span
              className="badge rounded-pill mb-3"
              style={{
                backgroundColor: isDark ? "#111" : "#fff",
                border: "1px solid rgba(0,0,0,.1)",
                color: isDark ? "#e5e5e5" : "#555",
              }}
            >
              Premium Bus &amp; Coach Rentals
            </span>

            <h1 className="fw-bold display-5 mb-3">
              Dwarkamai Tours &amp; Travels
            </h1>

            <p className="lead mb-4 text-muted">
              Comfortable, reliable and affordable buses for pilgrim, family and
              corporate journeys. Dedicated routes for Shirdi, Nashik, Mumbai,
              Pune and across Maharashtra with experienced drivers.
            </p>

            {/* CTA buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a
                href="#services"
                className="btn px-4 py-2 fw-semibold rounded-pill"
                style={{
                  backgroundColor: isDark ? "#ffffff" : "#000000",
                  color: isDark ? "#000" : "#fff",
                  border: "none",
                  transition: "0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0px)")
                }
              >
                View Services
              </a>

              <a
                href="#contact"
                className="btn rounded-pill px-4 py-2"
                style={{
                  border: "1px solid rgba(0,0,0,.2)",
                  backgroundColor: isDark ? "transparent" : "#ffffff",
                  color: isDark ? "#f1f1f1" : "#000000",
                  transition: "0.25s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = isDark ? "#111" : "#f1f1f1";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = isDark
                    ? "transparent"
                    : "#ffffff";
                }}
              >
                Talk to Us
              </a>
            </div>

            {/* Stats */}
            <div className="row g-3">
              <div className="col-4 hero-stat">
                <h4 className="fw-bold mb-0">10+</h4>
                <small className="text-muted">Years of service</small>
              </div>
              <div className="col-4 hero-stat">
                <h4 className="fw-bold mb-0">20–44</h4>
                <small className="text-muted">Seater coaches</small>
              </div>
              <div className="col-4 hero-stat">
                <h4 className="fw-bold mb-0">24×7</h4>
                <small className="text-muted">Support &amp; bookings</small>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-5 hero-right">
            <div
              className="card border-0 shadow-sm"
              style={{
                backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
              }}
            >
              <div className="card-body p-2">
                <img
                  src="https://images.pexels.com/photos/1616373/pexels-photo-1616373.jpeg"
                  alt="Tour Bus"
                  className="img-fluid rounded"
                  style={{
                    maxHeight: 360,
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <div className="card-footer bg-transparent border-0 px-3 pb-3">
                <small className="text-muted">
                  Modern fleet, verified drivers and well-planned routes for
                  safe and hassle-free travel.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
