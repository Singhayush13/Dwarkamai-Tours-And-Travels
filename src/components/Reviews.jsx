import React from "react";

const reviews = [
  {
    name: "Rahul Patil",
    text: "Very professional service from Mumbai to Shirdi. Bus was clean and driver was polite.",
    img: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    text: "We booked a 44-seater for a family wedding. Everything was on time and well coordinated.",
    img: "https://i.pravatar.cc/100?img=47",
    rating: 5,
  },
  {
    name: "Corporate Client",
    text: "Used Dwarkamai for our office offsite. Smooth experience end-to-end and professional drivers.",
    img: "https://i.pravatar.cc/100?img=3",
    rating: 4,
  },
];

const Reviews = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="reviews"
      className="py-5"
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: isDark ? "#ffffff" : "#000000" }}
        >
          What Our Customers Say
        </h2>

        <div className="row g-4">
          {reviews.map((r, i) => (
            <div className="col-md-4" key={i}>
              <div
                className="card h-100 border-0 shadow-sm p-3"
                style={{
                  backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
                  color: isDark ? "#ffffff" : "#000000",
                  borderRadius: "14px",
                  border: isDark ? "1px solid #333" : "1px solid #e5e5e5",
                }}
              >
                {/* Image + Name */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="rounded-circle"
                    style={{ width: 55, height: 55, objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{r.name}</h6>
                    <small style={{ color: isDark ? "#9ca3af" : "#6c757d" }}>
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
                        color: idx < r.rating ? "#ffc107" : isDark ? "#555" : "#e4e5e9",
                        fontSize: "1.1rem",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="fst-italic"
                  style={{ color: isDark ? "#bfbfbf" : "#6c757d" }}
                >
                  “{r.text}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
