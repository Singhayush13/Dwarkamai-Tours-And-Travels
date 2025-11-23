import React from "react";

const Buses = ({ theme }) => {
  const isDark = theme === "dark";

  const buses = [
    { name: "20 Seater Mini Bus", ac: "Non AC", img: "" },
    { name: "32 Seater Bus", ac: "Non AC", img: "" },
    { name: "44 Seater Bus", ac: "Non AC", img: "" },
  ];

  return (
    <section
      id="buses"
      className="py-5"
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
      }}
    >
      <div className="container">
        <h2
          className={`fw-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}
        >
          Buses We Provide
        </h2>

        <p
          className="mb-4"
          style={{
            color: isDark ? "#bfbfbf" : "#6c757d",
            maxWidth: "650px",
          }}
        >
          Choose from our comfortable and well-maintained fleet suitable for
          family, group and corporate travel.
        </p>

        <div className="row g-4">
          {buses.map((bus, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 shadow-sm"
                style={{
                  backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
                  color: isDark ? "#ffffff" : "#000000",
                  borderRadius: "14px",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.20)"
                    : "1px solid #e5e5e5",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 10px 25px rgba(255,255,255,0.08)"
                    : "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 6px 15px rgba(255,255,255,0.05)"
                    : "0 6px 15px rgba(0,0,0,0.08)";
                }}
              >
                {/* Image Area */}
                <div
                  style={{
                    height: "180px",
                    backgroundColor: isDark ? "#1a1a1a" : "#f1f1f1",
                    borderRadius: "14px 14px 0 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                  }}
                >
                  {bus.img ? (
                    <img
                      src={bus.img}
                      alt={bus.name}
                      className="img-fluid h-100 w-100"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <span
                      className="small"
                      style={{
                        color: isDark ? "#9ca3af" : "#6c757d",
                        fontStyle: "italic",
                      }}
                    >
                      (Image Coming Soon)
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="card-body text-center">
                  <h5 className="fw-semibold mb-1">{bus.name}</h5>
                  <small
                    style={{ color: isDark ? "#bfbfbf" : "#6c757d" }}
                  >
                    {bus.ac}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Buses;
