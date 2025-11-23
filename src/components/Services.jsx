import React from "react";
import { Briefcase, PeopleFill, Compass } from "react-bootstrap-icons";

const Services = ({ theme }) => {
  const isDark = theme === "dark";

  const items = [
    {
      title: "Pilgrim Tours",
      text: "Shirdi, Shani Shingnapur, Trimbakeshwar and more – curated one-day and multi-day packages.",
      icon: <Compass size={32} />,
    },
    {
      title: "Corporate & Events",
      text: "Transport for corporate trips, team outings and conferences with punctual, reliable service.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Family Functions",
      text: "Wedding events, celebrations, school trips – flexible and hassle-free group travel options.",
      icon: <PeopleFill size={32} />,
    },
  ];

  return (
    <section
      id="services"
      className="py-5"
      style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
    >
      <div className="container text-center">
        <h2 className={`fw-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}>
          Our Services
        </h2>

        <p
          className="mb-4"
          style={{
            maxWidth: "650px",
            margin: "auto",
            color: isDark ? "#bfbfbf" : "#6c757d",
          }}
        >
          Dwarkamai Tours & Travels is committed to providing safe, comfortable and 
          well-organized travel services across Maharashtra for families, groups and companies.
        </p>

        <div className="row g-4 pt-2">
          {items.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 py-4 px-3 shadow-sm"
                style={{
                  backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
                  border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid #e5e5e5",
                  borderRadius: "14px",
                  transition: "0.3s",
                  color: isDark ? "#ffffff" : "#000000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 10px 30px rgba(255,255,255,0.08)"
                    : "0 10px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 6px 18px rgba(255,255,255,0.03)"
                    : "0 6px 18px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    color: isDark ? "#ffffff" : "#0d6efd",
                  }}
                >
                  {service.icon}
                </div>

                <h5 className="fw-semibold">{service.title}</h5>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                    color: isDark ? "#bfbfbf" : "#6c757d",
                  }}
                >
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
