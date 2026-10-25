import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { contactConfig } from "../config/contact";
import { ContactForm, TripForm } from "../components/Forms";
import { PageHeading } from "../components/Content";
import { usePageMeta } from "../hooks/usePageMeta";

export function ContactPage() {
  usePageMeta("Contact", "Contact Dwarkamai Tours & Travels by phone or prepare a travel enquiry to continue on WhatsApp.");
  return (
    <div className="page-wrap">
      <div className="section-shell">
        <PageHeading eyebrow="LET'S TALK TRAVEL" title={<>A good journey<br />starts with <em>hello.</em></>} description="Have a route in mind or a question about the fleet? Reach us directly, or prepare a message to share when you’re ready." />
        <div className="contact-page-grid">
          <aside className="contact-details">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>We’d love to hear what you’re planning.</h2>
            <a href={contactConfig.phoneLink}><span><Phone size={19} /></span><div><small>CALL US</small><strong>{contactConfig.phoneDisplay}</strong></div></a>
            {contactConfig.whatsappEnabled && <a href={`https://wa.me/${contactConfig.whatsappNumber}`} target="_blank" rel="noreferrer"><span className="whatsapp-icon">W</span><div><small>WHATSAPP</small><strong>Start a conversation</strong></div></a>}
            {contactConfig.email && <a href={`mailto:${contactConfig.email}`}><span><Mail size={19} /></span><div><small>EMAIL</small><strong>{contactConfig.email}</strong></div></a>}
            {contactConfig.location && <div className="contact-location"><span><MapPin size={19} /></span><div><small>LOCATION</small><strong>{contactConfig.location}</strong></div></div>}
            <p className="contact-direct-note">This site doesn’t send or store your enquiry. You choose whether to call or share it through WhatsApp.</p>
          </aside>
          <div><p className="eyebrow form-eyebrow">SEND AN ENQUIRY</p><ContactForm /></div>
        </div>
        <div className="contact-booking-link"><span>Already know your route and dates?</span><Link className="text-link" to="/booking">Use the trip planner <ArrowUpRight size={17} /></Link></div>
      </div>
    </div>
  );
}

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const packageSlug = searchParams.get("package") ?? "";
  const vehicle = searchParams.get("vehicle") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const serviceType = searchParams.get("type") ?? "";
  usePageMeta("Plan Your Trip", "Share your group travel details and review an enquiry before calling or continuing on WhatsApp. No booking is confirmed online.");
  return (
    <div className="page-wrap booking-page">
      <div className="section-shell">
        <PageHeading eyebrow="PLAN YOUR TRIP" title={<>Let’s start with<br />the <em>details.</em></>} description="Share a few trip details to prepare a clear enquiry. Nothing is booked or sent when you fill out this form." />
        <div className="booking-notice"><span>01</span><div><strong>Tell us your plans</strong><p>Enter the route, dates and size of your group.</p></div><span>02</span><div><strong>Review your enquiry</strong><p>Check the summary before you continue.</p></div><span>03</span><div><strong>Talk to us directly</strong><p>We’ll confirm availability and pricing with you.</p></div></div>
        <div className="booking-form-wrap">
          <div className="booking-intro"><p className="eyebrow">TRIP DETAILS</p><h2>Where are you headed?</h2><p>Fields marked as optional can be left blank. Your information stays in this page until you choose to call or share the prepared message.</p></div>
          <TripForm initialPackage={packageSlug} initialVehicle={vehicle} initialDestination={destination} initialTripType={serviceType} />
        </div>
        <p className="booking-help">Prefer to speak to someone first? <a href={contactConfig.phoneLink}>Call {contactConfig.phoneDisplay}</a>.</p>
      </div>
    </div>
  );
}
