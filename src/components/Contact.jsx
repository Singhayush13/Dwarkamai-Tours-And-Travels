import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <h2 className="h3 mb-2">Contact Us</h2>
            <p className="text-muted mb-3">
              Share your travel plan and our team will get back to you with the
              best quotation and route suggestions.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">📞 +91-XXXXXXXXXX</li>
              <li className="mb-2">📧 info@dwarkamaitours.com</li>
              <li>📍 Shirdi / Mumbai / Pune, Maharashtra</li>
            </ul>
          </div>
          <div className="col-lg-7">
            <form className="card shadow-sm border-0">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Travel Details</label>
                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Date, route, number of passengers..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
