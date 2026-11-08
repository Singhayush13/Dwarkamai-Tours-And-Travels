import { ArrowDown, ArrowUpRight, Check, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBus from "../assets/dwarkamai-bus-side.jpeg";
import { DestinationCards, FaqList, FleetCards, PackageCards, SectionHeading, ServiceCards } from "../components/Content";
import { faqs } from "../data/faqs";
import { fleet } from "../data/fleet";
import { featuredDestinations } from "../data/destinations";
import { packages } from "../data/packages";
import { services } from "../data/services";
import { gallery } from "../data/gallery";
import { usePageMeta } from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta("Bus & Car Hire in Vasai, Mumbai & Thane", "Dwarkamai Tours & Travels offers bus and car hire enquiries in Vasai, Nalasopara, Virar, Naigaon, Mumbai and Thane for company bookings, picnics, weddings, pilgrimages and group trips.");

  return (
    <>
      <section className="hero">
        <div className="hero-texture" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> YOUR JOURNEY, THOUGHTFULLY PLANNED</p>
            <h1>Bus &amp; car hire<br />for every <em>journey.</em></h1>
            <p className="hero-description">
              Bus and car hire enquiries from Vasai, Nalasopara, Virar and Naigaon across Mumbai and Thane. Plan company trips, picnics, weddings, pilgrimages and more.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/fleet">Explore our fleet <ArrowUpRight size={17} /></Link>
              <Link className="hero-secondary" to="/booking">Plan your trip <MoveRight size={17} /></Link>
            </div>
            <div className="hero-footnote"><Check size={15} /> Enquire directly for availability and pricing</div>
          </div>
          <div className="hero-art">
            <div className="hero-image-wrap">
              <img src={heroBus} alt="Dwarkamai coach photographed at its travel depot" fetchPriority="high" />
              <div className="hero-image-wash" />
            </div>
            <div className="hero-art-caption"><span className="caption-dot" /> Journeys made for your group</div>
          </div>
        </div>
        <a className="scroll-hint" href="#intro"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
        <span className="hero-coordinate">MAHARASHTRA · INDIA</span>
      </section>

      <section className="intro-section" id="intro">
        <div className="section-shell intro-grid">
          <div className="intro-index"><span>01</span><i /></div>
          <div>
            <p className="eyebrow">TRAVEL, WITH A LITTLE MORE THOUGHT</p>
            <h2>Space for the people.<br /><em>Room for the journey.</em></h2>
          </div>
          <div className="intro-copy">
            <p>From Vasai, Nalasopara, Virar and Naigaon to Mumbai, Thane and destinations beyond, enquire about bus or car travel for your group.</p>
            <Link className="text-link" to="/about">A little about us <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="section-shell">
          <SectionHeading eyebrow="WHAT WE CAN HELP WITH" title="A journey for every occasion" description="Tell us what brings your group together. We’ll help you explore the right travel option." link={{ label: "All services", to: "/services" }} />
          <ServiceCards services={services} />
        </div>
      </section>

      <section className="section-block">
        <div className="section-shell">
          <SectionHeading eyebrow="TRAVEL TOGETHER" title="Places worth the journey" description="From temple visits to theme parks, resorts and picnics, explore ideas for your next group outing." link={{ label: "Explore destinations", to: "/destinations" }} />
          <DestinationCards destinations={featuredDestinations} />
        </div>
      </section>

      <section className="section-block fleet-section">
        <div className="section-shell">
          <SectionHeading eyebrow="THE FLEET" title="Choose your kind of comfort" description="Our listed fleet includes 20, 32 and 44 seater non-AC buses. Ask us about other bus or car options, current availability and suitability for your trip." link={{ label: "View our fleet", to: "/fleet" }} />
          <FleetCards vehicles={fleet} />
        </div>
      </section>

      <section className="section-block why-section">
        <div className="section-shell why-layout">
          <div className="why-heading">
            <p className="eyebrow">WHY DWARKAMAI</p>
            <h2>Thoughtful travel<br />starts with the <em>details.</em></h2>
            <p>We make it straightforward to share what you need and discuss your journey directly.</p>
            <Link className="text-link" to="/about">Our approach <ArrowUpRight size={17} /></Link>
          </div>
          <div className="why-points">
            <article><span>01</span><div><h3>Options for groups</h3><p>Compare our listed 20, 32 and 44 seater non-AC buses for your group.</p></div></article>
            <article><span>02</span><div><h3>For every occasion</h3><p>Enquire about company bookings, picnics, weddings, pilgrimages and family trips.</p></div></article>
            <article><span>03</span><div><h3>Experienced, non-drinking drivers</h3><p>Our business provides highly experienced drivers who do not drink. Contact us to discuss your journey requirements.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="section-shell">
          <SectionHeading
            eyebrow="LOCAL BUS & CAR HIRE"
            title="Serving Vasai, Nalasopara, Virar, Naigaon, Mumbai & Thane"
            description="Dwarkamai Tours & Travels is based in Vasai and takes enquiries for local and outstation group journeys. Tell us your pickup location, destination, date and passenger count so we can discuss the right vehicle."
            link={{ label: "Check availability", to: "/booking" }}
          />
          <p>Whether you need a 44 seater bus for a company outing, guest transport for a wedding, a vehicle for a picnic, or a car for a smaller group, contact us to discuss options. Vehicle type, availability, route arrangements and pricing are confirmed directly with the business.</p>
        </div>
      </section>

      <section className="route-band">
        <div className="section-shell route-layout">
          <div className="route-copy">
            <p className="eyebrow">A ROUTE THAT’S YOURS</p>
            <h2>Make the way<br />part of the <em>memory.</em></h2>
            <p>Whether it’s a pilgrimage or a group outing, start with the places you want to go. Share your plan and enquire about the journey.</p>
            <Link className="button button-gold" to="/booking">Start planning <ArrowUpRight size={17} /></Link>
          </div>
          <div className="route-map" aria-label="Illustrated travel route">
            <svg viewBox="0 0 620 280" role="img" aria-labelledby="route-title">
              <title id="route-title">An illustrated route connecting destinations</title>
              <path className="route-dash" d="M65 212 C140 212 120 91 239 105 S347 238 421 148 S517 71 557 80" />
              <circle className="route-stop" cx="65" cy="212" r="7" />
              <circle className="route-stop" cx="239" cy="105" r="7" />
              <circle className="route-stop" cx="421" cy="148" r="7" />
              <circle className="route-stop" cx="557" cy="80" r="7" />
            </svg>
            <span className="route-label route-label-one">Your starting point</span>
            <span className="route-label route-label-two">Shirdi</span>
            <span className="route-label route-label-three">A stop along the way</span>
            <span className="route-label route-label-four">Your destination</span>
            <span className="route-stamp">GO<br />YOUR<br />OWN WAY</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-shell">
          <SectionHeading eyebrow="TRIP IDEAS" title="Start with an idea" description="These are enquiry starting points, not fixed itineraries. Tell us your dates and preferences for a conversation." link={{ label: "See all trip ideas", to: "/packages" }} />
          <PackageCards packages={packages.slice(0, 2)} />
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="section-shell">
          <SectionHeading eyebrow="A LOOK AT THE JOURNEY" title="A few frames from our fleet" description="See the coaches and vehicles featured in our travel photos." link={{ label: "Visit the gallery", to: "/gallery" }} />
          <div className="gallery-preview-grid">
            {gallery.slice(0, 3).map((item) => (
              <Link className="gallery-preview-tile" key={item.src} to="/gallery">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span>{item.category} <ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="section-shell faq-layout">
          <div className="faq-intro">
            <p className="eyebrow">A FEW GOOD TO KNOWS</p>
            <h2>Before you<br /><em>set off.</em></h2>
            <p>Have another question? We’re just a call away.</p>
            <Link className="text-link" to="/contact">Get in touch <ArrowUpRight size={17} /></Link>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="home-contact">
        <div className="section-shell contact-cta">
          <div>
            <p className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</p>
            <h2>Have a place<br />in <em>mind?</em></h2>
            <p>Tell us what you’re planning. We’ll help you take the next step.</p>
          </div>
          <div className="contact-cta-actions">
            <Link className="button button-gold" to="/booking">Plan your trip <ArrowUpRight size={17} /></Link>
            <Link className="contact-cta-link" to="/contact">Or send us an enquiry <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
