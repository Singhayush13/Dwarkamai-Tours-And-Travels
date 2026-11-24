import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  BusFront,
  Landmark,
  MapPin,
  Route,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../data/services";
import type { Vehicle } from "../data/fleet";
import type { Destination } from "../data/destinations";

const serviceIcons = {
  landmark: Landmark,
  briefcase: BriefcaseBusiness,
  users: UsersRound,
  route: Route,
};

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  link?: { label: string; to: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && <Link className="text-link" to={link.to}>{link.label} <ArrowUpRight size={17} /></Link>}
    </div>
  );
}

export function ServiceCards({ services }: { services: Service[] }) {
  return (
    <div className="card-grid service-grid">
      {services.map((service, index) => {
        const Icon = serviceIcons[service.icon];
        return (
          <motion.article
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <div className="service-photo">
              <img src={service.image} alt={service.imageAlt} loading="lazy" />
              {service.photoNote && <span className="service-photo-note">{service.photoNote}</span>}
            </div>
            <div className="service-content">
              <span className="service-icon"><Icon size={22} strokeWidth={1.7} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="card-link" to={`/booking?type=${encodeURIComponent(service.title)}`}>
                Enquire about this <ArrowUpRight size={16} />
              </Link>
              {service.imageCredit && (
                <div className="service-photo-credit">
                  <a href={service.imageCredit.href} target="_blank" rel="noreferrer">{service.imageCredit.label}</a>
                  {service.imageCredit.licenseLabel && service.imageCredit.licenseHref && (
                    <> · <a href={service.imageCredit.licenseHref} target="_blank" rel="noreferrer">{service.imageCredit.licenseLabel}</a></>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export function FleetCards({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <div className="card-grid fleet-grid">
      {vehicles.map((vehicle, index) => (
        <motion.article
          className="vehicle-card"
          key={vehicle.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45, delay: index * 0.07 }}
        >
          <div className="vehicle-photo">
            <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
            <span className="photo-tag"><BusFront size={14} /> {vehicle.type}</span>
          </div>
          <div className="vehicle-content">
            <p className="eyebrow">COACH</p>
            <h3>{vehicle.name}</h3>
            <div className="vehicle-meta"><UsersRound size={16} /> {vehicle.seats} seats</div>
            <Link className="card-link" to={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`}>
              Enquire about this vehicle <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function DestinationCards({ destinations }: { destinations: Destination[] }) {
  return (
    <div className="card-grid destination-grid">
      {destinations.map((destination, index) => (
        <motion.article
          className="destination-card"
          key={destination.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: index % 3 * 0.07 }}
        >
          <img src={destination.image} alt={destination.imageAlt} loading="lazy" />
          <div className="destination-overlay" />
          <div className="destination-content">
            <span className="destination-type"><MapPin size={13} /> {destination.category}</span>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <small className="destination-highlights"><span>TRIP HIGHLIGHT</span>{destination.highlights}</small>
            <Link className="destination-link" to={`/booking?destination=${encodeURIComponent(destination.name)}`}>
              Plan this journey <ArrowUpRight size={16} />
            </Link>
            {destination.photoNote && <small className="destination-photo-note">{destination.photoNote}</small>}
            {destination.imageCredit && (
              <small className="destination-photo-credit">
                <a href={destination.imageCredit.href} target="_blank" rel="noreferrer">{destination.imageCredit.label}</a>
                {destination.imageCredit.licenseLabel && destination.imageCredit.licenseHref && (
                  <> · <a href={destination.imageCredit.licenseHref} target="_blank" rel="noreferrer">{destination.imageCredit.licenseLabel}</a></>
                )}
              </small>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details className="faq-item" key={faq.question} open={index === 0}>
          <summary>{faq.question}<ArrowDownRight size={18} /></summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
