import React from "react";

import ayushImg from "../assets/ayush.jpg";
import jitendraImg from "../assets/Jitendra.jpg";
import satyamImg from "../assets/Satyam.jpg";

const reviews = [
  {
    name: "Ayush Singh",
    text: "Having a great experience with them — buses are very well maintained and extremely clean. Highly reliable service!",
    img: ayushImg,
    rating: 5,
  },
  {
    name: "Jitendra Verma",
    text: "Bus quality is good and the services are excellent. Smooth and hassle-free travel experience.",
    img: jitendraImg,
    rating: 5,
  },
  {
    name: "Satyam Choudhary",
    text: "Exceptional service from start to finish. The team is punctual, supportive and the buses are always in top condition.",
    img: satyamImg,
    rating: 5,
  },
];


const Reviews = ({ theme }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "#050505" : "#f9fafb";
  const heading = isDark ? "#ffffff" : "#0b1220";
  const cardBg = isDark
    ? "rgba(255,255,255,0.05)"
    : "#ffffff";
  const cardBorder = isDark
    ? "1px solid rgba(255,255,255,0.06)"
    : "1px solid #e5e7eb";
  const reviewText = isDark ? "#cbd5e1" : "#475569";

  return (
    <section id="reviews" className="py-5" style={{ backgroundColor: bg }}>
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              color: heading,
              fontSize: "2rem",
              letterSpacing: "0.3px",
            }}
          >
            What Our Customers Say
          </h2>

          {/* Underline accent */}
          <div
            style={{
              width: 60,
              height: 3,
              background: isDark ? "#06b6d4" : "#0b1220",
              margin: "10px auto 0",
              borderRadius: 20,
            }}
          ></div>
        </div>

        {/* Reviews Grid */}
        <div className="row g-4">
          {reviews.map((r, i) => (
            <div className="col-md-4" key={i}>
              <div
                className="card h-100 p-4 border-0"
                style={{
                  background: cardBg,
                  backdropFilter: isDark ? "blur(6px)" : "none",
                  color: heading,
                  border: cardBorder,
                  borderRadius: 16,
                  transition: "0.25s ease",
                  boxShadow: isDark
                    ? "0 8px 30px rgba(0,0,0,0.4)"
                    : "0 8px 20px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                {/* User */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="rounded-circle"
                    style={{
                      width: 58,
                      height: 58,
                      objectFit: "cover",
                      border:
                        isDark
                          ? "2px solid rgba(255,255,255,0.1)"
                          : "2px solid #e5e7eb",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-semibold" style={{ fontSize: "1rem" }}>
                      {r.name}
                    </h6>
                    <small
                      style={{
                        color: isDark ? "#94a3b8" : "#64748b",
                        fontSize: "0.8rem",
                      }}
                    >
                      Verified Customer
                    </small>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <span
                      key={idx}
                      style={{
                        color:
                          idx < r.rating
                            ? "#facc15"
                            : isDark
                            ? "#334155"
                            : "#e5e7eb",
                        fontSize: "1.2rem",
                        marginRight: 2,
                        textShadow:
                          idx < r.rating
                            ? "0 0 8px rgba(250,204,21,0.4)"
                            : "none",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="fst-italic"
                  style={{
                    color: reviewText,
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                >
                  “{r.text}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra styling */}
      <style>{`
        @media (max-width: 768px) {
          #reviews h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;
