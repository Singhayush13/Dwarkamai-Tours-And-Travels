import { Link } from "react-router-dom";
import { PageHeading } from "../components/Content";
import { usePageMeta } from "../hooks/usePageMeta";

export function PrivacyPage() {
  usePageMeta("Privacy Policy", "Learn how this frontend-only travel website handles information you enter into an enquiry form.");
  return (
    <div className="page-wrap legal-page">
      <div className="section-shell">
        <PageHeading eyebrow="YOUR INFORMATION" title={<>Privacy, made<br /><em>straightforward.</em></>} description="This website is a static frontend. It does not provide a booking backend or store form submissions." />
        <article className="legal-copy">
          <p className="eyebrow">LAST UPDATED · OCTOBER 2026</p>
          <h2>Information you enter</h2>
          <p>Trip and contact form details are used in your browser to prepare an enquiry summary and, when selected, a message for WhatsApp. The site does not submit form values to a server or save them in a database or local storage.</p>
          <h2>When you contact the business</h2>
          <p>Choosing the call link opens your device’s phone handler. Choosing WhatsApp opens the WhatsApp service with a prefilled message. Your information is shared only if you proceed with that action; WhatsApp’s own privacy terms then apply.</p>
          <h2>Questions</h2>
          <p>For questions about information you choose to share directly with the business, please contact Dwarkamai Tours &amp; Travels.</p>
          <Link className="text-link" to="/contact">Contact us <span aria-hidden="true">↗</span></Link>
        </article>
      </div>
    </div>
  );
}

export function TermsPage() {
  usePageMeta("Terms & Conditions", "Read terms for using the Dwarkamai Tours & Travels frontend enquiry website.");
  return (
    <div className="page-wrap legal-page">
      <div className="section-shell">
        <PageHeading eyebrow="BEFORE YOU TRAVEL" title={<>A few things<br />to <em>know.</em></>} description="This website helps you prepare a travel enquiry. It is not a reservation or payment service." />
        <article className="legal-copy">
          <p className="eyebrow">LAST UPDATED · OCTOBER 2026</p>
          <h2>Enquiries are not bookings</h2>
          <p>Submitting a form only prepares an enquiry summary in your browser. It does not confirm a booking, vehicle availability, itinerary, schedule or price. The business must confirm the details with you directly.</p>
          <h2>Trip and fleet information</h2>
          <p>Information on this site is provided to help you start a conversation. Vehicle availability, specifications, route arrangements and pricing may need to be confirmed by the business before you make travel plans.</p>
          <h2>Contact links</h2>
          <p>Phone and WhatsApp actions open third-party applications or services. You decide whether to place a call or send a prepared message.</p>
          <Link className="text-link" to="/booking">Prepare a trip enquiry <span aria-hidden="true">↗</span></Link>
        </article>
      </div>
    </div>
  );
}
