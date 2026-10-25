import { ArrowUpRight, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactConfig } from "../config/contact";
import { navigation } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand brand-inverse" to="/">
            <span className="brand-mark" aria-hidden="true">D</span>
            <span className="brand-name">
              <strong>Dwarkamai</strong>
              <small>Tours &amp; Travels</small>
            </span>
          </Link>
          <p>Group travel, pilgrim journeys and coach hire. Tell us where you’re headed.</p>
        </div>
        <div className="footer-nav">
          <h2>Explore</h2>
          {navigation.slice(1, 7).map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-nav">
          <h2>Information</h2>
          <Link to="/booking">Plan a trip</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
          <Link to="/terms-and-conditions">Terms &amp; conditions</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h2>Start a conversation</h2>
          <p>Availability and pricing are confirmed directly with the business.</p>
          <a className="footer-call" href={contactConfig.phoneLink}>
            <Phone size={17} /> {contactConfig.phoneDisplay}
          </a>
          <Link className="footer-whatsapp" to="/booking">
            Share trip details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {contactConfig.businessName}</span>
        <span className="footer-note">Every journey begins with a conversation.</span>
        <span className="footer-credit">Made with <Heart size={12} fill="currentColor" /> by <strong>Ayush Singh</strong><small>Thoughtfully crafted for journeys worth remembering.</small></span>
      </div>
    </footer>
  );
}
