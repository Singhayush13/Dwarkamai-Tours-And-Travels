// src/components/BusesSlider.jsx
import React, { useEffect, useRef, useState } from "react";

// IMPORT YOUR LOCAL ASSETS (place files in src/assets/)
import img44 from "../assets/44seat.jpg";
import img32 from "../assets/32seat.jpg";
import img20 from "../assets/20seat.jpg";

/**
 * BusesSlider
 * Props:
 *  - theme: "light" | "dark"
 *  - data (optional): array of buses [{ name, ac, img }]
 *
 * If you store images in src/assets, import them and pass in `data` or
 * replace the default `BUSES` items' img fields with the imported variables.
 */

const BUSES_DEFAULT = [
  { name: "20 Seater Mini Bus", ac: "Non AC", img: img20 },
  { name: "32 Seater Bus", ac: "Non AC", img: img32 },
  { name: "44 Seater Bus", ac: "Non AC", img: img44 },
  // add more buses as needed
];

export default function BusesSlider({ theme = "light", data = BUSES_DEFAULT }) {
  const isDark = theme === "dark";
  const cardsToShowRef = useRef(3); // number of cards visible (updates on resize)
  const [index, setIndex] = useState(0); // 0-based index of first visible slide
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const autoRef = useRef(null);

  // compute visible count based on width (1,2,3)
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      const show = w < 680 ? 1 : w < 992 ? 2 : 3;
      cardsToShowRef.current = show;
      // ensure index within bounds
      setIndex((i) => Math.min(i, Math.max(0, data.length - show)));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [data.length]);

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = setInterval(() => {
      setIndex((i) => {
        const maxStart = Math.max(0, data.length - cardsToShowRef.current);
        return i >= maxStart ? 0 : i + 1;
      });
    }, 3500);
    return () => clearInterval(autoRef.current);
  }, [isPaused, data.length]);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // animate track (uses rAF for smoothness)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = cardsToShowRef.current;
    const slideWidth = 100 / cards; // percent per card visible
    const x = -(index * slideWidth);
    // use CSS transform; set will-change for smoother animation
    track.style.willChange = "transform";
    track.style.transition = "transform 420ms cubic-bezier(.22,.9,.35,1)";
    track.style.transform = `translate3d(${x}%, 0, 0)`;
  }, [index]);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
    setIsPaused(true);
    clearTimeout(autoRef.current);
    setTimeout(() => setIsPaused(false), 1200);
  };

  const next = () => {
    setIndex((i) => {
      const maxStart = Math.max(0, data.length - cardsToShowRef.current);
      return i >= maxStart ? 0 : i + 1;
    });
    setIsPaused(true);
    clearTimeout(autoRef.current);
    setTimeout(() => setIsPaused(false), 1200);
  };

  // touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    setIsPaused(true);
  };
  const onTouchEnd = (e) => {
    const x = e.changedTouches?.[0]?.clientX ?? null;
    if (touchStartX.current != null && x != null) {
      const dx = x - touchStartX.current;
      if (Math.abs(dx) > 40) {
        dx > 0 ? prev() : next();
      }
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 500);
  };

  // helper: format card width (%)
  const colStyle = () => {
    const visible = cardsToShowRef.current || 3;
    return { flex: `0 0 ${100 / visible}%`, maxWidth: `${100 / visible}%` };
  };

  const containerBg = isDark ? "#07080a" : "#f7f9fb";
  const cardBg = isDark ? "linear-gradient(180deg,#071018,#041016)" : "#fff";
  const text = isDark ? "#e6eef8" : "#111827";
  const muted = isDark ? "#9fb4c2" : "#6c757d";
  const border = isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(2,6,23,0.06)";

  return (
    <section id="buses" className="py-5" style={{ background: containerBg }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 style={{ margin: 0, color: text }} className="fw-bold">Buses We Provide</h2>
            <div style={{ color: muted, maxWidth: 680 }}>Choose from our comfortable and well-maintained fleet suitable for family, group and corporate travel.</div>
          </div>

          <div className="d-flex gap-2">
            <button
              aria-label="Previous buses"
              onClick={prev}
              className="btn btn-sm"
              style={{
                border: border,
                background: isDark ? "transparent" : "#fff",
                color: text,
                boxShadow: "none",
                padding: "6px 10px",
                borderRadius: 8,
              }}
            >
              ‹ Prev
            </button>

            <button
              aria-label="Next buses"
              onClick={next}
              className="btn btn-sm"
              style={{
                border: "none",
                background: isDark ? "#06b6d4" : "#0b1220",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              Next ›
            </button>
          </div>
        </div>

        {/* slider viewport */}
        <div
          ref={containerRef}
          className="position-relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            overflow: "hidden",
            borderRadius: 14,
            padding: 8,
          }}
        >
          {/* track */}
          <div
            ref={trackRef}
            className="d-flex"
            style={{
              gap: 16,
              padding: 8,
            }}
          >
            {data.map((bus, i) => (
              <div
                key={i}
                className="bus-card"
                style={{
                  ...colStyle(),
                  boxSizing: "border-box",
                  display: "flex",
                }}
              >
                <article
                  className="card h-100"
                  tabIndex={0}
                  aria-label={`${bus.name} — ${bus.ac}`}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: cardBg,
                    border: border,
                    color: text,
                    boxShadow: isDark ? "0 8px 30px rgba(2,6,23,0.16)" : "0 8px 20px rgba(2,6,23,0.06)",
                    transition: "transform .22s ease, box-shadow .22s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = isDark ? "0 20px 60px rgba(6,182,212,0.06)" : "0 20px 60px rgba(2,6,23,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = isDark ? "0 8px 30px rgba(2,6,23,0.12)" : "0 8px 20px rgba(2,6,23,0.06)";
                  }}
                >
                  {/* image area */}
                  <div style={{ height: 180, background: isDark ? "#0b0b0b" : "#f2f4f7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {bus.img ? (
                      <img src={bus.img} alt={bus.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ textAlign: "center", color: muted }}>
                        <svg width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <rect width="64" height="44" rx="6" fill={isDark ? "#071018" : "#e9eef6"} />
                          <path d="M8 30h12" stroke={isDark ? "#21323a" : "#c7d2e6"} strokeWidth="2" strokeLinecap="round" />
                          <circle cx="20" cy="34" r="3" fill={isDark ? "#21323a" : "#c7d2e6"} />
                        </svg>
                        <div style={{ marginTop: 10, fontStyle: "italic" }}>(Image coming soon)</div>
                      </div>
                    )}
                  </div>

                  {/* info */}
                  <div style={{ padding: 16, flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <h5 style={{ margin: 0, fontSize: 16 }}>{bus.name}</h5>
                      <div style={{ color: muted, marginTop: 6 }}>{bus.ac}</div>
                    </div>

                    <div className="d-flex gap-2 mt-3">
                      <a
                        href="#contact"
                        className="btn"
                        style={{
                          background: isDark ? "#06b6d4" : "#0b1220",
                          color: "#fff",
                          padding: "8px 12px",
                          borderRadius: 999,
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                        onClick={() => setIsPaused(true)}
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* indicators */}
          <div style={{ marginTop: 14, display: "flex", justifyContent: "center", gap: 8 }}>
            {Array.from({ length: Math.max(1, data.length - (cardsToShowRef.current - 1)) }).map((_, i) => (
              <button
                key={i}
                aria-label={`Show set ${i + 1}`}
                onClick={() => { setIndex(i); setIsPaused(true); setTimeout(() => setIsPaused(false), 900); }}
                style={{
                  width: index === i ? 26 : 10,
                  height: 10,
                  borderRadius: 999,
                  background: index === i ? (isDark ? "#ffffff" : "#111827") : (isDark ? "#2b3338" : "#e6e6e6"),
                  border: "none",
                  transition: "width .22s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* component styles */}
      <style>{`
        @media (max-width: 992px) {
          .bus-card { min-width: 50% !important; } /* ensure two per view roughly */
        }
        @media (max-width: 680px) {
          .bus-card { min-width: 100% !important; } /* single per view */
        }
        /* small accessibility improvement */
        .card:focus { outline: 3px solid rgba(6,182,212,0.08); outline-offset: 2px; }
      `}</style>
    </section>
  );
}
