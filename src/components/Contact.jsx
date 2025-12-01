// src/components/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { TelephoneFill, EnvelopeFill, GeoAltFill } from "react-bootstrap-icons";
import { gsap } from "gsap";
import { send as emailjsSend } from "@emailjs/browser";

/**
 * EmailJS config
 * Option A (quick): Paste keys below (already provided).
 * Option B (recommended): Use environment variables and pass them via e.g. process.env.REACT_APP_EMAILJS_*
 *
 * Replace the values below if you want to hard-code (quick). For production, use the env approach shown afterward.
 */
const EMAILJS_SERVICE_ID = "service_7w2juiq";
const EMAILJS_TEMPLATE_ID = "template_k53vq7k";
const EMAILJS_PUBLIC_KEY = "Dr-LUbb8FUMcDfsPl"; // public key

export default function Contact({ theme = "light" }) {
  const isDark = theme === "dark";
  const heroRef = useRef(null);
  const submitBtnRef = useRef(null);

  const [form, setForm] = useState({ name: "", phone: "", details: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  // Basic validation
  const validate = () => {
    const { name, phone, details } = form;
    if (!name.trim()) return "Please enter your name.";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) return "Please enter a valid phone number.";
    if (!details.trim()) return "Please share travel details.";
    return null;
  };

  // GSAP intro + button hover listeners
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".contact-left", { x: -36, opacity: 0, duration: 0.75, ease: "power3.out" }, 0);
      tl.from(".contact-right", { x: 36, opacity: 0, duration: 0.75, ease: "power3.out" }, 0.08);
      tl.from(".contact-list li", { y: 10, opacity: 0, stagger: 0.08, duration: 0.45 }, 0.25);
    }, heroRef);

    const btn = submitBtnRef.current;
    let hoverTween;
    const enter = () => (hoverTween = gsap.to(btn, { scale: 1.02, boxShadow: "0 8px 28px rgba(0,0,0,0.12)", duration: 0.18 }));
    const leave = () => hoverTween && hoverTween.reverse();

    if (btn) {
      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("mouseleave", leave);
      btn.addEventListener("focus", enter);
      btn.addEventListener("blur", leave);
    }

    return () => {
      ctx.revert();
      if (btn) {
        btn.removeEventListener("mouseenter", enter);
        btn.removeEventListener("mouseleave", leave);
        btn.removeEventListener("focus", enter);
        btn.removeEventListener("blur", leave);
      }
    };
  }, []);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg(null);
    const err = validate();
    if (err) {
      setStatusMsg({ type: "error", text: err });
      return;
    }

    setLoading(true);
    try {
      // Prepare template params to match your EmailJS template variables (adjust names as required)
      const templateParams = {
        from_name: form.name,
        from_email: form.email || "no-reply@dwarkamaitours.com",
        phone: form.phone,
        message: form.details,
      };

      // Send using emailjs
      await emailjsSend(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      setStatusMsg({ type: "success", text: "Enquiry sent — we'll contact you shortly." });
      setForm({ name: "", phone: "", details: "", email: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatusMsg({
        type: "error",
        text: "Unable to send enquiry right now. Try again or call +91 89997 58984.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={heroRef}
      className="py-5"
      style={{ backgroundColor: isDark ? "#000000" : "#ffffff", color: isDark ? "#ffffff" : "#111827" }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Left Info */}
          <div className="col-lg-5 contact-left">
            <h2 className={`fw-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}>Get in Touch</h2>
            <p className="mb-4" style={{ color: isDark ? "#bfbfbf" : "#6c757d" }}>
              Have a travel plan? Reach out and we’ll help with availability, route suggestions and the best quotation.
            </p>

            <ul className="list-unstyled contact-list">
              <li className="d-flex align-items-center mb-3">
                <TelephoneFill size={20} className={isDark ? "me-3 text-light" : "me-3 text-primary"} />
                <a href="tel:8999758984" className={`text-decoration-none ${isDark ? "text-white" : "text-dark"}`}>
                  +91 89997 58984
                </a>
              </li>
              <li className="d-flex align-items-center mb-3">
                <EnvelopeFill size={20} className={isDark ? "me-3 text-light" : "me-3 text-primary"} />
                <a href="mailto:info@dwarkamaitours.com" className={`text-decoration-none ${isDark ? "text-white" : "text-dark"}`}>
                  info@dwarkamaitours.com
                </a>
              </li>
              <li className="d-flex align-items-start">
                <GeoAltFill size={20} className={isDark ? "me-3 text-light" : "me-3 text-primary"} />
                <span style={{ color: isDark ? "#d1d5db" : "#111827" }}>Vasai, Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="col-lg-7 contact-right">
            <form onSubmit={handleSubmit} className="card shadow-sm border-0"
              style={{
                backgroundColor: isDark ? "#0b0b0b" : "#ffffff",
                color: isDark ? "#ffffff" : "#000000",
                borderRadius: "14px",
                border: isDark ? "1px solid #222" : "1px solid #e5e5e5",
              }}
              aria-describedby="contact-form-status"
            >
              <div className="card-body p-4">
                <h5 className="fw-semibold mb-3">Send us an Enquiry</h5>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="c_name" className="form-label">Name</label>
                    <input id="c_name" name="name" value={form.name} onChange={handleChange} type="text" className="form-control"
                      placeholder="Your Full Name" required
                      style={{ backgroundColor: isDark ? "#0f0f0f" : "#ffffff", color: isDark ? "#ffffff" : "#000000", borderColor: isDark ? "#333" : "#ced4da" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="c_phone" className="form-label">Phone</label>
                    <input id="c_phone" name="phone" value={form.phone} onChange={handleChange} type="tel" className="form-control"
                      placeholder="Mobile Number" required
                      style={{ backgroundColor: isDark ? "#0f0f0f" : "#ffffff", color: isDark ? "#ffffff" : "#000000", borderColor: isDark ? "#333" : "#ced4da" }}
                    />
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label htmlFor="c_email" className="form-label">Email (optional)</label>
                  <input id="c_email" name="email" value={form.email} onChange={handleChange} type="email" className="form-control"
                    placeholder="you@example.com"
                    style={{ backgroundColor: isDark ? "#0f0f0f" : "#ffffff", color: isDark ? "#ffffff" : "#000000", borderColor: isDark ? "#333" : "#ced4da" }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="c_details" className="form-label">Travel Details</label>
                  <textarea id="c_details" name="details" value={form.details} onChange={handleChange} rows="4" className="form-control"
                    placeholder="Pickup location, date, destination, number of passengers..." required
                    style={{ backgroundColor: isDark ? "#0f0f0f" : "#ffffff", color: isDark ? "#ffffff" : "#000000", borderColor: isDark ? "#333" : "#ced4da" }}
                  />
                </div>

                <div className="d-grid">
                  <button ref={submitBtnRef} type="submit" className="btn rounded-pill fw-semibold py-2"
                    style={{ backgroundColor: isDark ? "#ffffff" : "#000000", color: isDark ? "#000000" : "#ffffff", opacity: loading ? 0.8 : 1 }}
                    aria-busy={loading} disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>

                <div id="contact-form-status" className="mt-3" role="status" aria-live="polite">
                  {statusMsg && (
                    <div className={`p-2 rounded ${statusMsg.type === "error" ? "bg-danger text-white" : "bg-success text-white"}`}>
                      {statusMsg.text}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

      <style>{`
        .contact-left .contact-list li svg { min-width: 22px; }
        .card .form-control:focus { outline: none; box-shadow: none; }
        .card { transition: box-shadow .18s ease, transform .12s ease; }
        .card:hover { box-shadow: 0 14px 40px rgba(2,6,23,0.08); transform: translateY(-4px); }
      `}</style>
    </section>
  );
}
