import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Import Local Bus Images
import bus1 from "../assets/bus1.jpg";
import bus2 from "../assets/bus2.jpg";
import bus3 from "../assets/bus3.jpg";

const slides = [
  {
    title: "Shirdi & Shani Shingnapur",
    subtitle: "Day & overnight pilgrim circuits with experienced drivers.",
    img: bus1,
  },
  {
    title: "Corporate Offsites",
    subtitle: "Comfortable 32 & 44 seater coaches for team outings.",
    img: bus2,
  },
  {
    title: "Family Weddings & Functions",
    subtitle: "Clean, on-time buses for guests and family members.",
    img: bus3,
  },
];

const Hero = ({ theme }) => {
  const heroRef = useRef(null);
  const isDark = theme === "dark";
  const [slideIndex, setSlideIndex] = useState(0);

  // Initial GSAP entrance
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

  // Auto change slide every 3.5s
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // Animate slide transition
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-slide-img", {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.from(".hero-slide-meta", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [slideIndex]);

  const currentSlide = slides[slideIndex];

  return (
    <section
      ref={heroRef}
      className="py-5"
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7 hero-left">
            <span
              className="badge rounded-pill mb-3"
              style={{
                backgroundColor: isDark ? "#111111" : "#ffffff",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "1px solid #e5e7eb",
                color: isDark ? "#e5e7eb" : "#4b5563",
                fontSize: "0.75rem",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Premium Bus & Coach Rentals
            </span>

            <h1
              className="fw-bold display-5 mb-3"
              style={{ color: isDark ? "#ffffff" : "#000000" }}
            >
              Dwarkamai Tours &amp; Travels
            </h1>

            <p
              className="lead mb-4"
              style={{ color: isDark ? "#bfbfbf" : "#4b5563" }}
            >
              Comfortable, reliable and affordable buses for pilgrim, family and
              corporate journeys.
            </p>

            {/* CTA */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a
                href="#services"
                className={`btn rounded-pill px-4 py-2 fw-semibold 
                  ${isDark ? "btn-light text-dark" : "btn-dark"}`}
              >
                View Services
              </a>

              <a
                href="#contact"
                className={`btn rounded-pill px-4 py-2 
                  ${isDark ? "btn-outline-light" : "btn-outline-dark"}`}
              >
                Talk to Us
              </a>
            </div>

            {/* Stats */}
            <div className="row g-3">
              <div className="col-4 hero-stat">
                <h4 className="fw-bold" style={{ color: isDark ? "#fff" : "#000" }}>10+</h4>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>Years of service</small>
              </div>
              <div className="col-4 hero-stat">
                <h4 className="fw-bold" style={{ color: isDark ? "#fff" : "#000" }}>20–44</h4>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>Seater coaches</small>
              </div>
              <div className="col-4 hero-stat">
                <h4 className="fw-bold" style={{ color: isDark ? "#fff" : "#000" }}>24×7</h4>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>Support</small>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="col-lg-5 hero-right">
            <div
              className="card border-0 shadow-sm"
              style={{
                backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
                borderRadius: "14px",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.2)"
                  : "1px solid #e5e5e5",
              }}
            >
              <div className="card-body p-2">
                <img
                  src={currentSlide.img}
                  alt={currentSlide.title}
                  className="img-fluid rounded hero-slide-img"
                  style={{
                    maxHeight: "360px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>

              <div className="card-footer border-0 bg-transparent px-3 pb-3 hero-slide-meta">
                <h6 className="mb-1 fw-semibold">{currentSlide.title}</h6>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>
                  {currentSlide.subtitle}
                </small>

                {/* Slider Dots */}
                <div className="d-flex gap-2 mt-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className="btn p-0 border-0"
                      style={{
                        width: i === slideIndex ? 18 : 10,
                        height: 10,
                        borderRadius: 999,
                        backgroundColor:
                          i === slideIndex
                            ? isDark
                              ? "#ffffff"
                              : "#000000"
                            : isDark
                            ? "#4b5563"
                            : "#cbd5e1",
                        transition: "0.2s",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
