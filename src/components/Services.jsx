// src/components/Services.jsx
import React, { useEffect, useRef } from "react";
import { Briefcase, PeopleFill, Compass } from "react-bootstrap-icons";
import { gsap } from "gsap";

const SERVICES = [
  {
    id: "pilgrim",
    title: "Pilgrim Tours",
    text:
      "Shirdi, Shani Shingnapur, Trimbakeshwar and curated one-day & multi-day pilgrim packages with experienced drivers.",
    icon: <Compass size={26} />,
  },
  {
    id: "corporate",
    title: "Corporate & Events",
    text:
      "Reliable transport for corporate trips, team outings and events — punctual, professional and customer-focused.",
    icon: <Briefcase size={26} />,
  },
  {
    id: "family",
    title: "Family Functions",
    text:
      "Weddings, celebrations and school trips — flexible coaches and friendly staff to handle group logistics.",
    icon: <PeopleFill size={26} />,
  },
];

export default function Services({ theme = "light" }) {
  const isDark = theme === "dark";
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");
      gsap.from(rootRef.current.querySelector(".services-head"), { y: -8, opacity: 0, duration: 0.45, ease: "power3.out" });
      gsap.from(cards, {
        y: 18,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // color tokens — adjust for your design system if needed
  const bg = isDark ? "#040506" : "#f8fafc";
  const cardBg = isDark ? "linear-gradient(180deg,#071018,#051015)" : "#fff";
  const muted = isDark ? "#9fb4c2" : "#6c757d";
  const heading = isDark ? "#f8fbff" : "#0b1220";
  const accent = isDark ? "#06b6d4" : "#0b1220";

  return (
    <section
      id="services"
      ref={rootRef}
      className="py-5"
      style={{ backgroundColor: bg, color: isDark ? "#e6eef8" : "#111827" }}
      aria-label="Our Services"
    >
      <div className="container">
        <div className="text-center services-head mb-4">
          <h2 className="fw-bold mb-1" style={{ color: heading, letterSpacing: 0.2 }}>
            Our Services
          </h2>
          <p className="mb-0" style={{ color: muted, maxWidth: 760, margin: "8px auto 0" }}>
            Dwarkamai Tours &amp; Travels — safe, comfortable and well-organized travel across Maharashtra for families, groups and businesses.
          </p>
        </div>

        <div className="row gy-4">
          {SERVICES.map((s) => (
            <div key={s.id} className="col-12 col-md-6 col-lg-4">
              <article
                className="service-card h-100 d-flex flex-column"
                role="article"
                aria-labelledby={`svc-${s.id}-title`}
                tabIndex={0}
                style={{
                  background: cardBg,
                  borderRadius: 14,
                  padding: "28px 22px",
                  border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                  boxShadow: isDark ? "0 10px 30px rgba(2,6,23,0.18)" : "0 8px 20px rgba(2,6,23,0.06)",
                  transition: "transform .22s ease, box-shadow .22s ease",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = isDark ? "0 18px 50px rgba(6,182,212,0.06)" : "0 18px 50px rgba(2,6,23,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = isDark ? "0 10px 30px rgba(2,6,23,0.12)" : "0 8px 20px rgba(2,6,23,0.06)";
                }}
                onFocus={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = isDark ? "0 18px 50px rgba(6,182,212,0.06)" : "0 18px 50px rgba(2,6,23,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = isDark ? "0 10px 30px rgba(2,6,23,0.12)" : "0 8px 20px rgba(2,6,23,0.06)";
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    aria-hidden
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      display: "inline-grid",
                      placeItems: "center",
                      marginRight: 14,
                      background: isDark ? "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))" : "rgba(13,110,253,0.06)",
                      color: isDark ? accent : "#0b1220",
                      boxShadow: isDark ? "inset 0 1px 0 rgba(255,255,255,0.02)" : "none",
                    }}
                  >
                    {s.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 id={`svc-${s.id}-title`} className="h6 mb-0 fw-bold" style={{ color: heading }}>
                      {s.title}
                    </h3>
                    <div style={{ color: muted, fontSize: 13, marginTop: 6 }}>{s.text}</div>
                  </div>
                </div>

                {/* CTA area aligned bottom */}
                <div className="mt-auto d-flex gap-2 align-items-center">
                  <a
                    href="#contact"
                    className="btn btn-sm rounded-pill"
                    style={{
                      background: isDark ? accent : "#0b1220",
                      color: "#fff",
                      padding: "8px 14px",
                      boxShadow: isDark ? "0 8px 30px rgba(6,182,212,0.06)" : undefined,
                      border: "none",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                    aria-label={`Enquire about ${s.title}`}
                  >
                    Enquire
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* mobile tweaks */
        @media (max-width: 768px) {
          .service-card { padding: 20px; border-radius: 12px; }
        }

        /* ensure icons remain visible */
        .service-card svg { display: block; }

        /* make anchor look accessible on keyboard focus */
        .service-card a:focus, .service-card button:focus {
          outline: 3px solid rgba(6,182,212,0.12);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
