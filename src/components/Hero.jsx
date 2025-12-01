// src/components/HeroBootstrap.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Local images (keep these paths or replace with your own assets)
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

// Helper: split heading into characters for lettering effect
const splitToLetters = (text) => text.split("").map((c, i) => ({ c, key: `${c}-${i}` }));

export default function HeroBootstrap({ theme = "light" }) {
  const isDark = theme === "dark";
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Basic theme colors (inline style approach)
  const styles = {
    sectionBg: isDark ? "#0b0b0b" : "#ffffff",
    textPrimary: isDark ? "#ffffff" : "#111827",
    muted: isDark ? "#99a0a6" : "#6c757d",
    cardBg: isDark ? "#111316" : "#ffffff",
    cardBorder: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid #e9ecef",
    badgeBg: isDark ? "#111316" : "#ffffff",
  };

  // Auto-rotate slides (pause on hover/focus)
  useEffect(() => {
    if (isPaused) return undefined;
    const id = setInterval(() => setSlideIndex((s) => (s + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [isPaused]);

  // Intro animations and lettering effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Left column intro
      tl.from(
        ".hero-left",
        {
          x: -40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        0
      );

      // Right column intro
      tl.from(
        ".hero-right",
        {
          x: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        0.12
      );

      // Stats pop
      tl.from(
        ".hero-stat",
        {
          y: 18,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.3
      );

      // Lettering effect for heading
      const letters = headingRef.current?.querySelectorAll(".letter");
      if (letters && letters.length) {
        tl.fromTo(
          letters,
          { y: 24, opacity: 0, rotate: -6 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            stagger: 0.03,
            ease: "power3.out",
          },
          0.45
        );

        // small glow pulse after letters arrive
        tl.to(letters, {
          textShadow: isDark ? "0 0 18px rgba(255,255,255,0.06)" : "0 0 12px rgba(0,0,0,0.03)",
          duration: 0.6,
          repeat: 0,
        });
      }
    }, heroRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Slide transition animation when slideIndex changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-slide-img",
        { opacity: 0, scale: 0.96, filter: "blur(6px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-slide-meta",
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [slideIndex]);

  const currentSlide = slides[slideIndex];
  const heading = "Dwarkamai Tours & Travels";
  const letters = splitToLetters(heading);

  return (
    <section
      ref={heroRef}
      aria-label="Hero - Dwarkamai Tours and Travels"
      style={{ background: styles.sectionBg, color: styles.textPrimary, padding: "3rem 1rem" }}
    >
      <div className="container">
        <div className="row align-items-center gx-5">

          {/* LEFT */}
          <div className="col-12 col-lg-7 hero-left mb-4 mb-lg-0">
            <span
              className="badge rounded-pill mb-3"
              style={{
                background: styles.badgeBg,
                border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid #e9ecef",
                color: styles.muted,
                padding: "0.5rem 0.85rem",
                fontSize: ".75rem",
                letterSpacing: ".06em",
                textTransform: "uppercase",
              }}
            >
              Premium Bus &amp; Coach Rentals
            </span>

            {/* Heading with lettering */}
            <h1
              ref={headingRef}
              className="fw-bold display-6 mb-3"
              style={{ fontSize: "2.25rem", lineHeight: 1.05, marginBottom: "1rem" }}
            >
              {letters.map((l) => (
                <span
                  key={l.key}
                  aria-hidden={l.c === " "}
                  className={`letter`}
                  style={{ display: l.c === " " ? "inline-block" : "inline-block" }}
                >
                  {l.c}
                </span>
              ))}
            </h1>

            <p className="lead mb-4" style={{ color: isDark ? "#d1d5db" : "#6c757d", maxWidth: "56ch" }}>
              Comfortable, reliable and affordable buses for pilgrim, family and corporate journeys. We operate modern coaches with trained drivers and 24/7
              support so your travel is smooth and stress-free.
            </p>

            {/* CTA */}
            <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
              <a
                href="#services"
                className={`btn btn-${isDark ? "light" : "dark"} rounded-pill px-4 py-2 fw-semibold`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                View Services
              </a>

              <a
                href="#contact"
                className={`btn btn-outline-${isDark ? "light" : "dark"} rounded-pill px-4 py-2`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                Talk to Us
              </a>

              <small className="ms-3" style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>
                Call/WhatsApp available 24×7
              </small>
            </div>

            {/* Stats */}
            <div className="row gx-3 gy-3" style={{ maxWidth: "520px" }}>
              <div className="col-4 hero-stat">
                <h4 className="h5 fw-bold" style={{ marginBottom: ".25rem" }}>10+</h4>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>Years of service</small>
              </div>

              <div className="col-4 hero-stat">
                <h4 className="h5 fw-bold" style={{ marginBottom: ".25rem" }}>20–44</h4>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>Seater coaches</small>
              </div>

              <div className="col-4 hero-stat">
                <h4 className="h5 fw-bold" style={{ marginBottom: ".25rem" }}>24×7</h4>
                <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>Support</small>
              </div>
            </div>
          </div>

          {/* RIGHT - Slider Card */}
          <div className="col-12 col-lg-5 hero-right">
            <div
              className="card shadow-sm overflow-hidden"
              style={{
                borderRadius: "14px",
                background: styles.cardBg,
                border: styles.cardBorder,
                transition: "transform .2s ease",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="ratio ratio-16x9">
                <img
                  src={currentSlide.img}
                  alt={currentSlide.title}
                  className="hero-slide-img img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div className="card-body py-3 px-3 hero-slide-meta" style={{ background: "transparent" }}>
                <h6 className="mb-1 fw-semibold" style={{ color: isDark ? "#e6eef8" : "#111827" }}>{currentSlide.title}</h6>
                <p className="mb-2 small" style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>{currentSlide.subtitle}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2 align-items-center">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setSlideIndex(i)}
                        className="btn p-0"
                        style={{
                          width: i === slideIndex ? 24 : 10,
                          height: 10,
                          borderRadius: 999,
                          backgroundColor: i === slideIndex ? (isDark ? "#fff" : "#111827") : (isDark ? "#475569" : "#cbd5e1"),
                          border: "none",
                          transition: "width .18s ease, background-color .18s ease",
                        }}
                      />
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      aria-label="Previous slide"
                      onClick={() => setSlideIndex((s) => (s - 1 + slides.length) % slides.length)}
                      className={`btn btn-sm ${isDark ? "btn-secondary" : "btn-light"}`}
                    >
                      Prev
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={() => setSlideIndex((s) => (s + 1) % slides.length)}
                      className={`btn btn-sm ${isDark ? "btn-secondary" : "btn-light"}`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Local styles for small CSS utilities */}
      <style>{`
        /* smooth image hover scale */
        .hero-slide-img { transition: transform .45s cubic-bezier(.22,.9,.35,1); }
        .hero-right:hover .hero-slide-img { transform: scale(1.03); }

        /* lettering baseline (GSAP will animate opacity/position) */
        .letter { display: inline-block; white-space: pre; }

        /* improve button focus for accessibility */
        .btn:focus { box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.15) !important; outline: none !important; }
      `}</style>
    </section>
  );
}
