import { ArrowUpRight, BriefcaseBusiness, Landmark, Route, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeading, SectionHeading } from "../components/Content";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";

const serviceIcons = [Landmark, BriefcaseBusiness, UsersRound, Route];

export default function ServicesPage() {
  usePageMeta(
    "Group Transport for Events, Picnics & Pilgrimages",
    "Enquire about group bus and car travel from Vasai, Nalasopara, Virar, Naigaon, Mumbai and Thane for pilgrimages, corporate outings, weddings and picnics.",
  );
  return (
    <div className="page-wrap services-page">
      <div className="section-shell">
        <PageHeading
          eyebrow="BUS & CAR HIRE IN VASAI, MUMBAI & THANE"
          title={<>The right journey<br />starts with <em>your occasion.</em></>}
          description="From a temple visit to a company outing, tell us where your group is going. We mainly serve Vasai, Nalasopara, Virar and Naigaon, with travel enquiries across Mumbai and Thane."
        />
        <SectionHeading
          eyebrow="WAYS TO TRAVEL TOGETHER"
          title="Transport planned around your group"
          description="These are the occasions the business lists for travel enquiries. Routes, vehicle options and availability are discussed individually."
        />
        <div className="service-detail-list">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article className={`service-detail${index % 2 ? " reverse" : ""}`} key={service.title}>
                <div className="service-detail-image">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                  {service.photoNote && <span>{service.photoNote}</span>}
                </div>
                <div className="service-detail-copy">
                  <p className="eyebrow"><Icon size={15} /> SERVICE {String(index + 1).padStart(2, "0")}</p>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="service-detail-facts">
                    <div><small>SUITABLE FOR</small><p>{service.audience}</p></div>
                    <div><small>TO HELP PLAN</small><p>{service.planningNote}</p></div>
                  </div>
                  {service.imageCredit && (
                    <small className="service-detail-credit">
                      <a href={service.imageCredit.href} target="_blank" rel="noreferrer">{service.imageCredit.label}</a>
                      {service.imageCredit.licenseLabel && service.imageCredit.licenseHref && (
                        <> · <a href={service.imageCredit.licenseHref} target="_blank" rel="noreferrer">{service.imageCredit.licenseLabel}</a></>
                      )}
                    </small>
                  )}
                  <Link className="button button-dark" to={`/booking?type=${encodeURIComponent(service.title)}`}>
                    Enquire about this trip <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="service-note service-fleet-note">
          <p className="eyebrow">VEHICLE OPTIONS</p>
          <h2>Not sure what fits?</h2>
          <p>The website lists 20, 32 and 44 seater non-AC buses. Ask about car or other vehicle options, seating suitability, amenities and availability for your dates.</p>
          <Link className="button button-dark" to="/fleet">Explore the listed fleet <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </div>
  );
}
