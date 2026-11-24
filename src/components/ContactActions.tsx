import { MessageCircle, Phone } from "lucide-react";
import { contactConfig } from "../config/contact";

export function ContactActions() {
  return (
    <aside className="floating-contact-actions" aria-label="Quick contact">
      {contactConfig.whatsappEnabled && (
        <a
          className="floating-contact-whatsapp"
          href={`https://wa.me/${contactConfig.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Dwarkamai Tours & Travels on WhatsApp"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      )}
      <a className="floating-contact-call" href={contactConfig.phoneLink} aria-label={`Call ${contactConfig.phoneDisplay}`}>
        <Phone size={19} />
        <span>Call</span>
      </a>
    </aside>
  );
}
