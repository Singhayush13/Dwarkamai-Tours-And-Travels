// src/components/EstimateEnhanced.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * EstimateEnhanced (dark-mode fixes)
 *
 * Notes:
 *  - Install: npm i gsap bootstrap
 *  - Import bootstrap css once in your app: import 'bootstrap/dist/css/bootstrap.min.css';
 */

const RATES = { "20": 24, "32": 35, "44": 45 };
const DA_PER_DAY = 2000;

export default function EstimateEnhanced({ theme = "light" }) {
  const isDark = theme === "dark";

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [distance, setDistance] = useState("");
  const [busType, setBusType] = useState("20");
  const [days, setDays] = useState("1");
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const formRef = useRef(null);
  const cardRef = useRef(null);
  const breakdownRef = useRef(null);

  const phoneNumber = "tel:+918999785954";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".estimate-left", { x: -28, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".estimate-right", { x: 28, opacity: 0, duration: 0.8, ease: "power3.out" });
    }, formRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const btn = cardRef.current?.querySelector("button[type='submit']");
    if (!btn) return;
    let t;
    const enter = () =>
      (t = gsap.to(btn, {
        scale: 1.03,
        boxShadow: isDark ? "0 18px 50px rgba(6,182,212,0.07)" : "0 14px 40px rgba(2,6,23,0.12)",
        duration: 0.16,
      }));
    const leave = () => t && t.reverse();
    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);
    btn.addEventListener("focus", enter);
    btn.addEventListener("blur", leave);
    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
      btn.removeEventListener("focus", enter);
      btn.removeEventListener("blur", leave);
    };
  }, [cardRef, isDark]);

  const validateAndParse = () => {
    setError(null);
    if (!from.trim()) return { ok: false, message: "Please enter pickup location (From)." };
    if (!to.trim()) return { ok: false, message: "Please enter destination (To)." };

    const km = Number(distance);
    if (!distance || Number.isNaN(km) || km <= 0) return { ok: false, message: "Please enter a valid distance (km)." };

    const d = parseInt(days === "" ? "0" : days, 10);
    if (Number.isNaN(d) || d <= 0) return { ok: false, message: "Please enter number of whole days (minimum 1)." };

    if (!["20", "32", "44"].includes(busType)) return { ok: false, message: "Please select bus type." };

    return { ok: true, km, d };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(null);
    setError(null);

    const parsed = validateAndParse();
    if (!parsed.ok) {
      setError(parsed.message);
      return;
    }

    setSubmitting(true);

    const { km, d } = parsed;
    let billableKm = km;
    if (d > 1) {
      const minExpected = 300 * d;
      if (billableKm < minExpected) billableKm = minExpected;
    }

    if (km >= 300 || d > 1) {
      const rate = RATES[busType];
      const baseCost = Math.round(billableKm * rate);
      const daTotal = DA_PER_DAY * d;
      const total = baseCost + daTotal;

      setResult({
        appliesRate: true,
        userDistance: km,
        days: d,
        busType,
        rate,
        billableKm,
        baseCost,
        daTotal,
        total,
        message: d > 1 ? `Multi-day booking: minimum ${300} km/day enforced for billing where necessary.` : `Per-km rate applied at ₹${rate}/km.`,
      });

      setTimeout(() => {
        try {
          gsap.fromTo(breakdownRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" });
        } catch (err) {}
      }, 80);
    } else {
      const daTotal = DA_PER_DAY * d;
      setResult({
        appliesRate: false,
        userDistance: km,
        days: d,
        busType,
        rate: RATES[busType],
        billableKm: Math.max(km, 300 * d),
        baseCost: null,
        daTotal,
        total: null,
        message: `Per-km rates apply for trips ≥ 300 km or multi-day bookings. Please call us for a custom quote.`,
      });
      setTimeout(() => {
        try {
          gsap.fromTo(breakdownRef.current, { opacity: 0, scale: 0.99 }, { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" });
        } catch (err) {}
      }, 80);
    }

    setSubmitting(false);
  };

  const fmt = (n) => (n == null ? "-" : `₹${Number(n).toLocaleString("en-IN")}`);
  const busLabel = busType === "20" ? "20 Seater Mini Bus (Non AC)" : busType === "32" ? "32 Seater Bus (Non AC)" : "44 Seater Bus (Non AC)";

  return (
    <section
      className="py-5"
      aria-label="Estimate trip cost"
      style={{
        backgroundColor: isDark ? "#071019" : "#f7f8fb",
        color: isDark ? "#e6eef8" : "#111827",
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* LEFT: form */}
          <div className="col-12 col-lg-7 estimate-left" ref={formRef}>
            <div className="d-flex align-items-start gap-3 mb-3">
              <div
                className="badge rounded-pill px-3 py-1"
                style={{
                  background: isDark ? "linear-gradient(90deg,#06252b,#08303a)" : "#e9eefb",
                  color: isDark ? "#aeeff6" : "#0b4",
                }}
              >
                Estimate
              </div>

              <div>
                <h2 className="h4 mb-1 fw-bold" style={{ margin: 0, color: isDark ? "#f8fbff" : "#0b1220" }}>
                  Get an Approx Cost
                </h2>
                <div className="small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
                  All fields required. Multi-day trips enforce a minimum of 300 km/day for billing.
                </div>
              </div>
            </div>

            <form
              ref={cardRef}
              className={`card border-0 ${isDark ? "dark-card" : ""}`}
              onSubmit={handleSubmit}
              style={{
                background: isDark ? "linear-gradient(180deg,#071019,#051016)" : "#fff",
                color: isDark ? "#e6eef8" : "#111827",
                borderRadius: 14,
                border: isDark ? "1px solid rgba(255,255,255,0.04)" : "1px solid rgba(15,23,42,0.04)",
                boxShadow: isDark ? "0 8px 30px rgba(2,6,23,0.18)" : "0 10px 30px rgba(2,6,23,0.06)",
                overflow: "hidden",
              }}
            >
              <div className="card-body p-4">
                {error && (
                  <div
                    className="alert alert-danger py-2 mb-3"
                    style={{
                      background: isDark ? "linear-gradient(180deg,#3b1f24,#2a1116)" : undefined,
                      color: isDark ? "#ffd6d6" : undefined,
                      border: isDark ? "1px solid rgba(255,255,255,0.04)" : undefined,
                    }}
                  >
                    {error}
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="est_from" className="form-label small" style={{ color: isDark ? "#e6eef8" : undefined }}>
                      From <span className="text-danger">*</span>
                    </label>
                    <input
                      id="est_from"
                      className="form-control"
                      placeholder="Starting location"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      required
                      style={inputStyle(isDark)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="est_to" className="form-label small" style={{ color: isDark ? "#e6eef8" : undefined }}>
                      To <span className="text-danger">*</span>
                    </label>
                    <input
                      id="est_to"
                      className="form-control"
                      placeholder="Destination"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      required
                      style={inputStyle(isDark)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="est_distance" className="form-label small" style={{ color: isDark ? "#e6eef8" : undefined }}>
                      Approx distance (km) <span className="text-danger">*</span>
                    </label>
                    <input
                      id="est_distance"
                      type="number"
                      min="1"
                      className="form-control"
                      placeholder="e.g. 350"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      required
                      style={inputStyle(isDark)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="est_days" className="form-label small" style={{ color: isDark ? "#e6eef8" : undefined }}>
                      Days (whole days) <span className="text-danger">*</span>
                    </label>
                    <input
                      id="est_days"
                      type="number"
                      min="1"
                      className="form-control"
                      placeholder="1"
                      value={days}
                      onChange={(e) => setDays(e.target.value.replace(/^0+/, ""))}
                      required
                      style={inputStyle(isDark)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="est_bus" className="form-label small" style={{ color: isDark ? "#e6eef8" : undefined }}>
                      Select bus <span className="text-danger">*</span>
                    </label>
                    <select
                      id="est_bus"
                      className="form-select"
                      value={busType}
                      onChange={(e) => setBusType(e.target.value)}
                      required
                      style={selectStyle(isDark)}
                    >
                      <option value="20">20 Seater Mini Bus (Non AC)</option>
                      <option value="32">32 Seater Bus (Non AC)</option>
                      <option value="44">44 Seater Bus (Non AC)</option>
                    </select>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn rounded-pill fw-semibold py-2"
                    style={{
                      backgroundColor: isDark ? "#06b6d4" : "#0b1220",
                      color: "#fff",
                      border: "none",
                      boxShadow: isDark ? "0 10px 30px rgba(6,182,212,0.08)" : undefined,
                    }}
                    disabled={submitting}
                    aria-disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? "Calculating..." : "Get Approx Cost"}
                  </button>
                </div>

                <div className="mt-3 small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
                  *Per-km rates (₹24 / ₹35 / ₹45) apply when eligible. Multi-day bookings enforce a minimum of 300 km/day for billing. DA Permit ₹{DA_PER_DAY}/day.
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: Breakdown + CTA */}
          <div className="col-12 col-lg-5 estimate-right">
            <div
              ref={breakdownRef}
              className="card border-0 p-3"
              style={{
                borderRadius: 14,
                background: isDark ? "linear-gradient(180deg,#061018,#071217)" : "#fff",
                border: isDark ? "1px solid rgba(255,255,255,0.03)" : "1px solid rgba(15,23,42,0.04)",
                boxShadow: isDark ? "0 12px 40px rgba(2,6,23,0.16)" : "0 10px 30px rgba(2,6,23,0.06)",
              }}
            >
              <div className="mb-3">
                <div className="small text-uppercase text-muted">Price Rules</div>
                <div className="fw-semibold" style={{ color: isDark ? "#e6eef8" : "#111827" }}>{busLabel}</div>
                <div className="mt-2 small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
                  Per-km rates apply when eligible. DA Permit: ₹{DA_PER_DAY}/day. Multi-day minimum: 300 km/day (applied to billing).
                </div>
              </div>

              <hr style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(2,6,23,0.06)" }} />

              {!result && <div className="text-muted small" style={{ color: isDark ? "#9fb4c2" : undefined }}>Enter details and click "Get Approx Cost".</div>}

              {result && result.appliesRate && (
                <div>
                  <div className="mb-2 small text-muted">Summary</div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="small text-muted">Base (computed)</div>
                    <div className="fw-semibold" style={{ color: isDark ? "#f8fbff" : undefined }}>{fmt(result.baseCost)}</div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="small text-muted">DA Permit ({result.days} day{result.days > 1 ? "s" : ""})</div>
                    <div className="fw-semibold">{fmt(result.daTotal)}</div>
                  </div>

                  <div className="border-top mt-3 pt-3 d-flex justify-content-between align-items-center">
                    <div className="small text-muted">Estimated Total</div>
                    <div className="fs-5 fw-bold">{fmt(result.total)}</div>
                  </div>

                  <div className="mt-3 d-grid">
                    <a href={phoneNumber} className="btn btn-success rounded-pill" aria-label="Call to confirm booking" style={{ boxShadow: isDark ? "0 12px 40px rgba(16,185,129,0.08)" : undefined }}>
                      📞 Call to Confirm / Book
                    </a>
                  </div>

                  <div className="mt-2 small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
                    {result.message}
                  </div>
                </div>
              )}

              {result && !result.appliesRate && (
                <div>
                  <div className="small text-muted">Custom Quote Required</div>

                  <div className="mt-2" style={{ color: isDark ? "#e6eef8" : "#111827" }}>
                    {result.message}
                  </div>

                  <div className="mt-3 d-flex gap-2">
                    <a href={phoneNumber} className="btn btn-outline-success rounded-pill flex-grow-1" aria-label="Call now" style={{ color: isDark ? "#bdeccd" : undefined, borderColor: isDark ? "rgba(189,236,205,0.12)" : undefined }}>
                      📞 Call Us
                    </a>
                    <button
                      className="btn btn-outline-primary rounded-pill"
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      ✉️ Enquire
                    </button>
                  </div>

                  <div className="mt-3 small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
                    DA Permit shown: {fmt(result.daTotal)}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 small" style={{ color: isDark ? "#9fb4c2" : "#6c757d" }}>
              Note: Final price may vary by route, tolls, waiting time and extras. For firm quotations call us.
            </div>
          </div>
        </div>
      </div>

      {/* Scoped dark-mode fixes (ensures nothing hides) */}
<style>{`
  /* placeholders */
  input::placeholder, textarea::placeholder {
    color: ${isDark ? "rgba(230,238,248,0.42)" : "rgba(108,117,125,0.6)"};
  }

  /* focus rings */
  .form-control:focus, .form-select:focus {
    outline: none;
    box-shadow: 0 6px 26px ${isDark ? "rgba(6,182,212,0.08)" : "rgba(2,6,23,0.06)"};
    border-color: ${isDark ? "#07b7c6" : "#7c8aa3"};
  }

  /* ensure bootstrap form-control backgrounds are overridden */
  .form-control, .form-select {
    background-clip: padding-box;
  }

  /* improve dark alert contrast */
  .alert-danger {
    color: ${isDark ? "#ffd6d6" : ""};
    background: ${isDark ? "linear-gradient(180deg,#3b1f24,#2a1116)" : ""};
    border-color: ${isDark ? "rgba(255,255,255,0.04)" : ""};
  }

  /* card hover lift */
  .estimate-left .card:hover, .estimate-right .card:hover {
    transform: translateY(-6px);
    transition: transform .18s ease, box-shadow .18s ease;
  }

  /* fix select arrow color in dark mode */
  .form-select { color: ${isDark ? "#e6eef8" : "inherit"}; }
  .form-select option { color: ${isDark ? "#0a0a0a" : "inherit"}; } /* OS rendered */

  /* ---------- NEW: force every character white in right section for dark theme ---------- */
  ${isDark ? `
    .estimate-right, .estimate-right * {
      color: #ffffff !important;
      /* keep existing background/borders intact */
    }

    /* keep button backgrounds visible (avoid white-on-white) */
    .estimate-right .btn, .estimate-right .btn * {
      color: inherit !important; /* button text will follow button bg rules */
    }

    /* ensure small muted text is still visible (but white as requested) */
    .estimate-right .small, .estimate-right small {
      color: #ffffff !important;
    }
  ` : ''}

  @media (max-width: 991px) {
    .estimate-left, .estimate-right { padding-left: 0; padding-right: 0; }
  }
`}</style>

    </section>
  );
}

// helper used inside component
function fmt(n) {
  if (n == null) return "-";
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

// inline style helpers to ensure consistent dark backgrounds & borders
function inputStyle(isDark) {
  return {
    backgroundColor: isDark ? "#07181d" : "#fff",
    color: isDark ? "#e6eef8" : "#111827",
    borderColor: isDark ? "rgba(255,255,255,0.08)" : "#dfe6f0",
    boxShadow: isDark ? "inset 0 1px 0 rgba(255,255,255,0.01)" : undefined,
  };
}
function selectStyle(isDark) {
  return {
    backgroundColor: isDark ? "#07181d" : "#fff",
    color: isDark ? "#e6eef8" : "#111827",
    borderColor: isDark ? "rgba(255,255,255,0.08)" : "#dfe6f0",
  };
}
