import React, { useState } from "react";

const rates = {
  "20": 250,
  "32": 300,
  "44": 350,
};

const Estimate = ({ theme }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [distance, setDistance] = useState("");
  const [busType, setBusType] = useState("20");
  const [approxCost, setApproxCost] = useState(null);

  const isDark = theme === "dark";

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    const km = parseFloat(distance);
    if (!km || km <= 0) {
      alert("Please enter a valid distance in km.");
      return;
    }
    const rate = rates[busType];
    const cost = km * rate;
    setApproxCost(cost);
  };

  const busLabel =
    busType === "20"
      ? "20 Seater Mini Bus (Non AC)"
      : busType === "32"
      ? "32 Seater Bus (Non AC)"
      : "44 Seater Bus (Non AC)";

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left: Form */}
          <div className="col-lg-7">
            <h1
              className="h3 mb-2 fw-bold"
              style={{ color: isDark ? "#ffffff" : "#000000" }}
            >
              Get Approx Cost
            </h1>
            <p
              className="mb-4"
              style={{ color: isDark ? "#bfbfbf" : "#6c757d" }}
            >
              Enter your pickup, drop location and approximate distance. 
              The estimate is calculated based on the selected bus type.
            </p>

            <form
              className="card border-0 shadow-sm"
              onSubmit={handleSubmit}
              style={{
                backgroundColor: isDark ? "#000000" : "#ffffff",
                color: isDark ? "#ffffff" : "#000000",
                borderRadius: "14px",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.2)"
                  : "1px solid #e5e5e5",
              }}
            >
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label">From</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Starting Location"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    style={{
                      backgroundColor: isDark ? "#111111" : "#ffffff",
                      color: isDark ? "#ffffff" : "#000000",
                      borderColor: isDark ? "#444444" : "#ced4da",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">To</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Destination"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    style={{
                      backgroundColor: isDark ? "#111111" : "#ffffff",
                      color: isDark ? "#ffffff" : "#000000",
                      borderColor: isDark ? "#444444" : "#ced4da",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Approx Distance (km)</label>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    placeholder="e.g. 250"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    style={{
                      backgroundColor: isDark ? "#111111" : "#ffffff",
                      color: isDark ? "#ffffff" : "#000000",
                      borderColor: isDark ? "#444444" : "#ced4da",
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Select Bus</label>
                  <select
                    className="form-select"
                    value={busType}
                    onChange={(e) => setBusType(e.target.value)}
                    style={{
                      backgroundColor: isDark ? "#111111" : "#ffffff",
                      color: isDark ? "#ffffff" : "#000000",
                      borderColor: isDark ? "#444444" : "#ced4da",
                    }}
                  >
                    <option value="20">20 Seater Mini Bus (Non AC)</option>
                    <option value="32">32 Seater Bus (Non AC)</option>
                    <option value="44">44 Seater Bus (Non AC)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn w-100 rounded-pill fw-semibold py-2 mb-2"
                  style={{
                    backgroundColor: isDark ? "#ffffff" : "#000000",
                    color: isDark ? "#000000" : "#ffffff",
                  }}
                >
                  Get Approx Cost
                </button>

                {approxCost !== null && (
                  <div
                    className="mt-3 p-3 rounded"
                    style={{
                      borderRadius: "10px",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.2)"
                        : "1px solid #e5e5e5",
                      backgroundColor: isDark ? "#050505" : "#f8f9fa",
                    }}
                  >
                    <h3 className="h6 mb-2">Estimated Cost</h3>
                    <p className="mb-1">
                      For <strong>{distance} km</strong> with{" "}
                      <strong>{busLabel}</strong>:
                    </p>
                    <p className="fs-5 fw-bold mb-1">
                      Approx. ₹{approxCost.toLocaleString("en-IN")}
                    </p>
                    <p
                      className="small mb-0"
                      style={{ color: isDark ? "#9ca3af" : "#6c757d" }}
                    >
                      *This is an approximate cost. Final price may vary based
                      on exact route, tolls, waiting time and other conditions.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right: Map / Info */}
          <div className="col-lg-5">
            <h2
              className="h5 mb-2 fw-semibold"
              style={{ color: isDark ? "#ffffff" : "#000000" }}
            >
              Route Map (Preview)
            </h2>
            <p
              className="mb-3"
              style={{ color: isDark ? "#bfbfbf" : "#6c757d" }}
            >
              Later you can integrate Google Maps / Mapbox to auto-calculate
              distance between your selected locations.
            </p>

            <div
              className="card shadow-sm border-0"
              style={{
                backgroundColor: isDark ? "#000000" : "#ffffff",
                borderRadius: "14px",
                border: isDark
                  ? "1px solid rgba(255,255,255,0.2)"
                  : "1px solid #e5e5e5",
              }}
            >
              <div className="ratio ratio-4x3">
                <iframe
                  title="Route Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.610403956644!2d73.793!3d19.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1fb6d6c2d4d5%3A0x993ba80e5c1c63e9!2sShirdi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                  loading="lazy"
                  style={{ border: 0, borderRadius: "14px" }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;
