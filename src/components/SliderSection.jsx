// src/components/SliderSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SLIDES = [
  {
    title: "Shirdi Darshan Packages",
    subtitle: "Comfortable pilgrim circuits with experienced drivers and on-time service.",
  },
  {
    title: "Mumbai – Pune Weekend Trips",
    subtitle: "Weekend escapes with comfortable coaches and flexible itineraries.",
  },
  {
    title: "Corporate Group Bookings",
    subtitle: "Professional transport for team offsites and events — punctual & reliable.",
  },
  {
    title: "Family Functions & Weddings",
    subtitle: "Hassle-free guest transport for weddings, family events and school trips.",
  },
];

export default function SliderSection({ theme = "light" }) {
  const isDark = theme === "dark";
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const cardRef = useRef(null);
  const announceRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-advance interval
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  // GSAP entrance on mount and transition on index change
  useEffect(() => {
    const ctx = gsap.context(() => {
      // entrance animation once
      gsap.from(cardRef.current, { y: 12, opacity: 0, duration: 0.6, ease: "power3.out" });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // subtle animate for slide text when index changes
    const qs = cardRef.current?.querySelectorAll(".slide-anim");
    if (!qs) return;
    gsap.fromTo(
      qs,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power3.out" }
    );

    // announce to screen readers
    if (announceRef.current) {
      announceRef.current.textContent = `${SLIDES[index].title} — ${SLIDES[index].subtitle}`;
    }
  }, [index]);

  // keyboard left/right
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (i) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  };
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // touch handlers for simple swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    setIsPaused(true);
  };
  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (touchStartX.current != null && endX != null) {
      const dx = endX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx > 0) prev(); else next();
      }
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 500);
  };

  // colors
  const bg = isDark ? "#061018" : "#ffffff";
  const cardBg = isDark ? "#07181d" : "#ffffff";
  const text = isDark ? "#e6eef8" : "#0b1220";
  const muted = isDark ? "#9fb4c2" : "#6b7280";
  const accent = isDark ? "#06b6d4" : "#0b1220";

  return (
    <section className="py-4" aria-label="Popular Tours and Services">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h3 style={{ margin: 0, color: text, fontSize: 20, fontWeight: 700 }}>Popular Tours &amp; Services</h3>
            <small style={{ color: muted, letterSpacing: ".06em", textTransform: "uppercase" }}>Handpicked for you</small>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <button
              aria-label="Previous slide"
              onClick={() => { prev(); setIsPaused(true); setTimeout(() => setIsPaused(false), 700); }}
              className="btn btn-sm"
              style={{
                background: isDark ? "transparent" : "#f1f5f9",
                border: "1px solid rgba(0,0,0,0.06)",
                color: text,
                padding: "6px 10px",
                borderRadius: 8,
              }}
            >
              ‹ Prev
            </button>

            <button
              aria-label="Next slide"
              onClick={() => { next(); setIsPaused(true); setTimeout(() => setIsPaused(false), 700); }}
              className="btn btn-sm"
              style={{
                background: isDark ? accent : "#0b1220",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 8,
                border: "none",
              }}
            >
              Next ›
            </button>
          </div>
        </div>

        <div
          ref={cardRef}
          className="card border-0 shadow-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            borderRadius: 14,
            background: cardBg,
            color: text,
            padding: "26px",
            overflow: "hidden",
            boxShadow: isDark ? "0 10px 40px rgba(2,6,23,0.45)" : "0 8px 24px rgba(2,6,23,0.06)",
          }}
        >
          <div className="d-flex flex-column flex-md-row align-items-center gap-3">
            {/* left: badge */}
            <div style={{ minWidth: 120, textAlign: "center" }}>
              <span
                className="badge rounded-pill px-3 py-2"
                style={{
                  background: isDark ? "#08323a" : "#0b1220",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                Featured
              </span>
            </div>

            {/* middle: slide content */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <h4
                className="mb-2 slide-anim"
                style={{
                  margin: 0,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  color: text,
                }}
              >
                {SLIDES[index].title}
              </h4>

              <p
                className="mb-0 slide-anim"
                style={{ color: muted, fontSize: "0.95rem", maxWidth: 820, margin: "8px auto 0" }}
              >
                {SLIDES[index].subtitle}
              </p>
            </div>

            {/* right: CTA on large screens */}
            <div style={{ minWidth: 220, textAlign: "center" }}>
              <a
                href="#contact"
                className="btn rounded-pill"
                style={{
                  background: isDark ? accent : "#0b1220",
                  color: "#fff",
                  padding: "10px 18px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
                onClick={() => setIsPaused(true)}
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* indicators - centered below card content */}
          <div className="d-flex justify-content-center gap-2 mt-4" role="tablist" aria-label="Slide indicators">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${SLIDES[i].title}`}
                onClick={() => { go(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 900); }}
                className="btn p-0 border-0"
                style={{
                  width: i === index ? 26 : 10,
                  height: 10,
                  borderRadius: 999,
                  background: i === index ? (isDark ? "#ffffff" : "#0b1220") : (isDark ? "#2b3338" : "#e6e6e6"),
                  transition: "width .25s ease, background .25s ease",
                }}
              />
            ))}
          </div>

          {/* live region for screen readers */}
          <div ref={announceRef} aria-live="polite" style={{ position: "absolute", left: -9999, top: "auto", height: 1, width: 1, overflow: "hidden" }} />
        </div>
      </div>

      {/* small responsive tweaks */}
      <style>{`
        @media (max-width: 767px) {
          .card { padding: 18px !important; }
          .btn-sm { padding: 6px 8px !important; }
        }
      `}</style>
    </section>
  );
}
