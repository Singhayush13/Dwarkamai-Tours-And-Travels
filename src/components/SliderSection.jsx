import React, { useEffect, useState } from "react";

const slides = [
  "Shirdi Darshan Packages",
  "Mumbai – Pune Weekend Trips",
  "Corporate Group Bookings",
  "Family Functions & Weddings",
];

const SliderSection = ({ theme }) => {
  const [index, setIndex] = useState(0);
  const isDark = theme === "dark";

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-4">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Popular Tours &amp; Services</h2>
          <small
            className={isDark ? "text-secondary" : "text-muted"}
            style={{ letterSpacing: ".06em", textTransform: "uppercase" }}
          >
            Handpicked For You
          </small>
        </div>

        {/* Main box */}
        <div
          className={`card border-0 shadow-sm ${
            isDark ? "bg-black text-light" : "bg-white text-dark"
          }`}
          style={{
            borderRadius: "14px",
          }}
        >
          <div className="card-body text-center py-4">
            {/* Badge */}
            <span
              className="badge rounded-pill px-3 py-1 mb-3"
              style={{
                fontSize: "0.75rem",
                backgroundColor: isDark ? "#1f1f1f" : "#000",
                color: "#fff",
              }}
            >
              Featured
            </span>

            {/* Slide Title */}
            <h3
              className="h5 mb-3"
              style={{
                fontWeight: "600",
                letterSpacing: ".5px",
              }}
            >
              {slides[index]}
            </h3>

            {/* Description */}
            <p
              className="mb-4"
              style={{
                fontSize: "0.9rem",
                color: isDark ? "#b5b7bb" : "#6b7280",
              }}
            >
              Trusted routes with clean buses, professional drivers and
              affordable packages.
            </p>

            {/* Indicators */}
            <div className="d-flex justify-content-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="btn p-0 border-0"
                  style={{
                    width: i === index ? 22 : 10,
                    height: 10,
                    borderRadius: "50px",
                    backgroundColor: isDark
                      ? i === index
                        ? "white"
                        : "#555"
                      : i === index
                      ? "black"
                      : "#ddd",
                    transition: "0.25s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
