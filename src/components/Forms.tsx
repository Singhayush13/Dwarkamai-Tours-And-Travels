import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowUpRight, Check, Phone, Send } from "lucide-react";
import { contactConfig, createWhatsAppLink } from "../config/contact";
import { fleet } from "../data/fleet";

const tripSchema = z.object({
  name: z.string().max(100).optional(),
  pickup: z.string().trim().min(2, "Enter your pickup location."),
  destination: z.string().trim().min(2, "Enter your destination."),
  departureDate: z.string().min(1, "Choose a departure date."),
  returnDate: z.string().optional(),
  travellers: z.number({ error: "Enter a valid number of travellers." })
    .int("Use a whole number of travellers.")
    .min(1, "At least one traveller is required.")
    .max(1000, "Enter 1,000 travellers or fewer."),
  tripType: z.enum(["Pilgrimage", "Family trip", "Corporate / event", "Other"]),
  vehicle: z.string().optional(),
  requirements: z.string().max(1000).optional(),
}).superRefine((data, ctx) => {
  const departure = new Date(`${data.departureDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (Number.isNaN(departure.getTime()) || departure < today) {
    ctx.addIssue({ code: "custom", path: ["departureDate"], message: "Departure date cannot be in the past." });
  }
  if (data.returnDate) {
    const returning = new Date(`${data.returnDate}T00:00:00`);
    if (Number.isNaN(returning.getTime()) || returning < departure) {
      ctx.addIssue({ code: "custom", path: ["returnDate"], message: "Return date must be on or after departure." });
    }
  }
});

type TripFormData = z.infer<typeof tripSchema>;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(20)
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, "Enter a valid phone number."),
  email: z.union([z.string().email("Enter a valid email address."), z.literal("")]),
  message: z.string().trim().min(10, "Please share a little more about your enquiry.").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

function formattedDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(`${value}T00:00:00`));
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span className="field-error" id={id}>{message}</span> : null;
}

export function TripForm({
  initialPackage = "",
  initialVehicle = "",
  initialDestination = "",
  initialTripType = "",
}: {
  initialPackage?: string;
  initialVehicle?: string;
  initialDestination?: string;
  initialTripType?: string;
}) {
  const [summary, setSummary] = useState<TripFormData | null>(null);
  const initialTripTypeValue: TripFormData["tripType"] = initialTripType.toLowerCase().includes("pilgrim")
    ? "Pilgrimage"
    : initialTripType.toLowerCase().includes("family")
      ? "Family trip"
      : initialTripType.toLowerCase().includes("corporate")
        ? "Corporate / event"
        : "Other";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripFormData>({
    resolver: zodResolver(tripSchema),
    defaultValues: {
      name: "",
      pickup: "",
      destination: initialDestination,
      departureDate: "",
      returnDate: "",
      travellers: 1,
      tripType: initialTripTypeValue,
      vehicle: initialVehicle,
      requirements: "",
    },
  });

  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  function buildMessage(data: TripFormData): string {
    return [
      `Hello ${contactConfig.businessName},`,
      "",
      "I would like to enquire about a trip.",
      ...(data.name?.trim() ? [`Name: ${data.name.trim()}`] : []),
      `Pickup: ${data.pickup}`,
      `Destination: ${data.destination}`,
      `Departure: ${formattedDate(data.departureDate)}`,
      ...(data.returnDate ? [`Return: ${formattedDate(data.returnDate)}`] : []),
      `Travellers: ${data.travellers}`,
      `Travel type: ${data.tripType}`,
      ...(initialPackage ? [`Package: ${initialPackage}`] : []),
      ...(data.vehicle ? [`Preferred vehicle: ${data.vehicle}`] : []),
      ...(data.requirements?.trim() ? [`Additional requirements: ${data.requirements.trim()}`] : []),
      "",
      "Please contact me regarding availability and pricing.",
    ].join("\n");
  }

  return (
    <div className="form-panel">
      {!summary ? (
        <form className="form-grid" onSubmit={handleSubmit(setSummary)} noValidate>
          {initialPackage && <div className="package-prefill"><Check size={17} /> Enquiring about: <strong>{initialPackage}</strong></div>}
          <label className="field">
            <span>Your name <small>(optional)</small></span>
            <input autoComplete="name" placeholder="Name" {...register("name")} />
            <FieldError id="trip-name-error" message={errors.name?.message} />
          </label>
          <label className="field">
            <span>Pickup location</span>
            <input autoComplete="off" placeholder="Where should the journey begin?" {...register("pickup")} aria-invalid={!!errors.pickup} aria-describedby={errors.pickup ? "pickup-error" : undefined} />
            <FieldError id="pickup-error" message={errors.pickup?.message} />
          </label>
          <label className="field">
            <span>Destination</span>
            <input placeholder="Where are you travelling to?" {...register("destination")} aria-invalid={!!errors.destination} aria-describedby={errors.destination ? "destination-error" : undefined} />
            <FieldError id="destination-error" message={errors.destination?.message} />
          </label>
          <label className="field">
            <span>Departure date</span>
            <input type="date" min={minDate} {...register("departureDate")} aria-invalid={!!errors.departureDate} aria-describedby={errors.departureDate ? "departure-error" : undefined} />
            <FieldError id="departure-error" message={errors.departureDate?.message} />
          </label>
          <label className="field">
            <span>Return date <small>(optional)</small></span>
            <input type="date" min={minDate} {...register("returnDate")} aria-invalid={!!errors.returnDate} aria-describedby={errors.returnDate ? "return-error" : undefined} />
            <FieldError id="return-error" message={errors.returnDate?.message} />
          </label>
          <label className="field">
            <span>Travellers</span>
            <input type="number" min="1" max="1000" {...register("travellers", { valueAsNumber: true })} aria-invalid={!!errors.travellers} aria-describedby={errors.travellers ? "travellers-error" : undefined} />
            <FieldError id="travellers-error" message={errors.travellers?.message} />
          </label>
          <label className="field">
            <span>Travel type</span>
            <select {...register("tripType")}>
              <option>Pilgrimage</option>
              <option>Family trip</option>
              <option>Corporate / event</option>
              <option>Other</option>
            </select>
          </label>
          <label className="field">
            <span>Preferred vehicle <small>(optional)</small></span>
            <select {...register("vehicle")}>
              <option value="">Not sure yet</option>
              {fleet.map((vehicle) => (
                <option key={vehicle.name} value={vehicle.name}>{vehicle.name} ({vehicle.type})</option>
              ))}
            </select>
          </label>
          <label className="field field-wide">
            <span>Additional requirements <small>(optional)</small></span>
            <textarea rows={3} placeholder="Anything else we should know?" {...register("requirements")} />
          </label>
          <div className="form-actions field-wide">
            <button className="button button-dark" type="submit">Review trip details <ArrowUpRight size={17} /></button>
          </div>
        </form>
      ) : (
        <div className="trip-summary" aria-live="polite">
          <div className="summary-heading">
            <span className="summary-check"><Check size={19} /></span>
            <div><p className="eyebrow">YOUR ENQUIRY SUMMARY</p><h3>Review before you reach out</h3></div>
          </div>
          <dl className="summary-list">
            {summary.name?.trim() && <div><dt>Name</dt><dd>{summary.name}</dd></div>}
            <div><dt>Pickup</dt><dd>{summary.pickup}</dd></div>
            <div><dt>Destination</dt><dd>{summary.destination}</dd></div>
            <div><dt>Departure</dt><dd>{formattedDate(summary.departureDate)}</dd></div>
            {summary.returnDate && <div><dt>Return</dt><dd>{formattedDate(summary.returnDate)}</dd></div>}
            <div><dt>Travellers</dt><dd>{summary.travellers}</dd></div>
            <div><dt>Travel type</dt><dd>{summary.tripType}</dd></div>
            {initialPackage && <div><dt>Package</dt><dd>{initialPackage}</dd></div>}
            {summary.vehicle && <div><dt>Vehicle</dt><dd>{summary.vehicle}</dd></div>}
            {summary.requirements?.trim() && <div><dt>Requirements</dt><dd>{summary.requirements}</dd></div>}
          </dl>
          <p className="form-disclaimer">This is an enquiry only. Availability and pricing will be confirmed directly by the business.</p>
          <div className="summary-actions">
            <a className="button button-dark" href={contactConfig.phoneLink}><Phone size={17} /> Call to enquire</a>
            {contactConfig.whatsappEnabled && (
              <a className="button button-whatsapp" href={createWhatsAppLink(buildMessage(summary))} target="_blank" rel="noreferrer">
                Continue on WhatsApp <ArrowUpRight size={17} />
              </a>
            )}
            <button className="button button-quiet" type="button" onClick={() => setSummary(null)}>Edit details</button>
          </div>
          <p className="privacy-note">WhatsApp opens with your message prepared. It is only sent if you choose to send it there.</p>
        </div>
      )}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState<ContactFormData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const contactMessage = submitted
    ? [
        `Hello ${contactConfig.businessName},`,
        "",
        "I have a travel enquiry.",
        `Name: ${submitted.name}`,
        `Phone: ${submitted.phone}`,
        ...(submitted.email ? [`Email: ${submitted.email}`] : []),
        `Message: ${submitted.message}`,
      ].join("\n")
    : "";

  if (submitted) {
    return (
      <div className="form-panel trip-summary" aria-live="polite">
        <div className="summary-heading">
          <span className="summary-check"><Check size={19} /></span>
          <div><p className="eyebrow">READY TO SHARE</p><h3>Thanks, {submitted.name}.</h3></div>
        </div>
        <p className="form-disclaimer">Your enquiry has not been sent or stored. Call us or open WhatsApp to share it directly.</p>
        <div className="summary-actions">
          <a className="button button-dark" href={contactConfig.phoneLink}><Phone size={17} /> Call to continue</a>
          {contactConfig.whatsappEnabled && (
            <a className="button button-whatsapp" href={createWhatsAppLink(contactMessage)} target="_blank" rel="noreferrer">
              Continue on WhatsApp <Send size={16} />
            </a>
          )}
          <button className="button button-quiet" type="button" onClick={() => setSubmitted(null)}>Edit enquiry</button>
        </div>
        <p className="privacy-note">WhatsApp only sends your message after you confirm it in the app.</p>
      </div>
    );
  }

  return (
    <div className="form-panel">
      <form className="form-grid" onSubmit={handleSubmit(setSubmitted)} noValidate>
        <label className="field">
          <span>Name</span>
          <input autoComplete="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
          <FieldError id="contact-name-error" message={errors.name?.message} />
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" autoComplete="tel" placeholder="Your phone number" {...register("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} />
          <FieldError id="contact-phone-error" message={errors.phone?.message} />
        </label>
        <label className="field field-wide">
          <span>Email <small>(optional)</small></span>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
          <FieldError id="contact-email-error" message={errors.email?.message} />
        </label>
        <label className="field field-wide">
          <span>Your message</span>
          <textarea rows={5} placeholder="Tell us a little about your travel plans" {...register("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
          <FieldError id="contact-message-error" message={errors.message?.message} />
        </label>
        <div className="form-actions field-wide">
          <button className="button button-dark" type="submit">Review enquiry <ArrowUpRight size={17} /></button>
        </div>
      </form>
    </div>
  );
}
