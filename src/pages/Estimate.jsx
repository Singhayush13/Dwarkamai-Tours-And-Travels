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

  const isDark = theme === "dark";

  const busLabel =
    busType === "20"
      ? "20 Seater Mini Bus (Non AC)"
      : busType === "32"
      ? "32 Seater Bus (Non AC)"
      : "44 Seater Bus (Non AC)";

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <h1 className="h3 mb-3">Get Approx Cost</h1>
            <p className="text-muted mb-4">
              Enter your pickup and drop locations and approximate distance.
              Cost will be calculated based on selected bus type.
            </p>

            <form className="card border-0 shadow-sm" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">From</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Starting Location"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
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
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Bus</label>
                  <select
                    className="form-select"
                    value={busType}
                    onChange={(e) => setBusType(e.target.value)}
                  >
                    <option value="20">20 Seater Mini Bus (Non AC)</option>
                    <option value="32">32 Seater Bus (Non AC)</option>
                    <option value="44">44 Seater Bus (Non AC)</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Get Approx Cost
                </button>

                {approxCost !== null && (
                  <div
                    className={`mt-3 p-3 rounded ${
                      isDark ? "bg-secondary bg-opacity-25" : "bg-light"
                    }`}
                  >
                    <h3 className="h6 mb-2">Estimated Cost</h3>
                    <p className="mb-1">
                      For <strong>{distance} km</strong> with{" "}
                      <strong>{busLabel}</strong>:
                    </p>
                    <p className="fs-5 fw-bold mb-1">
                      Approx. ₹
                      {approxCost.toLocaleString("en-IN")}
                    </p>
                    <p className="small text-muted mb-0">
                      *This is an approximate cost. Final price will depend on
                      exact route, tolls, timings and other conditions.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="col-lg-5">
            <h2 className="h5 mb-3">Route Map (Preview)</h2>
            <p className="text-muted mb-3">
              Later you can integrate Google Maps / Mapbox here to auto-calc
              distance. For now, this is a visual placeholder.
            </p>
            <div className="card shadow-sm border-0">
              <div className="ratio ratio-4x3">
                <iframe
                  title="Route Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.610403956644!2d73.793!3d19.765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd1fb6d6c2d4d5%3A0x993ba80e5c1c63e9!2sShirdi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                  loading="lazy"
                  style={{ border: 0 }}
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
