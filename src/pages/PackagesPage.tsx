import { ArrowLeft, ArrowUpRight, MapPin, Route } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../components/NotFound";
import { PackageCards, PageHeading } from "../components/Content";
import { packages } from "../data/packages";
import { usePageMeta } from "../hooks/usePageMeta";

export default function PackagesPage() {
  const { slug } = useParams();
  const selected = slug ? packages.find((travelPackage) => travelPackage.slug === slug) : undefined;
  usePageMeta(
    selected?.name ?? "Tour Ideas",
    selected
      ? `${selected.description} Enquire with Dwarkamai Tours & Travels about your travel plans.`
      : "Explore group travel and pilgrimage trip ideas from Dwarkamai Tours & Travels. Contact the business for a personalised quotation.",
  );

  if (slug && selected) {
    return <PackageDetail packageName={selected.name} destination={selected.destination} description={selected.description} image={selected.image} />;
  }
  if (slug) return <NotFoundPage />;

  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="A PLACE TO START" title={<>Ideas for the<br /><em>road ahead.</em></>} description="Explore a few ways to begin planning. These are not fixed itineraries or priced packages; get in touch to discuss the route, dates and details that work for you." />
        <PackageCards packages={packages} />
        <div className="custom-package"><p className="eyebrow">HAVE ANOTHER DESTINATION IN MIND?</p><h2>Your trip can start anywhere.</h2><p>Share your plans and ask us about a custom group journey.</p><Link className="button button-dark" to="/booking">Plan a custom trip <ArrowUpRight size={17} /></Link></div>
      </div>
    </div>
  );
}

function PackageDetail({
  packageName,
  destination,
  description,
  image,
}: {
  packageName: string;
  destination: string;
  description: string;
  image: string;
}) {
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <Link className="back-link" to="/packages"><ArrowLeft size={16} /> All trip ideas</Link>
        <div className="package-detail">
          <img src={image} alt={`Coach for ${packageName}`} fetchPriority="high" />
          <div className="package-detail-copy">
            <p className="eyebrow">TRIP IDEA</p>
            <h1>{packageName}</h1>
            <p className="package-destination"><MapPin size={16} /> {destination}</p>
            <p>{description}</p>
            <div className="package-notice"><Route size={18} /><span>Dates, itinerary, availability and pricing are not set here. Discuss your preferences directly with the business.</span></div>
            <Link className="button button-dark" to={`/booking?package=${encodeURIComponent(packageName)}`}>Enquire about this trip <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
