import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeading, SectionHeading, ServiceCards } from "../components/Content";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ServicesPage() {
  usePageMeta("Travel Services", "Explore pilgrim tours, group coach hire, corporate and family travel services from Dwarkamai Tours & Travels.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="TRAVEL YOUR WAY" title={<>The right journey<br />for every <em>occasion.</em></>} description="From pilgrim journeys to family functions and group outings, tell us about your plans and we’ll help you explore the options." />
        <SectionHeading eyebrow="OUR SERVICES" title="What brings you on the road?" />
        <ServiceCards services={services} />
        <div className="service-note"><p className="eyebrow">A PERSONAL ENQUIRY</p><h2>Every trip is different.</h2><p>Share the details of your journey. Vehicle availability, route arrangements and pricing are discussed directly with the business.</p><Link className="button button-dark" to="/booking">Start an enquiry <ArrowUpRight size={17} /></Link></div>
      </div>
    </div>
  );
}
