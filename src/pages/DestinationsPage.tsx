import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { DestinationCards, PageHeading } from "../components/Content";
import { destinations } from "../data/destinations";
import { usePageMeta } from "../hooks/usePageMeta";

export default function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(destinations.map((destination) => destination.category))];
  const filtered = useMemo(
    () => destinations.filter((destination) =>
      (category === "All" || destination.category === category)
      && `${destination.name} ${destination.category} ${destination.description}`.toLowerCase().includes(query.trim().toLowerCase()),
    ),
    [category, query],
  );
  usePageMeta("Group Trips, Pilgrimages & Outings", "Explore group travel enquiries from Vasai–Virar to Shirdi, Trimbakeshwar, Imagicaa, Wet'nJoy, Water Kingdom, resorts and more.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="WHERE TO NEXT?" title={<>Good things happen<br />along the <em>way.</em></>} description="Explore pilgrimage visits, city journeys and group outings to theme parks or resorts. Tell us your route, dates and group size to start an enquiry." />
        <div className="destination-tools">
          <label className="search-field">
            <Search size={18} />
            <span className="sr-only">Search destinations</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations" />
          </label>
          <div className="filter-row" aria-label="Filter destinations">
            {categories.map((item) => (
              <button className={`filter-chip${category === item ? " selected" : ""}`} key={item} onClick={() => setCategory(item)} type="button" aria-pressed={category === item}>{item}</button>
            ))}
          </div>
        </div>
        {filtered.length ? <DestinationCards destinations={filtered} /> : <p className="empty-state">No destinations match your search. Try another name or clear your search.</p>}
      </div>
    </div>
  );
}
