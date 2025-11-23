import React, { useEffect, useState } from "react";

const slides = [
  "Shirdi Darshan Packages",
  "Mumbai – Pune Weekend Trips",
  "Corporate Group Bookings",
  "Family Functions & Weddings",
];

const SliderSection = ({ theme }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  const isDark = theme === "dark";

  return (
    <section className="py-4">
      <div className="container">
        <h2 className="h4 mb-3">Popular Tours &amp; Services</h2>
        <div
          className={`card border-0 ${
            isDark ? "bg-secondary bg-opacity-25" : "bg-white"
          } shadow-sm`}
        >
          <div className="card-body text-center">
            <h3 className="h5 mb-0">{slides[index]}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
