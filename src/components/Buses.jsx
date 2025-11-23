import React from "react";

const Buses = () => {
  const buses = [
    { name: "20 Seater Mini Bus", ac: "Non AC", rate: 250 },
    { name: "32 Seater Bus", ac: "Non AC", rate: 300 },
    { name: "44 Seater Bus", ac: "Non AC", rate: 350 },
  ];

  return (
    <section id="buses" className="py-5 bg-body-tertiary">
      <div className="container">
        <h2 className="h3 mb-2">Buses We Provide</h2>
        <p className="text-muted mb-4">
          Clean interiors, experienced drivers and regular maintenance for a
          smooth journey.
        </p>

        <div className="row g-4">
          {buses.map((bus) => (
            <div className="col-md-4" key={bus.name}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5">{bus.name}</h3>
                  <p className="mb-1">{bus.ac}</p>
                  <p className="fw-semibold text-primary mb-0">
                    Approx. ₹{bus.rate} / km
                  </p>
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
