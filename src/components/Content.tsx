import { useEffect, useRef, useState } from "react";
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
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../data/services";
import type { Vehicle } from "../data/fleet";
import type { Destination } from "../data/destinations";
import type { TravelPackage } from "../data/packages";
import { gallery as galleryItems } from "../data/gallery";

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
            <span className="service-icon"><Icon size={22} strokeWidth={1.7} /></span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link className="card-link" to={`/booking?type=${encodeURIComponent(service.title)}`}>
              Enquire about this <ArrowUpRight size={16} />
            </Link>
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
          <img src={destination.image} alt={`Coach for group travel to ${destination.name}`} loading="lazy" />
          <div className="destination-overlay" />
          <div className="destination-content">
            <span className="destination-type"><MapPin size={13} /> {destination.category}</span>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <Link className="destination-link" to={`/booking?destination=${encodeURIComponent(destination.name)}`}>
              Plan this journey <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function PackageCards({ packages }: { packages: TravelPackage[] }) {
  return (
    <div className="card-grid package-grid">
      {packages.map((travelPackage, index) => (
        <motion.article
          className="package-card"
          key={travelPackage.slug}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <div className="package-photo">
            <img src={travelPackage.image} alt={`Coach for ${travelPackage.name}`} loading="lazy" />
            <span><Route size={14} /> {travelPackage.destination}</span>
          </div>
          <div className="package-content">
            <p className="eyebrow">TRIP IDEA</p>
            <h3>{travelPackage.name}</h3>
            <p>{travelPackage.description}</p>
            <div className="package-links">
              <Link className="text-link" to={`/packages/${travelPackage.slug}`}>View details <ArrowUpRight size={15} /></Link>
              <Link className="card-link" to={`/booking?package=${encodeURIComponent(travelPackage.name)}`}>Enquire now <ArrowUpRight size={15} /></Link>
            </div>
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

export function GalleryGrid({
  filteredCategory,
  showFilters = true,
}: {
  filteredCategory?: string;
  showFilters?: boolean;
}) {
  const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];
  const [category, setCategory] = useState(filteredCategory ?? "All");
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const filtered = galleryItems
    .map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter((item) => category === "All" || item.category === category);
  const selectedItem = selected === null ? null : galleryItems[selected];

  useEffect(() => {
    if (selected === null) return;
    dialogRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length);
      if (event.key === "ArrowRight") setSelected((current) => current === null ? null : (current + 1) % galleryItems.length);
      if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (selected !== null) openerRef.current?.focus();
    };
  }, [selected]);

  return (
    <>
      {showFilters && (
        <div className="filter-row" aria-label="Filter gallery">
          {categories.map((item) => (
            <button
              className={`filter-chip${category === item ? " selected" : ""}`}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {filtered.map((item) => (
          <button
            className="gallery-tile"
            key={item.src}
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setSelected(item.originalIndex);
            }}
            type="button"
            aria-label={`Open image: ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span>{item.category} <ArrowUpRight size={15} /></span>
          </button>
        ))}
      </div>
      {selectedItem && selected !== null && (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <div
            ref={dialogRef}
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={(event) => event.stopPropagation()}
            tabIndex={-1}
          >
            <button className="lightbox-close" aria-label="Close image viewer" onClick={() => setSelected(null)} type="button"><X /></button>
            <button className="lightbox-arrow lightbox-prev" aria-label="Previous image" onClick={() => setSelected((selected - 1 + galleryItems.length) % galleryItems.length)} type="button"><ChevronLeft /></button>
            <img src={selectedItem.src} alt={selectedItem.alt} />
            <div className="lightbox-caption">{selectedItem.alt}</div>
            <button className="lightbox-arrow lightbox-next" aria-label="Next image" onClick={() => setSelected((selected + 1) % galleryItems.length)} type="button"><ChevronRight /></button>
          </div>
        </div>
      )}
    </>
  );
}
