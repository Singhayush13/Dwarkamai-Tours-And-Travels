import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeading, SectionHeading, ServiceCards } from "../components/Content";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ServicesPage() {
  usePageMeta("Bus & Car Hire for Events and Group Trips", "Enquire about bus and car hire in Vasai, Nalasopara, Virar, Naigaon, Mumbai and Thane for company bookings, picnics, weddings, pilgrimages and group tours.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="BUS & CAR HIRE IN VASAI, MUMBAI & THANE" title={<>Transport for every<br /><em>occasion.</em></>} description="Enquire about bus and car options for company bookings, picnics, weddings, pilgrim tours and group trips. We mainly serve Vasai, Nalasopara, Virar and Naigaon, with enquiries across Mumbai and Thane." />
        <SectionHeading eyebrow="OUR SERVICES" title="What brings you on the road?" />
        <ServiceCards services={services} />
        <div className="service-note">
          <p className="eyebrow">LOCAL SERVICE AREA</p>
          <h2>Starting near you?</h2>
          <p>Share your pickup point in Vasai, Nalasopara, Virar, Naigaon, Mumbai or Thane, along with your destination and passenger count. The listed fleet includes 20, 32 and 44 seater non-AC buses; ask us about other bus or car options and confirm availability for your dates.</p>
        </div>
        <div className="service-note"><p className="eyebrow">A PERSONAL ENQUIRY</p><h2>Every trip is different.</h2><p>Share the details of your journey. Vehicle availability, route arrangements and pricing are discussed directly with the business.</p><Link className="button button-dark" to="/booking">Start an enquiry <ArrowUpRight size={17} /></Link></div>
      </div>
    </div>
  );
}
