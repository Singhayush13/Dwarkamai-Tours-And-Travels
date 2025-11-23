import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="h3 mb-2">About Us &amp; Our Services</h2>
        <p className="text-muted mb-4">
          Dwarkamai Tours &amp; Travels is a trusted travel partner focused on
          safety, punctuality and comfort. From pilgrim tours to corporate
          outings, we manage end-to-end transportation so that you travel
          stress-free.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Pilgrim Tours</h3>
                <p className="mb-0">
                  Shirdi, Shani Shingnapur, Trimbakeshwar and more – curated
                  one-day and multi-day packages.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Corporate &amp; Events</h3>
                <p className="mb-0">
                  Transport for corporate offsites, team outings and
                  conferences, with punctual and professional service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="h5">Family Functions</h3>
                <p className="mb-0">
                  Wedding functions, family gatherings, school and college
                  trips – flexible, customised packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
