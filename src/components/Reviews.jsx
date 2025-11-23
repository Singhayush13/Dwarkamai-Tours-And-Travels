import React from "react";

const reviews = [
  {
    name: "Rahul Patil",
    text: "Very professional service from Mumbai to Shirdi. Bus was clean and driver was polite.",
  },
  {
    name: "Sneha Kulkarni",
    text: "We booked 44 seater for our family wedding. Everything was on time and well coordinated.",
  },
  {
    name: "Corporate Client",
    text: "Used Dwarkamai for our office offsite. Smooth experience from booking to drop.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-5">
      <div className="container">
        <h2 className="h3 mb-4">What Our Customers Say</h2>
        <div className="row g-4">
          {reviews.map((r, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <p className="fst-italic mb-3">“{r.text}”</p>
                  <p className="fw-semibold mb-0">— {r.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
