import { useMemo, useState } from "react";
import { PageHeading, SectionHeading, FleetCards } from "../components/Content";
import { fleet } from "../data/fleet";
import { usePageMeta } from "../hooks/usePageMeta";

export default function FleetPage() {
  const [size, setSize] = useState("All");
  const filtered = useMemo(() => size === "All" ? fleet : fleet.filter((vehicle) => String(vehicle.seats) === size), [size]);
  usePageMeta("20, 32 & 44 Seater Bus Hire", "Explore listed 20, 32 and 44 seater non-AC buses for group trips from Vasai, Nalasopara, Virar, Naigaon, Mumbai and Thane. Ask about car options and availability.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="BUS HIRE IN VASAI, MUMBAI & THANE" title={<>Room for your<br /><em>whole crew.</em></>} description="Explore our listed 20, 32 and 44 seater non-AC buses for company bookings, picnics, weddings, pilgrimages and group trips. Contact us about current availability, other bus types or car options." />
        <SectionHeading eyebrow="COACH OPTIONS" title="Find a fit for your group" />
        <div className="filter-row" aria-label="Filter vehicles by seating capacity">
          {["All", ...fleet.map((vehicle) => String(vehicle.seats))].map((option) => (
            <button className={`filter-chip${size === option ? " selected" : ""}`} key={option} onClick={() => setSize(option)} type="button" aria-pressed={size === option}>
              {option === "All" ? "All vehicles" : `${option} seats`}
            </button>
          ))}
        </div>
        <FleetCards vehicles={filtered} />
        <p className="page-note">The fleet information shown here is limited to the vehicle types and seating capacities listed by the business. Ask us directly about amenities, availability and trip suitability.</p>
      </div>
    </div>
  );
}
